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
        href="https://pay.kiwify.com.br/gD2NoHl"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-gold-gradient text-primary-foreground font-display font-bold py-4 rounded-xl shadow-gold"
      >
        Começar o Treinamento
        <ArrowRight className="w-5 h-5" />
      </a>
    </motion.div>
  );
};

export default FloatingCTA;
