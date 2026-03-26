import { motion } from "framer-motion";
import { ArrowRight, Award, TrendingUp, DollarSign } from "lucide-react";
import logoProwall from "@/assets/logo-prowall.png";
import heroPhoto from "@/assets/photo-1.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image - full width, visible */}
      <div className="absolute inset-0">
        <img
          src={heroPhoto}
          alt="Instalação profissional de papel de parede - Profissão ProWall"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container-landing relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logoProwall} alt="ProWall" className="h-40 sm:h-56 mb-6 sm:mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2 mb-4 sm:mb-6"
          >
            <span className="bg-gold-gradient px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-display font-bold text-primary-foreground tracking-wide uppercase">
              Treinamento Presencial · 3 Dias
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] mb-4 sm:mb-6"
          >
            Torne-se um Instalador Profissional de Papel de Parede e{" "}
            <span className="text-gold-gradient">Comece Seu Próprio Negócio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-xl"
          >
            Aprenda o método usado por profissionais para instalar papéis de parede premium,
            atender clientes de alto padrão e transformar essa habilidade em{" "}
            <strong className="text-foreground">renda real e autonomia profissional</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <a
              href="https://wa.me/5521996203486?text=Quero%20come%C3%A7ar%20o%20treinamento%20ProWall"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-base sm:text-lg px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02] flex items-center justify-center gap-3 animate-pulse-gold"
            >
              Quero Começar o Treinamento
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap gap-4 sm:gap-6 mb-10 sm:mb-12"
          >
            {[
              { icon: Award, text: "Profissão Lucrativa" },
              { icon: DollarSign, text: "Renda Real" },
              { icon: TrendingUp, text: "Mercado em Crescimento" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-xs sm:text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Video de Apresentação do Curso - full width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full"
        >
          <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-gold/30 shadow-gold-lg bg-card">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 bg-background/80">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold cursor-pointer hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-1">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-muted-foreground font-display font-semibold text-xs sm:text-sm tracking-wide uppercase">
                Vídeo de Apresentação do Curso
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
