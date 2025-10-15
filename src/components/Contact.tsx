import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Entre em contato
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para criar a vestimenta perfeita para você. Agende sua visita ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-border shadow-soft">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Informações de contato
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5555991277889"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Telefone / WhatsApp</p>
                    <p className="text-muted-foreground">(55) 99127-7889</p>
                  </div>
                </a>

                <a
                  href="mailto:gardeniabiancors.designdemoda@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">E-mail</p>
                    <p className="text-muted-foreground break-all">
                      gardeniabiancors.designdemoda@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Endereço</p>
                    <p className="text-muted-foreground">
                      Avenida Prefeito Evandro Behr, 7056<br />
                      Sala 30 - Centro Comercial Camobi
                    </p>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/gardeniabiancodesignjalecosrs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Instagram</p>
                    <p className="text-muted-foreground">@gardeniabiancodesignjalecosrs</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border shadow-soft">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Horário de atendimento
              </h3>
              <div className="bg-accent/5 rounded-xl p-6 mb-6">
                <p className="text-center text-lg font-medium text-foreground mb-2">
                  Atendimento mediante agendamento
                </p>
                <p className="text-center text-muted-foreground">
                  Entre em contato para agendar sua visita
                </p>
              </div>

              <div className="space-y-4">
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
                    <Instagram className="mr-2 h-5 w-5" />
                    Seguir no Instagram
                  </Button>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
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
