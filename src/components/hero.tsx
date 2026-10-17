import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(ellipse_at_70%_20%,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_65%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {siteConfig.location} · {siteConfig.organization}
          </div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Bonjour, je suis
          </p>
          <h1 className="max-w-xl text-5xl font-semibold leading-[1.04] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Félix
            <br />
            <span className="text-accent">Jonathan.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium leading-8 tracking-tight sm:text-2xl">
            Faire grandir les idées qui prennent soin de nous.
          </p>
          <p className="mt-4 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Étudiant en médecine et en sciences politiques, je m’engage pour
            une santé plus accessible à travers le leadership, la formation et
            l’éducation citoyenne.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/projects">
                Découvrir mes projets
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">
                Me contacter
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-11 flex items-center gap-3 border-t border-border pt-6">
            <Avatar aria-hidden="true" className="size-11">
              <AvatarFallback>FJ</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold">{siteConfig.name}</p>
              <p className="text-xs text-muted-foreground">
                Président, coordonnateur et initiateur de HSM
              </p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[34rem]">
          <div className="absolute -right-3 top-5 h-28 w-28 rounded-full border border-accent/25 sm:-right-8 sm:h-40 sm:w-40" />
          <div className="absolute -bottom-5 -left-4 h-24 w-24 rounded-full bg-accent/10 blur-2xl sm:-left-8 sm:h-36 sm:w-36" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface p-3 shadow-xl">
            <div className="relative aspect-[4/4.3] overflow-hidden rounded-[1.5rem] bg-muted">
              <Image
                alt=""
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 44vw"
                src="/projects/hsm.svg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 text-white sm:inset-x-7 sm:bottom-7">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/75">
                  Un engagement en mouvement
                </p>
                <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  Des idées pour une Haïti en meilleure santé.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 px-2 py-4 sm:px-4">
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <ArrowDown aria-hidden="true" className="size-4" />
                </span>
                <p className="text-xs font-medium text-muted-foreground">
                  Explorer l’engagement
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                FJ / HSM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
