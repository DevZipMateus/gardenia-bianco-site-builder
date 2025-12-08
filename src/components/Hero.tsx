import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import heroBackground from "@/assets/hero-background-new.jpeg";
import gardeniaText from "@/assets/gardenia-bianco-text-newest.png";

const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center pt-16 md:pt-20 animate-fade-in bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${heroBackground})`
      }}
    >
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
          <div className="space-y-2 md:space-y-3">
            <img 
              src={gardeniaText} 
              alt="Gardênia Bianco RS" 
              className="mx-auto h-auto animate-fade-in" 
              style={{ 
                animationDelay: '0.1s', 
                animationFillMode: 'both',
                filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.8))',
                width: '60%',
                maxWidth: '512px'
              }}
            />
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-medium px-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both', textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}>
              Design exclusivo em moda profissional. Jalecos e scrubs personalizados com qualidade premium.
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both', textShadow: '2px 2px 6px rgba(0, 0, 0, 0.7)' }}>
            Vestimentas criadas com paixão por uma designer de moda gaúcha, voltadas para profissionais que buscam estilo e conforto no trabalho.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-4 md:pt-6 px-4 flex-wrap">
            <a href="https://wa.me/5555991277889" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8">
                Solicite seu orçamento
              </Button>
            </a>
            <a
              href="#clientes-sucesso"
              className="w-full sm:w-auto animate-fade-in"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 bg-white/10 text-primary-foreground border-white/30 hover:bg-accent hover:border-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300">
                ⭐ Clientes de Sucesso
              </Button>
            </a>
            <a
              href="https://www.instagram.com/gardeniabiancodesignjalecosrs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto animate-fade-in"
              style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
            >
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 bg-white/10 text-primary-foreground border-white/30 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 hover:border-transparent hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition-all duration-300 group">
                <Instagram className="mr-2 h-4 md:h-5 w-4 md:w-5 group-hover:animate-pulse" />
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
