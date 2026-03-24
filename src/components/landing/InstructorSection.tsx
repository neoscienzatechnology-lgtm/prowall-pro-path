import { motion } from "framer-motion";
import { Award, Clock, Users, Star } from "lucide-react";
import photo3 from "@/assets/photo-3.png";

const credentials = [
  { icon: Clock, text: "+10 anos de experiência em instalação premium" },
  { icon: Users, text: "+500 alunos formados pelo método ProWall" },
  { icon: Award, text: "Especialista em papéis de parede de alto padrão" },
  { icon: Star, text: "Referência no mercado de acabamento profissional" },
];

const InstructorSection = () => {
  return (
    <section className="section-padding">
      <div className="container-landing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={photo3}
              alt="Instrutor ProWall - Especialista em instalação de papel de parede"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
              Sobre o Instrutor
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-6">
              Aprenda com quem{" "}
              <span className="text-gold-gradient">vive do mercado</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              O método ProWall foi criado por um profissional que construiu sua carreira instalando
              papéis de parede para clientes de alto padrão designers de interiores, arquitetos
              e construtoras renomadas. Não é teoria: é experiência real transformada em método.
            </p>

            <div className="space-y-4">
              {credentials.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-sm">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
