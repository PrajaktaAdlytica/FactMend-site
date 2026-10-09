# Factmend design foundations

Revision 1.1 · 9 October 2026

These rules are now illustrated in the interactive brand kit at `index.html#foundations`. The first version described layout and typography in Markdown but did not provide the requested visual specimens. This revision adds those specimens, their controls and complete implementation values.

## Grid and margins

| Viewport | Columns | Gutter | Outer margins | Content |
|---|---:|---:|---:|---|
| Desktop ≥1200px | 12 | 24px | max(32px, (viewport − 1280px) / 2) | Maximum 1280px |
| Tablet 768–1199px | 8 | 20px | 32px each | Viewport minus 64px |
| Mobile <768px | 4 | 16px | 20px each | Viewport minus 40px |

Content width excludes margins. At a 1440px viewport, content is 1280px wide with 80px on either side. At 390px, content is 350px with 20px margins. The previous preview used an outer 1280px wrapper with internal padding; this has been corrected.

Desktop copy/visual split: 5 / 7 columns. Tablet: 4 / 4. Mobile: both full width in reading order. Long prose is capped at 720px and normally 52–68 characters per line. Data tables can use the full grid; overflow belongs to a labelled local table region, never the whole page.

The grid explorer switches breakpoints and toggles the column overlay. It is a scaled illustration inside the preview panel; the labels specify production measurements. Its default follows the viewport at page load.

## Spacing system

| Token | Pixels | Typical purpose |
|---|---:|---|
| space-1 | 4 | Optical/icon adjustment |
| space-2 | 8 | Icon to label |
| space-3 | 12 | Eyebrow to heading; label to input |
| space-4 | 16 | Paragraph gap; related content |
| space-5 | 24 | Heading to body; desktop gutter |
| space-6 | 32 | Card padding; body to action |
| space-7 | 48 | Component clusters |
| space-8 | 64 | Tablet section padding |
| space-9 | 96 | Standard desktop section padding |
| space-10 | 128 | Major chapter padding |

Standard sections use 96px top and bottom on desktop, 64px tablet and 56px mobile. Larger editorial chapters can use 128px desktop / 64px mobile. Card padding is 32px desktop and 20px mobile. Component gaps are 24–32px desktop and 16–24px mobile. Buttons use 12px vertical / 20px horizontal padding with a minimum 44px target, preferably 48px tall.

The visible spacing bars are literal CSS pixel widths. The annotated component shows 12px eyebrow/heading, 24px heading/body and 32px body/action separation. The measurement annotations are documentation overlays and must not appear in the production UI.

## Complete text styles

| Role | Family | Weight | Desktop / mobile | Line height | Letter spacing |
|---|---|---:|---|---:|---|
| Display | Instrument Serif | 400 | 96 / 56px specimen; fluid 88–112 / 48–60px allowed | 1.02 | −.025em |
| H1 | Instrument Serif | 400 | 72 / 44px | 1.06 | −.02em |
| H2 | Instrument Serif | 400 | 52 / 36px | 1.1 | −.015em |
| H3 | Instrument Serif | 400 | 34 / 28px | 1.15 | −.01em |
| H4 | Inter | 500 | 24 / 22px | 1.25 | −.01em |
| H5 | Inter | 500 | 20 / 20px | 1.35 | 0 |
| H6 | Inter | 600 | 16 / 16px | 1.4 | 0 |
| Lead | Inter | 400 | 22 / 20px | 1.5 | −.01em |
| Body | Inter | 400 | 18 / 16px | 1.6 | 0 |
| UI / nav / button | Inter | 500 | 15 / 15px | 1.3 | 0 |
| Data | Inter | 400 | 14 / 14px | 1.45 | 0 |
| Caption | Inter | 400 | 13 / 13px | 1.5 | 0 |
| Eyebrow | Inter | 500 | 12 / 12px | 1.4 | .1em |
| Quote | Instrument Serif | 400 | 36 / 28px | 1.2 | −.01em |

Use normal word spacing (0 added spacing) for every role. Do not create alignment with repeated spaces. Use CSS layout. Inter data uses tabular numerals. Strong body emphasis uses Inter 600. Inline editorial emphasis may use the included Instrument Serif Italic; never synthesize bold for serif headlines. Underline body links with a 4px offset.

The typography explorer shows every role with its values. On small screens, mobile sizes stay in force even if the desktop preset is selected, preventing oversized specimen text from overflowing. The metadata reflects the actual mobile size. Semantic heading order is separate from specimen text size: sample H1 labels do not create extra page-level H1 elements.

## Text alignment and rhythm

- **Left aligned:** navigation, headings next to product visuals, body text, form labels, descriptions and table labels. Shared starting edges are the default.
- **Centered:** short standalone statements, compact onboarding introductions or a closing CTA. Keep supporting copy to 2–3 short lines. Do not center long reading text.
- **Right aligned:** numeric table cells and comparable totals. Use tabular numerals and a shared decimal edge when fractional values are present.
- **Never justified:** marketing copy, descriptions or narrow-screen paragraphs. Uneven word spacing reduces readability.

Body rhythm example: 18px × 1.6 = 28.8px line height, with 16px between paragraphs and zero added letter/word spacing. Heading rhythm example: 52px × 1.1 = 57.2px, with −.015em tracking. Use 24px heading-to-body separation and 12px eyebrow-to-heading separation. Let text wrap naturally; no fixed-height text boxes or forced desktop line breaks on mobile.

The specimen includes baseline guides and three alignment examples. Guides belong only to the design kit.

## Shadows and depth

| Level | Token | Value | Intended use |
|---|---|---|---|
| 00 | none | none | Reading surfaces, tables |
| 01 | shadow-card | `0 8px 24px #1F26170A` | Quiet content card |
| 02 | shadow-hover | `0 16px 40px #1F261714` | Hover / raised selection |
| 03 | shadow-panel | `0 24px 64px #1F26171F` | Popover, menu, floating panel |
| 04 | shadow-overlay | `0 32px 80px #1F26172E` | Dialog, with an appropriate scrim |

Use one elevation per functional layer. Do not shadow every row or place floating shadows inside clipped containers. Specimen cards reveal the highest elevation on hover/focus for comparison; production controls should usually advance by only one level. Reduced motion removes translation.

## Borders and radii

- Decorative divider: 1px `#D7D2C5`.
- Interactive control boundary: 1px `#7B816F`.
- Focus ring on light surfaces: 2px deep olive with 3px offset; amber on deep olive surfaces.
- Diagram line: 1.5–2px.
- Control radius: 8px. Card radius: 16px. Feature/photo radius: 24px.
- Full pill radius: small status tags only.

See `tokens/tokens.css` and `tokens/tokens.json` for the matching values. See `foundations.css` / `foundations.js` for the visual specimens and interaction implementation.
