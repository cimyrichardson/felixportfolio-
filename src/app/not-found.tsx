import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 py-16 sm:px-8">
      <p className="font-mono text-sm text-accent">404 / Page introuvable</p>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Cette page n’est pas dans le parcours.
      </h1>
      <p className="mt-4 max-w-lg leading-7 text-muted-foreground">
        Le lien est peut-être incorrect ou la page a été déplacée.
      </p>
      <Button asChild className="mt-7" variant="secondary">
        <Link href="/">
          <ArrowLeft aria-hidden="true" className="size-4" />
          Retour à l’accueil
        </Link>
      </Button>
    </section>
  );
}
