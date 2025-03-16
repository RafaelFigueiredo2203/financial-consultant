import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Consultoria Financeira | Empréstimos e Serviços Financeiros",
  description:
    "Oferecemos empréstimos pessoais, financiamentos, renegociação de dívidas e consultoria financeira personalizada com aprovação rápida e sem burocracia.",
  keywords:
    "consultoria financeira, empréstimos, serviços financeiros, crédito pessoal, financiamento, renegociação de dívidas, empréstimo para negativados, consultoria financeira personalizada",
  authors: [{ name: "Consultoria Financeira" }],
  creator: "Consultoria Financeira",
  publisher: "Consultoria Financeira",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://financial-consultant-phi.vercel.app/"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    title: "Consultoria Financeira | Empréstimos e Serviços Financeiros",
    description:
      "Oferecemos empréstimos pessoais, financiamentos, renegociação de dívidas e consultoria financeira personalizada com aprovação rápida e sem burocracia.",
    url: "https://financial-consultant-phi.vercel.app/",
    siteName: "Consultoria Financeira",
    images: [
      {
        url: "https://financial-consultant-phi.vercel.app//og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Consultoria Financeira - Soluções financeiras personalizadas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria Financeira | Empréstimos e Serviços Financeiros",
    description:
      "Oferecemos empréstimos pessoais, financiamentos, renegociação de dívidas e consultoria financeira personalizada com aprovação rápida e sem burocracia.",
    images: ["https://financial-consultant-phi.vercel.app//twitter-image.jpg"],
    creator: "@consultoriafinanceira",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "finance",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/dollar.png" sizes="any" />
        <link rel="apple-touch-icon" type="image/png" href="/dollar.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Structured Data for Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Consultoria Financeira",
              url: "https://financial-consultant-phi.vercel.app/",
              logo: "https://financial-consultant-phi.vercel.app/dollar.png",
              description:
                "Oferecemos empréstimos pessoais, financiamentos, renegociação de dívidas e consultoria financeira personalizada.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Centro",
                addressLocality: "Mairinque",
                addressRegion: "SP",
                postalCode: "01310-100",
                addressCountry: "BR",
              },
              telephone: "+5514981229313",
              email: "raianaketellindesousa@gmail.com",
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
      </body>
    </html>
  )
}



import './globals.css'
