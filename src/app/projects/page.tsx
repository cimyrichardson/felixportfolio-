import type { Metadata } from "next";

import { ProjectGrid } from "@/components/project-grid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Initiatives de Félix Jonathan autour de la santé publique, de la jeunesse, de la formation et de l’engagement citoyen en Haïti.",
  openGraph: {
    title: "Projets — Félix Jonathan",
    description:
      "Découvrir les initiatives menées avec Haïti Santé Moderne, ALPHA-PRÉFAC et les Clubs Surgimed.",
    url: "/projects",
    images: ["/og-image.svg"],
  },
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          Initiatives & engagements
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Des projets ancrés dans le réel.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Des actions en santé, en éducation et auprès de la jeunesse. Les
          résultats présentés ici s’en tiennent aux informations disponibles;
          aucun indicateur chiffré n’est ajouté sans source.
        </p>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  );
}
