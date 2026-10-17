import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/content/site";

const footerLinks = [
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const socials = siteConfig.socials.filter((social) => social.href);

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link className="font-semibold tracking-tight" href="/">
              {siteConfig.name}
            </Link>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Santé, engagement citoyen et leadership au service des
              communautés haïtiennes.
            </p>
          </div>
          <nav aria-label="Navigation de pied de page" className="flex flex-wrap gap-x-5 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
            {socials.map((social) => (
              <a
                className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-accent"
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
                <ArrowUpRight aria-hidden="true" className="size-3.5" />
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {siteConfig.copyrightYear} {siteConfig.name}. Tous droits réservés.</p>
          <p>Fait avec engagement en Haïti.</p>
        </div>
      </div>
    </footer>
  );
}
