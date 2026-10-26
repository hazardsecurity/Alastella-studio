import type { PostHog } from "posthog-js";

// Product analytics (PostHog). Off unless NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN is set (NEXT_PUBLIC_POSTHOG_HOST picks the region). Events go through /ingest on this site
// (see next.config.ts), so ad blockers don't drop them and the browser never calls PostHog directly.
// Recordings mask anything typed. Visitors can turn it off on /privacy, and Do Not Track is respected.
const KEY = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN || process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
const REGION = process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" || /\beu\./.test(process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "") ? "eu" : "us";
export const POSTHOG_HOST = `https://${REGION}.i.posthog.com`;
export const POSTHOG_ASSETS = `https://${REGION}-assets.i.posthog.com`;
const OPT_OUT_KEY = "hs-no-analytics";

export const analyticsAvailable = () => Boolean(KEY);

export function analyticsOptedOut() {
  try {
    return localStorage.getItem(OPT_OUT_KEY) === "1";
  } catch {
    return false;
  }
}

// The library is only downloaded when analytics is on, so it costs nothing otherwise.
let loading: Promise<PostHog | null> | null = null;

export function startAnalytics() {
  if (!KEY || analyticsOptedOut()) return Promise.resolve(null);
  loading ??= import("posthog-js").then(({ default: posthog }) => {
    posthog.init(KEY, {
      api_host: "/ingest",
      ui_host: `https://${REGION}.posthog.com`,
      defaults: "2026-08-30",
      person_profiles: "identified_only",
      persistence: "localStorage",
      respect_dnt: true,
      session_recording: { maskAllInputs: true },
    });
    return posthog;
  });
  return loading;
}

export function setAnalytics(on: boolean) {
  try {
    if (on) localStorage.removeItem(OPT_OUT_KEY);
    else localStorage.setItem(OPT_OUT_KEY, "1");
  } catch {
    // private mode: the choice lasts for this visit
  }
  if (on) void startAnalytics().then((ph) => ph?.opt_in_capturing());
  else void loading?.then((ph) => ph?.opt_out_capturing());
}
