import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Zap, Crown, BarChart3 } from "lucide-react";

const reasons = [
  { icon: TrendingUp, title: "Mercado Crescente", desc: "A demanda por instalação profissional de papel de parede cresce a cada ano." },
  { icon: Crown, title: "Alto Valor Agregado", desc: "Serviço premium com ticket médio elevado e clientes de alto padrão." },
  { icon: Users, title: "Baixa Concorrência Qualificada", desc: "Poucos profissionais realmente capacitados para um mercado que exige excelência." },
  { icon: Zap, title: "Retorno Rápido", desc: "Habilidade prática que pode gerar renda real em curto prazo." },
  { icon: Target, title: "Público de Alto Padrão", desc: "Atue com clientes que valorizam e pagam bem por um trabalho impecável." },
  { icon: BarChart3, title: "Profissão com Futuro", desc: "Uma habilidade que se valoriza com o tempo e a experiência." },
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
            Oportunidade
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight max-w-3xl mx-auto">
            Por que esse mercado é uma{" "}
            <span className="text-gold-gradient">oportunidade real</span>
          </h2>
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
      </div>
    </section>
  );
};

export default MarketOpportunitySection;
