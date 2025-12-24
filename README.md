# Koos Simons Portfolio

Personal portfolio site built with [Astro](https://astro.build/).

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Updating Content

All content is centralized in `src/content/profile.yml`. Edit this file to update:

- Personal info and social links
- About section and highlights
- Current work/projects
- Consulting services
- Selected outcomes (case studies)
- Experience and client projects
- Skills
- Education
- Languages

Changes to `profile.yml` automatically update the site on next build.

## Deployment

The site auto-deploys to GitHub Pages on push to `main` via GitHub Actions.

## Stack

- **Framework**: Astro 5.x
- **Styling**: CSS custom properties, no framework
- **Fonts**: Cormorant Garamond (display), DM Sans (body)
- **Deploy**: GitHub Pages via Actions
