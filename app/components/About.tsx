"use client";

/* ============================================================
   ABOUT SECTION
   - Desktop: text left, 2x2 flip cards right
   - Mobile: pill → headline → 2x2 cards → text → stats → CTAs
   - Flip cards with colored shadows
   - Fully responsive
   ============================================================ */

import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <>
            {/* ============================================================
          FLIP CARD + RESPONSIVE STYLES
          ============================================================ */}
            <style>{`
        /* --- Flip card base --- */
        .flip-wrapper {
          perspective: 1200px;
          height: clamp(130px, 15vw, 180px);
          width: 100%; /* 👈 add this */
  overflow: hidden; /* 👈 add this */
        }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 1s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .flip-wrapper:hover .flip-inner {
          transform: rotateY(180deg);
        }
        .flip-front,
        .flip-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 14px;
          padding: clamp(14px, 2vw, 20px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .flip-back {
          transform: rotateY(180deg);
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        /* --- Desktop layout --- */
        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: clamp(32px, 5vw, 64px);
          align-items: center;
        }

        /* --- Cards grid --- */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        /* --- Mobile: show cards after headline --- */
        .about-left-top { display: contents; }
        .about-text-content { display: contents; }

        /* --- Mobile layout override --- */
        @media (max-width: 768px) {
          .about-grid {
            display: flex;
            flex-direction: column;
            gap: 0;
          }
          .about-left-top {
            display: flex;
            flex-direction: column;
          }
          .cards-mobile-order { order: 2; margin-bottom: 20px; }
          .text-mobile-order { order: 3; }
          .stats-mobile-order { order: 4; }
          .cta-mobile-order { order: 5; }
          .desktop-cards { display: none; }
          .mobile-cards { display: grid !important; }
        }

        @media (min-width: 769px) {
          .mobile-cards { display: none !important; }
          .desktop-cards { display: grid !important; }
        }
      `}</style>

            <section id="about" style={{
                background: "#ffffff",
                padding: "clamp(40px, 5vw, 70px) 0",
            }}>
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 clamp(24px, 5vw, 80px)",
                }}>

                    <div className="about-grid">

                        {/* ============================================================
                LEFT — text content
                ============================================================ */}
                        <div style={{ display: "flex", flexDirection: "column" }}>

                            {/* --- Pill badge --- */}
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
                                alignSelf: "flex-start",
                            }}>
                                Our Story
                            </div>

                            {/* --- Section title --- */}
                            <h2 style={{
                                fontSize: "clamp(22px, 3vw, 32px)",
                                fontWeight: 700,
                                color: "#1a1a1a",
                                lineHeight: 1.25,
                                marginBottom: "16px",
                            }}>
                                Building a Smarter Energy Future
                            </h2>

                            {/* ============================================================
                  MOBILE ONLY — 2x2 cards after headline
                  ============================================================ */}
                            <div className="mobile-cards cards-grid" style={{
                                marginBottom: "20px",
                                width: "100%", // add this
                                overflow: "hidden", //  add this
                            }}>
                                {/* Mobile Tile 1 */}
                                <div className="flip-wrapper">
                                    <div className="flip-inner">
                                        <div className="flip-front" style={{ background: "#F5A000", borderBottom: "6px solid #c97200", borderRight: "6px solid #c97200" }}>
                                            <div style={{ fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                            <div>
                                                <div style={{ fontSize: "13px", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "4px" }}>Start-up<br />India</div>
                                                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)" }}>Recognized by Govt. of India</div>
                                            </div>
                                        </div>
                                        <div className="flip-back" style={{ background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)", borderBottom: "6px solid #8a4700", borderRight: "6px solid #8a4700" }}>
                                            <div style={{ background: "rgba(255,255,255,0.98)", padding: "12px 16px", borderRadius: "14px", boxShadow: "0 8px 20px rgba(0,0,0,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Image src="/images/certifications/startup-india.png" alt="Start-up India" width={90} height={38} style={{ objectFit: "contain" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Tile 2 */}
                                <div className="flip-wrapper">
                                    <div className="flip-inner">
                                        <div className="flip-front" style={{ background: "#e07b00", borderBottom: "6px solid #b85e00", borderRight: "6px solid #b85e00" }}>
                                            <div style={{ fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                            <div>
                                                <div style={{ fontSize: "13px", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "4px" }}>Start-up<br />Odisha</div>
                                                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)" }}>Recognized by Govt. of Odisha</div>
                                            </div>
                                        </div>
                                        <div className="flip-back" style={{ background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)", borderBottom: "6px solid #8a4700", borderRight: "6px solid #8a4700" }}>
                                            <div style={{ background: "rgba(255,255,255,0.98)", padding: "12px 16px", borderRadius: "14px", boxShadow: "0 8px 20px rgba(0,0,0,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Image src="/images/certifications/startup-odisha.png" alt="Start-up Odisha" width={90} height={38} style={{ objectFit: "contain" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Tile 3 */}
                                <div className="flip-wrapper">
                                    <div className="flip-inner">
                                        <div className="flip-front" style={{ background: "#2d6a2d", borderBottom: "6px solid #1e4d1e", borderRight: "6px solid #1e4d1e" }}>
                                            <div style={{ fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                            <div>
                                                <div style={{ fontSize: "13px", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "4px" }}>NSIC<br />Registered</div>
                                                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)" }}>National Small Industries Corp.</div>
                                            </div>
                                        </div>
                                        <div className="flip-back" style={{ background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)", borderBottom: "6px solid #8a4700", borderRight: "6px solid #8a4700" }}>
                                            <div style={{ background: "rgba(255,255,255,0.98)", padding: "12px 16px", borderRadius: "14px", boxShadow: "0 8px 20px rgba(0,0,0,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Image src="/images/certifications/nsic.png" alt="NSIC Registered" width={90} height={38} style={{ objectFit: "contain" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mobile Tile 4 */}
                                <div className="flip-wrapper">
                                    <div className="flip-inner">
                                        <div className="flip-front" style={{ background: "#1a5276", borderBottom: "6px solid #123a54", borderRight: "6px solid #123a54" }}>
                                            <div style={{ fontSize: "14px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                            <div>
                                                <div style={{ fontSize: "13px", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "4px" }}>ISO<br />Certified</div>
                                                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.85)" }}>Application in progress</div>
                                            </div>
                                        </div>
                                        <div className="flip-back" style={{ background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)", borderBottom: "6px solid #8a4700", borderRight: "6px solid #8a4700" }}>
                                            <div style={{ background: "rgba(255,255,255,0.98)", padding: "12px 16px", borderRadius: "14px", boxShadow: "0 8px 20px rgba(0,0,0,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Image src="/images/certifications/iso.png" alt="ISO Certified" width={90} height={38} style={{ objectFit: "contain" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Description paragraphs --- */}
                            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.9, marginBottom: "14px", textAlign: "justify", }}>
                                At Green Filament, we combine innovation, engineering, and sustainability
                                to deliver high-performance solar energy solutions across Odisha. Our
                                expertise spans rooftop solar systems, solar street lighting, high mast
                                lighting infrastructure, and complete turnkey renewable energy solutions
                                designed to reduce operational costs and maximize long-term efficiency.
                            </p>

                            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.9, marginBottom: "14px", textAlign: "justify" }}>
                                With a strong focus on quality, reliability, and technical precision,
                                we work closely with commercial, industrial, institutional, and public
                                sector clients to create energy systems tailored to their specific
                                requirements.
                            </p>

                            <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.9, marginBottom: "28px", textAlign: "justify" }}>
                                We don&apos;t just install systems: we build dependable energy
                                infrastructure designed for the future.
                            </p>

                            {/* --- Stats row --- */}
                            <div style={{
                                display: "flex",
                                background: "#FFF8EE",
                                borderRadius: "10px",
                                border: "0.5px solid #F0EBE0",
                                overflow: "hidden",
                                marginBottom: "28px",
                            }}>
                                {[
                                    { value: "500+", label: "Successful Projects" },
                                    { value: "1MW+", label: "Solar Capacity Installed" },
                                    { value: "25 Year", label: "System Performance Life" },
                                    { value: "8+ Years", label: "Industry Experience." },
                                ].map((stat, i, arr) => (
                                    <div key={stat.label} style={{
                                        flex: 1,
                                        textAlign: "center",
                                        padding: "clamp(10px, 2vw, 16px) 6px",
                                        borderRight: i < arr.length - 1 ? "0.5px solid #F0EBE0" : "none",
                                    }}>
                                        <div style={{ fontSize: "clamp(14px, 2vw, 22px)", fontWeight: 700, color: "#1a1a1a" }}>
                                            {stat.value}
                                        </div>
                                        <div style={{ fontSize: "10px", color: "#777", marginTop: "3px" }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* --- CTA buttons --- */}
                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                <Link href="/about" style={{
                                    background: "#FDB92E",
                                    color: "#412402",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    padding: "10px 22px",
                                    borderRadius: "6px",
                                    textDecoration: "none",
                                    whiteSpace: "nowrap",
                                }}>
                                    Know More
                                </Link>
                                <Link href="/projects" style={{
                                    border: "1.5px solid #FDB92E",
                                    color: "#854F0B",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    padding: "10px 22px",
                                    borderRadius: "6px",
                                    textDecoration: "none",
                                    whiteSpace: "nowrap",
                                }}>
                                    Our Projects →
                                </Link>
                            </div>

                        </div>

                        {/* ============================================================
                RIGHT — desktop only 2x2 flip cards
                ============================================================ */}
                        <div className="desktop-cards cards-grid" style={{ display: "grid" }}>

                            {/* --- Tile 1: Start-up India --- */}
                            <div className="flip-wrapper">
                                <div className="flip-inner">
                                    <div className="flip-front" style={{ background: "#F5A000", borderBottom: "6px solid #c97200", borderRight: "6px solid #c97200" }}>
                                        <div style={{ fontSize: "18px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                        <div>
                                            <div style={{ fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "6px" }}>Start-up<br />India</div>
                                            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>Recognized by Govt. of India</div>
                                        </div>
                                    </div>
                                    <div
                                        className="flip-back"
                                        style={{
                                            background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)",
                                            borderBottom: "6px solid #8a4700",
                                            borderRight: "6px solid #8a4700",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "14px",
                                            padding: "24px",
                                        }}
                                    >
                                        {/* White premium logo card */}
                                        <div
                                            style={{
                                                background: "rgba(255,255,255,0.98)",
                                                padding: "16px 24px",
                                                borderRadius: "18px",
                                                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backdropFilter: "blur(10px)",
                                            }}
                                        >
                                            <Image
                                                src="/images/certifications/startup-india.png"
                                                alt="Start-up India"
                                                width={120}
                                                height={50}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Tile 2: Start-up Odisha --- */}
                            <div className="flip-wrapper">
                                <div className="flip-inner">
                                    <div className="flip-front" style={{ background: "#e07b00", borderBottom: "6px solid #b85e00", borderRight: "6px solid #b85e00" }}>
                                        <div style={{ fontSize: "18px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                        <div>
                                            <div style={{ fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "6px" }}>Start-up<br />Odisha</div>
                                            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>Recognized by Govt. of Odisha</div>
                                        </div>
                                    </div>

                                    <div
                                        className="flip-back"
                                        style={{
                                            background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)",
                                            borderBottom: "6px solid #8a4700",
                                            borderRight: "6px solid #8a4700",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "14px",
                                            padding: "24px",
                                        }}
                                    >
                                        {/* White premium logo card */}
                                        <div
                                            style={{
                                                background: "rgba(255,255,255,0.98)",
                                                padding: "16px 24px",
                                                borderRadius: "18px",
                                                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backdropFilter: "blur(10px)",
                                            }}
                                        >
                                            <Image
                                                src="/images/certifications/startup-odisha.png"
                                                alt="Start-up India"
                                                width={120}
                                                height={50}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --- Tile 3: NSIC --- */}
                            <div className="flip-wrapper">
                                <div className="flip-inner">
                                    <div className="flip-front" style={{ background: "#2d6a2d", borderBottom: "6px solid #1e4d1e", borderRight: "6px solid #1e4d1e" }}>
                                        <div style={{ fontSize: "18px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                        <div>
                                            <div style={{ fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "6px" }}>NSIC<br />Registered</div>
                                            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>National Small Industries Corp.</div>
                                        </div>
                                    </div>

                                    <div
                                        className="flip-back"
                                        style={{
                                            background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)",
                                            borderBottom: "6px solid #8a4700",
                                            borderRight: "6px solid #8a4700",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "14px",
                                            padding: "24px",
                                        }}
                                    >
                                        {/* White premium logo card */}
                                        <div
                                            style={{
                                                background: "rgba(255,255,255,0.98)",
                                                padding: "16px 24px",
                                                borderRadius: "18px",
                                                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backdropFilter: "blur(10px)",
                                            }}
                                        >
                                            <Image
                                                src="/images/certifications/nsic.png"
                                                alt="Start-up India"
                                                width={120}
                                                height={50}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* --- Tile 4: ISO --- */}
                            <div className="flip-wrapper">
                                <div className="flip-inner">
                                    <div className="flip-front" style={{ background: "#1a5276", borderBottom: "6px solid #123a54", borderRight: "6px solid #123a54" }}>
                                        <div style={{ fontSize: "18px", fontWeight: 800, color: "rgba(255,255,255,0.3)" }}>—</div>
                                        <div>
                                            <div style={{ fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: "6px" }}>ISO<br />Certified</div>
                                            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>Application in progress</div>
                                        </div>
                                    </div>

                                    <div
                                        className="flip-back"
                                        style={{
                                            background: "linear-gradient(135deg, #c97300 0%, #a05500 100%)",
                                            borderBottom: "6px solid #8a4700",
                                            borderRight: "6px solid #8a4700",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "14px",
                                            padding: "24px",
                                        }}
                                    >
                                        {/* White premium logo card */}
                                        <div
                                            style={{
                                                background: "rgba(255,255,255,0.98)",
                                                padding: "16px 24px",
                                                borderRadius: "18px",
                                                boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backdropFilter: "blur(10px)",
                                            }}
                                        >
                                            <Image
                                                src="/images/certifications/iso.png"
                                                alt="Start-up India"
                                                width={120}
                                                height={50}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}