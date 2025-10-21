import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Gardênia Bianco RS" className="h-12 w-auto" />
            <span className="font-semibold text-lg text-primary hidden sm:inline">
              Gardênia Bianco RS
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <Link
              to="/vitrine"
              className="text-foreground hover:text-primary transition-colors"
            >
              Vitrine
            </Link>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("galeria")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <a href="https://wa.me/5555991277889" target="_blank" rel="noopener noreferrer">
            <Button variant="default" className="hidden sm:inline-flex">
              Fale conosco
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
