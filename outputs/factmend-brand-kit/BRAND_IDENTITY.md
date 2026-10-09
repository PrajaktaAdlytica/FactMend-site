# Factmend · Sunlit Archive

Brand identity kit v1.1 · 9 October 2026 · selected direction: Option 1

**A calm, legible identity for understanding what a persistent assistant remembers, how a fact changes, and where erasure evidence stops.** This is a design system for a concept-stage company. It is not a claim that the proposed product works today.

This kit builds on the selected Sunlit Archive study and the supplied Startup Website Master Guide. The homepage hero is deliberately deferred at your request. The former isolated archive object is not an approved final hero. Supporting photography in this kit is for section backgrounds; it is not the new hero.

Open [the interactive specimen](index.html), [the page and section visual map](PAGE_VISUAL_MAP.md), [the interaction specification](MOTION_AND_INTERACTIONS.md), and [the asset manifest](asset-manifest.json). The specimen is a local brand review tool, not the complete website.

The full visual foundation system now includes grid/margin controls, actual spacing rulers, all 14 text styles, alignment and baseline examples, five shadow levels, borders and radii. See [FOUNDATIONS.md](FOUNDATIONS.md) and the interactive `#foundations` section.

## 1. Brand foundation

| Element | Direction |
|---|---|
| Audience | Privacy engineering leads at B2B SaaS companies with persistent assistants across tenants. Architects are implementation champions. |
| Positioning | A proposed governance and evidence layer around assistant memory. Native memory storage remains a legitimate alternative. |
| Human promise | Make a remembered fact, its changes and its evidence boundaries understandable. |
| Personality | Precise, warm, candid, composed. Editorial restraint with product-level specificity. |
| Working descriptor | Governed memory for persistent assistants. |
| Primary CTA | Map your memory deletion paths. |
| Visual metaphor | An archive whose records can be scoped, amended and inspected. Amber marks attention or a change; it never automatically means success. |
| Avoid | Decorative AI orbs, neon gradients, generic blue SaaS layouts, ornamental architecture, unsupported trust claims. |

### Voice

Use concrete verbs: scope, inspect, correct, retain, erase, export. Explain the object and the boundary. Prefer “Backup status is unverified” over “Everything is deleted.” Headlines should describe a task or an outcome, not a vague revolution. Body copy follows: what it does → how the example shows it → limit or next action.

Always display **CONCEPT PREVIEW** near the product identity and **DEMO — SYNTHETIC DATA** on product demonstrations. Do not invent customer logos, certifications, benchmark results, quotes, integrations or live account access. Commercial numbers remain hypotheses: $5k pilot / $2k monthly, pending validation.

### Proposed module names — preserve these mappings

| Module | Responsibility | Signature visual |
|---|---|---|
| Factmend Memory Desk | Tenant and purpose-scoped memory API | Bounded scope map |
| Memory Review | Provenance, version history, contradiction | Before/after version ledger |
| Memory Proof | Retention and consent propagation | Policy timeline |
| Memory Signal | Selective erasure receipts across indexes/backups | Destination map and partial receipt |
| Memory Report | Export, migration and evaluation | Portable manifest and comparison table |

Do not rename Signal to “retention” or Proof to “deletion.” The module name must match its task across navigation, cards, diagrams and documentation.

## 2. Logo system

The **Mended Folio** mark is three offset record planes: two olive leaves and an amber revised leaf. It carries the archive theme into a compact, recognisable silhouette. The wordmark uses outlined Instrument Serif lettering, so SVG exports do not depend on an installed font.

- Primary: [horizontal logo](logos/lockup-primary.svg), [mark](logos/mark-primary.svg), [wordmark](logos/wordmark-primary.svg), [stacked logo](logos/stacked-primary.svg).
- Inverse: `logos/*-reverse.svg` for deep olive backgrounds.
- Single colour: `logos/*-mono.svg` for print or constrained use.
- All variants have transparent PNG exports. SVG is the preferred source for web and print.

Clear space: at least one half of the mark width around the lockup; at least one quarter around the standalone mark. Minimum horizontal web width: 128px. Minimum standalone mark: 24px; use simplified favicon at 16px. Default navigation lockup width: 148px desktop, 128px mobile. Never stretch, rotate, add glow, separate the word into two colours or use a pale logo on peach. Use the inverse only where the underlying surface is reliably dark. Do not use the mark as an unlabelled navigation control.

### Favicon and app icons

`favicons/` includes SVG, ICO with 16/32/48 sizes, individual PNGs, 180px Apple touch icon, 192/512 app icons and a safe-zone maskable 512 icon. `site.webmanifest` uses local paths. When installing, serve the folder as `/favicons/` and use:

```html
<link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg">
<link rel="icon" href="/favicons/favicon.ico" sizes="any">
<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png">
<link rel="manifest" href="/favicons/site.webmanifest">
<meta name="theme-color" content="#1F2617">
```

## 3. Colour system

| Primitive | Hex | Use |
|---|---|---|
| Paper | `#F7F4EC` | Main page canvas, relaxed reading |
| White | `#FFFFFF` | Precise records, forms and data surfaces |
| Deep olive | `#1F2617` | Main text, dark chapters, logo |
| Olive | `#59634B` | Secondary text, diagrams, navigation |
| Sage | `#DDE3D2` | Scope fields and selected records |
| Peach | `#F7C9A3` | Editorial transitions and review contexts |
| Amber | `#F49A23` | Primary action, change marker, highlighted path |
| Clay | `#A9482F` | Exceptions, errors and unknown boundaries |

Derived utility colours: subtle divider `#D7D2C5`, control outline `#7B816F`, text link `#8B4608`, labelled success `#49683C`. These are utility roles, not extra competing brand accents.

Light layout balance: roughly 70% paper/white, 20% sage/olive, 10% peach/amber. A dark chapter may invert this. Colour is never the sole indicator of current, denied, error, unverified or partial states. Add a text label and an appropriate icon.

[CSS tokens](tokens/tokens.css) contain primitive and semantic layers. [JSON tokens](tokens/tokens.json) provide the same source values. [Calculated contrast ratios](tokens/contrast.json) document specific colour pairs, not a blanket accessibility certification. Use deep olive text on amber buttons; white on amber is unsuitable for normal text. Subtle dividers are decorative; interactive input borders use the stronger control outline.

## 4. Typography

Exactly two font families, self-hosted with their OFL licences in `fonts/`:

1. **Instrument Serif Regular / Italic** — display, page titles, section headings and editorial quotations. Slim and expressive; never artificially bold.
2. **Inter variable** — body, navigation, controls, forms, captions, tables, charts and code/data labels. Weight 400 normally; 500 for controls; 600 for strong labels. Use tabular numerals for data. No third monospace family.

| Role | Desktop | Mobile | Line height / tracking |
|---|---:|---:|---|
| Display / homepage headline | 88–112px, fluid | 48–60px | .98–1.05 / −.025em |
| H1 / internal page title | 72px | 44px | 1.06 / −.02em |
| H2 / section title | 52px | 36px | 1.1 / −.015em |
| H3 / major card | 34px | 28px | 1.15 / −.01em |
| H4 | Inter 24px / 500 | 22px | 1.25 / −.01em |
| H5 | Inter 20px / 500 | 20px | 1.35 / normal |
| H6 | Inter 16px / 600 | 16px | 1.4 / normal |
| Lead | Inter 22px | 20px | 1.5 / −.01em |
| Body | Inter 18px | 16px | 1.6 / normal |
| UI, button, nav | Inter 15px / 500 | 15px | 1.3 / normal |
| Data, table, chart | Inter 14–16px | 14–16px | 1.45 / tabular numbers |
| Caption, metadata | Inter 13px | 13px | 1.5 / normal |
| Eyebrow | Inter 12px / 500 | 12px | 1.4 / .1em; uppercase sparingly |
| Quote | Instrument Serif 36px | 28px | 1.2 / −.01em |

Maintain semantic heading order independently of visual size. Paragraphs: 52–68 characters per line, maximum 720px; headings: 10–16 words maximum, avoid forced breaks on mobile. Never use uppercase long paragraphs. Links remain distinguishable by underlining, not colour alone.

## 5. Layout, margins and spacing

- Desktop ≥1200px: 12-column grid, 24px gutters, max content width 1280px; outer margin `max(32px, calc((100vw - 1280px)/2))`.
- Tablet 768–1199px: 8 columns, 20px gutters, 32px margins.
- Mobile <768px: 4 columns, 16px gutters, 20px margins. At 360px retain at least 16px.
- Narrative split: 5 columns copy / 7 visual, or an intentional 4 / 8 data split. Reverse only for a meaningful rhythm change.
- Section spacing: 96–128px desktop, 64–80px tablet, 48–64px mobile. Component gap: 24–32px desktop / 16–24px mobile.
- Base spacing tokens: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px. Card padding 28–32px desktop / 20px mobile; input padding 12px 16px; button minimum height 44px, preferably 48px.
- Align text, visuals, table headers and footer to common column lines. Optical adjustments to logo are allowed within 2px; random exceptions are not.
- Full-bleed photography has inset copy/data within the grid. Data and long-form reading never go edge to edge.
- No horizontal page overflow. Wide tables get their own labelled scroll container and a narrow-screen record detail alternative. Diagrams simplify or stack while keeping connection order.

## 6. Surfaces and backgrounds

| Recipe | Asset or construction | Placement |
|---|---|---|
| Paper plain | Paper solid | Long reading, comparisons, forms |
| Paper grid | `visuals/bg-paper-grid.svg` at 80px, low opacity | Architecture and scope explanations |
| Registration dots | `visuals/bg-registration-dots.svg` at 24px | Diagram working surfaces |
| Folio lines | `visuals/bg-folio-lines.svg` | Ledger excerpts and record stories |
| Sage contour | Sage plus `visuals/bg-contour.svg` | Tenant map, information topology |
| Linen | `visuals/bg-linen.svg` at 80px | Calm editorial sections |
| Sunlit paper | `images/sunlit-paper.webp` | About and source-story transitions |
| Peach window | `images/peach-window.webp` | Correction narrative and closing assessment CTA |
| Olive ripples | `images/olive-ripples.webp` plus deep olive overlay | Evidence limits and erasure receipts |
| White precise | White, subtle dividers, no texture | Dashboard, charts, tables and form fields |

Textures stay behind content; no textured input fields or data cells. Pattern opacity 4–12%; always verify rendered contrast. Photo backgrounds require a stable opaque panel behind small text. Use `object-fit: cover` with per-breakpoint focal positioning, not a stretched image. Adjacent chapters should change content format and surface, while sharing the same type, palette and alignment system.

### Shadows and borders

Card: `0 8px 24px #1F26170A`. Hover: `0 16px 40px #1F261714`. Floating panel: `0 24px 64px #1F26171F`. Default card radius 16px; major feature/photo radius 24px; controls 8px. Never shadow every table row. Dividers 1px; structural diagrams 1.5–2px; interactive focus ring 2px with 3px offset. No decorative frosted-glass treatment on critical evidence.

## 7. Component families

| Component | Anatomy / behaviour |
|---|---|
| Primary CTA | Amber / olive text, 48px minimum height, 8px radius, small arrow that moves 3px on hover. Focus ring always visible. |
| Secondary CTA | Paper/white, strong olive border, persistent label. Hover fills sage; no layout shift. |
| Text link | Dark amber text plus underline; arrow may move, underline never disappears during focus. |
| Module card | Product icon, short task heading, purpose-specific SVG plate, one CTA. Border trace on hover/focus. |
| Editorial picture card | Image, category, serif heading, caption. 1.025 image scale maximum; caption stays static. |
| Flip explainer | Two-sided concept card only; explicit “Show evidence” button. Essential information also visible without animation. |
| Evidence receipt | Request ID, tenant/purpose, destination rows, timestamp, result, unknowns, export/reset. Partial result must remain visible. |
| Record table | White surface, clear scope header, 48px rows, labels with icons, selected sage row. A filter that returns no results has a useful empty state. |
| Dashboard | Quiet Inter headings, serif only at page introduction, 240px sidebar desktop; drawer on mobile. Synthetic labels stay persistent. |
| Form | Visible label, helper text, inline validation, submission state, privacy note. Never rely on placeholder labels. No mock submission success in production. |
| Navbar | 76px desktop / 64px mobile; clear logo, Products menu, use cases, about, CTA. Menu works by click and keyboard, never hover only. |
| Footer | Deep olive or paper; logo, descriptor, product links, company/contact links and verified social destinations. Generous 48–80px vertical space. |
| Auth | Complete composition with brand mark, email label and help/reset states. Disable unavailable production sign-in; collect no real password in a concept demo. |

## 8. Iconography and social marks

39 original UI SVG icons in `icons/`: 24px viewBox, 1.75px round strokes, default `currentColor`. Sizes 16/20/24px; 32px only for feature headings. Use one weight throughout. The five module glyphs are `scope`, `review`, `proof`, `signal`, `report`. Icons supplement text; icon-only controls require accessible names and a 44px hit area. `sprite.svg` supports `<use>` in a served environment. Standalone icons are easier for direct file previews.

Official LinkedIn `[in]` assets are preserved in `social/linkedin/in-logo/`; Crunchbase icon and full wordmark are in `social/`. These are third-party marks, not original Factmend art. Keep their supplied shapes/colours. Place them on a plain white tile in a dark footer. The footer specimen shows **profile links pending** because no verified Factmend URLs were supplied. Do not fabricate URLs, use `#`, suggest endorsement or activate links to someone else's profile.

Source guidance: [LinkedIn downloads](https://brand.linkedin.com/downloads), [LinkedIn in-logo rules](https://brand.linkedin.com/in-logo), [Crunchbase press assets](https://about.crunchbase.com/press). Preserve appropriate trademark usage and review current usage terms before publication.

## 9. Visual storytelling and charts

Every visual must answer one question. Diagrams use named containers, explicit source/destination ports and real labels; solid edges mean the demonstrated path, dashed edges mean a proposed or unverified boundary. Arrow direction follows reading order. Unknowns are exposed, not hidden outside the viewport.

Charts use actual fixture values or categories, units, legends and text/table equivalents. This kit's coverage chart is **categorical**, not a latency/performance benchmark. Do not turn the synthetic clear checks into a percentage that implies production coverage. Geographic maps are only appropriate for verified locations; use destination/system maps for memory architecture.

The 18 explanatory SVG plates include the five product signature visuals, whole-system map, architecture, source chain, dashboard queue, coverage chart, alternatives table, pilot hypothesis, editorial record plate, contact map, auth composition and three user flows. Their backgrounds, geometry and information structures differ. SVG text remains editable; embed the self-hosted fonts or outline text before print export. Supply an HTML equivalent when a diagram is interactive.

### Consistent demonstration fixture

Helio Helpdesk is fictional. C-012 is a support-purpose preference: **email invoices** on 6 October 2026 → **portal only** on 8 October 2026. Correction preserves a version history; erasure is a separate request. Index A and Cache B: **Simulated clear**. Backup: **Unverified**. Overall receipt: **Partial**. All demonstrations reset explicitly and stay local. Denied, unresolved and error examples are equally important to happy paths.

## 10. Hero direction — later task

The new homepage hero should represent the whole website: one record travelling through scope, review, retention, erasure evidence and export. A large editorial headline, a readable system visual and one primary action should work together. Avoid an isolated sculptural object without product meaning. Explore a sunlit spatial ledger or a unified interactive record journey when we tackle the hero. Do not treat the supporting images or static system-overview plate as the finished hero.

Product page plates in this kit are starting visuals for their task-specific introductions. A separate full-width photographic hero is optional, not mandatory on every route. One brand does not require repeated hero layouts.

## 11. Shipping checks

Before building/deploying the website: select the hero, apply this kit, create all planned routes, validate forms and real destinations, remove all template artifacts, verify keyboard/touch/reduced-motion states, check mobile/desktop layout, install favicon files, confirm no unsupported claims, and perform a final content/visual QA pass. GitHub/Vercel/domain work follows implementation and access availability; this kit has not been deployed.

The colour pair checks and local specimen validation are recorded in [QA.md](QA.md). Font licences, generated-image provenance and third-party sources are in [ASSET_SOURCES.md](ASSET_SOURCES.md).
