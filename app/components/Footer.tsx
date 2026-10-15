"use client";

import Link from "next/link";
import NextImage from "next/image";

/* ============================================================
   ECONOVA FOOTER
   - Address: Plot No. 213/3, ARIHANT PALACE, Sector-20, Gandhinagar, Gujarat 382021
   - Phone: +91 9727780048
   - Email: info.econovare@gmail.com
   - Google Maps link to Gandhinagar address
   - Tagline & Subline
   - Quick navigation links
   - Complete EcoNova branding & clean copyright
   ============================================================ */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offeringsLinks = [
    { label: "Renewable Energy Projects", href: "/offerings#renewable-energy" },
    { label: "Engineering & Technology", href: "/offerings#engineering" },
    { label: "Agriculture & Food Processing", href: "/offerings#agriculture" },
    { label: "Marine & Aquaculture", href: "/offerings#marine" },
    { label: "Geothermal Heating & Cooling", href: "/geothermal" },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Market & Vision", href: "/#market" },
    { label: "Board of Directors", href: "/#leadership" },
    { label: "Contact Us", href: "/connect" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "var(--en-dark-green)",
        color: "#ffffff",
        borderTop: "3px solid var(--en-leaf)",
        paddingTop: "clamp(50px, 7vw, 80px)",
        paddingBottom: "30px",
      }}
    >
      <div className="en-container">
        {/* Main Footer Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Column 1: Company Profile */}
          <div style={{ maxWidth: "360px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px",
                }}
              >
                <NextImage
                  src="/images/logo.png"
                  alt="EcoNova Resources & Energy Logo"
                  width={44}
                  height={44}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: 800,
                    letterSpacing: "0.5px",
                    display: "block",
                    lineHeight: 1.2,
                    color: "#ffffff",
                  }}
                >
                  ECONOVA
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--en-leaf)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Resources & Energy
                </span>
              </div>
            </div>

            <p style={{ fontSize: "14px", color: "#D1E2D6", lineHeight: 1.6, marginBottom: "14px" }}>
              <strong>EcoNova Resources & Energy Private Limited</strong>
              <br />
              Shaping a Cleaner, Greener Tomorrow: World Air Pollution Control and Sustainable Energy Solutions.
            </p>
            <p style={{ fontSize: "12px", color: "var(--en-leaf)", fontWeight: 600 }}>
              Renewable Energy | Agricultural Products | Marine Resources
            </p>
          </div>

          {/* Column 2: Offerings */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "var(--en-mint)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              Core Verticals
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {offeringsLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "14px",
                      color: "#D1E2D6",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--en-mint)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#D1E2D6";
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "var(--en-mint)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: "14px",
                      color: "#D1E2D6",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--en-mint)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#D1E2D6";
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div>
            <h4
              style={{
                fontSize: "16px",
                fontWeight: 800,
                color: "var(--en-mint)",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "20px",
              }}
            >
              Contact Office
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "14px", color: "#D1E2D6" }}>
              <div>
                <strong style={{ color: "#ffffff", display: "block", marginBottom: "4px" }}>Registered Address:</strong>
                <span>Plot No. 213/3, ARIHANT PALACE, Sector-20, Gandhinagar, Gujarat 382021</span>
                <div style={{ marginTop: "6px" }}>
                  <a
                    href="https://maps.google.com/?q=Plot+No.+213/3,+ARIHANT+PALACE,+Sector-20,+Gandhinagar,+Gujarat+382021"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "var(--en-mint)",
                      fontSize: "13px",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    View on Google Maps ↗
                  </a>
                </div>
              </div>

              <div>
                <strong style={{ color: "#ffffff", display: "block", marginBottom: "2px" }}>Phone:</strong>
                <a
                  href="tel:+919727780048"
                  style={{ color: "#D1E2D6", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--en-mint)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D1E2D6")}
                >
                  +91 9727780048
                </a>
              </div>

              <div>
                <strong style={{ color: "#ffffff", display: "block", marginBottom: "2px" }}>Email:</strong>
                <a
                  href="mailto:info.econovare@gmail.com"
                  style={{ color: "#D1E2D6", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--en-mint)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D1E2D6")}
                >
                  info.econovare@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
            fontSize: "13px",
            color: "#A2C3AF",
          }}
        >
          <p>
            &copy; {currentYear} EcoNova Resources & Energy Private Limited. All rights reserved.
          </p>
          <p>
            Gandhinagar, Gujarat, India.
          </p>
        </div>
      </div>
    </footer>
  );
}