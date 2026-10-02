"use client";

/* ============================================================
   ECONOVA MARKET & BUSINESS MODEL COMPONENT
   - Market Opportunity (5 sectors, strictly no invented numbers)
   - Target Market (6 customer segments)
   - Business Model (3 operational & revenue streams)
   - Roadmap ("Aim to Scale Up", 4 strategic steps)
   ============================================================ */

export default function Market() {
  const opportunities = [
    {
      sector: "Renewable Energy",
      scope: "Solar, wind, geothermal, biomass, hydrogen",
      drivers: "Growing global transition to clean energy driven by government initiatives, carbon reduction goals, and demand for sustainable power.",
      icon: "⚡",
    },
    {
      sector: "Engineering & Manufacturing",
      scope: "Electrical, electronic, electromechanical equipment",
      drivers: "Rising demand for industrial equipment, automation, and high-efficiency energy products.",
      icon: "⚙️",
    },
    {
      sector: "Agriculture & Food Processing",
      scope: "Agri-tech, value-added products, agro exports",
      drivers: "Surging demand for processed food, climate-resilient sustainable farming, and modern supply-chain improvements.",
      icon: "🌱",
    },
    {
      sector: "Marine & Aquaculture",
      scope: "Aquaculture technology, marine products & processing",
      drivers: "Growing seafood consumption, rising demand for export-grade marine products, and sustainable aquaculture management.",
      icon: "🌊",
    },
    {
      sector: "Sustainability & Climate Tech",
      scope: "ESG, circular economy, green tech, air pollution control",
      drivers: "Rising institutional investment in sustainable technologies, circular economy mandates, and air pollution control.",
      icon: "🌍",
    },
  ];

  const targetMarkets = [
    {
      title: "Government & Public Sector",
      clients: "Central & state ministries, PSUs, Smart Cities, municipal corporations",
      icon: "🏛️",
    },
    {
      title: "Industrial & Commercial",
      clients: "Manufacturers, RE developers, infrastructure & EPC contractors",
      icon: "🏭",
    },
    {
      title: "Agriculture & Agri-Business",
      clients: "Farmer Producer Organizations (FPOs), agribusinesses, food processors, cold-chain operators",
      icon: "🌾",
    },
    {
      title: "Marine & Coastal Enterprises",
      clients: "Fisheries, aquaculture enterprises, commercial seafood processors",
      icon: "🚢",
    },
    {
      title: "Institutional & Research",
      clients: "Universities, research bodies, CSR foundations, development agencies",
      icon: "🎓",
    },
    {
      title: "International Markets",
      clients: "Global RE developers, import-export trading partners, ESG investors",
      icon: "🌐",
    },
  ];

  const businessModel = [
    {
      stream: "01. Renewable Energy & Engineering Solutions",
      activities:
        "Solar, wind, biomass, geothermal, and hydrogen project development; turnkey EPC; manufacturing of electrical and electronic products; lifecycle operations and maintenance (O&M).",
      revenue:
        "EPC contracts, equipment sales, ongoing maintenance contracts, power generation revenue, and renewable energy certificates (RECs).",
    },
    {
      stream: "02. Sustainable Agriculture, Food Processing & Agro Business",
      activities:
        "Agricultural production, high-efficiency food processing, modern packaging, value-added agro products, domestic trading, and international exports.",
      revenue:
        "Processed food and agro product sales, export contracts, agri-tech solutions, and integrated supply-chain partnerships.",
    },
    {
      stream: "03. Marine Resources, Technology & Innovation Services",
      activities:
        "Modern aquaculture solutions, sustainable marine products, technology development, technical consultancy, licensing, and joint research collaborations.",
      revenue:
        "Marine product sales, aquaculture technologies, engineering consultancy fees, technology licensing, IP commercialization, and innovation projects.",
    },
  ];

  const roadmapSteps = [
    {
      step: "Phase 1",
      title: "Expand Renewable Energy & Engineering",
      desc: "Scale clean-energy projects (solar, geothermal, wind) and technology-driven engineering solutions across regional and industrial hubs.",
    },
    {
      step: "Phase 2",
      title: "Strengthen Agri-Food & Marine Businesses",
      desc: "Expand food processing facilities, value-added agriculture, scientific aquaculture, and export supply-chain networks.",
    },
    {
      step: "Phase 3",
      title: "Accelerate R&D & Technology Commercialization",
      desc: "Develop innovative proprietary products, file intellectual property, and industrialize scalable clean-tech & air-pollution removal technologies.",
    },
    {
      step: "Phase 4",
      title: "Build Global Partnerships & Markets",
      desc: "Establish strategic partnerships, international joint ventures, Public-Private Partnerships (PPPs), exports, and cross-border collaborations.",
    },
  ];

  return (
    <section id="market" className="section-pad" style={{ backgroundColor: "var(--en-bg-soft)" }}>
      <div className="en-container">
        {/* ================= 1. Market Opportunity ================= */}
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
            Market Opportunity
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
            Key Demand Drivers Across Core Verticals
          </h2>
          <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
            Alignment with national green missions, industrial decarbonization, and resource security.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            marginBottom: "80px",
          }}
        >
          {opportunities.map((opp, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "14px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 14px rgba(30, 58, 43, 0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  marginBottom: "14px",
                  display: "inline-block",
                }}
              >
                {opp.icon}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "var(--en-dark-green)",
                  marginBottom: "6px",
                }}
              >
                {opp.sector}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--en-teal)",
                  marginBottom: "12px",
                }}
              >
                {opp.scope}
              </p>
              <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.6, marginTop: "auto" }}>
                {opp.drivers}
              </p>
            </div>
          ))}
        </div>

        {/* ================= 2. Target Market ================= */}
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
            Target Customers
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
            Who We Serve
          </h2>
          <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
            Serving a diversified customer base across institutional, industrial, and agricultural segments.
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
          {targetMarkets.map((tm, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "14px",
                padding: "28px 24px",
                boxShadow: "0 2px 10px rgba(30, 58, 43, 0.04)",
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "14px" }}>{tm.icon}</div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "var(--en-dark-green)",
                  marginBottom: "8px",
                }}
              >
                {tm.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
                {tm.clients}
              </p>
            </div>
          ))}
        </div>

        {/* ================= 3. Business Model ================= */}
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
            Business Model
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
            Diversified Revenue & Activity Streams
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            marginBottom: "80px",
          }}
        >
          {businessModel.map((bm, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid var(--en-border)",
                borderRadius: "16px",
                padding: "34px 28px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 18px rgba(30, 58, 43, 0.05)",
              }}
            >
              <h3
                className="en-heading"
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  color: "var(--en-dark-green)",
                  marginBottom: "20px",
                  borderBottom: "2px solid var(--en-border-light)",
                  paddingBottom: "12px",
                }}
              >
                {bm.stream}
              </h3>

              <div style={{ marginBottom: "18px" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "var(--en-forest-green)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Key Activities:
                </span>
                <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.65 }}>
                  {bm.activities}
                </p>
              </div>

              <div style={{ marginTop: "auto" }}>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "var(--en-teal)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    display: "block",
                    marginBottom: "6px",
                  }}
                >
                  Revenue Models:
                </span>
                <p style={{ fontSize: "14px", color: "var(--en-text-dark)", fontWeight: 600, lineHeight: 1.65 }}>
                  {bm.revenue}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= 4. Roadmap ("Aim to Scale Up") ================= */}
        <div>
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
              Strategic Roadmap
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
              Aim to Scale Up: 4 Horizons
            </h2>
            <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
              A disciplined, phased trajectory from regional execution to international impact.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
            }}
          >
            {roadmapSteps.map((rm, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--en-border)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  position: "relative",
                  boxShadow: "0 2px 10px rgba(30, 58, 43, 0.04)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    backgroundColor: "rgba(14, 124, 134, 0.1)",
                    color: "var(--en-teal)",
                    fontSize: "12px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    marginBottom: "14px",
                    alignSelf: "flex-start",
                  }}
                >
                  {rm.step}
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 800,
                    color: "var(--en-dark-green)",
                    marginBottom: "10px",
                    lineHeight: 1.35,
                  }}
                >
                  {rm.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--en-text-body)", lineHeight: 1.65 }}>
                  {rm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
