"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Faq() {
  const faqs = [
    {
      question: "Quais documentos são necessários para solicitar um empréstimo?",
      answer:
        "Para solicitar um empréstimo, você precisará de documento de identidade (RG/CNH), CPF, comprovante de residência atualizado e comprovante de renda. Dependendo da modalidade, podem ser solicitados documentos adicionais.",
    },
    {
      question: "Quanto tempo leva para a aprovação do crédito?",
      answer:
        "Nosso processo de análise é rápido e eficiente. Em geral, a aprovação ocorre em até 24 horas após o envio de toda a documentação necessária.",
    },
    {
      question: "Quais são as taxas de juros praticadas?",
      answer:
        "As taxas de juros variam de acordo com a modalidade de crédito, valor solicitado e perfil do cliente. Trabalhamos para oferecer as melhores condições do mercado, com taxas a partir de 1,99% ao mês.",
    },
    {
      question: "É possível renegociar dívidas existentes?",
      answer:
        "Sim, oferecemos serviços de renegociação de dívidas. Nossa equipe especializada irá analisar sua situação e propor as melhores alternativas para reorganizar suas finanças.",
    },
    {
      question: "Trabalham com empréstimo para negativados?",
      answer:
        "Sim, temos opções de crédito para pessoas com restrições no nome. Cada caso é analisado individualmente para encontrarmos a melhor solução.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-accent to-primary rounded-full">
              Tire suas dúvidas
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-secondary">
              Perguntas Frequentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tire suas dúvidas sobre nossos serviços financeiros
            </p>
          </div>
        </motion.div>
        <div className="mx-auto max-w-3xl space-y-4 py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border rounded-lg mb-4 shadow-sm hover:shadow-md transition-all bg-card"
                >
                  <AccordionTrigger className="text-left px-4 py-2 font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

