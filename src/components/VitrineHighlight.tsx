import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Sparkles } from "lucide-react";

const VitrineHighlight = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-5 md:space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Novidade</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Conheça nossa Vitrine Online
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto px-2">
            Explore nosso catálogo completo de jalecos, scrubs e uniformes profissionais. Modelos exclusivos com qualidade premium, prontos para você escolher.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2">
            <Link to="/vitrine" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto text-base md:text-lg px-6 md:px-8 group shadow-lg hover:scale-105 transition-all duration-300"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Visitar a Vitrine
                <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VitrineHighlight;