import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      emoji: "🥼",
      title: "Jalecos diferenciados",
      description: "Jalecos personalizados em tecido e modelagem de qualidade premium. Cada peça é pensada para oferecer conforto e estilo único ao profissional.",
    },
    {
      emoji: "👚",
      title: "Scrubs slim",
      description: "Pijamas cirúrgicos com modelagem slim em tecido nobre. Design moderno que une funcionalidade e elegância para o ambiente hospitalar.",
    },
    {
      emoji: "👔",
      title: "Uniformes corporativos",
      description: "Atendimento especializado para o público corporativo e gastronômico, criando identidade visual através de uniformes personalizados.",
    },
  ];

  return (
    <section id="servicos" className="py-12 md:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Nossos serviços
          </h2>
          <div className="w-20 md:w-24 h-1 bg-accent mx-auto mb-4 md:mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Criação e produção de vestimentas profissionais com design exclusivo e acabamento impecável
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-medium transition-all duration-300 bg-card">
              <CardHeader className="p-5 md:p-6">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-3 md:mb-4">
                  <span className="text-3xl md:text-4xl">{service.emoji}</span>
                </div>
                <CardTitle className="text-xl md:text-2xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 md:p-6 pt-0">
                <CardDescription className="text-sm md:text-base leading-relaxed text-foreground/70">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-card rounded-2xl p-6 md:p-8 max-w-3xl mx-auto shadow-soft">
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 md:mb-4">
              Atendimento Individualizado
            </h3>
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              Trabalhamos sob agendamento para garantir atenção exclusiva a cada cliente. Entre em contato para agendar sua visita e conhecer nossos produtos e serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
