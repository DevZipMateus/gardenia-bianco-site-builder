import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
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
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Gardênia Bianco RS" className="h-12 w-auto" />
              <span className="font-semibold text-lg">Gardênia Bianco RS</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Design exclusivo em moda profissional. Jalecos e scrubs personalizados com qualidade premium para profissionais que buscam estilo e conforto.
            </p>
            <p className="text-sm text-primary-foreground/70">
              CNPJ: 23.041.024/0001-94
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Links rápidos</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Início
              </button>
              <Link
                to="/vitrine"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Vitrine
              </Link>
              <button
                onClick={() => scrollToSection("sobre")}
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("galeria")}
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contato</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/5555991277889"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">(55) 99127-7889</span>
              </a>
              <a
                href="mailto:gardeniabiancors.designdemoda@gmail.com"
                className="flex items-start gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm break-all">gardeniabiancors.designdemoda@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
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
                <Instagram className="w-5 h-5" />
                <span className="text-sm">@gardeniabiancodesignjalecosrs</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Gardênia Bianco RS. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
