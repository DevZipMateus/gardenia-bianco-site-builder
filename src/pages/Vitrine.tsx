import { useEffect } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  useEffect(() => {
    document.title = "Nossa Vitrine - Gardênia Bianco RS";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 md:mb-8 font-quicksand">
            Nossa Vitrine
          </h1>
          <div className="w-full">
            <iframe 
              src="https://v4.egestor.com.br/vitrine/?s=gardeniabianco8" 
              className="w-full border-0"
              style={{ minHeight: "600px", height: "80vh" }}
              title="Vitrine de Produtos Gardênia Bianco RS"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vitrine;
