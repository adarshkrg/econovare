"use client";

/* ============================================================
   ECONOVA MARKET PROBLEM & SOLUTION COMPONENT
   - Market Problem (4 cards)
   - Our Solution (3 cards + callout)
   - Why EcoNova / Competitive Positioning (clean, no competitor names)
   ============================================================ */

export default function ProblemSolution() {
  const problems = [
    {
      title: "Underutilization of Environment-Friendly Energy",
      desc: "Lack of awareness and utilization of geothermal energy, along with underutilization of solar and biomass technology at the domestic and decentralized level.",
      icon: "⚡",
    },
    {
      title: "Need for Integrated Sustainability Solutions",
      desc: "Climate change and escalating resource challenges require holistic, combined solutions instead of isolated, single-sector approaches that miss broader ecological impact.",
      icon: "🔄",
    },
    {
      title: "Underutilization of Innovation & Technology",
      desc: "A systemic lack of effective applied research, seamless technology transfer, and agile commercialization limits scalable and sustainable economic growth.",
      icon: "🔬",
    },
    {
      title: "Limited Value Addition in Agriculture & Marine",
      desc: "Crucial agricultural and marine resources frequently lack modern processing facilities, technology adoption, and high-value commercialization opportunities.",
      icon: "🌾",
    },
  ];

  const solutions = [
    {
      title: "Clean Energy Solutions",
      desc: "Advancing solar, wind, geothermal, biomass, and hydrogen technologies for resilient, low-carbon power and thermal needs.",
      badge: "Energy",
    },
    {
      title: "Integrated Sustainable Resource Platform",
      desc: "A unified multi-sector ecosystem combining renewable energy, agriculture, marine resources, food processing, and advanced technologies.",
      badge: "Ecosystem",
    },
    {
      title: "Technology-Driven Engineering Solutions",
      desc: "Designing, manufacturing, and commercializing electrical, electronic, and engineering products backed by research and rigorous engineering.",
      badge: "Engineering",
    },
  ];

  return (
    <section id="problem-solution" className="section-pad" style={{ backgroundColor: "var(--en-bg-soft)" }}>
      <div className="en-container">
        {/* ================= Market Problem ================= */}
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
            The Challenge
          </span>
          <h2
            className="en-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--en-dark-green)",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Addressing Critical Market Gaps
          </h2>
          <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
            Modern climate and resource challenges can no longer be solved with fragmented, siloed models.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "80px",
          }}
        >
          {problems.map((prob, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "14px",
                padding: "32px 26px",
                boxShadow: "0 4px 16px rgba(30, 58, 43, 0.04)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(14, 124, 134, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(30, 58, 43, 0.04)";
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(14, 124, 134, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  marginBottom: "18px",
                }}
              >
                {prob.icon}
              </div>
              <h3
                style={{
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "var(--en-dark-green)",
                  marginBottom: "12px",
                  lineHeight: 1.35,
                }}
              >
                {prob.title}
              </h3>
              <p style={{ color: "var(--en-text-body)", fontSize: "15px", lineHeight: 1.65 }}>
                {prob.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ================= Our Solution ================= */}
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
            The EcoNova Approach
          </span>
          <h2
            className="en-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 800,
              color: "var(--en-dark-green)",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Our Integrated Solution
          </h2>
          <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
            Three interconnected pillars providing high-efficiency clean energy and resource sustainability.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "28px",
            marginBottom: "50px",
          }}
        >
          {solutions.map((sol, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "16px",
                padding: "36px 30px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 18px rgba(30, 58, 43, 0.05)",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 12px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(85, 107, 34, 0.12)",
                  color: "var(--en-olive)",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  marginBottom: "16px",
                }}
              >
                {sol.badge}
              </span>
              <h3
                className="en-heading"
                style={{
                  fontSize: "21px",
                  fontWeight: 700,
                  color: "var(--en-dark-green)",
                  marginBottom: "14px",
                  lineHeight: 1.35,
                }}
              >
                {sol.title}
              </h3>
              <p style={{ color: "var(--en-text-body)", fontSize: "15px", lineHeight: 1.7, flexGrow: 1 }}>
                {sol.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Clean Air Callout */}
        <div
          style={{
            backgroundColor: "var(--en-deep-teal)",
            borderRadius: "16px",
            padding: "clamp(24px, 4vw, 40px)",
            textAlign: "center",
            color: "#ffffff",
            marginBottom: "80px",
            boxShadow: "0 8px 25px rgba(11, 93, 82, 0.2)",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              marginBottom: "12px",
            }}
          >
            🍃
          </div>
          <p
            className="en-heading"
            style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 700,
              maxWidth: "920px",
              margin: "0 auto",
              lineHeight: 1.5,
              color: "#ffffff",
            }}
          >
            &ldquo;Providing innovative solutions for removal of world air pollution substantially so that our next generation breathe fresh air.&rdquo;
          </p>
        </div>

        {/* ================= Why EcoNova (Competitive Positioning) ================= */}
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid var(--en-border)",
            borderRadius: "20px",
            padding: "clamp(32px, 5vw, 56px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "13px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "10px",
              }}
            >
              Why EcoNova
            </span>
            <h3
              className="en-heading"
              style={{
                fontSize: "clamp(24px, 3.2vw, 36px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                lineHeight: 1.25,
                marginBottom: "16px",
              }}
            >
              Multi-Sector Ecosystem vs. Single-Sector Silos
            </h3>
            <p style={{ color: "var(--en-text-body)", fontSize: "16px", lineHeight: 1.7, marginBottom: "20px" }}>
              Unlike single-sector players that concentrate purely on standalone EPC contracts, utility solar generation,
              or general infrastructure, EcoNova uniquely combines multiple sustainability verticals under one umbrella.
            </p>
            <p style={{ color: "var(--en-text-body)", fontSize: "16px", lineHeight: 1.7 }}>
              Our R&D-driven approach couples scientific research with agile technology commercialization and end-to-end execution,
              delivering integrated resource ecosystems that produce higher economic resilience and deeper environmental impact.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--en-bg-soft)",
              borderRadius: "14px",
              padding: "30px",
              border: "1px solid var(--en-border-light)",
            }}
          >
            <h4
              style={{
                fontSize: "18px",
                fontWeight: 800,
                color: "var(--en-dark-green)",
                marginBottom: "18px",
              }}
            >
              EcoNova Advantages
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { title: "Cross-Sector Synergy", desc: "Energy, agriculture, marine, and engineering integrated into closed loops." },
                { title: "Strong Academic & Scientific Leadership", desc: "Decades of deep geological and resource innovation pedigree." },
                { title: "Geothermal & Clean Tech Pioneer", desc: "Specialized knowledge in advanced geothermal heating and cooling." },
                { title: "Commercialization Focus", desc: "Translating cutting-edge research into market-ready, scalable products." },
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <span style={{ color: "var(--en-teal)", fontWeight: 900, fontSize: "16px", marginTop: "2px" }}>✓</span>
                  <div>
                    <strong style={{ color: "var(--en-dark-green)", fontSize: "15px" }}>{item.title}: </strong>
                    <span style={{ color: "var(--en-text-body)", fontSize: "14px" }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
