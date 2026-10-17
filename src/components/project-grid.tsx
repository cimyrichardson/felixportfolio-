"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import type { Project } from "@/content/projects";

type ProjectGridProps = { projects: Project[] };

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [category, setCategory] = useState("Tous");
  const reducedMotion = useReducedMotion();
  const categories = useMemo(
    () => ["Tous", ...new Set(projects.map((project) => project.category))],
    [projects],
  );
  const visibleProjects =
    category === "Tous"
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <div>
      <Tabs
        aria-label="Filtrer les projets par domaine"
        className="mb-8"
        onValueChange={setCategory}
        value={category}
      >
        <TabsList aria-label="Domaines de projet" className="max-w-full">
          {categories.map((item) => (
            <TabsTrigger key={item} value={item}>
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <p aria-live="polite" className="sr-only">
        {visibleProjects.length} projet{visibleProjects.length === 1 ? "" : "s"} affiché
        {visibleProjects.length === 1 ? "" : "s"}
      </p>
      <motion.div
        className="grid grid-cols-4 gap-5 lg:grid-cols-12"
        layout={!reducedMotion}
        transition={{ duration: 0.18 }}
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="col-span-4 h-full sm:col-span-2 lg:col-span-4"
              initial={reducedMotion ? false : { opacity: 0, y: 10 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -6 }}
              key={project.slug}
              layout={!reducedMotion}
              transition={{ duration: 0.18, delay: reducedMotion ? 0 : index * 0.015 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
