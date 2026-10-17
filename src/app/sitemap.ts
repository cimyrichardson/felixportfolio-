import type { MetadataRoute } from "next";

import { projects } from "@/content/projects";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/about", "/contact"].map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
  const projectRoutes = projects.map((project) => ({
    url: new URL(`/projects/${project.slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
