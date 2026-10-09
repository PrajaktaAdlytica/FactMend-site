# Factmend homepage intro research and production brief

The strongest fit for Factmend is **The Living Folio**: an approximately eight second animation inside the homepage hero that turns layered records into a connected, governed memory system. The finished scene then continues through scroll storytelling. It expresses the whole product through source, history, permission, destinations, and evidence, using the approved Sunlit Archive identity.

The visitor should see “Memory changes. Keep the whole story.” and an active CTA from the first frame. The animation occupies the hero’s visual stage; it does not delay access to the website.

## Reference findings

| Reference | Documented treatment | Application to Factmend |
| --- | --- | --- |
| [Daylight by basement studio](https://basement.studio/post/creating-daylight-or-the-devex) | The studio describes a hero image sequence controlled by scroll, HTML and WebGL integration, and a placeholder shown before heavier interaction loads. | Create a warm, tactile environment with an immediately useful opening frame. Continue the same scene as the visitor scrolls. |
| [Resend rebrand](https://resend.com/blog/rebranding-resend) | Resend describes physical materials making software tangible and extending its identity into product UI and authentication. | Build from Factmend’s folio motif, palette, and typography, then carry that visual language into product pages. |
| [Stripe Connect engineering account](https://stripe.com/blog/connect-front-end-experience) | Stripe distinguishes its decorative header from a product process animation. The latter starts when fully visible; the account also describes reduced motion support. | Separate the brief entrance from the scroll narrative. Animate changes that explain what the product does. |
| [Introducing Spline by Ordinary Folk](https://www.ordinaryfolk.co/project/introducing-spline) | A studio product film communicates a larger product world through a designed sequence. This is a film reference, rather than evidence of a current website entrance. | Use one coherent visual vocabulary across the opening and any later exported brand film. |

These are published accounts from the brands or makers. Their described implementations establish the reference patterns; they do not establish conversion improvements or a universally optimal duration. The eight second sequence below is a creative choice for Factmend.

## Recommended visual direction

Build a full width archival landscape on warm paper, with directional daylight, shallow physical depth, and carefully drawn record surfaces. A source occupies the left side, the governed record occupies the center, and destinations occupy the right. The familiar three leaf motif becomes the structure of this landscape, rather than an isolated object floating above the page.

Use deep olive for durable structure, peach for source context, amber for the active correction, and sage for permission boundaries. Keep typography live and readable: Instrument Serif for the headline and Inter for the record content and controls. Shadows describe layer order and contact with the surface. Avoid heavy ambient blur, constant floating, or camera spins.

One consistent example should connect the scenes: an assistant remembers a delivery preference, the person changes it, the current record updates, and the destination receives the permitted revision. The previous source remains available as history. This is an illustrative product story, not a claim that the proposed backend is already operating.

## Opening storyboard

| Time | Scene and movement | Meaning |
| --- | --- | --- |
| 0 to 1.5 seconds | The usable hero is already present. A source leaf moves gently into the visual stage; its edge casts a restrained contact shadow. | Memory has an identifiable source. |
| 1.5 to 3.5 seconds | An amber revision slides into the current record. The older leaf offsets behind it and remains visible. A short preference changes from the previous value to the new value. | A correction updates the present without losing the history. |
| 3.5 to 5.5 seconds | A sage frame forms around the governed record. A path opens toward the permitted destination; an unrelated destination remains outside the boundary. | Scope and permission determine where memory can go. |
| 5.5 to 7 seconds | The revised record reaches the destination. A small evidence surface attaches to the completed path. Any incomplete destination remains visibly unresolved. | Changes have destination specific outcomes and evidence. |
| 7 to 8 seconds | Layers settle into a composed system view beneath the headline. The source, current record, and destination form the hero’s permanent visual. | Factmend keeps the system understandable as memory changes. |

The scene should be understandable through geometry and state changes. Use only meaningful content such as the preference, source, current revision, and actual destination status. Avoid stage numbers, ornamental technical labels, fake metrics, or dense miniature dashboard text.

## Continuation through scroll

The opening ends in the same coordinates and state from which the first scroll scene begins. When a visitor scrolls before the entrance finishes, settle the entrance and hand control to the scroll timeline without pulling them back or locking the page.

The first product chapter brings the record closer and exposes scope, linking to Desk. The next chapter separates the leaves to reveal history and corrections for Review. A boundary chapter explains consent and retention for Proof. Destination paths then separate to explain Signal and its individual outcomes. Finally, the evidence surfaces organize into a portable report for Report.

Give each chapter its own composition, background, and visual emphasis. Preserve the same record and folio geometry so the visitor can follow the story. Separate product pages can begin with a short entrance into their relevant state, then use their own scroll narrative; the complete homepage opening should not replay on every route.

## Format and interaction decisions

Use live SVG, HTML, CSS, and a GSAP timeline for the website version. This keeps text responsive and lets the final frame become the interactive hero. Use ScrollTrigger for the subsequent scroll narrative and integrate with the existing Lenis setup through one animation clock. GSAP documents media query based setup and cleanup for desktop, mobile, and reduced motion through [gsap.matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/).

Compose a separate vertical mobile scene with source above record and destinations below. Preserve readable text and comfortable page margins; do not crop the desktop scene into a narrow viewport. Reduced motion should show the completed system immediately, with all copy and links available.

The opening plays once on the first homepage visit in a session. Provide a keyboard accessible pause control while it plays, a way to finish the animation, and optional replay after it settles. Automatically moving content lasting more than five seconds alongside other content needs a pause, stop, or hide mechanism under [W3C guidance](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html). Pause when the document is hidden and stop work when the scene leaves the viewport.

Keep sound off by default. Avoid an infinite loop after the sequence finishes. Pointer movement can create very slight layer depth on devices with a fine pointer, but core meaning must work without hover.

An exported eight to twelve second film can reuse the art direction for social posts, presentations, and sales. It is a secondary asset. If a rendered film is later used on the website, supply an immediate poster and deliberate loading behavior; [web.dev’s video performance guidance](https://web.dev/learn/performance/video-performance) explains poster, preload, and autoplay considerations.

## Alternatives considered

| Direction | Benefit | Tradeoff |
| --- | --- | --- |
| The Living Folio | Connects the approved mark, material palette, product behavior, and scroll narrative in one distinctive system. | Requires carefully authored layer transitions and responsive compositions. |
| Archive Window | Uses an editorial record window, typographic changes, and progressive disclosure. Particularly readable on mobile. | Less memorable as a signature brand opening. |
| Provenance Relay | Uses drawn routes, revisions, permission gates, and evidence surfaces to explain infrastructure. | Can resemble familiar SaaS network diagrams unless the art direction is unusually strong. |

## Production review criteria

- The first frame looks complete and exposes the headline, navigation, and CTA.
- A viewer can describe source, correction, retained history, and controlled delivery after one play.
- The last frame matches the first scroll state without a flash or positional jump.
- Scrolling, clicking a CTA, returning through browser history, and navigating internally never require waiting for the intro.
- Pause, finish, replay, reduced motion, and keyboard navigation work consistently.
- Mobile has a deliberate composition and readable content at narrow widths.
- Destination states preserve uncertainty where appropriate; a visual must not imply universal erasure or invented production results.
- The scene remains useful with JavaScript unavailable or animation assets delayed.
- Measure load and interaction performance on the actual implementation before claiming performance targets have been met.
