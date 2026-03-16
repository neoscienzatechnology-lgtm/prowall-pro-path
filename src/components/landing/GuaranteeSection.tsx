import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding">
      <div className="container-landing max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-card border border-gold/30 rounded-2xl p-10 md:p-14 text-center shadow-gold"
        >
          <ShieldCheck className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold mb-4">
            Garantia de <span className="text-gold-gradient">7 Dias</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Se você entrar no treinamento e entender que ele não é para você, poderá solicitar
            reembolso integral dentro de 7 dias. Sem burocracia, sem perguntas.
          </p>
          <p className="text-muted-foreground text-sm mt-4">
            Sua satisfação é nossa prioridade. Confiamos no valor que entregamos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
