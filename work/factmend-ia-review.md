# Factmend — research-stage information architecture

Prepared from the supplied Concept 6 brief and `STARTUP_WEBSITE_MASTER_GUIDE.md`. No external research is claimed in this document. This is a proposed structure for the concept website and synthetic prototype, not evidence of a working business or production product.

## 1. Scope and positioning

**Company:** Factmend, replacing Recall Harbor throughout copy, module names, sample exports, metadata, and future assets. No domain or trademark availability is inferred from the earlier Recall Harbor research.

**Category hypothesis:** Agent memory governance. More specifically, a proposed governance layer for persistent assistant memory across tenant, purpose, correction, retention, erasure, and export boundaries.

**Primary buyer:** Privacy engineering lead at a B2B SaaS with persistent customer assistants across tenants. **Champion:** AI platform architect. **Budget holder:** Privacy/security leader. **Primary next step:** A privacy-led memory deletion assessment, initially focused on one module and one existing memory stack.

**Positioning to test:** “Trace a remembered fact. Correct it. Check where erasure reaches.” The proposition is visibility and reproducible evaluation across destinations, not the invention of deletion. Treat cross-provider governance as a hypothesis until the sandbox establishes a reproducible gap beyond native APIs.

**Primary CTA:** “Map your memory deletion paths.” **Secondary CTA:** “Explore the synthetic demo.” A tertiary “View the five modules” link gives buyers immediate access to the full offer. Do not label self-serve synthetic exploration simply “Live demo.”

The current phase covers research, IA, reference interpretation, and visual-direction planning. Website implementation, working lead collection, deployment, and production engineering are separate later milestones.

## 2. Product inventory — preserve five distinct proposed modules

All five appear by name on the homepage, in the product menu, on the portfolio page, on dedicated pages, and in assessment intake. Each is labeled **Proposed module**. They are alternative pilot directions within a shared platform hypothesis, not five shipped plans.

| Module | Exact brief responsibility | Distinct page question | Product-specific visual | Prospective evaluation artifact |
|---|---|---|---|---|
| Factmend Memory Desk | Tenant- and purpose-scoped memory API | Who may retrieve this fact, and for which purpose? | Scope matrix with tenant and purpose boundaries | Fixture access checks, including a denied cross-tenant lookup |
| Factmend Memory Review | Provenance/version history and contradiction resolution | What was learned, from which source, and what superseded it? | Source-linked revision timeline with conflicting values | Version history and a reviewer decision |
| Factmend Memory Proof | Retention schedules and consent propagation | When should the fact expire, and where must a consent change propagate? | Expiry schedule plus consent propagation path | Simulated retention/consent evaluation record |
| Factmend Memory Signal | Selective erasure receipts across indexes and backups | Which destinations acknowledge erasure, and which remain unresolved? | Destination status ledger and caveated receipt | Simulated receipt with checks, exclusions, and backup caveat |
| Factmend Memory Report | Memory export/migration and evaluation harness | Can memory move without losing scope, lineage, or retrieval quality? | Export manifest and illustrative before/after evaluation | Synthetic export manifest and evaluation protocol |

**Naming trap:** “Proof” naturally sounds like erasure receipts, and “Signal” sounds like monitoring. Keep the supplied responsibilities exactly. Put the functional descriptor beside each module name; do not silently swap responsibilities to make the names feel more intuitive. Any naming refinement needs a separate explicit decision.

## 3. Buyer journeys

1. **Privacy engineering lead:** Home fact journey → lifecycle and erasure boundaries → Memory Signal → synthetic receipt including the unresolved backup boundary → assessment intake. They need to identify uncertainty, assign an owner, and obtain explicit acceptance criteria.
2. **Platform architect:** Platform → existing-stack fit → Memory Desk/Review/Report → synthetic data dictionary and evaluation protocol → assessment. They need architecture assumptions, adapter status, tenancy behavior, and a retrieval-quality test plan.
3. **Privacy/security budget owner:** Home → assessment scope → pricing hypotheses → trust and evidence status → request a scoped discussion. They need a named sponsor, review requirements, deliverables, and a credible stop/go decision, not invented ROI.
4. **Returning evaluator:** Direct link to a module, demo record, or sample receipt → stable context and synthetic-data label → reset or continue within a local simulation. No sign-in is required to understand the concept.

Do not make a visitor finish a cinematic scroll to access any of these journeys.

## 4. Proposed sitemap and page responsibilities

The route list describes future build coverage. It is not a claim that routes or content exist now. Route labels can be adjusted after research, while preserving all responsibilities.

| Family | Route | Distinct content and purpose |
|---|---|---|
| Home | `/` | Buyer, proposition, one fact story, five modules, shared platform, evaluation evidence, commercial entry point, assessment CTA |
| Problem | `/why-memory-governance` | How facts branch into destinations; what native operations already provide; what remains to test in the buyer's stack |
| Lifecycle boundary | `/lifecycle` | Learn → scope → correct → expire/erase → verify/export; exclusions and backup restoration boundary |
| Products | `/products` | Compare all five proposed modules by job, input, output, pilot question, and shared dependencies |
| Product | `/products/memory-desk` | Tenant and purpose scoping, fixture permissions and denied-access cases |
| Product | `/products/memory-review` | Sources, revision history, contradictions, reviewer decision and supersession |
| Product | `/products/memory-proof` | Retention schedule and consent propagation, including incomplete destination acknowledgement |
| Product | `/products/memory-signal` | Selective erase destination map, receipt statuses, read-after-delete scope, backup caveat |
| Product | `/products/memory-report` | Export/migration manifest and retrieval-quality evaluation, with criteria unmeasured until tested |
| Platform | `/platform` | Proposed common record model, policy context, source lineage, destination registry, evaluation ledger, and boundaries |
| Solutions | `/solutions` | Two decision paths: privacy-led selective-erasure review and platform-led tenant/memory portability review |
| Solution | `/solutions/privacy-engineering` | Privacy owner's tabletop, destination completeness, uncertainty ownership, acceptance evidence |
| Solution | `/solutions/ai-platforms` | Architect's tenancy, native-stack comparison, correction, migration, and quality trade-off questions |
| Stack fit | `/stack-fit` | Factual alternatives/native capabilities, evaluation questions, intended fit and known unknowns; never a wall of “connected” logos |
| Evidence | `/evaluation` | Proposed acceptance protocol, clearly synthetic sample artifacts, open/failed checks, demand evidence status; substitutes for unsupported customer/results page |
| Pricing | `/pricing` | $5,000 assessment/pilot and $2,000/month subscription as supplied price hypotheses only; scope assumptions and no checkout |
| Assessment / request demo | `/assessment` | Primary qualified intake, module selection including “help me choose,” proposed process and next steps |
| Company | `/company` | Purpose, approach, current concept stage, supplied company facts, contact; no invented founder/team story |
| Contact | `/contact` | Appropriate contact route and data-minimization guidance; implementation boundary stated if unconnected |
| Trust | `/trust` | Proposed controls, current prototype isolation, unverified claims, responsibility matrix and review material status |
| Resources | `/resources` | Only substantive resources, beginning with the destination checklist and evaluation protocol |
| Resource | `/resources/deletion-destination-checklist` | Useful intake map: sources, primary stores, indexes, caches, exports, logs, backups, replicas, downstream consumers where applicable |
| Resource | `/resources/sandbox-evaluation-protocol` | Scoped tests for native vs proposed behavior, denied retrieval, correction, erase, restoration policy and retrieval quality |
| Access | `/sign-in` | Polished access presentation explicitly stating production accounts are unavailable in this concept; primary path to synthetic demo or assessment |
| Privacy | `/legal/privacy` | Reviewable notice tied to actual form/analytics implementation, operator, retention and deletion route; draft until facts and legal review are settled |
| Terms | `/legal/terms` | Concept/demo terms tied to actual implementation; draft until operator and intended use are confirmed |
| Recovery | Custom 404 | Branded, useful links to products, demo and assessment |
| Demo boundary | `/demo` | Persistent “DEMO — SYNTHETIC DATA” and “CONCEPT PREVIEW”; explain safe local simulation, limitations and reset |
| Demo queue | `/demo/memories` | 8–12 internally consistent fictional records with credible states and filters |
| Demo record | `/demo/memories/c-012` | Helio Helpdesk source, scope, expiry, versions, evidence, assigned fictional reviewer, next action |
| Demo receipt | `/demo/receipts/erase-c-012` | Timestamped simulated checks, destination statuses, exclusions and unverified sample backup window |
| Demo export | `/demo/exports` | Synthetic manifest/export preview with visible watermark and data dictionary link |
| Demo documentation | `/demo/data-dictionary` | Field meanings, fixture provenance, lifecycle state definitions and synthetic-only policy |

Avoid adding `/features` as a duplicate of product pages. Avoid adding a thin `/customers` route when there are no customers. If the team later wants a shorter public launch, reduce solution/resource depth intentionally after content inventory; do not drop module pages or hide any of the five offers.

## 5. Navigation

**Desktop top level:** Products, Platform, Solutions, Resources, Pricing, then the assessment CTA. Products lists all five names plus plain-language descriptors. Platform groups Platform, Lifecycle, Stack fit, and Trust. Resources groups Evaluation and the two concrete resources. Company, Contact, and Sign in can live in a utility menu and complete footer to avoid crowding the header.

The synthetic demo is a clearly labeled secondary action in the hero, product pages, assessment page and appropriate navigation area. It is distinguishable from requesting a guided assessment. Mobile exposes the same destinations with grouped accordions and visible synthetic-demo labeling.

Footer repeats product links and provides company, contact, privacy, terms, trust, assessment and access paths. LinkedIn and Crunchbase destinations remain unlinked/inactive or omitted according to the eventual approved treatment until actual company profile URLs exist; never fabricate URLs or use `#`.

## 6. Homepage as a scroll story

Use one concrete memory record as the narrative object. The metaphor is a fact accumulating an audit trail, not a magical vault swallowing data. Story progression should make uncertainty more visible, not animate it away.

| Chapter | Content and buyer question | Interaction and evidence | Mobile / reduced-motion |
|---|---|---|---|
| 1. A fact needs context | Specific hero explains proposed memory governance and target buyer. Visible concept-stage line. Two CTAs plus five-module index. | Synthetic record C-012 appears with value “email invoices,” source, tenant and purpose already legible. No blocking intro. | Complete static record; readable text and CTAs immediately |
| 2. Memory travels | Where else could this fact be? | A source branches to sample store/index/cache destinations. Backup path stays visibly separate. Caption says synthetic map. | Stacked destinations with a short relationship summary |
| 3. One fact, five responsibilities | Introduce all five named modules and exact jobs before an extended pinned sequence. | Five distinct compact panels, each with its own workflow visual and dedicated-page link. Avoid five identical generic benefit cards. | Vertical sequence, full names, descriptors and links |
| 4. Follow the fact | “Learn → scope → correct → erase → check.” | One optional bounded sticky scene. Chapters update a structured record and ledger: corrected value becomes “portal only”; earlier version remains in history; requested erase shows explicit simulated statuses. Text is available outside animation. | Ordinary stacked steps; no pinning or sideways scroll requirement |
| 5. The receipt has a boundary | What did the check establish, and what is unresolved? | Simulated index A/cache B clear, fixture retrieval returns no active record; sample backup remains “Unverified — sample retention window.” An exception prevents a universal completion claim. | Receipt summary and accessible table/list |
| 6. Fit the stack you have | Why evaluate this if the native memory provider already deletes? | Proposed overlay diagram plus factual comparator. Distinguish documented native capabilities from evaluation hypotheses and unbuilt adapters. | Simple diagram and comparison text |
| 7. Define proof before the pilot | What would make the pilot worth funding? | Destination completeness, isolated retrieval checks, correction behavior, documented backup semantics, quality evaluation protocol. No fabricated scores or ROI. | Evaluation checklist, not animated counters |
| 8. A scoped commercial experiment | What is the next engagement? | Explain privacy-led tabletop → scoped sandbox → evidence review. Show supplied test prices with hypothesis labels and no active checkout. | Straightforward engagement summary |
| 9. Map your memory deletion paths | What information is needed now? | Relevant objections/FAQ, compact assessment CTA and full footer. | Same content and clear navigation |

For the sticky sequence, derive displayed state deterministically from chapter progress. Up-scroll restores prior illustrative states; it must not dispatch erasures, mutate shared state, or create repeated events. The explicit interactive demo is a separate local state machine. Story scenes are never evidence that real system operations occurred.

**Motion limits:** One principal pinned scene is sufficient. Keep native scroll, anchor jumps, route access and keyboard reading intact. No compulsory pointer tracking, scroll hijacking, essential text hidden by timing, or long blank transition spans. A premium story can move slowly in composition while preserving fast access to facts.

## 7. Dedicated product page anatomy

Every module page gets: precise proposed responsibility; buyer job; input and output; one source-to-decision workflow; original synthetic UI preview or editable diagram; edge case; shared-platform relationship; native alternative/evaluation boundary; relevant module FAQ; assessment CTA preselecting the module. Product-specific evidence prevents these five pages from becoming the same template with swapped headings.

Distinguish planned capabilities from implemented demo features. For example, a local fixture can demonstrate a denial state; it cannot substantiate production tenant isolation. A receipt mockup can demonstrate an evidence schema; it cannot establish real erasure coverage.

## 8. Demo information and state architecture

**Single workspace:** Fictional Helio Helpdesk. Hero record: synthetic contact C-012. Tenant/purpose facts must remain consistent across queue, detail, source pane, timeline, receipt and export.

**Record shape:** Fixture ID; fictional tenant; purpose; subject ID; value; source artifact ID and excerpt; learned timestamp; consent state; expiry; active version; prior versions; destination references; assigned fictional reviewer; current status; dated next action. Store all times from one deterministic fixture clock so screenshots match.

**Queue:** 8–12 records across pending, blocked, completed and rejected states. The labels must denote the actual task (e.g., review pending, erasure blocked, correction rejected), not ambiguous all-purpose status. Summary counts derive from those fixtures. Include at least one cross-tenant denial, contradiction, expired consent, and unresolved backup destination.

**Core record states:** Original fact → correction proposed → simulated reviewer approval → active version “portal only,” prior version retained in history → erase requested → destination checks complete for index A/cache B → receipt **Partial / backup boundary unverified**. Do not use “permanently deleted” or an undifferentiated green “success.”

**Safe interaction:** The demo may apply explicit in-memory mock-state transitions, despite being “read-only” relative to all external systems. Labels such as “Simulate correction” and “Simulate erase checks” resolve this apparent brief conflict. No real provider API, mail, billing, data ingestion, background analytics leakage or external writing. Reset restores the original fixture state. Synthetic export generation may produce a local, watermarked artifact if included in the later implementation scope.

**Receipt fields:** Simulated receipt ID and timestamp; fixture/contact ID; simulated request and reviewer; in-scope destinations; status per destination; check performed; fixture result; unknown or excluded destinations; backup/restore limitation; caveated conclusion; synthetic watermark. A row stating “no active result in fixture retrieval” must not be summarized as “all copies erased.”

Provide error, empty, blocked, loading and reset feedback where relevant. Screen-reader status announcements communicate mock transitions. The dataset never accepts pasted PII or arbitrary customer records.

## 9. Conversion and qualification

Use one primary assessment flow, with two progressive steps to reduce friction without discarding qualification.

**Step 1:** Work email, role, company, memory provider (including “not selected/other”), proposed module interest (five names plus “help me choose”). Show “Do not include personal data, secrets, contracts, or production logs.”

**Step 2:** Approximate derived-index count; known backup/restore window (including “unknown”); whether a privacy owner is involved; sandbox availability (yes/no/needs review); short concept-specific question: “Which memory destination is hardest to correct or erase today?” Avoid an unrestricted upload field. The first four context items can be compact selections.

**Consent:** Explicit privacy acknowledgement/consent wording tied to the actual lawful basis and service, with optional interview outreach opt-in separate and unchecked. Do not invent a retention period or legal operator. These must be settled before live collection. No public field should solicit sandbox credentials or production access.

**States:** Pristine; valid/invalid; submitting; recoverable error; submitted to configured endpoint; optional verification pending; confirmed. If the backend is absent, use a visibly simulated submission and never claim a real request was received. A frontend success state is not `verified_signup`, an interview, or a funded pilot.

**Qualified outcome:** Named privacy sponsor and acceptance criteria, scoped sandbox, DPA/security review path, pilot commitment. These remain distinct states; an email address alone qualifies for none of them.

**Planned events:** `landing_view`, `demo_open`, `demo_complete`, `pricing_view`, `form_start`, `form_submit`, `verified_signup`, `interview_booked`; preserve campaign attribution only within the eventual consent/privacy setup. Separate `demo.*` simulation events from real lead records. Add server dedupe only when a real server exists; do not claim it in the research deliverable.

## 10. Honest evidence substitutions

| Generic SaaS convention to avoid | Useful Factmend replacement |
|---|---|
| Customer-logo strip without customers | Labeled synthetic source → destination trace and a short evidence-status line |
| “Trusted by security teams” | Exact target buyer and proposed review process |
| Fake testimonial | A sourced buyer problem or authored evaluation question, with attribution only when verified |
| Fabricated uptime/savings/ROI | Test protocol, artifact schema, and explicit current evidence status |
| Integration-logo carousel | Native alternative/stack-fit comparison with documented capability vs unbuilt adapter status |
| Universal compliance badge | Proposed responsibility matrix, limitations and DPA/security review prerequisites |
| Three polished pricing tiers | Supplied two price hypotheses and scoped pilot selection without checkout |
| Decorative dashboard graph | Source lineage, correction history, destination ledger, and meaningful failed check |
| “No trace remains” animation | Unresolved backup branch stays visible after the active retrieval check clears |
| Fictional team photos or company story | Mission, design principles, concept status and real contact facts when supplied |

No testimonial section was explicitly required by this startup brief, and no quotes are provided. The guide's general section pattern does not justify inventing one. An evaluation/evidence section serves the same credibility job honestly.

## 11. Content conflict traps and proposed resolutions

1. **Real SaaS feel vs research-stage truth:** Aim for complete, polished information and interactions. Keep a concise persistent concept label and contextual evidence labels; do not pretend maturity. Avoid saturating every paragraph with disclaimers, but attach every substantive simulated/proposed claim to its proper status.
2. **Five modules vs one pilot:** Show all five as distinct optional directions. Assessment chooses one initial module; it does not collapse the portfolio or promise a five-module deployed platform.
3. **Read-only demo vs interactive correction:** Read-only describes external effects. Permit explicit local simulations and explain them; no real data changes.
4. **Clear receipt vs proof of irreversible erasure:** Receipt documents in-scope checks and unknowns. “Complete” may apply only to a named fixture check, never all physical copies or backup permanence.
5. **Guide integration page vs no live integrations:** Use Stack fit and factual comparison. Label adapter/connectivity status as unimplemented unless verified later.
6. **Guide results page vs no demand/ROI:** Use Evaluation, containing method, samples and current evidence status, not customer success.
7. **Guide sign-in completeness vs no backend:** Supply a truthful complete access page with disabled/unavailable production access and clear demo route. Do not stage false SSO or account creation success.
8. **Master guide social icons vs no profile URLs:** Keep inactive treatment explicit or omit unavailable links; no fictitious profiles.
9. **Recall Harbor domain research vs Factmend:** Neither name nor domain clearance transfers. Do not link or claim `factmend.com` without fresh verification.
10. **Claimed screenshot in pasted brief:** Treat the referenced `screenshots/06-website-preview.png` as unavailable until actually supplied/read. It is not implementation evidence for Factmend.
11. **Human approval compulsory wording:** In this concept, model a reviewer approval for correction/erase simulation. Do not add irrelevant clinical, physical or payment flows simply because boilerplate lists them.
12. **A “perfect” site vs evidence-based iteration:** Evaluate clarity, architecture, product specificity, motion usability and truthful conversion. Design quality is assessable; demand remains a test.

## 12. Open decisions before build

**Can proceed with working assumptions now:** Factmend working name; all five renamed modules with unchanged jobs; light editorial/technical direction as an option; one fact as signature object; one main homepage sticky sequence; concept-stage and synthetic labels; assessment as primary CTA; no live operations.

**Needs user/design selection before high-fidelity build:** Final visual territory; typography/logo direction; exact public stage-label wording; which module anchors the first pilot; whether to expose price hypotheses publicly or keep them inside qualification (the brief presently requires a hypothesis-pricing page, so default to public with clear labels).

**Needs real facts before live collection/deployment:** Legal operator and contact, actual domain, approved profile URLs, lead-storage endpoint and processors, retention/deletion process, analytics consent behavior, security responsibility owner, deployment account/repository. Do not block research on these.

**Research must resolve:** Current native deletion/scoping/export capabilities; whether incumbent providers already solve the proposed cross-destination gap; backup/restore mechanics and residency assumptions; buyer vocabulary; measurable retrieval-quality acceptance criteria; whether the three supplied visual references actually support the proposed scroll treatment at desktop and mobile sizes.

## 13. Research-stage acceptance check

- Every named offer is inventoried and mapped to a page, homepage treatment and intake selection.
- Buyer, champion and budget holder each have a direct path.
- Homepage tells one concrete record story, while all five modules remain easy to discover.
- Synthetic behavior is separated from proposed production capability and buyer-demand evidence.
- Routes have distinct jobs rather than a long list of thin duplicates.
- Demo correction, erase, read-after-delete and backup caveat states are specified.
- Native delete is explicitly acknowledged; no novelty or compliance claim is introduced.
- No design or code deliverable, deployed site, actual screenshot, connected form, live integration or verified commercial milestone is claimed.
