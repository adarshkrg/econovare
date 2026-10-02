/* ============================================================
   ROOFTOP SOLAR PAGE — /rooftop-solar
   - Server component for SEO metadata
   - Renders RooftopSolarClient for full UI
   ============================================================ */

import type { Metadata } from "next";
import RooftopSolarClient from "./RooftopSolarClient";
import FaqSchema from "../components/FaqSchema";

const rooftopFaqs = [
  { q: "Does rooftop solar work during cloudy weather?", a: "Yes. Solar panels continue generating electricity even during cloudy conditions, though generation may temporarily reduce by 20-50% depending on cloud density." },
  { q: "How long do solar panels last?", a: "Most solar panels are designed to operate efficiently for 25 years or more. Quality panels lose less than 0.5% efficiency per year, so they continue producing significant power well beyond the warranty period." },
  { q: "Can rooftop solar run air conditioners?", a: "Yes. A properly designed system accounts for AC load. A 2-3 tonne AC typically requires a 3-5kW system to run efficiently during peak solar hours." },
  { q: "Is subsidy available for rooftop solar in Odisha?", a: "Yes. Residential rooftop solar installations qualify for PM Surya Ghar Muft Bijli Yojana (up to ₹78,000) and Odisha state additional subsidy (up to ₹60,000) — combined up to ₹1,38,000 for a 3kW system." },
  { q: "What is net metering?", a: "Net metering allows excess solar electricity generated during the day to be exported to the grid. Your DISCOM credits this against your nighttime consumption, reducing your monthly bill to near zero in many cases." },
];

export const metadata: Metadata = {
  title: "Rooftop Solar Systems — On-Grid, Off-Grid & Hybrid | Green Filament",
  description:
    "Rooftop solar systems for homes, businesses and industries in Odisha. On-Grid, Off-Grid and Hybrid options. 500+ installations. Get up to ₹1,38,000 subsidy. Free site assessment.",
  keywords: [
    "rooftop solar Odisha",
    "solar panel installation Odisha",
    "on grid solar system",
    "off grid solar system",
    "hybrid solar system",
    "rooftop solar for home",
    "commercial solar Odisha",
    "solar subsidy Odisha",
    "reduce electricity bill solar",
    "Green Filament rooftop solar",
  ],
  alternates: {
    canonical: "https://greenfilament.com/rooftop-solar",
  },
  openGraph: {
    title: "Rooftop Solar Systems — On-Grid, Off-Grid & Hybrid | Green Filament",
    description:
      "500+ rooftop solar installations across Odisha. On-Grid, Off-Grid and Hybrid systems for homes and businesses. Free site assessment.",
    url: "https://greenfilament.com/rooftop-solar",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Rooftop Solar Systems Odisha - Green Filament" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooftop Solar Systems | Green Filament Odisha",
    description:
      "On-Grid, Off-Grid & Hybrid rooftop solar for homes and businesses. 500+ installations. Free site assessment.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RooftopSolarPage() {
  return (
    <>
      <FaqSchema faqs={rooftopFaqs} />
      <RooftopSolarClient />
    </>
  );
}