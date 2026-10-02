/* ============================================================
   SOLAR STREET LIGHTING PAGE — /products/solar-street-lighting/page.tsx
   - Server component: metadata only
   - All JSX lives in SolarStreetLightingClient.tsx
   ============================================================ */

import type { Metadata } from "next";
import SolarStreetLightingClient from "./SolarStreetLightingClient";
import FaqSchema from "../components/FaqSchema";

/* ============================================================
   FAQ DATA — must match the FAQ text shown in SolarStreetLightingClient.tsx
   ============================================================ */
const streetLightingFaqs = [
  { q: "How long does a solar street light run on a single charge?", a: "Most units run 10 to 12 hours nightly, from dusk to dawn, even after 2-3 cloudy days, thanks to battery backup sized for autonomy." },
  { q: "What is the difference between integrated and non-integrated solar street lights?", a: "Integrated lights have the panel, battery and LED built into one unit. Non-integrated lights have a separate panel and pole-mounted battery box, giving better airflow and a longer battery life." },
  { q: "Which battery type is better: SMF or LiFePO4?", a: "SMF is cost-effective and reliable for standard use. LiFePO4 lasts longer, 5 plus years versus 2 to 3 years, handles heat better, and suits high-usage or harsh-climate installations." },
  { q: "Can solar street lights work during monsoon season?", a: "Yes. Panels are sized with backup days built in, so lights keep working through several consecutive cloudy or rainy days." },
  { q: "Do you provide solar street lights for government and gram panchayat projects?", a: "Yes. We have installed 10,000+ units across Odisha for village, gram panchayat and government schemes, with custom wattage and specifications per tender requirements." },
  { q: "What wattage options are available?", a: "30W, 45W, 60W and 90W, chosen based on road width, pole height and lighting requirement." },
  { q: "What warranty do you provide on solar street lights?", a: "All Green Filament solar street lights come with a 12-month warranty covering the light, battery and pole." },
  { q: "Where has Green Filament recently installed solar street lights?", a: "In July 2026, we completed a 5-site installation for a government project under Dharakot panchayat in Ganjam district, covering Bariguda, Khajuriapaitari, Sunapalli, Kaluku and Kusaraba." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
    title: "Solar Street Light Manufacturer in Bhubaneswar, Odisha | Green Filament",
    description: "Solar street light manufacturer in Bhubaneswar, Odisha with 10,000+ units installed. Non-integrated and semi-integrated options, 30W to 90W, SMF and LiFePO4 batteries. Bulk orders for villages, gram panchayats and govt schemes.",
    keywords: [
        "solar street light Odisha",
        "solar street light manufacturer",
        "solar street light manufacturer in Bhubaneswar",
        "solar street light company in Bhubaneswar",
        "solar street light supplier Odisha",
        "non integrated solar street light",
        "semi integrated solar street light",
        "solar street light gram panchayat",
        "solar street light village",
        "solar street light 30W 45W 60W 90W",
        "SMF solar street light",
        "LiFePO4 solar street light",
        "dusk to dawn solar street light",
        "Green Filament solar street light",
        "solar street light bulk order",
    ],
    openGraph: {
        title: "Solar Street Lights — 10,000+ Installed | Green Filament",
        description: "10,000+ solar street lights installed across Odisha. Zero complaints. Non-integrated and semi-integrated options. Custom orders welcome.",
        url: "https://greenfilament.com/solar-street-lighting",
        siteName: "Green Filament",
        images: [
            {
                url: "/images/products/street-light.jpg",
                width: 1200,
                height: 630,
                alt: "Green Filament Solar Street Lights — Non-Integrated and Semi-Integrated",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Solar Street Lights — 10,000+ Installed | Green Filament",
        description: "Lighting every road. Powering every village. 10,000+ units. Zero complaints.",
        images: ["/images/products/street-light.jpg"],
    },
    alternates: {
        canonical: "https://greenfilament.com/solar-street-lighting",
    },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function Page() {
    return (
        <>
            <FaqSchema faqs={streetLightingFaqs} />
            <SolarStreetLightingClient />
        </>
    );
}