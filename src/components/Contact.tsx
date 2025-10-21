import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Entre em contato
          </h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Estamos prontos para criar a vestimenta perfeita para você. Agende sua visita ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="border-border shadow-soft">
            <CardContent className="p-6 md:p-8 space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">
                Informações de contato
              </h3>

              <div className="space-y-3 md:space-y-4">
                <a
                  href="https://wa.me/5555991277889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base text-foreground">Telefone / WhatsApp</p>
                    <p className="text-sm md:text-base text-muted-foreground">(55) 99127-7889</p>
                  </div>
                </a>

                <a
                  href="mailto:gardeniabiancors.designdemoda@gmail.com"
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm md:text-base text-foreground">E-mail</p>
                    <p className="text-xs md:text-sm text-muted-foreground break-all">
                      gardeniabiancors.designdemoda@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base text-foreground">Endereço</p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Avenida Prefeito Evandro Behr, 7056<br />
                      Sala 30 - Centro Comercial Camobi
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/gardeniabiancodesignjalecosrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-sm md:text-base text-foreground">Instagram</p>
                    <p className="text-sm md:text-base text-muted-foreground break-all">@gardeniabiancodesignjalecosrs</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">
                Horário de atendimento
              </h3>
              <div className="bg-accent/5 rounded-xl p-5 md:p-6 mb-5 md:mb-6">
                <p className="text-center text-base md:text-lg font-medium text-foreground mb-2">
                  Atendimento mediante agendamento
                </p>
                <p className="text-center text-sm md:text-base text-muted-foreground">
                  Entre em contato para agendar sua visita
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <a href="https://wa.me/5555991277889" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full" size="lg">
                    Agendar pelo WhatsApp
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/gardeniabiancodesignjalecosrs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full" size="lg">
                    <Instagram className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Seguir no Instagram
                  </Button>
                </a>
              </div>

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
                <p className="text-xs md:text-sm text-muted-foreground text-center">
                  CNPJ: 23.041.024/0001-94
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
