/* ============================================================
   ABOUT PAGE
   - Brand positioning — engineering solar for everyday India
   - HERO — muted amber + dot grid + glow
   - Our Journey section
   - Real Problems. Solar Solutions. cards
   - Stats bar
   - Why Green Filament cards
   - Certifications
   - CTA banner
   - Fully responsive
   ============================================================ */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NextImage from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Green Filament Solar Energy Company Odisha",
    description:
        "Green Filament is an Odisha-based solar energy company founded in 2018. NSIC Registered, Start-up India recognized. 500+ projects across 12+ districts in Bhubaneswar and beyond.",
    keywords: [
        "about Green Filament",
        "solar company Odisha",
        "solar energy Bhubaneswar",
        "NSIC registered solar company",
        "Start-up India solar",
        "solar installation Odisha",
        "renewable energy company Odisha",
        "solar energy since 2018",
        "clean energy Odisha",
        "solar brand India",
    ],
    alternates: {
        canonical: "https://greenfilament.com/about",
    },
    openGraph: {
        title: "About Us | Green Filament Solar Energy Company Odisha",
        description:
            "Odisha-based solar energy company since 2018. NSIC Registered, Start-up India recognized. 500+ projects across 12+ districts.",
        url: "https://greenfilament.com/about",
        siteName: "Green Filament",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "About Green Filament Solar Energy Company Odisha" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Green Filament Solar Energy Company Odisha",
        description:
            "Odisha-based solar energy company since 2018. 500+ projects. NSIC Registered. Start-up India recognized.",
        images: ["/images/og-image.jpg"],
    },
};

/* --- Why Choose Us data --- */
const whyCards = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Government Certified",
        desc: "NSIC Registered, Start-up India & Start-up Odisha recognized.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        title: "Engineering First",
        desc: "We design and engineer our own solar products — not just install.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
        ),
        title: "End-to-End",
        desc: "From assessment to commissioning — complete project ownership.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
        title: "Subsidy Expertise",
        desc: "We handle all paperwork for PM Surya Ghar, KUSUM & OREDA.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
        ),
        title: "Tier-1 Quality",
        desc: "Only premium components used — built to last 25+ years.",
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
        title: "Long-term Support",
        desc: "Dedicated AMC, maintenance, and after-sales support.",
    },
];

/* --- Problems we solve data --- */
const problems = [
    {
        tag: "COOKING",
        title: "Smoke-free kitchens. Zero LPG.",
        desc: "Our licensed solar cooking system eliminates LPG dependency for homes, schools, and community kitchens across Odisha.",
    },
    {
        tag: "LIGHTING",
        title: "Every road lit. Zero electricity bill.",
        desc: "High-performance solar street lights engineered for Odisha's roads, villages, campuses, and industrial zones.",
    },
    {
        tag: "IRRIGATION",
        title: "No diesel. Free water for farms.",
        desc: "Solar pump systems under KUSUM scheme — helping farmers across Odisha irrigate at zero fuel cost.",
    },
    {
        tag: "POWER",
        title: "Cut bills. Own your energy.",
        desc: "Rooftop solar power plants for homes and businesses — with net metering and subsidy support.",
    },
];

/* --- Stats data --- */
const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "1MW+", label: "Solar Capacity" },
    { value: "12+", label: "Districts Covered" },
    { value: "8+", label: "Years of Excellence" },
];

/* --- Certifications data --- */
const certs = [
    { src: "/images/certifications/startup-india.png", alt: "Start-up India" },
    { src: "/images/certifications/startup-odisha.png", alt: "Start-up Odisha" },
    { src: "/images/certifications/nsic.png", alt: "NSIC Registered" },
    { src: "/images/certifications/msme.png", alt: "MSME Registered" },
    { src: "/images/certifications/iso.png", alt: "ISO Applied" },
];

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>

                {/* ============================================================
            ABOUT PAGE STYLES
            ============================================================ */}
                <style>{`

          /* ── Why card ── */
          .why-card {
            background: #ffffff;
            border-radius: 14px;
            border: 0.5px solid #E8E2D8;
            padding: 24px;
            transition: all 0.3s;
          }
          .why-card:hover {
            box-shadow: 0 8px 24px rgba(245,160,0,0.12);
            border-color: #FAC775;
            transform: translateY(-3px);
          }

          /* ── Why icon ── */
          .why-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            background: #FFF3D6;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 14px;
          }

          /* ── Problem card ── */
          .prob-card {
            background: #ffffff;
            border-radius: 14px;
            border: 0.5px solid #E8E2D8;
            padding: 24px;
            border-top: 3px solid #FDB92E;
            transition: all 0.3s;
          }
          .prob-card:hover {
            box-shadow: 0 8px 24px rgba(245,160,0,0.12);
            transform: translateY(-3px);
          }

          /* ── Grids ── */
          .why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .prob-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .story-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          /* ── Responsive ── */
          @media (max-width: 1024px) {
            .why-grid { grid-template-columns: repeat(2, 1fr); }
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .why-grid { grid-template-columns: 1fr; }
            .prob-grid { grid-template-columns: 1fr; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            .story-grid { grid-template-columns: 1fr; }
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

                    {/* --- Content --- */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div style={{
                            fontSize: "10px",
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.85)",
                            letterSpacing: "3px",
                            marginBottom: "12px",
                        }}>
                            ABOUT GREEN FILAMENT
                        </div>
                        <h1 style={{
                            fontSize: "clamp(26px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: "14px",
                            lineHeight: 1.25,
                        }}>
                            Engineering Solar for Everyday India
                        </h1>
                        <p style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "520px",
                            margin: "0 auto",
                            lineHeight: 1.8,
                        }}>
                            Renewable energy brand engineering next-generation solar solutions — built for Indian conditions, designed for lasting impact.
                        </p>
                    </div>

                </div>


                {/* ============================================================
            OUR JOURNEY
            ============================================================ */}
                <div style={{
                    background: "#ffffff",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div className="story-grid">

                            {/* Left: text */}
                            <div>
                                <div style={{
                                    display: "inline-block",
                                    background: "#FFF3D6",
                                    border: "0.5px solid #FAC775",
                                    color: "#854F0B",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    padding: "4px 14px",
                                    borderRadius: "20px",
                                    marginBottom: "16px",
                                }}>
                                    Our Journey
                                </div>
                                <h2 style={{
                                    fontSize: "clamp(20px, 2.5vw, 28px)",
                                    fontWeight: 700,
                                    color: "#1a1a1a",
                                    marginBottom: "16px",
                                    lineHeight: 1.3,
                                    textAlign: "justify"
                                }}>
                                    From a Mission to Make Solar accessible to Building Products that Transform Lives
                                </h2>
                                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.85, marginBottom: "14px", textAlign: "justify" }}>
                                    What started in 2018 as a mission to make renewable energy more accessible has evolved into a growing clean energy brand trusted across Odisha for quality, performance, and long-term impact.
                                </p>
                                
                                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.85, marginBottom: "14px", textAlign: "justify" }}>
                                    From high-performance solar street lighting to next-generation solar cooking technology, our products are engineered to solve real-world energy challenges with reliability and sustainability at the core.
                                </p>
                                
                                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.85, textAlign: "justify" }}>
                                    Today, Green Filament powers homes, farms, roads, institutions, and communities with a strong focus on smart design, durability, and practical innovation built for Indian conditions.
                                </p>
                                
                                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.85, marginTop: "14px", textAlign: "justify" }}>
                                    To read the full story of how we started, what we learned, and how we built trust across Odisha,{" "}
                                    <Link href="/solar-company-odisha" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "none" }}>
                                        read our complete company story here.
                                    </Link>
                                </p>
                            </div>

                            {/* Right: photo */}
                            <div style={{
                                position: "relative",
                                height: "clamp(260px, 30vw, 380px)",
                                borderRadius: "16px",
                                overflow: "hidden",
                                background: "#e8f0e8",
                                border: "0.5px solid #E8E2D8",
                            }}>
                                <NextImage
                                    src="/images/about/story.jpg"
                                    alt="Green Filament solar"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    loading="eager"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* ============================================================
            REAL PROBLEMS. SOLAR SOLUTIONS.
            ============================================================ */}
                <div style={{
                    background: "#FAFAFA",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        {/* Header */}
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
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
                                What We Solve
                            </div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                                Real Problems. Solar Solutions.
                            </h2>
                            <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                                Every product we build addresses a specific energy challenge faced by Indian homes, farms, and communities.
                            </p>
                        </div>

                        {/* Problem cards */}
                        <div className="prob-grid">
                            {problems.map((p) => (
                                <div key={p.tag} className="prob-card">
                                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#F5A000", letterSpacing: "1px", marginBottom: "8px" }}>
                                        {p.tag}
                                    </div>
                                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                                        {p.title}
                                    </div>
                                    <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify" }}>
                                        {p.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* ============================================================
            STATS BAR
            ============================================================ */}
                <div style={{
                    background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 100%)",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div className="stats-grid">
                            {stats.map((stat, i) => (
                                <div key={stat.label} style={{
                                    textAlign: "center",
                                    padding: "clamp(20px, 3vw, 32px) 16px",
                                    borderRight: i < stats.length - 1 ? "0.5px solid rgba(255,255,255,0.2)" : "none",
                                }}>
                                    <div style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#fff" }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ============================================================
            WHY GREEN FILAMENT
            ============================================================ */}
                <div style={{
                    background: "#ffffff",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        {/* Header */}
                        <div style={{ textAlign: "center", marginBottom: "36px" }}>
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
                                Why Green Filament
                            </div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                                Built Different. Built for India.
                            </h2>
                        </div>

                        {/* Why cards */}
                        <div className="why-grid">
                            {whyCards.map((card) => (
                                <div key={card.title} className="why-card">
                                    <div className="why-icon">{card.icon}</div>
                                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                                        {card.title}
                                    </div>
                                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>
                                        {card.desc}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* ============================================================
            CERTIFICATIONS
            ============================================================ */}
                <div style={{
                    background: "#FAFAFA",
                    padding: "clamp(32px, 4vw, 48px) clamp(24px, 5vw, 80px)",
                    textAlign: "center",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div style={{ fontSize: "11px", color: "#aaa", letterSpacing: "1px", marginBottom: "20px" }}>
                            RECOGNIZED & REGISTERED BY
                        </div>
                        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                            {certs.map((cert) => (
                                <div key={cert.alt} style={{
                                    width: "100px",
                                    height: "45px",
                                    background: "#fff",
                                    borderRadius: "6px",
                                    border: "0.5px solid #E8E2D8",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    overflow: "hidden",
                                }}>
                                    <NextImage
                                        src={cert.src}
                                        alt={cert.alt}
                                        width={100}
                                        height={45}
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ============================================================
            CTA BANNER
            ============================================================ */}
                <div style={{
                    background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)",
                    padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
                        <svg width="100%" height="100%">
                            <defs>
                                <pattern id="cta-about" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#cta-about)" />
                        </svg>
                    </div>
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                            Ready to Go Solar?
                        </h2>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
                            Join 500+ homes and businesses across Odisha powered by Green Filament
                        </p>
                        <Link href="/connect" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            background: "#fff",
                            borderRadius: "40px",
                            padding: "6px 6px 6px 22px",
                            textDecoration: "none",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        }}>
                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>
                                Connect With Us
                            </span>
                            <div style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "50%",
                                background: "#FDB92E",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7M7 7h10v10" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}