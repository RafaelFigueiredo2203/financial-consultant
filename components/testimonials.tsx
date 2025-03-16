"use client"

import anaImage from '@/assets/ana.jpg'
import carlosImage from '@/assets/carlos.jpg'
import marianaImage from '@/assets/mariana.jpg'
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Empresária",
      content:
        "Consegui um empréstimo para expandir meu negócio com condições excelentes. O atendimento foi rápido e personalizado!",
      rating: 5,
      image: anaImage,
      color: "from-primary to-purple-400",
    },
    {
      name: "Carlos Oliveira",
      role: "Professor",
      content: "Renegociei minhas dívidas e finalmente consegui organizar minha vida financeira. Recomendo a todos!",
      rating: 5,
      image: carlosImage,
      color: "from-secondary to-cyan-400",
    },
    {
      name: "Mariana Costa",
      role: "Autônoma",
      content:
        "A consultoria financeira me ajudou a planejar melhor meus investimentos. Profissionais competentes e atenciosos.",
      rating: 5,
      image: marianaImage,
      color: "from-accent to-pink-400",
    },
  ]

  return (
    <section
      id="depoimentos"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-white bg-gradient-to-r from-secondary to-accent rounded-full">
              Histórias de sucesso
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary">
              O que nossos clientes dizem
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Histórias reais de pessoas que transformaram sua vida financeira com nossos serviços
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-md hover:shadow-lg transition-all backdrop-blur-sm bg-white/80 dark:bg-black/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="space-y-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 fill-yellow-400 text-yellow-400`} />
                  ))}
                </div>
                <p className="text-muted-foreground">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className={`rounded-full p-0.5 bg-gradient-to-r ${testimonial.color}`}>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Foto de ${testimonial.name}, ${testimonial.role}`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div>
                  <h3 className={`font-semibold bg-clip-text text-transparent bg-gradient-to-r ${testimonial.color}`}>
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

