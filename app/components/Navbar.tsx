"use client";

/* ============================================================
   ECONOVA NAVBAR
   - Sticky top navigation — EcoNova green palette
   - Desktop: logo + links + Offerings dropdown + Contact CTA
   - Offerings dropdown: 4 sectors
   - Mobile: hamburger → slide-out with same structure
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";

/* --- Offerings dropdown items --- */
const offeringsDropdown = [
  { label: "Renewable Energy", href: "/offerings#renewable-energy" },
  { label: "Engineering & Technology", href: "/offerings#engineering" },
  { label: "Agriculture & Food Processing", href: "/offerings#agriculture" },
  { label: "Marine & Aquaculture", href: "/offerings#marine" },
];

/* --- Nav links data --- */
const links = [
  { label: "About", href: "/about" },
  { label: "Geothermal", href: "/geothermal" },
  { label: "Market", href: "/#market" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/connect" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [offeringsOpen, setOfferingsOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);

  return (
    <>
      <style>{`
        .ham-line {
          display: block;
          height: 2.5px;
          border-radius: 3px;
          background: var(--en-leaf);
          transition: all 0.3s ease;
        }
        .ham-line-1 { width: 14px; }
        .ham-line-2 { width: 19px; }
        .ham-line-3 { width: 24px; }
        .ham-line-1-open { width: 24px; transform: translateY(7.5px) rotate(45deg); }
        .ham-line-2-open { opacity: 0; width: 0; }
        .ham-line-3-open { width: 24px; transform: translateY(-7.5px) rotate(-45deg); }

        .nav-link-item {
          font-size: 15px;
          color: var(--en-text-body);
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s;
          font-family: 'Lato', sans-serif;
        }
        .nav-link-item:hover { color: var(--en-teal); }

        .nav-cta { transition: all 0.2s; }
        .nav-cta:hover {
          box-shadow: 0 4px 20px rgba(14,124,134,0.25) !important;
          transform: translateY(-1px);
        }
        .nav-cta .cta-arrow-circle { transition: transform 0.3s ease; }
        .nav-cta:hover .cta-arrow-circle { transform: rotate(45deg); }

        /* Dropdown wrapper */
        .offerings-dropdown-wrapper { position: relative; }

        .offerings-trigger {
          font-size: 15px;
          color: var(--en-text-body);
          font-weight: 700;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0;
          font-family: 'Lato', sans-serif;
          transition: color 0.2s;
        }
        .offerings-trigger:hover { color: var(--en-teal); }
        .offerings-trigger.active { color: var(--en-teal); }

        .dropdown-chevron { transition: transform 0.25s ease; }
        .dropdown-chevron.open { transform: rotate(180deg); }

        .offerings-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #fff;
          border-radius: 12px;
          border: 0.5px solid var(--en-border);
          box-shadow: 0 8px 28px rgba(30,58,43,0.12);
          padding: 8px;
          min-width: 240px;
          z-index: 200;
          animation: dropdownFadeIn 0.18s ease forwards;
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s;
          color: var(--en-text-dark);
          font-size: 13px;
          font-weight: 600;
          font-family: 'Lato', sans-serif;
        }
        .dropdown-item:hover {
          background: rgba(168,191,69,0.12);
          color: var(--en-forest-green);
        }

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
        background: "#ffffff",
        borderBottom: `0.5px solid var(--en-border)`,
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

          {/* LOGO */}
          <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <NextImage
              src="/images/logo.png"
              alt="EcoNova Resources & Energy"
              width={260}
              height={52}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="nav-links" style={{ display: "flex", gap: "28px", alignItems: "center" }}>

            {/* Offerings dropdown */}
            <div
              className="offerings-dropdown-wrapper"
              onMouseEnter={() => setOfferingsOpen(true)}
              onMouseLeave={() => setOfferingsOpen(false)}
            >
              <button className={`offerings-trigger${offeringsOpen ? " active" : ""}`}>
                Offerings
                <svg
                  className={`dropdown-chevron${offeringsOpen ? " open" : ""}`}
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {offeringsOpen && (
                <div className="offerings-dropdown-menu">
                  {offeringsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="dropdown-item"
                      onClick={() => setOfferingsOpen(false)}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                        stroke="var(--en-leaf)" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round">
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
                className="nav-link-item"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP CTA */}
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
              boxShadow: "0 2px 12px rgba(30,58,43,0.1)",
              textDecoration: "none",
              border: `1px solid var(--en-border)`,
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--en-dark-green)", marginRight: "10px", fontFamily: "'Lato', sans-serif" }}>
              Contact Us
            </span>
            <div
              className="cta-arrow-circle"
              style={{
                width: "32px", height: "32px",
                borderRadius: "50%",
                background: "var(--en-teal)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-hamburger"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "4px", flexDirection: "column", gap: "5px",
              display: "none", alignItems: "flex-end",
            }}
            aria-label="Toggle menu"
          >
            <span className={`ham-line ${menuOpen ? "ham-line-1-open" : "ham-line-1"}`} />
            <span className={`ham-line ${menuOpen ? "ham-line-2-open" : "ham-line-2"}`} />
            <span className={`ham-line ${menuOpen ? "ham-line-3-open" : "ham-line-3"}`} />
          </button>

        </div>

        {/* MOBILE DROPDOWN MENU */}
        {menuOpen && (
          <div
            className="nav-mobile-menu"
            style={{
              background: "#ffffff",
              borderTop: `0.5px solid var(--en-border)`,
              padding: "16px 24px 24px",
              flexDirection: "column",
              gap: "18px",
              display: "flex",
            }}
          >
            {/* Offerings expandable */}
            <div>
              <button
                onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: "15px", color: "var(--en-text-dark)", fontWeight: 700,
                  display: "flex", alignItems: "center", gap: "6px",
                  padding: 0, fontFamily: "'Lato', sans-serif",
                  width: "100%", textAlign: "left",
                }}
              >
                Offerings
                <svg
                  className={`dropdown-chevron${mobileOfferingsOpen ? " open" : ""}`}
                  width="12" height="12" viewBox="0 0 24 24"
                  fill="none" stroke="var(--en-teal)" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {mobileOfferingsOpen && (
                <div style={{ marginTop: "10px", paddingLeft: "12px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {offeringsDropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => { setMenuOpen(false); setMobileOfferingsOpen(false); }}
                      style={{
                        fontSize: "13px", color: "var(--en-teal)", fontWeight: 600,
                        textDecoration: "none", display: "flex", alignItems: "center", gap: "8px",
                      }}
                    >
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--en-leaf)", flexShrink: 0, display: "inline-block" }} />
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
                style={{ fontSize: "15px", color: "var(--en-text-dark)", fontWeight: 700, fontFamily: "'Lato', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/connect"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "var(--en-teal)",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                padding: "12px",
                borderRadius: "8px",
                textAlign: "center",
                textDecoration: "none",
                display: "block",
              }}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
