import type { Metadata } from "next";
import Link from "next/link";
import { AnalyticsChoice } from "@/components/AnalyticsChoice";
import { Wordmark } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy: Alastella",
  description: "What the Alastella website collects when you visit, and how to turn it off.",
  alternates: { canonical: "/privacy" },
};

// This page covers www.hazardsecurity.xyz only. Each product (HazardSign AI, Eyeline Studio, Eyeline Float, meetadev) has its own policy.
export default function Privacy() {
  return (
    <main className="section privacy">
      <div className="wrap privacy__in">
        <Link href="/" aria-label="Alastella home"><Wordmark /></Link>
        <span className="eyebrow">Last updated 26 October 2026</span>
        <h1 className="h2">Privacy on this website</h1>
        <p className="lead">
          This page is about www.hazardsecurity.xyz only. Each of our tools has its own privacy policy, linked from inside the tool.
        </p>
        <h2 className="privacy__h">What we collect</h2>
        <p>
          We use PostHog to understand how people use this website, so we can improve it: the pages you open, what you click, how far
          you scroll, your device and browser type, the site that sent you here, and a rough location from your IP address. Some visits
          are recorded as screen replays, with anything you type hidden. We don&apos;t ask for your name or email here, and we don&apos;t
          sell data or use it for advertising.
        </p>
        <h2 className="privacy__h">Storage and how long we keep it</h2>
        <p>
          PostHog keeps a random ID in your browser&apos;s local storage so repeat visits count once. Usage data is kept for up to 12 months
          and replays for up to 30 days. PostHog processes it for us in the United States.
        </p>
        <h2 className="privacy__h">Turning it off</h2>
        <p>If your browser sends Do Not Track, none of this is collected. You can also switch it off for this browser here:</p>
        <AnalyticsChoice />
        <h2 className="privacy__h">Questions</h2>
        <p>
          Open an issue or message us on <a href="https://github.com/alastella" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </div>
      <style>{`
        .privacy__in { display: grid; gap: 1.4em; justify-items: start; max-width: 48em; }
        .privacy__in > p { font-size: 1.1em; line-height: 1.6; color: var(--ink-2); max-width: 40em; }
        .privacy__h { font-size: 1.6em; font-weight: 700; letter-spacing: -0.02em; margin-top: 1em; }
        .privacy a { text-decoration: underline; text-underline-offset: 0.2em; }
      `}</style>
    </main>
  );
}
