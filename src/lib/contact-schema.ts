import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Indiquez un nom d’au moins 2 caractères.").max(80),
  email: z.string().trim().email("Indiquez une adresse e-mail valide.").max(254),
  message: z
    .string()
    .trim()
    .min(20, "Le message doit contenir au moins 20 caractères.")
    .max(4000, "Le message ne peut pas dépasser 4 000 caractères."),
  website: z.string().max(0, "Champ invalide.").optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
