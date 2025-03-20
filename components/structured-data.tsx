import Script from 'next/script'

export function EnhancedFinancialServiceSchema() {
  return (
    <Script
      id="financial-service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FinancialService",
          "name": "Consultoria Financeira",
          "url": "https://consultoriafinanceira.com.br",
          "logo": "https://consultoriafinanceira.com.br/logo.png",
          "description": "Oferecemos soluções financeiras, como empréstimos FGTS para negativados, crédito consignado digital, microcrédito, refinanciamento, financiamento veicular e muito mais, com as melhores condições do mercado.",
          "slogan": "Soluções financeiras personalizadas para transformar sua vida",
          "knowsAbout": [
            "Empréstimos Pessoais", 
            "Financiamento Imobiliário", 
            "Renegociação de Dívidas", 
            "Crédito para Negativados",
            "Portabilidade de Dívidas",
            "Educação Financeira",
            "Empréstimo Consignado",
            "Microcrédito",
            "Refinanciamento",
            "Empréstimo FGTS",
            "Financiamento Veicular",
            "Empréstimo Online Sem Burocracia"
          ],
          "areaServed": {
            "@type": "State",
            "name": "São Paulo"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Paulista, 1000",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "01310-100",
            "addressCountry": "BR"
          },
          "telephone": "+551199999999",
          "email": "contato@consultoriafinanceira.com.br",
          "sameAs": [
            "https://www.facebook.com/consultoriafinanceira",
            "https://www.instagram.com/consultoriafinanceira",
            "https://www.linkedin.com/company/consultoriafinanceira"
          ],
          "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços Financeiros",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Empréstimo FGTS para Negativados",
                  "description": "Utilize seu saldo do FGTS para obter um empréstimo com taxas reduzidas, mesmo se estiver negativado."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Financiamento Veicular",
                  "description": "Conquiste seu carro próprio com financiamento acessível e sem burocracia."
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Microcrédito para Pequenos Negócios",
                  "description": "Crédito rápido para MEIs e pequenos empresários alavancarem seus negócios."
                }
              }
            ]
          },
          "review": [
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Ana Silva"
              },
              "reviewBody": "Consegui um empréstimo para expandir meu negócio com taxas ótimas. Atendimento excelente!"
            },
            {
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Carlos Oliveira"
              },
              "reviewBody": "Renegociei minhas dívidas e organizei minha vida financeira. Recomendo muito!"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "450"
          },
          "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quem pode solicitar um empréstimo FGTS para negativados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Qualquer trabalhador que possua saldo disponível no FGTS pode solicitar esse empréstimo, mesmo com restrição no nome."
                }
              },
              {
                "@type": "Question",
                "name": "Quais as vantagens do microcrédito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O microcrédito oferece valores menores, com taxas reduzidas e liberação rápida para pequenos empreendedores."
                }
              }
            ]
          }
        })
      }}
    />
  )
}
