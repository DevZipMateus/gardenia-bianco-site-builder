import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import gardeniaText from "@/assets/gardenia-bianco-text-new.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <img src="/logo.png" alt="Gardênia Bianco RS" className="h-10 md:h-11 w-auto" />
            <img 
              src={gardeniaText} 
              alt="Gardênia Bianco RS" 
              className="h-7 md:h-8 w-auto hidden sm:inline"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Início
            </button>
            <Link
              to="/vitrine"
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Vitrine
            </Link>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors text-sm lg:text-base"
            >
              Contato
            </button>
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <a href="https://wa.me/5555991277889" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button variant="default" className="text-sm md:text-base">
                Fale conosco
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                  >
                    Início
                  </button>
                  <Link
                    to="/vitrine"
                    onClick={() => setIsOpen(false)}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                  >
                    Vitrine
                  </Link>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                  >
                    Sobre
                  </button>
                  <button
                    onClick={() => scrollToSection("servicos")}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                  >
                    Serviços
                  </button>
                  <button
                    onClick={() => scrollToSection("galeria")}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                  >
                    Galeria
                  </button>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-left text-lg text-foreground hover:text-primary transition-colors py-2"
                  >
                    Contato
                  </button>
                  <a
                    href="https://wa.me/5555991277889"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button variant="default" className="w-full mt-4">
                      Fale conosco
                    </Button>
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
