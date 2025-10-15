import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";

// Import images
import midia7 from "@/assets/gallery/midia_7.jpg";
import midia8 from "@/assets/gallery/midia_8.jpg";
import midia9 from "@/assets/gallery/midia_9.jpg";
import midia10 from "@/assets/gallery/midia_10.jpg";
import midia11 from "@/assets/gallery/midia_11.jpg";
import midia12 from "@/assets/gallery/midia_12.png";
import midia13 from "@/assets/gallery/midia_13.png";
import midia14 from "@/assets/gallery/midia_14.png";
import midia15 from "@/assets/gallery/midia_15.png";
import scrubFeminino from "@/assets/gallery/scrub_feminino.jpg";
import scrubMasculino from "@/assets/gallery/scrub_masculino.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: midia7, alt: "Jaleco modelo Johana - detalhes e acabamento" },
    { src: midia8, alt: "Jaleco modelo Lilith - design exclusivo" },
    { src: midia9, alt: "Jaleco modelo Morgana - tecido premium" },
    { src: midia10, alt: "Jaleco modelo Athena - versatilidade e estilo" },
    { src: midia11, alt: "Jaleco modelo Ellis - detalhes personalizados" },
    { src: midia12, alt: "Jaleco modelo Acácia - elegância profissional" },
    { src: midia13, alt: "Jaleco modelo Albeus - conforto e funcionalidade" },
    { src: midia14, alt: "Jaleco modelo Antonin - design moderno" },
    { src: midia15, alt: "Nossos clientes satisfeitos" },
    { src: scrubFeminino, alt: "Scrub feminino slim - modelagem exclusiva" },
    { src: scrubMasculino, alt: "Scrub masculino - conforto e estilo profissional" },
  ];

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossa galeria
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira nossos modelos exclusivos e a qualidade dos nossos produtos
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {images.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card 
                          className="cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 border-border"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0 aspect-[3/4]">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                        <div className="relative w-full h-[80vh] flex items-center justify-center">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="max-w-full max-h-full object-contain rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Deslize para ver mais modelos ou aguarde a troca automática
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
