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
import midia11 from "@/assets/gallery/midia_11.jpg";
import midia12 from "@/assets/gallery/midia_12.png";
import midia13 from "@/assets/gallery/midia_13.png";
import midia14 from "@/assets/gallery/midia_14.png";
import midia15 from "@/assets/gallery/midia_15.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // Gallery atualizada - imagem do cliente com scrub azul removida

  const images = [
    { src: midia7, alt: "Jaleco modelo Johana - detalhes e acabamento" },
    { src: midia8, alt: "Jaleco modelo Lilith - design exclusivo" },
    { src: midia9, alt: "Jaleco modelo Morgana - tecido premium" },
    { src: midia11, alt: "Jaleco modelo Ellis - detalhes personalizados" },
    { src: midia12, alt: "Jaleco modelo Acácia - elegância profissional" },
    { src: midia13, alt: "Jaleco modelo Albeus - conforto e funcionalidade" },
    { src: midia14, alt: "Jaleco modelo Antonin - design moderno" },
    { src: midia15, alt: "Nossos clientes satisfeitos" },
  ];

  return (
    <section id="galeria" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Nossa galeria
          </h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Confira nossos modelos exclusivos e a qualidade dos nossos produtos
          </p>
          
          {/* Banner de Orçamento para Turmas */}
          <a
            href="https://wa.me/5555991277889?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20jalecos%20personalizados%20para%20turma."
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-4xl mx-auto mt-8 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                JALECOS PERSONALIZADOS PARA TURMAS
              </p>
              <p className="text-base md:text-lg lg:text-xl font-semibold">
                VALORES COM DESCONTOS ESPECIAIS
              </p>
              <p className="text-sm md:text-base mt-3 opacity-90">
                📱 Clique aqui e solicite seu orçamento via WhatsApp
              </p>
            </div>
          </a>
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
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
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
                      <DialogContent className="max-w-[95vw] md:max-w-4xl w-full p-2 md:p-4 bg-transparent border-0">
                        <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
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

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-sm md:text-base text-muted-foreground px-4">
            Deslize para ver mais modelos ou aguarde a troca automática
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
