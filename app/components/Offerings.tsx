"use client";

import Link from "next/link";
import NextImage from "next/image";

/* ============================================================
   ECONOVA OFFERINGS COMPONENT — With Images + Hover Animations
   ============================================================ */

export default function Offerings() {
  const offerings = [
    {
      id: "renewable-energy",
      title: "Renewable Energy Projects",
      desc: "Comprehensive project development across solar, wind, geothermal, biomass, and green hydrogen technologies.",
      details: [
        "Solar photovoltaic and thermal system development",
        "Pioneering geothermal cooling & heating systems",
        "Wind energy site assessment and plant integration",
        "Biomass to energy and clean hydrogen pathways",
      ],
      image: "/images/hero/rooftop.jpg",
      icon: "⚡",
      color: "#0E7C86",
      badge: "Clean Energy",
    },
    {
      id: "engineering",
      title: "Engineering & Technology",
      desc: "Turnkey engineering solutions including specialized equipment manufacturing, EPC execution, technical consulting, and lifecycle O&M services.",
      details: [
        "Turnkey EPC (Engineering, Procurement, Construction)",
        "Electrical, electronic & electromechanical equipment manufacturing",
        "Technical feasibility, energy audits & consultancy",
        "Lifecycle operations and maintenance (O&M) management",
      ],
      image: "/images/hero/consultancy.jpg",
      icon: "⚙️",
      color: "#1F3A21",
      badge: "Turnkey EPC",
    },
    {
      id: "agriculture",
      title: "Agriculture & Food Processing",
      desc: "Transforming agribusiness through precision farming, technological value addition, modern processing, and international-standard food packaging.",
      details: [
        "Precision agriculture and climate-smart farming solutions",
        "Advanced post-harvest management and processing facilities",
        "High-value agricultural products and packaging",
        "Agro trading and sustainable global supply chain networks",
      ],
      image: "/images/products/agri-pump.jpg",
      icon: "🌱",
      color: "#556B22",
      badge: "Agri-Tech",
    },
    {
      id: "marine",
      title: "Marine & Aquaculture",
      desc: "Sustainable marine resource development, modern aquaculture cultivation technologies, value-added processing, and export-ready seafood products.",
      details: [
        "Scientific aquaculture systems and water quality management",
        "Sustainable marine resource harvesting and development",
        "State-of-the-art cold-chain, processing & quality control",
        "Export-ready marine product commercialization",
      ],
      image: "/images/projects/drinking-water.jpg",
      icon: "🌊",
      color: "#17325E",
      badge: "Blue Economy",
    },
  ];

  return (
    <section id="offerings" className="section-pad" style={{ backgroundColor: "#ffffff" }}>
      <style>{`
        @keyframes offeringFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .offering-card {
          background: #ffffff;
          border: 1px solid var(--en-border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.3s ease;
          animation: offeringFadeUp 0.7s ease both;
          box-shadow: 0 4px 16px rgba(30,58,43,0.05);
        }
        .offering-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 48px rgba(30,58,43,0.11);
        }

        /* Image section */
        .offering-img-wrap {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #e8f0dc;
        }
        .offering-img-wrap img {
          object-fit: cover;
          transition: transform 0.55s ease;
        }
        .offering-card:hover .offering-img-wrap img {
          transform: scale(1.08);
        }
        .offering-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14,40,25,0.55) 0%, transparent 60%);
          z-index: 1;
          transition: opacity 0.3s ease;
        }
        .offering-card:hover .offering-img-overlay {
          opacity: 0.7;
        }

        /* Badge on image */
        .offering-badge-img {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          padding: 4px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          color: #ffffff;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Icon circle on image */
        .offering-icon-img {
          position: absolute;
          bottom: -20px;
          right: 20px;
          z-index: 3;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.25);
          border: 2px solid rgba(255,255,255,0.4);
        }

        .offering-body {
          padding: 32px 26px 26px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .offering-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 13.5px;
          color: var(--en-text-dark);
          line-height: 1.5;
          padding: 7px 0;
          border-bottom: 1px solid var(--en-border-light);
        }
        .offering-detail-item:last-child { border-bottom: none; }
      `}</style>

      <div className="en-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 56px" }}>
          <span
            style={{
              color: "var(--en-teal)", fontWeight: 800, fontSize: "13px",
              letterSpacing: "1.8px", textTransform: "uppercase",
              display: "inline-block", marginBottom: "12px",
            }}
          >
            Core Offerings
          </span>
          <h2
            className="en-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
              color: "var(--en-dark-green)", lineHeight: 1.2, marginBottom: "16px",
            }}
          >
            Integrated Solutions Across 4 Sectors
          </h2>
          <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
            Leveraging engineering excellence and natural resources to deliver high-yield, environmentally responsible outcomes.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "28px",
            marginBottom: "60px",
          }}
        >
          {offerings.map((item, idx) => (
            <div
              key={item.id}
              id={item.id}
              className="offering-card"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              {/* Image */}
              <div className="offering-img-wrap">
                <NextImage
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  quality={85}
                />
                <div className="offering-img-overlay" />
                <div className="offering-badge-img">{item.badge}</div>
                <div
                  className="offering-icon-img"
                  style={{ background: item.color }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Body */}
              <div className="offering-body">
                <h3
                  className="en-heading"
                  style={{
                    fontSize: "21px", fontWeight: 700,
                    color: "var(--en-dark-green)", marginBottom: "10px",
                    marginTop: "12px",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--en-text-body)", fontSize: "14.5px", lineHeight: 1.65, marginBottom: "20px" }}>
                  {item.desc}
                </p>
                <div style={{ marginTop: "auto" }}>
                  {item.details.map((detail, i) => (
                    <div key={i} className="offering-detail-item">
                      <span style={{ color: item.color, fontWeight: 900, flexShrink: 0, marginTop: "2px" }}>▸</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--en-forest-green) 0%, var(--en-deep-teal) 100%)",
            borderRadius: "20px",
            padding: "clamp(36px, 5vw, 56px)",
            color: "#ffffff",
            textAlign: "center",
            boxShadow: "0 10px 36px rgba(11, 93, 82, 0.25)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative orb */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: "-40%", right: "-10%",
              width: "350px", height: "350px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(125,249,229,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <span
            style={{
              display: "inline-block", padding: "4px 16px", borderRadius: "999px",
              background: "rgba(125, 249, 229, 0.2)", color: "var(--en-mint)",
              fontSize: "12px", fontWeight: 700, textTransform: "uppercase",
              letterSpacing: "1px", marginBottom: "18px",
            }}
          >
            Our Core Value Proposition
          </span>
          <h3
            className="en-heading"
            style={{
              fontSize: "clamp(20px, 3.2vw, 32px)", fontWeight: 700, lineHeight: 1.4,
              maxWidth: "960px", margin: "0 auto 28px", color: "#ffffff",
            }}
          >
            &ldquo;Complete sustainable resource ecosystems, not isolated products, that maximize efficiency and minimize environmental impact.&rdquo;
          </h3>
          <Link
            href="/geothermal"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "13px 28px", background: "var(--en-mint)",
              color: "var(--en-dark-green)", fontWeight: 700,
              borderRadius: "8px", fontSize: "15px",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              boxShadow: "0 4px 14px rgba(125,249,229,0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(125,249,229,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(125,249,229,0.3)";
            }}
          >
            <span>Learn About Geothermal Heating & Cooling</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
