import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, Clock, Users } from "lucide-react";

const included = [
  "3 dias de imersão presencial intensiva",
  "Conteúdo do zero ao avançado",
  "Prática real com materiais profissionais",
  "Correção ao vivo e acompanhamento",
  "Ferramentas e técnicas profissionais",
  "Visão de mercado e direcionamento",
  "Networking com profissionais",
  "Certificado de participação",
];

const OfferSection = () => {
  return (
    <section id="inscricao" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
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
              Garanta sua vaga na{" "}
              <span className="text-gold-gradient">Profissão ProWall</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Uma imersão presencial que pode transformar sua trajetória profissional.
            </p>
          </div>

          <div className="bg-card border border-gold/30 rounded-2xl p-8 md:p-12 shadow-gold-lg">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-gold" />
                3 dias presenciais
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-gold" />
                Vagas limitadas
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-gold" />
                Turma exclusiva
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
                href="https://wa.me/5511999999999?text=Quero%20garantir%20minha%20vaga%20na%20Profiss%C3%A3o%20ProWall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-10 py-5 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02] animate-pulse-gold"
              >
                Garantir minha vaga agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-muted-foreground text-xs mt-4">
                Vagas limitadas · Inscreva-se antes que as vagas se esgotem
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
