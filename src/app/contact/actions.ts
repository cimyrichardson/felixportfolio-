"use server";

import { Resend } from "resend";

import { contactFormSchema, type ContactFormValues } from "@/lib/contact-schema";

export type ContactActionResult = {
  status: "success" | "error";
  message: string;
};

export async function submitContactMessage(
  input: ContactFormValues,
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(input);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Vérifiez les champs du formulaire puis réessayez.",
    };
  }

  if (parsed.data.website) {
    return {
      status: "error",
      message: "Le formulaire n’a pas pu être envoyé.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return {
      status: "error",
      message:
        "Le formulaire de contact n’est pas encore configuré. Vous pouvez réessayer plus tard.",
    };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: parsed.data.email,
    subject: `Message du portfolio — ${parsed.data.name}`,
    text: `Nom : ${parsed.data.name}\nE-mail : ${parsed.data.email}\n\n${parsed.data.message}`,
  });

  if (error) {
    return {
      status: "error",
      message:
        "L’envoi a échoué. Veuillez réessayer plus tard ou utiliser un autre moyen de contact.",
    };
  }

  return {
    status: "success",
    message: "Merci pour votre message. Il a bien été transmis.",
  };
}
