import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const before = [
  "Sem profissão definida ou renda instável",
  "Querendo crescer, mas sem saber por onde começar",
  "Dependendo de emprego ou de terceiros",
  "Insegurança para cobrar por um serviço",
  "Sem habilidade prática que gere renda",
];

const after = [
  "Profissional qualificado com técnica e confiança",
  "Agenda de clientes e renda previsível",
  "Autonomia total para trabalhar por si mesmo",
  "Atuando em um mercado valorizado e em crescimento",
];

const TransformationSection = () => {
  return (
    <section className="section-padding">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Transformação Real
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            De onde você está para{" "}
            <span className="text-gold-gradient">onde você pode chegar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="font-display font-bold text-xl mb-6 text-muted-foreground">Antes do ProWall</h3>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-gold/30 rounded-2xl p-8 shadow-gold"
          >
            <h3 className="font-display font-bold text-xl mb-6 text-gold">Depois do ProWall</h3>
            <ul className="space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://wa.me/5521996203486?text=Quero%20transformar%20isso%20em%20renda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02]"
          >
            Quero Transformar Isso em Renda
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
