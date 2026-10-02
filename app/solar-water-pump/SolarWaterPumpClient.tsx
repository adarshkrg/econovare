/* ============================================================
   SOLAR WATER PUMP — CLIENT COMPONENT
   /solar-water-pump/SolarWaterPumpClient.tsx
   - Matches solar-street-lighting design exactly
   - useState for: applicationStep, processStep, faqOpen
   - Desktop: grid layouts
   - Mobile: arrow + dot swipers + FAQ accordion
   ============================================================ */

"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   APPLICATIONS DATA
   ============================================================ */
const applications = [
    {
        title: "Agricultural Irrigation",
        desc: "Reliable water supply for fields and crops using clean solar energy with zero electricity cost.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12M12 12C12 7 7 3 2 3c0 5 4 9 10 9zM12 12c0-5 5-9 10-9-1 5-5 9-10 9z" />
            </svg>
        ),
    },
    {
        title: "Borewell Pumping",
        desc: "Deep borewell water extraction powered by solar with submersible pump systems.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22" />
                <path d="M8 6l4-4 4 4M8 18l4 4 4-4" />
            </svg>
        ),
    },
    {
        title: "Drip Irrigation",
        desc: "Precision drip irrigation systems powered by solar for water-efficient crop cultivation.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
        ),
    },
    {
        title: "Farmhouses &amp; Gardens",
        desc: "Clean and affordable water supply for farmhouses, gardens, and residential plots.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        title: "Livestock Water Supply",
        desc: "Uninterrupted water access for cattle and livestock in remote farm locations.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    },
    {
        title: "Community Water Systems",
        desc: "Solar-powered community and commercial water supply for villages and institutions.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
];

/* ============================================================
   PROCESS STEPS DATA
   ============================================================ */
const processSteps = [
    {
        step: "01",
        title: "Requirement Analysis",
        desc: "We evaluate water depth, daily discharge requirement, land size, and intended application to understand your exact needs.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
        ),
    },
    {
        step: "02",
        title: "Site Survey",
        desc: "Our team visits your site to assess borewell depth, solar irradiance, and installation conditions firsthand.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        step: "03",
        title: "System Design",
        desc: "We design a customised solar pump system — selecting panel capacity, pump type, controller, and mounting based on site data.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
            </svg>
        ),
    },
    {
        step: "04",
        title: "Installation",
        desc: "Professional installation of solar panels, pump, wiring, and controller by our certified field team.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        step: "05",
        title: "Testing &amp; Support",
        desc: "Full system testing and handover with operational training. Ongoing after-sales support for long-term reliability.",
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        ),
    },
];

/* ============================================================
   FAQ DATA
   ============================================================ */
const faqs = [
    {
        q: "How does a solar water pump work?",
        a: "A solar water pump uses electricity generated from solar panels to operate the pump motor and lift water from a borewell, pond, or any water source.",
    },
    {
        q: "Can a solar pump work without electricity?",
        a: "Yes. Solar pumps run using sunlight and do not require grid electricity. Some systems can also be connected with hybrid power options for backup.",
    },
    {
        q: "Which is better: surface pump or submersible pump?",
        a: "A surface pump is suitable for shallow water sources like ponds and tanks. A submersible pump is ideal for deep borewells and underground water extraction.",
    },
    {
        q: "How much water can a solar pump provide?",
        a: "Water output depends on pump capacity, bore depth, sunlight availability, and system size. Our team will calculate the right capacity for your requirement.",
    },
    {
        q: "Does a solar water pump work on cloudy days?",
        a: "Yes, but with reduced performance due to lower sunlight intensity. Systems can be designed with battery backup or hybrid options for consistent supply.",
    },
    {
        q: "What maintenance is required?",
        a: "Solar pumps require minimal maintenance. Regular cleaning of solar panels and periodic system checks are generally sufficient.",
    },
    {
        q: "Is subsidy available for solar pumps?",
        a: "Yes. In Odisha, solar water pumps qualify for subsidy under PM Kusum Yojana, with up to 90% support under Soura Jalanidhi. See our PM Kusum Odisha page for full eligibility and how to apply.",
    },
    {
        q: "How do I choose the right solar pump?",
        a: "The right pump depends on water depth, daily water requirement, land size, and application. Our team conducts a full site assessment to recommend the best option.",
    },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function SolarWaterPumpClient() {

    const [applicationStep, setApplicationStep] = useState(0);
    const [processStep,     setProcessStep]     = useState(0);
    const [faqOpen,         setFaqOpen]         = useState<number | null>(null);

    return (
        <>
            <Navbar />
            <main>

                <style>{`
                    /* Shared grid utilities */
                    .pump-stats-grid        { display: grid; grid-template-columns: repeat(4, 1fr); }
                    .pump-types-grid        { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
                    .pump-specs-grid        { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
                    .pump-why-grid          { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
                    .pump-process-desktop   { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
                    .pump-process-mobile    { display: none; }
                    .pump-app-grid-desktop  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
                    .pump-app-slider-mobile { display: none; }
                    .pump-why-grid-desktop  { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
                    .pump-cta-btn           { display: flex; justify-content: flex-start; }

                    /* Tablet */
                    @media (max-width: 1024px) {
                        .pump-types-grid    { grid-template-columns: 1fr 1fr; }
                        .pump-process-desktop { grid-template-columns: repeat(3, 1fr); }
                    }
                    /* Mobile */
                    @media (max-width: 768px) {
                        .pump-stats-grid        { grid-template-columns: repeat(2, 1fr); }
                        .pump-types-grid        { grid-template-columns: 1fr; }
                        .pump-why-grid          { grid-template-columns: repeat(2, 1fr); }
                        .pump-process-desktop   { display: none; }
                        .pump-process-mobile    { display: block; }
                        .pump-app-grid-desktop  { display: none; }
                        .pump-app-slider-mobile { display: block; }
                        .pump-why-grid-desktop  { grid-template-columns: repeat(2, 1fr); }
                        .pump-cta-btn           { justify-content: center; }
                    }
                `}</style>

                {/* ============================================================
                    HERO — amber gradient + dot grid
                    ============================================================ */}
                <div style={{
                    background: "linear-gradient(135deg, #c97200 0%, #d4820a 50%, #b36200 100%)",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    {/* Dot grid */}
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="pump-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                                    <circle cx="12" cy="12" r="1.5" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#pump-dots)" />
                        </svg>
                    </div>

                    {/* Glow circles */}
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", left: "-40px", bottom: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        {/* Badge */}
                        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", border: "0.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px", letterSpacing: "1px" }}>
                            SOLAR WATER PUMP
                        </div>

                        {/* H1 */}
                        <h1 style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.15 }}>
                            Smart Water Pumping<br />Powered by the Sun
                        </h1>

                        {/* Subtitle */}
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", maxWidth: "560px", margin: "0 auto 28px", lineHeight: 1.8 }}>
                            Reduce electricity costs and ensure uninterrupted water supply with efficient solar water pumping systems. Designed for farms, borewells, irrigation, and water supply applications across Odisha.
                        </p>

                        {/* Buttons */}
                        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get Free Consultation</span>
                                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                </div>
                            </Link>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "1.5px solid #fff", color: "#fff", fontSize: "14px", fontWeight: 600, padding: "12px 22px", borderRadius: "40px", textDecoration: "none" }}>
                                Talk to Expert
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    STATS BAR
                    ============================================================ */}
                <div style={{ background: "#F7F2E9", padding: "clamp(24px, 4vw, 40px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", overflow: "hidden" }}>
                            <div className="pump-stats-grid">
                                {[
                                    { value: "500+",    label: "Pumps Installed" },
                                    { value: "Zero",    label: "Electricity Cost", green: true },
                                    { value: "3 Types", label: "Pump Systems" },
                                    { value: "Govt",    label: "Subsidy Available" },
                                ].map((stat, i) => (
                                    <div key={stat.label} style={{ textAlign: "center", padding: "clamp(16px, 2vw, 24px) 16px", borderRight: i < 3 ? "0.5px solid #E8E2D8" : "none" }}>
                                        <div style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 800, color: stat.green ? "#2d6a2d" : "#FDB92E" }}>{stat.value}</div>
                                        <div style={{ fontSize: "11px", color: "#777", marginTop: "4px" }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    PUMP TYPES — 3 cards
                    ============================================================ */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Our Products</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Types of Solar Water Pumps</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                Choose the right pump system based on your water source, depth, and application.
                            </p>
                        </div>

                        <div className="pump-types-grid">

                            {/* Surface Pump */}
                            <div style={{ background: "#fff", borderRadius: "14px", border: "2px solid #FDB92E", borderTop: "3px solid #FDB92E", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column" }}>
                                <div style={{ position: "absolute", top: "-1px", right: "20px", background: "#FDB92E", color: "#412402", fontSize: "10px", fontWeight: 700, padding: "4px 14px", borderRadius: "0 0 8px 8px" }}>
                                    &#10022; Most Popular
                                </div>
                                <div style={{ padding: "28px 24px 0" , flex: 1}}>
                                    <div style={{ width: "52px", height: "52px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4" />
                                        </svg>
                                    </div>
                                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#854F0B", letterSpacing: "1px", marginBottom: "6px" }}>SURFACE SOLAR PUMP</p>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>Surface Solar Pump</h3>
                                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                                        Suitable for ponds, rivers, open tanks, and shallow water sources. Installed above ground for easy access and maintenance. Ideal for small farms and garden irrigation.
                                    </p>
                                    <div style={{ background: "#FAFAFA", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
                                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#854F0B", letterSpacing: "0.5px", marginBottom: "12px" }}>BEST SUITED FOR</div>
                                        <div className="pump-specs-grid">
                                            {[
                                                { label: "Water Source",  value: "Ponds, Rivers, Tanks" },
                                                { label: "Depth",         value: "Shallow (up to 8m)" },
                                                { label: "Installation",  value: "Above Ground" },
                                                { label: "Maintenance",   value: "Easy Access" },
                                                { label: "Applications",  value: "Farm, Garden, Livestock" },
                                                { label: "Power Type",    value: "DC Solar" },
                                            ].map((spec) => (
                                                <div key={spec.label} style={{ paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                                                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>{spec.label}</div>
                                                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ background: "#d1fae5", borderTop: "0.5px solid #a7f3d0", padding: "14px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
                                    <div style={{ width: "32px", height: "32px", background: "#065f46", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#065f46" }}>No Grid Required</div>
                                        <div style={{ fontSize: "11px", color: "#047857", marginTop: "2px" }}>Runs entirely on solar power — even in remote locations.</div>
                                    </div>
                                </div>
                                <div style={{ padding: "16px 24px" }}>
                                    <Link href="/connect" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#FDB92E", color: "#412402", fontSize: "13px", fontWeight: 700, padding: "12px", borderRadius: "8px", textDecoration: "none" }}>
                                        Get Quote for Surface Pump &#8594;
                                    </Link>
                                </div>
                            </div>

                            {/* Submersible Pump */}
                            <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #1a4a8a", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ padding: "28px 24px 0", flex: 1 }}>
                                    <div style={{ width: "52px", height: "52px", background: "#e8f0fe", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="12" y1="2" x2="12" y2="22" />
                                            <polyline points="17 7 12 2 7 7" />
                                            <polyline points="17 17 12 22 7 17" />
                                        </svg>
                                    </div>
                                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a4a8a", letterSpacing: "1px", marginBottom: "6px" }}>SUBMERSIBLE SOLAR PUMP</p>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>Submersible Solar Pump</h3>
                                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                                        Ideal for deep borewells and underground water extraction. The pump is submerged directly into the water source, ensuring higher pressure and efficient water lifting from greater depths.
                                    </p>
                                    <div style={{ background: "#FAFAFA", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
                                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a4a8a", letterSpacing: "0.5px", marginBottom: "12px" }}>BEST SUITED FOR</div>
                                        <div className="pump-specs-grid">
                                            {[
                                                { label: "Water Source",  value: "Deep Borewells" },
                                                { label: "Depth",         value: "Deep (10m+)" },
                                                { label: "Installation",  value: "Submerged in Bore" },
                                                { label: "Pressure",      value: "High Discharge" },
                                                { label: "Applications",  value: "Agriculture, Domestic" },
                                                { label: "Power Type",    value: "AC/DC Solar" },
                                            ].map((spec) => (
                                                <div key={spec.label} style={{ paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                                                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>{spec.label}</div>
                                                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ background: "#FFF8E7", borderTop: "0.5px solid #FAC775", padding: "14px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
                                    <div style={{ width: "32px", height: "32px", background: "#FDB92E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#854F0B" }}>Professional Installation Included</div>
                                        <div style={{ fontSize: "11px", color: "#92400e", marginTop: "2px" }}>Certified team handles full borewell pump setup and commissioning.</div>
                                    </div>
                                </div>
                                <div style={{ padding: "16px 24px" }}>
                                    <Link href="/connect" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#1a4a8a", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "12px", borderRadius: "8px", textDecoration: "none" }}>
                                        Get Quote for Submersible Pump &#8594;
                                    </Link>
                                </div>
                            </div>

                            {/* AC/DC System */}
                            <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #2d6a2d", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ padding: "28px 24px 0", flex: 1 }}>
                                    <div style={{ width: "52px", height: "52px", background: "#d1fae5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d6a2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="3" />
                                            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                                        </svg>
                                    </div>
                                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#2d6a2d", letterSpacing: "1px", marginBottom: "6px" }}>AC/DC SOLAR PUMP SYSTEM</p>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>AC/DC Solar Pump System</h3>
                                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                                        Flexible solar pump systems customized for your specific project requirements and usage pattern. Supports both AC and DC motor configurations with optional grid backup for maximum versatility.
                                    </p>
                                    <div style={{ background: "#FAFAFA", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
                                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#2d6a2d", letterSpacing: "0.5px", marginBottom: "12px" }}>BEST SUITED FOR</div>
                                        <div className="pump-specs-grid">
                                            {[
                                                { label: "Configuration",  value: "AC or DC Motor" },
                                                { label: "Backup",         value: "Grid / Battery Option" },
                                                { label: "Flexibility",    value: "Fully Customized" },
                                                { label: "Scale",          value: "Small to Large" },
                                                { label: "Applications",   value: "Commercial, Community" },
                                                { label: "Subsidy",        value: "Govt Scheme Eligible" },
                                            ].map((spec) => (
                                                <div key={spec.label} style={{ paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                                                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>{spec.label}</div>
                                                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ background: "#f0fdf4", borderTop: "0.5px solid #bbf7d0", padding: "14px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
                                    <div style={{ width: "32px", height: "32px", background: "#2d6a2d", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#2d6a2d" }}>Govt Scheme Eligible</div>
                                        <div style={{ fontSize: "11px", color: "#166534", marginTop: "2px" }}>May qualify for PM-KUSUM and state-level solar pump subsidies.</div>
                                    </div>
                                </div>
                                <div style={{ padding: "16px 24px" }}>
                                    <Link href="/connect" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#2d6a2d", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "12px", borderRadius: "8px", textDecoration: "none" }}>
                                        Enquire About AC/DC System &#8594;
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ============================================================
                    WHY CHOOSE SOLAR PUMP — checklist + CTA
                    ============================================================ */}
                <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #E8E2D8", padding: "clamp(32px, 4vw, 52px)" }}>
                            <div className="pump-why-solar-grid">

                                {/* Left */}
                                <div>
                                    <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                                        Why Go Solar
                                    </div>
                                    <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "12px", lineHeight: 1.3 }}>
                                        Why Choose a Solar Pump?
                                    </h2>
                                    <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.8, marginBottom: "0", textAlign: "justify" }}>
                                        Solar-powered pumping eliminates electricity bills, works in areas with no grid access, and delivers reliable long-term water supply with minimal maintenance.
                                    </p>
                                </div>

                                {/* Right — checklist */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {[
                                        "Zero Electricity Cost — operates entirely on solar energy",
                                        "Works in Remote Areas — no grid dependency",
                                        "Low Maintenance — durable with long operational life",
                                        "High Efficiency — optimized for maximum water output",
                                        "Environment Friendly — no fuel, no pollution",
                                        "Long-Term Savings — one-time investment, lifetime returns",
                                    ].map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", background: "#FAFAFA", borderRadius: "8px", padding: "12px 16px" }}>
                                            <div style={{ width: "22px", height: "22px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </div>
                                            <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a1a1a" }}>{item}</span>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        <div className="pump-cta-btn" style={{ marginTop: "24px" }}>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#FDB92E", borderRadius: "40px", padding: "10px 10px 10px 24px", textDecoration: "none", boxShadow: "0 4px 16px rgba(253,185,46,0.3)" }}>
                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#412402", marginRight: "12px" }}>Get Free Site Assessment</span>
                                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    PM KUSUM SUBSIDY CALLOUT
                    ============================================================ */}
                <div style={{ background: "#ffffff", padding: "0 clamp(24px, 5vw, 80px) clamp(48px, 7vw, 80px)" }}>
                    <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                        <div style={{ background: "#FFF3D6", borderLeft: "3px solid #F5A000", borderRadius: "0 10px 10px 0", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                            <p style={{ fontSize: "15px", color: "#412402", fontWeight: 500, lineHeight: 1.7, margin: 0, flex: 1, minWidth: "220px" }}>
                                Looking for subsidy details on solar water pumps in Odisha? Check eligibility and savings under PM Kusum Yojana.
                            </p>
                            <Link href="/pm-kusum-odisha" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FDB92E", color: "#412402", fontSize: "13px", fontWeight: 700, padding: "10px 18px", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
                                Check PM Kusum Subsidy →
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    APPLICATIONS — desktop grid + mobile swiper
                    ============================================================ */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Applications</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Where Our Solar Pumps Work</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                From paddy fields to community water systems — our solar pumps are built for every application.
                            </p>
                        </div>

                        {/* Desktop grid */}
                        <div className="pump-app-grid-desktop">
                            {applications.map((a) => (
                                <div key={a.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "28px 20px", textAlign: "center" }}>
                                    <div style={{ width: "52px", height: "52px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>{a.icon}</div>
                                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }} dangerouslySetInnerHTML={{ __html: a.title }} />
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>{a.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile swiper */}
                        <div className="pump-app-slider-mobile">
                            <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "32px 24px", textAlign: "center" }}>
                                <div style={{ width: "64px", height: "64px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    {applications[applicationStep].icon}
                                </div>
                                <div style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: applications[applicationStep].title }} />
                                <div style={{ fontSize: "14px", color: "#777", lineHeight: 1.75 }}>{applications[applicationStep].desc}</div>
                            </div>
                            {/* Arrows + dots */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
                                <button onClick={() => setApplicationStep(Math.max(0, applicationStep - 1))} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                </button>
                                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                    {applications.map((_, i) => (
                                        <div key={i} onClick={() => setApplicationStep(i)} style={{ width: i === applicationStep ? "18px" : "8px", height: "8px", borderRadius: "20px", background: i === applicationStep ? "#FDB92E" : "#E8E2D8", transition: "all 0.3s", cursor: "pointer" }} />
                                    ))}
                                </div>
                                <button onClick={() => setApplicationStep(Math.min(applications.length - 1, applicationStep + 1))} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ============================================================
                    WHY GREEN FILAMENT — 6 trust points
                    ============================================================ */}
                <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Why Green Filament</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>The Solar Pump Partner You Can Trust</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                End-to-end solar pump solutions — from design to installation to after-sales support.
                            </p>
                        </div>

                        <div className="pump-why-grid-desktop">
                            {[
                                { title: "Customized System Design",     desc: "Every pump system is designed based on your site conditions, water depth, and daily requirement.", iconBg: "#FFF3D6", iconColor: "#F5A000", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>) },
                                { title: "Quality Solar Components",     desc: "We use high-efficiency solar panels and durable pump systems from trusted manufacturers.", iconBg: "#FFF3D6", iconColor: "#F5A000", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>) },
                                { title: "Professional Installation",    desc: "Certified engineers handle complete installation — from panel mounting to pump commissioning.", iconBg: "#d1fae5", iconColor: "#065f46", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>) },
                                { title: "Reliable After-Sales Support", desc: "Our team provides ongoing support and rapid response for any maintenance or service needs.", iconBg: "#e0f7fa", iconColor: "#0e7490", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.25-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" /></svg>) },
                                { title: "Competitive Pricing",          desc: "Transparent, value-for-money pricing with no hidden costs. Custom quotes for every project.", iconBg: "#FFF3D6", iconColor: "#F5A000", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>) },
                                { title: "End-to-End Assistance",        desc: "From site assessment and system design to subsidy processing and post-installation support.", iconBg: "#d1fae5", iconColor: "#065f46", icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>) },
                            ].map((w) => (
                                <div key={w.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "24px", textAlign: "center" }}>
                                    <div style={{ width: "52px", height: "52px", background: w.iconBg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: w.iconColor }}>{w.icon}</div>
                                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{w.title}</div>
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>{w.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    INSTALLATION PROCESS — desktop grid + mobile swiper
                    ============================================================ */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Our Process</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Simple. Professional. Transparent.</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>From first consultation to final handover — here is exactly how we work.</p>
                        </div>

                        {/* Desktop grid */}
                        <div className="pump-process-desktop">
                            {processSteps.map((s) => (
                                <div key={s.step} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "28px 20px", textAlign: "center" }}>
                                    <div style={{ width: "60px", height: "60px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>{s.icon}</div>
                                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#FDB92E", marginBottom: "6px", letterSpacing: "1px" }}>STEP {s.step}</div>
                                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }} dangerouslySetInnerHTML={{ __html: s.title }} />
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>{s.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile swiper */}
                        <div className="pump-process-mobile">
                            <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "32px 24px", textAlign: "center" }}>
                                <div style={{ width: "64px", height: "64px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    {processSteps[processStep].icon}
                                </div>
                                <div style={{ fontSize: "11px", fontWeight: 700, color: "#FDB92E", marginBottom: "8px", letterSpacing: "1px" }}>STEP {processSteps[processStep].step}</div>
                                <div style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }} dangerouslySetInnerHTML={{ __html: processSteps[processStep].title }} />
                                <div style={{ fontSize: "14px", color: "#777", lineHeight: 1.75 }}>{processSteps[processStep].desc}</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
                                <button onClick={() => setProcessStep(Math.max(0, processStep - 1))} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                </button>
                                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                    {processSteps.map((_, i) => (
                                        <div key={i} onClick={() => setProcessStep(i)} style={{ width: i === processStep ? "18px" : "8px", height: "8px", borderRadius: "20px", background: i === processStep ? "#FDB92E" : "#E8E2D8", transition: "all 0.3s", cursor: "pointer" }} />
                                    ))}
                                </div>
                                <button onClick={() => setProcessStep(Math.min(processSteps.length - 1, processStep + 1))} style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ============================================================
                    FAQ
                    ============================================================ */}
                <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>FAQ</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Frequently Asked Questions</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>Everything you need to know about solar water pumps.</p>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #E8E2D8", overflow: "hidden", transition: "box-shadow 0.2s", boxShadow: faqOpen === i ? "0 4px 16px rgba(253,185,46,0.12)" : "none" }}
                                >
                                    <button
                                        onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "12px" }}
                                    >
                                        <span style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.4 }}>{faq.q}</span>
                                        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: faqOpen === i ? "#FDB92E" : "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.3s" }}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={faqOpen === i ? "#fff" : "#F5A000"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                {faqOpen === i
                                                    ? <polyline points="18 15 12 9 6 15" />
                                                    : <polyline points="6 9 12 15 18 9" />
                                                }
                                            </svg>
                                        </div>
                                    </button>
                                    {faqOpen === i && (
                                        <div style={{ padding: "0 20px 18px", fontSize: "13px", color: "#555", lineHeight: 1.8, borderTop: "0.5px solid #F0EBE0", paddingTop: "14px" }}>
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    CTA BANNER
                    ============================================================ */}
                <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)", padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="cta-pump" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#cta-pump)" />
                        </svg>
                    </div>
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                            Looking for the Right Solar Pump?
                        </h2>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px", maxWidth: "500px", margin: "0 auto 24px" }}>
                            Contact us today for expert guidance and a customized quotation based on your water requirement and site conditions.
                        </p>
                        <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get Free Consultation</span>
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