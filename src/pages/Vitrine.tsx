import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    document.title = "Demonstração de Vitrine - Gardênia Bianco RS";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Demonstração de Vitrine
          </h1>
          <div className="w-full">
            <iframe 
              src="https://v4.egestor.com.br/vitrine/?s=gardeniabianco8" 
              style={{ width: "100%", minHeight: "800px", border: "none" }}
              title="Vitrine de Produtos Gardênia Bianco RS"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vitrine;
