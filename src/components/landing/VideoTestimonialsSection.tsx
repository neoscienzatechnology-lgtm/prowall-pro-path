import { motion } from "framer-motion";

const videoTestimonials = [
  {
    name: "Eduardo Gonçalves",
    role: "Fundador da Fixpano",
    videoSrc: "/videos/IMG_7931.MP4",
  },
  {
    name: "Eduardo Duarte",
    role: "Instalador e CEO na Duarte Películas",
    videoSrc: "/videos/IMG_7932.MP4",
  },
  {
    name: "Fabrício Shimidt",
    role: "Fundador e instalador da FaDecor",
    videoSrc: "/videos/IMG_7930.MP4",
  },
  {
    name: "Rodrigo Novelli",
    role: "Fundador da RNC",
    videoSrc: "/videos/IMG_7929.MP4",
  },
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
          {videoTestimonials.map(({ name, role, videoSrc }, i) => (
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
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  playsInline
                >
                  <source src={videoSrc} type="video/mp4" />
                  Seu navegador não suporta reprodução de vídeo.
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
