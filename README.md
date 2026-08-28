# Bishu Resume

A static-first developer résumé/portfolio built with Astro 7 and Tailwind CSS 4.

## Why Astro?

This site is mostly content, so the default should be HTML + CSS—not a hydrated React application. Astro keeps JavaScript out of the client bundle unless a component explicitly needs it, while still leaving room for framework islands later.

## Stack

- Astro 7
- TypeScript
- Tailwind CSS 4 via `@tailwindcss/vite`
- Lucide Astro icons
- GitHub Pages deployment through GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Validation and production build:

```bash
npm run check
npm run build
```

## Content

Résumé content lives in `src/data/resume.ts`. Keep claims evidence-based and update project descriptions as the repositories evolve.

## Deployment

The site is configured for:

`https://bishuk-dev.github.io/bishuk-resume/`

The workflow in `.github/workflows/deploy.yml` validates and builds the site on every push to `main`, then publishes `dist/` with GitHub Pages.

For the first deployment, open **Settings → Pages** in this repository and set **Source** to **GitHub Actions** if it is not already selected.

## Design direction

The visual language is inspired by a futuristic technical scanner/dossier UI, but intentionally avoids copyrighted Pokémon names, logos, characters, and exact iconography. The résumé hierarchy always takes priority over theme.
