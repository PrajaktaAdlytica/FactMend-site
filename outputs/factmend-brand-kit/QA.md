# Brand kit QA · 9 October 2026

## Verified

- Desktop specimen reviewed at 1440×1000; mobile at 390×844. No page-level horizontal overflow at either size. Wide record table scrolls inside its labelled region.
- Every HTML image loaded; no missing local asset references. Browser warning/error log was empty during interaction checks.
- Filter: Unverified returns exactly C-013 and C-019. Reset restores all eight records.
- Explicit flip toggles summary/evidence and `aria-expanded`; inactive face is `aria-hidden` and inert. Keyboard Space verified on mobile. Mobile uses a stable face switch with no 3D transform.
- Erasure simulation reveals Partial, Index A / Cache B Simulated clear, Backup Unverified. Reset restores ready state and disables export.
- Browser-downloaded JSON receipt inspected: labelled synthetic, overall Partial, backup Unverified. No production deletion call is made.
- Chart button exposes the selected destination's evidence boundary; backup remains unverified.
- SVG files parse as XML. Diagram text outer bounds checked against canvas width. Full-size diagram links are available for small-screen inspection.
- PNG favicon dimensions checked: 16, 32, 48, 180, 192, 512; maskable 512. ICO includes 16/32/48 sizes.
- Font files and OFL licences included; no CDN font requirement. Logo wordmark outlines are font-independent.
- Calculated contrast: ink/paper 14.18:1, muted/paper 5.77:1, ink/amber 7.04:1, clay/paper 5.23:1, link/paper 6.42:1. White/amber 2.21:1 is explicitly prohibited for normal button text.
- Reduced-motion CSS reviewed: transitions removed, image/card movement removed, flip uses immediate face change. An actual OS reduced-motion setting was not changed or separately emulated.

## Scope and limitations

This is an identity kit and interactive specimen, not a deployed website or functioning memory product. The new whole-system homepage hero is deferred as requested. Page diagrams are editable illustration assets; responsive, semantic production diagram components must be implemented during the website build. The illustration SVGs use editable font text; embed or outline the supplied fonts before print publication.

Social marks are official originals. Factmend profile links remain pending. Company social banner and Open Graph templates include editable two-font SVGs, font-independent outlined SVGs and PNG exports. The avatar PNG is also ready for use. No social profiles were created or published.

The page visual map, complete forms/auth designs, real destinations, claims review, backend behavior, deployment and custom domain require subsequent implementation and final QA. No certifications, customer outcomes or production performance are claimed.

Review images: `preview/brand-overview.jpg`, `preview/desktop-visuals.jpg`.

## Revision 1.1 — visible design foundations

Added grid/margin explorer with desktop/tablet/mobile controls and a column-overlay toggle; literal 4–128px spacing rulers; annotated padding and text gaps; 14 type styles with desktop/mobile presets; left/center/numeric-right alignment; baseline rhythm examples; five elevation levels; border and radius specimens.

Measured in browser: 1440px viewport → 1280px content / 80px margins; 390px viewport → 350px content / 20px margins. Both have zero horizontal page overflow. Mobile grid resolves to four columns. All ten spacing ruler widths match their labels exactly. Body line height resolves to 28.8px. Typography preset switches the display sample from 96px to 56px; small-screen display is 56px. Column overlay visibility toggles correctly.

CSS/JSON tokens now include every text role's size, weight, leading and tracking, semantic spacing roles and overlay elevation. `FOUNDATIONS.md` is the full specification.
