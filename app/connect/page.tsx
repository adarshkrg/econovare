/* ============================================================
   CONNECT PAGE
   - Amber gradient header
   - Contact cards left + Google Maps right
   - Fully responsive
   ============================================================ */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Solar Company in Bhubaneswar, Odisha | Green Filament",
  description:
    "Contact Green Filament — Odisha's trusted solar energy company. Call, WhatsApp, or email us for free site assessment, solar installation, and subsidy guidance in Bhubaneswar.",
  keywords: [
    "contact Green Filament",
    "solar company Bhubaneswar contact",
    "solar installation enquiry Odisha",
    "solar quote Bhubaneswar",
    "Green Filament phone number",
    "solar energy contact Odisha",
    "free solar assessment Odisha",
    "solar consultant Bhubaneswar",
    "WhatsApp solar Odisha",
    "solar company address Bhubaneswar",
  ],
  alternates: {
    canonical: "https://greenfilament.com/connect",
  },
  openGraph: {
    title: "Contact Us | Solar Company in Bhubaneswar, Odisha | Green Filament",
    description:
      "Call, WhatsApp, or email Green Filament for free site assessment and solar installation in Bhubaneswar, Odisha.",
    url: "https://greenfilament.com/connect",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Contact Green Filament Solar Energy Bhubaneswar" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Green Filament | Solar Company Bhubaneswar",
    description:
      "Call, WhatsApp, or email us for free solar assessment and installation in Odisha.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ConnectPage() {
    return (
        <>
            <Navbar />
            <main>

                {/* ============================================================
            CONNECT PAGE STYLES
            ============================================================ */}
                <style>{`

          /* ── Contact card ── */
          .contact-card {
            background: #fff;
            border-radius: 12px;
            border: 0.5px solid #E8E2D8;
            padding: 20px;
            display: flex;
            align-items: center;
            gap: 14px;
            text-decoration: none;
            transition: all 0.2s;
          }
          .contact-card:hover {
            border-color: #FAC775;
            box-shadow: 0 4px 16px rgba(253,185,46,0.12);
            transform: translateY(-2px);
          }

          /* ── Contact icon ── */
          .contact-icon {
            width: 48px;
            height: 48px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          /* ── Connect grid ── */
          .connect-grid {
            display: grid;
            grid-template-columns: 1fr 1.4fr;
            gap: 0;
            min-height: 500px;
          }

          /* ── Responsive ── */
          @media (max-width: 768px) {
            .connect-grid {
              grid-template-columns: 1fr;
            }
          }

        `}</style>

    {/* ============================================================
    HERO — muted amber + dot grid + glow
    ============================================================ */}
                <div style={{
                    background: "linear-gradient(135deg, #c97200 0%, #d4820a 50%, #b36200 100%)",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}>

                    {/* --- Dot grid --- */}
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="about-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                                    <circle cx="12" cy="12" r="1.5" fill="white" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#about-dots)" />
                        </svg>
                    </div>

                    {/* --- Center glow --- */}
                    <div style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%,-50%)",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* --- Top right glow circle --- */}
                    <div style={{
                        position: "absolute",
                        right: "-60px",
                        top: "-60px",
                        width: "280px",
                        height: "280px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.06)",
                        pointerEvents: "none",
                    }} />

                    {/* --- Bottom left glow circle --- */}
                    <div style={{
                        position: "absolute",
                        left: "-40px",
                        bottom: "-40px",
                        width: "200px",
                        height: "200px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.04)",
                        pointerEvents: "none",
                    }} />

                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={{
                            display: "inline-block",
                            background: "rgba(255,255,255,0.2)",
                            border: "0.5px solid rgba(255,255,255,0.4)",
                            color: "#fff",
                            fontSize: "15px",
                            fontWeight: 600,
                            padding: "4px 14px",
                            borderRadius: "20px",
                            marginBottom: "12px",
                            letterSpacing: "1px",
                        }}>
                            GET IN TOUCH
                        </div>
                        <h1 style={{
                            fontSize: "clamp(28px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: "10px",
                        }}>
                            Let&apos;s Connect
                        </h1>
                        <p style={{
                            fontSize: "20px",
                            color: "rgba(255,255,255,0.88)",
                            lineHeight: 1.7,
                        }}>
                            We Respond Fast — Call, Email, or WhatsApp us.
                        </p>
                    </div>

                </div>

                {/* ============================================================
            MAIN CONTENT — contact cards + map
            ============================================================ */}
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "clamp(40px, 5vw, 60px) clamp(24px, 5vw, 80px)",
                }}>

                    <div style={{
                        background: "#fff",
                        borderRadius: "16px",
                        border: "0.5px solid #E8E2D8",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    }}>
                        <div className="connect-grid">

                            {/* ============================================================
                  LEFT — contact cards
                  ============================================================ */}
                            <div style={{
                                padding: "clamp(24px, 3vw, 36px)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                borderRight: "0.5px solid #E8E2D8",
                            }}>

                                <div style={{
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    color: "#1a1a1a",
                                    marginBottom: "4px",
                                    letterSpacing: "0.5px",
                                }}>
                                    Contact Details
                                </div>

                                {/* --- Phone --- */}
                                <a href="tel:+919337256398" className="contact-card">
                                    <div className="contact-icon" style={{ background: "#FFF3D6" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>CALL US</div>
                                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a" }}>+91 93372 56398</div>
                                    </div>
                                </a>

                                {/* --- Email --- */}
                                <a href="mailto:connect@greenfilament.com" className="contact-card">
                                    <div className="contact-icon" style={{ background: "#FFF3D6" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>EMAIL US</div>
                                        <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>connect@greenfilament.com</div>
                                    </div>
                                </a>

                                {/* --- WhatsApp --- */}
                                <a href="https://wa.me/919337256398" target="_blank" rel="noopener noreferrer" className="contact-card">
                                    <div className="contact-icon" style={{ background: "#d1fae5" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>WHATSAPP</div>
                                        <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a" }}>+91 93372 56398</div>
                                    </div>
                                </a>

                                {/* --- Address --- */}
                                <div className="contact-card" style={{ cursor: "default" }}>
                                    <div className="contact-icon" style={{ background: "#FFF3D6" }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "2px" }}>VISIT US</div>
                                        <div style={{ fontSize: "12px", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.7 }}>
                                            628/1333, Lane 1, Laxmi Vihar,<br />
                                            Tankapani Road,Bhubaneswar, Odisha, 751002
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* ============================================================
                  RIGHT — Google Maps
                  ============================================================ */}
                            <div style={{ position: "relative", minHeight: "500px" }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.4486312541903!2d85.8682607!3d20.2402205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a191c129d209%3A0x6747f7ab125e3dda!2sM%2Fs%20Green%20Filament!5e0!3m2!1sen!2sin!4v1779211990712!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                        </div>
                    </div>

                </div>

            </main>
            <Footer />
        </>
    );
}