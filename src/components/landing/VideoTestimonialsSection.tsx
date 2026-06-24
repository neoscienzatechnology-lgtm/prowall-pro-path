import { motion } from "framer-motion";
import { Video } from "lucide-react";

const videoTestimonials = [
  { name: "Aluno 1", role: "Depoimento gravado no curso — em breve" },
  { name: "Aluno 2", role: "Depoimento gravado no curso — em breve" },
  { name: "Aluno 3", role: "Depoimento gravado no curso — em breve" },
  { name: "Aluno 4", role: "Depoimento gravado no curso — em breve" },
];

const VideoTestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Depoimentos em Vídeo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Veja quem já{" "}
            <span className="text-gold-gradient">transformou sua vida</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {videoTestimonials.map(({ name, role }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-[9/16] bg-muted/30 flex flex-col items-center justify-center gap-3 text-muted-foreground p-6 text-center">
                <Video className="w-10 h-10 text-gold/60" />
                <span className="text-xs font-display font-semibold uppercase tracking-wider">
                  Vídeo em breve
                </span>
              </div>
              <div className="p-4 border-t border-border bg-muted/20">
                <span className="inline-flex items-center rounded-full bg-gold/10 px-3 py-1 text-xs font-display font-bold text-gold tracking-wide">
                  {name}
                </span>
                <p className="mt-2 text-xs text-muted-foreground">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
