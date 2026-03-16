import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forWho = [
  "Pessoas que querem aprender uma nova profissão lucrativa",
  "Quem deseja trabalhar por conta própria com autonomia",
  "Profissionais da construção que querem agregar um serviço premium",
  "Quem busca uma nova fonte de renda com retorno rápido",
  "Quem quer entrar em um mercado valorizado e em crescimento",
  "Empreendedores que querem montar um negócio de serviços",
];

const notForWho = [
  "Quem procura dinheiro fácil sem esforço",
  "Quem não está disposto a aprender e praticar",
  "Quem não quer atuar com excelência e profissionalismo",
];

const ForWhoSection = () => {
  return (
    <section id="para-quem" className="section-padding bg-secondary">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            É para você?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Descubra se o ProWall é{" "}
            <span className="text-gold-gradient">o seu próximo passo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-gold/30 rounded-2xl p-8 shadow-gold"
          >
            <h3 className="font-display font-bold text-xl mb-6 text-gold">✅ Este treinamento é para você se:</h3>
            <ul className="space-y-4">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-card border border-border rounded-2xl p-8"
          >
            <h3 className="font-display font-bold text-xl mb-6 text-muted-foreground">❌ Este treinamento NÃO é para:</h3>
            <ul className="space-y-4">
              {notForWho.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
