type SocialLink = { label: string; href: string };

type SiteConfig = {
  name: string;
  shortName: string;
  role: string;
  description: string;
  location: string;
  email: string;
  url: string;
  organization: string;
  copyrightYear: string;
  socials: SocialLink[];
  previousSchools: string[];
};

export const siteConfig: SiteConfig = {
  name: "Félix Jonathan",
  shortName: "Félix Jonathan",
  role: "Étudiant en médecine et sciences politiques · Président de HSM",
  description:
    "Félix Jonathan relie santé, engagement citoyen et leadership au service des communautés haïtiennes.",
  location: "Haïti",
  email: "",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://felixjonathan.example",
  organization: "Haïti Santé Moderne (HSM)",
  copyrightYear: "2026",
  socials: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "X", href: "" },
    { label: "Dribbble", href: "" },
  ],
  previousSchools: [
    "Institution mixte St Marc de la Fondation St Luc",
    "Collège secondaire Louverture Cleary",
  ],
};
