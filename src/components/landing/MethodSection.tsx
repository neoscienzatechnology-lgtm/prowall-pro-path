import { motion } from "framer-motion";
import { Layers, Wrench, Crown, Sparkles, DollarSign, Users } from "lucide-react";

const steps = [
  { icon: Layers, step: "01", title: "Fundamentos da Instalação", desc: "Domine a base técnica: tipos de papel, superfícies, preparação e cuidados essenciais." },
  { icon: Wrench, step: "02", title: "Ferramentas e Preparação Profissional", desc: "Conheça os equipamentos essenciais do profissional e aprenda a preparar qualquer ambiente para instalação perfeita." },
  { icon: Crown, step: "03", title: "Instalação de Papéis Premium", desc: "Técnicas avançadas para papéis de alta qualidade, vinílicos, texturizados e especiais." },
  { icon: Sparkles, step: "04", title: "Acabamento Perfeito", desc: "Detalhes que separam o amador do profissional: cantos, emendas, recortes e alinhamentos." },
  { icon: DollarSign, step: "05", title: "Como Precificar Seu Serviço", desc: "Aprenda a calcular preços justos que valorizem seu trabalho e garantam lucro real." },
  { icon: Users, step: "06", title: "Como Conseguir Clientes", desc: "Estratégias práticas para fechar seus primeiros trabalhos e construir uma carteira de clientes." },
];

const MethodSection = () => {
  return (
    <section id="metodo" className="section-padding bg-secondary">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Metodologia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            O Método{" "}
            <span className="text-gold-gradient">ProWall</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-6 max-w-2xl mx-auto">
            Um caminho claro e estruturado que te leva do zero à profissionalização completa.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 relative hover:border-gold/40 transition-colors duration-300 group"
            >
              <span className="text-gold/20 font-display font-extrabold text-5xl absolute top-4 right-4 group-hover:text-gold/30 transition-colors">
                {step}
              </span>
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

export default MethodSection;
