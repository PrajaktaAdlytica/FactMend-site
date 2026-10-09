import React from "react";
import { Link } from "react-router-dom";
import { modules } from "./data";
import { Suite } from "./Home";
import {
  PageHero,
  SectionHead,
  Widget,
  Story,
  CTA,
  FAQ,
  Button,
  TextLink,
  Icon,
  Arrow,
  Tag,
  SystemMap,
  Plate,
} from "./components";
export function Products() {
  return (
    <>
      <PageHero
        eyebrow="The Factmend product family"
        title={"Give every memory\na place in the story."}
        lead="Five focused products connect the questions that follow a remembered fact. Scope it, inspect its history, apply policy, trace erasure and carry its context forward."
        theme="sage"
      >
        <SystemMap />
      </PageHero>
      <Suite />
      <section className="product-comparison" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="Choose your starting point"
            title="One question at a time."
          />
          <div className="table-shell">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>The question</th>
                  <th>The artifact</th>
                  <th>Explore</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((m) => (
                  <tr key={m.id}>
                    <th>
                      <Icon name={m.icon} />
                      {m.name}
                    </th>
                    <td>{m.question}</td>
                    <td>{m.output}</td>
                    <td>
                      <Link
                        aria-label={"Explore " + m.name}
                        to={"/products/" + m.slug}
                      >
                        <Arrow />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="sage" data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">A shared foundation</p>
            <h2>
              Different responsibilities.
              <br />
              The same context.
            </h2>
            <p>
              Each product builds around the same source-linked record, scoped
              subject and destination registry. The whole story stays connected.
            </p>
            <TextLink to="/platform">Explore the platform</TextLink>
          </div>
          <Plate
            name="architecture-boundaries"
            alt="Memory operations connect to a scoped record model and independently named destinations"
          />
        </div>
      </section>
      <CTA />
    </>
  );
}
export function ProductPage({ module: m }) {
  const related = modules.find((n) => n.id === m.related);
  return (
    <>
      <PageHero
        eyebrow={m.name + " / " + m.job}
        title={m.title}
        lead={m.description}
        theme={m.theme}
      >
        <Widget id={m.id} />
      </PageHero>
      <section className="module-intro" data-chapter>
        <div className="wrap intro-grid">
          <p className="eyebrow" data-reveal>
            The question it owns
          </p>
          <div data-reveal>
            <h2>{m.question}</h2>
            <p>{m.steps[0][1]}</p>
          </div>
          <div className="output-note" data-reveal>
            <Icon name={m.icon} size={32} />
            <p>What you inspect</p>
            <h3>{m.output}</h3>
          </div>
        </div>
      </section>
      <Story kind={m.id} compact />
      <section
        id="after-story"
        className={
          "module-edge " +
          (m.id === "signal" ? "ink" : m.id === "review" ? "sage" : "peach")
        }
        data-chapter
      >
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">The edge case matters</p>
            <h2>{m.edge}</h2>
            <p>{m.edgeText}</p>
            <TextLink to="/evaluation">Define the acceptance criteria</TextLink>
          </div>
          <div className="edge-case" data-reveal>
            <span className="exception-symbol">!</span>
            <Tag tone="clay">Needs review</Tag>
            <h3>
              {m.id === "desk"
                ? "Purpose mismatch"
                : m.id === "review"
                  ? "Contradiction unresolved"
                  : m.id === "proof"
                    ? "Acknowledgement pending"
                    : m.id === "signal"
                      ? "Backup status unverified"
                      : "Destination semantics untested"}
            </h3>
            <p>{m.edgeText}</p>
            <div>
              <span>Owner</span>
              <strong>Privacy review</strong>
            </div>
            <div>
              <span>Next step</span>
              <strong>
                {m.id === "signal"
                  ? "Confirm restore policy"
                  : "Inspect the boundary"}
              </strong>
            </div>
          </div>
        </div>
      </section>
      <section className="product-artifact" data-chapter>
        <div className="wrap">
          <SectionHead
            eyebrow="A readable workflow"
            title={
              m.id === "desk"
                ? "Make the boundary visible."
                : m.id === "review"
                  ? "A change you can trace."
                  : m.id === "proof"
                    ? "A policy you can follow."
                    : m.id === "signal"
                      ? "From request to receipt."
                      : "Keep the envelope intact."
            }
            body={
              m.id === "signal"
                ? "Scope the request, review the destinations and preserve the unresolved branch."
                : "See the relationship between the input, the decision and the record that follows."
            }
          />
          <Plate
            name={m.id === "signal" ? "erasure-user-flow" : m.visual}
            alt={m.name + " workflow and example evidence"}
          />
        </div>
      </section>
      <section className="module-connected" data-chapter>
        <div className="wrap split">
          <div data-reveal>
            <p className="eyebrow">Part of the whole story</p>
            <h2>
              {m.id === "report"
                ? "The next stack deserves\nthe same clarity."
                : "Keep the next step\nconnected."}
            </h2>
            <p>
              Source, scope, policy and evidence stay related across the
              Factmend product family. Explore the responsibility that follows.
            </p>
          </div>
          <Link
            className={"related-module " + related.theme}
            to={"/products/" + related.slug}
            data-reveal
          >
            <Icon name={related.icon} size={32} />
            <p>{related.name}</p>
            <h3>{related.job}</h3>
            <Arrow />
          </Link>
        </div>
      </section>
      <section className="product-faq" data-chapter>
        <div className="wrap split">
          <h2 data-reveal>
            Before you
            <br />
            get started.
          </h2>
          <FAQ
            items={[
              [
                "What would a pilot evaluate?",
                `The pilot should start with one question: ${m.question} Agree on a fixture, the native behavior and a reviewable acceptance criterion before testing.`,
              ],
              [
                "Can we use our existing memory stack?",
                "That is the intended starting point. Identify the native controls, destinations and API boundaries. Adapter and deployment behavior need to be confirmed for your environment.",
              ],
              [
                "What can I inspect now?",
                `The workspace provides local sample interactions for ${m.name}, using fictional records. Production connectivity and product access are still being developed.`,
              ],
            ]}
          />
        </div>
      </section>
      <CTA module={m.id} />
    </>
  );
}
