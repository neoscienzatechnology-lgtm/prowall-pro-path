import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Zap, Crown, BarChart3, ArrowRight } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "Mercado em Expansão", desc: "A procura por instalação profissional cresce todo ano. Quem se posiciona agora, sai na frente." },
  { icon: Crown, title: "Clientes de Alto Padrão", desc: "Atenda designers, arquitetos e clientes que pagam bem por um serviço impecável." },
  { icon: Users, title: "Poucos Profissionais Qualificados", desc: "A maioria dos instaladores não tem formação. Quem tem, domina o mercado." },
  { icon: Zap, title: "Retorno Rápido do Investimento", desc: "É possível recuperar o valor do treinamento nos primeiros trabalhos." },
  { icon: Target, title: "Ticket Médio Elevado", desc: "Uma única instalação pode render de R$ 500 a R$ 3.000+ dependendo do projeto." },
  { icon: BarChart3, title: "Trabalhe Por Conta Própria", desc: "Defina seus horários, seus preços e construa um negócio com autonomia total." },
];

const MarketOpportunitySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            O Problema é a Oportunidade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight max-w-4xl mx-auto">
            Faltam profissionais qualificados e{" "}
            <span className="text-gold-gradient">sobra demanda para quem domina</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            O mercado de papel de parede premium cresce acima da média. Mas a escassez de instaladores capacitados
            faz com que profissionais formados cobrem valores altos e tenham agenda cheia.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-gold/40 transition-all duration-300"
            >
              <Icon className="w-8 h-8 text-gold mb-4" />
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5521996203486?text=Quero%20entrar%20nesse%20mercado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02]"
          >
            Quero Entrar Nesse Mercado
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
