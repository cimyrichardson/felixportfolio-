import type { NextRequest } from "next/server";

import { projects } from "@/content/projects";

const projectSlugs = new Set(projects.map((project) => project.slug));

const notFoundDocument = `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex">
    <title>404 — Félix Jonathan</title>
    <style>
      :root { color-scheme: light dark; font-family: system-ui, sans-serif; background: #f6f8f5; color: #17221b; }
      @media (prefers-color-scheme: dark) { :root { background: #0d1511; color: #edf4ee; } }
      * { box-sizing: border-box; }
      body { display: grid; min-height: 100vh; margin: 0; padding: 1.5rem; place-items: center; }
      main { width: min(100%, 68rem); margin: auto; }
      p { color: #087a55; font: 600 .875rem/1.5 ui-monospace, monospace; }
      @media (prefers-color-scheme: dark) { p { color: #70e0a8; } }
      h1 { max-width: 38rem; margin: 1rem 0; font-size: clamp(2rem, 7vw, 3.5rem); line-height: 1.08; letter-spacing: -.04em; }
      .description { max-width: 32rem; color: #48584e; line-height: 1.7; }
      @media (prefers-color-scheme: dark) { .description { color: #b5c4b9; } }
      a { display: inline-flex; min-height: 2.75rem; align-items: center; margin: 1.5rem 1rem 0 0; border: 1px solid #087a55; border-radius: .75rem; padding: .65rem 1rem; color: inherit; font-weight: 600; text-decoration: none; }
      a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px; }
      .primary { background: #087a55; color: #fff; }
      @media (prefers-color-scheme: dark) { .primary { background: #70e0a8; color: #082016; } }
    </style>
  </head>
  <body>
    <main id="contenu">
      <p>404 / Page introuvable</p>
      <h1>Cette page n’est pas dans le parcours.</h1>
      <div class="description">Le lien est peut-être incorrect ou la page a été déplacée.</div>
      <a class="primary" href="/">Retour à l’accueil</a>
      <a href="/projects">Voir les projets</a>
    </main>
  </body>
</html>`;

export function proxy(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/")[2];
  const isRscRequest =
    request.headers.get("rsc") === "1" ||
    request.headers.has("next-router-state-tree");

  if (
    (request.method !== "GET" && request.method !== "HEAD") ||
    isRscRequest ||
    !slug ||
    projectSlugs.has(slug)
  ) {
    return;
  }

  return new Response(request.method === "HEAD" ? null : notFoundDocument, {
    status: 404,
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "text/html; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export const config = {
  matcher: "/projects/:slug",
};
