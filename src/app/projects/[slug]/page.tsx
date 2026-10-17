import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, projects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Projet introuvable" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Félix Jonathan`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: project.cover, alt: `Illustration de ${project.title}` }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
      <Button asChild className="mb-8 -ml-3" variant="ghost">
        <Link href="/projects">
          <ArrowLeft aria-hidden="true" className="size-4" />
          Retour aux projets
        </Link>
      </Button>
      <header className="max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>{project.category}</Badge>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground sm:text-xl">
          {project.summary}
        </p>
      </header>

      <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted sm:mt-14">
        <Image
          alt={`Visuel principal du projet ${project.title}`}
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          src={project.cover}
        />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
        <div className="space-y-10">
          <section aria-labelledby="context-heading">
            <h2 className="text-2xl font-semibold tracking-tight" id="context-heading">
              Contexte
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              {project.description}
            </p>
          </section>
          <section aria-labelledby="results-heading">
            <h2 className="text-2xl font-semibold tracking-tight" id="results-heading">
              Contributions & résultats documentés
            </h2>
            <ul className="mt-5 grid gap-3">
              {project.results.map((result) => (
                <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={result}>
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="gallery-heading">
            <h2 className="text-2xl font-semibold tracking-tight" id="gallery-heading">
              Galerie
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted"
                  key={`${image}-${index}`}
                >
                  <Image
                    alt={`Illustration ${index + 1} du projet ${project.title}`}
                    className="object-cover"
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    src={image}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-surface p-6 lg:sticky lg:top-28">
          <h2 className="text-lg font-semibold">Repères</h2>
          <dl className="mt-5 grid gap-5">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Rôle
              </dt>
              <dd className="mt-1.5 text-sm leading-6">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Domaines
              </dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </dd>
            </div>
          </dl>
          <Button asChild className="mt-7 w-full" variant="secondary">
            <Link href="/contact">
              Échanger à ce sujet
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
          </Button>
        </aside>
      </div>
    </article>
  );
}
