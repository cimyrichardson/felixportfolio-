import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <Link
        aria-label={`Voir l’étude de cas : ${project.title}`}
        className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        href={`/projects/${project.slug}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            alt={`Illustration du projet ${project.title}`}
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            src={project.cover}
          />
          <span className="absolute left-4 top-4">
            <Badge>{project.category}</Badge>
          </span>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </div>
          <div aria-label="Domaines" className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 3).map((item) => (
              <Badge key={item} variant="secondary">
                {item}
              </Badge>
            ))}
          </div>
          <p className="mt-5 font-mono text-xs text-muted-foreground">
            {project.year}
          </p>
        </div>
      </Link>
    </Card>
  );
}
