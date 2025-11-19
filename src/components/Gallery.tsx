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

// Import images - Femininos
import midia7 from "@/assets/gallery/midia_7.jpg";
import midia8 from "@/assets/gallery/midia_8.jpg";
import midia9 from "@/assets/gallery/midia_9.jpg";
import midia11 from "@/assets/gallery/midia_11.jpg";
import midia12 from "@/assets/gallery/midia_12.png";
import jalecoFemininoAgnes from "@/assets/gallery/jaleco_feminino_agnes.jpg";
import jalecoFemininoAllice from "@/assets/gallery/jaleco_feminino_allice.jpg";
import jalecoFemininoAntonella from "@/assets/gallery/jaleco_feminino_antonella.jpg";
import jalecoFemininoAstrid from "@/assets/gallery/jaleco_feminino_astrid.jpg";
import jalecoFemininoAudrey from "@/assets/gallery/jaleco_feminino_audrey.jpg";
import jalecoFemininoElitza from "@/assets/gallery/jaleco_feminino_elitza.jpg";
import jalecoFemininoElvira from "@/assets/gallery/jaleco_feminino_elvira.jpg";
import jalecoFemininoFiorella from "@/assets/gallery/jaleco_feminino_fiorella.jpg";
import jalecoFemininoHazel from "@/assets/gallery/jaleco_feminino_hazel.jpg";
import jalecoFemininoIvy from "@/assets/gallery/jaleco_feminino_ivy.jpg";
import jalecoFemininoKendra from "@/assets/gallery/jaleco_feminino_kendra.jpg";
import jalecoFemininoKiara from "@/assets/gallery/jaleco_feminino_kiara.jpg";
import jalecoFemininoVioleta from "@/assets/gallery/jaleco_feminino_violeta.jpg";

// Import images - Masculinos
import jalecoMasculinoAlbeus from "@/assets/gallery/jaleco_masculino_albeus.png";
import jalecoMasculinoAntonin from "@/assets/gallery/jaleco_masculino_antonin.png";
import jalecoMasculinoOrion from "@/assets/gallery/jaleco_masculino_orion.jpg";
import jalecoMasculinoArthemus from "@/assets/gallery/jaleco_masculino_arthemus.jpg";

// Import images - Clientes
import clienteScrubMasculino from "@/assets/gallery/cliente_scrub_masculino.jpg";
import clienteAventalLyra from "@/assets/gallery/cliente_avental_lyra.jpg";
import clienteAventalBasic from "@/assets/gallery/cliente_avental_basic.jpg";
import clienteScrubFeminino from "@/assets/gallery/cliente_scrub_feminino.jpg";

// Import images - Aventais
import aventaisCafeGuardino from "@/assets/gallery/aventais_cafe_guardino.jpg";
import aventalAzulMarinho from "@/assets/gallery/avental_azul_marinho.jpg";
import aventaisNonaDeli from "@/assets/gallery/aventais_nonadeli.jpg";
import aventaisSantaLucia from "@/assets/gallery/aventais_santa_lucia.jpg";

// Import images - Turmas
import turmaJalecosBrancos from "@/assets/gallery/turma_jalecos_brancos.jpg";
import turmaFamiliaFelin from "@/assets/gallery/turma_familia_felin.jpg";
import turmaFamiliaFelinCorredor from "@/assets/gallery/turma_familia_felin_corredor.jpg";
import turmaMedicinaUfsm from "@/assets/gallery/turma_medicina_ufsm.jpg";
import turmaGardeniaBianco from "@/assets/gallery/turma_gardenia_bianco.jpg";
import turmaClinicaAzul from "@/assets/gallery/turma_clinica_azul.jpg";
import turmaMedicinaUfn from "@/assets/gallery/turma_medicina_ufn.jpg";

// Import images - Jalecos Infantis
import jalecosInfantis from "@/assets/gallery/jalecos_infantis.jpg";

// Import images - Porta Jalecos
import portaJalecoPersonalizado from "@/assets/gallery/porta_jaleco_personalizado.jpg";

// Import images - Faixas
import faixasPersonalizadas from "@/assets/gallery/faixas_personalizadas.jpg";

// Import images - Toucas
import toucaPersonalizada from "@/assets/gallery/touca_personalizada.jpg";
import toucaCirurgica from "@/assets/gallery/touca_cirurgica.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagesFemininos = [
    { src: midia7, alt: "Jaleco feminino modelo Johana - detalhes e acabamento" },
    { src: midia8, alt: "Jaleco feminino modelo Lilith - design exclusivo" },
    { src: midia9, alt: "Jaleco feminino modelo Morgana - tecido premium" },
    { src: midia11, alt: "Jaleco feminino modelo Ellis - detalhes personalizados" },
    { src: midia12, alt: "Jaleco feminino modelo Acácia - elegância profissional" },
    { src: jalecoFemininoAgnes, alt: "Jaleco feminino modelo Agnes - detalhes sofisticados" },
    { src: jalecoFemininoAllice, alt: "Jaleco feminino modelo Allice - elegância e conforto" },
    { src: jalecoFemininoAntonella, alt: "Jaleco feminino modelo Antonella - design único" },
    { src: jalecoFemininoAstrid, alt: "Jaleco feminino modelo Astrid - estilo profissional" },
    { src: jalecoFemininoAudrey, alt: "Jaleco feminino modelo Audrey - sofisticação clássica" },
    { src: jalecoFemininoElitza, alt: "Jaleco feminino modelo Elitza - charme e praticidade" },
    { src: jalecoFemininoElvira, alt: "Jaleco feminino modelo Elvira - design moderno em azul marinho" },
    { src: jalecoFemininoFiorella, alt: "Jaleco feminino modelo Fiorella - elegância em rosé" },
    { src: jalecoFemininoHazel, alt: "Jaleco feminino modelo Hazel - estilo prático com zíper" },
    { src: jalecoFemininoIvy, alt: "Jaleco feminino modelo Ivy - sofisticação e versatilidade" },
    { src: jalecoFemininoKendra, alt: "Jaleco feminino modelo Kendra - linha tradicional slim" },
    { src: jalecoFemininoKiara, alt: "Jaleco feminino modelo Kiara - clássico atemporal" },
    { src: jalecoFemininoVioleta, alt: "Jaleco feminino modelo Violeta - detalhes em verde esmeralda" },
  ];

  const imagesMasculinos = [
    { src: jalecoMasculinoAlbeus, alt: "Jaleco masculino modelo Albeus - conforto e estilo" },
    { src: jalecoMasculinoAntonin, alt: "Jaleco masculino modelo Antonin - design profissional" },
    { src: jalecoMasculinoOrion, alt: "Jaleco masculino modelo Orion - estilo moderno" },
    { src: jalecoMasculinoArthemus, alt: "Jaleco masculino modelo Arthemus - elegância profissional" },
  ];

  const imagesClientes = [
    { src: clienteScrubMasculino, alt: "Cliente profissional com scrub preto Gardenia Bianco" },
    { src: clienteScrubFeminino, alt: "Clientes profissionais com scrubs pretos personalizados" },
  ];

  const imagesAventais = [
    { src: clienteAventalLyra, alt: "Cliente com avental modelo Lyra em tom bege" },
    { src: clienteAventalBasic, alt: "Cliente com avental Basic branco e preto" },
    { src: aventaisCafeGuardino, alt: "Aventais personalizados Café Guardino em preto e bege" },
    { src: aventalAzulMarinho, alt: "Avental azul marinho com detalhes brancos - frente e costas" },
    { src: aventaisNonaDeli, alt: "Aventais personalizados Nona Deli em marrom com detalhes laranja" },
    { src: aventaisSantaLucia, alt: "Aventais personalizados Postos JP Santa Lúcia com uniforme profissional" },
  ];

  // Fotos de turmas de formandos e equipes profissionais
  const imagesTurmas = [
    { src: turmaJalecosBrancos, alt: "Turma de formandos com jalecos brancos personalizados" },
    { src: turmaFamiliaFelin, alt: "Família Felin - turma com jalecos personalizados Gardenia Bianco" },
    { src: turmaFamiliaFelinCorredor, alt: "Equipe de profissionais com jalecos elegantes" },
    { src: turmaMedicinaUfsm, alt: "Turma Medicina UFSM - formandos com jalecos brancos" },
    { src: turmaGardeniaBianco, alt: "Turma Gardenia Bianco - jalecos brancos para formatura" },
    { src: turmaClinicaAzul, alt: "Equipe de clínica com jalecos azuis personalizados" },
    { src: turmaMedicinaUfn, alt: "Turma Medicina UFN - Universidade Franciscana" },
  ];

  const imagesInfantis = [
    { src: jalecosInfantis, alt: "Jalecos infantis para pequenos profissionais - modelos diversos" },
  ];

  const imagesPortaJalecos = [
    { src: portaJalecoPersonalizado, alt: "Porta jaleco personalizado com bordado de Medicina" },
  ];

  const imagesFaixas = [
    { src: faixasPersonalizadas, alt: "Faixas personalizadas em diversas cores para formandos" },
  ];

  const imagesToucas = [
    { src: toucaPersonalizada, alt: "Touca personalizada com bordado de frutas" },
    { src: toucaCirurgica, alt: "Touca cirúrgica azul personalizada para profissionais de saúde" },
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

        {/* Seção Jalecos Femininos */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Jalecos Femininos
          </h3>
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
              {imagesFemininos.map((image, index) => (
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

        {/* Seção Jalecos Masculinos */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Jalecos Masculinos
          </h3>
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
              {imagesMasculinos.map((image, index) => (
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

        {/* Seção Clientes */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Nossos Clientes
          </h3>
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
              {imagesClientes.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card 
                          className="cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 border-border"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0 aspect-[2/3]">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain bg-muted hover:scale-105 transition-transform duration-300"
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

        {/* Seção Aventais */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Aventais
          </h3>
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
              {imagesAventais.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card 
                          className="cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 border-border"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0 aspect-[2/3]">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-full object-contain bg-muted hover:scale-105 transition-transform duration-300"
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

        {/* Seção Turmas */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Turmas
          </h3>
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
            <CarouselContent className="-ml-2 md:-ml-4 justify-center">
              {imagesTurmas.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-2/3 lg:basis-1/2">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card 
                          className="cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 border-border"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0 aspect-[4/3]">
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

        {/* Seção Jalecos Infantis */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Jalecos Infantis
          </h3>
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
            <CarouselContent className="-ml-2 md:-ml-4 justify-center">
              {imagesInfantis.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-2/3 lg:basis-1/2">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card 
                          className="cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 border-border"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0 aspect-square">
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

        {/* Seção Porta Jalecos */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Porta Jalecos
          </h3>
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
            <CarouselContent className="-ml-2 md:-ml-4 justify-center">
              {imagesPortaJalecos.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
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

        {/* Seção Faixas */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Faixas
          </h3>
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
            <CarouselContent className="-ml-2 md:-ml-4 justify-center">
              {imagesFaixas.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-2/3 lg:basis-1/2">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card 
                          className="cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 border-border"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0 aspect-square">
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

        {/* Seção Toucas */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
            Toucas
          </h3>
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
              {imagesToucas.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Card 
                          className="cursor-pointer overflow-hidden hover:shadow-medium transition-all duration-300 border-border"
                          onClick={() => setSelectedImage(image.src)}
                        >
                          <CardContent className="p-0 aspect-square">
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
