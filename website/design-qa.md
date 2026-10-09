# Living Memory Terrain — design QA

Final result: passed

## Scope and reference

Implemented selected option 2 as a cinematic intro above the existing homepage hero. The approved logo, navigation, typography, site grid and subsequent hero remain in place. Copy, links and controls are live HTML; the reference screenshot is not used as the interface.

Source: `../outputs/intro-visual-directions-v2/02-living-memory-terrain.png` (1487 × 1058 pixels).

Clean artwork and transparent mist were generated from the selected direction. Web assets are in `public/assets/images/intro/`; original assets and provenance are in `../outputs/intro-motion/`.

## Visual evidence

Homepage route: `/`, at the top of the page, with motion enabled.

- Final desktop: `qa/terrain-intro-desktop-final.jpg` (1487 × 1058).
- Full reference/implementation comparison: `qa/terrain-comparison-final.jpg`. Each column uses the same 1487 × 1058 image dimensions without rescaling.
- Focused headline, body and CTA comparison: `qa/terrain-copy-comparison-final.jpg` (same-scale crops).
- Mobile: `qa/terrain-intro-mobile-final.jpg` (390 × 844).
- Narrow mobile, reduced motion: `qa/terrain-intro-320-still-final.jpg` (320 × 740).
- Skip transition to original hero: `qa/terrain-to-hero-final.jpg` (390 × 844).
- Compact desktop: `qa/terrain-intro-1280.jpg` (1280 × 720).

The desktop capture matches the reference's pixel dimensions and CSS viewport dimensions, with one captured image pixel per CSS pixel. Both final comparison images were inspected. Earlier stale or scrolled captures were excluded from the comparison verdict.

## Visual checks

- Typography: established Instrument Serif display type and Inter body/UI type; deliberate headline line breaks and italic contrast.
- Layout: existing 1280px site grid, aligned desktop copy and navigation, 20px mobile gutters. No horizontal overflow at 320px, 390px, 1280px or 1487px.
- Color/material: luminous paper and peach sky, layered muted olive terrain and a restrained amber seam match the selected direction.
- Assets: real, detailed raster terrain and transparent cloud layers; compressed WebP files total approximately 611KB. Live controls remain separate from the imagery.
- Hierarchy: headline, supporting copy and CTAs remain readable; the bottom motion/skip controls stay inside the opening viewport.
- Intentional adaptation: retain the website's established navigation and grid rather than replacing them with the mockup's navigation. Pause and Skip controls support the requested motion.

## Findings resolved

| Priority | Finding | Resolution and evidence |
| --- | --- | --- |
| P2 | Skip accumulated anchor offsets and left excessive space above the original hero. | Measure the sticky header directly, scroll to the hero and focus it. Verified hero top and header height both 66px on mobile. |
| P2 | The first mobile crop hid the amber seam. | Set the mobile focal position to 65%; align the shader with that crop. Verified in the final 390px capture. |
| P2 | The narrowest mobile headline occupied four lines. | Reduce the minimum display size to 44px; final 320px still capture has three lines and visible controls. |
| P2 | The secondary CTA needed a stronger backdrop over the terrain. | Increase the paper backdrop opacity; inspected in the final desktop and focused comparisons. |

No actionable P0, P1 or P2 findings remain in this scope.

## Interaction and motion checks

- Clouds drift on independent 11/14-second cycles, starting mid-drift. The original sky moves gently and a brighter golden pulse travels through the artwork's amber seam on a 4.2-second cycle.
- Pause changes its pressed state and freezes cloud transforms. Resume restarts motion.
- Scroll produces a shallow camera approach without a pinned or blocking opening.
- Skip focuses the original hero below the intro. Leaving the viewport pauses the scene.
- Reduced motion removes the animation canvas and shows a complete still composition. Re-enabling motion restores animation.
- Assessment and workspace CTAs open their correct existing routes.
- Returning to the homepage correctly recreates the scene. Tweens, observers, ticker callbacks and GPU resources clean up on unmount.
- Browser logs contain no application errors or warnings during the tested flow.

## Build checks and limits

`npm run build` and `python3 scripts/check-build.py` passed: 38 routes plus the custom 404, 39 HTML documents, internal link and asset checks enabled, zero errors.

Browser checks cover desktop, compact desktop, mobile, narrow mobile and the site's reduced-motion setting. Physical low-power devices and forced WebGL failure were not tested. The still image remains beneath the optional canvas as the rendering fallback.

## Motion visibility revision

The user reported that motion was not visible. Inspection found that one open homepage tab still held the older build without the intro; the refreshed build was animating, but the mist was too faint and slow. The original amber mask also excluded the brightest seam pixels. Both homepage tabs were refreshed after the changes above.

New evidence:

- `qa/terrain-motion-visible.gif`: 18 actual browser screenshots captured across 10.1 seconds; timing is retained in `qa/motion-frames/times.json`.
- `qa/terrain-motion-desktop-final.jpg`: revised scene at 1487 × 1058.
- `qa/terrain-motion-mobile-final.jpg`: revised scene at 390 × 844, no horizontal overflow.

Frame comparison confirms changing sky and seam pixels with stable live text. Mobile Pause freezes the cloud matrices across separate observations; Resume advances them. Reduced motion removes the canvas and reports still playback. Motion was restored and both homepage tabs retain the refreshed build. Browser warning/error logs are empty. The revised build and internal link/asset checks passed with zero errors.

## Increased cloud movement

Expanded far mist drift to ±24% over 11 seconds and near mist drift from +23% to −27% over 14 seconds, with wider vertical movement. Sky drift amplitude and speed also increased. Both homepage tabs refreshed; cloud matrices advanced between observations, playback remained playing. Actual browser motion capture: `qa/terrain-faster-clouds.gif`. Build and link/asset checks passed.

## Intro navigation revision

Homepage navigation is now fixed, hidden, aria-hidden and inert during the intro; it takes no layout space. The intro fills the viewport. Navigation reveals when the hero reaches the header boundary and hides on return to the intro. Other routes retain visible sticky navigation.

Verified with Skip on desktop (hero top/header height both 80px) and mobile (both 66px), and with a native wheel scroll from the intro to the hero. Back to top hides navigation again. Assessment navigation remains visible/sticky, and return to homepage restores intro behavior. Evidence: `qa/intro-no-navigation.jpg` (1280 × 720), `qa/intro-no-navigation-mobile.jpg` (390 × 844), and `qa/hero-navigation-revealed.jpg`. Build and internal link/asset checks passed with zero errors.
