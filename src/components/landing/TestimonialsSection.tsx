import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    role: "Começou do zero — hoje fatura R$ 8k/mês",
    text: "Em 3 meses depois da imersão, já tinha carteira de clientes. O ProWall me deu técnica e confiança para cobrar o que meu trabalho vale.",
  },
  {
    name: "Fernanda L.",
    role: "Empreendedora — 2 funcionários contratados",
    text: "Saí da imersão e montei minha empresa. Hoje tenho agenda cheia e já contratei 2 instaladores. O ProWall mudou minha vida financeira.",
  },
  {
    name: "Roberto S.",
    role: "Ex-pintor — triplicou a renda",
    text: "Trabalhava como pintor e ganhava pouco. Depois do ProWall, passei a instalar papel de parede premium e minha renda triplicou.",
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
            Resultados Reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Quem passou pelo ProWall{" "}
            <span className="text-gold-gradient">já está lucrando</span>
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
                <p className="text-gold text-sm font-medium">{role}</p>
              </div>
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
            href="https://wa.me/5521996203486?text=Quero%20come%C3%A7ar%20o%20treinamento%20ProWall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02]"
          >
            Quero os Mesmos Resultados
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
