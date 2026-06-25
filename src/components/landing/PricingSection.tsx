import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const plan = {
  name: "Curso Online ProWall",
  price: "12x de R$61,80",
  cashPrice: "ou R$597 à vista",
  link: "https://pay.kiwify.com.br/gD2NoHl",
  features: [
    "Acesso vitalício às aulas online",
    "Material didático completo",
    "Técnicas de acabamento perfeito",
    "Como precificar e vender seu serviço",
    "Estratégias para conseguir clientes",
    "Certificado de conclusão",
    "Acesso ao grupo exclusivo de alunos",
  ],
};

const PricingSection = () => {
  return (
    <section id="ingressos" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="container-landing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Acesso Imediato
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Garanta seu acesso ao{" "}
            <span className="text-gold-gradient">Curso Online</span>
          </h2>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl p-8 md:p-10 border border-gold/50 bg-card shadow-gold-lg"
          >
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-xl mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="font-display font-extrabold text-4xl lg:text-4xl text-gold">
                  {plan.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">{plan.cashPrice}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check className="w-5 h-5 shrink-0 mt-0.5 text-gold" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 font-display font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground shadow-gold hover:shadow-gold-lg animate-pulse-gold"
            >
              Quero Garantir Meu Acesso
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
