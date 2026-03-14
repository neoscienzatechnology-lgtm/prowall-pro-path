import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const before = [
  "Insegurança para atuar no mercado",
  "Falta de direção profissional",
  "Renda limitada ou instável",
  "Ausência de profissão clara",
  "Vontade de crescer, sem saber por onde",
];

const after = [
  "Domínio técnico e confiança",
  "Prática real e experiência",
  "Visão profissional do mercado",
  "Possibilidade real de renda",
  "Entrada em um mercado valorizado",
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
            Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            De onde você está para{" "}
            <span className="text-gold-gradient">onde você merece chegar</span>
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
            <h3 className="font-display font-bold text-xl mb-6 text-muted-foreground">Antes da Imersão</h3>
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
            <h3 className="font-display font-bold text-xl mb-6 text-gold">Depois da Imersão</h3>
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
      </div>
    </section>
  );
};

export default TransformationSection;
