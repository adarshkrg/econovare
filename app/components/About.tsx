"use client";

/* ============================================================
   ECONOVA ABOUT & VISION/MISSION COMPONENT
   - Integrated Sustainability Platform
   - Purpose-Built on a Clear Mandate
   - Vision statement
   - Mission: 5 specific strategic pillars
   - EcoNova palette & elegant typography
   ============================================================ */

export default function About() {
  const missionPoints = [
    {
      number: "01",
      title: "Clean Energy Transition",
      desc: "Develop innovative renewable energy solutions that accelerate the transition to clean energy.",
    },
    {
      number: "02",
      title: "Air Pollution Control",
      desc: "Develop innovative solutions to reduce and control air pollution for a cleaner environment.",
    },
    {
      number: "03",
      title: "Sustainable Agri & Marine",
      desc: "Promote sustainable agriculture, food processing, and marine and aquaculture through modern technologies.",
    },
    {
      number: "04",
      title: "Responsible Engineering",
      desc: "Design and commercialize environmentally responsible products and engineering solutions.",
    },
    {
      number: "05",
      title: "Research & Partnerships",
      desc: "Drive research, innovation, and strategic partnerships to create long-term economic, environmental, and social value.",
    },
  ];

  return (
    <section id="about" className="section-pad" style={{ backgroundColor: "#ffffff" }}>
      <div className="en-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px" }}>
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
            About EcoNova
          </span>
          <h2
            className="en-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--en-dark-green)",
              lineHeight: 1.2,
              marginBottom: "18px",
            }}
          >
            An Integrated Sustainability Platform
          </h2>
          <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.7 }}>
            EcoNova Resources & Energy Private Limited unites renewable energy, agriculture, marine resources,
            and advanced technology into one organization, rather than treating each sector in isolation.
          </p>
        </div>

        {/* 2 Mandate Pillars */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            marginBottom: "70px",
          }}
        >
          <div
            style={{
              backgroundColor: "var(--en-bg-soft)",
              border: "1px solid var(--en-border)",
              borderRadius: "16px",
              padding: " clamp(24px, 4vw, 40px)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "var(--en-teal)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                fontSize: "22px",
              }}
            >
              🌐
            </div>
            <h3
              className="en-heading"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--en-dark-green)",
                marginBottom: "14px",
              }}
            >
              Integrated Sustainability Platform
            </h3>
            <p style={{ color: "var(--en-text-body)", fontSize: "16px", lineHeight: 1.7 }}>
              EcoNova unites renewable energy, agriculture, marine resources and advanced technology into one organization,
              rather than treating each sector in isolation. This cross-sector synergy unlocks high operational efficiencies
              and comprehensive decarbonization models.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--en-bg-soft)",
              border: "1px solid var(--en-border)",
              borderRadius: "16px",
              padding: "clamp(24px, 4vw, 40px)",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "var(--en-forest-green)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                fontSize: "22px",
              }}
            >
              📜
            </div>
            <h3
              className="en-heading"
              style={{
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--en-dark-green)",
                marginBottom: "14px",
              }}
            >
              Purpose-Built on a Clear Mandate
            </h3>
            <p style={{ color: "var(--en-text-body)", fontSize: "16px", lineHeight: 1.7 }}>
              Our objects span renewable energy, manufacturing, agriculture, marine resources, research and technology
              partnerships, giving us the legal and operational scope to build a true multi-sector ecosystem for sustainable growth.
            </p>
          </div>
        </div>

        {/* Vision Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--en-dark-green) 0%, var(--en-navy) 100%)",
            borderRadius: "20px",
            padding: "clamp(32px, 5vw, 56px)",
            color: "#ffffff",
            marginBottom: "70px",
            boxShadow: "0 10px 30px rgba(30, 58, 43, 0.15)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "4px 14px",
              borderRadius: "999px",
              backgroundColor: "rgba(125, 249, 229, 0.2)",
              color: "var(--en-mint)",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "16px",
            }}
          >
            Our Vision
          </div>
          <h3
            className="en-heading"
            style={{
              fontSize: "clamp(22px, 3.2vw, 32px)",
              fontWeight: 700,
              lineHeight: 1.45,
              color: "#ffffff",
              maxWidth: "1100px",
            }}
          >
            &ldquo;To become a globally trusted leader in sustainable resource innovation by integrating renewable energy,
            agriculture, marine resources, and advanced technologies to build a cleaner, greener and more prosperous future.&rdquo;
          </h3>
        </div>

        {/* Mission Section */}
        <div>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span
              style={{
                color: "var(--en-teal)",
                fontWeight: 800,
                fontSize: "14px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              Our Mission
            </span>
            <h3
              className="en-heading"
              style={{
                fontSize: "clamp(24px, 3.2vw, 36px)",
                fontWeight: 800,
                color: "var(--en-dark-green)",
              }}
            >
              5 Strategic Pillars Driving Our Impact
            </h3>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {missionPoints.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "var(--en-bg-muted)",
                  border: "1px solid var(--en-border-light)",
                  borderRadius: "14px",
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(14, 124, 134, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 900,
                    color: "var(--en-teal)",
                    fontFamily: "var(--en-font-heading, 'Lora', serif)",
                    marginBottom: "12px",
                  }}
                >
                  {item.number}
                </div>
                <h4
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--en-dark-green)",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </h4>
                <p style={{ fontSize: "15px", color: "var(--en-text-body)", lineHeight: 1.6, flexGrow: 1 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}