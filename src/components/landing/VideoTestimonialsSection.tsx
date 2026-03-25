import { motion } from "framer-motion";
import { Play } from "lucide-react";

const videoTestimonials = [
  {
    name: "Carlos M.",
    role: "Começou do zero — fatura R$ 8k/mês",
    thumbnail: "",
  },
  {
    name: "Fernanda L.",
    role: "Montou empresa com 2 funcionários",
    thumbnail: "",
  },
  {
    name: "Roberto S.",
    role: "Ex-pintor — triplicou a renda",
    thumbnail: "",
  },
  {
    name: "Amanda R.",
    role: "Designer — abriu filial em 6 meses",
    thumbnail: "",
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
          {videoTestimonials.map(({ name, role }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[9/16] bg-card border border-border rounded-2xl overflow-hidden relative flex items-center justify-center cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-gold ml-1" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <p className="font-display font-bold text-sm">{name}</p>
                  <p className="text-gold text-xs">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
