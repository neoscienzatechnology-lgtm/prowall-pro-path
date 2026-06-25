import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Preciso ter experiência para começar?", a: "Não. O treinamento foi desenhado para levar qualquer pessoa do zero ao nível profissional. Você não precisa de experiência prévia." },
  { q: "Esse curso é para iniciantes?", a: "Sim! Iniciantes são muito bem-vindos. O conteúdo parte do básico e avança progressivamente. Se você já tem alguma experiência, vai aprimorar sua técnica e aprender a precificar e vender seu serviço." },
  { q: "Quanto um instalador profissional pode cobrar?", a: "Um instalador qualificado pode cobrar entre R$ 500 e R$ 3.000+ por projeto, dependendo do tipo de papel e complexidade. Profissionais com boa agenda faturam R$ 5.000 a R$ 15.000 por mês." },
  { q: "Quais ferramentas vou precisar?", a: "Ensinamos tudo sobre as ferramentas no curso. O kit inicial é acessível e você pode começar com um investimento baixo em materiais." },
  { q: "Em quanto tempo posso começar a trabalhar?", a: "Muitos alunos fecham seus primeiros clientes ainda na primeira semana após concluir o curso. Você sai pronto para atuar." },
  { q: "O curso ensina só técnica ou também como conseguir clientes?", a: "Os dois. Além da parte técnica completa, ensinamos estratégias práticas para conseguir seus primeiros clientes, precificar corretamente e se posicionar no mercado." },
  { q: "O curso é online?", a: "Sim, 100% online. Você acessa as aulas de onde estiver, no seu ritmo, com material didático completo e suporte direto." },
  { q: "As vagas são limitadas?", a: "Sim. Para garantir qualidade e atenção individual, as turmas são reduzidas. Recomendamos inscrição antecipada." },
  { q: "Tem garantia?", a: "Sim! Oferecemos garantia de 7 dias. Se não for para você, devolvemos 100% do valor sem burocracia." },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container-landing max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-display font-bold text-sm tracking-widest uppercase mb-4 block">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold leading-tight">
            Tire suas{" "}
            <span className="text-gold-gradient">dúvidas</span>
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
