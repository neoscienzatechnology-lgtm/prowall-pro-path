import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import eduardoGoncalves from "@/assets/testimonials/eduardo-goncalves.mp4.asset.json";
import fabricioShimidt from "@/assets/testimonials/fabricio-shimidt.mp4.asset.json";
import rodrigoNovelli from "@/assets/testimonials/rodrigo-novelli.mp4.asset.json";
import eduardoDuarte from "@/assets/testimonials/eduardo-duarte.mp4.asset.json";

const testimonials = [
  { name: "Eduardo Gonçalves", role: "Instalador parceiro ProWall", src: eduardoGoncalves.url },
  { name: "Fabrício Shimidt", role: "Instalador parceiro ProWall", src: fabricioShimidt.url },
  { name: "Rodrigo Novelli", role: "Instalador parceiro ProWall", src: rodrigoNovelli.url },
  { name: "Eduardo Duarte", role: "Instalador parceiro ProWall", src: eduardoDuarte.url },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Resultados Reais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Quem passou pelo ProWall{" "}
            <span className="text-gold-gradient">já está lucrando</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map(({ name, role, src }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-video bg-muted/30">
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  title={`Depoimento de ${name}`}
                />
              </div>
              <div className="p-6 border-t border-border bg-muted/20">
                <p className="font-display font-bold">{name}</p>
                <p className="text-gold text-sm font-medium">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://pay.kiwify.com.br/gD2NoHl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02]"
          >
            Quero os Mesmos Resultados
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
