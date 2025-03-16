import Benefits from "@/components/benefits"
import Faq from "@/components/faq"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Testimonials from "@/components/testimonials"
import type { Metadata } from "next"
import Script from "next/script"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Consultoria Financeira | Soluções financeiras personalizadas",
  description:
    "Oferecemos empréstimos e serviços financeiros com aprovação rápida e sem burocracia. Atendimento personalizado para suas necessidades.",
  keywords: "consultoria financeira, empréstimos, serviços financeiros, crédito pessoal, financiamento",
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <Benefits />
        <Testimonials />
        <Faq />
        <Footer />
        <Toaster richColors closeButton />
      </main>

      {/* Structured Data for FAQs */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quais documentos são necessários para solicitar um empréstimo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Para solicitar um empréstimo, você precisará de documento de identidade (RG/CNH), CPF, comprovante de residência atualizado e comprovante de renda. Dependendo da modalidade, podem ser solicitados documentos adicionais.",
                },
              },
              {
                "@type": "Question",
                name: "Quanto tempo leva para a aprovação do crédito?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nosso processo de análise é rápido e eficiente. Em geral, a aprovação ocorre em até 24 horas após o envio de toda a documentação necessária.",
                },
              },
              {
                "@type": "Question",
                name: "Quais são as taxas de juros praticadas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "As taxas de juros variam de acordo com a modalidade de crédito, valor solicitado e perfil do cliente. Trabalhamos para oferecer as melhores condições do mercado, com taxas a partir de 1,99% ao mês.",
                },
              },
              {
                "@type": "Question",
                name: "É possível renegociar dívidas existentes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, oferecemos serviços de renegociação de dívidas. Nossa equipe especializada irá analisar sua situação e propor as melhores alternativas para reorganizar suas finanças.",
                },
              },
              {
                "@type": "Question",
                name: "Trabalham com empréstimo para negativados?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sim, temos opções de crédito para pessoas com restrições no nome. Cada caso é analisado individualmente para encontrarmos a melhor solução.",
                },
              },
            ],
          }),
        }}
      />
    </>
  )
}

