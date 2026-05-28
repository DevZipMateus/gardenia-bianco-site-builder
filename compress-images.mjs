import sharp from "sharp";
import { readdir, stat, rename, unlink } from "fs/promises";
import { join, extname } from "path";

const ROOT = "src/assets";
const MIN_SIZE = 150 * 1024; // 150KB
let savedTotal = 0;
let count = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else await maybeCompress(p);
  }
}

async function maybeCompress(file) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return;
  const s = await stat(file);
  if (s.size < MIN_SIZE) return;
  const tmp = file + ".tmp";
  try {
    const img = sharp(file).rotate();
    const meta = await img.metadata();
    // Resize huge dimensions
    const maxDim = 1600;
    let pipeline = img;
    if ((meta.width || 0) > maxDim || (meta.height || 0) > maxDim) {
      pipeline = pipeline.resize({ width: maxDim, height: maxDim, fit: "inside", withoutEnlargement: true });
    }
    if (ext === ".png") {
      // Only re-encode PNG; keep alpha if any
      pipeline = pipeline.png({ compressionLevel: 9, quality: 80, palette: true, effort: 8 });
    } else {
      pipeline = pipeline.jpeg({ quality: 75, mozjpeg: true, progressive: true });
    }
    await pipeline.toFile(tmp);
    const ns = await stat(tmp);
    if (ns.size < s.size * 0.95) {
      await rename(tmp, file);
      savedTotal += s.size - ns.size;
      count++;
      console.log(`${file}: ${(s.size/1024).toFixed(0)}KB -> ${(ns.size/1024).toFixed(0)}KB`);
    } else {
      await unlink(tmp);
    }
  } catch (err) {
    try { await unlink(tmp); } catch {}
    console.warn("skip", file, err.message);
  }
}

await walk(ROOT);
console.log(`\nCompressed ${count} files. Saved ${(savedTotal/1024/1024).toFixed(2)} MB`);
