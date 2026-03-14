import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.6 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border md:hidden"
    >
      <a
        href="https://wa.me/5511999999999?text=Quero%20garantir%20minha%20vaga%20na%20Profiss%C3%A3o%20ProWall"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-gold-gradient text-primary-foreground font-display font-bold py-4 rounded-xl shadow-gold"
      >
        Garantir minha vaga
        <ArrowRight className="w-5 h-5" />
      </a>
    </motion.div>
  );
};

export default FloatingCTA;
