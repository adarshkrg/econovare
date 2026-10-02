/* ============================================================
   CTA BANNER COMPONENT
   - Amber gradient + solar grid pattern
   - Bold headline + pill button with arrow circle
   - WhatsApp + Call CTAs
   ============================================================ */

import Link from "next/link";

export default function CTABanner() {
    return (
        <>
            <style>{`
        /* ── CTA pill button ── */
        .cta-pill {
          display: inline-flex;
          align-items: center;
          gap: 0;
          background: #fff;
          border-radius: 40px;
          padding: 6px 6px 6px 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          text-decoration: none;
          transition: all 0.2s;
        }
        .cta-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.2);
        }
        .cta-pill-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #FDB92E;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 12px;
          flex-shrink: 0;
        }

        /* ── Secondary buttons ── */
        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid rgba(255,255,255,0.5);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 10px 20px;
          border-radius: 40px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .cta-secondary:hover {
          background: rgba(255,255,255,0.15);
        }
      `}</style>

            <section style={{
                background: "#ffffff",
                padding: "0 clamp(24px, 5vw, 80px)",
                paddingBottom: "clamp(40px, 6vw, 80px)",
            }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                    {/* ── CTA Card ── */}
                    <div style={{
                        borderRadius: "24px",
                        overflow: "hidden",
                        position: "relative",
                        padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 60px)",
                        textAlign: "center",
                        background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)",
                    }}>

                        {/* --- Solar grid pattern --- */}
                        <div style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="solargrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#solargrid)" />
                            </svg>
                        </div>

                        {/* --- Sun glow top right --- */}
                        <div style={{
                            position: "absolute",
                            right: "8%",
                            top: "-30%",
                            width: "340px",
                            height: "340px",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.12)",
                            pointerEvents: "none",
                        }} />

                        {/* --- Bottom glow --- */}
                        <div style={{
                            position: "absolute",
                            left: "10%",
                            bottom: "-20%",
                            width: "240px",
                            height: "240px",
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.08)",
                            pointerEvents: "none",
                        }} />

                        {/* --- Content --- */}
                        <div style={{ position: "relative", zIndex: 1 }}>

                            {/* Title */}
                            <h2 style={{
                                fontSize: "clamp(26px, 4vw, 42px)",
                                fontWeight: 700,
                                color: "#fff",
                                marginBottom: "12px",
                                lineHeight: 1.3,
                            }}>
                                Ready to Start<br />Saving with Solar?
                            </h2>

                            {/* Subtitle */}
                            <p style={{
                                fontSize: "14px",
                                color: "rgba(255,255,255,0.88)",
                                marginBottom: "32px",
                                lineHeight: 1.7,
                            }}>
                                Join 500+ homes and businesses across Odisha running on clean, free solar energy.
                            </p>

                            {/* Buttons row */}
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "14px",
                                flexWrap: "wrap",
                            }}>

                                {/* --- Primary CTA --- */}
                                <Link href="/connect" className="cta-pill">
                                    <span style={{
                                        fontSize: "14px",
                                        fontWeight: 700,
                                        color: "#1a1a1a",
                                    }}>
                                         Connect With Us
                                    </span>
                                    <div className="cta-pill-icon">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17L17 7M7 7h10v10" />
                                        </svg>
                                    </div>
                                </Link>                                                             

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}