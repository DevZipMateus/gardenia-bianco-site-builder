import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-background-jalecos-sul.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 md:pt-20 animate-fade-in">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          zIndex: -20
        }}
      />
      {/* Overlay para garantir contraste */}
      <div className="absolute inset-0 bg-black/65" style={{ zIndex: -10 }} />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <div className="space-y-2 md:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both', textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)', fontFamily: 'Baby Angel' }}>
              Gardênia Bianco RS
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light px-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both', textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}>
              Design exclusivo em moda profissional. Jalecos e scrubs personalizados com qualidade premium.
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both', textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}>
            Vestimentas criadas com paixão por uma designer de moda gaúcha, voltadas para profissionais que buscam estilo e conforto no trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6 px-4">
            <a href="https://wa.me/5555991277889" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8">
                Solicite seu orçamento
              </Button>
            </a>
            <a
              href="https://www.instagram.com/gardeniabiancodesignjalecosrs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto animate-fade-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20">
                <Instagram className="mr-2 h-4 md:h-5 w-4 md:w-5" />
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
