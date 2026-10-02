/* ============================================================
   ECONOVA ORGANIZATION SCHEMA (JSON-LD)
   - Renders site-wide in root layout.tsx
   - Structured data for EcoNova Resources & Energy Private Limited
   ============================================================ */

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://econovare.com/#organization",
    name: "EcoNova Resources & Energy Private Limited",
    alternateName: "EcoNova Resources & Energy",
    url: "https://econovare.com",
    logo: "https://econovare.com/images/logo.png",
    image: "https://econovare.com/images/logo.png",
    description:
      "EcoNova Resources & Energy Private Limited is an integrated sustainability platform uniting renewable energy, geothermal heating & cooling, agriculture, marine resources, and advanced technology.",
    telephone: "+91-9727780048",
    email: "info.econovare@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 213/3, ARIHANT PALACE, Sector-20",
      addressLocality: "Gandhinagar",
      addressRegion: "Gujarat",
      postalCode: "382021",
      addressCountry: "IN",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renewable Energy Projects (Solar, Wind, Geothermal, Biomass, Hydrogen)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Geothermal Heating & Cooling Systems (GHC)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Engineering & Technology (Turnkey EPC, Manufacturing, O&M)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agriculture & Food Processing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marine & Aquaculture",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}