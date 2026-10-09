# Motion and interactions

Motion reveals structure or state. Native vertical scrolling remains in control; no scroll hijacking, blocking intro sequence or essential hover-only content.

| Interaction | Trigger / effect | Keyboard, touch, reduced motion |
|---|---|---|
| Border trace | Hover/focus draws olive outline in 260ms, card lifts 3px | Focus-within same emphasis; touch has static outline; reduced motion immediate outline |
| Flip explainer | Explicit Show evidence button toggles 180° Y rotation, 420ms | Button Enter/Space; tap same; reduced motion instant face change. Inactive face hidden/inert, toggle stays available |
| Picture card | Hover image scale 1.025, 260ms, within clipped radius | Focus-within same; touch static; reduced motion no scale |
| CTA arrow | Hover/focus arrow translates 3px, 160ms | No change to label or hit target; reduced motion none |
| Diagram disclosure | Click named node opens detail region | Button per node, aria-expanded, escape to close, return focus; mobile details below diagram |
| Version comparison | Select version replaces value with dated source | Visible selected label and live announcement, no auto-cycle |
| Receipt simulation | Click Simulate reveals fixed fixture result | Live polite result, timestamp marked fixture, unknown backup stays visible; reset restores initial state |
| Chart focus | Pointer or keyboard focus on datum reveals value | Same visible caption and HTML table, no hover-only numerical information |
| Table filtering | Native select or search filters local rows | Result count announced, no-results message, reset clears filter |
| Navigation menu | Click Products toggles menu | aria-expanded, Escape close, tab order, touch click. No hover requirement |
| Section entrance | Optional 12px translation + fade 260ms once | Content exists immediately; reduced motion disables; no opacity:0 dependency without script |

## Timing and geometry

160ms small control feedback; 260ms disclosure/border/card change; 420ms optional flip. Ease `cubic-bezier(.2,.7,.2,1)`. Never animate width/height of text blocks or table rows unless expanded state is intentional. Reserve space for image loading and status messages. No infinite decorative animation. Stop or omit video when reduced motion is requested; include poster controls.

## Responsive behavior

3D flips are restricted to explanatory cards with short content. Forms, receipts and primary product tables do not flip. Small screens use a stable card with a click/tap disclosure; essential status remains visible. A map stacks source → scoped fact → destination cards while preserving labels. A table's scroll is local; page scroll remains vertical.

## Interaction state checklist

Every actionable component defines default, hover, focus-visible, pressed, disabled, loading and error states where relevant. Text labels and focus rings meet contrast on the actual surface. Hit targets at least 44×44px. Unavailable product features are labelled and disabled rather than behaving like working integrations. Export names the local synthetic fixture. No destructive action is hidden in a flip.

The interactive specimen implements the flip toggle, border emphasis, image hover, data filter, chart detail and receipt simulation/reset. The broader website flow behaviours here are implementation requirements for the later website build.
