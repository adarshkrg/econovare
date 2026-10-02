/* ============================================================
   PM KUSUM ODISHA PAGE — /pm-kusum-odisha
   - Server component: metadata + FAQ schema only
   - Scoped to Component B only (standalone solar water pumps),
     matching Green Filament's actual /solar-water-pump business
   - Money page, not a blog post — same high-intent search
     behavior as PM Surya Ghar Odisha
   ============================================================ */

import type { Metadata } from "next";
import PmKusumClient from "./PmKusumClient";
import FaqSchema from "../components/FaqSchema";

/* ============================================================
   FAQ DATA — must match the FAQ text rendered in PmKusumClient.tsx
   ============================================================ */
const pmKusumFaqs = [
  { q: "Can I apply if I already have a diesel pump?", a: "Yes, replacing an existing diesel pump is one of the most common reasons farmers apply." },
  { q: "Do I need to own the land?", a: "Yes, valid land ownership documents are required." },
  { q: "What if I don't want a bank loan?", a: "You can pay your full share upfront instead, depending on whether Soura Jalanidhi applies to your case." },
  { q: "Can I get a bigger pump than I'm approved for?", a: "Yes, but you pay the cost difference above the approved capacity yourself." },
  { q: "How long does installation take after approval?", a: "Typically a few days once the vendor and site are confirmed." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "PM Kusum Yojana Odisha 2026: Solar Pump Subsidy Up to 90%",
  description:
    "PM Kusum Yojana Odisha, 2026 update: solar water pump subsidy up to 90% under Soura Jalanidhi Yojana. Eligibility, documents, and application steps, explained simply.",
  keywords: [
    "PM Kusum Odisha",
    "PM Kusum Yojana Odisha",
    "PM Kusum solar pump subsidy",
    "Soura Jalanidhi Yojana",
    "solar water pump subsidy Odisha",
    "PM Kusum Component B",
    "solar irrigation pump Odisha",
  ],
  alternates: {
    canonical: "https://greenfilament.com/pm-kusum-odisha",
  },
  openGraph: {
    title: "PM Kusum Yojana Odisha 2026 | Green Filament",
    description:
      "Up to 90% subsidy under Soura Jalanidhi Yojana for solar water pumps in Odisha. Eligibility, documents, and how to apply.",
    url: "https://greenfilament.com/pm-kusum-odisha",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "PM Kusum Solar Pump Subsidy Odisha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Kusum Yojana Odisha 2026 | Green Filament",
    description: "Up to 90% subsidy under Soura Jalanidhi Yojana for solar water pumps in Odisha.",
    images: ["/images/og-image.jpg"],
  },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function PmKusumOdishaPage() {
  return (
    <>
      <FaqSchema faqs={pmKusumFaqs} />
      <PmKusumClient />
    </>
  );
}