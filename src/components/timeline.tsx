import { BookOpen, HeartHandshake, Medal } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { TimelineEntry } from "@/content/experience";

const kindIcon = {
  engagement: HeartHandshake,
  formation: BookOpen,
  reconnaissance: Medal,
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative ml-2 border-l border-border">
      {entries.map((entry) => {
        const EntryIcon = kindIcon[entry.kind];
        return (
          <li className="relative pb-8 pl-8 last:pb-0 sm:pl-10" key={`${entry.title}-${entry.organization}`}>
            <span className="absolute -left-[1.05rem] top-0 flex size-8 items-center justify-center rounded-full border border-border bg-surface text-accent">
              <EntryIcon aria-hidden="true" className="size-4" />
            </span>
            <Card className="p-5 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold tracking-tight">{entry.title}</h3>
                  <p className="mt-1 text-sm text-accent">{entry.organization}</p>
                </div>
                <span className="w-fit rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                  {entry.period}
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
                {entry.description}
              </p>
            </Card>
          </li>
        );
      })}
    </ol>
  );
}
