"use client";

import Link from "next/link";
import NextImage from "next/image";

/* ============================================================
   ECONOVA HERO COMPONENT — Enhanced with Image + Animations
   - Background hero image with dark overlay
   - Animated gradient headline text
   - Floating pill tags with staggered animation
   - Animated CTA buttons
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
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "clamp(80px, 10vw, 130px) 0 clamp(60px, 8vw, 100px)",
      }}
    >
      <style>{`
        /* ── Hero Background Image ── */
        .hero-bg-img {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg-img img {
          object-fit: cover;
          object-position: center 60%;
          width: 100%;
          height: 100%;
        }

        /* ── Dark gradient overlay ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(14, 40, 25, 0.82) 0%,
            rgba(11, 93, 82, 0.65) 50%,
            rgba(23, 50, 94, 0.72) 100%
          );
          z-index: 1;
        }

        /* ── Animated gradient badge text ── */
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── Headline fade + slide in ── */
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Pill tags staggered entrance ── */
        @keyframes pillFadeIn {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ── Floating ambient orb ── */
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(-22px) scale(1.04); }
        }
        @keyframes floatAlt {
          0%, 100% { transform: translateY(0px) scale(1); }
          50%       { transform: translateY(18px) scale(0.97); }
        }

        .hero-badge {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.1s;
        }
        .hero-heading {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.25s;
        }
        .hero-sub {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.4s;
        }
        .hero-pills {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.55s;
        }
        .hero-ctas {
          animation: heroFadeUp 0.7s ease both;
          animation-delay: 0.7s;
        }

        .hero-pill-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.15);
        }
        .hero-pill-tag:hover {
          background: rgba(125, 249, 229, 0.25);
          border-color: rgba(125, 249, 229, 0.6);
          color: #7DF9E5;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(125, 249, 229, 0.2);
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          background: linear-gradient(135deg, #0E7C86, #0B5D52);
          color: #ffffff;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(14, 124, 134, 0.5);
          transition: all 0.3s ease;
          border: 1px solid rgba(125,249,229,0.2);
        }
        .hero-btn-primary:hover {
          background: linear-gradient(135deg, #0B5D52, #0E7C86);
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(14, 124, 134, 0.6);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 30px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          color: #ffffff;
          border: 2px solid rgba(255,255,255,0.5);
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.95);
          color: var(--en-dark-green);
          border-color: rgba(255,255,255,0.95);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        /* ── Scroll indicator ── */
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50%       { transform: translateY(8px); opacity: 1; }
        }
        .scroll-indicator {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          animation: scrollBounce 1.8s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .hero-pills { gap: 8px !important; }
        }
      `}</style>

      {/* Background Image */}
      <div className="hero-bg-img">
        <NextImage
          src="/images/hero/hero-bg.jpg"
          alt="EcoNova renewable energy landscape"
          fill
          priority
          quality={90}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="hero-overlay" />

      {/* Ambient floating orbs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute", top: "-8%", right: "-5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(125,249,229,0.18) 0%, transparent 70%)",
          filter: "blur(40px)", zIndex: 1, pointerEvents: "none",
          animation: "float 7s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", bottom: "-5%", left: "-8%",
          width: "450px", height: "450px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,191,69,0.18) 0%, transparent 70%)",
          filter: "blur(50px)", zIndex: 1, pointerEvents: "none",
          animation: "floatAlt 9s ease-in-out infinite",
        }}
      />

      <div className="en-container" style={{ position: "relative", zIndex: 2, textAlign: "center", width: "100%" }}>

        {/* Brand Badge */}
        <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "22px" }}>
          <span
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "7px 18px", borderRadius: "999px",
              background: "rgba(125,249,229,0.15)",
              border: "1px solid rgba(125,249,229,0.35)",
              color: "#7DF9E5", fontSize: "12px", fontWeight: 700,
              letterSpacing: "1.2px", textTransform: "uppercase",
            }}
          >
            <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#7DF9E5", display: "inline-block", boxShadow: "0 0 8px #7DF9E5" }} />
            EcoNova Resources & Energy Private Limited
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className="en-heading hero-heading"
          style={{
            fontSize: "clamp(34px, 5.5vw, 68px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#ffffff",
            maxWidth: "1050px",
            margin: "0 auto 22px",
            letterSpacing: "-0.5px",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          Shaping a{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #7DF9E5, #A8BF45, #7DF9E5)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradientShift 4s linear infinite",
            }}
          >
            Cleaner, Greener
          </span>{" "}
          Tomorrow
        </h1>

        {/* Sub-tagline */}
        <p
          className="hero-sub"
          style={{
            fontSize: "clamp(16px, 2.2vw, 21px)",
            color: "rgba(255,255,255,0.85)",
            fontWeight: 500,
            maxWidth: "750px",
            margin: "0 auto 38px",
            lineHeight: 1.6,
            textShadow: "0 1px 8px rgba(0,0,0,0.25)",
          }}
        >
          World Air Pollution Control and Sustainable Energy Solutions
        </p>

        {/* Pill Tags */}
        <div
          className="hero-pills"
          style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center",
            gap: "12px", maxWidth: "900px", margin: "0 auto 44px",
          }}
        >
          {pillTags.map((tag, idx) => (
            <Link
              key={idx}
              href={tag.href}
              className="hero-pill-tag"
              style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
            >
              <span>{tag.icon}</span>
              <span>{tag.label}</span>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="hero-ctas"
          style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", alignItems: "center", gap: "16px",
          }}
        >
          <Link href="/geothermal" className="hero-btn-primary">
            <span>Explore Geothermal Solutions</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
          <Link href="/connect" className="hero-btn-secondary">
            <span>Contact Us</span>
          </Link>
        </div>


      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}