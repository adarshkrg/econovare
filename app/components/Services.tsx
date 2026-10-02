"use client";

/* ============================================================
   SERVICES SECTION
   - Desktop: 3 cards per page, auto flip every 2s, progress bar
     hover = unique color per card, Read More appears
   - Mobile: single card, white bg, colored icon + shadow,
     auto flip every 2s, 0.5s fade, manual arrows centered
   - Icons: square rounded bg (Option 5)
   ============================================================ */

import { useState, useEffect, useRef } from "react";

/* ============================================================
   SERVICE DATA
   ============================================================ */
const services = [
  {
    title: "Site Assessment",
    desc: "Precision analysis of your site — roof structure, shadow study, energy consumption, and feasibility before every project.",
    color: "#F5A000",
    shadow: "rgba(245,160,0,0.12)",
    iconColor: "#F5A000",
    iconBg: "#FFF3D6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "System Design",
    desc: "Engineered for maximum performance — custom solar system design based on your load profile, budget, and site conditions.",
    color: "#2d6a2d",
    shadow: "rgba(45,106,45,0.12)",
    iconColor: "#2d6a2d",
    iconBg: "#e8f5e9",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
  {
    title: "Energy Audit",
    desc: "Know your consumption, control your costs — detailed energy audit to identify waste and optimize solar system sizing.",
    color: "#1a5276",
    shadow: "rgba(26,82,118,0.12)",
    iconColor: "#1a5276",
    iconBg: "#e8f4f8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Energy Management",
    desc: "Smart control of every watt — energy management systems to monitor, optimize, and maximize your solar output.",
    color: "#e07b00",
    shadow: "rgba(224,123,0,0.12)",
    iconColor: "#e07b00",
    iconBg: "#FFF3D6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Net Metering",
    desc: "Sell what you don't use — complete DISCOM approval, grid connection, and net metering registration support.",
    color: "#0e7490",
    shadow: "rgba(14,116,144,0.12)",
    iconColor: "#0e7490",
    iconBg: "#e0f7fa",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Subsidy Advisory",
    desc: "Maximum benefits, zero hassle — end-to-end support for PM Surya Ghar, KUSUM, and Odisha state subsidy schemes.",
    color: "#6d28d9",
    shadow: "rgba(109,40,217,0.12)",
    iconColor: "#6d28d9",
    iconBg: "#ede9fe",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "AMC & Support",
    desc: "Lifetime performance guarantee — annual maintenance contracts, on-call repairs, and periodic system inspections.",
    color: "#b45309",
    shadow: "rgba(180,83,9,0.12)",
    iconColor: "#b45309",
    iconBg: "#fef3c7",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Turnkey Execution",
    desc: "Complete end-to-end delivery — from design and procurement to installation, commissioning, and handover documentation.",
    color: "#065f46",
    shadow: "rgba(6,95,70,0.12)",
    iconColor: "#065f46",
    iconBg: "#d1fae5",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Preventive Maintenance",
    desc: "Scheduled upkeep before problems arise — regular cleaning, testing, and component checks to maximize system life.",
    color: "#be123c",
    shadow: "rgba(190,18,60,0.12)",
    iconColor: "#be123c",
    iconBg: "#ffe4e6",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
];

const PER_PAGE = 3;
const TOTAL_PAGES = Math.ceil(services.length / PER_PAGE);
const AUTO_MS = 2000;

export default function Services() {

  /* ============================================================
     DESKTOP STATE
     ============================================================ */
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const desktopTimer = useRef<NodeJS.Timeout | null>(null);

  /* --- Desktop auto flip --- */
  useEffect(() => {
    if (isPaused) return;
    desktopTimer.current = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / (AUTO_MS / 50));
        if (next >= 100) {
          setPage((p) => (p + 1) % TOTAL_PAGES);
          return 0;
        }
        return next;
      });
    }, 50);
    return () => { if (desktopTimer.current) clearInterval(desktopTimer.current); };
  }, [isPaused]);

  function goPage(p: number) { setPage(p); setProgress(0); }
  function navigateDesktop(dir: number) { goPage((page + dir + TOTAL_PAGES) % TOTAL_PAGES); }

  /* ============================================================
     MOBILE STATE
     ============================================================ */
  const [mobileCard, setMobileCard] = useState(0);
  const [mobileAnimate, setMobileAnimate] = useState(true);
  const mobileTimer = useRef<NodeJS.Timeout | null>(null);

  function startMobileTimer() {
    if (mobileTimer.current) clearInterval(mobileTimer.current);
    mobileTimer.current = setInterval(() => flipMobile(1), AUTO_MS);
  }

  function flipMobile(dir: number) {
    setMobileAnimate(false);
    setTimeout(() => {
      setMobileCard((prev) => (prev + dir + services.length) % services.length);
      setMobileAnimate(true);
    }, 50);
  }

  function navigateMobile(dir: number) {
    flipMobile(dir);
    startMobileTimer();
  }

  useEffect(() => {
    startMobileTimer();
    return () => { if (mobileTimer.current) clearInterval(mobileTimer.current); };
  }, []);

  /* ============================================================
     RENDER
     ============================================================ */
  const pageServices = services.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const current = services[mobileCard];

  return (
    <>
      {/* ============================================================
          STYLES
          ============================================================ */}
      <style>{`

        /* ── Desktop card ── */
        .s-card {
          border-radius: 16px;
          padding: clamp(20px, 2.5vw, 28px) clamp(18px, 2vw, 24px);
          cursor: pointer;
          transition: all 0.35s ease;
          background: #ffffff;
          border: 0.5px solid #E8E2D8;
          min-height: clamp(240px, 25vw, 300px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .s-card .s-title {
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.25;
          margin-bottom: 16px;
          transition: color 0.35s;
        }
        .s-card.hovered .s-title { color: #fff; }
        .s-card .s-desc {
          font-size: 13px;
          color: #555;
          line-height: 1.75;
          flex: 1;
          margin-bottom: 14px;
          transition: color 0.35s;
          text-align: justify;
        }
        .s-card.hovered .s-desc { color: rgba(255,255,255,0.92); }
        .s-read-more {
          display: none;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
        }
        .s-card.hovered .s-read-more { display: flex; }

        /* ── Desktop grid ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }

        /* ── Arrow buttons ── */
        .s-arrow {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #E8E2D8;
          background: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          color: #1a1a1a;
          flex-shrink: 0;
        }
        .s-arrow:hover { background: #F5A000; border-color: #F5A000; color: #fff; }

        /* ── Dots ── */
        .s-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #E8E2D8;
          cursor: pointer;
          transition: all 0.3s;
          border: none;
        }
        .s-dot.active { background: #F5A000; width: 24px; border-radius: 4px; }

        /* ── Mobile card fade animation ── */
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .mobile-card-animate {
          animation: fadeSlideIn 0.5s ease forwards;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .services-desktop { display: none !important; }
          .services-mobile  { display: block !important; }
        }
        @media (min-width: 769px) {
          .services-desktop { display: block !important; }
          .services-mobile  { display: none !important; }
        }

      `}</style>

      <section
        id="services"
        style={{ background: "#FAFAFA", padding: "clamp(40px, 8vw, 100px) 0" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 80px)",
        }}>

          {/* ============================================================
              SECTION HEADER
              ============================================================ */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>

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
              marginBottom: "14px",
            }}>
              Our Services
            </div>

            {/* --- Title --- */}
            <h2 style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "10px",
            }}>
              Powering Homes, Businesses, Industries & Communities
            </h2>

            {/* --- Subtitle --- */}
            <p style={{
              fontSize: "14px",
              color: "#777",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Reliable solar energy solutions tailored for long-term performance.
            </p>

          </div>

          {/* ============================================================
              DESKTOP — 3 cards, auto flip, progress bar
              ============================================================ */}
          <div className="services-desktop">

            {/* --- Cards grid --- */}
            <div className="services-grid">
              {pageServices.map((service, i) => {
                const globalIndex = page * PER_PAGE + i;
                const isHovered = hoveredCard === globalIndex;
                return (
                  <div
                    key={service.title}
                    className={`s-card${isHovered ? " hovered" : ""}`}
                    style={{
                      background: isHovered ? service.color : "#fff",
                      borderColor: isHovered ? service.color : "#E8E2D8",
                      transform: isHovered ? "scale(1.03)" : "scale(1)",
                      boxShadow: isHovered
                        ? `0 12px 32px ${service.shadow}`
                        : "none",
                    }}
                    onMouseEnter={() => setHoveredCard(globalIndex)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div>
                      {/* Title */}
                      <div className="s-title">{service.title}</div>

                      {/* Square icon */}
                      <div style={{
                        width: "48px", height: "48px",
                        borderRadius: "10px",
                        background: isHovered
                          ? "rgba(255,255,255,0.25)"
                          : service.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "16px",
                        transition: "background 0.35s",
                      }}>
                        <span style={{ color: isHovered ? "#fff" : service.iconColor }}>
                          {service.icon}
                        </span>
                      </div>

                      {/* Desc */}
                      <div className="s-desc">{service.desc}</div>
                    </div>

                    {/* Read more */}
                    <div className="s-read-more">
                      <div style={{
                        width: "28px", height: "28px",
                        background: "rgba(255,255,255,0.3)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      Read More
                    </div>
                  </div>
                );
              })}
            </div>

            {/* --- Desktop navigation --- */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}>
              <button className="s-arrow" onClick={() => navigateDesktop(-1)} aria-label="Previous">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <div style={{ display: "flex", gap: "8px" }}>
                {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                  <button
                    key={i}
                    className={`s-dot${page === i ? " active" : ""}`}
                    onClick={() => goPage(i)}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>
              <button className="s-arrow" onClick={() => navigateDesktop(1)} aria-label="Next">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

          {/* ============================================================
              MOBILE — single card, white bg, colored icon+shadow,
              auto flip 2s, 0.5s fade, arrows centered below
              ============================================================ */}
          <div className="services-mobile" style={{ display: "none" }}>

            {/* --- Single card --- */}
            <div
              className={mobileAnimate ? "mobile-card-animate" : ""}
              style={{
                borderRadius: "14px",
                border: "0.5px solid #F0EBE0",
                marginBottom: "16px",
                background: "#fff",
                padding: "20px",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: `0 6px 24px ${current.shadow}`,
              }}
            >
              <div>
                {/* --- Square icon --- */}
                <div style={{
                  width: "48px", height: "48px",
                  borderRadius: "10px",
                  background: current.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                }}>
                  <span style={{ color: current.iconColor }}>{current.icon}</span>
                </div>

                {/* --- Title --- */}
                <div style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}>
                  {current.title}
                </div>

                {/* --- Description --- */}
                <div style={{
                  fontSize: "13px",
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: "16px",
                }}>
                  {current.desc}
                </div>
              </div>

              {/* --- Read More --- */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "7px",
                fontSize: "12px",
                fontWeight: 600,
                color: current.iconColor,
              }}>
                <div style={{
                  width: "22px", height: "22px",
                  background: current.iconBg,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                Read More
              </div>
            </div>

            {/* --- Arrows centered below --- */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "14px",
            }}>
              <button className="s-arrow" onClick={() => navigateMobile(-1)} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="s-arrow" onClick={() => navigateMobile(1)} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
} 