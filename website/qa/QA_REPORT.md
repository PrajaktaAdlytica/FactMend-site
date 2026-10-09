# Factmend QA report

Reviewed 9 October 2026 against the approved brand direction and brief.

## Build and routing

- Production build completed successfully.
- 38 prerendered routes plus a custom 404.
- Build audit: one H1 per document, no broken local links or referenced assets, no visible literal newline escapes.
- Direct-request audit: all 38 routes served their own prerendered HTML.
- Fixed preview-server SPA fallback, which had served homepage HTML on direct subpage requests. Fresh workspace loads now hydrate without runtime errors.

## Browser interactions

- Homepage product selector changes the system story.
- Lifecycle stage selection advances and reverses with scrolling.
- Evidence card flips and returns through explicit controls.
- Product scope examples expose tenant and purpose denial states.
- Desktop menus open and close with Escape; mobile product navigation routes and closes correctly.
- Workspace search, empty state, filters, record selection, correction/reset, evidence loading/failure/recovery, dictionary, and manifest download exercised.
- Corrected export contains portal-only value, Current status, version 2, October 8 source, and preserved version history.
- Assessment required-field validation, back-navigation/editing, summary, and JSON brief download exercised.
- Reduced-motion control exposes all five lifecycle widgets and removes animated reveal hiding.

## Responsive review

Desktop reviewed at 1280px. Responsive pages reviewed in 360px/390px iframe viewports: homepage, Memory Desk, Memory Signal, platform, pricing, resources, assessment, and workspace. These eight 360px pages had no page-level horizontal overflow. Tablet platform reviewed at 768px. Mobile workspace navigation uses a readable 2×2 grid. Dense diagrams and tables preserve readable detail inside scrollable regions.

The in-app browser's viewport override did not take effect, so narrow layout checks used the explicit test-only responsive harness rather than claiming physical-device emulation.

## Boundaries

This is a completed local frontend build, not a deployed or integrated production service. No live email delivery, authentication, memory provider, CRM, analytics, company social profile links, or custom domain is connected. No exhaustive device matrix, automated accessibility audit, or Lighthouse performance score is claimed.

See `build-audit.json`, `route-audit.json`, and saved browser screenshots for evidence.
