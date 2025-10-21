const About = () => {
  return (
    <section id="sobre" className="py-12 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Nossa história
            </h2>
            <div className="w-20 md:w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                A Gardênia Bianco RS nasceu do sonho de uma enfermeira que decidiu seguir sua verdadeira paixão: criar. Unindo experiência na área da saúde com talento para design de moda, transformamos a forma como profissionais se vestem no dia a dia.
              </p>
              <p>
                Como empresa gaúcha, nos orgulhamos de oferecer produtos desenvolvidos por nossa designer de moda e executados por uma equipe de profissionais experientes na costura, garantindo qualidade superior em cada peça.
              </p>
              <p>
                Nosso compromisso é proporcionar conforto, estilo e funcionalidade em vestimentas que valorizam o profissional e fortalecem sua identidade.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft">
              <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4 md:mb-6">Áreas de atuação</h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/80">Saúde de modo geral</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/80">Corporativo administrativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/80">Estética e beleza</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm md:text-base text-foreground/80">Gastronômico</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
