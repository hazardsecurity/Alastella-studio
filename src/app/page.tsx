import { Hero, Nav } from "@/components/Hero";
import { Closing, Principles, Tools } from "@/components/Sections";

// Structured data: the studio, its website and its live products.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hazardsecurity.xyz/#org",
      name: "Hazardsecurity",
      alternateName: ["Hazard Security", "hazardsecurity.xyz"],
      url: "https://www.hazardsecurity.xyz",
      logo: "https://www.hazardsecurity.xyz/icon.svg",
      description: "An independent software studio building focused tools for everyday jobs.",
      sameAs: ["https://github.com/hazardsecurity"],
    },
    { "@type": "WebSite", "@id": "https://www.hazardsecurity.xyz/#site", url: "https://www.hazardsecurity.xyz", name: "Hazardsecurity", alternateName: "Hazard Security", publisher: { "@id": "https://www.hazardsecurity.xyz/#org" } },
    {
      "@type": "SoftwareApplication",
      name: "HazardSign AI",
      url: "https://sign.hazardsecurity.xyz/",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web browser",
      offers: { "@type": "Offer", price: "500", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.hazardsecurity.xyz/#org" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Eyeline",
      url: "https://eyeline.hazardsecurity.xyz/",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "Web browser",
      offers: { "@type": "Offer", price: "3000", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.hazardsecurity.xyz/#org" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Eyeline Float",
      url: "https://eyeline.hazardsecurity.xyz/download",
      applicationCategory: "MultimediaApplication",
      operatingSystem: "macOS, Windows",
      offers: { "@type": "Offer", price: "5000", priceCurrency: "NGN" },
      publisher: { "@id": "https://www.hazardsecurity.xyz/#org" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav />
      <main>
        <Hero />
        <Tools />
        <Principles />
      </main>
      <Closing />
    </>
  );
}
