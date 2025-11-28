import { Link, useNavigate, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import gardeniaText from "@/assets/gardenia-bianco-text-new.png";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Logo e Descrição */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
              <img src="/logo.png" alt="Gardênia Bianco RS" className="h-14 md:h-16 w-auto" />
              <img src={gardeniaText} alt="Gardênia Bianco RS" className="h-14 md:h-16 w-auto" />
            </div>
            <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-3 md:mb-4">
              Design exclusivo em moda profissional. Jalecos e scrubs personalizados com qualidade premium para profissionais que buscam estilo e conforto.
            </p>
            <p className="text-xs md:text-sm text-primary-foreground/70">
              CNPJ: 23.041.024/0001-94
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-accent">Links rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Início
              </button>
              <Link
                to="/vitrine"
                className="block text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Vitrine
              </Link>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="block text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block text-sm md:text-base text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-base md:text-lg mb-3 md:mb-4 text-accent">Contato</h3>
            <div className="space-y-2 md:space-y-3">
              <a
                href="https://wa.me/5555991277889"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">(55) 99127-7889</span>
              </a>
              <a
                href="mailto:gardeniabianco.designjalecosrs@gmail.com"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm break-all">gardeniabianco.designjalecosrs@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">
                  Av. Prefeito Evandro Behr, 7056<br />
                  Sala 30 - Centro Comercial Camobi
                </span>
              </div>
              <a
                href="https://www.instagram.com/gardeniabiancodesignjalecosrs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm break-all">@gardeniabiancodesignjalecosrs</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Gardênia Bianco RS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
