"use client";

import Link from "next/link";

/* ============================================================
   ECONOVA HERO COMPONENT
   - Title: EcoNova Resources & Energy Private Limited
   - Tagline: Shaping a Cleaner, Greener Tomorrow
   - Sub-tagline: World Air Pollution Control and Sustainable Energy Solutions
   - 4 Pill tags: Renewable Energy, Agriculture & Food, Marine & Aquaculture, Engineering & Tech
   - CTAs: Explore Geothermal Solutions & Contact Us
   - Mint/Aqua gradient background waves & dark forest green styling
   ============================================================ */

export default function Hero() {
  const pillTags = [
    { label: "Renewable Energy", icon: "⚡", href: "/offerings#renewable-energy" },
    { label: "Agriculture & Food", icon: "🌱", href: "/offerings#agriculture" },
    { label: "Marine & Aquaculture", icon: "🌊", href: "/offerings#marine" },
    { label: "Engineering & Tech", icon: "⚙️", href: "/offerings#engineering" },
  ];

  return (
    <section
      aria-label="EcoNova Hero"
      style={{
        position: "relative",
        minHeight: "88vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, var(--en-bg-soft) 0%, #E8F7F3 45%, var(--en-aqua-light) 100%)",
        padding: "clamp(60px, 9vw, 120px) 0 clamp(60px, 8vw, 100px)",
      }}
    >
      {/* Decorative Mint & Aqua Wave Orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-15%",
          right: "-10%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(125, 249, 229, 0.45) 0%, rgba(224, 255, 245, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 191, 69, 0.25) 0%, rgba(247, 253, 240, 0) 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="en-container" style={{ position: "relative", zIndex: 1, textAlign: "center", width: "100%" }}>
        {/* Brand Tagline Badge */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(14, 124, 134, 0.1)",
              border: "1px solid rgba(14, 124, 134, 0.25)",
              color: "var(--en-teal)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--en-teal)",
                display: "inline-block",
              }}
            />
            EcoNova Resources & Energy Private Limited
          </span>
        </div>

        {/* Main Title / Headline */}
        <h1
          className="en-heading"
          style={{
            fontSize: "clamp(32px, 5.2vw, 62px)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "var(--en-dark-green)",
            maxWidth: "1050px",
            margin: "0 auto 20px",
            letterSpacing: "-0.5px",
          }}
        >
          Shaping a Cleaner, Greener Tomorrow
        </h1>

        {/* Sub-tagline */}
        <p
          style={{
            fontSize: "clamp(16px, 2.2vw, 22px)",
            color: "var(--en-deep-teal)",
            fontWeight: 600,
            maxWidth: "850px",
            margin: "0 auto 36px",
            lineHeight: 1.5,
          }}
        >
          World Air Pollution Control and Sustainable Energy Solutions
        </p>

        {/* Pill Tags */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            maxWidth: "900px",
            margin: "0 auto 44px",
          }}
        >
          {pillTags.map((tag, idx) => (
            <Link
              key={idx}
              href={tag.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "999px",
                border: "1px solid var(--en-border)",
                color: "var(--en-dark-green)",
                fontSize: "14px",
                fontWeight: 700,
                boxShadow: "0 2px 8px rgba(30, 58, 43, 0.06)",
                transition: "all 0.25s ease",
                backdropFilter: "blur(6px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "var(--en-teal)";
                e.currentTarget.style.color = "var(--en-teal)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(14, 124, 134, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--en-border)";
                e.currentTarget.style.color = "var(--en-dark-green)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(30, 58, 43, 0.06)";
              }}
            >
              <span>{tag.icon}</span>
              <span>{tag.label}</span>
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Link
            href="/geothermal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 28px",
              backgroundColor: "var(--en-teal)",
              color: "#ffffff",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow: "0 4px 14px rgba(14, 124, 134, 0.35)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--en-deep-teal)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(11, 93, 82, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--en-teal)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(14, 124, 134, 0.35)";
            }}
          >
            <span>Explore Geothermal Solutions</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <Link
            href="/connect"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              backgroundColor: "transparent",
              color: "var(--en-dark-green)",
              border: "2px solid var(--en-dark-green)",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "16px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--en-dark-green)";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--en-dark-green)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </section>
  );
}