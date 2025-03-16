import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const handleWhatsAppClick = () => {
  const message = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre os serviços financeiros.`,
  )
  window.open(`https://wa.me/5514981229313?text=${message}`, "_blank")
}