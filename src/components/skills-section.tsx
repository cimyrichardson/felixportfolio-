import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skillGroups } from "@/content/skills";

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading" className="py-16 sm:py-20">
      <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Ce qui me guide
          </p>
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
            id="skills-heading"
          >
            Des compétences au service du collectif.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted-foreground">
          Des expériences qui croisent santé, transmission et engagement
          citoyen.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <Card className="h-full" key={group.category}>
            <CardHeader className="flex flex-row items-start justify-between gap-4">
              <div>
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {group.category}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {group.description}
                </p>
              </div>
              <ArrowUpRight
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-accent"
              />
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
