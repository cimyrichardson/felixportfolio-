import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Hero } from "@/components/hero";
import { PersonJsonLd } from "@/components/person-json-ld";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { Timeline } from "@/components/timeline";
import { Button } from "@/components/ui/button";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: {
    absolute: "Félix Jonathan — Santé, engagement & leadership",
  },
  description:
    "Découvrez le parcours de Félix Jonathan, ses engagements pour la santé en Haïti et les initiatives portées avec HSM.",
  openGraph: {
    title: "Félix Jonathan — Santé, engagement & leadership",
    description:
      "Des initiatives de santé, d’éducation et d’engagement citoyen en Haïti.",
    url: "/",
    images: ["/og-image.svg"],
  },
};

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <>
      <PersonJsonLd />
      <Hero />
      <section
        aria-labelledby="projects-heading"
        className="border-y border-border bg-surface/45 py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Initiatives choisies
              </p>
              <h2
                className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                id="projects-heading"
              >
                Des idées qui se transforment en engagement.
              </h2>
            </div>
            <Link
              className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-semibold text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              href="/projects"
            >
              Tous les projets
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-5 lg:grid-cols-12">
            {featuredProjects.map((project) => (
              <div className="col-span-4 sm:col-span-2 lg:col-span-4" key={project.slug}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SkillsSection />
        <section aria-labelledby="journey-heading" className="pb-16 sm:pb-24">
          <div className="mb-9 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Parcours
            </p>
            <h2
              className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
              id="journey-heading"
            >
              Des engagements guidés par le sens.
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Un parcours entre médecine, sciences politiques et initiatives
              collectives pour la santé en Haïti.
            </p>
          </div>
          <Timeline entries={experience.slice(0, 3)} />
          <Button asChild className="mt-7" variant="secondary">
            <Link href="/about">
              Découvrir mon parcours
              <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </section>
      </div>

      <section className="border-t border-border bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] opacity-80">
              Faisons avancer les idées
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Une initiative en santé ou en éducation ?
            </h2>
            <p className="mt-3 max-w-xl leading-7 opacity-85">
              Je suis ouvert aux échanges, aux collaborations et aux nouvelles
              façons de soutenir les communautés.
            </p>
          </div>
          <Button asChild className="w-fit bg-background text-foreground hover:bg-background/90">
            <Link href="/contact">
              Entrer en contact
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
