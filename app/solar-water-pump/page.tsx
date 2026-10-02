/* ============================================================
   SOLAR WATER PUMP PAGE — /solar-water-pump/page.tsx
   - Server component: metadata only
   - All JSX lives in SolarWaterPumpClient.tsx
   ============================================================ */

import type { Metadata } from "next";
import SolarWaterPumpClient from "./SolarWaterPumpClient";
import FaqSchema from "../components/FaqSchema";

const waterPumpFaqs = [
  { q: "How does a solar water pump work?", a: "A solar water pump uses electricity generated from solar panels to operate the pump motor and lift water from a borewell, pond, or any water source." },
  { q: "Can a solar pump work without electricity?", a: "Yes. Solar pumps run using sunlight and do not require grid electricity. Some systems can also be connected with hybrid power options for backup." },
  { q: "Which is better: surface pump or submersible pump?", a: "A surface pump is suitable for shallow water sources like ponds and tanks. A submersible pump is ideal for deep borewells and underground water extraction." },
  { q: "How much water can a solar pump provide?", a: "Water output depends on pump capacity, bore depth, sunlight availability, and system size. Our team will calculate the right capacity for your requirement." },
  { q: "Does a solar water pump work on cloudy days?", a: "Yes, but with reduced performance due to lower sunlight intensity. Systems can be designed with battery backup or hybrid options for consistent supply." },
  { q: "What maintenance is required?", a: "Solar pumps require minimal maintenance. Regular cleaning of solar panels and periodic system checks are generally sufficient." },
  { q: "Is subsidy available for solar pumps?", a: "Yes. In Odisha, solar water pumps qualify for subsidy under PM Kusum Yojana, with up to 90% support under Soura Jalanidhi. See our PM Kusum Odisha page for full eligibility and how to apply." },
  { q: "How do I choose the right solar pump?", a: "The right pump depends on water depth, daily water requirement, land size, and application. Our team conducts a full site assessment to recommend the best option." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
    title: "Solar Water Pump Odisha: Installation for Agriculture & Borewell | Green Filament",
    description: "Get efficient solar water pump solutions for agriculture, borewell, irrigation, and water supply in Odisha. Save electricity costs with reliable solar pump installation and expert support by Green Filament.",
    keywords: [
        "Solar Water Pump Odisha",
        "Solar Pump System",
        "Solar Pump for Agriculture",
        "Solar Borewell Pump",
        "Solar Irrigation Pump",
        "Solar Water Pump Installation",
        "Agriculture Solar Pump",
        "submersible solar pump",
        "surface solar pump",
        "solar pump Bhubaneswar",
        "PM-KUSUM solar pump",
    ],
    openGraph: {
        title: "Solar Water Pump Odisha | Green Filament",
        description: "Efficient solar water pump solutions for agriculture, borewell, irrigation, and water supply in Odisha. Expert installation and after-sales support.",
        url: "https://greenfilament.com/solar-water-pump",
        siteName: "Green Filament",
        images: [
            {
                url: "/images/products/solar-water-pump.jpg",
                width: 1200,
                height: 630,
                alt: "Green Filament Solar Water Pump — Agriculture and Borewell Solutions",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Solar Water Pump Odisha | Green Filament",
        description: "Zero electricity cost. Reliable water supply. Solar pump solutions for agriculture and borewell across Odisha.",
        images: ["/images/products/solar-water-pump.jpg"],
    },
    alternates: {
        canonical: "https://greenfilament.com/solar-water-pump",
    },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
    return (
        <>
            <FaqSchema faqs={waterPumpFaqs} />
            <SolarWaterPumpClient />
        </>
    );
}