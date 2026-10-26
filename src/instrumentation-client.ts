import { startAnalytics } from "@/lib/analytics";

// Runs before the page is interactive. Analytics loads in the background and must never break the page.
startAnalytics().catch(() => {});
