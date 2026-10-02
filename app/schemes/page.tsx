/* ============================================================
   SCHEMES PAGE — /schemes
   - Server component: metadata only
   - All JSX lives in SchemesClient.tsx
   ============================================================ */

import type { Metadata } from "next";
import SchemesClient from "./SchemesClient";

export const metadata: Metadata = {
  title: "Solar Subsidy Schemes in Odisha | PM Surya Ghar, KUSUM & More | Green Filament",
  description:
    "Get up to ₹1,38,000 in solar subsidies in Odisha. Complete guide to PM Surya Ghar Yojana, PM KUSUM, Soura Jalanidhi, and Odisha state schemes. Green Filament handles all paperwork for free.",
  keywords: [
    "solar subsidy Odisha",
    "PM Surya Ghar Yojana Odisha",
    "PM KUSUM scheme Odisha",
    "solar scheme Bhubaneswar",
    "rooftop solar subsidy India",
    "Soura Jalanidhi Yojana",
    "OREDA solar scheme",
    "solar pump subsidy Odisha",
    "free solar scheme Odisha",
    "Green Filament subsidy help",
  ],
  alternates: {
    canonical: "https://greenfilament.com/schemes",
  },
  openGraph: {
    title: "Solar Subsidy Schemes in Odisha | PM Surya Ghar, KUSUM & More | Green Filament",
    description:
      "Up to ₹1,38,000 in solar subsidies available in Odisha. PM Surya Ghar, KUSUM, Soura Jalanidhi and more. Green Filament handles all paperwork for free.",
    url: "https://greenfilament.com/schemes",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Solar Subsidy Schemes Odisha - Green Filament" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Subsidy Schemes in Odisha | Green Filament",
    description:
      "Up to ₹1,38,000 in subsidies. PM Surya Ghar, KUSUM, Soura Jalanidhi and more. Free paperwork help.",
    images: ["/images/og-image.jpg"],
  },
};

export default function SchemesPage() {
  return <SchemesClient />;
}