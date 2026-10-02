"use client";

/* ============================================================
   NAVBAR COMPONENT
   - Sticky top navigation
   - Desktop: logo + links + Products dropdown + Connect Us pill
   - Products dropdown: Solar Cooking + Solar Street Lighting
   - Mobile: logo + staircase amber hamburger
     → animates to X on open
     → dropdown with links + Products submenu + Connect Us + WhatsApp
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";

/* --- Products dropdown items --- */
const productDropdown = [
    { label: "Solar Cooking System", href: "/solar-cooking" },
    { label: "Solar Street Lighting", href: "/solar-street-lighting" },
    { label: "Rooftop Solar", href: "/rooftop-solar" },
    { label: "Solar Water Pump", href: "/solar-water-pump" },
];

/* --- Nav links data --- */
const links = [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Schemes", href: "/schemes" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    /* --- Products dropdown open state (desktop) --- */
    const [productsOpen, setProductsOpen] = useState(false);

    /* --- Products submenu open state (mobile) --- */
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    return (
        <>
            {/* ============================================================
          NAVBAR ANIMATION STYLES
          ============================================================ */}
            <style>{`

        /* ── Hamburger line base ── */
        .ham-line {
          display: block;
          height: 2.5px;
          border-radius: 3px;
          background: #FDB92E;
          transition: all 0.3s ease;
        }

        /* ── Closed state — staircase widths ── */
        .ham-line-1 { width: 14px; }
        .ham-line-2 { width: 19px; }
        .ham-line-3 { width: 24px; }

        /* ── Open state — animate to X ── */
        .ham-line-1-open {
          width: 24px;
          transform: translateY(7.5px) rotate(45deg);
        }
        .ham-line-2-open {
          opacity: 0;
          width: 0;
        }
        .ham-line-3-open {
          width: 24px;
          transform: translateY(-7.5px) rotate(-45deg);
        }

        /* ── Navbar CTA hover ── */
        .nav-cta { transition: all 0.2s; }
        .nav-cta:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
          transform: translateY(-1px);
        }
        .nav-cta .cta-arrow-circle {
          transition: transform 0.3s ease;
        }
        .nav-cta:hover .cta-arrow-circle {
          transform: rotate(45deg);
        }

        /* ── Products dropdown wrapper ── */
        .products-dropdown-wrapper {
          position: relative;
        }

        /* ── Products dropdown trigger ── */
        .products-trigger {
          font-size: 15px;
          color: #555;
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0;
          font-family: inherit;
          transition: color 0.2s;
        }
        .products-trigger:hover { color: #FDB92E; }
        .products-trigger.active { color: #FDB92E; }

        /* ── Dropdown chevron ── */
        .dropdown-chevron {
          transition: transform 0.25s ease;
        }
        .dropdown-chevron.open {
          transform: rotate(180deg);
        }

        /* ── Dropdown menu ── */
        .products-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 12px;
          border: 0.5px solid #E8E2D8;
          box-shadow: 0 8px 28px rgba(0,0,0,0.1);
          padding: 8px;
          min-width: 220px;
          z-index: 200;
          animation: dropdownFadeIn 0.18s ease forwards;
        }

        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* ── Dropdown item ── */
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s;
          color: #1a1a1a;
          font-size: 13px;
          font-weight: 600;
        }
        .dropdown-item:hover {
          background: #FFF3D6;
          color: #854F0B;
        }
        
        /* ── Responsive ── */
        @media (min-width: 769px) {
          .nav-links { display: flex !important; }
          .nav-cta-desktop { display: inline-flex !important; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }

      `}</style>

            <nav style={{
                position: "sticky",
                top: 0,
                zIndex: 100,
                background: "#F5F5F5",
                borderBottom: "0.5px solid #F0EBE0",
                width: "100%",
            }}>
                <div style={{
                    maxWidth: "1400px",
                    margin: "0 auto",
                    padding: "0 24px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>

                    {/* ============================================================
              LOGO
              ============================================================ */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
                        <NextImage
                            src="/images/logo.png"
                            alt="Green Filament"
                            width={250}
                            height={50}
                            style={{ objectFit: "contain" }}
                            priority
                        />
                    </Link>

                    {/* ============================================================
              DESKTOP LINKS — hidden on mobile
              ============================================================ */}
                    <div className="nav-links" style={{ display: "flex", gap: "28px", alignItems: "center" }}>

                        {/* Products — dropdown */}
                        <div
                            className="products-dropdown-wrapper"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            {/* Trigger button */}
                            <button className={`products-trigger${productsOpen ? " active" : ""}`}>
                                Products
                                <svg
                                    className={`dropdown-chevron${productsOpen ? " open" : ""}`}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            {/* Dropdown menu */}
                            {productsOpen && (
                                <div className="products-dropdown-menu">
                                    {productDropdown.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="dropdown-item"
                                            onClick={() => setProductsOpen(false)}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FDB92E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Rest of links */}
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                style={{ fontSize: "15px", color: "#555", fontWeight: 700 }}
                                onMouseEnter={e => (e.currentTarget.style.color = "#FDB92E")}
                                onMouseLeave={e => (e.currentTarget.style.color = "#555")}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* ============================================================
              DESKTOP CTA — hidden on mobile
              ============================================================ */}
                    <Link
                        href="/connect"
                        className="nav-cta nav-cta-desktop"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0",
                            background: "#fff",
                            borderRadius: "40px",
                            padding: "6px 6px 6px 18px",
                            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                            textDecoration: "none",
                            border: "1px solid #E8E2D8",
                            flexShrink: 0,
                            whiteSpace: "nowrap",
                        }}
                    >
                        <span style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", marginRight: "10px" }}>
                            Let&apos;s Connect
                        </span>
                        {/* Arrow circle — rotates on hover */}
                        <div
                            className="cta-arrow-circle"
                            style={{
                                width: "32px",
                                height: "32px",
                                borderRadius: "50%",
                                background: "#FDB92E",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17L17 7M7 7h10v10" />
                            </svg>
                        </div>
                    </Link>

                    {/* ============================================================
              HAMBURGER BUTTON — mobile only
              Staircase: short → medium → long
              Animates to X when open
              ============================================================ */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="nav-hamburger"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "4px",
                            flexDirection: "column",
                            gap: "5px",
                            display: "none",
                            alignItems: "flex-end",
                        }}
                        aria-label="Toggle menu"
                    >
                        {/* Line 1: short → top of X */}
                        <span className={`ham-line ${menuOpen ? "ham-line-1-open" : "ham-line-1"}`} />
                        {/* Line 2: medium → fades out */}
                        <span className={`ham-line ${menuOpen ? "ham-line-2-open" : "ham-line-2"}`} />
                        {/* Line 3: long → bottom of X */}
                        <span className={`ham-line ${menuOpen ? "ham-line-3-open" : "ham-line-3"}`} />
                    </button>

                </div>

                {/* ============================================================
            MOBILE DROPDOWN MENU
            - Links list
            - Products expandable submenu
            - Connect Us + WhatsApp side by side
            ============================================================ */}
                {menuOpen && (
                    <div
                        className="nav-mobile-menu"
                        style={{
                            background: "#F5F5F5",
                            borderTop: "0.5px solid #F0EBE0",
                            padding: "16px 24px 24px",
                            flexDirection: "column",
                            gap: "18px",
                            display: "flex",
                        }}
                    >
                    
                    {/* Products — expandable submenu */}
                        <div>
                            <button
                                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    fontSize: "15px",
                                    color: "#1a1a2e",
                                    fontWeight: 700,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "6px",
                                    padding: 0,
                                    fontFamily: "inherit",
                                    width: "100%",
                                    textAlign: "left",
                                }}
                            >
                                Products
                                <svg
                                    className={`dropdown-chevron${mobileProductsOpen ? " open" : ""}`}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#FDB92E"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            {/* Mobile products submenu */}
                            {mobileProductsOpen && (
                                <div style={{ marginTop: "10px", paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                                    {productDropdown.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => { setMenuOpen(false); setMobileProductsOpen(false); }}
                                            style={{
                                                fontSize: "13px",
                                                color: "#554F0B",
                                                fontWeight: 600,
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                            }}
                                        >
                                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FDB92E", flexShrink: 0, display: "inline-block" }} />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Rest of links */}
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                style={{ fontSize: "15px", color: "#1a1a2e", fontWeight: 700 }}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* ============================================================
                MOBILE BUTTONS — side by side
                ============================================================ */}
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "10px",
                            marginTop: "4px",
                        }}>

                            {/* Connect Us */}
                            <Link
                                href="/connect"
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    background: "#FDB92E",
                                    color: "#412402",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    padding: "12px",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    display: "block",
                                }}
                            >
                                Let&apos;s Connect
                            </Link>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919337256398"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    background: "#25D366",
                                    color: "#fff",
                                    fontSize: "13px",
                                    fontWeight: 700,
                                    padding: "12px",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "6px",
                                }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp
                            </a>

                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
