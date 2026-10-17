export type TimelineEntry = {
  period: string;
  title: string;
  organization: string;
  description: string;
  kind: "engagement" | "formation" | "reconnaissance";
};

export const experience: TimelineEntry[] = [
  {
    period: "En cours",
    title: "Président, coordonnateur et initiateur",
    organization: "Haïti Santé Moderne (HSM)",
    description:
      "Porte des initiatives de leadership, de formation médicale et de sensibilisation pour contribuer au renforcement du système sanitaire haïtien.",
    kind: "engagement",
  },
  {
    period: "En cours",
    title: "Gestionnaire de projet",
    organization: "ALPHA-PRÉFAC",
    description:
      "Accompagne une initiative axée sur l’éducation et l’engagement des jeunes en Haïti.",
    kind: "engagement",
  },
  {
    period: "Janvier 2025",
    title: "Contribution reconnue",
    organization: "Clubs Surgimed",
    description:
      "Honoré publiquement pour sa contribution à la concrétisation de clubs de mentorat, de justice sociale et d’excellence scientifique en santé.",
    kind: "reconnaissance",
  },
  {
    period: "Études actuelles",
    title: "Étudiant en sciences politiques",
    organization: "Université d’État d’Haïti",
    description:
      "Un parcours en sciences politiques mené en parallèle d’études en médecine.",
    kind: "formation",
  },
  {
    period: "Études actuelles",
    title: "Étudiant en médecine",
    organization: "Université de la Fondation Dr Aristide",
    description:
      "Poursuit des études de médecine au sein de l’Université de la Fondation Dr Aristide.",
    kind: "formation",
  },
];
