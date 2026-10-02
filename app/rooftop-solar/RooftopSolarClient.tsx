"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function getBlendedRate(units: number): number {
    const slabs: [number, number][] = [
        [50, 3.00], [50, 4.20], [100, 5.10], [100, 5.70], [Infinity, 6.20],
    ];
    let bill = 0, remaining = units;
    for (const [u, r] of slabs) {
        const used = Math.min(remaining, u);
        bill += used * r;
        remaining -= used;
        if (remaining <= 0) break;
    }
    return units > 0 ? bill / units : 5.5;
}

function calculateSavings(bill: number, preference: string) {
    const sizeMap = [
        { max: 2500, label: "1kW", kw: 1 },
        { max: 5000, label: "3kW", kw: 3 },
        { max: 8000, label: "5kW", kw: 5 },
        { max: 15000, label: "10kW", kw: 10 },
    ];
    const s = sizeMap.find((x) => bill <= x.max) ?? sizeMap[sizeMap.length - 1];
    const unitsPerMonth = s.kw * 4 * 30;
    const rate = getBlendedRate(unitsPerMonth);
    const monthly = Math.round(unitsPerMonth * rate);
    const annual = monthly * 12;
    const roof = s.kw * 100;
    const co2 = (s.kw * 1.5).toFixed(1);
    const paybackMap: Record<string, string> = {
        "on-grid": "4–5 yrs", "hybrid": "5–7 yrs", "off-grid": "6–8 yrs",
    };
    return { sizeLabel: s.label, kw: s.kw, unitsPerMonth, monthly, annual, roof, co2, payback: paybackMap[preference] };
}

const processSteps = [
    { step: "01", title: "Site Survey", desc: "Detailed roof inspection and energy assessment at your location.", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>) },
    { step: "02", title: "System Design", desc: "Customized solar solution optimized for your energy needs and budget.", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>) },
    { step: "03", title: "Installation", desc: "Safe and efficient installation by experienced certified technicians.", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>) },
    { step: "04", title: "Net Metering", desc: "Complete support for DISCOM approvals and system commissioning.", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>) },
    { step: "05", title: "Support", desc: "Long-term monitoring, AMC, and technical assistance post-installation.", icon: (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>) },
];

export default function RooftopSolarClient() {
    const [bill, setBill] = useState("3000");
    const [preference, setPreference] = useState("on-grid");
    const [result, setResult] = useState(() => calculateSavings(3000, "on-grid"));
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [processStep, setProcessStep] = useState(0);

    return (
        <>
            <Navbar />
            <main>
                <style>{`
          .system-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          .projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
          .calc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; align-items: start; }
          .highlights-grid { display: flex; gap: 24px; flex-wrap: wrap; justify-content: center; }
          .why-section-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
          .why-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .process-grid-desktop { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
          .process-slider-mobile { display: none; }
          .commercial-cta-inner { display: flex; align-items: center; gap: 12px; }
          .commercial-cta-icon { display: none; }

          @media (max-width: 1024px) {
            .system-grid { grid-template-columns: 1fr 1fr; }
            .projects-grid { grid-template-columns: 1fr 1fr; }
            .process-grid-desktop { grid-template-columns: repeat(3, 1fr); }
          }
          @media (max-width: 768px) {
            .system-grid { grid-template-columns: 1fr; }
            .projects-grid { grid-template-columns: 1fr; }
            .calc-grid { grid-template-columns: 1fr; }
            .highlights-grid { gap: 12px; }
            .why-section-grid { grid-template-columns: 1fr; gap: 24px; }
            .why-grid { grid-template-columns: 1fr 1fr; }
            .process-grid-desktop { display: none; }
            .process-slider-mobile { display: block; }
            .commercial-cta-wrapper { flex-direction: column; align-items: center; text-align: center; }
            .commercial-cta-inner { flex-direction: column; align-items: center; text-align: center; }
            .commercial-cta-icon { display: flex; }
            .commercial-cta-icon-inline { display: none !important; }
          }
        `}</style>

                {/* HERO */}
                <div style={{ background: "linear-gradient(135deg, #c97200 0%, #d4820a 50%, #b36200 100%)", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
                        <svg width="100%" height="100%"><defs><pattern id="rooftop-dots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="12" cy="12" r="1.5" fill="white" /></pattern></defs><rect width="100%" height="100%" fill="url(#rooftop-dots)" /></svg>
                    </div>
                    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
                    <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(255,255,255,0.15)", border: "0.5px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "5px 14px", borderRadius: "20px", marginBottom: "16px", letterSpacing: "0.5px" }}>
                            ☀ Smart Solar Energy Solutions
                        </div>
                        <h1 style={{ fontSize: "clamp(26px, 4vw, 50px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, maxWidth: "800px", margin: "0 auto 16px" }}>
                            Rooftop Solar Solutions for Homes, Businesses and Industries
                        </h1>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", maxWidth: "700px", lineHeight: 1.85, margin: "0 auto 28px" }}>
                            Reduce electricity bills and achieve energy independence with Green Filament&apos;s advanced On-Grid, Off-Grid and Hybrid Rooftop Solar Systems engineered for long-term performance across Odisha.
                        </p>
                        <div style={{ display: "flex", gap: "12px", marginBottom: "36px", justifyContent: "center" }}>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get Consultation</span>
                                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                </div>
                            </Link>
                            <a href="#calculator" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "1.5px solid #fff", color: "#fff", fontSize: "14px", fontWeight: 600, padding: "12px 22px", borderRadius: "40px", textDecoration: "none" }}>
                                Savings Calculator
                            </a>
                        </div>
                        <div className="highlights-grid" style={{ maxWidth: "700px", margin: "0 auto" }}>
                            {[
                                { text: "500+ Projects Completed" },
                                { text: "7+ Years Experience" },
                                { text: "Residential & Commercial" },
                                { text: "End-to-End Installation" },
                            ].map((h) => (
                                <div key={h.text} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "10px", color: "#fff", fontWeight: 700 }}>✓</div>
                                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{h.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SOLAR SYSTEM TYPES */}
                <div style={{ background: "#F7F2E9", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Solar System Types</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Explore the Right Solar Solution for You</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>Three proven system types — choose based on your energy needs, budget, and location.</p>
                        </div>
                        <div className="system-grid">
                            {[
                                { type: "On-Grid Solar System", desc: "Connected directly to the electricity grid. Ideal for reducing monthly electricity bills through net metering.", bestFor: ["Homes", "Shops", "Offices", "Commercial Buildings"], benefits: ["Lower installation cost", "Faster return on investment", "Minimal maintenance", "Electricity bill savings"], color: "#2d6a2d", badgeBg: "#d1fae5", badgeColor: "#065f46", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2d6a2d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></svg>) },
                                { type: "Off-Grid Solar System", desc: "Uses battery storage to provide independent power even in locations without reliable grid access.", bestFor: ["Villages", "Farms", "Remote Areas", "Rural Homes"], benefits: ["Complete energy independence", "Reliable backup power", "No grid dependency", "Ideal for remote areas"], color: "#1a4a8a", badgeBg: "#e8f0ff", badgeColor: "#1a4a8a", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a4a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 3h-8l-2 4h12l-2-4z" /></svg>) },
                                { type: "Hybrid Solar System", desc: "Combines solar panels, batteries, and grid connectivity to deliver both savings and backup power.", bestFor: ["Premium Homes", "Businesses", "Hospitals", "Institutions"], benefits: ["Backup during outages", "Smart energy management", "Maximum efficiency", "Reduced electricity bills"], color: "#F5A000", badgeBg: "#FFF3D6", badgeColor: "#854F0B", icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>) },
                            ].map((s) => (
                                <div key={s.type} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: `3px solid ${s.color}`, padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
                                    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                                        <div style={{ width: "52px", height: "52px", background: s.badgeBg, borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.icon}</div>
                                        <div>
                                            <div style={{ display: "inline-block", background: s.badgeBg, color: s.badgeColor, fontSize: "10px", fontWeight: 700, padding: "2px 8px", borderRadius: "20px", marginBottom: "4px" }}>{s.type.split(" ")[0]}</div>
                                            <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a" }}>{s.type}</div>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify" }}>{s.desc}</p>
                                    <div>
                                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.5px", marginBottom: "8px" }}>BEST FOR</div>
                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>{s.bestFor.map((b) => (<span key={b} style={{ background: "#FAFAFA", border: "0.5px solid #E8E2D8", borderRadius: "20px", padding: "3px 10px", fontSize: "11px", color: "#555" }}>{b}</span>))}</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.5px", marginBottom: "8px" }}>BENEFITS</div>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>{s.benefits.map((b) => (<div key={b} style={{ display: "flex", alignItems: "center", gap: "8px" }}><div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FDB92E", flexShrink: 0 }} /><span style={{ fontSize: "12px", color: "#555" }}>{b}</span></div>))}</div>
                                    </div>
                                    <Link href="/connect" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#FDB92E", color: "#412402", fontSize: "12px", fontWeight: 700, padding: "10px", borderRadius: "8px", textDecoration: "none", marginTop: "auto" }}>Get Quote →</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SOLAR SAVINGS CALCULATOR */}
                <div id="calculator" style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Savings Calculator</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Estimate Your Solar Savings</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>Enter your monthly bill to get an instant estimate.</p>
                        </div>
                        <div style={{ background: "#FAFAFA", borderRadius: "16px", border: "0.5px solid #E8E2D8", padding: "clamp(24px, 4vw, 48px)", marginBottom: "12px" }}>
                            <div className="calc-grid">
                                <div style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #E8E2D8", padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                                            <label style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>Monthly electricity bill</label>
                                            <span style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a" }}>₹{parseInt(bill).toLocaleString("en-IN")}</span>
                                        </div>
                                        <input type="range" min="500" max="15000" step="500" value={bill}
                                            onChange={(e) => { setBill(e.target.value); setResult(calculateSavings(parseInt(e.target.value), preference)); }}
                                            style={{ width: "100%" }}
                                        />
                                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "11px", color: "#aaa", marginTop: "4px" }}>
                                            <span>₹500</span><span>₹15,000</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", display: "block", marginBottom: "8px" }}>System preference</label>
                                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                            {[
                                                { value: "on-grid", label: "On-Grid — Maximum savings, fastest payback" },
                                                { value: "hybrid", label: "Hybrid — Savings + backup during power cuts" },
                                                { value: "off-grid", label: "Off-Grid — Complete energy independence" },
                                            ].map((p) => (
                                                <button key={p.value}
                                                    onClick={() => { setPreference(p.value); setResult(calculateSavings(parseInt(bill), p.value)); }}
                                                    style={{ padding: "10px 14px", borderRadius: "8px", border: `1.5px solid ${preference === p.value ? "#FDB92E" : "#E8E2D8"}`, background: preference === p.value ? "#FFF3D6" : "#fff", color: preference === p.value ? "#854F0B" : "#555", fontSize: "13px", fontWeight: 600, cursor: "pointer", textAlign: "left" }}
                                                >{p.label}</button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    <div style={{ background: "#FFF3D6", borderRadius: "12px", border: "0.5px solid #FAC775", padding: "16px 20px" }}>
                                        <div style={{ fontSize: "12px", color: "#854F0B", marginBottom: "4px" }}>Recommended system size</div>
                                        <div style={{ fontSize: "32px", fontWeight: 800, color: "#412402" }}>{result.sizeLabel}</div>
                                        <div style={{ fontSize: "11px", color: "#854F0B", marginTop: "2px" }}>Generates ~{result.unitsPerMonth} units/month</div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                        {[
                                            { label: "Monthly savings", value: `₹${result.monthly.toLocaleString("en-IN")}` },
                                            { label: "Annual savings", value: `₹${result.annual.toLocaleString("en-IN")}` },
                                            { label: "Roof area needed", value: `${result.roof} sq.ft` },
                                            { label: "CO₂ reduced/year", value: `${result.co2} tons` },
                                            { label: "Payback period", value: result.payback },
                                        ].map((r) => (
                                            <div key={r.label} style={{ background: "#FAFAFA", borderRadius: "8px", border: "0.5px solid #E8E2D8", padding: "12px" }}>
                                                <div style={{ fontSize: "11px", color: "#777", marginBottom: "4px" }}>{r.label}</div>
                                                <div style={{ fontSize: "17px", fontWeight: 700, color: "#1a1a1a" }}>{r.value}</div>
                                            </div>
                                        ))}
                                        {preference === "on-grid" ? (
                                            <div style={{ background: "#d1fae5", borderRadius: "8px", border: "0.5px solid #a7f3d0", padding: "12px" }}>
                                                <div style={{ fontSize: "11px", color: "#065f46", marginBottom: "4px" }}>Subsidy available</div>
                                                <div style={{ fontSize: "13px", fontWeight: 700, color: "#065f46" }}>Up to ₹1,38,000</div>
                                            </div>
                                        ) : (
                                            <div style={{ background: "#FAFAFA", borderRadius: "8px", border: "0.5px solid #E8E2D8", padding: "12px" }}>
                                                <div style={{ fontSize: "11px", color: "#777", marginBottom: "4px" }}>System type</div>
                                                <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", textTransform: "capitalize" }}>{preference}</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: "11px", color: "#aaa", textAlign: "center", marginBottom: "12px" }}>
                            Based on Odisha DISCOM slab tariff (₹3–₹6.20/unit, TPCODL FY 2025-26) and 4 units/kW/day generation. Actual savings may vary.
                        </p>

                        {/* Commercial CTA */}
                        <div className="commercial-cta-wrapper" style={{
                            background: "#F7F2E9",
                            borderRadius: "12px",
                            border: "0.5px solid #E8E2D8",
                            padding: "20px 28px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "16px",
                            flexWrap: "wrap",
                        }}>
                            {/* Icon — top center on mobile only */}
                            <div className="commercial-cta-icon" style={{ width: "48px", height: "48px", background: "#FFF3D6", borderRadius: "10px", display: "none", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                            </div>
                            <div className="commercial-cta-inner">
                                {/* Icon — visible on desktop only */}
                                <div className="commercial-cta-icon-inline" style={{ width: "44px", height: "44px", background: "#FFF3D6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                </div>
                                <div>
                                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a" }}>Commercial property?</div>
                                    <div style={{ fontSize: "12px", color: "#777", marginTop: "2px" }}>Get a custom quote from our solar experts.</div>
                                </div>
                            </div>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#FDB92E", borderRadius: "40px", padding: "8px 8px 8px 20px", textDecoration: "none", boxShadow: "0 4px 12px rgba(253,185,46,0.25)", flexShrink: 0 }}>
                                <span style={{ fontSize: "13px", fontWeight: 700, color: "#412402", marginRight: "10px" }}>Talk to Expert</span>
                                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* WHY GREEN FILAMENT */}
                <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #E8E2D8", padding: "clamp(32px, 4vw, 52px)" }}>
                            <div className="why-section-grid">
                                <div>
                                    <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>Why Green Filament</div>
                                    <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "12px", lineHeight: 1.3 }}>Trusted Solar Partner Across Odisha</h2>
                                    <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.8, marginBottom: "24px", textAlign: "justify" }}>
                                        At Green Filament, we combine engineering expertise, premium solar components, and practical field experience to deliver reliable solar energy systems for every scale — from single homes to large commercial facilities.
                                    </p>
                                </div>
                                <div className="why-grid">
                                    {["500+ Solar Installations", "Customized Solar Design", "High Quality Components", "Expert Installation Team", "Net Metering Assistance", "Long-Term Technical Support", "Residential & Commercial", "Subsidy Application Support"].map((item) => (
                                        <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", background: "#FAFAFA", borderRadius: "8px", padding: "10px 14px" }}>
                                            <div style={{ width: "20px", height: "20px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                            </div>
                                            <span style={{ fontSize: "12px", fontWeight: 600, color: "#1a1a1a" }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="cta-btn-wrapper" style={{ marginTop: "24px" }}>
                        <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#FDB92E", borderRadius: "40px", padding: "10px 10px 10px 24px", textDecoration: "none", boxShadow: "0 4px 16px rgba(253,185,46,0.3)" }}>
                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#412402", marginRight: "12px" }}>Book Free Site Visit</span>
                            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                            </div>
                        </Link>
                        </div>
                    </div>
                </div>

                {/* INSTALLATION PROCESS */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Installation Process</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Simple. Professional. Transparent.</h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>From first visit to final handover — here is exactly how we work.</p>
                        </div>

                        {/* Desktop grid */}
                        <div className="process-grid-desktop">
                            {processSteps.map((s) => (
                                <div key={s.step} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "28px 20px", textAlign: "center" }}>
                                    <div style={{ width: "60px", height: "60px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>{s.icon}</div>
                                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#FDB92E", marginBottom: "6px", letterSpacing: "1px" }}>STEP {s.step}</div>
                                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{s.title}</div>
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>{s.desc}</div>
                                </div>
                            ))}
                        </div>

                        {/* Mobile swiper */}
                        <div className="process-slider-mobile">
                            <div style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "32px 24px", textAlign: "center" }}>
                                <div style={{ width: "64px", height: "64px", background: "#FFF3D6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    {processSteps[processStep].icon}
                                </div>
                                <div style={{ fontSize: "11px", fontWeight: 700, color: "#FDB92E", marginBottom: "8px", letterSpacing: "1px" }}>STEP {processSteps[processStep].step}</div>
                                <div style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>{processSteps[processStep].title}</div>
                                <div style={{ fontSize: "14px", color: "#777", lineHeight: 1.75 }}>{processSteps[processStep].desc}</div>
                            </div>

                            {/* Arrows + dots */}
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "16px" }}>
                                <button
                                    onClick={() => setProcessStep(Math.max(0, processStep - 1))}
                                    style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                                </button>
                                <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                                    {processSteps.map((_, i) => (
                                        <div key={i} onClick={() => setProcessStep(i)} style={{ width: i === processStep ? "18px" : "8px", height: "8px", borderRadius: "20px", background: i === processStep ? "#FDB92E" : "#E8E2D8", transition: "all 0.3s", cursor: "pointer" }} />
                                    ))}
                                </div>
                                <button
                                    onClick={() => setProcessStep(Math.min(4, processStep + 1))}
                                    style={{ width: "36px", height: "36px", borderRadius: "50%", border: "0.5px solid #FAC775", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0 }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* FEATURED PROJECTS */}
                <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>Featured Projects</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Real Projects. Real Impact.</h2>
                        </div>
                        <div className="projects-grid">
                            {[
                                { title: "25kW Rooftop Solar", subtitle: "Toyota Showroom, Near Cuttack", desc: "Commercial rooftop solar system designed for high daytime energy consumption and long-term electricity savings.", badge: "25kW Commercial", color: "#2d6a2d" },
                                { title: "10kW Off-Grid Solar", subtitle: "Dhanbad, Jharkhand", desc: "Complete energy independence with battery backup for uninterrupted operation. 14,400 units generated annually.", badge: "10kW Off-Grid", color: "#1a4a8a" },
                                { title: "Solar Solutions Across Odisha", subtitle: "Homes, Businesses & Industries", desc: "From residential rooftops to industrial facilities, Green Filament continues to deliver clean energy systems across multiple sectors.", badge: "500+ Projects", color: "#F5A000" },
                            ].map((p) => (
                                <div key={p.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: `3px solid ${p.color}`, padding: "24px" }}>
                                    <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px", marginBottom: "12px" }}>{p.badge}</div>
                                    <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "4px" }}>{p.title}</div>
                                    <div style={{ fontSize: "12px", color: "#aaa", marginBottom: "10px" }}>{p.subtitle}</div>
                                    <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75 }}>{p.desc}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: "center", marginTop: "24px" }}>
                            <Link href="/projects" style={{ display: "inline-block", border: "1.5px solid #FDB92E", color: "#854F0B", fontSize: "14px", fontWeight: 700, padding: "12px 32px", borderRadius: "6px", textDecoration: "none" }}>View All Projects →</Link>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
                    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
                            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>FAQ</div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Frequently Asked Questions</h2>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            {[
                                { q: "Does rooftop solar work during cloudy weather?", a: "Yes. Solar panels continue generating electricity even during cloudy conditions, though generation may temporarily reduce by 20-50% depending on cloud density." },
                                { q: "How long do solar panels last?", a: "Most solar panels are designed to operate efficiently for 25 years or more. Quality panels lose less than 0.5% efficiency per year, so they continue producing significant power well beyond the warranty period." },
                                { q: "Can rooftop solar run air conditioners?", a: "Yes. A properly designed system accounts for AC load. A 2-3 tonne AC typically requires a 3-5kW system to run efficiently during peak solar hours." },
                                { q: "Is subsidy available for rooftop solar in Odisha?", a: "Yes. Residential rooftop solar installations qualify for PM Surya Ghar Muft Bijli Yojana (up to ₹78,000) and Odisha state additional subsidy (up to ₹60,000) — combined up to ₹1,38,000 for a 3kW system." },
                                { q: "What is net metering?", a: "Net metering allows excess solar electricity generated during the day to be exported to the grid. Your DISCOM credits this against your nighttime consumption, reducing your monthly bill to near zero in many cases." },
                            ].map((faq, i) => (
                                <div key={i} style={{ background: "#FAFAFA", borderRadius: "10px", border: "0.5px solid #E8E2D8", overflow: "hidden" }}>
                                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}>
                                        <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{faq.q}</span>
                                        <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.25s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                                        </div>
                                    </button>
                                    {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: "13px", color: "#555", lineHeight: 1.8 }}>{faq.a}</div>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA BANNER */}
                <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)", padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
                        <svg width="100%" height="100%"><defs><pattern id="cta-rooftop" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-rooftop)" /></svg>
                    </div>
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>Ready to Switch to Solar?</h2>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>Power your home or business with efficient rooftop solar solutions designed for long-term savings.</p>
                        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Book Free Site Visit</span>
                                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}