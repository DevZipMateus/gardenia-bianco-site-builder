import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Shirt } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Jalecos diferenciados",
      description: "Jalecos personalizados em tecido e modelagem de qualidade premium. Cada peça é pensada para oferecer conforto e estilo único ao profissional.",
    },
    {
      icon: Sparkles,
      title: "Scrubs slim",
      description: "Pijamas cirúrgicos com modelagem slim em tecido nobre. Design moderno que une funcionalidade e elegância para o ambiente hospitalar.",
    },
    {
      icon: Shirt,
      title: "Uniformes corporativos",
      description: "Atendimento especializado para o público corporativo e gastronômico, criando identidade visual através de uniformes personalizados.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos serviços
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Criação e produção de vestimentas profissionais com design exclusivo e acabamento impecável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-card">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-3xl mx-auto shadow-soft">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Atendimento personalizado
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Trabalhamos sob agendamento para garantir atenção exclusiva a cada cliente. Entre em contato para agendar sua visita e conhecer nossos produtos e serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
