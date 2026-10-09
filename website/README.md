# Factmend website

A custom React website built from the approved Option 1 **Sunlit Archive** identity and the existing Factmend brief. The homepage presents the whole memory lifecycle; each product and supporting page uses a distinct composition and explanatory visual.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

Development opens at http://127.0.0.1:8770/. To view the production version, stop the development server, then:

```sh
npm run build
npm run preview
```

The build generates 38 routes plus a custom 404, with real HTML for direct loads, page titles, descriptions, and social metadata. Preview routing serves each route's own HTML instead of hydrating every route from the homepage.

## Site contents

- Homepage with a system-wide hero, five product interactions, a scroll-driven lifecycle, evidence flip card, architecture map, persona paths, FAQ, and assessment CTA.
- Products overview and individual Memory Desk, Review, Proof, Signal, and Report pages.
- Platform, architecture, lifecycle, why memory governance, solutions, persona pages, stack fit, evaluation, trust, company, and pricing.
- Resource library with category filters and three complete articles.
- Assessment/contact flow, workspace access/recovery pages, privacy, and terms.
- Interactive memory workspace with record selection, searching/filtering, correction history, evidence states, recovery, dictionary, and JSON export.

## Design implementation

`src/styles.css` defines semantic colors, type scales, margins, grid behavior, surface/shadow levels, alignment, responsive spacing, controls, tables, diagrams, and interaction states. Instrument Serif and Inter are self-hosted; font licenses are included. The approved logo, favicon set, 39 UI icons, footer social marks, diagrams, and imagery live in `public/assets`.

The established source references remain in the parent workspace: `outputs/factmend-brand-kit/BRAND_IDENTITY.md`, `FOUNDATIONS.md`, `PAGE_VISUAL_MAP.md`, `MOTION_AND_INTERACTIONS.md`, and the existing brief/research documents.

## Motion

See `MOTION_PLAN.md`. GSAP ScrollTrigger and Lenis share a single animation clock. Route changes clean up animations, triggers, and smooth scrolling. A footer motion control and the operating-system preference provide a complete reduced-motion presentation.

The homepage opens with the selected Living Memory Terrain scene above the original hero. It includes generated landscape and mist assets, drifting clouds, a travelling amber seam highlight, Pause/Resume and Skip. See `src/TerrainIntro.jsx`, `src/seamLight.js` and `src/terrain-intro.css`. Asset provenance is saved in `../outputs/intro-motion/manifest.json`; the source artwork remains in `../outputs/intro-visual-directions-v2`.

## Deploy

Use `website` as the Vercel project root, `npm run build` as the build command, and `dist` as output. `vercel.json` configures clean URLs and asset caching. Do not add a blanket SPA rewrite: the route-specific HTML is intentional.

Set the `SITE_URL` environment variable to the final HTTPS origin before building for deployment. This produces canonical URLs, an absolute social-image URL, and a sitemap. No domain has been invented or connected in this build.

## Live integrations still required

The marketing site and local interactions are implemented. The assessment currently validates inputs, produces a reviewable summary, and downloads a local brief; it does not deliver a message. Workspace data is fictional and local. Real authentication, contact delivery/CRM, production memory APIs, company LinkedIn/Crunchbase URLs, hosting, and domain connection require the actual service configuration. Social marks are present but are not linked to invented profiles.

No customer logos, performance results, compliance certificates, or production capabilities have been fabricated. Pricing and legal copy should receive company approval before public launch.

## QA

Run `python3 scripts/check-build.py` after building. The browser review and its scope are recorded in `qa/QA_REPORT.md`. `qa/responsive.html` is a test-only viewport harness and is not shipped by the build.

The opening scene's visual comparison and desktop/mobile motion checks are recorded in `design-qa.md`, with evidence in `qa/terrain-*`.
