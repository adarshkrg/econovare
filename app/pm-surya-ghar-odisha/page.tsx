/* ============================================================
   PM SURYA GHAR ODISHA PAGE — /pm-surya-ghar-odisha
   - Server component: metadata + FAQ schema only
   - Renders PmSuryaGharClient for all interactive content
     (needed because the carousel requires "use client",
     which cannot coexist with a metadata export in one file)
   - Scheme-focused informational-commercial page, zero
     cannibalization risk against existing pages per
     docs/keyword-url-map.md
   ============================================================ */

import type { Metadata } from "next";
import PmSuryaGharClient from "./PmSuryaGharClient";
import FaqSchema from "../components/FaqSchema";

/* ============================================================
   FAQ DATA — must match the FAQ text rendered in PmSuryaGharClient.tsx
   ============================================================ */
const pmSuryaGharFaqs = [
  { q: "Can I apply for PM Surya Ghar if I already have a solar system?", a: "No, the subsidy is only for new installations, not existing systems." },
  { q: "What happens if my roof does not have enough space?", a: "You can install a smaller system, such as 1kW or 2kW, which still qualifies for a proportional subsidy." },
  { q: "Do I need to buy a specific brand of solar panel?", a: "The panel does not need to be a specific brand, but it must be manufactured in India and listed under the government's approved list." },
  { q: "Is there a separate application for the Odisha state subsidy?", a: "No, the state subsidy is processed alongside the central subsidy once your system is registered." },
  { q: "What if my application gets rejected?", a: "Common reasons are incorrect bank details or non-approved panels. We double check all documentation before submission to avoid this." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "PM Surya Ghar Yojana Odisha 2026: Subsidy Up to ₹1,38,000",  
  description:
    "Up to ₹1,38,000 central plus Odisha state subsidy on a 3kW rooftop solar system. Eligibility, documents, how to apply and why applications get rejected.",

  keywords: [
    "PM Surya Ghar Odisha",
    "PM Surya Ghar subsidy Odisha",
    "PM Surya Ghar Yojana Odisha",
    "rooftop solar subsidy Odisha",
    "PM Surya Ghar eligibility",
    "PM Surya Ghar apply Odisha",
  ],
  alternates: {
    canonical: "https://greenfilament.com/pm-surya-ghar-odisha",
  },
  openGraph: {
    title: "PM Surya Ghar Yojana in Odisha 2026 | Green Filament",
    description:
      "Central plus state subsidy up to ₹1,38,000 for a 3kW rooftop solar system in Odisha. Eligibility, documents, and how to apply.",
    url: "https://greenfilament.com/pm-surya-ghar-odisha",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "PM Surya Ghar Yojana Odisha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PM Surya Ghar Yojana in Odisha 2026 | Green Filament",
    description: "Central plus state subsidy up to ₹1,38,000 for a 3kW rooftop solar system in Odisha.",
    images: ["/images/og-image.jpg"],
  },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function PmSuryaGharOdishaPage() {
  return (
    <>
      <FaqSchema faqs={pmSuryaGharFaqs} />
      <PmSuryaGharClient />
    </>
  );
}