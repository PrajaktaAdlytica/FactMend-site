# Factmend motion implementation

Motion explains the product story and preserves reading order.

| Scene | Behavior | Meaning |
| --- | --- | --- |
| Living Memory Terrain intro | Two slow mist layers, travelling amber light, shallow scroll camera | The surface changes while the retained layers remain connected |
| Homepage hero | Perspective and shallow background scrub | Source, governed record, and destinations form one system |
| Lifecycle | Sticky visual beside five scroll chapters; stage changes forward and backward | Learn → scope → correct → erase → check |
| Product stories | Three scroll chapters with changing product state | Show input, operation, and resulting evidence |
| Platform map | Staggered source/core/destination reveal | Explain the relationships between modules |
| Diagram paths | Scroll-scrubbed SVG strokes | Show flow direction and sequence |
| Page sections | Small vertical reveal | Introduce the next reading group without disrupting layout |
| Evidence card | Explicit, reversible flip interaction | Reveal the checked and unresolved boundaries |
| Cards and controls | Border trace, slight lift, directional arrows, clear focus | Indicate interaction and current state |

Lenis sends scroll updates to ScrollTrigger and is advanced by the GSAP ticker; there is no second RAF loop. GSAP contexts revert on route changes, ticker callbacks are removed, Lenis is destroyed, and triggers refresh after fonts load. Native touch scrolling remains enabled.

Desktop story scenes use CSS sticky positioning with ScrollTrigger stage selection at 1000px+ viewport width and 700px+ height. Narrow or short viewports show all chapters and widgets in normal reading flow. Wide diagrams and tables scroll within their own region instead of forcing the whole page wider.

Reduced motion follows the operating-system setting or the explicit footer control. It disables transforms and smooth scrolling and exposes every narrative step. Product information never depends solely on animation or hover. Interactive controls retain visible focus, state text, and accessible labels.

## Homepage opening scene

The selected Living Memory Terrain artwork sits above the existing homepage hero. Its headline, description, CTAs and controls are live HTML. The clean landscape and transparent mist are generated raster assets, compressed to WebP (328 KB + 283 KB); the selected mockup is never used as an interface screenshot.

GSAP moves two independent cloud layers over 11–14 seconds with visible opacity and a mid-cycle starting position so movement begins immediately. The WebGL renderer gently shifts the original sky and moves a bright golden pulse through the original amber seam every 4.2 seconds, with a 30 fps render cap and a 1.25 pixel-density cap. It keeps the rocks fixed. The bright seam mask includes the high-green hot pixels omitted by the earlier overlay. The complete landscape remains visible if WebGL is unavailable. ScrollTrigger adds a shallow camera approach without pinning or delaying native scroll. All local tweens, observers, GPU objects and ticker callbacks are removed on unmount.

Pause freezes mist and seam illumination and disables the camera scrub. Intersection and document visibility checks stop work outside the visible scene; the sticky header is excluded from the visibility region. Reduced motion removes the light canvas and leaves complete still artwork. Skip uses a single measured header offset and moves keyboard focus into the existing hero, avoiding accumulated CSS and Lenis anchor offsets. Both CTAs use the existing assessment and workspace routes.

Desktop uses the established 1280 px content grid. Mobile uses the same 20 px page margins with a 65% focal position so the amber seam remains visible. No intro loading gate, countdown, soundtrack or forced replay is added.

The homepage navbar is fixed and hidden/inert throughout the full-height intro. It reveals when the original hero reaches the navbar's bottom edge, whether through normal scroll or Skip intro. Scrolling back into the intro hides it again; other routes retain their normal visible sticky navigation. The intro occupies the entire viewport without reserving navbar space.

Assessment and workspace behavior use real local state. Simulated checks explicitly preserve the unverified backup boundary; their loading/failure/retry states do not imply a connected service.
