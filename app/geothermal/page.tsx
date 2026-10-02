import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Geothermal Heating & Cooling Systems | EcoNova Resources & Energy",
  description:
    "Cool in summer, warm in winter using the earth's natural energy. Discover EcoNova's Geothermal Heating and Cooling (GHC) systems for buildings, campuses, and communities.",
  alternates: {
    canonical: "https://econovare.com/geothermal",
  },
  openGraph: {
    title: "Geothermal Heating & Cooling Systems | EcoNova Resources & Energy",
    description:
      "EcoNova's Geothermal Heating and Cooling solutions cut energy consumption and emissions by up to 72% vs standard air conditioning.",
    url: "https://econovare.com/geothermal",
    siteName: "EcoNova Resources & Energy",
  },
};

export default function GeothermalPage() {
  const sdgs = [
    { code: "SDG 3", title: "Good Health & Well-being", color: "#4C9F38" },
    { code: "SDG 7", title: "Affordable & Clean Energy", color: "#FCC30B", textColor: "#000" },
    { code: "SDG 11", title: "Sustainable Cities & Communities", color: "#FD9D24", textColor: "#000" },
    { code: "SDG 13", title: "Climate Action", color: "#3F7E44" },
  ];

  const keyBenefits = [
    { title: "Clean Energy", desc: "Decarbonizes thermal energy demand using constant subsurface temperatures.", icon: "⚡" },
    { title: "Community Empowerment", desc: "Reliable thermal comfort that stabilizes localized energy grids.", icon: "🤝" },
    { title: "Climate Action", desc: "Cuts building HVAC emissions substantially with zero direct on-site combustion.", icon: "🌍" },
    { title: "Energy Security", desc: "Shields buildings and campuses from fossil fuel and volatile electricity price swings.", icon: "🛡️" },
  ];

  const closedLoopTypes = [
    { name: "Ground Vertical", desc: "Boreholes drilled 100-400 ft deep. Ideal where land area is limited or urban spaces.", icon: "⬇️" },
    { name: "Ground Horizontal", desc: "Trenches dug 4-6 ft deep across open land. Cost-effective for expansive campuses.", icon: "↔️" },
    { name: "Ground Looped (Slinky)", desc: "Coiled pipes laid horizontally to maximize pipe surface area in shorter trenches.", icon: "➰" },
    { name: "Pond Looped Collector", desc: "Submerged closed pipe loops in an adjacent body of water for exceptional heat transfer.", icon: "💧" },
  ];

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--en-bg-white)" }}>
      <Navbar />

      {/* ================= 1. HERO ================= */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--en-bg-soft) 0%, #E2F5EE 50%, var(--en-aqua-light) 100%)",
          padding: "clamp(60px, 8vw, 100px) 0 clamp(40px, 6vw, 70px)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="en-container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
            <span
              style={{
                padding: "6px 16px",
                borderRadius: "999px",
                backgroundColor: "rgba(14, 124, 134, 0.12)",
                color: "var(--en-teal)",
                fontSize: "13px",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Earth Energy Technology
            </span>
          </div>

          <h1
            className="en-heading"
            style={{
              fontSize: "clamp(32px, 5.2vw, 56px)",
              fontWeight: 800,
              color: "var(--en-dark-green)",
              lineHeight: 1.15,
              maxWidth: "1000px",
              margin: "0 auto 18px",
            }}
          >
            Geothermal Cooling & Heating Systems
          </h1>

          <p
            style={{
              fontSize: "clamp(18px, 2.4vw, 24px)",
              fontWeight: 700,
              color: "var(--en-deep-teal)",
              maxWidth: "850px",
              margin: "0 auto 32px",
              lineHeight: 1.45,
            }}
          >
            &ldquo;Cool in summer, warm in winter, using the earth&apos;s natural energy.&rdquo;
          </p>

          {/* SDG Alignment Badges */}
          <div style={{ marginBottom: "36px" }}>
            <span
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 800,
                color: "var(--en-text-muted)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "12px",
              }}
            >
              UN Sustainable Development Goals (SDG) Alignment:
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              {sdgs.map((sdg, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: sdg.color,
                    color: sdg.textColor || "#ffffff",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}
                >
                  <strong>{sdg.code}:</strong> {sdg.title}
                </div>
              ))}
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "20px",
              maxWidth: "1100px",
              margin: "0 auto 36px",
              textAlign: "left",
            }}
          >
            {keyBenefits.map((kb, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--en-border)",
                  borderRadius: "14px",
                  padding: "20px",
                  boxShadow: "0 4px 14px rgba(30, 58, 43, 0.04)",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{kb.icon}</div>
                <h2 style={{ fontSize: "16px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                  {kb.title}
                </h2>
                <p style={{ fontSize: "13px", color: "var(--en-text-body)", lineHeight: 1.5 }}>
                  {kb.desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href="#pilot-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 30px",
              backgroundColor: "var(--en-teal)",
              color: "#ffffff",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow: "0 4px 16px rgba(14, 124, 134, 0.35)",
            }}
          >
            <span>Request a Feasibility Consultation</span>
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* ================= 2. PROBLEM & SOLUTION ================= */}
      <section className="section-pad" style={{ backgroundColor: "#ffffff" }}>
        <div className="en-container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              The Surge in Cooling Demand
            </span>
            <h2
              className="en-heading"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              Problem & Solution: Transitioning Beyond Strained Cooling Grids
            </h2>

            <div
              style={{
                backgroundColor: "var(--en-bg-soft)",
                borderLeft: "4px solid var(--en-teal)",
                padding: "24px 28px",
                borderRadius: "0 12px 12px 0",
                marginBottom: "28px",
              }}
            >
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "8px" }}>
                The Cooling Challenge in India
              </h3>
              <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7 }}>
                Air-conditioner use in India is growing at approximately <strong>8-10% annually</strong>, with annual sales
                rising from roughly <strong>3-7 million units in the mid-2010s</strong> to over <strong>11-15 million by the mid-2020s</strong>.
                This exponential surge strains electrical grid infrastructure, drives peak electricity tariffs, and escalates urban heat island effects.
              </p>
            </div>

            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
              EcoNova Resources & Energy proposes to pilot-demonstrate <strong>Geothermal Heating and Cooling (GHC)</strong> as
              a long-term, sustainable, energy-efficient alternative utilizing the earth&apos;s stable subsurface temperatures.
            </p>

            <div
              style={{
                backgroundColor: "var(--en-bg-muted)",
                border: "1px solid var(--en-border)",
                borderRadius: "14px",
                padding: "24px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ fontSize: "36px" }}>🌡️</div>
              <div>
                <h4 style={{ fontSize: "17px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "4px" }}>
                  Constant Underground Temperature
                </h4>
                <p style={{ fontSize: "15px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
                  At just <strong>5-10 feet depth</strong>, ground temperature stays relatively constant year-round
                  (typically <strong>10°C to 25°C</strong>, depending on geographical location), regardless of extreme seasonal atmospheric shifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. WHAT IS GHC ================= */}
      <section className="section-pad" style={{ backgroundColor: "var(--en-bg-soft)" }}>
        <div className="en-container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Technology Overview
            </span>
            <h2
              className="en-heading"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              What is Geothermal Heating & Cooling (GHC)?
            </h2>

            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
              Geothermal Heating and Cooling harnesses the stable thermal reservoir beneath our feet. The earth acts as a
              natural <strong>heat sink during summer</strong> (absorbing excess indoor heat) and a <strong>heat source during winter</strong> (supplying stored thermal warmth).
            </p>

            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7, marginBottom: "28px" }}>
              This thermodynamic transfer is achieved using a specialized <strong>Geothermal Heat Pump (GHP)</strong> connected to an underground loop system.
              GHPs represent one of the most energy-efficient, environmentally benign residential and commercial heating and cooling technologies known today.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--en-border)",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>☀️ ➔ 🌍</div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                  Summer Cooling Mode
                </h3>
                <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
                  Heat is extracted from indoor air and deposited safely into the cooler subsurface ground, providing chill, high-efficiency comfort without laboring against scorching outdoor air.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--en-border)",
                  borderRadius: "14px",
                  padding: "24px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>❄️ ➔ 🏠</div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                  Winter Heating Mode
                </h3>
                <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
                  Thermal energy is extracted from the warmer subterranean earth and elevated by the heat pump into the building, eliminating fossil fuel burning and high-wattage electrical resistance heating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. WHY GHC ================= */}
      <section className="section-pad" style={{ backgroundColor: "#ffffff" }}>
        <div className="en-container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Strategic Advantages
            </span>
            <h2
              className="en-heading"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              Why GHC: Unrivaled Decarbonization & Efficiency
            </h2>

            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7, marginBottom: "28px" }}>
              GHC provides clean, green, and highly efficient temperature control for individual buildings, institutional campuses,
              and dense communities. It decarbonizes building operations, dramatically reduces utility electricity costs, stabilizes
              stressed distribution grids during peak seasons, and builds lasting community resilience.
            </p>

            {/* Performance Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, var(--en-forest-green) 0%, var(--en-teal) 100%)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 900, lineHeight: 1, marginBottom: "8px" }}>
                  Up to 72%
                </div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--en-mint)" }}>
                  Reduction in energy consumption vs standard air-conditioning systems
                </p>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, var(--en-dark-green) 0%, var(--en-navy) 100%)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  color: "#ffffff",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "clamp(36px, 5vw, 48px)", fontWeight: 900, lineHeight: 1, marginBottom: "8px" }}>
                  Up to 44%
                </div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--en-mint)" }}>
                  Reduction in energy use and emissions vs conventional air-source heat pumps
                </p>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: "var(--en-text-muted)", fontStyle: "italic", textAlign: "center" }}>
              * Performance metrics based on comparative geothermal heat pump engineering data.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 5. HOW IT WORKS (Diagrams & Flow) ================= */}
      <section className="section-pad" style={{ backgroundColor: "var(--en-bg-soft)" }}>
        <div className="en-container">
          <div style={{ maxWidth: "900px", margin: "0 auto 50px", textAlign: "center" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Thermodynamic Principles
            </span>
            <h2
              className="en-heading"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "16px",
              }}
            >
              How Does Geothermal Heating & Cooling Work?
            </h2>
            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7 }}>
              A geothermal heat pump moves heat between the building and the earth through an engineered fluid circulating
              in underground pipe loops. Because the subsurface temperature remains steady, the system operates seamlessly <strong>24/7/365</strong>.
            </p>
          </div>

          {/* SVG Visual Diagram of Heating & Cooling Cycles */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              maxWidth: "1050px",
              margin: "0 auto",
            }}
          >
            {/* Summer Cycle Diagram */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 4px 16px rgba(30, 58, 43, 0.05)",
              }}
            >
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "12px", textAlign: "center" }}>
                Summer Cooling Cycle
              </h3>
              <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                <svg width="280" height="180" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Building */}
                  <rect x="20" y="20" width="100" height="70" rx="6" fill="#F7FDF0" stroke="#0E7C86" strokeWidth="2" />
                  <text x="70" y="55" textAnchor="middle" fill="#1E3A2B" fontSize="12" fontWeight="bold">Building (Warm)</text>
                  <text x="70" y="70" textAnchor="middle" fill="#718096" fontSize="10">Indoor Heat Out</text>

                  {/* Heat Pump */}
                  <circle cx="140" cy="55" r="22" fill="#0E7C86" />
                  <text x="140" y="53" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">GHP</text>
                  <text x="140" y="65" textAnchor="middle" fill="#ffffff" fontSize="8">Heat Pump</text>

                  {/* Ground */}
                  <rect x="160" y="20" width="100" height="70" rx="6" fill="#E8F7F3" stroke="#1F3A21" strokeWidth="2" />
                  <text x="210" y="55" textAnchor="middle" fill="#1F3A21" fontSize="12" fontWeight="bold">Earth Heat Sink</text>
                  <text x="210" y="70" textAnchor="middle" fill="#0E7C86" fontSize="10">Cool Subsurface</text>

                  {/* Flow Arrow */}
                  <path d="M70 95 C 70 140, 210 140, 210 95" stroke="#0E7C86" strokeWidth="3" strokeDasharray="6 4" />
                  <polygon points="210,95 205,105 215,105" fill="#0E7C86" />
                  <text x="140" y="150" textAnchor="middle" fill="#0B5D52" fontSize="11" fontWeight="bold">Circulating Loop: Heat Dissipated into Earth</text>
                </svg>
              </div>
              <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
                Indoor heat is absorbed and pumped through the closed subterranean loop, where the naturally cooler ground absorbs the warmth, returning refreshing cool air indoors.
              </p>
            </div>

            {/* Winter Cycle Diagram */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "16px",
                padding: "28px",
                boxShadow: "0 4px 16px rgba(30, 58, 43, 0.05)",
              }}
            >
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "12px", textAlign: "center" }}>
                Winter Heating Cycle
              </h3>
              <div style={{ margin: "16px 0", display: "flex", justifyContent: "center" }}>
                <svg width="280" height="180" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Building */}
                  <rect x="20" y="20" width="100" height="70" rx="6" fill="#F7FDF0" stroke="#0E7C86" strokeWidth="2" />
                  <text x="70" y="55" textAnchor="middle" fill="#1E3A2B" fontSize="12" fontWeight="bold">Building (Comfort)</text>
                  <text x="70" y="70" textAnchor="middle" fill="#0E7C86" fontSize="10">Clean Warm Air</text>

                  {/* Heat Pump */}
                  <circle cx="140" cy="55" r="22" fill="#556B22" />
                  <text x="140" y="53" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold">GHP</text>
                  <text x="140" y="65" textAnchor="middle" fill="#ffffff" fontSize="8">Compressor</text>

                  {/* Ground */}
                  <rect x="160" y="20" width="100" height="70" rx="6" fill="#E8F7F3" stroke="#556B22" strokeWidth="2" />
                  <text x="210" y="55" textAnchor="middle" fill="#1F3A21" fontSize="12" fontWeight="bold">Earth Heat Source</text>
                  <text x="210" y="70" textAnchor="middle" fill="#556B22" fontSize="10">Naturally Warm Ground</text>

                  {/* Flow Arrow */}
                  <path d="M210 95 C 210 140, 70 140, 70 95" stroke="#556B22" strokeWidth="3" strokeDasharray="6 4" />
                  <polygon points="70,95 65,105 75,105" fill="#556B22" />
                  <text x="140" y="150" textAnchor="middle" fill="#556B22" fontSize="11" fontWeight="bold">Circulating Loop: Thermal Energy Extracted</text>
                </svg>
              </div>
              <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
                Subsurface thermal energy is extracted by the fluid loop, concentrated by the geothermal heat pump, and delivered into building spaces with maximum electrical efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. OPEN LOOP VS CLOSED LOOP ================= */}
      <section className="section-pad" style={{ backgroundColor: "#ffffff" }}>
        <div className="en-container">
          <div style={{ maxWidth: "900px", margin: "0 auto 50px" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              System Architectures
            </span>
            <h2
              className="en-heading"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              Open Loop vs. Closed Loop Systems
            </h2>
            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7 }}>
              Geothermal installations are designed according to geological formations, water availability, and plot footprint.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
              maxWidth: "1050px",
              margin: "0 auto 50px",
            }}
          >
            {/* Open Loop Card */}
            <div
              style={{
                backgroundColor: "var(--en-bg-soft)",
                border: "1px solid var(--en-border)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(14, 124, 134, 0.12)",
                  color: "var(--en-teal)",
                  fontSize: "12px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Open Loop System
              </span>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "12px" }}>
                Groundwater Direct Exchange
              </h3>
              <p style={{ fontSize: "15px", color: "var(--en-text-body)", lineHeight: 1.65, marginBottom: "16px" }}>
                Uses existing groundwater, a well, pond, or lake directly as the heat source or heat sink. Water is pumped through the heat pump and returned to the source or a discharge well.
              </p>
              <div style={{ backgroundColor: "#ffffff", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--en-border-light)" }}>
                <strong style={{ fontSize: "13px", color: "var(--en-teal)", display: "block" }}>Key Attributes:</strong>
                <span style={{ fontSize: "13px", color: "var(--en-text-body)" }}>
                  Cheaper capital cost and higher thermodynamic efficiency, but depends heavily on continuous local groundwater availability and water quality regulations.
                </span>
              </div>
            </div>

            {/* Closed Loop Card */}
            <div
              style={{
                backgroundColor: "var(--en-bg-soft)",
                border: "1px solid var(--en-border)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(85, 107, 34, 0.15)",
                  color: "var(--en-olive)",
                  fontSize: "12px",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  marginBottom: "14px",
                }}
              >
                Closed Loop System (Widely Used)
              </span>
              <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "12px" }}>
                Sealed Continuous Fluid Loops
              </h3>
              <p style={{ fontSize: "15px", color: "var(--en-text-body)", lineHeight: 1.65, marginBottom: "16px" }}>
                Circulates an engineered antifreeze and water solution continuously through high-density polyethylene (HDPE) pipes buried underground. No contact with external groundwater.
              </p>
              <div style={{ backgroundColor: "#ffffff", padding: "12px 16px", borderRadius: "8px", border: "1px solid var(--en-border-light)" }}>
                <strong style={{ fontSize: "13px", color: "var(--en-forest-green)", display: "block" }}>Key Attributes:</strong>
                <span style={{ fontSize: "13px", color: "var(--en-text-body)" }}>
                  The most widely implemented, highly reliable, zero-contamination method adaptable to virtually any soil or rock formation.
                </span>
              </div>
            </div>
          </div>

          {/* 4 Closed Loop Configurations */}
          <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
            <h3
              className="en-heading"
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                textAlign: "center",
                marginBottom: "28px",
              }}
            >
              Closed-Loop Configurations
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "20px",
              }}
            >
              {closedLoopTypes.map((loop, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid var(--en-border)",
                    borderRadius: "14px",
                    padding: "24px 20px",
                    boxShadow: "0 2px 10px rgba(30, 58, 43, 0.04)",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>{loop.icon}</div>
                  <h4 style={{ fontSize: "17px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "8px" }}>
                    {loop.name}
                  </h4>
                  <p style={{ fontSize: "13px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
                    {loop.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 7. DISTRICT COOLING & HEATING ================= */}
      <section className="section-pad" style={{ backgroundColor: "var(--en-bg-soft)" }}>
        <div className="en-container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Campus & Urban Scale
            </span>
            <h2
              className="en-heading"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              District Cooling & Heating Networks
            </h2>

            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7, marginBottom: "20px" }}>
              District Geothermal Systems scale beyond individual buildings. A centralized geothermal <strong>energy station</strong> produces
              chilled and warm water, distributing thermal utility through an insulated subterranean pipe network to serve multiple residential,
              commercial, and institutional buildings simultaneously.
            </p>

            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "16px",
                padding: "32px",
                boxShadow: "0 4px 18px rgba(30, 58, 43, 0.05)",
              }}
            >
              <h3 style={{ fontSize: "19px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "12px" }}>
                Large Scale Applications:
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  "University and academic campuses requiring shared thermal plant economics",
                  "Smart cities, IT parks, and technology corridors with dense cooling requirements",
                  "Military bases and defense facilities demanding mission-critical energy security",
                  "Commercial complexes, hospitals, and high-density residential developments",
                ].map((item, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "15px", color: "var(--en-text-dark)" }}>
                    <span style={{ color: "var(--en-teal)", fontWeight: 900 }}>✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 8. COST IMPLICATIONS & EFFICIENCY ================= */}
      <section className="section-pad" style={{ backgroundColor: "#ffffff" }}>
        <div className="en-container">
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "12px",
              }}
            >
              Economic Viability
            </span>
            <h2
              className="en-heading"
              style={{
                fontSize: "clamp(26px, 3.8vw, 38px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "20px",
              }}
            >
              Cost Implications: High Efficiency & Rapid Payback
            </h2>

            <p style={{ fontSize: "16px", color: "var(--en-text-body)", lineHeight: 1.7, marginBottom: "28px" }}>
              While traditional HVAC systems consume heavy electrical loads or burn fossil fuels, geothermal heat pumps move existing
              thermal energy from the ground. This delivers exceptional thermodynamic coefficients of performance:
            </p>

            {/* Comparison Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  backgroundColor: "var(--en-bg-soft)",
                  border: "2px solid var(--en-teal)",
                  borderRadius: "16px",
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 800, color: "var(--en-teal)", textTransform: "uppercase" }}>
                  Geothermal Unit
                </span>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "var(--en-dark-green)", margin: "10px 0" }}>
                  $3.00 &ndash; $4.00
                </div>
                <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.5 }}>
                  Delivers roughly <strong>$3 to $4 of heat per $1 of electricity</strong> consumed.
                  <br />
                  (Approx. <strong>5 units of heat per 1 unit of electricity</strong>).
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "#F8F9FA",
                  border: "1px solid #D1D5DB",
                  borderRadius: "16px",
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <span style={{ fontSize: "12px", fontWeight: 800, color: "#6B7280", textTransform: "uppercase" }}>
                  Conventional Gas Furnace
                </span>
                <div style={{ fontSize: "36px", fontWeight: 900, color: "#4B5563", margin: "10px 0" }}>
                  65&cent; &ndash; 95&cent;
                </div>
                <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.5 }}>
                  Delivers only <strong>65¢ to 95¢ of heat per $1 of fuel</strong> burned.
                  <br />
                  (Approx. <strong>0.96 units of heat per unit of gas</strong>).
                </p>
              </div>
            </div>

            <p style={{ fontSize: "13px", color: "var(--en-text-muted)", fontStyle: "italic", textAlign: "center" }}>
              Data Sources: Bosch Geothermal Engineering Studies, ClimateMaster Research.
            </p>
          </div>
        </div>
      </section>

      {/* ================= 9. CTA ================= */}
      <section
        id="pilot-cta"
        style={{
          background: "linear-gradient(135deg, var(--en-dark-green) 0%, var(--en-navy) 100%)",
          padding: "clamp(60px, 8vw, 90px) 0",
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <div className="en-container">
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: "999px",
              backgroundColor: "rgba(125, 249, 229, 0.15)",
              color: "var(--en-mint)",
              fontSize: "13px",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            Pilot & Commercial Engagements
          </span>

          <h2
            className="en-heading"
            style={{
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 800,
              color: "#ffffff",
              maxWidth: "850px",
              margin: "0 auto 20px",
              lineHeight: 1.25,
            }}
          >
            Request a Geothermal Pilot / Feasibility Consultation
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
            Whether you are planning a new educational campus, industrial facility, hospital, or commercial hub,
            our specialized geothermal geological team led by Dr. Bijaya Krushna Behera conducts comprehensive subsurface thermal assessments.
          </p>

          <Link
            href="/connect"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "16px 36px",
              backgroundColor: "var(--en-teal)",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "17px",
              borderRadius: "8px",
              boxShadow: "0 4px 20px rgba(14, 124, 134, 0.4)",
              transition: "all 0.2s ease",
            }}
          >
            <span>Request a Geothermal Consultation</span>
            <span>➔</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
