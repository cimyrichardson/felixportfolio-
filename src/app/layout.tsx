import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const socialImage = {
  url: "/og-image.svg",
  width: 1200,
  height: 630,
  alt: "Illustration émeraude évoquant la santé et l’engagement collectif",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Santé, engagement & leadership`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "fr_HT",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Santé, engagement & leadership`,
    description: siteConfig.description,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Santé, engagement & leadership`,
    description: siteConfig.description,
    images: [socialImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f8f5" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1511" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>
            <SiteHeader />
            <main className="flex-1" id="contenu">
              {children}
            </main>
            <SiteFooter />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
