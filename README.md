# Portfolio

Personal portfolio site, a single-page application deployed on GitHub Pages.
Built as a showcase of frontend craft rather than a reusable product.

## Highlights

**Modern, current stack.**
TypeScript 6, React 19 with the React Compiler (automatic memoization), Vite 8
with Rolldown, Tailwind CSS 4. All on their latest major versions.

**Accessibility-first.**
`prefers-reduced-motion` respected globally: all Framer Motion animations are
conditionally disabled, and a CSS media query removes all transitions and
animations. Touch devices are detected and the cursor glow effect is disabled
for them. Semantic HTML throughout (`<header>`, `<main>`, `<nav>`, `<footer>`,
`<ol>`, `<article>`). `aria-label` on all icon-only links and buttons.
`aria-hidden="true"` on decorative SVGs. Custom focus-visible outline styles.

**Performance-conscious builds.**
The React Compiler eliminates manual `useMemo` and `useCallback`. CSS is
injected via JavaScript (`cssInjectedByJsPlugin`) so asset paths work cleanly
under the GitHub Pages sub-path (`/portfolio/`). No router, no state management
library, no shadcn/ui: the page is a single scrolling composition of sections.

**SEO and structured data.**
JSON-LD `Person` schema, Open Graph tags, canonical URL, `sitemap.xml`, and
`robots.txt`.

## Tech Stack

| Technology | Role | Notes |
|---|---|---|
| TypeScript 6 | Language |  |
| React 19 | UI | With React Compiler for auto-memoization |
| Vite 8 | Build | |
| Tailwind CSS 4 | Styling |  |
| Framer Motion | Animation | Scroll-triggered reveals, staggered delays |
| Geist + Geist Mono | Fonts | Vercel variable fonts, minimal weight subset |
| clsx + tailwind-merge |  |
| Biome  | Linting & formatting | |
| GitHub Actions | CI/CD | Quality gate on PRs, auto-deploy to Pages on merge to `main` |

## Install & Run

```bash
bun install
bun dev          # start dev server (localhost:5173)
bun run build    # type check + production build to dist/
```

## Project Structure

```
src/
  constants/      all site data: personal info, timeline, projects, technologies
  types/          TypeScript interfaces for all data shapes
  components/     section components (Hero, Timeline, Projects, etc.) and shared UI
  providers/      theme context and toggle
  hooks/          useReducedMotion
  lib/            cn() utility, animation variants, animation config
  icons/          12 hand-crafted SVG icon components
index.html        Open Graph, structured data, inline theme script (no FOUC)
public/           favicon.svg, sitemap.xml, robots.txt
```

## License

MIT. Copyright 2026 Jacopo Trompeo.

