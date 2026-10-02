/* ============================================================
   SOLAR HIGH MAST LIGHT PAGE — /solar-high-mast-light
   - Server component: metadata + FAQ schema only
   - Genuinely new page, zero cannibalization per keyword map
   - Real project: Bagurai, Bhadrak (photo pending from team)
   ============================================================ */

import type { Metadata } from "next";
import HighMastClient from "./HighMastClient";
import FaqSchema from "../components/FaqSchema";

/* ============================================================
   FAQ DATA — must match the FAQ text rendered in HighMastClient.tsx
   ============================================================ */
const highMastFaqs = [
  { q: "How long does the battery last on a solar high mast light?", a: "Most systems provide 8 to 12 hours of backup on a full charge, enough to run through the night even after a cloudy day." },
  { q: "What maintenance does a solar high mast light need?", a: "Periodic cleaning of the solar panel and a yearly check of the battery and wiring. The pole and fixtures themselves need very little upkeep." },
  { q: "What pole height do I need?", a: "It depends on the area you need to cover. We assess your site and recommend the right height and wattage combination." },
  { q: "How long does installation take?", a: "A standard solar high mast installation typically takes 3 to 5 days, depending on pole height and site conditions." },
  { q: "Can this be used for government or gram panchayat projects?", a: "Yes, we supply solar high mast lighting for highways, government sites, and gram panchayat projects, including tender-based procurement." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Solar High Mast Light in Odisha | Green Filament",
  description:
    "Solar high mast lighting for highways, ports, industrial sites, and large public spaces. 20-40m pole height, 100-500W wattage range, fully solar powered.",
  keywords: [
    "solar high mast light",
    "solar high mast lighting Odisha",
    "high mast light manufacturer",
    "solar high mast pole",
    "high mast lighting highway",
  ],
  alternates: {
    canonical: "https://greenfilament.com/solar-high-mast-light",
  },
  openGraph: {
    title: "Solar High Mast Light | Green Filament",
    description:
      "Solar high mast lighting for highways, ports, industrial sites, and large public spaces across Odisha.",
    url: "https://greenfilament.com/solar-high-mast-light",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Solar High Mast Light" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar High Mast Light | Green Filament",
    description: "Solar high mast lighting for highways, ports, industrial sites, and large public spaces.",
    images: ["/images/og-image.jpg"],
  },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function SolarHighMastLightPage() {
  return (
    <>
      <FaqSchema faqs={highMastFaqs} />
      <HighMastClient />
    </>
  );
}