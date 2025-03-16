"use client"
import { Button } from "@/components/ui/button"
import { handleWhatsAppClick } from "@/lib/utils"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ContactForm } from "./contact-form"

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 py-12 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full">
                Soluções financeiras personalizadas
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                A solução financeira que você precisa está aqui!
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Empréstimos pessoais, financiamentos, renegociação de dívidas e consultoria financeira personalizada
                para você.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                className="gap-1 group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                onClick={handleWhatsAppClick}
                aria-label="Fale agora no WhatsApp"
              >
                Fale agora no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="#beneficios">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-1 group border-primary/20 hover:bg-primary/10"
                  aria-label="Saiba mais sobre nossos serviços"
                >
                  Saiba mais
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-lg backdrop-blur-sm bg-white/80 dark:bg-black/50"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Solicite uma consulta gratuita
              </h2>
              <p className="text-sm text-muted-foreground">Preencha seus dados e entraremos em contato via WhatsApp</p>
            </div>
            <ContactForm/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

