"use client";

/* ============================================================
   TESTIMONIALS SECTION
   - 3 cards visible, 4th partially cut on right
   - Stars + review text + avatar + name + location
   - Circle arrows: white outlined left, amber filled right
   - Horizontal scroll with arrow navigation
   - Warm gradient background
   - Fully responsive
   ============================================================ */

import { useRef } from "react";

/* --- Testimonials data --- */
const testimonials = [
  {
    name: "A VENKETESU",
    location: "Gopalpur,Berhampur,Odisha",
    rating: 5,
    text: "The team did a very good job. Street light installation was smooth and the finishing was clean. Thank you Green Filament for your excellent job.",
    initial: "S",
  },
  {
    name: "Trilochan Sahoo",
    location: "Cuttack, Odisha",
    rating: 5,
    text: "Quick response and fast installation. The PM Surya Ghar Yojana is working as expected. Good team and excellent service.",
    initial: "P",
  },
  {
    name: "Aleya Nanda",
    location: "Sonpur, Odisha",
    rating: 4,
    text: "Excellent service ! Installatn was quick and the street light working well. Highly recommended.",
    initial: "B",
  },
  {
    name: "Mamata Behera",
    location: "Dhenkanal, Odisha",
    rating: 5,
    text: "Excellent service from start to finish. The street lights installed in our village have made such a difference. Zero electricity bills for our gram panchayat now.",
    initial: "M",
  },
  {
    name: "Rajesh Mohanty",
    location: "Bhubaneswar, Odisha",
    rating: 5,
    text: "Green Filament transformed our energy costs completely. The team was professional, the installation was seamless, and we started saving from day one.",
    initial: "R",
  },
  {
    name: "Anita Das",
    location: "Berhampur, Odisha",
    rating: 5,
    text: "We got our rooftop solar installed under PM Surya Ghar scheme. Green Filament handled everything from application to commissioning. Highly recommended!",
    initial: "A",
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  /* --- Scroll cards by one card width --- */
  function scroll(dir: number) {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.querySelector(".t-card")?.clientWidth || 300;
      scrollRef.current.scrollBy({ left: dir * (cardWidth + 16), behavior: "smooth" });
    }
  }

  return (
    <>
      {/* ============================================================
          TESTIMONIALS STYLES
          ============================================================ */}
      <style>{`

        /* ── Card ── */
        .t-card {
          background: #ffffff;
          border-radius: 20px;
          padding: clamp(20px, 2.5vw, 28px) clamp(18px, 2vw, 24px);
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 2px 16px rgba(0,0,0,0.06);
          border: 0.5px solid #F0EBE0;
          min-height: 220px;
          width: calc((100% - 48px) / 3);
          transition: all 0.3s ease;
        }
        .t-card:hover {
          box-shadow: 0 8px 28px rgba(245,160,0,0.12);
          border-color: #FAC775;
          transform: translateY(-3px);
        }

        /* ── Stars ── */
        .t-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 16px;
        }
        .t-star { color: #FDB92E; font-size: 16px; }
        .t-star-empty { color: #E8E2D8; font-size: 16px; }

        /* ── Review text ── */
        .t-text {
          font-size: 13px;
          color: #333;
          line-height: 1.85;
          flex: 1;
          margin-bottom: 20px;
        }

        /* ── Avatar ── */
        .t-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, #FFF3D6, #FDB92E);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: #412402;
          flex-shrink: 0;
        }

        /* ── Circle arrow buttons ── */
        .t-arrow {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .t-arrow-white {
          background: #ffffff;
          border: 1.5px solid #E8E2D8;
          color: #1a1a1a;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }
        .t-arrow-white:hover {
          border-color: #FDB92E;
          color: #FDB92E;
        }
        .t-arrow-amber {
          background: #FDB92E;
          border: none;
          color: #ffffff;
          box-shadow: 0 6px 20px rgba(253,185,46,0.4);
        }
        .t-arrow-amber:hover {
          background: #F5A000;
        }

        /* ── Scroll container ── */
        .t-scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
          padding: 8px 24px;
          margin-bottom: 32px;
        }
        .t-scroll::-webkit-scrollbar { display: none; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .t-card { width: calc((100% - 32px) / 2); }
        }
        @media (max-width: 640px) {
          .t-card { width: clamp(260px, 80vw, 320px); }
        }

      `}</style>

      <section id="testimonials" style={{
        background: "linear-gradient(135deg, #FFF8EE 0%, #FAFAFA 60%, #FFF8EE 100%)",
        padding: "clamp(60px, 8vw, 100px) 0",
        overflow: "hidden",
      }}>

        {/* ============================================================
            SECTION HEADER
            ============================================================ */}
        <div style={{ textAlign: "center", marginBottom: "36px", padding: "0 clamp(24px, 5vw, 80px)" }}>

          {/* --- Label --- */}
          <div style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "#FDB92E",
            marginBottom: "10px",
            letterSpacing: "0.5px",
          }}>
            Testimonials
          </div>

          {/* --- Title --- */}
          <h2 style={{
            fontSize: "clamp(22px, 3vw, 32px)",
            fontWeight: 700,
            color: "#1a1a1a",
          }}>
            Trusted by Hundreds Across Odisha
          </h2>

        </div>

        {/* ============================================================
            TESTIMONIAL CARDS — horizontal scroll
            ============================================================ */}
        <div className="t-scroll" ref={scrollRef}>
          {testimonials.map((t, index) => (
            <div key={index} className="t-card">

              {/* --- Stars --- */}
              <div className="t-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < t.rating ? "t-star" : "t-star-empty"}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* --- Review text --- */}
              <div className="t-text">{t.text}</div>

              {/* --- Avatar + name + location --- */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div className="t-avatar">{t.initial}</div>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "2px" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "#999" }}>
                    {t.location}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* ============================================================
            CIRCLE ARROWS
            ============================================================ */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          alignItems: "center",
          padding: "0 clamp(24px, 5vw, 80px)",
        }}>

          {/* --- Left arrow — white circle --- */}
          <button
            className="t-arrow t-arrow-white"
            onClick={() => scroll(-1)}
            aria-label="Previous testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* --- Right arrow — amber circle --- */}
          <button
            className="t-arrow t-arrow-amber"
            onClick={() => scroll(1)}
            aria-label="Next testimonials"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

        </div>

      </section>
    </>
  );
}