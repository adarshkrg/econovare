/* ============================================================
   SOLAR STREET LIGHTING — CLIENT COMPONENT
   /products/solar-street-lighting/SolarStreetLightingClient.tsx
   - Handles all interactivity: useCaseStep swiper, FAQ accordion
   - Desktop: grid layout for use cases
   - Mobile: arrow + dot swiper for use cases
   ============================================================ */

"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   USE CASES DATA
   ============================================================ */
const useCases = [
    {
        title: "Villages",
        desc: "Safe, well-lit roads every night. Zero electricity cost for the community.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        title: "Rural Roads",
        desc: "Highway and rural road lighting where grid connection is unavailable.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 17l6-12 6 12M9 9h6M3 17h18" />
            </svg>
        ),
    },
    {
        title: "Gram Panchayats",
        desc: "Govt scheme eligible. Easy bulk procurement for panchayat areas.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
        ),
    },
    {
        title: "Campuses",
        desc: "Schools, colleges, and institutional campuses with round-the-clock lighting.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
        ),
    },
    {
        title: "Community Areas",
        desc: "Parks, public squares, religious sites, and community gathering spaces.",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
];

/* ============================================================
   COMPONENT
   ============================================================ */
export default function SolarStreetLightingClient() {

    /* State for use cases mobile swiper + FAQ accordion */
    const [useCaseStep, setUseCaseStep] = useState(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            <Navbar />
            <main>

                <style>{`
                    .stats-grid         { display: grid; grid-template-columns: repeat(4, 1fr); }
                    .products-grid      { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
                    .product-specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; }
                    .why-grid           { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
                    .case-study-specs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
                    .case-study-photos-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }

                    /* Use cases — desktop grid / mobile swiper toggle */
                    .usecases-grid-desktop { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
                    .usecases-slider-mobile { display: none; }

                    /* Custom order grid */
                    .custom-order-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }

                    /* CTA button wrapper */
                    .cta-btn-wrapper { display: flex; justify-content: flex-start; }

                    @media (max-width: 1024px) {
                        .why-grid { grid-template-columns: repeat(2, 1fr); }
                    }
                    @media (max-width: 768px) {
                        .stats-grid             { grid-template-columns: repeat(2, 1fr); }
                        .products-grid          { grid-template-columns: 1fr; }
                        .why-grid               { grid-template-columns: repeat(2, 1fr); }
                        .usecases-grid-desktop  { display: none; }
                        .usecases-slider-mobile { display: block; }
                        .custom-order-grid      { grid-template-columns: 1fr; gap: 28px; }
                        .cta-btn-wrapper        { justify-content: center; }
                        .case-study-specs-grid  { grid-template-columns: repeat(2, 1fr); }
                        .case-study-photos-grid { grid-template-columns: 1fr; }
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
                                <pattern id="sl-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                                    <circle cx="12" cy="12" r="1.5" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#sl-dots)" />
                        </svg>
                    </div>

                    {/* Glow circles */}
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", left: "-40px", bottom: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        {/* Badge */}
                        <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", border: "0.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px", letterSpacing: "1px" }}>
                            SOLAR STREET LIGHTING
                        </div>

                        {/* H1 — primary keyword */}
                        <h1 style={{ fontSize: "clamp(28px, 4.5vw, 52px)", fontWeight: 700, color: "#fff", marginBottom: "10px", lineHeight: 1.15 }}>
                            Solar Street Light Manufacturer in Bhubaneswar, Odisha
                        </h1>

                        {/* Tagline */}
                        <p style={{ fontSize: "16px", fontWeight: 600, color: "#fff", marginBottom: "14px" }}>
                            Lighting Every Road. Powering Every Village.
                        </p>

                        {/* Subtitle */}
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", maxWidth: "500px", margin: "0 auto 28px", lineHeight: 1.8 }}>
                            10,000+ units installed across Odisha. Zero complaints on non-integrated units. Dusk to dawn automatic operation — built to last.
                        </p>

                        {/* Buttons — side by side, no wrap */}
                        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get a Quote</span>
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
                            <div className="stats-grid">
                                {[
                                    { value: "10,000+", label: "Units Installed" },
                                    { value: "Zero", label: "Complaints (Non-Int.)", green: true },
                                    { value: "2 Types", label: "Available" },
                                    { value: "Dusk\u2013Dawn", label: "Auto Operation" },
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
                    PRODUCTS — Non-Integrated + Semi-Integrated
                    ============================================================ */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        {/* Section header */}
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Our Products</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Two Proven Solar Street Light Systems</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>Choose the right system for your site, budget, and requirements.</p>
                        </div>

                        <div className="products-grid">

                            {/* ---- Product 1: Non-Integrated (Flagship) ---- */}
                            <div style={{ background: "#fff", borderRadius: "14px", border: "2px solid #FDB92E", borderTop: "3px solid #FDB92E", overflow: "hidden", position: "relative" }}>
                                {/* Flagship badge */}
                                <div style={{ position: "absolute", top: "-1px", right: "20px", background: "#FDB92E", color: "#412402", fontSize: "10px", fontWeight: 700, padding: "4px 14px", borderRadius: "0 0 8px 8px" }}>
                                    &#10022; Our Flagship
                                </div>

                                <div style={{ padding: "28px 24px 0" }}>
                                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#854F0B", letterSpacing: "1px", marginBottom: "6px" }}>NON-INTEGRATED</p>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>Solar Street Light</h3>
                                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                                        Separate solar panel, battery unit, and LED light fixture. The most durable and easiest to maintain design — each component can be serviced or replaced independently, making it the preferred choice for long-term reliability.
                                    </p>

                                    {/* Specs */}
                                    <div style={{ background: "#FAFAFA", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
                                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#854F0B", letterSpacing: "0.5px", marginBottom: "12px" }}>SPECIFICATIONS</div>
                                        <div className="product-specs-grid">
                                            {[
                                                { label: "Wattage Options", value: "30W \u00b7 45W \u00b7 60W \u00b7 90W" },
                                                { label: "Battery Type", value: "SMF" },
                                                { label: "Pole Height", value: "6 Metres" },
                                                { label: "Operation", value: "Dusk to Dawn" },
                                                { label: "For", value: "Villages, GPs, Govt, Private" },
                                                { label: "Maintenance", value: "Component-level" },
                                            ].map((spec) => (
                                                <div key={spec.label} style={{ paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                                                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>{spec.label}</div>
                                                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Zero complaints strip */}
                                <div style={{ background: "#d1fae5", borderTop: "0.5px solid #a7f3d0", padding: "14px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
                                    <div style={{ width: "32px", height: "32px", background: "#065f46", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#065f46" }}>10,000+ Units. Zero Complaints.</div>
                                        <div style={{ fontSize: "11px", color: "#047857", marginTop: "2px" }}>Guaranteed performance across every installation.</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div style={{ padding: "16px 24px" }}>
                                    <Link href="/connect" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#FDB92E", color: "#412402", fontSize: "13px", fontWeight: 700, padding: "12px", borderRadius: "8px", textDecoration: "none" }}>
                                        Get Quote for Non-Integrated &#8594;
                                    </Link>
                                </div>
                            </div>

                            {/* ---- Product 2: Semi-Integrated ---- */}
                            <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #1a4a8a", overflow: "hidden" }}>
                                <div style={{ padding: "28px 24px 0" }}>
                                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#1a4a8a", letterSpacing: "1px", marginBottom: "6px" }}>SEMI-INTEGRATED</p>
                                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>Solar Street Light</h3>
                                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.8, marginBottom: "20px", textAlign: "justify" }}>
                                        A compact, modern design with the panel mounted on top and electronics integrated into the fixture. Equipped with premium LiFePO4 batteries for higher energy density and a wider wattage range — ideal for villages and gram panchayats wanting a sleek, space-saving solution.
                                    </p>

                                    {/* Specs */}
                                    <div style={{ background: "#FAFAFA", borderRadius: "10px", padding: "16px", marginBottom: "20px" }}>
                                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a4a8a", letterSpacing: "0.5px", marginBottom: "12px" }}>SPECIFICATIONS</div>
                                        <div className="product-specs-grid">
                                            {[
                                                { label: "Wattage Options", value: "20W \u00b7 24W \u00b7 30W \u00b7 45W \u00b7 60W \u00b7 90W" },
                                                { label: "Battery Type", value: "LiFePO4 (Lithium)" },
                                                { label: "Pole Height", value: "6 Metres" },
                                                { label: "Operation", value: "Dusk to Dawn" },
                                                { label: "For", value: "Villages, Gram Panchayats" },
                                                { label: "Design", value: "Compact All-in-one" },
                                            ].map((spec) => (
                                                <div key={spec.label} style={{ paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                                                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>{spec.label}</div>
                                                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Service note strip */}
                                <div style={{ background: "#FFF8E7", borderTop: "0.5px solid #FAC775", padding: "14px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
                                    <div style={{ width: "32px", height: "32px", background: "#FDB92E", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#854F0B" }}>Backed by Rapid Service Response</div>
                                        <div style={{ fontSize: "11px", color: "#92400e", marginTop: "2px" }}>May need periodic servicing — our team ensures fast turnaround and minimal downtime.</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div style={{ padding: "16px 24px" }}>
                                    <Link href="/connect" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#1a4a8a", color: "#fff", fontSize: "13px", fontWeight: 700, padding: "12px", borderRadius: "8px", textDecoration: "none" }}>
                                        Get Quote for Semi-Integrated &#8594;
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ============================================================
                    CUSTOMIZATION SECTION
                    ============================================================ */}
                <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #E8E2D8", padding: "clamp(32px, 4vw, 52px)" }}>
                            <div className="custom-order-grid">

                                {/* Left — heading + description */}
                                <div>
                                    <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                                        Custom Orders
                                    </div>
                                    <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "12px", lineHeight: 1.3 }}>
                                        We Build It Your Way
                                    </h2>
                                    <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.8, marginBottom: "28px", textAlign: "justify" }}>
                                        Tell us your site requirements i.e. wattage, battery, pole height, quantity. We engineer the perfect solar street light for you.
                                    </p>
                                </div>

                                {/* Right — checklist */}
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {[
                                        "Custom Wattage — any output as per requirement",
                                        "SMF or LiFePO4 battery — your choice",
                                        "Custom pole height — as per site",
                                        "Timer and dimming settings",
                                        "Bulk orders — any quantity",
                                        "Engineered for your exact site and budget",
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

                        {/* CTA button — left on desktop, centered on mobile */}
                        <div className="cta-btn-wrapper" style={{ marginTop: "24px" }}>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#FDB92E", borderRadius: "40px", padding: "10px 10px 10px 24px", textDecoration: "none", boxShadow: "0 4px 16px rgba(253,185,46,0.3)" }}>
                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#412402", marginRight: "12px" }}>Talk to Expert</span>
                                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    USE CASES — desktop grid + mobile swiper
                    ============================================================ */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        {/* Section header */}
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Use Cases</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Where Our Street Lights Shine</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                From remote villages to urban campuses — our solar street lights adapt to every environment.
                            </p>
                        </div>

                        {/* Desktop grid */}
                        <div className="usecases-grid-desktop">
                            {useCases.map((u) => (
                                <div key={u.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "28px 20px", textAlign: "center" }}>
                                    <div style={{ width: "52px", height: "52px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>{u.icon}</div>
                                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{u.title}</div>
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>{u.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile swiper */}
                        <div className="usecases-slider-mobile">
                            <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "32px 24px", textAlign: "center" }}>
                                <div style={{ width: "64px", height: "64px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    {useCases[useCaseStep].icon}
                                </div>
                                <div style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>{useCases[useCaseStep].title}</div>
                                <div style={{ fontSize: "14px", color: "#777", lineHeight: 1.75 }}>{useCases[useCaseStep].desc}</div>
                            </div>

                            {/* Arrows + dots */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
                                <button
                                    onClick={() => setUseCaseStep(Math.max(0, useCaseStep - 1))}
                                    style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                </button>
                                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                    {useCases.map((_, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setUseCaseStep(i)}
                                            style={{ width: i === useCaseStep ? "18px" : "8px", height: "8px", borderRadius: "20px", background: i === useCaseStep ? "#FDB92E" : "#E8E2D8", transition: "all 0.3s", cursor: "pointer" }}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setUseCaseStep(Math.min(useCases.length - 1, useCaseStep + 1))}
                                    style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* ============================================================
                    WHY GREEN FILAMENT — 4 trust points
                    ============================================================ */}
                <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Why Green Filament</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>The Name Villages Trust</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                7+ years of solar expertise. 10,000+ street lights. Odisha&apos;s most trusted solar street light supplier.
                            </p>
                        </div>

                        <div className="why-grid">
                            {[
                                {
                                    title: "10,000+ Installed",
                                    desc: "More solar street lights installed across Odisha than any other local supplier.",
                                    iconBg: "#FFF3D6", iconColor: "#F5A000",
                                    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>),
                                },
                                {
                                    title: "Zero Complaints",
                                    desc: "Non-integrated units have a perfect complaint-free record across every installation.",
                                    iconBg: "#d1fae5", iconColor: "#065f46",
                                    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>),
                                },
                                {
                                    title: "Guaranteed Performance",
                                    desc: "Every unit is tested and backed by our performance guarantee and after-sales support.",
                                    iconBg: "#FFF3D6", iconColor: "#F5A000",
                                    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>),
                                },
                                {
                                    title: "Fast Repair Response",
                                    desc: "When service is needed, our team responds quickly to ensure minimal downtime.",
                                    iconBg: "#e0f7fa", iconColor: "#0e7490",
                                    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>),
                                },
                            ].map((w) => (
                                <div key={w.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "24px", textAlign: "center" }}>
                                    <div style={{ width: "52px", height: "52px", background: w.iconBg, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", color: w.iconColor }}>
                                        {w.icon}
                                    </div>
                                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{w.title}</div>
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>{w.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    RECENT PROJECT — Dharakot case study
                    Real installation, July 2026 — Boudh district, Odisha
                    ============================================================ */}
                <div style={{ background: "#F7F2E9", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        {/* Section header */}
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Recent Project</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Solar Street Lighting for Dharakot Panchayat, Ganjam</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7 }}>
                                In July 2026, we completed a 5-site solar street light installation for a government project under Dharakot panchayat,Ganjam district, covering Bariguda, Khajuriapaitari, Sunapalli, Kaluku and Kusaraba.
                            </p>
                        </div>

                        {/* Specs row */}
                        <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "20px", marginBottom: "24px" }}>
                            <div className="case-study-specs-grid">
                                {[
                                    { label: "Light", value: "30W Semi Integrated" },
                                    { label: "Pole Height", value: "6 Metres" },
                                    { label: "Coverage", value: "20-25 Metre Radius" },
                                    { label: "Battery", value: "LiFePO4" },
                                    { label: "Operation", value: "Dusk to Dawn Auto" },
                                    { label: "Warranty", value: "12 Months" },
                                ].map((spec) => (
                                    <div key={spec.label} style={{ paddingBottom: "8px", borderBottom: "0.5px solid #F0EBE0" }}>
                                        <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>{spec.label}</div>
                                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Photos */}
                        <div className="case-study-photos-grid">
                            <img src="/images/projects/bariguda-day-install.jpg" alt="Solar street light installation team at Bariguda, Boudh district Odisha" style={{ width: "100%", borderRadius: "14px", border: "0.5px solid #E8E2D8", objectFit: "cover", aspectRatio: "4/5" }} />
                            <img src="/images/projects/kusaraba-night-lit.jpg" alt="Solar street light lit at night in Kusaraba village Odisha" style={{ width: "100%", borderRadius: "14px", border: "0.5px solid #E8E2D8", objectFit: "cover", aspectRatio: "4/5" }} />
                            <img src="/images/projects/sunapalli-install.jpg" alt="Solar street light pole installation in Sunapalli village Odisha" style={{ width: "100%", borderRadius: "14px", border: "0.5px solid #E8E2D8", objectFit: "cover", aspectRatio: "4/5" }} />
                        </div>

                    </div>
                </div>

                {/* ============================================================
                    FAQ
                    ============================================================ */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto" }}>

                        {/* ── Section header: pill badge + title ── */}
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>FAQ</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Frequently Asked Questions</h2>
                        </div>

                        {/* ── Accordion list — must match streetLightingFaqs in page.tsx ── */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {[
                                { q: "How long does a solar street light run on a single charge?", a: "Most units run 10 to 12 hours nightly, from dusk to dawn, even after 2-3 cloudy days, thanks to battery backup sized for autonomy." },
                                { q: "What is the difference between integrated and non-integrated solar street lights?", a: "Integrated lights have the panel, battery and LED built into one unit. Non-integrated lights have a separate panel and pole-mounted battery box, giving better airflow and a longer battery life." },
                                { q: "Which battery type is better: SMF or LiFePO4?", a: "SMF is cost-effective and reliable for standard use. LiFePO4 lasts longer, 5 plus years versus 2 to 3 years, handles heat better, and suits high-usage or harsh-climate installations." },
                                { q: "Can solar street lights work during monsoon season?", a: "Yes. Panels are sized with backup days built in, so lights keep working through several consecutive cloudy or rainy days." },
                                { q: "Do you provide solar street lights for government and gram panchayat projects?", a: "Yes. We have installed 10,000+ units across Odisha for village, gram panchayat and government schemes, with custom wattage and specifications per tender requirements." },
                                { q: "What wattage options are available?", a: "30W, 45W, 60W and 90W, chosen based on road width, pole height and lighting requirement." },
                                { q: "What warranty do you provide on solar street lights?", a: "All Green Filament solar street lights come with a 12-month warranty covering the light, battery and pole." },
                                { q: "Where has Green Filament recently installed solar street lights?", a: "In July 2026, we completed a 5-site installation for a government project under Dharakot panchayat in Boudh district, covering Bariguda, Khajuriapaitari, Sunapalli, Kaluku and Kusaraba." },
                            ].map((faq, i) => (
                                <div key={i} style={{ background: "#FAFAFA", borderRadius: "10px", border: "0.5px solid #E8E2D8", overflow: "hidden" }}>

                                    {/* Question row — click to expand/collapse */}
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}>
                                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{faq.q}</span>
                                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.25s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                        </div>
                                    </button>

                                    {/* Answer — only rendered when open */}
                                    {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: "13px", color: "#555", lineHeight: 1.8 }}>{faq.a}</div>}
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
                                <pattern id="cta-sl" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#cta-sl)" />
                        </svg>
                    </div>
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>Ready to Light Your Village?</h2>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
                            Get a free site assessment and custom quote — standard or fully customised.
                        </p>
                        <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get Free Quote</span>
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