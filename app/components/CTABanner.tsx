"use client";

import Link from "next/link";

/* ============================================================
   ECONOVA CTA BANNER
   - Clean, high-contrast banner inviting collaboration
   - Phone, email, and consultation links
   ============================================================ */

export default function CTABanner() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--en-dark-green) 0%, var(--en-navy) 100%)",
        padding: "clamp(60px, 8vw, 90px) 0",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Blur */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(125, 249, 229, 0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="en-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            padding: "6px 18px",
            borderRadius: "999px",
            backgroundColor: "rgba(125, 249, 229, 0.15)",
            color: "var(--en-mint)",
            fontSize: "13px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "1px",
            marginBottom: "20px",
          }}
        >
          Partner With EcoNova
        </span>

        <h2
          className="en-heading"
          style={{
            fontSize: "clamp(28px, 4.5vw, 46px)",
            fontWeight: 800,
            color: "#ffffff",
            maxWidth: "900px",
            margin: "0 auto 20px",
            lineHeight: 1.25,
          }}
        >
          Ready to Accelerate Your Clean Energy & Sustainable Resource Initiatives?
        </h2>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "var(--en-aqua-light)",
            maxWidth: "750px",
            margin: "0 auto 36px",
            lineHeight: 1.6,
          }}
        >
          Connect with our multidisciplinary engineering, agriculture, and energy specialists to explore pilot projects,
          turnkey EPC, or technological collaborations.
        </p>

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
            href="/connect"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              backgroundColor: "var(--en-teal)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "16px",
              borderRadius: "8px",
              boxShadow: "0 4px 18px rgba(14, 124, 134, 0.4)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--en-deep-teal)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--en-teal)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Get in Touch</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>

          <a
            href="tel:+919727780048"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "16px",
              borderRadius: "8px",
              backdropFilter: "blur(6px)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Call +91 9727780048</span>
          </a>
        </div>
      </div>
    </section>
  );
}