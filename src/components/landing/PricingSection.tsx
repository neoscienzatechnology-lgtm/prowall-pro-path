import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "R$ 997",
    highlight: false,
    features: [
      "3 dias de treinamento presencial intensivo",
      "Material didático completo",
      "Prática real com materiais profissionais",
      "Técnicas de acabamento perfeito",
      "Certificado de conclusão",
      "Acesso ao grupo exclusivo de alunos",
    ],
  },
  {
    name: "Premium",
    price: "R$ 1.297",
    highlight: true,
    features: [
      "Tudo do Standard +",
      "Acompanhamento individual pós-treinamento",
      "Kit de ferramentas profissional incluso",
      "Mentoria de precificação e vendas",
      "Acesso prioritário às próximas turmas",
      "Suporte direto com o instrutor por 30 dias",
    ],
  },
];

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
            Primeiro Lote
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Escolha o ingresso{" "}
            <span className="text-gold-gradient">ideal para você</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-2xl p-8 md:p-10 border ${
                plan.highlight
                  ? "border-gold/50 bg-card shadow-gold-lg"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 bg-gold-gradient text-primary-foreground font-display font-bold text-xs tracking-wider uppercase px-4 py-1.5 rounded-full">
                    <Star className="w-3 h-3" />
                    Mais Escolhido
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display font-bold text-xl mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`font-display font-extrabold text-4xl lg:text-5xl ${plan.highlight ? "text-gold" : ""}`}>
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">ou em até 12x no cartão</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${plan.highlight ? "text-gold" : "text-muted-foreground"}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5521996203486?text=Quero%20o%20ingresso%20" 
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full inline-flex items-center justify-center gap-3 font-display font-bold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground shadow-gold hover:shadow-gold-lg animate-pulse-gold"
                    : "bg-muted hover:bg-muted/80 text-foreground border border-border"
                }`}
              >
                Garantir Minha Vaga
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
