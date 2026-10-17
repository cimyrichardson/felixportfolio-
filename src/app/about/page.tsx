import type { Metadata } from "next";
import { BookOpen, HeartHandshake, MapPin } from "lucide-react";

import { PersonJsonLd } from "@/components/person-json-ld";
import { SkillsSection } from "@/components/skills-section";
import { Timeline } from "@/components/timeline";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experience } from "@/content/experience";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Le parcours de Félix Jonathan, étudiant en médecine et sciences politiques, et président de Haïti Santé Moderne.",
  openGraph: {
    title: "À propos — Félix Jonathan",
    description:
      "Un parcours entre études, santé publique et engagement citoyen en Haïti.",
    url: "/about",
    images: ["/og-image.svg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <PersonJsonLd />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              À propos
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Un parcours entre sciences, santé et engagement.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Je suis Félix Jonathan, étudiant en sciences politiques à
              l’Université d’État d’Haïti et en médecine à l’Université de la
              Fondation Dr Aristide. Je suis également président,
              coordonnateur et initiateur de Haïti Santé Moderne.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Mon engagement s’articule autour du renforcement du système
              sanitaire haïtien, de la formation médicale et de la
              sensibilisation. J’anime des visioconférences éducatives, je
              gère ALPHA-PRÉFAC et je contribue aux initiatives qui ouvrent
              des espaces de mentorat et d’excellence scientifique.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Badge variant="secondary">
                <MapPin aria-hidden="true" className="mr-1.5 size-3.5" />
                {siteConfig.location}
              </Badge>
              <Badge variant="secondary">
                <BookOpen aria-hidden="true" className="mr-1.5 size-3.5" />
                Médecine & sciences politiques
              </Badge>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="p-6 sm:col-span-2 sm:p-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <HeartHandshake aria-hidden="true" className="size-5" />
              </span>
              <h2 className="mt-5 text-xl font-semibold tracking-tight">
                Une santé plus forte se construit ensemble.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                À travers HSM, l’ambition est de mobiliser le leadership, la
                formation médicale et la sensibilisation au service des
                communautés haïtiennes.
              </p>
            </Card>
            <Card className="p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Engagement
              </p>
              <p className="mt-3 text-lg font-semibold">Haïti Santé Moderne</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Initiateur, coordonnateur et président.
              </p>
            </Card>
            <Card className="p-6">
              <p className="font-mono text-xs uppercase tracking-wider text-accent">
                Reconnaissance
              </p>
              <p className="mt-3 text-lg font-semibold">Clubs Surgimed</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Contribution honorée publiquement en janvier 2025.
              </p>
            </Card>
          </div>
        </div>

        <SkillsSection />

        <section aria-labelledby="schools-heading" className="pb-14">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Formation antérieure
            </p>
            <h2
              className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              id="schools-heading"
            >
              Un parcours scolaire à plusieurs étapes.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {siteConfig.previousSchools.map((school) => (
              <li
                className="rounded-xl border border-border bg-surface p-5 text-sm font-medium leading-6"
                key={school}
              >
                {school}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="timeline-heading" className="pb-4">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Repères
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              id="timeline-heading"
            >
              Parcours & engagements
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Les dates de scolarité n’étant pas confirmées, elles ne sont pas
              indiquées ici.
            </p>
          </div>
          <Timeline entries={experience} />
        </section>
      </section>
    </>
  );
}
