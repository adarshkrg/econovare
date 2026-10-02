"use client";

import Link from "next/link";

/* ============================================================
   ECONOVA OFFERINGS COMPONENT
   - 4 Offerings Cards:
     1. Renewable Energy Projects (solar, wind, geothermal, biomass, hydrogen)
     2. Engineering & Technology (manufacturing, EPC, consulting, O&M)
     3. Agriculture & Food Processing (precision farming, value addition, food processing)
     4. Marine & Aquaculture (resource development, processing, export-ready products)
   - Value Proposition Banner:
     "Complete sustainable resource ecosystems, not isolated products,
      that maximize efficiency and minimize environmental impact."
   - Link to dedicated Geothermal page
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
      icon: "⚡",
      color: "var(--en-teal)",
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
      icon: "⚙️",
      color: "var(--en-forest-green)",
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
      icon: "🌱",
      color: "var(--en-olive)",
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
      icon: "🌊",
      color: "var(--en-navy)",
      badge: "Blue Economy",
    },
  ];

  return (
    <section id="offerings" className="section-pad" style={{ backgroundColor: "#ffffff" }}>
      <div className="en-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px" }}>
          <span
            style={{
              color: "var(--en-teal)",
              fontWeight: 800,
              fontSize: "14px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              display: "inline-block",
              marginBottom: "12px",
            }}
          >
            Core Offerings
          </span>
          <h2
            className="en-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--en-dark-green)",
              lineHeight: 1.2,
              marginBottom: "16px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginBottom: "60px",
          }}
        >
          {offerings.map((item) => (
            <div
              key={item.id}
              id={item.id}
              style={{
                backgroundColor: "var(--en-bg-soft)",
                border: "1px solid var(--en-border)",
                borderRadius: "18px",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.25s ease",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(30, 58, 43, 0.08)";
                e.currentTarget.style.borderColor = item.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "var(--en-border)";
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    border: "1px solid var(--en-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    backgroundColor: "#ffffff",
                    border: "1px solid var(--en-border-light)",
                    color: item.color,
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <h3
                className="en-heading"
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--en-dark-green)",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p style={{ color: "var(--en-text-body)", fontSize: "15px", lineHeight: 1.65, marginBottom: "20px" }}>
                {item.desc}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                {item.details.map((detail, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "var(--en-text-dark)" }}>
                    <span style={{ color: item.color, fontWeight: "bold" }}>•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
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
            boxShadow: "0 10px 30px rgba(11, 93, 82, 0.2)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(125, 249, 229, 0.2)",
              color: "var(--en-mint)",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "18px",
            }}
          >
            Our Core Value Proposition
          </span>
          <h3
            className="en-heading"
            style={{
              fontSize: "clamp(22px, 3.4vw, 34px)",
              fontWeight: 700,
              lineHeight: 1.4,
              maxWidth: "1000px",
              margin: "0 auto 24px",
              color: "#ffffff",
            }}
          >
            &ldquo;Complete sustainable resource ecosystems, not isolated products, that maximize efficiency and minimize environmental impact.&rdquo;
          </h3>
          <Link
            href="/geothermal"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 26px",
              backgroundColor: "var(--en-mint)",
              color: "var(--en-dark-green)",
              fontWeight: 700,
              borderRadius: "8px",
              fontSize: "15px",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <span>Learn About Geothermal Heating & Cooling</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
