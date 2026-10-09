# Factmend page and section visual map

Each section changes its explanatory format, not its brand. The homepage hero is reserved for later. Assets listed below already exist; interaction specifications describe the subsequent website build.

## Homepage

| Chapter | What visitors should understand | Visual / surface | Interaction |
|---|---|---|---|
| Hero — deferred | Whole-system memory governance | Future unified record journey, paper/daylight | Accessible record journey, not autoplay dependency |
| The problem | A remembered fact can become outdated | `editorial-record-plate.svg`, folio lines | Select before/current version |
| Scope | Which assistant can read this fact | `desk-scope-map.svg`, sage contour | Tenant/purpose selector with denied state |
| Correction | A change has a source and history | `review-version-history.svg`, peach | Compare versions |
| Evidence limits | A receipt names checked and unknown stores | `signal-destination-map.svg`, olive ripples | Show evidence / local simulation / reset |
| Product family | Five complementary responsibilities | `system-overview.svg`, white panels | Module cards with border trace |
| Native alternatives | Where another tool may already fit | `alternatives-table.svg`, paper | Expand criterion definitions |
| Assessment CTA | Start with deletion-path discovery | `contact-map.svg`, peach window | Map → review → request conversation |

## Product overview /products

Introduction: system-overview on paper grid. Module navigation: five asymmetric illustrated cards on white. Architecture: architecture-boundaries in a wide diagram band. Source story: provenance-chain on sunlit paper with opaque panel. Demo: dashboard-review-queue with table filtering. Evidence section: coverage-chart with unknown row. Closing: contact-map on sage. Avoid six repeated card grids.

## Product routes

| Route | Introduction / signature plate | Mechanism section | Demo section | Limit / evidence section | Closing section |
|---|---|---|---|---|---|
| /products/memory-desk | Scope map, sage contour | Architecture boundary diagram, paper grid | Tenant/purpose record table, white | Denied cross-tenant example, clay outline | Assessment map, paper |
| /products/memory-review | Version history, peach | Provenance chain, folio lines | Before/current comparison and review queue, white | Contradiction unresolved state, paper | Correction user flow, sage |
| /products/memory-proof | Retention timeline, linen | Consent → policy → expiry sequence, paper grid | Policy detail card / dated timeline, white | Propagation not verified state, peach | Assessment user flow, paper |
| /products/memory-signal | Destination map, olive chapter | Erasure user flow, paper | Partial receipt table, white | Unverified backup, olive ripples + opaque card | Contact map, peach |
| /products/memory-report | Export manifest, paper grid | Version/policy packaging diagram, sage | Manifest table / download specimen, white | Destination evaluation required, peach | Alternatives table, paper |

## Supporting pages

| Page | Distinct section sequence |
|---|---|
| /use-cases | Editorial record introduction → task-specific illustrated stories → use-case / module matrix → scoped architecture → assessment CTA. Use support, privacy review and migration scenarios as synthetic examples, not customer stories. |
| /architecture | Technical diagram introduction → named boundaries → provenance chain → erasure destination map → unknowns table → implementation questions. Dotted/grid surfaces, no ornamental geography. |
| /demo | Persistent concept/synthetic banner → 8-record table → selected detail → correction comparison → separate receipt simulation → export/reset controls. A demo lab, not a fake production dashboard. |
| /pricing | Plain editorial introduction → pilot-hypothesis plate → included/excluded table → pilot test flow → request assessment. Prices conspicuously labelled hypotheses. |
| /about | Sunlit-paper editorial introduction → product thesis → design principles illustrated as record plate → present concept status → contact. No fictitious team portraits. |
| /contact and /request-demo | Contact-map introduction → minimum context form → deletion-path review → honest availability/response copy. Avoid collection of customer memory. |
| /resources | Picture/diagram cards, category filter, empty-state pattern. Only published real material; no invented articles. |
| /resources/[article] | Serif title → metadata → diagram/image with caption → prose → table/callout → related material. Reading width 720px. |
| /sign-in and /reset-password | Split sunlit texture / auth-presentation. Complete visual controls, unavailable production state clearly stated. No fake login success or real password storage. |
| /privacy and /terms | Plain paper, restrained title, version/date, side contents navigation, readable clauses. Actual legal copy requires company-specific review. |
| /404 | Small folio illustration, plain route explanation, Home / Products links; no theatrical animation. |

## Component/section variation rules

Use a different content grammar for adjacent sections: editorial split, scoped map, ledger, timeline, wide receipt, module cards, comparison table, form. Across a long page allow at most two adjacent sections with the same background. Card image crops have a consistent radius but should not all use the same layout. A product dashboard is white and precise; the narrative around it may be warm or dark. Do not make every component interactive without a purpose.

## Asset-to-page logic

All 18 plates are included under `visuals/`. The five module signature plates are usable introduction visuals; product hero photography remains optional. Generated backgrounds are included as PNG and compressed WebP. All patterns are editable SVG. Future custom diagrams should inherit port shape, line weight, scope labels and synthetic-data caption rules from the kit.
