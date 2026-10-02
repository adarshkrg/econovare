/* ============================================================
   INSIGHT SECTION
   - Solar photo background with light white overlay
   - VS layout: electricity rising vs solar falling
   - Verified data: CERC India + IRENA 2024
   - CTA: Get Free Quote
   - Fully responsive
   ============================================================ */

import Link from "next/link";

export default function Insight() {
  return (
    <>
      {/* ============================================================
          INSIGHT STYLES
          ============================================================ */}
      <style>{`

        /* ── Insight stat card ── */
        .insight-card {
          background: rgba(255,255,255,0.85);
          border-radius: 14px;
          padding: clamp(20px, 3vw, 28px);
          text-align: center;
          backdrop-filter: blur(4px);
        }

        /* ── Insight grid ── */
        .insight-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 0;
          align-items: center;
          margin-bottom: 28px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .insight-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .insight-vs {
            display: flex !important;
            flex-direction: row !important;
            align-items: center;
            gap: 12px;
            padding: 0 !important;
          }
          .insight-vs-line {
            width: 60px !important;
            height: 1.5px !important;
          }
        }

      `}</style>

      <section id="insight" style={{
        background: "#FAFAFA",
        padding: "clamp(60px, 8vw, 100px) 0",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 80px)",
        }}>

          {/* ============================================================
              INSIGHT CARD — solar photo bg + light overlay
              ============================================================ */}
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            background: "linear-gradient(135deg,#4a7a4a 0%,#8aaa8a 40%,#aacaaa 70%,#c8ddc8 100%)",
          }}>

            {/* --- Light white overlay --- */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.88)",
            }} />

            {/* --- Ambient glow: red left, green right, amber center --- */}
            <div style={{
              position: "absolute",
              left: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(190,18,60,0.07) 0%,transparent 70%)",
            }} />
            <div style={{
              position: "absolute",
              right: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(22,163,74,0.07) 0%,transparent 70%)",
            }} />
            <div style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              width: "240px",
              height: "240px",
              borderRadius: "50%",
              background: "radial-gradient(circle,rgba(253,185,46,0.12) 0%,transparent 70%)",
            }} />

            {/* --- Content --- */}
            <div style={{
              position: "relative",
              zIndex: 1,
              padding: "clamp(32px, 5vw, 52px) clamp(24px, 5vw, 60px)",
            }}>

              {/* ============================================================
                  SECTION HEADER
                  ============================================================ */}
              <div style={{ textAlign: "center", marginBottom: "36px" }}>

                {/* --- Pill --- */}
                <div style={{
                  display: "inline-block",
                  background: "#FFF3D6",
                  border: "0.5px solid #FAC775",
                  color: "#854F0B",
                  fontSize: "13px",
                  fontWeight: 500,
                  padding: "4px 14px",
                  borderRadius: "20px",
                  marginBottom: "12px",
                }}>
                  The Insight
                </div>

                {/* --- Title --- */}
                <h2 style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "6px",
                }}>
                  Why Solar. Why Now.
                </h2>

                {/* --- Subtitle --- */}
                <p style={{
                  fontSize: "14px",
                  color: "#777",
                  lineHeight: 1.7,
                }}>
                  The numbers tell the story.
                </p>

              </div>

              {/* ============================================================
                  STATS GRID — electricity vs solar
                  ============================================================ */}
              <div className="insight-grid">

                {/* --- Left: electricity rising --- */}
                <div
                  className="insight-card"
                  style={{ border: "0.5px solid #fecaca" }}
                >
                  {/* Label */}
                  <div style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#be123c",
                    letterSpacing: "1.5px",
                    marginBottom: "12px",
                  }}>
                    ELECTRICITY COST IN INDIA
                  </div>

                  {/* Arrow up */}
                  <div style={{
                    fontSize: "clamp(40px, 5vw, 52px)",
                    fontWeight: 800,
                    color: "#be123c",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>
                    ↑
                  </div>

                  {/* Stat */}
                  <div style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}>
                    ₹7.11
                    <span style={{ fontSize: "15px", fontWeight: 500, color: "#777" }}>/kWh</span>
                  </div>

                  {/* Description */}
                  <div style={{
                    fontSize: "12px",
                    color: "#555",
                    lineHeight: 1.75,
                    marginBottom: "10px",
                    textAlign: "center",
                  }}>
                    Reached in FY2023 — and rising every year since 2010
                  </div>

                  {/* Source */}
                  <div style={{
                    fontSize: "10px",
                    color: "#aaa",
                    fontStyle: "italic",
                  }}>
                    Source: Central Electricity Regulatory Commission
                  </div>
                </div>

                {/* --- VS divider --- */}
                <div
                  className="insight-vs"
                  style={{
                    textAlign: "center",
                    padding: "0 clamp(12px, 2vw, 24px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    className="insight-vs-line"
                    style={{
                      width: "1.5px",
                      height: "60px",
                      background: "#F0EBE0",
                      margin: "0 auto 10px",
                    }}
                  />
                  <div style={{
                    fontSize: "12px",
                    fontWeight: 800,
                    color: "#412402",
                    background: "#FDB92E",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                    boxShadow: "0 4px 14px rgba(253,185,46,0.35)",
                    flexShrink: 0,
                  }}>
                    VS
                  </div>
                  <div
                    className="insight-vs-line"
                    style={{
                      width: "1.5px",
                      height: "60px",
                      background: "#F0EBE0",
                      margin: "0 auto",
                    }}
                  />
                </div>

                {/* --- Right: solar falling --- */}
                <div
                  className="insight-card"
                  style={{ border: "0.5px solid #86efac" }}
                >
                  {/* Label */}
                  <div style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#16a34a",
                    letterSpacing: "1.5px",
                    marginBottom: "12px",
                  }}>
                    SOLAR SYSTEM COST
                  </div>

                  {/* Arrow down */}
                  <div style={{
                    fontSize: "clamp(40px, 5vw, 52px)",
                    fontWeight: 800,
                    color: "#16a34a",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}>
                    ↓
                  </div>

                  {/* Stat */}
                  <div style={{
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 800,
                    color: "#1a1a1a",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}>
                    -90%
                    <span style={{ fontSize: "15px", fontWeight: 500, color: "#777" }}> drop</span>
                  </div>

                  {/* Description */}
                  <div style={{
                    fontSize: "12px",
                    color: "#555",
                    lineHeight: 1.75,
                    marginBottom: "10px",
                    textAlign: "center",
                  }}>
                    Solar PV costs fallen by 90% in the last decade globally
                  </div>

                  {/* Source */}
                  <div style={{
                    fontSize: "10px",
                    color: "#aaa",
                    fontStyle: "italic",
                  }}>
                    Source: IRENA Global Renewable Power Report 2024
                  </div>
                </div>

              </div>

              {/* ============================================================
                  CTA
                  ============================================================ */}
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "16px",
                }}>
                  The best time to go solar is right now.
                </div>
                <Link href="/connect" style={{
                  display: "inline-block",
                  background: "#FDB92E",
                  color: "#412402",
                  fontSize: "14px",
                  fontWeight: 700,
                  padding: "12px 32px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  boxShadow: "0 4px 16px rgba(253,185,46,0.3)",
                }}>
                  Get Free Quote →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}