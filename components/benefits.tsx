"use client"

import { motion } from "framer-motion"
import { Clock, ShieldCheck, BadgeCheck, Banknote } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Aprovação rápida",
      description: "Análise de crédito em até 24 horas com mínima burocracia.",
      color: "from-primary to-purple-400",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-secondary" />,
      title: "Sem burocracia",
      description: "Processo simplificado e seguro, sem complicações.",
      color: "from-secondary to-cyan-400",
    },
    {
      icon: <BadgeCheck className="h-10 w-10 text-accent" />,
      title: "Atendimento personalizado",
      description: "Soluções financeiras adaptadas às suas necessidades específicas.",
      color: "from-accent to-pink-400",
    },
    {
      icon: <Banknote className="h-10 w-10 text-yellow-500" />,
      title: "Melhores taxas",
      description: "Condições especiais e taxas competitivas do mercado.",
      color: "from-yellow-500 to-amber-400",
    },
  ]

  return (
    <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-primary to-secondary rounded-full">
              Vantagens exclusivas
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Por que escolher nossos serviços?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Oferecemos soluções financeiras com vantagens exclusivas para você
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 rounded-lg border bg-card p-6 shadow-md hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`p-3 rounded-full bg-gradient-to-r ${benefit.color} bg-opacity-10`}>{benefit.icon}</div>
              <h3 className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${benefit.color}`}>
                {benefit.title}
              </h3>
              <p className="text-center text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

