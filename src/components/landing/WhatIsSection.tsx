import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import photo2 from "@/assets/photo-2.png";

const WhatIsSection = () => {
  return (
    <section id="o-que-e" className="section-padding">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={photo2}
                alt="Profissionais trabalhando com papel de parede premium"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
              A Solução
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-8">
              O ProWall é o caminho mais rápido para{" "}
              <span className="text-gold-gradient">começar a lucrar</span> nesse mercado
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                Não é apenas um curso técnico. É um <strong className="text-foreground">treinamento completo de profissionalização</strong> que
                te ensina a instalar papel de parede com excelência — e a transformar isso em um negócio lucrativo.
              </p>
              <p>
                Em <strong className="text-foreground">3 dias de imersão presencial</strong>, você sai com domínio técnico,
                visão de mercado, estratégia de precificação e confiança para fechar seus primeiros clientes.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://wa.me/5511999999999?text=Quero%20saber%20mais%20sobre%20o%20treinamento%20ProWall"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold px-8 py-4 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02]"
              >
                Quero Aprender Instalação Profissional
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
