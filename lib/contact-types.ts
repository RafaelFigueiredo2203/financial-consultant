// src/types/profile.ts
import { z } from "zod";

export const contactSchema = z
  .object({
    name: z
      .string()
      .min(2, "Nome deve ter pelo menos 2 caracteres")
      .optional(),
    email: z.string().email("E-mail inválido").optional(),
    phone: z
      .string()
      .optional(),
    date:z.string(),
    }
  );

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactData {
  naem: string;
  email: string;
  phone: string;
  date: Date | string;
}