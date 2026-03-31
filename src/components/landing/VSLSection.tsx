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
          className="text-center mb-8 sm:mb-10"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Assista Antes de Decidir
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold leading-tight max-w-4xl mx-auto">
            Descubra como essa profissão pode{" "}
            <span className="text-gold-gradient">transformar sua vida</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-gold/30 shadow-gold-lg bg-card">
            <video className="w-full h-full object-cover" controls preload="metadata" playsInline>
              <source src="/videos/vsl-main.mp4" type="video/mp4" />
              Seu navegador não suporta reprodução de vídeo.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLSection;
