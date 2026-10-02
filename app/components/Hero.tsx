"use client";

import { useState } from "react";
import Link from "next/link";

/* ============================================================
   HERO SECTION
   - Full width background image per tab
   - Amber diagonal overlay (right to left gradient)
   - Floating tab bar — 50% inside hero, 50% below
   - Fully responsive (mobile + desktop)
   ============================================================ */

/* --- Slide data — one per tab --- */
const slides = [
  {
    sub: "Clean Energy Cooking",
    title: "Solar Cooking System",
    desc: "A revolutionary solar-powered cooking solution. Smoke-free, cost-free, and completely LPG independent.",
    bg: "/images/products/solar-cooking.jpg",
    href: "/solar-cooking",
  },
  {
    sub: "Villages, Roads and Campuses",
    title: "Solar Street Lights",
    desc: "All-in-one and split solar street lights. Long backup, weatherproof, low maintenance.",
    bg: "/images/hero/streetlights.jpg",
    href: "/solar-street-lighting",
  },
  {
    sub: "Residential and Commercial",
    title: "Rooftop Solar Power Plant",
    desc: "No matter what your solar needs are, we have the right option for every home and business.",
    bg: "/images/hero/rooftop.jpg",
    href: "/rooftop-solar",
  },
  {
    sub: "Agriculture and Drinking Water",
    title: "Solar Pumps",
    desc: "AC and DC solar pumps for farmers across Odisha. KUSUM scheme eligible — up to 90% subsidy.",
    bg: "/images/hero/pumps.jpg",
    href: "/solar-water-pump",
  },
  {
    sub: "Energy Planning and Advisory",
    title: "Solar Consultancy",
    desc: "Unsure which system fits your needs? Our experts guide you from assessment to commissioning.",
    bg: "/images/hero/consultancy.jpg",
    href: "/services",
  },
];

/* --- Tab data — icons + labels --- */
const tabs = [
  {
    label: "Solar Cooking",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2.5"/>
        <line x1="12" y1="1" x2="12" y2="2.5"/>
        <line x1="9" y1="2" x2="8" y2="1"/>
        <line x1="15" y1="2" x2="16" y2="1"/>
        <line x1="7.5" y1="5" x2="6" y2="5"/>
        <line x1="16.5" y1="5" x2="18" y2="5"/>
        <path d="M7 11h10l-1 6H8l-1-6z"/>
        <path d="M5 11h14"/>
        <line x1="10" y1="9" x2="10" y2="11"/>
        <line x1="14" y1="9" x2="14" y2="11"/>
        <path d="M9 17v2h6v-2"/>
      </svg>
    ),
  },
  {
    label: "Street Lights",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="22" x2="12" y2="10"/>
        <path d="M12 10 C12 10 12 4 17 4"/>
        <path d="M14 4h5v4h-5z"/>
        <line x1="9" y1="22" x2="15" y2="22"/>
        <path d="M9 14h6"/>
      </svg>
    ),
  },
  {
    label: "Rooftop Solar",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10h20"/>
        <path d="M5 10V20H19V10"/>
        <path d="M2 10L12 2l10 8"/>
        <rect x="8" y="13" width="3" height="3"/>
        <rect x="13" y="13" width="3" height="3"/>
      </svg>
    ),
  },
  {
    label: "Solar Pumps",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L8 6h8l-4-4z"/>
        <rect x="8" y="6" width="8" height="4" rx="1"/>
        <line x1="12" y1="10" x2="12" y2="14"/>
        <circle cx="12" cy="17" r="3"/>
        <path d="M9 20c0 1.1 1.3 2 3 2s3-.9 3-2"/>
      </svg>
    ),
  },
  {
    label: "Consultancy",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ background: "#ffffff" }}>

      {/* ============================================================
          HERO BANNER — full width background image
          ============================================================ */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "clamp(300px, 40vw, 460px)",
        overflow: "hidden",
        backgroundImage: `url(${slides[active].bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>

        {/* --- Amber diagonal overlay --- */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to left, #F5A000, #bf6a00)",
          clipPath: "polygon(0 0, 58% 0, 44% 100%, 0 100%)",
          opacity: 0.85,
        }} />

        {/* --- Dark overlay on right side --- */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to left, rgba(0,0,0,0.3), transparent 60%)",
        }} />

        {/* --- Text content --- */}
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(20px, 5vw, 60px)",
          maxWidth: "clamp(300px, 55%, 560px)",
          paddingBottom: "clamp(80px, 12vw, 60px)",
        }}>

          {/* Subtitle */}
          <p style={{
            fontSize: "clamp(11px, 1.2vw, 14px)",
            fontWeight: 600,
            color: "rgba(255,255,255,0.92)",
            marginBottom: "8px",
          }}>
            {slides[active].sub}
          </p>

          {/* Main title */}
          <h1 style={{
            fontSize: "clamp(22px, 4vw, 52px)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "14px",
          }}>
            {slides[active].title}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: "clamp(12px, 1.2vw, 15px)",
            color: "rgba(255,255,255,0.88)",
            lineHeight: 1.75,
            marginBottom: "24px",
            maxWidth: "360px",
          }}>
            {slides[active].desc}
          </p>

          {/* --- CTA Buttons --- */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>

            {/* Know More */}
            <Link href={slides[active].href} style={{
              padding: "10px 22px",
              background: "#ffffff",
              color: "#7a3a00",
              fontSize: "clamp(12px, 1.1vw, 14px)",
              fontWeight: 700,
              borderRadius: "6px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Know More
            </Link>

            {/* Enquire Now */}
            <Link href="/connect" style={{
              padding: "10px 22px",
              border: "2px solid rgba(255,255,255,0.85)",
              color: "#ffffff",
              fontSize: "clamp(12px, 1.1vw, 14px)",
              fontWeight: 700,
              borderRadius: "6px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
              Enquire Now
            </Link>

          </div>
        </div>
      </div>

      {/* ============================================================
          FLOATING TAB BAR
          ============================================================ */}
      <div style={{
        padding: "0 clamp(12px, 5vw, 100px)",
        marginTop: "-28px",
        position: "relative",
        zIndex: 10,
      }}>
        <div style={{
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
          border: "0.5px solid #E8E2D8",
          display: "flex",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}>
          {tabs.map((tab, i) => (
            <button
              key={tab.label}
              onClick={() => setActive(i)}
              style={{
                flex: "1 0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "clamp(20px, 2.5vw, 28px) clamp(12px, 2vw, 24px)",
                background: "none",
                border: "none",
                borderRight: i < tabs.length - 1 ? "0.5px solid #E8E2D8" : "none",
                borderBottom: active === i ? "2px solid #F5A000" : "2px solid transparent",
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ color: active === i ? "#F5A000" : "#555" }}>
                {tab.icon}
              </span>
              <span style={{
                fontSize: "clamp(11px, 1vw, 13px)",
                fontWeight: active === i ? 700 : 600,
                color: active === i ? "#F5A000" : "#555",
              }}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Space below tab bar --- */}
      <div style={{ height: "28px" }} />

    </section>
  );
}