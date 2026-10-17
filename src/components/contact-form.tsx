"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { submitContactMessage } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

export function ContactForm() {
  const [result, setResult] = useState<{
    status: "success" | "error";
    message: string;
  } | null>(null);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setResult(null);
    try {
      const response = await submitContactMessage(values);
      setResult(response);
      if (response.status === "success") reset();
    } catch {
      setResult({
        status: "error",
        message:
          "Une erreur inattendue a empêché l’envoi. Veuillez réessayer plus tard.",
      });
    }
  });

  return (
    <form className="grid gap-5" noValidate onSubmit={onSubmit}>
      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="contact-name">
          Nom
        </label>
        <input
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
          autoComplete="name"
          className="min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25"
          id="contact-name"
          maxLength={80}
          minLength={2}
          required
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-2 text-sm text-red-700 dark:text-red-300" id="contact-name-error">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="contact-email">
          Adresse e-mail
        </label>
        <input
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          className="min-h-12 w-full rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25"
          id="contact-email"
          maxLength={254}
          required
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-2 text-sm text-red-700 dark:text-red-300" id="contact-email-error">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium" htmlFor="contact-message">
          Votre message
        </label>
        <textarea
          aria-describedby={
            errors.message
              ? "contact-message-help contact-message-error"
              : "contact-message-help"
          }
          aria-invalid={Boolean(errors.message)}
          className="min-h-36 w-full resize-y rounded-xl border border-border bg-background px-4 py-3 text-base outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/25"
          id="contact-message"
          maxLength={4000}
          minLength={20}
          required
          {...register("message")}
        />
        <p className="mt-2 text-xs text-muted-foreground" id="contact-message-help">
          Entre 20 et 4 000 caractères.
        </p>
        {errors.message && (
          <p className="mt-2 text-sm text-red-700 dark:text-red-300" id="contact-message-error">
            {errors.message.message}
          </p>
        )}
      </div>

      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="contact-website">Laissez ce champ vide</label>
        <input
          autoComplete="off"
          id="contact-website"
          tabIndex={-1}
          {...register("website")}
        />
      </div>

      {result && (
        <p
          aria-live="polite"
          className={`rounded-xl border p-4 text-sm leading-6 ${
            result.status === "success"
              ? "border-accent/30 bg-accent/10 text-foreground"
              : "border-red-500/40 bg-red-500/10 text-red-800 dark:text-red-200"
          }`}
          role={result.status === "error" ? "alert" : "status"}
        >
          {result.message}
        </p>
      )}

      <Button className="w-full sm:w-fit" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Envoi en cours…" : "Envoyer le message"}
      </Button>
      <p className="text-xs leading-5 text-muted-foreground">
        Vos coordonnées sont utilisées uniquement pour répondre à votre message.
      </p>
    </form>
  );
}
