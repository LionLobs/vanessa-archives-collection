import logo from "@/assets/logo-vanessa.jpg";
import quill from "@/assets/quill-divider.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="relative py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="quill-divider">
          <img src={quill} alt="" className="w-10 h-10 opacity-60" loading="lazy" />
        </div>

        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">
            Sobre <span className="text-gold-gradient">Mim</span>
          </h2>
          <p className="font-elegant text-lg text-foreground/50 italic">
            A mulher por trás das palavras
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center max-w-5xl mx-auto">
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 bg-gold-gradient rounded-full opacity-15 blur-2xl" />
              <img
                src={logo}
                alt="Vanessa Clasen"
                className="relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-2 border-primary/30 shadow-gold"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Natural de <strong className="text-foreground">Florianópolis</strong>, escritora e jornalista, Vanessa Clasen encontra nas palavras o fio invisível que conecta memória, mistério e emoção. Sua escrita nasce do encontro entre terra e mar — entre o silêncio da ilha e a vastidão das histórias que insistem em ser contadas.
            </p>
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Cada manuscrito é tecido à mão, em tinta e alma, antes de ganhar o mundo. Seus romances transitam entre o suspense psicológico, o policial e o histórico, sempre com camadas de profundidade que convidam o leitor a mergulhar além da superfície.
            </p>
            <p className="font-body text-base text-foreground/70 leading-relaxed">
              Premiada no <strong className="text-primary">4° Prêmio FLIPoços</strong> e reconhecida pelo <strong className="text-primary">Prêmio Book Brasil</strong>, Vanessa consolida sua presença na literatura contemporânea brasileira com obras que atravessam o tempo e tocam a alma.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {[
                { icon: "✍️", label: "Escritora" },
                { icon: "📰", label: "Jornalista" },
                { icon: "🏆", label: "Premiada" },
                { icon: "🌊", label: "Florianópolis" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-2 font-body text-sm text-foreground/70"
                >
                  <span>{tag.icon}</span>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
