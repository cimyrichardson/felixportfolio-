# Portfolio de Félix Jonathan

Portfolio personnel en français consacré aux engagements de Félix Jonathan en Haïti : santé, éducation, jeunesse et leadership. Les initiatives et les informations biographiques sont regroupées dans `src/content/` afin de faciliter leur mise à jour.

## Stack

- Next.js 16 App Router, React 19 et TypeScript strict
- Tailwind CSS 4 et composants UI locaux inspirés de shadcn/ui, construits avec Radix UI
- Geist Sans et Geist Mono via `next/font`
- `next/image` pour les visuels SVG locaux
- Framer Motion pour le filtrage animé des projets, avec prise en charge de `prefers-reduced-motion`
- Lucide React, `next-themes`, React Hook Form, Zod et Resend

Les pages restent des Server Components par défaut. Les composants client sont limités à la navigation interactive, au thème, aux filtres, aux primitives Radix et au formulaire.

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Autres commandes :

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Structure

```text
src/
  app/                         Routes App Router, métadonnées, manifeste et SEO
    projects/[slug]/           Études de cas statiques générées depuis les données
    contact/                   Page et Server Action du formulaire
  components/                  Sections, navigation et composants UI
    ui/                        Primitives accessibles de style shadcn/ui
  content/                     Profil, projets, compétences et parcours typés
  lib/                         Classes partagées et schéma Zod
  proxy.ts                     404 HTTP avant le streaming des slugs inconnus
public/projects/               Illustrations SVG originales sans texte
```

## Design system

- **Couleurs :** base zinc/vert profond en thème sombre et surface zinc clair en thème clair; accent émeraude. Les deux palettes sont définies par variables CSS dans `src/app/globals.css`.
- **Thème :** suit la préférence système au premier chargement; le choix est ensuite mémorisé par `next-themes`.
- **Typographie :** Geist Sans pour l’interface, Geist Mono pour les repères; titres de `text-3xl` à `text-7xl`, texte courant `text-sm` à `text-lg`.
- **Grille et largeur :** conteneur `max-w-6xl`, quatre colonnes de contenu sur mobile et jusqu’à douze colonnes possibles sur grand écran; les cartes de projet s’affichent en une, deux puis trois colonnes.
- **Espacements :** échelle Tailwind cohérente, avec des pas de 4 à 24.
- **Formes et profondeur :** rayons `rounded-lg`/`rounded-xl`, bordures discrètes, une ombre légère par surface.
- **Responsive :** approche mobile-first, breakpoints Tailwind `sm`, `md`, `lg`, `xl`.
- **Accessibilité :** lien d’évitement, navigation mobile Radix, focus visible, libellés de formulaire, erreurs liées aux champs et états annoncés aux lecteurs d’écran. Les animations sont courtes et réduites selon la préférence système.

## Contenu à personnaliser

Les informations fournies par Félix sont présentées sans ajouter de chiffres d’impact. Les dates de ses établissements scolaires antérieurs n’étant pas confirmées, elles sont volontairement omises. Les champs d’e-mail et de réseaux sociaux sont laissés vides dans `src/content/site.ts` pour éviter de publier de fausses coordonnées; les compléter avant publication.

Les six fiches projet utilisent les informations communiquées sur HSM, les webinaires, ALPHA-PRÉFAC, les déplacés internes et les Clubs Surgimed; certaines représentent des axes d’action distincts et peuvent être précisées avec des captures, liens et résultats vérifiables.

## Formulaire de contact

Le formulaire valide les champs avec Zod côté client et serveur, inclut un honeypot et envoie les messages avec Resend. Pour activer l’envoi, copier `.env.example` vers `.env.local`, configurer un domaine expéditeur vérifié chez Resend puis renseigner :

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `NEXT_PUBLIC_SITE_URL` avec le domaine public du site

Sans ces variables, le formulaire affiche clairement qu’il n’est pas configuré et ne prétend pas qu’un message a été transmis. Ne jamais committer `.env.local` ou une clé d’API.

## SEO et déploiement

Chaque route définit ses métadonnées françaises; le site génère aussi sitemap, robots, manifeste PWA, icône et données structurées `Person` sur l’accueil et la page À propos. Remplacer `NEXT_PUBLIC_SITE_URL` par le domaine Vercel final avant publication. Le déploiement recommandé est Vercel avec les variables d’environnement de contact configurées dans les paramètres du projet.

L’objectif de qualité est Lighthouse Performance ≥ 95, Accessibilité 100, Bonnes pratiques 100 et SEO 100. Ces scores doivent être mesurés sur le déploiement final; ils ne sont pas garantis par le code seul.

## Améliorations futures

1. Ajouter un blog MDX avec des articles de sensibilisation sourcés.
2. Ajouter une version créole et/ou anglaise avec une stratégie i18n.
3. Ajouter des analytics respectueux de la vie privée, avec consentement si requis.
