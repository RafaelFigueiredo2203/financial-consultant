"use client"

import { Button } from "@/components/ui/button"
import { handleWhatsAppClick } from "@/lib/utils"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Consultoria Financeira
            </h3>
            <p className="text-muted-foreground">Soluções financeiras personalizadas para você e sua empresa.</p>
            <div className="flex space-x-4">
              <Link href="https://wa.me/5514981229313?text=Olá! Gostaria de saber mais sobre os serviços financeiros." className="text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              Serviços
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Empréstimo Pessoal
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                  Financiamento
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Renegociação de Dívidas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-yellow-500 transition-colors">
                  Consultoria Financeira
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Contato
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" />
                (14) 98122-9313
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-secondary transition-colors">
                <Mail className="h-4 w-4 text-secondary" />
                raianaketellindesousa@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                <MapPin className="h-4 w-4 text-accent" />
                Mairinque, SP
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Fale Conosco
            </h3>
            <p className="text-muted-foreground">
              Estamos prontos para atender você e oferecer as melhores soluções financeiras.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
            >
              Fale agora no WhatsApp
            </Button>
            <div className="flex justify-end">
              <ModeToggle />
            </div>
          </motion.div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Criado por {''}
            <Link className="hover:text-teal-600 hover:underline" target="blank" href='https://github.com/RafaelFigueiredo2203'>Rafa Figueiredo</Link>. 
          Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

