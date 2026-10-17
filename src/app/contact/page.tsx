import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contacter Félix Jonathan au sujet d’initiatives en santé, d’éducation et d’engagement citoyen en Haïti.",
  openGraph: {
    title: "Contact — Félix Jonathan",
    description:
      "Échanger autour d’une collaboration ou d’une initiative en Haïti.",
    url: "/contact",
    images: ["/og-image.svg"],
  },
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Une idée à faire grandir ?
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
            Pour parler de santé, d’éducation ou d’engagement citoyen, écrivez-moi
            via le formulaire.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <MapPin aria-hidden="true" className="size-4" />
              </span>
              <div>
                <p className="text-xs text-muted-foreground">Localisation</p>
                <p className="mt-0.5 text-sm font-medium">{siteConfig.location}</p>
              </div>
            </div>
            {siteConfig.email ? (
              <a
                className="flex w-fit items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                href={`mailto:${siteConfig.email}`}
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Mail aria-hidden="true" className="size-4" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    E-mail
                  </span>
                  <span className="mt-0.5 block text-sm font-medium">
                    {siteConfig.email}
                    <ArrowUpRight aria-hidden="true" className="ml-1 inline size-3.5" />
                  </span>
                </span>
              </a>
            ) : null}
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-8">
          <h2 className="mb-6 text-xl font-semibold tracking-tight">
            Envoyer un message
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
