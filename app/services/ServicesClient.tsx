"use client";

/* ============================================================
   SERVICES PAGE CLIENT
   - Hero: muted amber + dot grid + glow
   - 3 grouped phases: Before / During / After Installation
   - Each card: icon + title + desc + what's included + CTA
   - How We Work — 4-step process
   - CTA Banner
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   SERVICE DATA — grouped by phase
   ============================================================ */
const phases = [
    {
        phase: "Before Installation",
        label: "Phase 01",
        color: "#F5A000",
        borderColor: "#FDB92E",
        badgeBg: "#FFF3D6",
        badgeColor: "#854F0B",
        badgeBorder: "#FAC775",
        services: [
            {
                title: "Site Assessment",
                desc: "Precision analysis of your site — roof structure, shadow study, energy consumption, and feasibility before every project.",
                iconBg: "#FFF3D6",
                iconColor: "#F5A000",
                included: [
                    "Roof structure & load bearing analysis",
                    "Shadow & shading study throughout the day",
                    "Energy consumption pattern review",
                    "Detailed feasibility report with recommendations",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                ),
            },
            {
                title: "System Design",
                desc: "Engineered for maximum performance — custom solar system design based on your load profile, budget, and site conditions.",
                iconBg: "#e8f5e9",
                iconColor: "#2d6a2d",
                included: [
                    "Custom load profile & sizing analysis",
                    "Panel layout, tilt & orientation planning",
                    "Equipment specification & brand selection",
                    "Energy yield simulation & performance report",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 12h6M9 15h4" />
                    </svg>
                ),
            },
            {
                title: "Energy Audit",
                desc: "Know your consumption, control your costs — detailed energy audit to identify waste and optimize solar system sizing.",
                iconBg: "#e8f4f8",
                iconColor: "#1a5276",
                included: [
                    "Appliance-level consumption mapping",
                    "Waste & inefficiency identification",
                    "Solar system size recommendation",
                    "Audit report with actionable plan",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                ),
            },
        ],
    },
    {
        phase: "Installation & Execution",
        label: "Phase 02",
        color: "#1a4a8a",
        borderColor: "#1a4a8a",
        badgeBg: "#e8f0ff",
        badgeColor: "#1a4a8a",
        badgeBorder: "#93c5fd",
        services: [
            {
                title: "Turnkey Execution",
                desc: "Complete end-to-end delivery — from design and procurement to installation, commissioning, and handover documentation.",
                iconBg: "#d1fae5",
                iconColor: "#065f46",
                included: [
                    "Procurement, logistics & quality check",
                    "Professional installation by certified team",
                    "System commissioning & performance testing",
                    "Handover documentation & training",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                ),
            },
            {
                title: "Net Metering",
                desc: "Sell what you don't use — complete DISCOM approval, grid connection, and net metering registration support.",
                iconBg: "#e0f7fa",
                iconColor: "#0e7490",
                included: [
                    "DISCOM application filing & follow-up",
                    "Grid connection approval process",
                    "Bidirectional net meter installation",
                    "Bill credit setup & verification",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                ),
            },
            {
                title: "Subsidy Advisory",
                desc: "Maximum benefits, zero hassle — end-to-end support for PM Surya Ghar, KUSUM, and Odisha state subsidy schemes.",
                iconBg: "#ede9fe",
                iconColor: "#6d28d9",
                included: [
                    "PM Surya Ghar Muft Bijli Yojana application",
                    "PM KUSUM scheme eligibility & filing",
                    "Odisha state subsidy documentation",
                    "End-to-end follow-up till credit received",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                ),
            },
        ],
    },
    {
        phase: "After Installation",
        label: "Phase 03",
        color: "#065f46",
        borderColor: "#2d6a2d",
        badgeBg: "#d1fae5",
        badgeColor: "#065f46",
        badgeBorder: "#6ee7b7",
        services: [
            {
                title: "Energy Management",
                desc: "Smart control of every watt — energy management systems to monitor, optimize, and maximize your solar output.",
                iconBg: "#FFF3D6",
                iconColor: "#e07b00",
                included: [
                    "Real-time solar output monitoring setup",
                    "Consumption vs generation optimization",
                    "Alert & automated reporting system",
                    "Remote access dashboard configuration",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                ),
            },
            {
                title: "AMC & Support",
                desc: "Lifetime performance guarantee — annual maintenance contracts, on-call repairs, and periodic system inspections.",
                iconBg: "#fef3c7",
                iconColor: "#b45309",
                included: [
                    "Annual Maintenance Contract (AMC) plans",
                    "On-call repair & emergency support",
                    "Quarterly system performance inspections",
                    "Detailed performance & savings reports",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                ),
            },
            {
                title: "Preventive Maintenance",
                desc: "Scheduled upkeep before problems arise — regular cleaning, testing, and component checks to maximize system life.",
                iconBg: "#ffe4e6",
                iconColor: "#be123c",
                included: [
                    "Panel cleaning & efficiency check",
                    "Component health & warranty check",
                    "Wiring, earthing & connection audit",
                    "Inverter & battery performance test",
                ],
                icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <polyline points="9 12 11 14 15 10" />
                    </svg>
                ),
            },
        ],
    },
];

/* ============================================================
   SERVICE CARD
   ============================================================ */
function ServiceCard({
    service,
    phaseColor,
}: {
    service: typeof phases[0]["services"][0];
    phaseColor: string;
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={{
            background: "#fff",
            borderRadius: "14px",
            border: `0.5px solid ${expanded ? "#FAC775" : "#E8E2D8"}`,
            borderTop: `3px solid ${phaseColor}`,
            overflow: "hidden",
            transition: "all 0.3s",
            boxShadow: expanded ? "0 8px 24px rgba(0,0,0,0.07)" : "none",
            display: "flex",
            flexDirection: "column",
        }}>
            <div style={{ padding: "24px", display: "flex", flexDirection: "column", height: "100%" }}>

                {/* Icon */}
                <div style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: service.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "14px",
                    color: service.iconColor,
                }}>
                    {service.icon}
                </div>

                {/* Title */}
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                    {service.title}
                </div>

                {/* Desc */}
                <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, marginBottom: "16px", textAlign: "justify", flex: 1 }}>
                    {service.desc}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: "8px" }}>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        style={{
                            flex: 1,
                            background: "#FFF3D6",
                            border: "0.5px solid #FAC775",
                            color: "#854F0B",
                            fontSize: "12px",
                            fontWeight: 700,
                            padding: "9px 14px",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        {expanded ? "Hide Details ↑" : "What's Included ↓"}
                    </button>
                    <Link
                        href="/connect"
                        style={{
                            flex: 1,
                            background: "#FDB92E",
                            color: "#412402",
                            fontSize: "12px",
                            fontWeight: 700,
                            padding: "9px 14px",
                            borderRadius: "8px",
                            textDecoration: "none",
                            textAlign: "center",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        Talk to Expert →
                    </Link>
                </div>
            </div>

            {/* Expanded — what's included */}
            {expanded && (
                <div style={{ background: "#FAFAFA", borderTop: "0.5px solid #F0EBE0", padding: "20px 24px" }}>
                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.5px", marginBottom: "12px" }}>
                        ✓ WHAT IS INCLUDED
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                        {service.included.map((item) => (
                            <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                <div style={{
                                    width: "18px",
                                    height: "18px",
                                    borderRadius: "50%",
                                    background: "#FFF3D6",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    marginTop: "1px",
                                }}>
                                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <span style={{ fontSize: "12px", color: "#555", lineHeight: 1.65 }}>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function ServicesClient() {
    return (
        <>
            <Navbar />
            <main>

                <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .how-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          @media (max-width: 1024px) {
            .services-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .services-grid { grid-template-columns: 1fr; }
            .how-grid { grid-template-columns: repeat(2, 1fr); }
          }
        `}</style>

                {/* ============================================================
            HERO
            ============================================================ */}
                <div style={{
                    background: "linear-gradient(135deg, #c97200 0%, #d4820a 50%, #b36200 100%)",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="services-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                                    <circle cx="12" cy="12" r="1.5" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#services-dots)" />
                        </svg>
                    </div>
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", left: "-40px", bottom: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={{
                            display: "inline-block",
                            background: "rgba(255,255,255,0.2)",
                            border: "0.5px solid rgba(255,255,255,0.4)",
                            color: "#fff",
                            fontSize: "11px",
                            fontWeight: 600,
                            padding: "4px 14px",
                            borderRadius: "20px",
                            marginBottom: "12px",
                            letterSpacing: "1px",
                        }}>
                            OUR SERVICES
                        </div>
                        <h1 style={{
                            fontSize: "clamp(26px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: "14px",
                            lineHeight: 1.25,
                        }}>
                            End-to-End Solar Services
                        </h1>
                        <p style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "500px",
                            margin: "0 auto",
                            lineHeight: 1.8,
                        }}>
                            From the first site visit to lifelong maintenance — we handle every step so you get the most from your solar investment.
                        </p>
                    </div>
                </div>

                {/* ============================================================
            PHASE SECTIONS — Before / During / After
            ============================================================ */}
                {phases.map((phase, pi) => (
                    <div
                        key={phase.phase}
                        style={{
                            background: pi % 2 === 0 ? "#FAFAFA" : "#ffffff",
                            padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                        }}
                    >
                        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                            {/* Section header */}
                            <div style={{ marginBottom: "32px" }}>
                                <div style={{
                                    display: "inline-block",
                                    background: phase.badgeBg,
                                    border: `0.5px solid ${phase.badgeBorder}`,
                                    color: phase.badgeColor,
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    padding: "4px 14px",
                                    borderRadius: "20px",
                                    marginBottom: "10px",
                                }}>
                                    {phase.label}
                                </div>
                                <h2 style={{
                                    fontSize: "clamp(22px, 3vw, 32px)",
                                    fontWeight: 700,
                                    color: "#1a1a1a",
                                    marginBottom: "8px",
                                }}>
                                    {phase.phase}
                                </h2>
                                <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", lineHeight: 1.7 }}>
                                    {pi === 0 && "We start with thorough groundwork — no project begins without full data."}
                                    {pi === 1 && "Seamless delivery — installation, grid connection, and subsidy filing handled for you."}
                                    {pi === 2 && "Your system keeps performing — we stay with you long after the panels are up."}
                                </p>
                            </div>

                            {/* Cards */}
                            <div className="services-grid">
                                {phase.services.map((service) => (
                                    <ServiceCard
                                        key={service.title}
                                        service={service}
                                        phaseColor={phase.borderColor}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                ))}

                {/* ============================================================
            HOW WE WORK
            ============================================================ */}
                <div style={{
                    background: "#F7F2E9",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "40px" }}>
                            <div style={{
                                display: "inline-block",
                                background: "#FFF3D6",
                                border: "0.5px solid #FAC775",
                                color: "#854F0B",
                                fontSize: "13px",
                                fontWeight: 500,
                                padding: "4px 14px",
                                borderRadius: "20px",
                                marginBottom: "12px",
                            }}>
                                How We Work
                            </div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                                Our Process, Start to Finish
                            </h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                Simple, transparent, and hassle-free from day one.
                            </p>
                        </div>

                        <div className="how-grid">
                            {[
                                {
                                    step: "01",
                                    title: "Free Assessment",
                                    desc: "We visit your site, study your roof, shadow patterns, and energy needs — completely free.",
                                    icon: (
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                        </svg>
                                    ),
                                },
                                {
                                    step: "02",
                                    title: "Custom Design",
                                    desc: "Our engineers design a system sized exactly for your needs, budget, and available area.",
                                    icon: (
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                                        </svg>
                                    ),
                                },
                                {
                                    step: "03",
                                    title: "Installation",
                                    desc: "Certified technicians install your system efficiently with zero disruption to your daily life.",
                                    icon: (
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                                        </svg>
                                    ),
                                },
                                {
                                    step: "04",
                                    title: "Lifetime Support",
                                    desc: "AMC, preventive maintenance, and on-call support — we stay with you for the system's lifetime.",
                                    icon: (
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
                                            <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                                        </svg>
                                    ),
                                },
                            ].map((s) => (
                                <div key={s.step} style={{
                                    background: "#fff",
                                    borderRadius: "14px",
                                    border: "0.5px solid #E8E2D8",
                                    borderTop: "3px solid #FDB92E",
                                    padding: "24px 20px",
                                    textAlign: "center",
                                }}>
                                    <div style={{
                                        width: "52px",
                                        height: "52px",
                                        background: "#FFF3D6",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 12px",
                                    }}>
                                        {s.icon}
                                    </div>
                                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#FDB92E", marginBottom: "8px", letterSpacing: "1px" }}>
                                        STEP {s.step}
                                    </div>
                                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                                        {s.title}
                                    </div>
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>
                                        {s.desc}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ============================================================
            WHY GREEN FILAMENT
            ============================================================ */}
                <div style={{
                    background: "#ffffff",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{
                            background: "#FAFAFA",
                            borderRadius: "16px",
                            border: "0.5px solid #E8E2D8",
                            padding: "clamp(32px, 4vw, 52px)",
                        }}>
                            <div style={{ textAlign: "center", marginBottom: "36px" }}>
                                <div style={{
                                    display: "inline-block",
                                    background: "#FFF3D6",
                                    border: "0.5px solid #FAC775",
                                    color: "#854F0B",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    padding: "4px 14px",
                                    borderRadius: "20px",
                                    marginBottom: "12px",
                                }}>
                                    Why Green Filament
                                </div>
                                <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                                    What Sets Us Apart
                                </h2>
                                <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                    7+ years of solar expertise across Odisha and beyond.
                                </p>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>

                                {[
                                    {
                                        title: "7+ Years Experience",
                                        desc: "Over 500 projects delivered across Odisha, Jharkhand, and beyond.",
                                        icon: (
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Certified Team",
                                        desc: "MNRE empanelled installers trained for residential, commercial and industrial systems.",
                                        icon: (
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                <polyline points="9 12 11 14 15 10" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "Subsidy Experts",
                                        desc: "We handle PM Surya Ghar and Odisha state subsidy filing end-to-end at no extra cost.",
                                        icon: (
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                            </svg>
                                        ),
                                    },
                                    {
                                        title: "25-Year Warranty",
                                        desc: "Industry-standard panel warranties backed by our own service commitment.",
                                        icon: (
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                            </svg>
                                        ),
                                    },
                                ].map((w) => (
                                    <div key={w.title} style={{
                                        background: "#fff",
                                        borderRadius: "14px",
                                        border: "0.5px solid #E8E2D8",
                                        borderTop: "3px solid #FDB92E",
                                        padding: "24px 20px",
                                        textAlign: "center",
                                    }}>
                                        <div style={{
                                            width: "52px",
                                            height: "52px",
                                            background: "#FFF3D6",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: "0 auto 12px",
                                        }}>
                                            {w.icon}
                                        </div>
                                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                                            {w.title}
                                        </div>
                                        <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>
                                            {w.desc}
                                        </div>
                                    </div>
                                    
                                ))}

                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
            CTA BANNER
            ============================================================ */}
            <div style={{
                background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)",
                padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}>
                <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="cta-services" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#cta-services)" />
                    </svg>
                </div>
                <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                    <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                        Ready to Go Solar?
                    </h2>
                    <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
                        Get a free site assessment and custom quote — no obligations, no pressure.
                    </p>
                    <Link href="/connect" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        background: "#fff",
                        borderRadius: "40px",
                        padding: "6px 6px 6px 22px",
                        textDecoration: "none",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                    }}>
                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>
                            Get Free Consultation
                        </span>
                        <div style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "#FDB92E",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

        </main >
            <Footer />
        </>
    );
}
