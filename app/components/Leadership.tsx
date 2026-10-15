"use client";

import NextImage from "next/image";

/* ============================================================
   ECONOVA LEADERSHIP COMPONENT — With Real Photos + Animations
   ============================================================ */

export default function Leadership() {
  const leaders = [
    {
      name: "Dr. Bijaya Krushna Behera",
      role: "Director",
      photo: "/images/Founder/dr-bijay-behera.jpeg",
      initials: "BKB",
      degrees: [
        "Ph.D. Geology, IIT Bombay (1994)",
        "M.Tech Applied Geology, IIT Kharagpur (1989), 1st Class",
        "M.Sc. Applied Geology, IIT Bombay (1987), 1st Class",
        "Petroleum Engineering Program, University of Tulsa, USA (2012)",
        "Founder Member, Centre of Excellence for Geothermal Energy (CEGE), Gandhinagar",
      ],
      bio: "Dr. Behera brings over three decades of pioneering academic and industrial leadership in geological sciences, subsurface resource exploration, and geothermal energy technologies. His foundational research and institutional contributions are instrumental in advancing EcoNova's clean energy and geothermal systems.",
      accentColor: "var(--en-teal)",
    },
    {
      name: "Ms. Minati Baral",
      role: "Director",
      photo: "/images/Founder/minati-baral.jpeg",
      initials: "MB",
      degrees: [
        "Director, Minati Agro India Pvt. Ltd.",
        "Extensive experience in Food Processing Technologies",
        "Specialized in Agricultural HR, Operations & Logistics",
      ],
      bio: "Ms. Baral spearheads EcoNova's sustainable agriculture and marine ventures. With profound entrepreneurial experience in agro-industrial supply chains and food processing standards, she oversees operational excellence, farmer networks, and export quality controls.",
      accentColor: "var(--en-olive)",
    },
  ];

  return (
    <section id="leadership" className="section-pad" style={{ background: "linear-gradient(180deg, #F7FDF0 0%, #ffffff 100%)" }}>
      <style>{`
        /* ── Scroll-triggered fade-in ── */
        @keyframes leaderFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .leader-card {
          background: #ffffff;
          border: 1px solid var(--en-border);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 6px 24px rgba(30, 58, 43, 0.06);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          animation: leaderFadeUp 0.7s ease both;
        }
        .leader-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 48px rgba(14, 124, 134, 0.14);
        }

        .leader-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          overflow: hidden;
          background: linear-gradient(135deg, var(--en-dark-green), var(--en-teal));
        }
        .leader-photo-wrap img {
          object-fit: cover;
          object-position: center 20%;
          transition: transform 0.5s ease;
        }
        .leader-card:hover .leader-photo-wrap img {
          transform: scale(1.05);
        }

        /* Gradient overlay on photo */
        .leader-photo-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 55%;
          background: linear-gradient(to top, rgba(14,40,25,0.7) 0%, transparent 100%);
          z-index: 1;
        }

        /* Name badge on photo */
        .leader-photo-badge {
          position: absolute;
          bottom: 16px;
          left: 20px;
          z-index: 2;
        }

        .leader-body {
          padding: clamp(24px, 3.5vw, 36px);
        }

        .leader-credential-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: var(--en-text-dark);
          line-height: 1.5;
          padding: 8px 0;
          border-bottom: 1px solid var(--en-border-light);
        }
        .leader-credential-item:last-child { border-bottom: none; }

        @media (max-width: 768px) {
          .leader-photo-wrap { aspect-ratio: 3/2; }
        }
      `}</style>

      <div className="en-container">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 64px" }}>
          <span
            style={{
              color: "var(--en-teal)", fontWeight: 800, fontSize: "13px",
              letterSpacing: "1.8px", textTransform: "uppercase",
              display: "inline-block", marginBottom: "12px",
            }}
          >
            Board of Directors
          </span>
          <h2
            className="en-heading"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800,
              color: "var(--en-dark-green)", lineHeight: 1.2, marginBottom: "16px",
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
            gap: "40px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {leaders.map((leader, idx) => (
            <div
              key={idx}
              className="leader-card"
              style={{ animationDelay: `${idx * 0.18}s` }}
            >
              {/* Photo Section */}
              <div className="leader-photo-wrap">
                <NextImage
                  src={leader.photo}
                  alt={`${leader.name} — EcoNova Director`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                />
                <div className="leader-photo-overlay" />
                <div className="leader-photo-badge">
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                      borderRadius: "999px",
                      padding: "4px 14px",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {leader.role}
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="leader-body">
                <h3
                  className="en-heading"
                  style={{
                    fontSize: "22px", fontWeight: 800,
                    color: "var(--en-dark-green)", marginBottom: "6px",
                  }}
                >
                  {leader.name}
                </h3>
                <div
                  style={{
                    width: "36px", height: "3px", borderRadius: "2px",
                    background: leader.accentColor, marginBottom: "16px",
                  }}
                />
                <p style={{ fontSize: "15px", color: "var(--en-text-body)", lineHeight: 1.7, marginBottom: "24px" }}>
                  {leader.bio}
                </p>

                {/* Credentials */}
                <div
                  style={{
                    background: "var(--en-bg-soft)",
                    borderRadius: "12px",
                    padding: "16px 18px",
                    border: "1px solid var(--en-border-light)",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "11px", fontWeight: 800, textTransform: "uppercase",
                      letterSpacing: "1px", color: "var(--en-forest-green)",
                      marginBottom: "10px",
                    }}
                  >
                    Qualifications & Background
                  </h4>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {leader.degrees.map((deg, i) => (
                      <div key={i} className="leader-credential-item">
                        <span style={{ color: leader.accentColor, fontWeight: 900, marginTop: "1px", flexShrink: 0 }}>▸</span>
                        <span>{deg}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
