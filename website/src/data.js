export const modules = [
  {
    id: "desk",
    slug: "memory-desk",
    name: "Memory Desk",
    job: "Scope every memory",
    icon: "scope",
    theme: "sage",
    title: "The right memory.\nIn the right hands.",
    description:
      "Give every remembered fact a tenant, a purpose and a clear retrieval boundary. Make the access decision as legible as the answer.",
    question: "Who can retrieve this fact?",
    visual: "desk-scope-map",
    steps: [
      [
        "Identify the request",
        "Start with the tenant and purpose of the assistant making the request. A fact without a boundary is an ambiguous input.",
      ],
      [
        "Match the memory",
        "Resolve the subject, source and purpose together. An account match alone does not authorize a new use.",
      ],
      [
        "Explain the decision",
        "Return the scoped result or a denial with a reason. Keep the decision inspectable alongside the record.",
      ],
    ],
    edge: "The account matches. The purpose does not.",
    edgeText:
      "A sales assistant requesting a support-only preference should receive a purpose mismatch, even inside the same tenant.",
    output: "A scoped memory response",
    related: "review",
  },
  {
    id: "review",
    slug: "memory-review",
    name: "Memory Review",
    job: "Keep the source and the changes",
    icon: "review",
    theme: "peach",
    title: "Facts change.\nTheir history should stay.",
    description:
      "Connect the current value to the conversation that changed it. Inspect versions, resolve contradictions and keep a clear reviewer decision.",
    question: "What changed, and why?",
    visual: "review-version-history",
    steps: [
      [
        "Follow the source",
        "Inspect the original excerpt and the moment a preference was learned. Keep attribution attached to the value.",
      ],
      [
        "Compare the versions",
        "See “email invoices” next to “portal only.” A newer timestamp is a reason to review, not an automatic guarantee of truth.",
      ],
      [
        "Make a deliberate decision",
        "Approve the correction, retain the earlier version as history, and make the new retrieval value explicit.",
      ],
    ],
    edge: "Two sources disagree. Keep the question open.",
    edgeText:
      "A contradiction remains unresolved until a reviewer has enough context. Show the conflicting values rather than silently selecting one.",
    output: "A source-linked revision ledger",
    related: "proof",
  },
  {
    id: "proof",
    slug: "memory-proof",
    name: "Memory Proof",
    job: "Carry consent and retention forward",
    icon: "proof",
    theme: "paper",
    title: "Memory needs\nan expiry date.",
    description:
      "Bring retention schedules and consent changes into the memory lifecycle. See the policy, the deadline and the destinations still waiting to acknowledge it.",
    question: "When does this memory stop belonging?",
    visual: "proof-retention-timeline",
    steps: [
      [
        "Attach the policy",
        "Tie the fact to a purpose, consent state and retention rule. Preserve the policy version used for the decision.",
      ],
      [
        "Evaluate the deadline",
        "A scheduled expiry and a consent withdrawal are different triggers. Show which one applies and when.",
      ],
      [
        "Track propagation",
        "Follow acknowledgements across destinations. A policy change is only as clear as its unresolved boundaries.",
      ],
    ],
    edge: "The policy expired. One copy has not acknowledged it.",
    edgeText:
      "Keep the outstanding destination visible and assign a review owner. An expiry timestamp does not establish that every copy disappeared.",
    output: "A dated policy evaluation",
    related: "signal",
  },
  {
    id: "signal",
    slug: "memory-signal",
    name: "Memory Signal",
    job: "Inspect selective erasure",
    icon: "signal",
    theme: "ink",
    title: "A deletion request\ndeserves a clear answer.",
    description:
      "Follow an erasure request across indexes, caches and backup boundaries. Build a receipt that says what was checked—and what remains unknown.",
    question: "Where did erasure reach?",
    visual: "signal-destination-map",
    steps: [
      [
        "Define the scope",
        "Name the subject, purpose and destinations before any check. Keep correction separate from erasure.",
      ],
      [
        "Check each destination",
        "Capture acknowledgement and the result of a read-after-delete check for each in-scope store.",
      ],
      [
        "Keep the boundary visible",
        "An index and cache can clear while backup status stays unverified. A partial receipt preserves that distinction.",
      ],
    ],
    edge: "The active index is clear. The backup is unverified.",
    edgeText:
      "A retrieval check covers the named active path. It does not prove physical erasure, backup expiry or future restore behavior.",
    output: "A destination-specific receipt",
    related: "report",
  },
  {
    id: "report",
    slug: "memory-report",
    name: "Memory Report",
    job: "Move memory with its context",
    icon: "report",
    theme: "sage",
    title: "Take the memory.\nKeep its meaning.",
    description:
      "Package facts with scope, lineage, versions and policies. Give migrations a readable manifest and a test plan for retrieval quality.",
    question: "What travels with the fact?",
    visual: "report-export-manifest",
    steps: [
      [
        "Package the context",
        "Export the value together with subject, tenant, purpose and source references. Keep the schema and version visible.",
      ],
      [
        "Check the destination",
        "Compare the receiving system’s scoping, policy and version semantics. A valid file does not guarantee equivalent behavior.",
      ],
      [
        "Evaluate retrieval",
        "Run the same scoped questions before and after migration. Record acceptance criteria and unresolved differences.",
      ],
    ],
    edge: "The file imports. The meaning still needs a check.",
    edgeText:
      "Confirm that purpose restrictions, version selection and expiry behave as intended in the destination. Retrieval quality remains a measured test.",
    output: "A portable memory manifest",
    related: "desk",
  },
];
export const lifecycle = [
  [
    "Learn",
    "A fact starts with a source.",
    "A support conversation becomes a preference. The source, subject and purpose stay attached.",
  ],
  [
    "Scope",
    "Context sets the boundary.",
    "The Helio support assistant can retrieve the preference. Another tenant or a sales purpose receives a denial.",
  ],
  [
    "Correct",
    "The new value has a history.",
    "“Portal only” supersedes “email invoices.” The original value stays legible as a prior version.",
  ],
  [
    "Erase",
    "Trace every destination.",
    "An erasure request names the active index, cache and backup boundary independently.",
  ],
  [
    "Check",
    "A receipt tells the whole story.",
    "Active paths clear in the sample. The backup remains unverified. The receipt stays partial.",
  ],
];
export const records = [
  {
    id: "C-012",
    subject: "Invoice delivery",
    value: "email invoices",
    purpose: "Support",
    status: "Review pending",
    source: "Support chat · 06 Oct",
    tenant: "Helio",
  },
  {
    id: "C-018",
    subject: "Preferred language",
    value: "English",
    purpose: "Support",
    status: "Current",
    source: "Profile · 07 Oct",
    tenant: "Helio",
  },
  {
    id: "C-024",
    subject: "Contact channel",
    value: "In-app messages",
    purpose: "Support",
    status: "Current",
    source: "Support chat · 08 Oct",
    tenant: "Helio",
  },
  {
    id: "C-031",
    subject: "Consent preference",
    value: "Withdrawn",
    purpose: "Marketing",
    status: "Consent expired",
    source: "Consent event · 08 Oct",
    tenant: "Helio",
  },
  {
    id: "C-044",
    subject: "Account timezone",
    value: "UTC +01:00",
    purpose: "Support",
    status: "Contradiction",
    source: "Two profile sources",
    tenant: "Helio",
  },
  {
    id: "C-050",
    subject: "Invoice archive",
    value: "Erasure requested",
    purpose: "Billing",
    status: "Erasure blocked",
    source: "Privacy request · 08 Oct",
    tenant: "Helio",
  },
  {
    id: "C-063",
    subject: "Support preference",
    value: "Cross-tenant request",
    purpose: "Support",
    status: "Access denied",
    source: "Tenant mismatch",
    tenant: "Solace",
  },
  {
    id: "C-072",
    subject: "Digest frequency",
    value: "Weekly",
    purpose: "Notifications",
    status: "Current",
    source: "Settings · 05 Oct",
    tenant: "Helio",
  },
];
export const pages = {
  "/why-memory-governance": {
    eyebrow: "Why memory governance",
    title: "A fact can travel\nfurther than you think.",
    lead: "A conversation ends. The memory lives on—in a store, an index, a cache, or a downstream export. Understanding those paths is the first step toward governing them.",
    theme: "peach",
    kind: "problem",
  },
  "/platform": {
    eyebrow: "The Factmend platform",
    title: "One record.\nA connected story.",
    lead: "Bring scope, lineage, policy and destination evidence into the same record model. Give each team a shared way to inspect what an assistant remembers.",
    theme: "sage",
    kind: "platform",
  },
  "/architecture": {
    eyebrow: "Architecture",
    title: "See the boundaries\nbehind the answer.",
    lead: "A readable memory model, explicit destinations and independent checks. Start with the stack you have and the boundaries you need to understand.",
    theme: "sage",
    kind: "platform",
  },
  "/lifecycle": {
    eyebrow: "The memory lifecycle",
    title: "From first learned\nto last checked.",
    lead: "Learning, correction, retention and erasure are different operations. Follow one fact through the decisions that shape its lifetime.",
    theme: "paper",
    kind: "lifecycle",
  },
  "/solutions": {
    eyebrow: "Solutions",
    title: "Different questions.\nA shared memory story.",
    lead: "Privacy engineering needs evidence. AI platform teams need clear semantics. Factmend brings both questions into the same conversation.",
    theme: "paper",
    kind: "solutions",
  },
  "/use-cases": {
    eyebrow: "Use cases",
    title: "Make memory\nwork for the task.",
    lead: "Understand the source of a support preference, inspect selective erasure, or move an assistant to a new memory stack without losing its context.",
    theme: "peach",
    kind: "solutions",
  },
  "/solutions/privacy-engineering": {
    eyebrow: "For privacy engineering",
    title: "Turn uncertainty\ninto a reviewable path.",
    lead: "Start with the destinations you can name. Define what each check establishes, assign the unknowns and agree on evidence before a pilot begins.",
    theme: "ink",
    kind: "privacy",
  },
  "/solutions/ai-platforms": {
    eyebrow: "For AI platform teams",
    title: "Design the memory\nbehind the experience.",
    lead: "Make tenancy, version selection and migration behavior explicit. Compare the semantics of your native stack before adding another layer.",
    theme: "sage",
    kind: "architect",
  },
  "/stack-fit": {
    eyebrow: "Stack fit",
    title: "Start with\nwhat already works.",
    lead: "Native memory APIs may already meet your requirements. Evaluate the gap across the destinations, policies and retrieval paths in your own stack.",
    theme: "paper",
    kind: "stack",
  },
  "/evaluation": {
    eyebrow: "Evaluation",
    title: "Define the evidence.\nThen run the test.",
    lead: "A useful pilot starts with acceptance criteria. Evaluate isolation, correction, erasure boundaries and retrieval quality as separate questions.",
    theme: "sage",
    kind: "evaluation",
  },
  "/trust": {
    eyebrow: "Trust & governance",
    title: "Clarity is\na control.",
    lead: "Name the owner, the boundary and the evidence. Security and privacy review should start with explicit responsibilities rather than a broad promise.",
    theme: "paper",
    kind: "trust",
  },
  "/company": {
    eyebrow: "About Factmend",
    title: "Useful memory\nshould be understandable.",
    lead: "We’re building around a simple idea: a persistent assistant should have a readable relationship with the facts it keeps.",
    theme: "sunlit",
    kind: "company",
  },
  "/about": {
    eyebrow: "About Factmend",
    title: "Useful memory\nshould be understandable.",
    lead: "We’re building around a simple idea: a persistent assistant should have a readable relationship with the facts it keeps.",
    theme: "sunlit",
    kind: "company",
  },
};
export const resources = [
  {
    slug: "deletion-destination-checklist",
    category: "Checklist",
    title: "Where does a memory actually live?",
    description:
      "A practical map for stores, indexes, caches, exports and backup boundaries.",
    visual: "signal-destination-map",
    time: "6 min read",
  },
  {
    slug: "sandbox-evaluation-protocol",
    category: "Field guide",
    title: "Define a memory governance pilot.",
    description:
      "Agree on the fixtures, the checks and the evidence before you start.",
    visual: "assessment-user-flow",
    time: "8 min read",
  },
  {
    slug: "memory-data-dictionary",
    category: "Reference",
    title: "The anatomy of a governed record.",
    description:
      "A field-by-field guide to scope, lineage, versions and destination checks.",
    visual: "editorial-record-plate",
    time: "5 min read",
  },
];
export const siteRoutes = [
  "/",
  "/products",
  ...modules.map((m) => "/products/" + m.slug),
  ...Object.keys(pages),
  "/pricing",
  "/assessment",
  "/request-demo",
  "/contact",
  "/resources",
  ...resources.map((r) => "/resources/" + r.slug),
  "/sign-in",
  "/reset-password",
  "/legal/privacy",
  "/legal/terms",
  "/demo",
  "/demo/memories",
  "/demo/memories/c-012",
  "/demo/receipts/erase-c-012",
  "/demo/exports",
  "/demo/data-dictionary",
];
export const titleFor = (path) =>
  path === "/"
    ? "Keep the whole story"
    : modules.find((m) => path.endsWith(m.slug))?.name ||
      pages[path]?.eyebrow ||
      resources.find((r) => path.endsWith(r.slug))?.title ||
      {
        "/products": "Products",
        "/pricing": "Pricing",
        "/assessment": "Map your memory paths",
        "/request-demo": "Request a conversation",
        "/contact": "Contact",
        "/resources": "Resources",
        "/sign-in": "Workspace access",
        "/reset-password": "Account help",
        "/legal/privacy": "Privacy",
        "/legal/terms": "Terms",
      }[path] ||
      (path.startsWith("/demo") ? "Memory workspace" : "Page not found");
