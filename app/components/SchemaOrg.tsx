/* ============================================================
   ORGANIZATION + LOCALBUSINESS SCHEMA (JSON-LD)
   - Renders site-wide in root layout.tsx
   - Helps Google show rich business info (knowledge panel,
     local pack, star ratings, sitelinks) in search results
   - Combines Organization + LocalBusiness types since Green
     Filament is both a registered company and a local service
     business serving Odisha districts
   ============================================================ */

export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://greenfilament.com/#organization",
    name: "Green Filament",
    alternateName: "Green Filament Solar",
    url: "https://greenfilament.com",
    logo: "https://greenfilament.com/images/logo.png",
    image: "https://greenfilament.com/images/logo.png",
    description:
      "Green Filament is Odisha's trusted solar energy company, delivering rooftop solar, solar water pumps, solar street lighting and solar cooking systems across Bhubaneswar and 12+ districts in Odisha since 2018.",
    foundingDate: "2018-01",
    telephone: "+91-9337256398",
    email: "connect@greenfilament.com",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "628/1333, Lane 1, Laxmi Vihar, Tankapani Road",
      addressLocality: "Bhubaneswar",
      addressRegion: "Odisha",
      postalCode: "751002",
      addressCountry: "IN",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Odisha",
      },
      {
        "@type": "State",
        name: "Jharkhand",
      },
    ],
    sameAs: [
      "https://www.facebook.com/green.filament/",
      "https://www.instagram.com/green.filament/",
      "https://www.linkedin.com/company/green-filament",
      "https://www.youtube.com/@greenfilamentsolarenergy7440",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rooftop Solar Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solar Water Pump Installation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solar Street Lighting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Solar Cooking Systems",
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