# OSARIS Ingénierie — Site vitrine

Site professionnel du bureau d'études techniques OSARIS Ingénierie.
Next.js 15 · React 18 · Tailwind CSS 3 · TypeScript.

## Stack

| Élément | Version |
|---|---|
| Next.js | 15.5.19 (App Router) |
| React / React-DOM | 18.3.1 |
| Tailwind CSS | 3.4.x |
| TypeScript | 5.9.x |
| Animations | motion (Framer Motion) |
| Formulaire e-mail | @emailjs/browser |

## Démarrage

```bash
npm install      # installer les dépendances
npm run dev      # serveur de développement → http://localhost:3000
npm run build    # build de production
npm run start    # servir le build de production
npm run lint     # ESLint
npm audit        # audit de sécurité (doit renvoyer 0 vulnérabilité)
```

## Structure

```
src/
├── app/
│   ├── layout.tsx        # métadonnées SEO, JSON-LD ProfessionalService, polices
│   ├── page.tsx          # assemblage des sections + skip link
│   ├── globals.css       # design tokens (palette, fonds, textes)
│   ├── robots.ts         # robots.txt généré
│   └── sitemap.ts        # sitemap.xml généré
├── components/
│   ├── layout/           # header, footer
│   ├── sections/         # hero, services, references, methodologie, apropos, contact
│   └── ui/               # brand-name, blur-fade, number-ticker, dot-pattern, shimmer-button
└── lib/
    └── utils.ts          # helper cn()
```

## Formulaire de contact (EmailJS)

Le formulaire envoie un e-mail à **contact@osaris-ingenierie.com**.

**Configuration** : copier `.env.example` en `.env.local` et renseigner les trois clés :

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxx
```

Sur Vercel, ajouter ces trois variables dans *Settings > Environment Variables*.

**Comportement de repli** : tant que les clés ne sont pas configurées, le bouton
ouvre automatiquement le client mail de l'utilisateur (pré-rempli vers
contact@osaris-ingenierie.com). Dès que les clés sont présentes, l'envoi se fait
directement en arrière-plan (les clés publiques EmailJS sont conçues pour le client).

## Déploiement Vercel

1. Pousser le dépôt sur GitHub/GitLab.
2. Importer le projet sur Vercel — détection automatique de Next.js.
3. Aucune variable d'environnement obligatoire (sauf clés EmailJS si externalisées).
4. Build command : `next build` (par défaut). Output : automatique.
5. Brancher le domaine `osaris-ingenierie.com`.

> `next.config.js` est en `output: "standalone"` — compatible Vercel et conteneurs.

## SEO

- Métadonnées complètes (title, description, keywords, OpenGraph, Twitter Card).
- Données structurées JSON-LD `ProfessionalService` (adresse, zone, expertises).
- `robots.txt` et `sitemap.xml` générés automatiquement.
- `metadataBase` et `canonical` pointent vers `https://www.osaris-ingenierie.com`.

## Accessibilité

- Lien d'évitement clavier vers le contenu principal.
- Un seul `<h1>`, hiérarchie H1/H2/H3 cohérente.
- Focus visible sur tous les éléments interactifs.
- `prefers-reduced-motion` respecté via le système d'animation.
- Contrastes de texte renforcés (palette night-50 à night-400).
