import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary" />
      <div className="container-landing relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight mb-6">
            Você pode continuar adiando ou pode{" "}
            <span className="text-gold-gradient">começar um negócio lucrativo agora</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Enquanto você pensa, outros estão se formando, fechando clientes e faturando.
            Sua nova profissão pode começar agora.
          </p>

          <a
            href="https://wa.me/5521996203486?text=Quero%20come%C3%A7ar%20o%20treinamento%20ProWall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-10 py-5 rounded-xl shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02] animate-pulse-gold"
          >
            Começar o Treinamento ProWall
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
