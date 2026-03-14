import { motion } from "framer-motion";
import {
  Layers, PaintBucket, Wrench, Target, Ruler, BookOpen,
  Sparkles, ShieldCheck, Eye, HandMetal, UserCog, TrendingUp, DollarSign
} from "lucide-react";

const topics = [
  { icon: Layers, title: "Fundamentos da Instalação" },
  { icon: PaintBucket, title: "Preparação de Superfícies" },
  { icon: Wrench, title: "Ferramentas e Materiais" },
  { icon: Target, title: "Técnicas de Aplicação" },
  { icon: Ruler, title: "Alinhamento e Encaixe" },
  { icon: BookOpen, title: "Tipos de Papel de Parede" },
  { icon: Sparkles, title: "Acabamento Fino" },
  { icon: ShieldCheck, title: "Correção de Erros" },
  { icon: Eye, title: "Padrão Profissional" },
  { icon: HandMetal, title: "Prática Real" },
  { icon: UserCog, title: "Postura Profissional" },
  { icon: TrendingUp, title: "Visão de Mercado" },
  { icon: DollarSign, title: "Habilidade em Renda" },
];

const WhatYouLearnSection = () => {
  return (
    <section id="o-que-aprender" className="section-padding bg-secondary">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Conteúdo da Imersão
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            O que você vai{" "}
            <span className="text-gold-gradient">aprender</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {topics.map(({ icon: Icon, title }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-gold/40 transition-colors duration-300 group"
            >
              <Icon className="w-8 h-8 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-display font-semibold text-sm">{title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnSection;
