import { motion } from "framer-motion";
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
                alt="Profissionais trabalhando com papel de parede de alta qualidade"
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
              O que é
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-8">
              A Profissão ProWall{" "}
              <span className="text-gold-gradient">não é apenas um curso</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                É uma <strong className="text-foreground">imersão presencial intensiva de 3 dias</strong> criada
                para ensinar, na prática, como instalar papel de parede com técnica, acabamento,
                precisão e visão profissional.
              </p>
              <p>
                O participante aprende desde os fundamentos até a execução avançada, com
                direcionamento para enxergar essa habilidade como uma{" "}
                <strong className="text-foreground">oportunidade real de trabalho, renda e posicionamento</strong>{" "}
                em um mercado crescente.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
              <span className="text-gold font-display font-bold text-sm">DO ZERO AO AVANÇADO</span>
              <div className="h-px flex-1 bg-gradient-to-l from-gold/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
