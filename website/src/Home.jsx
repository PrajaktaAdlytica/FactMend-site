import React, { useState, useRef, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { modules } from "./data";
import {
  A,
  Icon,
  Arrow,
  Button,
  TextLink,
  Tag,
  SectionHead,
  ScopeWidget,
  VersionWidget,
  ReceiptWidget,
  ManifestWidget,
  Story,
  CTA,
  FAQ,
  SystemMap,
  Widget,
} from "./components";
import {useMotionPreference} from "./MotionContext";
import TerrainIntro from "./TerrainIntro";
export function HeroScene() {
  const [selected, setSelected] = useState("review");
  return (
    <div className="hero-scene">
      <div className="scene-toolbar">
        <div>
          <span className="dot" />
          Factmend memory layer
        </div>
        <span>Source → context → evidence</span>
      </div>
      <div className="scene-body">
        <div className="source-stack">
          <p className="eyebrow">It begins with a conversation</p>
          <div className="source-sheet back" />
          <div className="source-sheet">
            <span>
              <Icon name="conversation" /> Support conversation
            </span>
            <blockquote>
              “Please use the portal for invoices from now on.”
            </blockquote>
            <small>08 Oct 2026 · Helio</small>
            <span className="source-stamp">
              Source retained <Icon name="check" size={16} />
            </span>
          </div>
        </div>
        <svg
          className="hero-connectors"
          viewBox="0 0 1200 340"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path data-draw d="M305 167 C375 167 355 167 432 167" />
          <path
            data-draw
            d="M805 167 C870 167 800 70 945 70 M805 167 C860 167 870 167 945 167 M805 167 C870 167 810 270 945 270"
          />
        </svg>
        <div className="hero-record">
          <div className="mini-top">
            <span className="folio-small">
              <Icon name={modules.find((m) => m.id === selected).icon} />
            </span>
            <span>{modules.find((m) => m.id === selected).name}</span>
            <Tag>Current</Tag>
          </div>
          <p className="eyebrow">C-012 · Invoice delivery</p>
          <h3>
            {selected === "signal"
              ? "Trace every copy."
              : selected === "proof"
                ? "A purpose. A deadline."
                : selected === "report"
                  ? "Context travels, too."
                  : selected === "desk"
                    ? "Right context. Right access."
                    : "portal only"}
          </h3>
          <div className="record-details">
            <span>
              Tenant<strong>Helio</strong>
            </span>
            <span>
              Purpose<strong>Support</strong>
            </span>
            <span>
              Version<strong>02</strong>
            </span>
          </div>
          <div className="hero-record-bottom">
            <Icon name="link" size={17} />
            <span>Every change keeps its source.</span>
          </div>
        </div>
        <div className="scene-destinations">
          <div>
            <Icon name="database" />
            <span>
              Memory store<small>Current value</small>
            </span>
            <span className="tiny-dot" />
          </div>
          <div>
            <Icon name="layers" />
            <span>
              Derived index<small>Scoped retrieval</small>
            </span>
            <span className="tiny-dot" />
          </div>
          <div>
            <Icon name="archive" />
            <span>
              Evidence ledger<small>History & boundaries</small>
            </span>
            <span className="tiny-dot amber" />
          </div>
        </div>
      </div>
      <div
        className="scene-modules"
        role="group"
        aria-label="Explore the memory layer"
      >
        {modules.map((m, i) => (
          <button
            key={m.id}
            aria-pressed={selected === m.id}
            onClick={() => setSelected(m.id)}
          >
            <small>0{i + 1}</small>
            <Icon name={m.icon} />
            {m.name}
            <span className="module-dot" />
          </button>
        ))}
      </div>
    </div>
  );
}
export function EvidenceCard() {
  const [back, setBack] = useState(false);
  return (
    <div className="evidence-card">
      <div className="evidence-card-face" key={String(back)}>
        {back ? (
          <div className="evidence-card-back">
            <p className="eyebrow">The boundary behind the receipt</p>
            <h3>
              Three destinations.
              <br />
              Three separate answers.
            </h3>
            <div>
              <strong>Checked</strong>
              <p>
                Active retrieval and derived cache responses in the fixture.
              </p>
            </div>
            <div>
              <strong>Still unresolved</strong>
              <p>
                Physical erasure, backup expiry and future restore behavior.
              </p>
            </div>
            <Tag tone="clay">The receipt remains partial</Tag>
          </div>
        ) : (
          <ReceiptWidget />
        )}
      </div>
      <button
        className="plain-button flip-control"
        aria-expanded={back}
        onClick={() => setBack(!back)}
      >
        {back ? "Return to the receipt" : "Turn over the evidence"}
        <Icon name="refresh" size={18} />
      </button>
      <p className="widget-context">Sample record · Helio Helpdesk</p>
    </div>
  );
}
export function Suite({ full = false }) {
  return (
    <section className="suite" id="products" data-chapter>
      <div className="wrap">
        <SectionHead
          eyebrow="Five products. One clear memory story."
          title={"A responsibility\nfor every part of memory."}
          body="Start with the question you need to answer. Each product gives it a distinct place in the lifecycle."
        />
        <div className="product-mosaic">
          {modules.map((m, i) => (
            <Link
              key={m.id}
              to={"/products/" + m.slug}
              className={`product-tile product-${m.id}`}
              data-reveal
            >
              <div className="product-tile-top">
                <Icon name={m.icon} />
                <span>{m.name}</span>
                <Arrow />
              </div>
              <div className="tile-art" aria-hidden="true">
                {m.id === "desk" ? (
                  <div className="mini-scope">
                    <span>Helio / Support</span>
                    <div>
                      <i />
                      <i />
                      <i />
                    </div>
                    <small>Tenant boundary</small>
                  </div>
                ) : m.id === "review" ? (
                  <div className="mini-versions">
                    <span>email invoices</span>
                    <b>↓</b>
                    <strong>portal only</strong>
                    <small>Source-linked revision</small>
                  </div>
                ) : m.id === "proof" ? (
                  <div className="mini-policy">
                    <span />
                    <span />
                    <span />
                    <b>Learned</b>
                    <b>Corrected</b>
                    <b>Expires</b>
                  </div>
                ) : m.id === "signal" ? (
                  <div className="mini-destinations">
                    <span>
                      Index A<i>✓</i>
                    </span>
                    <span>
                      Cache B<i>✓</i>
                    </span>
                    <span>
                      Backup<i>?</i>
                    </span>
                  </div>
                ) : (
                  <div className="mini-manifest">
                    <span>value</span>
                    <span>scope</span>
                    <span>source</span>
                    <span>policy</span>
                    <b>↗</b>
                  </div>
                )}
              </div>
              <h3>{m.job}</h3>
              <p>{m.question}</p>
            </Link>
          ))}
        </div>
        {full && (
          <div className="suite-foot">
            <p>Shared context. Independent responsibilities.</p>
            <TextLink to="/platform">Meet the platform</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
export default function Home() {
  const {reduced}=useMotionPreference();
  const hero = useRef();
  useLayoutEffect(() => {
    if(reduced)return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width:1000px) and (prefers-reduced-motion:no-preference)",
        () => {
          gsap.fromTo(
            ".hero-scene",
            { rotateX: 8, y: 20 },
            {
              rotateX: 0,
              y: -20,
              ease: "none",
              scrollTrigger: {
                trigger: hero.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
          gsap.to(".hero-shade", {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: hero.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        },
      );
    }, hero);
    return () => ctx.revert();
  }, [reduced]);
  return (
    <>
      <TerrainIntro />
      <section className="home-hero" id="home-hero" ref={hero} tabIndex="-1" data-chapter>
        <img
          className="hero-shade"
          src={`${A}images/sunlit-paper.webp`}
          alt=""
          width="1536"
          height="1024"
          loading="lazy"
        />
        <div className="wrap">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">
              <span className="amber-dash" /> Memory governance for persistent
              assistants
            </p>
            <h2>
              Memory changes.
              <br />
              Keep the <em>whole story.</em>
            </h2>
            <div className="hero-bottom">
              <p>
                Know what your assistant remembers,
                <br className="desktop-only" /> where it came from, and where it
                goes next.
              </p>
              <div className="actions">
                <Button to="/assessment">Map your memory paths</Button>
                <TextLink to="/demo">Explore the workspace</TextLink>
              </div>
            </div>
          </div>
          <HeroScene />
          <div className="hero-foot">
            <span>Scope. Correct. Retain. Erase. Export.</span>
            <a href="#memory-story">
              Follow the story <span>↓</span>
            </a>
          </div>
        </div>
      </section>
      <section className="editorial-intro" id="memory-story" data-chapter>
        <div className="wrap intro-grid">
          <p className="eyebrow" data-reveal>
            Memory is more than recall.
          </p>
          <div data-reveal>
            <h2>
              A remembered fact
              <br />
              is a living relationship.
            </h2>
            <p>
              Preferences change. Consent expires. A correction in one place may
              leave an old value somewhere else. When memory persists, its
              context needs to persist with it.
            </p>
            <TextLink to="/why-memory-governance">
              Why memory needs governance
            </TextLink>
          </div>
          <div className="intro-note" data-reveal>
            <span className="note-index">C-012</span>
            <p>“Email invoices”</p>
            <span className="note-arrow">↓</span>
            <p className="new-value">“Portal only”</p>
            <small>
              Same person. A new preference.
              <br />A history worth keeping.
            </small>
          </div>
        </div>
      </section>
      <Suite full />
      <Story />
      <section className="evidence-chapter ink" id="after-story" data-chapter>
        <img
          src={`${A}images/olive-ripples.webp`}
          alt=""
          className="evidence-photo"
          width="1536"
          height="1024"
          loading="lazy"
          data-parallax
        />
        <div className="wrap evidence-grid">
          <div data-reveal>
            <p className="eyebrow">Memory Signal</p>
            <h2>
              A clear receipt.
              <br />
              Even when the answer
              <br />
              is <em>partial.</em>
            </h2>
            <p>
              Give each destination its own status. Keep unresolved backups in
              the conversation. Evidence becomes useful when its boundaries are
              visible.
            </p>
            <TextLink to="/products/memory-signal">
              Inspect the erasure workflow
            </TextLink>
          </div>
          <div className="flip-explainer" data-reveal>
            <EvidenceCard />
          </div>
        </div>
      </section>
      <section className="platform-chapter sage" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="A shared platform"
            title={"All the context.\nNone of the guesswork."}
            body="Keep the current value, its source, the policy and the destination checks connected. One record, readable from every angle."
          />
          <SystemMap />
          <div className="platform-under">
            <p>Evaluate alongside your existing memory stack.</p>
            <TextLink to="/platform">Explore the architecture</TextLink>
          </div>
        </div>
      </section>
      <section className="audiences" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Built around the questions that matter"
            title="Meet in the middle."
          />
          <div className="audience-grid">
            <Link
              to="/solutions/privacy-engineering"
              className="audience-card privacy"
              data-reveal
            >
              <p className="eyebrow">Privacy engineering</p>
              <h3>
                Where did
                <br />
                the request reach?
              </h3>
              <div className="orbit-art" aria-hidden="true">
                <div>Scope</div>
                <div>Evidence</div>
                <div>Owner</div>
              </div>
              <p>
                Map destinations. Inspect uncertainty.
                <br />
                Define the evidence you need.
              </p>
              <Arrow />
            </Link>
            <Link
              to="/solutions/ai-platforms"
              className="audience-card architects"
              data-reveal
            >
              <p className="eyebrow">AI platform teams</p>
              <h3>
                What happens
                <br />
                behind the answer?
              </h3>
              <div className="layers-art" aria-hidden="true">
                <span>Source</span>
                <span>Context</span>
                <span>Retrieval</span>
              </div>
              <p>
                Set tenancy boundaries. Trace revisions.
                <br />
                Evaluate memory portability.
              </p>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="evaluation-chapter" data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Start with acceptance criteria</p>
            <h2>
              Good evidence
              <br />
              begins with
              <br />
              <em>good questions.</em>
            </h2>
            <p>
              Before adding a governance layer, establish what your native stack
              already does and where the gaps are.
            </p>
            <TextLink to="/evaluation">See the evaluation protocol</TextLink>
          </div>
          <div className="evaluation-list" data-reveal>
            {[
              [
                "01",
                "Can another tenant retrieve this fact?",
                "A denied request with an inspectable reason.",
              ],
              [
                "02",
                "Which value comes back after a correction?",
                "The current value, linked to its source and history.",
              ],
              [
                "03",
                "What does an erasure check establish?",
                "Named destinations, checked paths and unresolved copies.",
              ],
              [
                "04",
                "What changes after migration?",
                "The same scoped questions, tested against the new stack.",
              ],
            ].map(([n, q, a]) => (
              <div key={n}>
                <span>{n}</span>
                <div>
                  <h4>{q}</h4>
                  <p>{a}</p>
                </div>
                <Icon name="check" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="home-faq" data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">A few useful answers</p>
            <h2>
              Understand the fit
              <br />
              before the next step.
            </h2>
            <TextLink to="/stack-fit">Compare your stack</TextLink>
          </div>
          <FAQ
            items={[
              [
                "Does this replace my memory provider?",
                "The intended role is to make governance and evidence readable around your existing stack. Native controls may already cover your requirements; an assessment starts there.",
              ],
              [
                "Which product should we start with?",
                "Start with the hardest question: retrieval boundaries, a correction, policy propagation, an erasure receipt, or a migration. The assessment can help select one focused module.",
              ],
              [
                "Can I explore the product workflow?",
                "The memory workspace uses fictional Helio Helpdesk records. You can inspect scope, compare a correction and run local sample checks without an account.",
              ],
              [
                "What happens in an assessment?",
                "Map the destinations, identify a privacy sponsor, agree on a sandbox and define acceptance criteria. Review the scope before deciding whether a pilot is useful.",
              ],
            ]}
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
