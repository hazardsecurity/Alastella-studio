"use client";

import Image from "next/image";
import { motion, stagger, useReducedMotion } from "motion/react";
import { ButtonLink, Wordmark, GITHUB, PRODUCTS } from "./ui";

const EASE = [0.4, 0, 0.05, 1] as const;

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }} transition={{ duration: 1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

/* ---------------- The shelf of tools ---------------- */
export function Tools() {
  const reduce = useReducedMotion();
  const card = { hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: 1.5 }, show: { opacity: 1, y: 0, rotate: 0 } };
  return (
    <section id="tools" className="section tools">
      <div className="wrap">
        <div className="tools__head">
          <Reveal><span className="eyebrow">The shelf</span></Reveal>
          <Reveal delay={0.05}><h2 className="h2">One tool per job.<br />Each one finished.</h2></Reveal>
          <Reveal delay={0.1}><p className="lead">Every product does a single everyday task end to end, with nothing to configure. Here is what&apos;s on the shelf, and what&apos;s being built.</p></Reveal>
        </div>

        <motion.ul className="shelf" initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ show: { transition: { delayChildren: stagger(0.1) } } }}>
          {/* 01 — live */}
          <motion.li className="tool tool--sign" variants={card} transition={{ duration: 1, ease: EASE }}>
            <div className="tool__top">
              <span className="mono tool__no">01</span>
              <span className="tool__status mono"><i />Live</span>
            </div>
            <div className="tool__brand">
              <Image src="/hazardsign-mark.png" alt="" width={72} height={72} />
              <div>
                <h3 className="h3">HazardSign AI</h3>
                <p className="mono tool__kind">Document signing</p>
              </div>
            </div>
            <p className="body tool__desc">
              Sign any file online: PDFs, photos, spreadsheets, anything. Documents are signed and sealed in your browser and never leave your device. Each copy comes with an audit certificate that proves what was signed, by whom and when.
            </p>
            <ul className="tool__facts mono">
              <li>Any file type</li>
              <li>Audit certificate</li>
              <li>₦500 / month</li>
            </ul>
            <ButtonLink href={PRODUCTS.hazardsign} variant="ink" external>Open HazardSign</ButtonLink>
          </motion.li>

          {/* 02 — live */}
          <motion.li className="tool tool--eye" variants={card} transition={{ duration: 1, ease: EASE }}>
            <div className="tool__top">
              <span className="mono tool__no">02</span>
              <span className="tool__status mono"><i />Live</span>
            </div>
            <div className="tool__brand">
              <Image src="/eyeline-mark.svg" alt="" width={72} height={72} unoptimized />
              <div>
                <h3 className="h3">Eyeline</h3>
                <p className="mono tool__kind">Teleprompter</p>
              </div>
            </div>
            <p className="body tool__desc">
              Read your script at the lens while your camera records. Practise free with your camera and script, then record takes in your browser for a small monthly fee. Takes never leave your device.
            </p>
            <ul className="tool__facts mono">
              <li>Practise free</li>
              <li>Records in browser</li>
              <li>₦3,000 / month</li>
            </ul>
            <ButtonLink href={PRODUCTS.eyeline} variant="ink" external>Open Eyeline</ButtonLink>
          </motion.li>

          {/* 03 — live */}
          <motion.li className="tool tool--eye tool--float" variants={card} transition={{ duration: 1, ease: EASE }}>
            <div className="tool__top">
              <span className="mono tool__no">03</span>
              <span className="tool__status mono"><i />Live</span>
            </div>
            <div className="tool__brand">
              <Image src="/eyeline-float-mark.svg" alt="" width={72} height={72} unoptimized />
              <div>
                <h3 className="h3">Eyeline Float</h3>
                <p className="mono tool__kind">Desktop teleprompter</p>
              </div>
            </div>
            <p className="body tool__desc">
              Read your script on a video call without anyone seeing it. A thin strip sits under your webcam on Mac or Windows, scrolls at your pace, and stays out of screen sharing on Zoom, Meet and Teams.
            </p>
            <ul className="tool__facts mono">
              <li>Mac and Windows</li>
              <li>Hidden from screen share</li>
              <li>₦5,000 / month</li>
            </ul>
            <ButtonLink href={PRODUCTS.eyelineFloat} variant="ink" external>Download Eyeline Float</ButtonLink>
          </motion.li>

          {/* 04 — in the workshop */}
          <motion.li className="tool tool--soon tool--volt" variants={card} transition={{ duration: 1, ease: EASE }}>
            <div className="tool__top">
              <span className="mono tool__no">04</span>
              <span className="tool__status tool__status--soon mono"><i />In the workshop</span>
            </div>
            <div className="tool__brand">
              <Image src="/voltguard-mark.svg" alt="" width={72} height={72} unoptimized />
              <div>
                <h3 className="h3">VoltGuard AI</h3>
                <p className="mono tool__kind">Revenue protection for DisCos</p>
              </div>
            </div>
            <p className="body tool__desc">
              Finds electricity theft for distribution companies. It checks the energy each feeder sends out against what its meters record, scores every meter for bypass and tampering, and sends inspectors to the right door with a GPS-tagged docket.
            </p>
            <ul className="tool__facts mono">
              <li>Feeder energy balance</li>
              <li>Meter risk scores</li>
              <li>GPS inspection dockets</li>
            </ul>
          </motion.li>
        </motion.ul>
      </div>

      <style>{`
        .tools__head { display: grid; gap: 1.75em; max-width: 46em; margin-bottom: 4.5em; }
        .shelf { list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25em; align-items: stretch; }
        .tool { position: relative; display: flex; flex-direction: column; gap: 1.4em; padding: 2em; border-radius: 1.5em; background: #faf9f5;
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 8%, transparent); transition: transform .5s var(--ease), box-shadow .5s var(--ease); }
        @media (hover: hover) and (pointer: fine) {
          .tool--sign:hover { transform: translateY(-6px); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 8%, transparent), 0 40px 70px -40px rgba(255,90,31,.45); }
          .tool--eye:hover { transform: translateY(-6px); box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 8%, transparent), 0 40px 70px -40px rgba(42,77,255,.45); }
        }
        .tool__top { display: flex; justify-content: space-between; align-items: center; }
        .tool__no { font-size: .8em; color: var(--muted); }
        .tool__status { display: inline-flex; align-items: center; gap: .5em; font-size: .7em; text-transform: uppercase; letter-spacing: .08em; padding: .4em .8em; border-radius: 99px;
          background: color-mix(in srgb, #1f7a4d 12%, transparent); color: #1f7a4d; }
        .tool__status i { width: .55em; height: .55em; border-radius: 50%; background: currentColor; animation: pulse 2s ease-in-out infinite; }
        .tool__status--soon { background: var(--bone-2); color: var(--ink-3); }
        .tool__status--soon i { animation: none; background: var(--tape-2); }
        @keyframes pulse { 50% { opacity: .35; } }
        .tool__brand { display: flex; align-items: center; gap: 1em; }
        .tool__brand img { width: 3.6em; height: 3.6em; }
        .tool__kind { font-size: .75em; color: var(--sign); text-transform: uppercase; letter-spacing: .08em; margin-top: .25em; }
        .tool--eye .tool__kind { color: var(--eyeline); }
        .tool--volt .tool__kind { color: #b37400; }
        .tool__desc { font-size: 1em; line-height: 1.55; }
        .tool__facts { list-style: none; display: flex; flex-wrap: wrap; gap: .5em; font-size: .72em; margin-top: auto; }
        .tool__facts li { padding: .45em .8em; border-radius: 99px; background: var(--bone-2); color: var(--ink-2); }
        .tool--sign .btn, .tool--eye .btn { align-self: flex-start; }
        .tool--soon { grid-column: 1 / -1; background: transparent; box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--ink) 14%, transparent); }
        .tool__tape { position: relative; height: 7.5em; border-radius: 1em; overflow: hidden; display: grid; place-items: center;
          background: repeating-linear-gradient(-45deg, color-mix(in srgb, var(--ink) 7%, transparent) 0 .9em, transparent .9em 1.8em); }
        .tool__tape span { font-family: var(--f-mono); font-size: .7em; letter-spacing: .16em; background: var(--tape); padding: .5em 1em; transform: rotate(-3deg); }
        .tool__link { font-size: .78em; color: var(--ink-2); margin-top: auto; text-decoration: underline; text-underline-offset: 4px; text-decoration-color: var(--tape-2); }
        .tool__link:hover { color: var(--ink); }
        @media (max-width: 1023px) { .shelf { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 600px) { .shelf { grid-template-columns: 1fr; } .tool { padding: 1.5em; } }
      `}</style>
    </section>
  );
}

/* ---------------- Community projects ---------------- */
export function Community() {
  return (
    <section id="community" className="section community">
      <div className="wrap">
        <div className="tools__head">
          <Reveal><span className="eyebrow">Community projects</span></Reveal>
          <Reveal delay={0.05}><h2 className="h2">Built for the people<br />who taught us.</h2></Reveal>
          <Reveal delay={0.1}><p className="lead">Free tools we make for developer communities. No subscription, no paywall, just a job done properly for the meetups and conferences that grow our industry.</p></Reveal>
        </div>

        <Reveal>
          <article className="project">
            <div className="project__copy">
              <div className="tool__top">
                <span className="mono tool__no">C1</span>
                <span className="tool__status mono"><i />Live · Free</span>
              </div>
              <div className="tool__brand">
                <Image src="/meetadev-mark.svg" alt="" width={72} height={72} unoptimized />
                <div>
                  <h3 className="h3">meetadev</h3>
                  <p className="mono tool__kind project__kind">Networking for DevFest &amp; GDG events</p>
                </div>
              </div>
              <p className="body tool__desc">
                Meet the people you came to meet. Attendees make a badge with their role, level and what they&apos;re there for, whether mentoring, learning, hiring or finding a co-founder, and see who else is at the event. Contact details only appear once both people accept, and connections can chat right in the app.
              </p>
              <ul className="tool__facts mono">
                <li>Mutual-accept contacts</li>
                <li>Chat &amp; leaderboard</li>
                <li>2,000+ GDG communities</li>
                <li>Free</li>
              </ul>
              <ButtonLink href={PRODUCTS.meetadev} variant="ink" external>Open meetadev</ButtonLink>
            </div>
            <div className="project__badge" aria-hidden>
              <span className="project__ribbon"><i /><i /><i /><i /></span>
              <span className="mono project__hello">Hello, I&apos;m</span>
              <strong className="project__name">A developer</strong>
              <span className="project__chips"><b>Mentor</b><b>Android</b><b>Hiring</b></span>
            </div>
          </article>
        </Reveal>
      </div>

      <style>{`
        .community { padding-top: 0; scroll-margin-top: 7em; }
        .project { display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr); gap: 2em; align-items: center; padding: 2em; border-radius: 1.5em; background: #faf9f5;
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--ink) 8%, transparent); }
        .project__copy { display: flex; flex-direction: column; gap: 1.4em; }
        .project__copy .btn { align-self: flex-start; }
        .project__kind { color: #1a73e8; }
        .project__badge { position: relative; justify-self: center; width: min(100%, 17em); aspect-ratio: 3 / 4; display: flex; flex-direction: column; justify-content: center; gap: .6em;
          padding: 2.2em 1.6em 1.6em; border-radius: 1.2em; background: #fff; box-shadow: 0 30px 60px -35px rgba(15,15,14,.45), inset 0 0 0 1px color-mix(in srgb, var(--ink) 8%, transparent);
          transform: rotate(-3deg); transition: transform .6s var(--ease); }
        @media (hover: hover) and (pointer: fine) { .project:hover .project__badge { transform: rotate(0deg) translateY(-6px); } }
        .project__ribbon { position: absolute; inset: 0 0 auto; height: .7em; display: grid; grid-template-columns: repeat(4, 1fr); border-radius: 1.2em 1.2em 0 0; overflow: hidden; }
        .project__ribbon i:nth-child(1) { background: #4285f4; } .project__ribbon i:nth-child(2) { background: #ea4335; }
        .project__ribbon i:nth-child(3) { background: #fbbc05; } .project__ribbon i:nth-child(4) { background: #34a853; }
        .project__hello { font-size: .72em; text-transform: uppercase; letter-spacing: .1em; color: var(--muted); }
        .project__name { font-size: 1.6em; line-height: 1.1; }
        .project__chips { display: flex; flex-wrap: wrap; gap: .4em; margin-top: .6em; }
        .project__chips b { font-weight: 600; font-size: .72em; padding: .4em .75em; border-radius: 99px; background: var(--bone-2); color: var(--ink-2); }
        @media (prefers-reduced-motion: reduce) { .project__badge { transition: none; } }
        @media (max-width: 767px) { .project { grid-template-columns: 1fr; padding: 1.5em; } .project__badge { width: min(100%, 14em); } }
      `}</style>
    </section>
  );
}

/* ---------------- Principles (dark) ---------------- */
const principles = [
  { k: "01", t: "One job, done properly", b: "Each tool solves a single everyday task from start to finish. No dashboards to learn, no settings to tune." },
  { k: "02", t: "Private by default", b: "We keep as little of your data as the job allows. HazardSign signs your documents and Eyeline records your takes without either ever leaving your device." },
  { k: "03", t: "Fair, local pricing", b: "Simple monthly prices in naira, paid securely by card. Cancel whenever you like." },
  { k: "04", t: "Shipped, then sharpened", b: "Tools go out when they're useful, then improve every week based on how people actually use them." },
];

export function Principles() {
  return (
    <section id="principles" className="section principles">
      <div className="wrap">
        <div className="principles__head">
          <Reveal><span className="eyebrow eyebrow--dark">How we build</span></Reveal>
          <Reveal delay={0.05}><h2 className="h2">Small tools.<br /><span className="principles__hl">Serious</span> craft.</h2></Reveal>
        </div>
        <ul className="principles__grid">
          {principles.map((p, i) => (
            <Reveal key={p.k} delay={0.08 * i}>
              <li className="principle">
                <span className="mono principle__k">{p.k}</span>
                <h3 className="h3">{p.t}</h3>
                <p className="principle__b">{p.b}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
      <style>{`
        .principles { background: var(--ink); color: var(--bone); border-radius: 2.5em; margin-inline: .75em; }
        .principles__head { display: grid; gap: 1.75em; margin-bottom: 4.5em; }
        .eyebrow--dark { color: color-mix(in srgb, var(--bone) 60%, transparent); }
        .principles__hl { color: var(--ink); background: var(--tape); padding: 0 .12em; border-radius: .08em; box-decoration-break: clone; -webkit-box-decoration-break: clone; }
        .principles__grid { list-style: none; display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25em; }
        .principle { display: grid; gap: .9em; padding-top: 1.5em; border-top: 1px solid color-mix(in srgb, var(--bone) 18%, transparent); height: 100%; }
        .principle__k { font-size: .8em; color: var(--tape); }
        .principle__b { color: color-mix(in srgb, var(--bone) 68%, transparent); }
        @media (max-width: 1023px) { .principles__grid { grid-template-columns: 1fr 1fr; gap: 2em 1.25em; } }
        @media (max-width: 600px) { .principles__grid { grid-template-columns: 1fr; } .principles { margin-inline: .4em; border-radius: 1.75em; } }
      `}</style>
    </section>
  );
}

/* ---------------- Closing + footer ---------------- */
export function Closing() {
  return (
    <section className="section closing">
      <div className="wrap">
        <Reveal className="closing__card">
          <span className="eyebrow">Your turn</span>
          <h2 className="h2 closing__title">Got a daily chore software should handle?</h2>
          <p className="lead">Tell us what eats your time. The best ideas become the next tool on the shelf.</p>
          <div className="closing__btns">
            <ButtonLink href={`${GITHUB}`} variant="ink" external>Suggest a tool</ButtonLink>
            <ButtonLink href={PRODUCTS.hazardsign} variant="ghost" external>Try HazardSign AI</ButtonLink>
          </div>
        </Reveal>
        <footer className="foot">
          <Wordmark />
          <nav className="foot__links" aria-label="Footer">
            <a href="#tools">Tools</a>
            <a href="#community">Community</a>
            <a href="#principles">How we build</a>
            <a href={PRODUCTS.hazardsign} target="_blank" rel="noreferrer">HazardSign AI</a>
            <a href={PRODUCTS.eyeline} target="_blank" rel="noreferrer">Eyeline</a>
            <a href={PRODUCTS.eyelineFloat} target="_blank" rel="noreferrer">Eyeline Float</a>
            <a href={PRODUCTS.meetadev} target="_blank" rel="noreferrer">meetadev</a>
            <a href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          </nav>
          <span className="mono foot__c">© 2026 Hazardsecurity</span>
        </footer>
      </div>
      <style>{`
        .closing { padding-bottom: 2.5em; }
        .closing__card { position: relative; display: grid; gap: 1.6em; justify-items: start; padding: 4.5em; border-radius: 2em; background: var(--tape); overflow: hidden; }
        .closing__card::after { content: ""; position: absolute; right: -6em; top: -6em; width: 22em; height: 22em; border-radius: 50%;
          background: repeating-linear-gradient(-45deg, color-mix(in srgb, var(--ink) 9%, transparent) 0 1em, transparent 1em 2em); }
        .closing__card > * { position: relative; z-index: 1; }
        .closing__title { max-width: 12em; }
        .closing__card .lead { color: var(--ink-2); }
        .closing__btns { display: flex; gap: .75em; flex-wrap: wrap; }
        .closing__card .btn--ghost { box-shadow: inset 0 0 0 1.5px color-mix(in srgb, var(--ink) 35%, transparent); }
        .foot { display: flex; justify-content: space-between; align-items: center; gap: 2em; padding: 3em 0 1em; flex-wrap: wrap; }
        .foot__links { display: flex; gap: 2em; flex-wrap: wrap; font-size: .95em; color: var(--ink-3); }
        .foot__links a:hover { color: var(--ink); }
        .foot__c { font-size: .75em; color: var(--muted); }
        @media (max-width: 767px) { .closing__card { padding: 2.5em 1.5em; } }
      `}</style>
    </section>
  );
}
