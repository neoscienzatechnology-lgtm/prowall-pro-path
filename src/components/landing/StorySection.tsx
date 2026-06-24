import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-landing max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Por que criamos o{" "}
            <span className="text-gold-gradient">ProWall?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 text-muted-foreground text-lg leading-relaxed"
        >
          <p>
            O mercado de papel de parede premium crescia, e continua crescendo, a cada ano. Designers,
            arquitetos e clientes de alto padrão buscam profissionais capacitados. Mas a realidade é dura:{" "}
            <strong className="text-foreground">faltam instaladores qualificados</strong>.
          </p>
          <p>
            A maioria dos profissionais aprende sozinha, comete erros caros, entrega acabamento ruim e cobra
            pouco por não ter confiança no próprio trabalho. Enquanto isso, os poucos profissionais realmente
            capacitados <strong className="text-foreground">faturam alto e têm agenda cheia o ano inteiro</strong>.
          </p>
          <p>
            Foi por isso que criamos o ProWall: para preencher essa lacuna, formar profissionais de excelência
            e dar a pessoas como você a oportunidade de{" "}
            <strong className="text-foreground">entrar em um mercado lucrativo com as ferramentas certas</strong>.
          </p>
          <p>
            O ProWall nasceu da prática. Do canteiro de obras. De milhares de metros de papel instalado.
            E agora, esse conhecimento está disponível para você.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
