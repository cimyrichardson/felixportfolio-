"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application route error", error);
  }, [error]);

  return (
    <section
      aria-labelledby="error-heading"
      className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-start justify-center px-5 py-16 sm:px-8"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-muted text-accent">
        <AlertTriangle aria-hidden="true" className="size-5" />
      </span>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight" id="error-heading">
        Une erreur inattendue est survenue.
      </h1>
      <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
        La page n’a pas pu s’afficher. Vous pouvez réessayer ou revenir plus tard.
      </p>
      <Button className="mt-6" onClick={reset}>
        Réessayer
      </Button>
    </section>
  );
}
