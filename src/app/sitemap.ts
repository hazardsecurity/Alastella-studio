import type { MetadataRoute } from "next";

// lastModified is the date the page's content last changed: bump it when the page changes,
// so search engines can trust it (a date that moves on every request gets ignored).
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.hazardsecurity.xyz/", lastModified: new Date("2026-10-20"), changeFrequency: "weekly", priority: 1 },
    { url: "https://www.hazardsecurity.xyz/privacy", lastModified: new Date("2026-10-26"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
