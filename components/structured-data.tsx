import Script from "next/script"

export function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          name: "Consultoria Financeira",
          url: "https://consultoriafinanceira.com.br",
          logo: "https://consultoriafinanceira.com.br/logo.png",
          description:
            "Oferecemos empréstimos pessoais, financiamentos, renegociação de dívidas e consultoria financeira personalizada.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Paulista, 1000",
            addressLocality: "São Paulo",
            addressRegion: "SP",
            postalCode: "01310-100",
            addressCountry: "BR",
          },
          telephone: "+551199999999",
          email: "contato@consultoriafinanceira.com.br",
          sameAs: [
            "https://www.facebook.com/consultoriafinanceira",
            "https://www.instagram.com/consultoriafinanceira",
            "https://www.linkedin.com/company/consultoriafinanceira",
          ],
          openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Serviços Financeiros",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Empréstimo Pessoal",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Financiamento",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Renegociação de Dívidas",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Consultoria Financeira",
                },
              },
            ],
          },
        }),
      }}
    />
  )
}

export function FAQSchema() {
  return (
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
  )
}

