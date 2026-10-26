"use client";

import { useSyncExternalStore } from "react";
import { analyticsAvailable, analyticsOptedOut, setAnalytics } from "@/lib/analytics";

// The saved choice lives in localStorage; the buttons tell listeners when it changes.
const listeners = new Set<() => void>();
const subscribe = (fn: () => void) => { listeners.add(fn); return () => { listeners.delete(fn); }; };
const isOn = () => !analyticsOptedOut();

function choose(on: boolean) {
  setAnalytics(on);
  listeners.forEach((fn) => fn());
}

/** Analytics on this browser: On / Off. Shown only when analytics is set up. */
export function AnalyticsChoice() {
  const on = useSyncExternalStore(subscribe, isOn, () => true);
  if (!analyticsAvailable()) return null;
  return (
    <div className="choice" role="radiogroup" aria-label="Analytics on this browser">
      <span className="mono">Analytics on this browser</span>
      <button type="button" role="radio" aria-checked={on} onClick={() => choose(true)}>On</button>
      <button type="button" role="radio" aria-checked={!on} onClick={() => choose(false)}>Off</button>
      <style>{`
        .choice { display: flex; flex-wrap: wrap; align-items: center; gap: 0.6em; }
        .choice .mono { font-size: 0.8em; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink-3); margin-right: 0.4em; }
        .choice button { font: inherit; padding: 0.5em 1.2em; border-radius: 999px; border: 1.5px solid var(--ink); background: transparent; color: var(--ink); cursor: pointer; }
        .choice button[aria-checked="true"] { background: var(--ink); color: var(--bone); }
      `}</style>
    </div>
  );
}
