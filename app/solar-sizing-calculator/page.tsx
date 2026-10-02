/* ============================================================
   SOLAR SIZING CALCULATOR PAGE — /solar-sizing-calculator
   - Server component for SEO metadata
   - Renders SolarSizingCalculatorClient for full UI
   ============================================================ */

import type { Metadata } from "next";
import SolarSizingCalculatorClient from "./SolarSizingCalculatorClient";
import FaqSchema from "../components/FaqSchema";

const sizingFaqs = [
  { q: "How accurate is this solar sizing calculator?", a: "It gives a reliable first estimate based on your state's solar availability and your entered load. Actual panel, inverter and battery sizing can vary based on roof shading, appliance surge characteristics and site conditions — confirmed during a professional site assessment." },
  { q: "What's the difference between this and the ROI calculator?", a: "This calculator estimates the physical system size you need — panels, inverter and battery. The ROI calculator estimates your electricity bill savings and payback period for a given system size. Use this one first to size your system, then the ROI calculator to estimate savings." },
  { q: "Should I choose On-Grid, Off-Grid or Hybrid?", a: "On-Grid is best if you have a stable grid connection and mainly want lower bills. Off-Grid suits locations with no reliable grid. Hybrid combines both — solar plus battery backup plus grid — for savings and power-cut protection." },
  { q: "Do I need to know my exact appliance wattage?", a: "No. Use Quick mode if you know your total connected load in watts. If you don't, switch to Detailed mode and select your appliances — the calculator will estimate wattage and total load for you." },
  { q: "Why does the calculator ask for battery backup hours?", a: "Battery backup hours only apply to Off-Grid and Hybrid systems. They determine how long your selected loads can run on battery power alone when solar generation isn't available, which directly sizes the battery bank." },
];

export const metadata: Metadata = {
  title: "Solar Sizing Calculator India | Calculate Panel, Inverter & Battery Size | Green Filament",
  description:
    "Free solar sizing calculator for India. Select your state, choose on-grid, off-grid or hybrid solar, and calculate the required solar panels, inverter and battery size.",
  keywords: [
    "solar sizing calculator India",
    "solar panel calculator India",
    "solar system size calculator",
    "solar battery calculator",
    "solar inverter size calculator",
    "off grid solar calculator",
    "hybrid solar calculator",
    "on grid solar calculator",
  ],
  alternates: {
    canonical: "https://greenfilament.com/solar-sizing-calculator",
  },
  openGraph: {
    title: "Solar Sizing Calculator India | Green Filament",
    description:
      "Calculate the right solar panel, inverter and battery size for your home or business.",
    url: "https://greenfilament.com/solar-sizing-calculator",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Solar Sizing Calculator - Green Filament" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Sizing Calculator India | Green Filament",
    description:
      "Calculate the right solar panel, inverter and battery size for your home or business.",
    images: ["/images/og-image.jpg"],
  },
};

export default function SolarSizingCalculatorPage() {
  return (
    <>
      <FaqSchema faqs={sizingFaqs} />
      <SolarSizingCalculatorClient faqs={sizingFaqs} />
    </>
  );
}
