export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  cover: string;
  gallery: string[];
  links: { demo?: string; repo?: string };
  year: string;
  role: string;
  results: string[];
  category: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "haiti-sante-moderne",
    title: "Haïti Santé Moderne",
    summary:
      "Une organisation engagée pour contribuer au renforcement du système sanitaire haïtien.",
    description:
      "Félix Jonathan est l’initiateur, le coordonnateur et le président de Haïti Santé Moderne. L’organisation agit autour du leadership, de la formation médicale et de la sensibilisation, avec l’ambition de contribuer au renforcement du système de santé en Haïti.",
    stack: ["Leadership", "Coordination", "Santé publique"],
    cover: "/projects/hsm.svg",
    gallery: ["/projects/hsm.svg", "/projects/health-webinars.svg"],
    links: {},
    year: "En cours",
    role: "Initiateur, coordonnateur et président",
    results: [
      "Une organisation portée par une mission de formation et de sensibilisation en santé.",
      "Des initiatives éducatives coordonnées autour des enjeux sanitaires haïtiens.",
    ],
    category: "Leadership",
    featured: true,
  },
  {
    slug: "webinaires-sante",
    title: "Webinaires de sensibilisation sanitaire",
    summary:
      "Des visioconférences éducatives régulières autour des crises sanitaires courantes en Haïti.",
    description:
      "À travers Haïti Santé Moderne, Félix anime régulièrement des visioconférences éducatives pour partager des repères face aux crises sanitaires courantes en Haïti. Ces rencontres mettent la formation et la sensibilisation au cœur de l’action.",
    stack: ["Formation", "Sensibilisation", "Visioconférence"],
    cover: "/projects/health-webinars.svg",
    gallery: ["/projects/health-webinars.svg", "/projects/community-health.svg"],
    links: {},
    year: "En cours",
    role: "Animation et coordination",
    results: [
      "Des rencontres éducatives organisées de façon régulière.",
      "Une approche de sensibilisation accessible à distance.",
    ],
    category: "Formation",
    featured: true,
  },
  {
    slug: "alpha-prefac",
    title: "ALPHA-PRÉFAC",
    summary:
      "Un projet axé sur l’éducation et l’engagement des jeunes en Haïti.",
    description:
      "ALPHA-PRÉFAC est une initiative que Félix Jonathan gère et qui place l’éducation et l’engagement des jeunes au centre de son action. Les détails des activités et des résultats pourront être complétés avec les informations du projet.",
    stack: ["Éducation", "Jeunesse", "Engagement"],
    cover: "/projects/alpha-prefac.svg",
    gallery: ["/projects/alpha-prefac.svg", "/projects/youth-engagement.svg"],
    links: {},
    year: "En cours",
    role: "Gestion du projet",
    results: [
      "Une initiative dédiée à l’éducation et à l’engagement des jeunes.",
      "Un espace de contribution à la participation de la jeunesse haïtienne.",
    ],
    category: "Jeunesse",
    featured: true,
  },
  {
    slug: "sante-en-contexte-de-deplacement",
    title: "Santé en contexte de déplacement",
    summary:
      "Un axe de sensibilisation sur la gestion des maladies infectieuses dans les camps de déplacés internes.",
    description:
      "Dans le cadre de ses visioconférences éducatives, Félix aborde la gestion des maladies infectieuses dans les camps de déplacés internes. Cette étude de cas présente cet axe thématique sans lui attribuer de données d’impact qui n’ont pas été communiquées.",
    stack: ["Prévention", "Maladies infectieuses", "Déplacement interne"],
    cover: "/projects/community-health.svg",
    gallery: ["/projects/community-health.svg", "/projects/health-webinars.svg"],
    links: {},
    year: "En cours",
    role: "Sensibilisation et animation éducative",
    results: [
      "Une thématique de santé abordée lors de rencontres éducatives.",
      "Un éclairage consacré aux réalités des camps de déplacés internes.",
    ],
    category: "Santé publique",
  },
  {
    slug: "clubs-surgimed",
    title: "Clubs Surgimed",
    summary:
      "Une contribution à la concrétisation de clubs tournés vers le mentorat, la justice sociale et l’excellence scientifique en santé.",
    description:
      "En janvier 2025, Félix Jonathan a été publiquement honoré en tant qu’étudiant ayant grandement contribué à la concrétisation des Clubs Surgimed. Ces clubs mettent en avant le mentorat, la justice sociale et l’excellence scientifique en santé en Haïti.",
    stack: ["Mentorat", "Justice sociale", "Sciences de la santé"],
    cover: "/projects/surgimed.svg",
    gallery: ["/projects/surgimed.svg", "/projects/youth-engagement.svg"],
    links: {},
    year: "Janvier 2025",
    role: "Contribution à la concrétisation des clubs",
    results: [
      "Contribution publiquement reconnue en janvier 2025.",
      "Des clubs consacrés au mentorat, à la justice sociale et à l’excellence scientifique.",
    ],
    category: "Mentorat",
    featured: true,
  },
  {
    slug: "renforcement-sanitaire",
    title: "Renforcement du système sanitaire",
    summary:
      "L’ambition de HSM : conjuguer leadership, formation médicale et sensibilisation.",
    description:
      "Le renforcement du système sanitaire haïtien est la mission qui guide Haïti Santé Moderne. Cet axe rassemble les engagements nommés par l’organisation : leadership, formation médicale et sensibilisation.",
    stack: ["Leadership", "Formation médicale", "Sensibilisation"],
    cover: "/projects/health-systems.svg",
    gallery: ["/projects/health-systems.svg", "/projects/hsm.svg"],
    links: {},
    year: "En cours",
    role: "Président de Haïti Santé Moderne",
    results: [
      "Une mission de renforcement sanitaire portée par HSM.",
      "Des actions articulées autour de la formation et de la sensibilisation.",
    ],
    category: "Santé publique",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
