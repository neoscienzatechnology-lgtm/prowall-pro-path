import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Clock, AlertTriangle } from "lucide-react";

const included = [
  "Acesso vitalício às aulas online",
  "Do zero ao avançado — sem pré-requisitos",
  "Demonstrações práticas com materiais profissionais",
  "Técnicas de acabamento perfeito",
  "Como precificar e vender seu serviço",
  "Estratégias para conseguir clientes",
  "Visão completa de mercado e posicionamento",
  "Grupo exclusivo de alunos",
  "Certificado de conclusão",
];

const OfferSection = () => {
  return (
    <section id="inscricao" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />
      <div className="container-landing relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
              Inscrição
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-4">
              Comece seu negócio com o{" "}
              <span className="text-gold-gradient">Treinamento ProWall</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo o que você precisa para sair daqui pronto para atuar e lucrar.
            </p>
          </div>

          <div className="bg-card border border-gold/30 rounded-2xl p-8 md:p-12 shadow-gold-lg">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-gold" />
                Acesso vitalício
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-gold" />
                Garantia de 7 dias
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mb-10">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <a
                href="https://wa.me/5521996203486?text=Quero%20garantir%20minha%20vaga%20no%20treinamento%20ProWall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-10 py-5 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02] animate-pulse-gold"
              >
                Garantir Minha Vaga Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center justify-center gap-2 mt-4 text-muted-foreground text-xs">
                <AlertTriangle className="w-3 h-3 text-gold" />
                <span>Vagas limitadas — alta procura nesta edição</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
