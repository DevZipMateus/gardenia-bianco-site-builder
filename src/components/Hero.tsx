import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      {/* Overlay para garantir contraste */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-dark-brown/90 -z-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
              Gardênia Bianco RS
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
              Design exclusivo em moda profissional. Jalecos e scrubs personalizados com qualidade premium.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Vestimentas criadas com paixão por uma designer de moda gaúcha, voltadas para profissionais que buscam estilo e conforto no trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="https://wa.me/5555991277889" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8">
                Solicite seu orçamento
              </Button>
            </a>
            <a
              href="https://www.instagram.com/gardeniabiancodesignjalecosrs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
