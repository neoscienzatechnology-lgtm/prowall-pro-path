import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Instalador Profissional",
    text: "A imersão mudou minha visão sobre o mercado. Saí de lá com confiança e técnica para atuar com excelência.",
  },
  {
    name: "Fernanda L.",
    role: "Empreendedora",
    text: "Em 3 dias aprendi mais do que em meses tentando sozinha. A prática fez toda a diferença.",
  },
  {
    name: "Roberto S.",
    role: "Ex-pintor",
    text: "Encontrei uma nova profissão com renda muito superior. O investimento se pagou nos primeiros trabalhos.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Quem já viveu essa{" "}
            <span className="text-gold-gradient">transformação</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map(({ name, role, text }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 italic">"{text}"</p>
              <div>
                <p className="font-display font-bold">{name}</p>
                <p className="text-muted-foreground text-sm">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
