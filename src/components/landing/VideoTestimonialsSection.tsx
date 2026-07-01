import { motion } from "framer-motion";
import fabricioAsset from "@/assets/testimonials/fabricio.mov.asset.json";
import cebolaAsset from "@/assets/testimonials/cebola.mov.asset.json";
import marcelAsset from "@/assets/testimonials/marcel.mov.asset.json";

const videoTestimonials = [
  { name: "Fabrício Carvalho", role: "Aluno ProWall", src: fabricioAsset.url, type: "video/quicktime" },
  { name: "Éder Marques", role: "Aluno ProWall", src: cebolaAsset.url, type: "video/quicktime" },
  { name: "Marcel", role: "Aluno ProWall", src: marcelAsset.url, type: "video/quicktime" },
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {videoTestimonials.map(({ name, role, src, type }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              <div className="aspect-[9/16] bg-black">
                <video
                  src={src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={src} type={type} />
                  <source src={src} type="video/mp4" />
                </video>
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
