import { motion } from "framer-motion";
import { Flame, Eye, Handshake, Compass, Users, Lightbulb } from "lucide-react";
import photo3 from "@/assets/photo-3.png";

const points = [
  { icon: Flame, text: "Aprendizado intensivo e acelerado" },
  { icon: Eye, text: "Correção ao vivo e feedback direto" },
  { icon: Handshake, text: "Contato direto com a execução real" },
  { icon: Compass, text: "Ambiente de imersão e foco total" },
  { icon: Users, text: "Networking com profissionais" },
  { icon: Lightbulb, text: "Proximidade com o método ProWall" },
];

const ExperienceSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
              Experiência Presencial
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-8">
              O presencial{" "}
              <span className="text-gold-gradient">acelera tudo</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              A experiência presencial é insubstituível. A prática ao vivo, a correção em
              tempo real e o ambiente de imersão criam um aprendizado que nenhum conteúdo
              online consegue replicar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={photo3}
              alt="Instalação profissional de papel de parede - prática presencial"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
