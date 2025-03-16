import { ContactFormData, contactSchema } from "@/lib/contact-types";
import { formatDate } from "@/lib/format-date";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';
import { Button } from "./ui/button";


export function ContactForm(){

  const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      date: formatDate(new Date()),
      email:'',
      name:'',
      phone:'',
    },
  });

  const handleFormSubmit = async (data:ContactFormData) => {
   try {
    const response = await fetch('/api/submit-to-notion-table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

  
    if (!response.ok) {
      return toast.error(result.message || 'Erro ao enviar dados.');
    }

    toast.success('Enviado com sucesso!')
   } catch (error:any) {
    toast.error('Erro ao enviar!')
   }
  };


  return(
    <form className="space-y-3"  onSubmit={handleSubmit(handleFormSubmit)}>
    <div className="space-y-1">
      <label
        htmlFor="name"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Nome completo
      </label>
      <input
        id="name"
        type="text"
        {...register("name")}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Digite seu nome"
        aria-required="true"
      />
       {errors.name && <p className="text-red-500 text-xs" role="alert">{errors.name.message}</p>}
    </div>

    <div className="space-y-1">
      <label
        htmlFor="email"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        E-mail
      </label>
      <input
        id="email"
        type="email"
        {...register("email")}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="Digite seu e-mail"
        aria-required="true"
      />
       {errors.email && <p className="text-red-500 text-xs" role="alert">{errors.email.message}</p>}
    </div>

    <div className="space-y-1">
      <label
        htmlFor="phone"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Telefone com WhatsApp
      </label>
      <input
        id="phone"
        type="tel"
        {...register("phone")}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="(11) 99999-9999"
        aria-required="true"
      />
        {errors.phone && <p className="text-red-500 text-xs" role="alert">{errors.phone.message}</p>}
    </div>
    <Button
      className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
      type="submit"
      aria-label="Solicitar contato via WhatsApp"
    >
      {!isSubmitting ? 'Solicitar contato' : <Loader className="animate-spin"/>}
    </Button>
    <p className="text-xs text-muted-foreground text-center">
      Ao enviar, você concorda com nossa{" "}
      <Link href="/privacidade" className="underline hover:text-primary">
        política de privacidade
      </Link>
      .
    </p>
  </form>
  )
}