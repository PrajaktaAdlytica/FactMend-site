import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { modules, records, resources } from "./data";
import {
  A,
  Icon,
  Arrow,
  Button,
  TextLink,
  Tag,
  PageHero,
  SectionHead,
  Plate,
  CTA,
  ScopeWidget,
  VersionWidget,
  PolicyWidget,
  ManifestWidget,
} from "./components";
function download(name, data) {
  const blob = new Blob(
    [typeof data === "string" ? data : JSON.stringify(data, null, 2)],
    { type: typeof data === "string" ? "text/plain" : "application/json" },
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
export function Assessment({ contact = false }) {
  const location = useLocation();
  const initial = new URLSearchParams(location.search).get("module") || "help";
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    email: "",
    company: "",
    role: "",
    provider: "",
    module: initial,
    indexes: "Unknown",
    backup: "Unknown",
    sponsor: "Needs review",
    sandbox: "Needs review",
    question: "",
    ack: false,
  });
  const [prepared, setPrepared] = useState(false);
  const [brief, setBrief] = useState(null);
  const update = (e) =>
    setValues((v) => ({
      ...v,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  const submit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    const b = {
      company: values.company,
      role: values.role,
      email: values.email,
      memoryProvider: values.provider,
      product:
        values.module === "help"
          ? "Help me choose"
          : modules.find((m) => m.id === values.module)?.name,
      indexCount: values.indexes,
      backupWindow: values.backup,
      privacySponsor: values.sponsor,
      sandbox: values.sandbox,
      question: values.question,
    };
    setBrief(b);
    setPrepared(true);
  };
  return (
    <>
      <PageHero
        eyebrow={contact ? "Start a conversation" : "A scoped assessment"}
        title={
          contact
            ? "Let’s understand\nyour memory question."
            : "Map the paths.\nDefine the next step."
        }
        lead="Tell us which memory boundary you want to understand. Start with architecture and workflow context; keep customer records and credentials out of the conversation."
        theme="sunlit"
        action={false}
      />
      <section className="assessment-section" data-chapter>
        <div className="wrap assessment-layout">
          <aside data-reveal>
            <p className="eyebrow">What the review covers</p>
            <h2>
              A useful first
              <br />
              conversation.
            </h2>
            <ol>
              {[
                ["Map", "Name the native store and derived destinations."],
                [
                  "Review",
                  "Agree on a sponsor, a sandbox and acceptance criteria.",
                ],
                [
                  "Decide",
                  "Select one product direction and an evaluation scope.",
                ],
              ].map(([title, text]) => (
                <li key={title}>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
            <p className="form-context">
              The form prepares a downloadable request brief on your device.
              Message delivery will be available when the contact service is
              connected.
            </p>
            <TextLink to="/demo">Explore without an account</TextLink>
          </aside>
          <div className="assessment-form" data-reveal>
            {prepared ? (
              <div className="prepared-state" role="status">
                <Icon name="record" size={40} />
                <p className="eyebrow">Your context, organized</p>
                <h2>
                  Your assessment brief
                  <br />
                  is ready.
                </h2>
                <p>
                  Review the summary and download your brief. No request has
                  been sent.
                </p>
                <dl>
                  {Object.entries(brief)
                    .filter(([k]) => !["question", "email"].includes(k))
                    .map(([k, v]) => (
                      <div key={k}>
                        <dt>{k.replace(/([A-Z])/g, " $1")}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                </dl>
                <button
                  className="button"
                  onClick={() =>
                    download("factmend-assessment-brief.json", brief)
                  }
                >
                  Download your brief
                  <Icon name="download" />
                </button>
                <button
                  className="plain-button"
                  onClick={() => {
                    setPrepared(false);
                    setStep(1);
                  }}
                >
                  Edit the details <span>←</span>
                </button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="form-step">
                  <span>0{step} / 02</span>
                  <h3>
                    {step === 1
                      ? "Your team & memory stack"
                      : "The boundary to inspect"}
                  </h3>
                </div>
                {step === 1 ? (
                  <div className="form-fields">
                    <label>
                      Work email
                      <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={update}
                        required
                        placeholder="you@company.com"
                      />
                    </label>
                    <label>
                      Company
                      <input
                        name="company"
                        autoComplete="organization"
                        value={values.company}
                        onChange={update}
                        required
                      />
                    </label>
                    <div className="field-grid">
                      <label>
                        Your role
                        <select
                          name="role"
                          value={values.role}
                          onChange={update}
                          required
                        >
                          <option value="">Select a role</option>
                          <option>Privacy engineering</option>
                          <option>AI platform / architecture</option>
                          <option>Security / privacy leader</option>
                          <option>Product / engineering</option>
                          <option>Other</option>
                        </select>
                      </label>
                      <label>
                        Memory provider
                        <select
                          name="provider"
                          value={values.provider}
                          onChange={update}
                          required
                        >
                          <option value="">Select a stack</option>
                          <option>Mem0</option>
                          <option>Zep</option>
                          <option>Supermemory</option>
                          <option>Google Memory Bank</option>
                          <option>Custom / internal</option>
                          <option>Not selected / other</option>
                        </select>
                      </label>
                    </div>
                    <label>
                      Where would you like to start?
                      <select
                        name="module"
                        value={values.module}
                        onChange={update}
                      >
                        {modules.map((m) => (
                          <option key={m.id} value={m.id}>
                            {m.name} — {m.job}
                          </option>
                        ))}
                        <option value="help">Help me choose</option>
                      </select>
                    </label>
                  </div>
                ) : (
                  <div className="form-fields">
                    <div className="field-grid">
                      <label>
                        Derived indexes
                        <select
                          name="indexes"
                          value={values.indexes}
                          onChange={update}
                        >
                          {["Unknown", "1", "2–5", "6 or more"].map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Backup / restore window
                        <select
                          name="backup"
                          value={values.backup}
                          onChange={update}
                        >
                          {[
                            "Unknown",
                            "Under 30 days",
                            "30–90 days",
                            "Over 90 days",
                          ].map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <div className="field-grid">
                      <label>
                        Privacy sponsor
                        <select
                          name="sponsor"
                          value={values.sponsor}
                          onChange={update}
                        >
                          {[
                            "Needs review",
                            "Identified",
                            "Not yet identified",
                          ].map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Sandbox availability
                        <select
                          name="sandbox"
                          value={values.sandbox}
                          onChange={update}
                        >
                          {[
                            "Needs review",
                            "Available",
                            "Not available yet",
                          ].map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label>
                      Which memory destination is hardest to correct or erase?
                      <textarea
                        rows="4"
                        maxLength="700"
                        name="question"
                        value={values.question}
                        onChange={update}
                        placeholder="Describe the workflow or architecture question."
                        required
                      />
                    </label>
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="ack"
                        checked={values.ack}
                        onChange={update}
                        required
                      />
                      <span>
                        I have kept personal records, credentials and production
                        logs out of this brief.
                      </span>
                    </label>
                    <Link className="privacy-link" to="/legal/privacy">
                      How this form handles information
                    </Link>
                  </div>
                )}
                <div className="form-controls">
                  {step === 2 && (
                    <button
                      type="button"
                      className="plain-button"
                      onClick={() => setStep(1)}
                    >
                      ← Back
                    </button>
                  )}
                  <button className="button" type="submit">
                    {step === 1 ? "Continue" : "Prepare your request"}
                    <Arrow />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="sage" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Start with the destination map"
            title={"Bring the context\\nyou already have."}
            body="A useful review begins with the primary store, the retrieval path, the derived copies and the unknowns."
          />
          <Plate
            name="contact-map"
            alt="Map the source, memory destinations and review boundary"
          />
        </div>
      </section>
    </>
  );
}
export function SignIn({ recovery = false }) {
  return (
    <section className="access-page">
      <div className="access-art">
        <img
          className="access-bg"
          src={`${A}images/sunlit-paper.webp`}
          alt=""
          width="1536"
          height="1024"
        />
        <div data-reveal>
          <img
            src={`${A}logos/mark-primary.svg`}
            alt=""
            width="76"
            height="76"
          />
          <h2>
            A clearer relationship
            <br />
            with what
            <br />
            <em>AI remembers.</em>
          </h2>
          <p>Scope. Source. Policy. Evidence.</p>
        </div>
      </div>
      <div className="access-content" data-reveal>
        <p className="eyebrow">Factmend workspace</p>
        <h1>
          {recovery
            ? "Let’s find\nyour next step."
            : "A place for\nthe whole story."}
        </h1>
        <p>
          {recovery
            ? "Production account recovery is not available yet. Explore the public workspace or prepare an access request."
            : "Production workspace accounts are not available yet. The public memory workspace is open without an account."}
        </p>
        <Button to="/demo">Open the memory workspace</Button>
        <Button to="/assessment" secondary>
          Discuss workspace access
        </Button>
        <div className="access-help">
          <Icon name="lock" />
          <span>No account or password required for the public workspace.</span>
        </div>
        <TextLink to={recovery ? "/sign-in" : "/reset-password"}>
          {recovery ? "Return to workspace access" : "Need help with access?"}
        </TextLink>
      </div>
    </section>
  );
}
export function Demo() {
  const checkTimer = useRef();
  useEffect(() => () => clearTimeout(checkTimer.current), []);
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState("C-012");
  const [corrected, setCorrected] = useState(false);
  const [receipt, setReceipt] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  const [tab, setTab] = useState(
    location.pathname.includes("/receipts")
      ? "Evidence"
      : location.pathname.includes("/exports")
        ? "Export"
        : location.pathname.includes("/data-dictionary")
          ? "Dictionary"
          : "Records",
  );
  const [announcement, setAnnouncement] = useState("");
  const reset = () => {
    clearTimeout(checkTimer.current);
    setCorrected(false);
    setReceipt(false);
    setPending(false);
    setError(false);
    setAnnouncement("Sample workspace reset.");
    setSearch("");
    setFilter("All");
  };
  const currentRecords = records.map((r) =>
    r.id === "C-012" && corrected
      ? { ...r, value: "portal only", status: "Current" }
      : r,
  );
  const selectedRecord = currentRecords.find((r) => r.id === selected);
  const filtered = currentRecords.filter(
    (r) =>
      (filter === "All" || r.status === filter) &&
      `${r.id} ${r.subject} ${r.value}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const runChecks = () => {
    clearTimeout(checkTimer.current);
    setPending(true);
    setReceipt(false);
    setError(false);
    setAnnouncement("Checking the two active destinations.");
    checkTimer.current = setTimeout(() => {
      setPending(false);
      setReceipt(true);
      setAnnouncement(
        "Sample checks complete. Index A and Cache B simulated clear. Backup remains unverified. Overall receipt partial.",
      );
    }, 800);
  };
  const exportData = () =>
    download("factmend-synthetic-memory-manifest.json", {
      synthetic: true,
      workspace: "Helio Helpdesk",
      record: {
        ...currentRecords[0],
        source: corrected ? "Support chat · 08 Oct" : "Support chat · 06 Oct",
        history: [
          {
            version: 1,
            value: "email invoices",
            source: "Support chat · 06 Oct",
          },
          ...(corrected
            ? [
                {
                  version: 2,
                  value: "portal only",
                  source: "Support chat · 08 Oct",
                },
              ]
            : []),
        ],
        value: corrected ? "portal only" : "email invoices",
        version: corrected ? 2 : 1,
      },
      receipt: receipt
        ? {
            status: "Partial",
            indexA: "Simulated clear",
            cacheB: "Simulated clear",
            backup: "Unverified",
          }
        : null,
    });
  return (
    <section className="workspace-page">
      <div className="wrap">
        <div className="workspace-heading">
          <div>
            <p className="eyebrow">The memory workspace</p>
            <h1>See the story behind the fact.</h1>
          </div>
          <div className="workspace-tools">
            <Tag>Fictional Helio records</Tag>
            <button className="plain-button" onClick={reset}>
              <Icon name="reset" />
              Reset workspace
            </button>
          </div>
        </div>
        <div className="workspace">
          <aside className="workspace-sidebar">
            <img
              src={`${A}logos/mark-primary.svg`}
              alt=""
              width="34"
              height="34"
            />
            <span className="workspace-name">
              Helio Helpdesk<small>Public sample workspace</small>
            </span>
            <nav aria-label="Workspace views">
              {[
                ["Records", "record"],
                ["Evidence", "signal"],
                ["Export", "report"],
                ["Dictionary", "info"],
              ].map(([name, icon]) => (
                <button
                  key={name}
                  aria-current={tab === name ? "page" : undefined}
                  onClick={() => setTab(name)}
                >
                  <Icon name={icon} />
                  {name}
                </button>
              ))}
            </nav>
            <div className="workspace-sidebar-foot">
              <span className="dot" />
              <p>
                Local interactions
                <br />
                No connected providers
              </p>
            </div>
          </aside>
          <div className="workspace-main">
            <div className="workspace-topbar">
              <span>
                Workspace <span>/</span> {tab}
              </span>
              <Link to="/assessment">
                Plan your own evaluation <Arrow />
              </Link>
            </div>
            <div className="workspace-body">
              {tab === "Records" ? (
                <>
                  <div className="workspace-metrics">
                    <div>
                      <span>Records</span>
                      <strong>{records.length}</strong>
                    </div>
                    <div>
                      <span>Current</span>
                      <strong>
                        {records.filter((r) => r.status === "Current").length +
                          (corrected ? 1 : 0)}
                      </strong>
                    </div>
                    <div>
                      <span>Needs review</span>
                      <strong>
                        {records.filter((r) => r.status !== "Current").length -
                          (corrected ? 1 : 0)}
                      </strong>
                    </div>
                    <div>
                      <span>Workspace</span>
                      <strong className="metric-word">Helio</strong>
                    </div>
                  </div>
                  <div className="workspace-filters">
                    <label>
                      <span className="sr-only">Search records</span>
                      <Icon name="search" />
                      <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Find a record…"
                      />
                    </label>
                    <label>
                      <span className="sr-only">Filter by record status</span>
                      <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      >
                        <option>All</option>
                        {[...new Set(records.map((r) => r.status))].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </label>
                    <span aria-live="polite">{filtered.length} records</span>
                  </div>
                  <div className="workspace-table table-shell">
                    <table>
                      <thead>
                        <tr>
                          <th>Record</th>
                          <th>Value</th>
                          <th>Purpose</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map((r) => (
                          <tr
                            className={selected === r.id ? "selected" : ""}
                            key={r.id}
                          >
                            <th>
                              <button
                                onClick={() => {
                                  setSelected(r.id);
                                  setAnnouncement(r.subject + " selected.");
                                }}
                              >
                                {r.id}
                                <small>{r.subject}</small>
                              </button>
                            </th>
                            <td>
                              {r.id === "C-012" && corrected
                                ? "portal only"
                                : r.value}
                            </td>
                            <td>{r.purpose}</td>
                            <td>
                              <Tag
                                tone={
                                  r.status === "Current" ||
                                  (r.id === "C-012" && corrected)
                                    ? "sage"
                                    : r.status === "Review pending"
                                      ? ""
                                      : "clay"
                                }
                              >
                                {r.id === "C-012" && corrected
                                  ? "Current"
                                  : r.status}
                              </Tag>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {filtered.length === 0 && (
                      <div className="empty-state">
                        <Icon name="search" size={32} />
                        <h3>No matching records.</h3>
                        <p>Try another subject or clear the filters.</p>
                        <button
                          className="plain-button"
                          onClick={() => {
                            setSearch("");
                            setFilter("All");
                          }}
                        >
                          Clear filters →
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="record-inspector">
                    <div className="inspector-heading">
                      <div>
                        <p className="eyebrow">Selected record / {selected}</p>
                        <h3>{selectedRecord.subject}</h3>
                      </div>
                      <Tag>
                        {selectedRecord.tenant} / {selectedRecord.purpose}
                      </Tag>
                    </div>
                    {selected === "C-012" ? (
                      <>
                        <div className="correction-comparison">
                          <div>
                            <span>Original / 06 Oct</span>
                            <h4>email invoices</h4>
                            <p>“Please email the invoices to me.”</p>
                          </div>
                          <div className={corrected ? "accepted" : ""}>
                            <span>Correction / 08 Oct</span>
                            <h4>portal only</h4>
                            <p>
                              “Please use the portal for invoices from now on.”
                            </p>
                          </div>
                        </div>
                        <div className="inspector-footer">
                          <span>
                            {corrected
                              ? "Version 2 current · Version 1 preserved"
                              : "Review the source before accepting a correction."}
                          </span>
                          <button
                            className="button small"
                            onClick={() => {
                              setCorrected(!corrected);
                              setAnnouncement(
                                corrected
                                  ? "Original fixture restored."
                                  : "Correction accepted locally. Portal only is now the current value.",
                              );
                            }}
                          >
                            {corrected
                              ? "Restore original"
                              : "Apply sample correction"}
                            <Icon name="review" size={18} />
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <p className="inspector-value">
                          {selectedRecord.value}
                        </p>
                        <dl className="record-detail-list">
                          <div>
                            <dt>Source</dt>
                            <dd>{selectedRecord.source}</dd>
                          </div>
                          <div>
                            <dt>State</dt>
                            <dd>{selectedRecord.status}</dd>
                          </div>
                          <div>
                            <dt>Review task</dt>
                            <dd>
                              {selectedRecord.status === "Contradiction"
                                ? "Inspect the conflicting sources"
                                : selectedRecord.status === "Access denied"
                                  ? "Keep tenant boundaries intact"
                                  : selectedRecord.status === "Erasure blocked"
                                    ? "Review the backup boundary"
                                    : selectedRecord.status ===
                                        "Consent expired"
                                      ? "Inspect policy propagation"
                                      : "Inspect source and scope"}
                            </dd>
                          </div>
                        </dl>
                      </>
                    )}
                  </div>
                </>
              ) : tab === "Evidence" ? (
                <>
                  <p className="eyebrow">Selective erasure / C-012</p>
                  <div className="evidence-view-heading">
                    <h2>The receipt is partial.</h2>
                    <Tag tone="clay">
                      {receipt ? "Partial" : "Awaiting checks"}
                    </Tag>
                  </div>
                  <p className="workspace-explanation">
                    Check the active retrieval paths separately from the backup
                    boundary. These checks use fixed fictional responses.
                  </p>
                  <div className="destination-checks">
                    {[
                      [
                        "Index A",
                        "Active retrieval",
                        "No active record returned",
                      ],
                      [
                        "Cache B",
                        "Derived response cache",
                        "Cached fixture value cleared",
                      ],
                      [
                        "Backup",
                        "Restore boundary",
                        "Retention and restore behavior unverified",
                      ],
                    ].map(([name, desc, result], i) => (
                      <article key={name}>
                        <Icon
                          name={i === 2 ? "archive" : "database"}
                          size={28}
                        />
                        <h3>{name}</h3>
                        <p>{desc}</p>
                        <Tag tone={i === 2 ? "clay" : receipt ? "sage" : ""}>
                          {i === 2
                            ? "Unverified"
                            : pending
                              ? "Checking…"
                              : receipt
                                ? "Simulated clear"
                                : "Awaiting check"}
                        </Tag>
                        <small>
                          {receipt || i === 2
                            ? result
                            : "A destination check is required."}
                        </small>
                      </article>
                    ))}
                  </div>
                  {error && (
                    <p className="error-box" role="alert">
                      Index A did not acknowledge the sample request. The
                      receipt remains incomplete. Retry the checks to recover.
                    </p>
                  )}
                  <div className="evidence-controls">
                    <button
                      className="button"
                      disabled={pending}
                      onClick={runChecks}
                    >
                      {pending ? "Checking destinations…" : "Run sample checks"}
                      <Icon name="signal" />
                    </button>
                    <button
                      className="plain-button"
                      onClick={() => {
                        clearTimeout(checkTimer.current);
                        setPending(false);
                        setError(true);
                        setReceipt(false);
                        setAnnouncement(
                          "Sample acknowledgement failure. Retry the checks.",
                        );
                      }}
                    >
                      Inspect a failed acknowledgement
                    </button>
                  </div>
                  <div className="evidence-boundary">
                    <Icon name="warning" />
                    <div>
                      <h4>The active path is one boundary.</h4>
                      <p>
                        A negative fixture retrieval result does not establish
                        physical erasure, backup expiry or future restore
                        behavior.
                      </p>
                    </div>
                  </div>
                </>
              ) : tab === "Export" ? (
                <>
                  <p className="eyebrow">Memory Report / Portable context</p>
                  <h2>The fact and its envelope.</h2>
                  <p className="workspace-explanation">
                    The manifest carries the fixture, scope and version context.
                    Download the local sample for inspection.
                  </p>
                  <ManifestWidget
                    value={corrected ? "portal only" : "email invoices"}
                    version={corrected ? 2 : 1}
                  />
                  <button className="button export-button" onClick={exportData}>
                    Download sample manifest
                    <Icon name="download" />
                  </button>
                </>
              ) : (
                <>
                  <p className="eyebrow">Workspace reference</p>
                  <h2>A readable record model.</h2>
                  <div className="dictionary-list">
                    {[
                      [
                        "record_id",
                        "A stable reference to the fictional record.",
                      ],
                      [
                        "tenant + purpose",
                        "The organization and permitted retrieval context.",
                      ],
                      [
                        "source",
                        "The conversation or event from which the fact was learned.",
                      ],
                      [
                        "active_version",
                        "The value selected for current retrieval.",
                      ],
                      [
                        "policy",
                        "The consent and retention rule attached to the fact.",
                      ],
                      [
                        "destinations",
                        "Independently named stores or derived copies.",
                      ],
                      [
                        "receipt",
                        "A scoped result with checks, exclusions and unknowns.",
                      ],
                    ].map(([field, desc]) => (
                      <div key={field}>
                        <strong>{field}</strong>
                        <p>{desc}</p>
                      </div>
                    ))}
                  </div>
                  <TextLink to="/resources/memory-data-dictionary">
                    Read the complete field guide
                  </TextLink>
                </>
              )}
            </div>
            <div className="workspace-status" role="status">
              {announcement || "Sample data stays in this browser session."}
            </div>
          </div>
        </div>
        <div className="workspace-below">
          <TextLink to="/products">Explore the five products</TextLink>
          <p>
            Corrections and erasure checks are separate operations. Reload or
            reset to restore the fixture.
          </p>
        </div>
      </div>
    </section>
  );
}
