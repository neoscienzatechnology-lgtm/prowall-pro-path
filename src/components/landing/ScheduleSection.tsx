import { motion } from "framer-motion";

const days = [
  {
    day: "Dia 1",
    title: "Base & Fundamentos",
    items: ["Fundamentos da instalação", "Materiais e ferramentas", "Preparação de superfícies", "Visão técnica", "Base de instalação"],
  },
  {
    day: "Dia 2",
    title: "Execução & Prática",
    items: ["Execução prática intensiva", "Técnicas de aplicação", "Alinhamento e encaixe", "Domínio da técnica", "Prática em diferentes papéis"],
  },
  {
    day: "Dia 3",
    title: "Excelência & Mercado",
    items: ["Acabamento profissional", "Correção de erros", "Postura profissional", "Visão de mercado", "De habilidade a profissão"],
  },
];

const ScheduleSection = () => {
  return (
    <section id="cronograma" className="section-padding">
      <div className="container-landing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Cronograma
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Estrutura dos{" "}
            <span className="text-gold-gradient">3 dias</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {days.map(({ day, title, items }, i) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-gold/20 rounded-2xl p-8 relative overflow-hidden group hover:border-gold/50 transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
              <span className="text-gold font-display font-bold text-sm tracking-widest uppercase">{day}</span>
              <h3 className="font-display font-extrabold text-2xl mt-2 mb-6">{title}</h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
