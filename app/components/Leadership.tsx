"use client";

/* ============================================================
   ECONOVA LEADERSHIP COMPONENT
   - Dr. Bijaya Krushna Behera, Director (Geology, IIT Bombay, IIT Kgp, Univ of Tulsa, CEGE Gandhinagar)
   - Ms. Minati Baral, Director (Minati Agro India, Food Processing, HR & Logistics)
   - Placeholders for leadership photos
   ============================================================ */

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. Bijaya Krushna Behera",
      role: "Director",
      imagePlaceholder: "BKB",
      degrees: [
        "Ph.D. Geology, IIT Bombay (1994)",
        "M.Tech Applied Geology, IIT Kharagpur (1989), 1st Class",
        "M.Sc. Applied Geology, IIT Bombay (1987), 1st Class",
        "Petroleum Engineering Program, University of Tulsa, USA (2012)",
        "Founder Member, Centre of Excellence for Geothermal Energy (CEGE), Gandhinagar",
      ],
      bio: "Dr. Behera brings over three decades of pioneering academic and industrial leadership in geological sciences, subsurface resource exploration, and geothermal energy technologies. His foundational research and institutional contributions are instrumental in advancing EcoNova's clean energy and geothermal systems.",
    },
    {
      name: "Ms. Minati Baral",
      role: "Director",
      imagePlaceholder: "MB",
      degrees: [
        "Director, Minati Agro India Pvt. Ltd.",
        "Extensive experience in Food Processing Technologies",
        "Specialized in Agricultural HR, Operations & Logistics",
      ],
      bio: "Ms. Baral spearheads EcoNova's sustainable agriculture and marine ventures. With profound entrepreneurial experience in agro-industrial supply chains and food processing standards, she oversees operational excellence, farmer networks, and export quality controls.",
    },
  ];

  return (
    <section id="leadership" className="section-pad" style={{ backgroundColor: "#ffffff" }}>
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
            Board of Directors
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
            Visionary Scientific & Operational Leadership
          </h2>
          <p style={{ fontSize: "17px", color: "var(--en-text-body)", lineHeight: 1.6 }}>
            Combining world-class geological and energy research credentials with proven agribusiness execution.
          </p>
        </div>

        {/* Leaders Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "36px",
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "var(--en-bg-soft)",
                border: "1px solid var(--en-border)",
                borderRadius: "20px",
                padding: "clamp(28px, 4vw, 40px)",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 6px 20px rgba(30, 58, 43, 0.05)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(14, 124, 134, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(30, 58, 43, 0.05)";
              }}
            >
              {/* Photo / Avatar Placeholder */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--en-forest-green) 0%, var(--en-teal) 100%)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    fontWeight: 800,
                    letterSpacing: "1px",
                    boxShadow: "0 4px 14px rgba(14, 124, 134, 0.25)",
                    flexShrink: 0,
                  }}
                  title="Photo placeholder (will be replaced when photo provided)"
                >
                  {leader.imagePlaceholder}
                </div>
                <div>
                  <h3
                    className="en-heading"
                    style={{
                      fontSize: "22px",
                      fontWeight: 800,
                      color: "var(--en-dark-green)",
                      marginBottom: "4px",
                    }}
                  >
                    {leader.name}
                  </h3>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--en-teal)",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {leader.role}
                  </span>
                </div>
              </div>

              {/* Bio summary */}
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--en-text-body)",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                {leader.bio}
              </p>

              {/* Credentials / Experience */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--en-border)",
                }}
              >
                <h4
                  style={{
                    fontSize: "13px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    color: "var(--en-forest-green)",
                    marginBottom: "10px",
                  }}
                >
                  Qualifications & Background:
                </h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                  {leader.degrees.map((deg, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "14px",
                        color: "var(--en-text-dark)",
                        lineHeight: 1.45,
                      }}
                    >
                      <span style={{ color: "var(--en-teal)", fontWeight: 900 }}>•</span>
                      <span>{deg}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
