export type SkillGroup = {
  category: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Leadership & coordination",
    description: "Faire avancer une initiative avec une vision et une équipe.",
    skills: [
      "Initiative de projets",
      "Coordination",
      "Leadership",
      "Gestion de projet",
      "Engagement des jeunes",
    ],
  },
  {
    category: "Santé & formation",
    description: "Relier les apprentissages médicaux à la sensibilisation.",
    skills: [
      "Formation médicale",
      "Sensibilisation sanitaire",
      "Prévention des maladies infectieuses",
      "Éducation en santé",
      "Excellence scientifique",
    ],
  },
  {
    category: "Communication & transmission",
    description: "Rendre les sujets importants plus accessibles.",
    skills: [
      "Animation de visioconférences",
      "Communication éducative",
      "Vulgarisation en santé",
      "Prise de parole",
      "Sensibilisation communautaire",
    ],
  },
  {
    category: "Engagement citoyen",
    description: "Soutenir les parcours collectifs et la participation.",
    skills: [
      "Mentorat",
      "Justice sociale",
      "Mobilisation de la jeunesse",
      "Engagement communautaire",
      "Renforcement du système sanitaire",
    ],
  },
];
