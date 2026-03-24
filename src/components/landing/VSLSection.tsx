import { motion } from "framer-motion";

const VSLSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Assista Antes de Decidir
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight max-w-4xl mx-auto">
            Descubra como essa profissão pode{" "}
            <span className="text-gold-gradient">transformar sua vida</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-gold/30 shadow-gold-lg bg-card">
            {/* Substitua o conteúdo abaixo pelo embed do vídeo VSL */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/80">
              <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold cursor-pointer hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary-foreground ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-muted-foreground font-display font-semibold text-sm tracking-wide uppercase">
                Vídeo VSL
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
