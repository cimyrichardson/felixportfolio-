"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/content/site";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  return href === "/"
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <a
        className="sr-only z-50 rounded-md bg-accent px-4 py-3 font-semibold text-accent-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#contenu"
      >
        Passer au contenu
      </a>
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          aria-label={`${siteConfig.name}, accueil`}
          className="group inline-flex items-center gap-3 rounded-md"
          href="/"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-xs font-bold tracking-tight text-accent-foreground">
            FJ
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Félix Jonathan
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                aria-current={active ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  active ? "text-accent" : "text-muted-foreground"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <span className="hidden lg:block">
            <Button asChild size="sm" variant="secondary">
              <Link href="/contact">
                Échanger
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </span>
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                aria-label="Ouvrir le menu"
                className="md:hidden"
                size="icon"
                variant="ghost"
              >
                <Menu aria-hidden="true" className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="md:hidden">
              <SheetTitle className="mb-1 pr-12 text-lg font-semibold">
                Navigation
              </SheetTitle>
              <SheetDescription className="text-sm text-muted-foreground">
                Explorer le portfolio de Félix Jonathan.
              </SheetDescription>
              <nav aria-label="Navigation mobile" className="mt-8 grid gap-2">
                {navigation.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        aria-current={active ? "page" : undefined}
                        className={`rounded-xl px-4 py-3 text-base font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          active
                            ? "bg-accent/10 text-accent"
                            : "text-foreground"
                        }`}
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
