import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Preciso ter experiência prévia?", a: "Não. A imersão foi desenhada para atender desde iniciantes completos até profissionais que querem aprimorar suas técnicas." },
  { q: "Essa imersão é para iniciantes?", a: "Sim! O conteúdo parte do zero e avança progressivamente. Você terá toda a base necessária para começar a atuar profissionalmente." },
  { q: "Vou ter prática durante o evento?", a: "Com certeza. A prática real é um dos pilares da imersão. Você vai executar instalações com materiais profissionais e receber correções ao vivo." },
  { q: "O que vou aprender nos 3 dias?", a: "Fundamentos, preparação de superfícies, técnicas de aplicação, alinhamento, acabamento, correção de erros, postura profissional e visão de mercado." },
  { q: "Esse mercado realmente vale a pena?", a: "Sim. O mercado de instalação profissional de papel de parede está em crescimento, com alta demanda, poucos profissionais qualificados e excelente ticket médio." },
  { q: "O evento é presencial?", a: "Sim, 100% presencial. Acreditamos que a prática ao vivo e a correção em tempo real são fundamentais para um aprendizado completo." },
  { q: "Como faço minha inscrição?", a: "Clique no botão 'Garantir minha vaga' e você será direcionado para falar com nossa equipe e finalizar sua inscrição." },
  { q: "As vagas são limitadas?", a: "Sim. Para garantir a qualidade do aprendizado e atenção individual, trabalhamos com turmas reduzidas." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-secondary">
      <div className="container-landing max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Perguntas{" "}
            <span className="text-gold-gradient">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline hover:text-gold transition-colors">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
