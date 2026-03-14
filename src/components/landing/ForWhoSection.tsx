import { motion } from "framer-motion";
import { UserCheck, DollarSign, Briefcase, Gem, Rocket, Globe } from "lucide-react";

const profiles = [
  { icon: UserCheck, title: "Quem quer aprender uma nova profissão", desc: "Mesmo sem experiência prévia na área." },
  { icon: DollarSign, title: "Quem deseja aumentar a renda", desc: "Com um serviço de alto valor agregado." },
  { icon: Briefcase, title: "Profissionais que querem se especializar", desc: "Eleve seu nível técnico e destaque-se." },
  { icon: Gem, title: "Quem quer sair do amador", desc: "E atuar com padrão profissional de excelência." },
  { icon: Rocket, title: "Quem quer empreender", desc: "Com serviço especializado e alta demanda." },
  { icon: Globe, title: "Quem quer atuar em diferentes mercados", desc: "Habilidade valorizada no Brasil e no exterior." },
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
            Para quem é
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Essa imersão foi feita{" "}
            <span className="text-gold-gradient">para você</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 hover:border-gold/50 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
