"use client";

/* ============================================================
   PRODUCTS SECTION
   - 2 large premium cards on top (Solar Cooking + Street Light)
   - 4 small cards below (Also Available)
   - Desktop: 4 column grid
   - Mobile: single card slider with left/right arrows
   - Hover lift effect with amber shadow
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";

/* --- Primary products --- */
const primaryProducts = [
  {
    title: "Rooftop Solar",
    subtitle: "Cut Your Electricity Bill. Own Your Power.",
    desc: "Grid-tied rooftop solar systems for homes and businesses across Odisha. PM Surya Ghar subsidy handled end to end, from application to net metering.",
    image: "/images/projects/rooftop-dhanbad.jpg",
    badge: "☀ Flagship Service",
    badgeStyle: { background: "#FDB92E", color: "#412402" },
    count: "500+ Projects",
    label: "ROOFTOP SOLAR",
    specs: [
      "1kW to 25kW+ Systems",
      "Subsidy Application Handled Free",
      "25-Year Panel Performance Warranty",
    ],
    href: "/rooftop-solar",
  },
  {
    title: "Solar Cooking System",
    subtitle: "Clean Energy Cooking. Zero LPG.",
    desc: "A revolutionary solar-powered cooking solution. Smoke-free, cost-efficient, built for homes, anganwadis, schools, and community kitchens across Odisha.",
    image: "/images/products/solar-cooking.jpg",
    badge: "✦ Our Innovation",
    badgeStyle: { background: "#FDB92E", color: "#412402" },
    count: "200+ Installed",
    label: "SOLAR COOKING SYSTEM",
    specs: [
      "500Wp × 6 Solar Modules",
      "1500W Coil Heating Technology",
      "Portable & Scalable Design",
    ],
    href: "/solar-cooking",
  },
  {
    title: "Solar Street Lighting",
    subtitle: "Light Every Road. Power Every Village.",
    desc: "High-efficiency LED street lights with smart dusk-to-dawn control. Built for Odisha's roads, villages, campuses, and industrial zones.",
    image: "/images/products/street-light.jpg",
    badge: "⭐ Best Seller",
    badgeStyle: { background: "#ffffff", color: "#1a1a1a" },
    count: "500+ Projects",
    label: "SOLAR STREET LIGHTING",
    specs: [
      "High-Lumen LED Luminaires",
      "Lithium-Ion Long Backup",
      "Corrosion-Resistant Poles",
    ],
    href: "/solar-street-lighting",
  },
];

/* --- Secondary products --- */
const secondaryProducts = [
  {
    title: "Agriculture Pumps",
    desc: "KUSUM eligible solar pumps for irrigation and drinking water.",
    image: "/images/products/agri-pump.jpg",
    category: "Solar Pump",
    href: "/solar-water-pump",
  },
  {
    title: "High Mast Lighting",
    desc: "For ports, stadiums, highways, and industrial yards.",
    image: "/images/products/high-mast.jpg",
    category: "High Mast",
    href: "/solar-high-mast-light",
  },
  {
  title: "Solar Drinking Water",
  desc: "Clean, solar-powered drinking water systems for villages and communities.",
  image: "/images/products/drinking-water.jpg",
  category: "Solar Water",
  href: "/solar-water-pump",
},
  {
    title: "Solar Cold Storage",
    desc: "Solar-powered cold storage for perishable goods.",
    image: "/images/products/cold-storage.jpg",
    category: "Cold Storage",
    href: "/connect",
  },
];

export default function Products() {

  /* --- Mobile secondary card index --- */
  const [mobileIndex, setMobileIndex] = useState(0);
  const [mobileAnimate, setMobileAnimate] = useState(true);

  /* --- Navigate mobile cards --- */
  function navigateMobile(dir: number) {
    setMobileAnimate(false);
    setTimeout(() => {
      setMobileIndex((prev) => (prev + dir + secondaryProducts.length) % secondaryProducts.length);
      setMobileAnimate(true);
    }, 50);
  }

  const currentProduct = secondaryProducts[mobileIndex];

  return (
    <>
      {/* ============================================================
          PRODUCTS STYLES
          ============================================================ */}
      <style>{`

        /* ── Large premium card ── */
        .big-card {
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          border: 0.5px solid #E8E2D8;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .big-card:hover {
          box-shadow: 0 12px 40px rgba(245,160,0,0.15);
          transform: translateY(-4px);
          border-color: #FAC775;
        }

        /* ── Small card desktop ── */
        .small-card {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          border: 0.5px solid #E8E2D8;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .small-card:hover {
          box-shadow: 0 8px 24px rgba(245,160,0,0.12);
          transform: translateY(-3px);
          border-color: #FAC775;
        }

        /* ── Spec row ── */
        .p-spec {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 7px;
        }
        .p-spec:last-child { margin-bottom: 0; }
        .p-spec-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #FDB92E;
          flex-shrink: 0;
        }

        /* ── Buttons ── */
        .btn-amber {
          background: #FDB92E;
          color: #412402;
          font-size: 12px;
          font-weight: 700;
          padding: 10px 18px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-outline {
          border: 1.5px solid #E8E2D8;
          color: #555;
          font-size: 12px;
          font-weight: 700;
          padding: 10px 18px;
          border-radius: 6px;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
        }
        .btn-outline:hover { border-color: #FDB92E; color: #854F0B; }

        /* ── Primary grid ── */
        .primary-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 16px;
        }

        /* ── Secondary grid — desktop ── */
        .secondary-grid-desktop {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        /* ── Mobile secondary slider ── */
        .secondary-mobile { display: none; }

        /* ── Mobile card fade animation ── */
        @keyframes secFadeIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .sec-card-animate {
          animation: secFadeIn 0.4s ease forwards;
        }

        /* ── Arrow buttons ── */
        .p-arrow {
          width: 40px; height: 40px;
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
        .p-arrow:hover {
          background: #FDB92E;
          border-color: #FDB92E;
          color: #fff;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .primary-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .primary-grid { grid-template-columns: 1fr; }
          .secondary-grid-desktop { display: none !important; }
          .secondary-mobile { display: block !important; }
        }

      `}</style>

      <section id="products" style={{
        background: "#ffffff",
        padding: "clamp(60px, 8vw, 100px) 0",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 80px)",
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
              marginBottom: "14px",
            }}>
              Our Products
            </div>

            {/* --- Title --- */}
            <h2 style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "10px",
            }}>
              Built for Performance. Trusted by Communities.
            </h2>

            {/* --- Subtitle --- */}
            <p style={{
              fontSize: "14px",
              color: "#777",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Premium solar products and solutions — engineered for reliability and designed for a sustainable future.
            </p>

          </div>

          {/* ============================================================
              PRIMARY PRODUCTS — 2 large cards
              ============================================================ */}
          <div className="primary-grid">
            {primaryProducts.map((product) => (
              <div key={product.title} className="big-card">

                {/* --- Photo --- */}
                <div style={{
                  height: "clamp(180px, 20vw, 240px)",
                  position: "relative",
                  flexShrink: 0,
                  background: "#e0e0e0",
                }}>
                  <NextImage
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    style={{ objectFit: "cover" }}
                  />

                  {/* Badge top left */}
                  <div style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    ...product.badgeStyle,
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    zIndex: 1,
                  }}>
                    {product.badge}
                  </div>

                  {/* Count badge bottom right */}
                  <div style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    background: "rgba(0,0,0,0.55)",
                    color: "#fff",
                    fontSize: "10px",
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: "20px",
                    zIndex: 1,
                  }}>
                    {product.count}
                  </div>
                </div>

                {/* --- Content --- */}
                <div style={{
                  padding: "clamp(16px, 2vw, 24px)",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}>

                  {/* Label */}
                  <div style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "#F5A000",
                    letterSpacing: "1px",
                    marginBottom: "6px",
                  }}>
                    {product.label}
                  </div>

                  {/* Title */}
                  <div style={{
                    fontSize: "clamp(16px, 1.8vw, 20px)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}>
                    {product.subtitle}
                  </div>

                  {/* Description */}
                  <div style={{
                    fontSize: "13px",
                    color: "#777",
                    lineHeight: 1.75,
                    marginBottom: "16px",
                    textAlign: "justify",
                  }}>
                    {product.desc}
                  </div>

                  {/* Specs block */}
                  <div style={{
                    background: "#FAFAFA",
                    borderRadius: "10px",
                    padding: "14px",
                    marginBottom: "18px",
                  }}>
                    {product.specs.map((spec) => (
                      <div key={spec} className="p-spec">
                        <div className="p-spec-dot" />
                        <span style={{ fontSize: "12px", color: "#555" }}>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                    <Link href={product.href} className="btn-amber">
                      Know More
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                    <Link href="/connect" className="btn-outline">
                      Enquire
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* ============================================================
              DIVIDER — Also Available
              ============================================================ */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px",
          }}>
            <div style={{ flex: 1, height: "0.5px", background: "#E8E2D8" }} />
            <div style={{
              fontSize: "12px",
              color: "#aaa",
              fontWeight: 500,
              whiteSpace: "nowrap",
            }}>
              Also Available
            </div>
            <div style={{ flex: 1, height: "0.5px", background: "#E8E2D8" }} />
          </div>

          {/* ============================================================
              SECONDARY PRODUCTS — desktop: 4 col grid
              ============================================================ */}
          <div className="secondary-grid-desktop">
            {secondaryProducts.map((product) => (
              <div key={product.title} className="small-card">

                {/* --- Photo --- */}
                <div style={{
                  height: "clamp(100px, 10vw, 130px)",
                  position: "relative",
                  background: "#e0e0e0",
                  flexShrink: 0,
                }}>
                  <NextImage
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    loading="eager"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* --- Content --- */}
                <div style={{
                  padding: "14px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}>
                  <div style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}>
                    {product.title}
                  </div>
                  <div style={{
                    fontSize: "11px",
                    color: "#777",
                    lineHeight: 1.6,
                    flex: 1,
                    marginBottom: "12px",
                  }}>
                    {product.desc}
                  </div>
                  <Link href={product.href} style={{
                    background: "#FDB92E",
                    color: "#412402",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "8px 12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                  }}>
                    Know More
                  </Link>
                </div>

              </div>
            ))}
          </div>

          {/* ============================================================
              SECONDARY PRODUCTS — mobile: single card slider + arrows
              ============================================================ */}
          <div className="secondary-mobile" style={{ display: "none" }}>

            {/* --- Single card with fade animation --- */}
            <div
              key={mobileIndex}
              className={mobileAnimate ? "sec-card-animate" : ""}
              style={{
                background: "#fff",
                borderRadius: "12px",
                border: "0.5px solid #E8E2D8",
                overflow: "hidden",
                marginBottom: "14px",
              }}
            >
              {/* Photo */}
              <div style={{
                height: "180px",
                position: "relative",
                background: "#e0e0e0",
                flexShrink: 0,
              }}>
                <NextImage
                  src={currentProduct.image}
                  alt={currentProduct.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 25vw"
                  loading="eager"
                  style={{ objectFit: "cover" }}
                />
                {/* Category badge */}
                <div style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#FDB92E",
                  color: "#412402",
                  fontSize: "9px",
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: "20px",
                  zIndex: 1,
                }}>
                  {currentProduct.category}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "16px" }}>
                <div style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "8px",
                }}>
                  {currentProduct.title}
                </div>
                <div style={{
                  fontSize: "13px",
                  color: "#777",
                  lineHeight: 1.7,
                  marginBottom: "14px",
                }}>
                  {currentProduct.desc}
                </div>
                <Link href={currentProduct.href} style={{
                  background: "#FDB92E",
                  color: "#412402",
                  fontSize: "13px",
                  fontWeight: 700,
                  padding: "10px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "block",
                }}>
                  Know More
                </Link>
              </div>
            </div>

            {/* --- Arrows centered below --- */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              alignItems: "center",
            }}>
              <button className="p-arrow" onClick={() => navigateMobile(-1)} aria-label="Previous">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button className="p-arrow" onClick={() => navigateMobile(1)} aria-label="Next">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}