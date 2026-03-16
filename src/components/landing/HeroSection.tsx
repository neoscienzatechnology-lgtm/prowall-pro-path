import { motion } from "framer-motion";
import { ArrowRight, Award, TrendingUp, DollarSign } from "lucide-react";
import logoProwall from "@/assets/logo-prowall.png";
import heroPhoto from "@/assets/photo-1.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroPhoto}
          alt="Instalação profissional de papel de parede - Profissão ProWall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container-landing relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={logoProwall} alt="ProWall" className="h-20 mb-8" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-gold-gradient px-4 py-1.5 rounded-full text-sm font-display font-bold text-primary-foreground tracking-wide uppercase">
              Treinamento Presencial · 3 Dias
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold leading-[1.1] mb-6"
          >
            Torne-se um Instalador Profissional de Papel de Parede e{" "}
            <span className="text-gold-gradient">Comece Seu Próprio Negócio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            Aprenda o método usado por profissionais para instalar papéis de parede premium,
            atender clientes de alto padrão e transformar essa habilidade em{" "}
            <strong className="text-foreground">renda real e autonomia profissional</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <a
              href="https://wa.me/5511999999999?text=Quero%20come%C3%A7ar%20o%20treinamento%20ProWall"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-gradient hover:bg-gold-gradient-hover text-primary-foreground font-display font-bold text-lg px-8 py-4 rounded-lg shadow-gold transition-all duration-300 hover:shadow-gold-lg hover:scale-[1.02] flex items-center justify-center gap-3 animate-pulse-gold"
            >
              Quero Começar o Treinamento
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Award, text: "Profissão Lucrativa" },
              { icon: DollarSign, text: "Renda Real" },
              { icon: TrendingUp, text: "Mercado em Crescimento" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-muted-foreground">
                <Icon className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
