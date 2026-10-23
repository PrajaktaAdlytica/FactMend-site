import React, { useState } from "react";
import { Link } from "react-router-dom";
import { modules, pages, resources, lifecycle } from "./data";
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
  Story,
  CTA,
  FAQ,
  SystemMap,
  ScopeWidget,
  ReceiptWidget,
  ManifestWidget,
} from "./components";
function Principles({ items }) {
  return (
    <div className="principles">
      {items.map(([title, text], i) => (
        <article key={title} data-reveal>
          <span className="principle-n">0{i + 1}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
export function GeneralPage({ path }) {
  const p = pages[path];
  const kind = p.kind;
  return (
    <>
      <PageHero {...p} lead={p.lead} title={p.title}>
        {kind === "platform" ? (
          <SystemMap />
        ) : kind === "privacy" ? (
          <ReceiptWidget />
        ) : kind === "architect" ? (
          <ScopeWidget />
        ) : kind === "stack" ? (
          <div className="native-stack">
            <span>Your existing memory stack</span>
            <Icon name="arrow-down" />
            <div>
              <strong>Native controls</strong>
              <small>Scope · delete · export</small>
            </div>
            <Icon name="arrow-down" />
            <div className="stack-question">
              <strong>What remains to evaluate?</strong>
              <small>Derived copies · policy · restore</small>
            </div>
          </div>
        ) : kind === "company" ? (
          <div className="company-folio">
            <img
              src={`${A}logos/mark-primary.svg`}
              alt="Factmend folio mark"
              width="160"
              height="160"
            />
            <span>
              Keep the context.
              <br />
              Keep the responsibility.
            </span>
          </div>
        ) : kind === "evaluation" || kind === "trust" ? (
          <div className="acceptance-card">
            <p className="eyebrow">The review ledger</p>
            {[
              "Scope is explicit",
              "Changes have a source",
              "Destinations are named",
              "Unknowns have an owner",
            ].map((x, i) => (
              <div key={x}>
                <span>0{i + 1}</span>
                <strong>{x}</strong>
                <Icon name="check" />
              </div>
            ))}
          </div>
        ) : kind === "problem" ? (
          <MemoryBranches />
        ) : null}
      </PageHero>
      {kind === "lifecycle" ? (
        <>
          <Story />
          <section id="after-story" data-chapter>
            <div className="wrap">
              <SectionHead
                eyebrow="Operations have different meanings"
                title={
                  "A correction keeps history.\\nErasure asks a different question."
                }
              />
              <Principles
                items={[
                  [
                    "Correction",
                    "A revised value becomes current while the original remains a clearly marked version.",
                  ],
                  [
                    "Retention",
                    "A policy defines when a fact should stop being used for a particular purpose.",
                  ],
                  [
                    "Erasure",
                    "A request and receipt name the destinations checked and the boundary that remains.",
                  ],
                ]}
              />
            </div>
          </section>
        </>
      ) : kind === "platform" ? (
        <PlatformSections />
      ) : kind === "solutions" ? (
        <SolutionsSections />
      ) : kind === "problem" ? (
        <ProblemSections />
      ) : kind === "privacy" || kind === "architect" ? (
        <SolutionSections kind={kind} />
      ) : kind === "stack" ? (
        <StackSections />
      ) : kind === "evaluation" ? (
        <EvaluationSections />
      ) : kind === "trust" ? (
        <TrustSections />
      ) : (
        <CompanySections />
      )}
      <CTA
        title={
          kind === "company"
            ? "Let’s make memory\nmore understandable."
            : undefined
        }
      />
    </>
  );
}
function MemoryBranches() {
  return (
    <div className="memory-branches">
      <div className="branch-origin">
        <Icon name="record" />
        <span>C-012 / Invoice delivery</span>
      </div>
      <div className="branch-line" />
      {[
        ["Store", "Current value"],
        ["Index", "Searchable facts"],
        ["Cache", "Derived responses"],
        ["Backup", "Restore boundary"],
      ].map(([title, desc], i) => (
        <div className={"branch-node node-" + i} key={title}>
          <Icon name={i === 3 ? "archive" : "database"} />
          <strong>{title}</strong>
          <small>{desc}</small>
        </div>
      ))}
    </div>
  );
}
function PlatformSections() {
  return (
    <>
      <section className="platform-model" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="The common record model"
            title={"The value is only\\none part of the record."}
            body="Six relationships make a fact inspectable. Each one answers a different operational question."
          />
          <div className="model-grid">
            {[
              ["01", "Value", "What is the current fact?", "portal only"],
              ["02", "Scope", "Who can use it, and why?", "Helio / Support"],
              [
                "03",
                "Source",
                "Where did it come from?",
                "conversation-08-oct",
              ],
              ["04", "Version", "What did it supersede?", "v1 → v2"],
              ["05", "Policy", "When should it expire?", "retention-v3"],
              [
                "06",
                "Destinations",
                "Where could a copy exist?",
                "Index · Cache · Backup",
              ],
            ].map(([n, title, q, val]) => (
              <div data-reveal key={n}>
                <span className="eyebrow">
                  {n} / {title}
                </span>
                <h3>{q}</h3>
                <code>{val}</code>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="architecture-band ink" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Explicit boundaries"
            title={"Connected does not\\nmean indistinguishable."}
            body="Separate the memory provider, the governance decisions and the destinations that need their own check."
          />
          <div className="architecture-flow">
            {[
              ["Source", "Conversation, profile or event"],
              ["Record model", "Scope, lineage, versions, policy"],
              ["Destinations", "Store, index, cache, backup"],
            ].map(([title, desc], i) => (
              <div data-reveal key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
                {i < 2 && <b aria-hidden="true">→</b>}
              </div>
            ))}
          </div>
          <div className="boundary-caption">
            Adapters, credentials and responsibility boundaries are defined
            during the sandbox review.
          </div>
        </div>
      </section>
      <section data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Retrieval you can inspect</p>
            <h2>
              A record belongs
              <br />
              to a context.
            </h2>
            <p>
              Change the tenant or purpose and inspect the decision. The public
              example makes the policy relationship visible; the sandbox must
              evaluate the actual isolation boundary.
            </p>
            <TextLink to="/products/memory-desk">Explore Memory Desk</TextLink>
          </div>
          <ScopeWidget />
        </div>
      </section>
      <section className="sage" data-chapter>
        <div className="wrap split">
          <ManifestWidget />
          <div data-reveal>
            <p className="eyebrow">Portable context</p>
            <h2>
              Carry the meaning
              <br />
              across systems.
            </h2>
            <p>
              A portable envelope includes the schema, source, versions and
              policy. The receiving stack needs its own behavioral evaluation.
            </p>
            <TextLink to="/products/memory-report">
              Explore Memory Report
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
function SolutionsSections() {
  return (
    <>
      <section data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Two paths into the same story"
            title={"Choose the question\\nyour team is asking."}
          />
          <div className="solution-split">
            <Link
              to="/solutions/privacy-engineering"
              className="solution-panel ink"
              data-reveal
            >
              <Icon name="signal" size={40} />
              <p className="eyebrow">Privacy engineering</p>
              <h3>
                Where does
                <br />
                erasure reach?
              </h3>
              <p>
                Destination mapping, consent boundaries, receipt review and
                uncertainty ownership.
              </p>
              <Arrow />
            </Link>
            <Link
              to="/solutions/ai-platforms"
              className="solution-panel sage"
              data-reveal
            >
              <Icon name="scope" size={40} />
              <p className="eyebrow">AI platform teams</p>
              <h3>
                What does
                <br />
                the assistant retrieve?
              </h3>
              <p>
                Tenant scoping, version semantics, native controls and memory
                portability.
              </p>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="peach" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="From task to product"
            title="A useful starting point."
          />
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Workflow</th>
                  <th>Primary question</th>
                  <th>Start with</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Support assistant",
                    "Which invoice preference is current?",
                    "review",
                  ],
                  [
                    "Privacy review",
                    "Which destinations acknowledged erasure?",
                    "signal",
                  ],
                  [
                    "Policy change",
                    "Where did a withdrawal propagate?",
                    "proof",
                  ],
                  ["Tenant isolation", "Who can retrieve this fact?", "desk"],
                  [
                    "Memory migration",
                    "What context survives the move?",
                    "report",
                  ],
                ].map(([task, q, id]) => (
                  <tr key={task}>
                    <th>{task}</th>
                    <td>{q}</td>
                    <td>
                      <Link
                        to={
                          "/products/" + modules.find((m) => m.id === id).slug
                        }
                      >
                        {modules.find((m) => m.id === id).name} →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Keep the review focused</p>
            <h2>
              One workflow.
              <br />
              Clear acceptance criteria.
            </h2>
            <p>
              Start with one record type and one environment. The goal is a
              reviewable answer to a real boundary question, before expanding
              the scope.
            </p>
          </div>
          <Plate
            name="assessment-user-flow"
            alt="Map the memory paths, review acceptance criteria and decide on a scoped pilot"
          />
        </div>
      </section>
    </>
  );
}
function ProblemSections() {
  return (
    <>
      <section data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">The moment it changes</p>
            <h2>
              A preference changes.
              <br />
              The copies may not.
            </h2>
            <p>
              A current value in the primary store does not tell you what the
              retrieval index, derived cache or export contains. Follow the
              relationship before trusting the answer.
            </p>
          </div>
          <div className="comparison-record" data-reveal>
            <div>
              <span>06 Oct / Learned</span>
              <h3>email invoices</h3>
              <small>Support conversation</small>
            </div>
            <div>
              <span>08 Oct / Corrected</span>
              <h3>portal only</h3>
              <small>New source, same subject</small>
            </div>
          </div>
        </div>
      </section>
      <section className="sage" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Three different questions"
            title={"The value. The permission.\\nThe evidence."}
          />
          <Principles
            items={[
              [
                "Is it still current?",
                "A timestamp, a source and a version relationship help reviewers inspect a correction.",
              ],
              [
                "Is this use allowed?",
                "The tenant, subject and purpose belong in the retrieval decision.",
              ],
              [
                "What did the check prove?",
                "A destination acknowledgement and an active retrieval check have specific boundaries.",
              ],
            ]}
          />
        </div>
      </section>
      <section data-chapter>
        <div className="wrap split">
          <MemoryBranches />
          <div data-reveal>
            <p className="eyebrow">Map before you promise</p>
            <h2>
              The unknown copy
              <br />
              is still part of the story.
            </h2>
            <p>
              Exports, logs, replicas and restored backups can sit outside an
              active retrieval test. Name those destinations and document the
              owner.
            </p>
            <TextLink to="/resources/deletion-destination-checklist">
              Use the destination checklist
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
function SolutionSections({ kind }) {
  const privacy = kind === "privacy";
  return (
    <>
      <section data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="The decision path"
            title={
              privacy
                ? "An evidence review\nwith an explicit owner."
                : "An architecture review\nwith explicit semantics."
            }
          />
          <Principles
            items={
              privacy
                ? [
                    [
                      "Map the destinations",
                      "Identify primary stores, derived indexes, caches, exports and restore boundaries.",
                    ],
                    [
                      "Agree on evidence",
                      "Decide what each acknowledgement and read-after-delete check establishes.",
                    ],
                    [
                      "Review the unknowns",
                      "Assign a sponsor and a stop/go decision for unresolved paths.",
                    ],
                  ]
                : [
                    [
                      "Define the context",
                      "Inventory tenants, purposes, subjects and the retrieval decision.",
                    ],
                    [
                      "Compare native behavior",
                      "Inspect the controls already available in your memory stack.",
                    ],
                    [
                      "Evaluate the move",
                      "Test version selection, isolation, policy and retrieval quality after migration.",
                    ],
                  ]
            }
          />
        </div>
      </section>
      <section className={privacy ? "peach" : "sage"} data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">A concrete review</p>
            <h2>
              {privacy
                ? "Inspect the receipt.\nKeep the caveat."
                : "Inspect the request.\nExplain the decision."}
            </h2>
            <p>
              {privacy
                ? "The Helio example separates two active checks from an unverified backup. Bring that same distinction into your acceptance criteria."
                : "A support preference should not quietly become a sales input. Change the context and inspect the policy result."}
            </p>
          </div>
          {privacy ? <ReceiptWidget /> : <ScopeWidget />}
        </div>
      </section>
      <section data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="The products to bring into the conversation"
            title={
              privacy
                ? "Evidence, policy\nand source history."
                : "Scope, history\nand portable context."
            }
          />
          <div className="recommended-products">
            {(privacy
              ? ["signal", "proof", "review"]
              : ["desk", "review", "report"]
            ).map((id) => {
              const m = modules.find((m) => m.id === id);
              return (
                <Link key={id} to={"/products/" + m.slug} data-reveal>
                  <Icon name={m.icon} />
                  <h3>{m.name}</h3>
                  <p>{m.job}</p>
                  <Arrow />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
function StackSections() {
  return (
    <>
      <section data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Evaluate the requirement, not the logo"
            title={"The simplest stack\\nthat meets the need."}
          />
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Requirement</th>
                  <th>Inspect natively</th>
                  <th>Evaluate across destinations</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Delete a memory",
                    "Provider delete semantics",
                    "Derived indexes, caches and restore behavior",
                  ],
                  [
                    "Scope retrieval",
                    "Tenant and namespace controls",
                    "Purpose boundaries and denied paths",
                  ],
                  [
                    "Correct a fact",
                    "Update and version behavior",
                    "Which source/value returns on each path",
                  ],
                  [
                    "Export memory",
                    "Provider export formats",
                    "Scope, lineage, policy and quality after import",
                  ],
                  [
                    "Apply retention",
                    "TTL and policy features",
                    "Acknowledgement from downstream copies",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th>{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="sage" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="A practical evaluation sequence"
            title={"Keep what works.\\nTest the boundary."}
          />
          <Principles
            items={[
              [
                "Inventory the native controls",
                "Use the documented APIs and the current configuration of your own stack.",
              ],
              [
                "Name one reproducible gap",
                "Select a destination or policy question the native controls do not yet answer.",
              ],
              [
                "Compare the evidence",
                "Run the same fixture checks before introducing another layer.",
              ],
            ]}
          />
          <TextLink to="/resources/sandbox-evaluation-protocol">
            Read the sandbox protocol
          </TextLink>
        </div>
      </section>
    </>
  );
}
function EvaluationSections() {
  return (
    <>
      <section data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="The acceptance scorecard"
            title={"A test is useful\\nwhen it can fail."}
          />
          <div className="test-scorecard">
            {[
              [
                "Isolation",
                "A different tenant or purpose is denied.",
                "Denial trace",
              ],
              [
                "Correction",
                "The accepted current value is returned.",
                "Version + source ledger",
              ],
              [
                "Consent",
                "All in-scope destinations acknowledge the change.",
                "Propagation record",
              ],
              [
                "Erasure",
                "Each named path reports a check and boundary.",
                "Partial or scoped receipt",
              ],
              [
                "Portability",
                "The destination preserves agreed semantics.",
                "Manifest + retrieval comparison",
              ],
            ].map(([title, test, evidence], i) => (
              <article key={title} data-reveal>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{test}</p>
                <Tag>{evidence}</Tag>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ink" data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Evidence status</p>
            <h2>
              A sample shows
              <br />
              the shape of evidence.
            </h2>
            <p>
              The public workspace uses fixed fictional records. Production
              isolation, connector behavior, erasure coverage and retrieval
              quality require testing in the agreed sandbox.
            </p>
            <TextLink to="/demo">Inspect the sample workspace</TextLink>
          </div>
          <div className="evaluation-bars" data-reveal>
            {[
              ["Public workflow", "Available to inspect", 100],
              ["Sandbox integration", "Defined during assessment", 55],
              ["Production evidence", "Requires measured evaluation", 18],
            ].map(([name, note, width]) => (
              <div key={name}>
                <strong>{name}</strong>
                <span>{note}</span>
                <i style={{ "--bar": width + "%" }} />
              </div>
            ))}
            <p>The lines describe stages, not measured performance.</p>
          </div>
        </div>
      </section>
      <section data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="From criteria to decision"
            title="Agree. Test. Review."
          />
          <Plate
            name="assessment-user-flow"
            alt="Assessment flow from agreed scope to sandbox testing and evidence review"
          />
          <TextLink to="/resources/sandbox-evaluation-protocol">
            Read the full protocol
          </TextLink>
        </div>
      </section>
    </>
  );
}
function TrustSections() {
  return (
    <>
      <section data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Responsibility is part of the model"
            title={"Name the owner\\nat every boundary."}
          />
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Boundary</th>
                  <th>Review owner</th>
                  <th>Required evidence</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Tenant isolation",
                    "Platform + security",
                    "Denied retrieval tests",
                  ],
                  [
                    "Consent and retention",
                    "Privacy + product",
                    "Policy versions and propagation checks",
                  ],
                  [
                    "Erasure destinations",
                    "Privacy + storage owner",
                    "Acknowledgement, check and exclusions",
                  ],
                  [
                    "Backup restoration",
                    "Infrastructure owner",
                    "Retention, expiry and restore policy",
                  ],
                  [
                    "Pilot data and access",
                    "Legal + security",
                    "DPA, credentials and environment scope",
                  ],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th>{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="peach" data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">The public workspace</p>
            <h2>
              Explore the workflow
              <br />
              with fictional records.
            </h2>
            <p>
              Sample changes remain in your browser session. The workspace has
              no connection to memory providers, billing or production accounts.
            </p>
            <TextLink to="/legal/privacy">Read the privacy notice</TextLink>
          </div>
          <div className="trust-note" data-reveal>
            <Icon name="lock" size={36} />
            <h3>Review before access.</h3>
            <p>
              Deployment, data residency, processors, credentials and security
              assurances are determined before any live pilot. Certifications
              and production guarantees are not currently represented.
            </p>
          </div>
        </div>
      </section>
      <section data-chapter>
        <div className="wrap split">
          <h2 data-reveal>
            Questions for
            <br />a responsible pilot.
          </h2>
          <FAQ
            items={[
              [
                "What data belongs in the initial assessment?",
                "Only architecture and workflow context. Do not share personal memory records, contracts, secrets or production logs through the public form.",
              ],
              [
                "Does a clear index prove a clear backup?",
                "No. Backup retention and restoration are separate boundaries with their own owner and review requirements.",
              ],
              [
                "How is production access established?",
                "A scoped environment, security review, legal review and explicit credential boundaries must be agreed before a live connection.",
              ],
            ]}
          />
        </div>
      </section>
    </>
  );
}
function CompanySections() {
  return (
    <>
      <section data-chapter>
        <div className="wrap editorial-statement">
          <p className="eyebrow" data-reveal>
            Our thesis
          </p>
          <h2 data-reveal>
            Memory becomes useful
            <br />
            when its context
            <br />
            stays <em>within reach.</em>
          </h2>
          <p data-reveal>
            Persistent assistants can make an experience more personal. They
            also create a new operational responsibility: knowing what is kept,
            why it is used and how a change reaches every relevant destination.
          </p>
        </div>
      </section>
      <section className="sage" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="How we think"
            title="Precision, with a human side."
          />
          <Principles
            items={[
              [
                "Make it understandable",
                "A reviewer should be able to follow a fact without decoding an unexplained graph.",
              ],
              [
                "Respect the boundary",
                "Scope, source, purpose and policy belong beside the value.",
              ],
              [
                "Keep uncertainty visible",
                "An unverified destination is information. Preserve it in the result.",
              ],
            ]}
          />
        </div>
      </section>
      <section className="company-status" data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Where we are today</p>
            <h2>
              Building the questions
              <br />
              into the product.
            </h2>
            <p>
              Factmend is in development. The public workspace demonstrates the
              intended record and evidence workflows with fictional data. We’re
              shaping focused evaluations around the boundaries teams need to
              understand.
            </p>
            <address className="company-address">
              <strong>Company address</strong>
              355 Nguyen Trong Tuyen St.<br />
              Ward 1<br />
              Tan Binh District<br />
              Ho Chi Minh City 790282<br />
              Vietnam
            </address>
            <TextLink to="/contact">Start a conversation</TextLink>
          </div>
          <div className="company-record" data-reveal>
            <Icon name="record" size={32} />
            <blockquote>
              “A fact deserves
              <br />a source, a scope
              <br />
              and a clear next step.”
            </blockquote>
            <span>Our design principle</span>
          </div>
        </div>
      </section>
    </>
  );
}
export function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing & engagement"
        title={"Start focused.\nLearn something useful."}
        lead="Begin with one workflow, one memory stack and a shared set of acceptance criteria. Decide what comes next after reviewing the evidence."
        action={false}
      />
      <section className="pricing-section" data-chapter>
        <div className="wrap">
          <div className="pricing-grid">
            <article className="price-card" data-reveal>
              <p className="eyebrow">Scoped assessment & pilot</p>
              <h2>
                $5,000<span>/ pilot</span>
              </h2>
              <p>
                Map a workflow, define the sandbox and evaluate a focused
                governance question.
              </p>
              <ul>
                {[
                  "One initial product direction",
                  "Memory destination mapping",
                  "Agreed acceptance criteria",
                  "Sandbox test and evidence review",
                  "A documented stop / go decision",
                ].map((x) => (
                  <li key={x}>
                    <Icon name="check" />
                    {x}
                  </li>
                ))}
              </ul>
              <Button to="/assessment">Discuss a pilot</Button>
            </article>
            <article className="price-card sage" data-reveal>
              <p className="eyebrow">Ongoing platform direction</p>
              <h2>
                $2,000<span>/ month</span>
              </h2>
              <p>
                A proposed subscription after a successful pilot, with scope
                determined by the environment.
              </p>
              <ul>
                {[
                  "Scope defined after evaluation",
                  "Product selection by workflow",
                  "Destination and policy reviews",
                  "Integration requirements agreed",
                  "No self-service commitment",
                ].map((x) => (
                  <li key={x}>
                    <Icon name="check" />
                    {x}
                  </li>
                ))}
              </ul>
              <Button to="/assessment" secondary>
                Discuss the scope
              </Button>
            </article>
          </div>
          <p className="commercial-note">
            Proposed commercial terms for validation. Final availability, scope
            and pricing are agreed in writing; no payment is collected here.
          </p>
        </div>
      </section>
      <section className="peach" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="What makes the pilot focused"
            title="Boundaries before breadth."
          />
          <Principles
            items={[
              [
                "One hard question",
                "Choose the retrieval, correction, policy, erasure or migration boundary you most need to understand.",
              ],
              [
                "One agreed environment",
                "Start with synthetic fixtures and a scoped sandbox. Production access requires separate review.",
              ],
              [
                "One reviewable decision",
                "Compare the evidence with your native stack and decide whether further integration is justified.",
              ],
            ]}
          />
        </div>
      </section>
      <section data-chapter>
        <div className="wrap split">
          <h2 data-reveal>
            Scope first.
            <br />
            Commitment second.
          </h2>
          <FAQ
            items={[
              [
                "Are all five products included in the pilot?",
                "A pilot selects one initial module and the shared context needed for its evaluation. Expanding to the full family is a separate scope decision.",
              ],
              [
                "Can we purchase online?",
                "Commercial terms are discussed after scope and security review. There is no online checkout or automatic subscription.",
              ],
              [
                "What if native controls already meet our requirements?",
                "That is a useful outcome. The review should identify where the existing stack is sufficient before recommending additional infrastructure.",
              ],
            ]}
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
export function Resources() {
  const [category, setCategory] = useState("All");
  const list = resources.filter(
    (r) => category === "All" || r.category === category,
  );
  return (
    <>
      <PageHero
        eyebrow="The field notes"
        title={"Good questions\nmake clearer systems."}
        lead="Practical checklists and guides for tracing memory, defining evidence and evaluating the boundaries in your own stack."
        theme="sunlit"
        action={false}
      />
      <section className="resource-section" data-chapter>
        <div className="wrap">
          <div
            className="filter-pills"
            role="group"
            aria-label="Resource category"
          >
            {["All", "Checklist", "Field guide", "Reference"].map((c) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="resource-grid">
            {list.map((r) => (
              <Link
                className="resource-card"
                to={"/resources/" + r.slug}
                key={r.slug}
              >
                <div
                  className={
                    "resource-visual " +
                    (r.category === "Checklist"
                      ? "sage"
                      : r.category === "Field guide"
                        ? "peach"
                        : "paper")
                  }
                >
                  <img
                    src={`${A}visuals/${r.visual}.svg`}
                    alt=""
                    width="1000"
                    height="560"
                    loading="lazy"
                  />
                </div>
                <p className="eyebrow">
                  {r.category} <span> / {r.time}</span>
                </p>
                <h3>{r.title}</h3>
                <p>{r.description}</p>
                <span className="resource-read">
                  Read the guide <Arrow />
                </span>
              </Link>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">
            {list.length} resources
          </p>
        </div>
      </section>
      <CTA />
    </>
  );
}
const articleContent = {
  "deletion-destination-checklist": [
    {
      id: "inventory",
      title: "Start with the destinations",
      text: "A memory may appear in more places than the primary store. Build an inventory around the fact, subject and purpose you want to inspect.",
      items: [
        "Primary memory store and replicas",
        "Derived search indexes and embeddings",
        "Response and application caches",
        "Exports, logs and downstream consumers",
        "Backup retention and restoration paths",
      ],
    },
    {
      id: "checks",
      title: "Name what each check establishes",
      text: "Separate an API acknowledgement from a read-after-delete result. A negative retrieval result covers that named path at that moment; it does not establish the state of backups or exports.",
      items: [
        "Record the request and subject scope",
        "Name the destination and owner",
        "Capture the acknowledgement",
        "Record the specific retrieval path tested",
        "Preserve the exclusions and unknowns",
      ],
    },
    {
      id: "restore",
      title: "Give restoration its own boundary",
      text: "Ask what happens when a backup is restored. Does a prior erasure decision propagate again? Who verifies that behavior? Keep the answer separate from the active-index check.",
    },
  ],
  "sandbox-evaluation-protocol": [
    {
      id: "scope",
      title: "Agree on the scope before testing",
      text: "Choose one record type, one environment and a question whose answer could change a decision. Name the privacy sponsor and the owner of each destination.",
      items: [
        "A reproducible synthetic fixture",
        "One primary memory provider",
        "Named derived destinations",
        "Native behavior documented first",
        "Written acceptance criteria",
      ],
    },
    {
      id: "test",
      title: "Run five independent checks",
      text: "A strong result is specific enough to fail. Keep isolation, correction, policy, erasure and portability independent so a pass in one area cannot hide an open question elsewhere.",
      items: [
        "Try a denied tenant and purpose",
        "Retrieve the accepted current version",
        "Inspect consent propagation",
        "Erase and test the active path",
        "Compare retrieval after migration",
      ],
    },
    {
      id: "review",
      title: "Review the result as a decision",
      text: "Retain open and failed checks. Compare the proposed layer with the native stack. A successful evaluation may mean the existing controls are sufficient; expansion is not the default outcome.",
    },
  ],
  "memory-data-dictionary": [
    {
      id: "identity",
      title: "Identity and scope",
      text: "The record identifies a subject within a tenant and purpose. These fields travel with the value and belong in every retrieval decision.",
      items: [
        "record_id: a stable reference",
        "subject_id: the fictional contact or account",
        "tenant: the organization boundary",
        "purpose: the permitted task",
        "value: the current fact",
      ],
    },
    {
      id: "lineage",
      title: "Source and version history",
      text: "Source references explain what was learned and when. A correction adds a new source-linked version and clearly distinguishes the current value from superseded history.",
      items: [
        "source_id and original excerpt",
        "learned_at and corrected_at",
        "active_version and prior_versions",
        "review decision and reviewer",
        "contradiction status",
      ],
    },
    {
      id: "evidence",
      title: "Policy and destination evidence",
      text: "The policy defines consent and retention context. The receipt records checks for independently named destinations and preserves unresolved boundaries.",
      items: [
        "policy version, consent and expiry",
        "destination reference and owner",
        "acknowledgement and check performed",
        "result, exclusion and timestamp",
        "overall conclusion and unknowns",
      ],
    },
  ],
};
export function Article({ slug }) {
  const r = resources.find((r) => r.slug === slug);
  return (
    <>
      <section className="article-hero" data-chapter>
        <div className="reading">
          <TextLink to="/resources">All field notes</TextLink>
          <p className="eyebrow">
            {r.category} / {r.time}
          </p>
          <h1>{r.title}</h1>
          <p className="lead">{r.description}</p>
          <span className="article-author">
            Factmend field notes · 09 October 2026
          </span>
        </div>
      </section>
      <div className="wrap article-layout">
        <aside>
          <p className="eyebrow">In this guide</p>
          {articleContent[slug].map((s) => (
            <a href={"#" + s.id} key={s.id}>
              {s.title}
            </a>
          ))}
          <button className="plain-button" onClick={() => window.print()}>
            Print guide <Icon name="download" />
          </button>
        </aside>
        <article className="reading">
          <Plate name={r.visual} alt={r.description} />
          {articleContent[slug].map((s) => (
            <section
              className="article-section"
              id={s.id}
              key={s.id}
              data-chapter
            >
              <h2 data-reveal>{s.title}</h2>
              <p>{s.text}</p>
              {s.items && (
                <ul>
                  {s.items.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="article-callout">
            <h3>Bring a map, not a promise.</h3>
            <p>
              A useful review names the destinations, the owner and the next
              question.
            </p>
            <TextLink to="/assessment">Prepare an assessment</TextLink>
          </div>
        </article>
      </div>
      <CTA />
    </>
  );
}
export function Legal({ type }) {
  const privacy = type === "privacy";
  return (
    <>
      <PageHero
        eyebrow="Site information"
        title={
          privacy
            ? "Your context.\nHandled with care."
            : "Clear terms.\nClear boundaries."
        }
        lead={
          privacy
            ? "How this website and its public workspace handle information."
            : "The boundaries of using the public website and sample memory workspace."
        }
        action={false}
      />
      <section data-chapter>
        <div className="reading legal-copy">
          <p className="legal-note">
            Website notice · 09 October 2026. Legal operator details and
            production service terms will be added before live data collection
            or commercial service.
          </p>
          {(privacy
            ? [
                [
                  "Public workspace",
                  "The workspace uses fictional Helio Helpdesk records. Corrections and receipt checks run locally in browser memory and reset on reload. They do not contact a memory provider.",
                ],
                [
                  "Assessment information",
                  "The current assessment form prepares a local brief for download. Its contents are not submitted to Factmend. Do not include personal memory records, credentials or production logs.",
                ],
                [
                  "Cookies and analytics",
                  "This implementation does not install advertising, analytics or tracking cookies. Hosting providers may process connection and access logs under their own service policies.",
                ],
                [
                  "Fonts and assets",
                  "Fonts and visual assets are served from this website. The application does not request a third-party font service.",
                ],
                [
                  "Questions and future services",
                  "Use the contact page to prepare a conversation brief. A production privacy notice, operator contact, processors and retention schedule must be supplied before activating live collection.",
                ],
              ]
            : [
                [
                  "Using the website",
                  "The website explains the Factmend product direction and provides educational resources. Product availability, deployment requirements and commercial terms require a separate agreement.",
                ],
                [
                  "The sample workspace",
                  "Public records are fictional. Local correction and check states demonstrate a workflow. They do not establish production isolation, security, performance or erasure coverage.",
                ],
                [
                  "No production records",
                  "Do not use the public interface to upload personal data, credentials, logs or confidential customer records. The workspace accepts no arbitrary memory ingestion.",
                ],
                [
                  "Commercial discussions",
                  "Displayed pilot and subscription figures are proposed terms for validation. No purchase, payment or subscription is completed through this website.",
                ],
                [
                  "Third-party marks",
                  "LinkedIn and Crunchbase marks remain the property of their respective owners. Their appearance in the footer does not imply endorsement.",
                ],
                [
                  "Production terms",
                  "Service-specific terms, legal operator information and the applicable review requirements must be agreed before a commercial deployment.",
                ],
              ]
          ).map(([title, text], i) => (
            <div key={title} data-reveal>
              <h2>
                {i + 1}. {title}
              </h2>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export function NotFound() {
  return (
    <section className="not-found">
      <img src={`${A}logos/mark-primary.svg`} alt="" width="80" height="80" />
      <p className="eyebrow">404 / A missing page</p>
      <h1>
        This part of the story
        <br />
        isn’t here.
      </h1>
      <p>Return to the homepage or find the product you were looking for.</p>
      <div className="actions">
        <Button to="/">Back to home</Button>
        <Button to="/products" secondary>
          Explore products
        </Button>
      </div>
    </section>
  );
}
