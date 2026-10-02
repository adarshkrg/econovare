/* ============================================================
   SOLAR COOKING PRODUCT PAGE — /solar-cooking
   - Single file, no client component needed
   - Clean SEO: title, description, openGraph, twitter, keywords
   - Hero: amber gradient + patent badge + dot grid
   - Product overview: image left, specs right
   - The Problem: 3 pain point cards
   - How It Works: 3-step process
   - Key Benefits: 4 cards
   - Use Cases: 5 use case cards
   - Cost Comparison: LPG vs Firewood vs Solar
   - CTA Banner
   - Fully responsive
   ============================================================ */

import type { Metadata } from "next";
import NextImage from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";
import FaqSchema from "../components/FaqSchema";

/* ============================================================
   FAQ DATA — must match the FAQ text rendered by FaqAccordion below
   ============================================================ */
const solarCookingFaqs = [
  { q: "How does the solar cooking system work without a battery?", a: "Solar panels generate DC electricity directly during the day, which powers a coil heater similar to an induction stove. No battery storage, no LPG, no smoke." },
  { q: "Can it cook on cloudy days?", a: "Cooking is best done during sunny hours since there is no battery backup. On cloudy days, output reduces, so cooking may take longer or need to be timed around available sunlight." },
  { q: "Is Green Filament the patent holder?", a: "No. Green Filament is the authorised manufacturer of this patent-granted technology, not the patent holder." },
  { q: "Who is this system suited for?", a: "Homes, anganwadis, schools and community kitchens looking to cut LPG costs and cooking smoke exposure." },
  { q: "How many units are installed so far?", a: "Over 200 units are running across India." },
  { q: "What is the expected lifespan of the system?", a: "The coil-based design is similar to conventional coil heaters, built for long-term daily use with minimal maintenance." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Solar Cooking System - Authorised Manufacturer of Patent-Granted Clean Cooking Solution | Green Filament",
  description: "We are the authorised manufacturer of a patent-granted solar-powered cooking system. Zero LPG, zero smoke, zero fuel cost. Designed for homes, anganwadis, schools, and community kitchens in Odisha. 200+ installations across India.",
  keywords: [
    "solar cooking system",
    "solar powered cooking",
    "clean cooking solution",
    "solar stove India",
    "solar cooking Odisha",
    "zero LPG cooking",
    "authorised manufacturer solar cooking",
    "Green Filament solar cooking",
    "solar energy cooking system",
    "smoke free cooking",
    "solar cooking for schools",
    "solar cooking anganwadi",
  ],
  openGraph: {
    title: "Solar Cooking System — Authorised Manufacturer of a Patent-Granted Cooking Solution | Green Filament",
    description: "We are the authorised manufacturer of a patent-granted solar-powered cooking system. Zero LPG, zero smoke, zero fuel cost. 200+ installations across India.",
    url: "https://greenfilament.com/solar-cooking",
    siteName: "Green Filament",
    images: [
      {
        url: "/images/products/solar-cooking.jpg",
        width: 1200,
        height: 630,
        alt: "Green Filament Solar Cooking System — Authorised Manufacturer of a Patent-Granted Clean Energy Cooking Solution",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Cooking System — Authorised Manufacturer | Green Filament",
    description: "Zero LPG. Zero Smoke. Zero Fuel Cost. We are the authorised manufacturer of this patent-granted solar cooking system.",
    images: ["/images/products/solar-cooking.jpg"],
  },
  alternates: {
    canonical: "https://greenfilament.com/solar-cooking",
  },
};

/* ============================================================
   SPECS DATA
   ============================================================ */
const specs = [
  { label: "Solar Modules", value: "500Wp × 6" },
  { label: "Heating Technology", value: "1500W Coil" },
  { label: "Cooking Capacity", value: "1 Family (8-10 Members)" },
  { label: "System Type", value: "3kW DC System" },
  { label: "Fuel Cost", value: "Zero" },
  { label: "Compatible With", value: "Standard Cooking Pots" },
  { label: "Installation", value: "Portable & Easy" },
  { label: "Patent Status", value: "Patent Granted (Authorised Manufacturer)" },
];

/* ============================================================
   PAGE
   ============================================================ */
export default function SolarCookingPage() {
  return (
    <>
      <Navbar />
      <main>

        <style>{`
          .overview-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 32px; align-items: start; }
          .problem-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; align-items: center; }
          .benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .usecases-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
          .comparison-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .specs-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; }
          @media (max-width: 1024px) { .usecases-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 768px) {
            .overview-grid { grid-template-columns: 1fr; }
            .problem-grid { grid-template-columns: 1fr; }
            .steps-grid { grid-template-columns: 1fr; }
            .benefits-grid { grid-template-columns: 1fr; }
            .usecases-grid { grid-template-columns: repeat(2, 1fr); }
            .comparison-grid { grid-template-columns: 1fr; }
            .specs-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* ============================================================
            HERO
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #c97200 0%, #d4820a 50%, #b36200 100%)", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
            <svg width="100%" height="100%"><defs><pattern id="cooking-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="1.5" fill="white" /></pattern></defs><rect width="100%" height="100%" fill="url(#cooking-dots)" /></svg>
          </div>
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: "-40px", bottom: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Patent badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.15)", border: "0.5px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "5px 14px", borderRadius: "20px", marginBottom: "14px", letterSpacing: "0.5px" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>
              AUTHORISED MANUFACTURER — PATENT-GRANTED TECH
            </div>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.75)", letterSpacing: "1.5px", marginBottom: "10px", fontWeight: 600 }}>SOLAR COOKING SYSTEM</p>
            <h1 style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.15 }}>
              Clean Energy Cooking.<br />Zero LPG. Zero Smoke.
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", maxWidth: "500px", margin: "0 auto 28px", lineHeight: 1.8 }}>
              India&apos;s patent-granted solar cooking solution — engineered for homes, anganwadis, schools, and community kitchens across Odisha.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get a Quote</span>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </div>
              </Link>

              {/* <a href="/images/products/solar-cooking-brochure.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "0.5px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: "14px", fontWeight: 600, padding: "12px 22px", borderRadius: "40px", textDecoration: "none" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Download Brochure
              </a> */}

            </div>
          </div>
        </div>

        {/* ============================================================
            PRODUCT OVERVIEW — image left, specs right
            ============================================================ */}
        <div style={{ background: "#F7F2E9", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div className="overview-grid">
              <div style={{ borderRadius: "16px", overflow: "hidden", border: "0.5px solid #E8E2D8", aspectRatio: "4/3", position: "relative", background: "#e0e0e0" }}>
                <NextImage src="/images/products/solar-cooking.jpg" alt="Solar Cooking System by Green Filament, Authorised Manufacturer of a Patent-Granted Clean Energy Cooking Solution" fill sizes="(max-width: 768px) 100vw, 55vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", top: "16px", left: "16px", background: "#FDB92E", color: "#412402", fontSize: "10px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", zIndex: 1 }}>✦ Authorised Manufacturer</div>
                <div style={{ position: "absolute", bottom: "16px", right: "16px", background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: "10px", fontWeight: 600, padding: "4px 12px", borderRadius: "20px", zIndex: 1 }}>200+ Installed</div>
              </div>
              <div>
                <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Product Overview</div>
                <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px", lineHeight: 1.3 }}>Solar-Powered Clean Cooking Technology</h2>
                <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                  A revolutionary cooking solution powered entirely by the sun. No LPG, no firewood, no smoke, just clean, efficient heat from an innovative coil-based heating system. Compatible with standard cooking pots and designed for daily use by a family of up to 8 to 10 members. Curious how it works without a battery? We break it down in <Link href="/blogs/future-of-solar-cooking-battery-free" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>this article</Link>.
                </p>
                <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #E8E2D8", overflow: "hidden" }}>
                  <div style={{ background: "#FFF3D6", padding: "10px 16px", fontSize: "11px", fontWeight: 700, color: "#854F0B", letterSpacing: "0.5px", borderBottom: "0.5px solid #FAC775" }}>TECHNICAL SPECIFICATIONS</div>
                  <div className="specs-grid">
                    {specs.map((spec, i) => (
                      <div key={spec.label} style={{ padding: "10px 16px", borderBottom: i < specs.length - 2 ? "0.5px solid #F0EBE0" : "none", borderRight: i % 2 === 0 ? "0.5px solid #F0EBE0" : "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "11px", color: "#777" }}>{spec.label}</span>
                        <span style={{ fontSize: "12px", fontWeight: 700, color: spec.value === "Zero" ? "#2d6a2d" : spec.value === "Patent Granted" ? "#F5A000" : "#1a1a1a", textAlign: "right" }}>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            THE PROBLEM — 3 pain points
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FCEBEB", border: "0.5px solid #F7C1C1", color: "#A32D2D", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>The Problem</div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>The Hidden Cost of Traditional Cooking</h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>Millions of families face a daily struggle — expensive LPG, harmful smoke, or no hot meals at all.</p>
            </div>
            <div className="problem-grid">
              {[
                { title: "Rising LPG Costs", stat: "15%", statLabel: "of household income", desc: "Families spend up to 15% of their monthly income on cooking fuel alone — a burden that grows every year as LPG prices keep rising.", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>) },
                { title: "Health Hazards", stat: "4M+", statLabel: "deaths per year", desc: "Indoor air pollution from firewood and kerosene causes over 4 million deaths annually. Women and children are the most affected by respiratory illnesses.", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>) },
                { title: "Energy Insecurity", stat: "Hours", statLabel: "collecting firewood daily", desc: "Firewood dependency, power outages, and unreliable supply chains leave communities without consistent access to clean cooking energy.", icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>) },
              ].map((p) => (
                <div key={p.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #E24B4A", padding: "24px" }}>
                  <div style={{ width: "48px", height: "48px", background: "#FCEBEB", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: "#A32D2D", marginBottom: "14px" }}>{p.icon}</div>
                  <div style={{ fontSize: "32px", fontWeight: 800, color: "#E24B4A", marginBottom: "2px" }}>{p.stat}</div>
                  <div style={{ fontSize: "11px", color: "#aaa", marginBottom: "10px" }}>{p.statLabel}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{p.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify" }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            HOW IT WORKS — 3-step process
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>How It Works</div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Simple Three-Step Process</h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>Sunlight in. Hot meals out. No fuel, no emissions, just clean energy from the sun.</p>
            </div>
            <div className="steps-grid">
              {[
                { step: "01", title: "Solar Panel", desc: "Captures sunlight and converts it to electricity. Six 500Wp solar modules provide ample power for all-day cooking.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>) },
                { step: "02", title: "Charge Controller", desc: "Regulates and optimizes power flow directly from the solar panel to the coil heater ensuring stable, efficient heat output throughout the day.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>) },
                { step: "03", title: "Coil Heater → Cooking", desc: "The 1500W coil heater generates efficient cooking heat compatible with any standard pot. Zero fuel cost. Zero emissions. Zero hassle.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>) },
              ].map((s, i) => (
                <div key={s.step} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "28px 24px", textAlign: "center", position: "relative" }}>
                  {i < 2 && (
                    <div style={{ position: "absolute", right: "-18px", top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "#FFF3D6", border: "0.5px solid #FAC775", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  )}
                  <div style={{ width: "60px", height: "60px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>{s.icon}</div>
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#FDB92E", marginBottom: "6px", letterSpacing: "1px" }}>STEP {s.step}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>{s.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            KEY BENEFITS — 4 cards
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Key Benefits</div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Why Solar Cooking Makes Sense</h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>Technical reliability meets social and environmental impact.</p>
            </div>
            <div className="benefits-grid">
              {[
                { title: "Technical Reliability", desc: "Reliable solar technology with easy maintenance and long lifespan. No complex infrastructure required. Works with standard cooking pots and utensils for seamless adoption.", iconBg: "#FFF3D6", iconColor: "#F5A000", borderColor: "#FDB92E", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>) },
                { title: "Economic Savings", desc: "Eliminates recurring LPG expenses completely after a one-time investment. Families save thousands of rupees annually with zero monthly fuel bills.", iconBg: "#d1fae5", iconColor: "#065f46", borderColor: "#2d6a2d", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>) },
                { title: "Social Impact", desc: "Improves health outcomes by eliminating harmful smoke. Frees women from hours of firewood collection. Empowers communities with safe, dignified access to clean cooking energy.", iconBg: "#ede9fe", iconColor: "#6d28d9", borderColor: "#6d28d9", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
                { title: "Environmental", desc: "Zero emissions cooking that helps reduce deforestation and carbon footprint. Every solar cooking system prevents tonnes of CO2 from entering the atmosphere each year.", iconBg: "#d1fae5", iconColor: "#065f46", borderColor: "#065f46", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4.97-4.97 8-8.63 8-12A8 8 0 0 0 4 10c0 3.37 3.03 7.03 8 12z" /><circle cx="12" cy="10" r="3" /></svg>) },
              ].map((b) => (
                <div key={b.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: `3px solid ${b.borderColor}`, padding: "24px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", background: b.iconBg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", color: b.iconColor, flexShrink: 0 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{b.title}</div>
                    <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify" }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            USE CASES — 5 cards
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Use Cases</div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Where It Makes an Impact</h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>Our solar cooking solution adapts to diverse contexts — from single homes to community kitchens.</p>
            </div>
            <div className="usecases-grid">
              {[
                { title: "Rural Households", desc: "Daily cooking for a family of 8 to 10 members. Replaces LPG and firewood completely.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>) },
                { title: "Anganwadis", desc: "Clean meal preparation for childcare centres. Safe for indoor use with no smoke.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>) },
                { title: "Schools", desc: "Mid-day meal programs powered by the sun. Consistent cooking energy every school day.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>) },
                { title: "Tribal Communities", desc: "Remote area energy access where grid and LPG supply are unreliable or unavailable.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>) },
                { title: "Community Kitchens", desc: "Large-scale meal preparation for hostels, ashrams, and community events.", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>) },
              ].map((u) => (
                <div key={u.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "20px", textAlign: "center" }}>
                  <div style={{ width: "52px", height: "52px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>{u.icon}</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{u.title}</div>
                  <div style={{ fontSize: "11px", color: "#777", lineHeight: 1.65 }}>{u.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            COST COMPARISON — LPG vs Firewood vs Solar
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Cost Comparison</div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>LPG vs Firewood vs Solar Cooking</h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>Solar cooking eliminates recurring fuel expenses. A one-time investment with lifetime savings.</p>
            </div>
            <div className="comparison-grid">

              {/* LPG */}
              <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #F7C1C1", borderTop: "3px solid #E24B4A", padding: "24px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#A32D2D", letterSpacing: "1px", marginBottom: "12px" }}>LPG</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[{ label: "Monthly Fuel Cost", value: "₹800–1200" }, { label: "Health Risk", value: "High" }, { label: "Smoke", value: "Yes" }, { label: "Supply Reliability", value: "Dependent" }, { label: "Long-term Cost", value: "Rising" }].map((r) => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                      <span style={{ color: "#777" }}>{r.label}</span>
                      <span style={{ fontWeight: 700, color: "#E24B4A" }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Firewood */}
              <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #F7C1C1", borderTop: "3px solid #E24B4A", padding: "24px" }}>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#A32D2D", letterSpacing: "1px", marginBottom: "12px" }}>FIREWOOD</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[{ label: "Monthly Fuel Cost", value: "Time-Intensive" }, { label: "Health Risk", value: "Very High" }, { label: "Smoke", value: "Heavy" }, { label: "Supply Reliability", value: "Unreliable" }, { label: "Long-term Cost", value: "Hidden" }].map((r) => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                      <span style={{ color: "#777" }}>{r.label}</span>
                      <span style={{ fontWeight: 700, color: "#E24B4A" }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solar — Best Choice */}
              <div style={{ background: "#fff", borderRadius: "14px", border: "2px solid #FDB92E", borderTop: "3px solid #2d6a2d", padding: "24px", position: "relative" }}>
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "#FDB92E", color: "#412402", fontSize: "10px", fontWeight: 700, padding: "3px 14px", borderRadius: "20px", whiteSpace: "nowrap" }}>✦ Best Choice</div>
                <div style={{ fontSize: "11px", fontWeight: 700, color: "#065f46", letterSpacing: "1px", marginBottom: "12px" }}>SOLAR COOKING</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {[{ label: "Monthly Fuel Cost", value: "Zero" }, { label: "Health Risk", value: "None" }, { label: "Smoke", value: "Zero" }, { label: "Supply Reliability", value: "Always On" }, { label: "Long-term Cost", value: "Savings" }].map((r) => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                      <span style={{ color: "#777" }}>{r.label}</span>
                      <span style={{ fontWeight: 700, color: "#2d6a2d" }}>{r.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================
            FAQ
            ============================================================ */}
        <FaqSchema faqs={solarCookingFaqs} />
        <FaqAccordion faqs={solarCookingFaqs} />

        {/* ============================================================
            CTA BANNER
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)", padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
            <svg width="100%" height="100%"><defs><pattern id="cta-cooking" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-cooking)" /></svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>Ready to Cook with Sunlight?</h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>Get a free demo and custom quote for your home, school, or institution.</p>
            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get Free Demo</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
              </div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
