"use client";

/* ============================================================
   FOOTER COMPONENT
   - Warm gradient background with subtle solar elements
   - Description quote style centered at top
   - Desktop: 4 columns — Quick Links | Services | Contact Us | Follow Us
   - Mobile: accordion — tap to expand each section
   - Certifications row
   - Amber gradient copyright bar
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";

/* --- Quick links data --- */
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solar Company in Odisha", href: "/solar-company-odisha" },
  { label: "Rooftop Solar Bhubaneswar", href: "/rooftop-solar-bhubaneswar" },
  { label: "Rooftop Solar Cuttack", href: "/rooftop-solar-cuttack" },
  { label: "PM Surya Ghar Odisha", href: "/pm-surya-ghar-odisha" },
  { label: "PM Kusum Odisha", href: "/pm-kusum-odisha" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Schemes", href: "/schemes" },
  { label: "Blogs", href: "/blogs" },
  { label: "Connect", href: "/connect" },
];

/* --- Products links data --- */
const productLinks = [
  { label: "Solar Cooking System", href: "/solar-cooking" },
  { label: "Solar Street Lighting", href: "/solar-street-lighting" },
  { label: "Rooftop Solar", href: "/rooftop-solar" },
  { label: "Agriculture Pumps", href: "/solar-water-pump" },
  { label: "High Mast Lighting", href: "/solar-high-mast-light" },
  { label: "Solar Water Pump", href: "/solar-water-pump" },
  { label: "Solar Cold Storage", href: "/connect" },
  { label: "Solar ROI Calculator", href: "/solar-roi-calculator" },
  { label: "Solar Sizing Calculator", href: "/solar-sizing-calculator" },
];

/* ============================================================
   ACCORDION ITEM — mobile only
   ============================================================ */
function AccordionItem({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ borderBottom: "0.5px solid #F0EBE0" }}>

      {/* --- Header --- */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 24px",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>
          {title}
        </span>
        {/* --- Chevron icon — rotates on open --- */}
        <div style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: "#FFF3D6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s ease",
          transform: open ? "rotate(180deg)" : "rotate(0deg)",
          flexShrink: 0,
        }}>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* --- Body — shows when open --- */}
      {open && (
        <div style={{ padding: "4px 24px 16px" }}>
          {children}
        </div>
      )}

    </div>
  );
}

export default function Footer() {
  return (
    <>
      {/* ============================================================
          FOOTER STYLES
          ============================================================ */}
      <style>{`

        /* ── Footer link ── */
        .f-link {
          font-size: 13px;
          color: #555;
          text-decoration: none;
          display: block;
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .f-link:hover { color: #FDB92E; }

        /* ── Column title ── */
        .f-col-title {
          font-size: 13px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
        }

        /* ── Social icon button ── */
        .f-social {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid #E8E2D8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          transition: all 0.2s;
          text-decoration: none;
          background: #ffffff;
          flex-shrink: 0;
        }
        .f-social:hover {
          background: #FDB92E;
          border-color: #FDB92E;
          color: #ffffff;
        }

        /* ── Divider ── */
        .f-divider {
          height: 0.5px;
          background: #E8E2D8;
          margin: 24px 0;
        }

        /* ── Footer main grid — desktop: 4 columns ── */
        .footer-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 32px;
          align-items: start;
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }

        /* ── Contact icon — small square ── */
        .f-contact-icon-sm {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: #FFF3D6;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* ── Copyright bar ── */
        .f-copyright {
          background: linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%);
          padding: 24px clamp(24px, 5vw, 80px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
        }

        /* ── Desktop footer — show, mobile accordion — hide ── */
        .footer-desktop { display: block; }
        .footer-mobile-accordion { display: none; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }

        @media (max-width: 768px) {

          /* Hide desktop columns on mobile */
          .footer-desktop { display: none !important; }

          /* Show mobile accordion */
          .footer-mobile-accordion { display: block !important; }

          /* Copyright bar — centered on mobile */
          .f-copyright {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 8px !important;
          }

        }

      `}</style>

      {/* ============================================================
          MAIN FOOTER
          ============================================================ */}
      <footer style={{ overflow: "hidden" }}>

        {/* --- Warm gradient background body --- */}
        <div style={{
          background: "linear-gradient(135deg, #FFF8EE 0%, #ffffff 40%, #FAFAFA 70%, #FFF3D6 100%)",
          padding: "clamp(36px, 5vw, 56px) clamp(24px, 5vw, 80px) 0",
          position: "relative",
          overflow: "hidden",
        }}>

          {/* ---- Solar decorative elements ---- */}
          <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", border: "0.5px solid rgba(253,185,46,0.1)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "160px", height: "160px", borderRadius: "50%", border: "0.5px solid rgba(253,185,46,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "180px", height: "180px", borderRadius: "50%", background: "radial-gradient(circle,rgba(253,185,46,0.05) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none" }}>
            <svg width="100%" height="100%">
              <defs>
                <pattern id="footer-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#FDB92E" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#footer-grid)" />
            </svg>
          </div>

          {/* ============================================================
              TOP — quote style description
              ============================================================ */}
          <div style={{
            textAlign: "center",
            marginBottom: "24px",
            position: "relative",
            zIndex: 1,
            padding: "36px 48px",
          }}>
            <div style={{ position: "absolute", top: "16px", left: "32px", fontSize: "100px", fontWeight: 800, color: "#FDB92E", opacity: 0.5, lineHeight: 1, fontFamily: "Georgia, serif" }}>❝</div>
            <div style={{ position: "absolute", bottom: "16px", right: "32px", fontSize: "100px", fontWeight: 800, color: "#FDB92E", opacity: 0.5, lineHeight: 1, fontFamily: "Georgia, serif" }}>❞</div>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#1a1a1a", lineHeight: 1.75, fontStyle: "italic", maxWidth: "680px", margin: "0 auto", fontWeight: 600, fontFamily: "Georgia, serif" }}>
              Driven by innovation and sustainability, we design solar solutions that create long-term impact. Our mission is to power a cleaner, smarter, and energy-independent tomorrow.
            </p>
          </div>

          {/* --- Divider --- */}
          <div className="f-divider" />

          {/* ============================================================
              DESKTOP — 4 columns (hidden on mobile)
              ============================================================ */}
          <div className="footer-desktop">
            <div className="footer-main-grid">

              {/* Column 1: Quick Links */}
              <div>
                <div className="f-col-title">Quick Links</div>
                {quickLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="f-link">{link.label}</Link>
                ))}
              </div>

              {/* Column 2: Our Products */}
              <div>
                <div className="f-col-title">Our Products</div>
                {productLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="f-link">{link.label}</Link>
                ))}
              </div>

              {/* Column 3: Contact Us */}
              <div>
                <div className="f-col-title">Contact Us</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                  <a href="tel:+919337256398" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <div className="f-contact-icon-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>PHONE</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>+91 93372 56398</div>
                    </div>
                  </a>

                  <a href="mailto:connect@greenfilament.com" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <div className="f-contact-icon-sm">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>EMAIL</div>
                      <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>connect@greenfilament.com</div>
                    </div>
                  </a>

                  <a href="https://wa.me/919337256398" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                    <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>WHATSAPP</div>
                      <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>+91 93372 56398</div>
                    </div>
                  </a>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div className="f-contact-icon-sm" style={{ marginTop: "2px" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>SNAIL MAIL</div>
                      <div style={{ fontSize: "12px", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.7 }}>
                        #628/1333, Lane 1, Laxmi Vihar,<br />
                        Tankapani Road, Bhubaneswar,<br />
                        Odisha, 751002
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Column 4: Follow Us */}
              <div>
                <div className="f-col-title">Follow Us</div>
                <p style={{ fontSize: "12px", color: "#777", marginBottom: "16px", lineHeight: 1.6 }}>
                  Stay connected for latest solar updates from Green Filament.
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

                  {/* Facebook */}
                  <a href="https://www.facebook.com/green.filament/" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="Facebook">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                  </a>

                  {/* Instagram */}
                  <a href="https://www.instagram.com/green.filament/" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="Instagram">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                  </a>

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/company/green-filament" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="LinkedIn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                  </a>

                  {/* YouTube */}
                  <a href="https://www.youtube.com/@greenfilamentsolarenergy7440" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="YouTube">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" /></svg>
                  </a>

                </div>
              </div>

            </div>
          </div>

          {/* ============================================================
              MOBILE ACCORDION — hidden on desktop
              ============================================================ */}
          <div className="footer-mobile-accordion" style={{ display: "none" }}>

            {/* --- Quick Links accordion --- */}
            <AccordionItem title="Quick Links">
              {quickLinks.map((link) => (
                <Link key={link.label} href={link.href} className="f-link">{link.label}</Link>
              ))}
            </AccordionItem>

            {/* --- Our Product accordion --- */}
            <AccordionItem title="Our Products">
              {productLinks.map((link) => (
                <Link key={link.label} href={link.href} className="f-link">{link.label}</Link>
              ))}
            </AccordionItem>

            {/* --- Contact Us accordion --- */}
            <AccordionItem title="Contact Us">
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

                <a href="tel:+919337256398" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                  <div className="f-contact-icon-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>PHONE</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>+91 93372 56398</div>
                  </div>
                </a>

                <a href="mailto:connect@greenfilament.com" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                  <div className="f-contact-icon-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>EMAIL</div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>connect@greenfilament.com</div>
                  </div>
                </a>

                <a href="https://wa.me/919337256398" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#d1fae5", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>WHATSAPP</div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>+91 93372 56398</div>
                  </div>
                </a>

                <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div className="f-contact-icon-sm" style={{ marginTop: "2px" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "1px" }}>SNAIL MAIL</div>
                    <div style={{ fontSize: "12px", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.7 }}>
                      #628/1333, Lane 1, Laxmi Vihar,<br />
                      Tankapani Road, Bhubaneswar,<br />
                      Odisha, 751002
                    </div>
                  </div>
                </div>

              </div>
            </AccordionItem>

            {/* --- Follow Us accordion --- */}
            <AccordionItem title="Follow Us">
              <p style={{ fontSize: "12px", color: "#777", marginBottom: "14px", lineHeight: 1.6 }}>
                Stay connected for latest solar updates.
              </p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

                {/* Facebook */}
                <a href="https://www.facebook.com/green.filament/" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="Facebook">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/green.filament/" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="Instagram">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/company/green-filament" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="LinkedIn">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
                </a>

                {/* YouTube */}
                <a href="https://www.youtube.com/@greenfilamentsolarenergy7440" target="_blank" rel="noopener noreferrer" className="f-social" aria-label="YouTube">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" /></svg>
                </a>
              </div>
            </AccordionItem>

          </div>

          {/* --- Divider --- */}
          <div className="f-divider" style={{ marginTop: "24px" }} />

          {/* ============================================================
              CERTIFICATIONS ROW
              ============================================================ */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            paddingBottom: "24px",
            position: "relative",
            zIndex: 1,
          }}>
            {[
              { src: "/images/certifications/startup-india.png", alt: "Start-up India" },
              { src: "/images/certifications/startup-odisha.png", alt: "Start-up Odisha" },
              { src: "/images/certifications/nsic.png", alt: "NSIC Registered" },
              { src: "/images/certifications/msme.png", alt: "MSME Registered" },
              { src: "/images/certifications/iso.png", alt: "ISO Applied" },
            ].map((cert) => (
              <div key={cert.alt} style={{
                width: "100px",
                height: "45px",
                background: "#F5F5F5",
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

        {/* ============================================================
            COPYRIGHT BAR — amber gradient
            Desktop: space-between | Mobile: centered
            ============================================================ */}
        <div className="f-copyright">
          <div style={{ fontSize: "12px", color: "#412402", fontWeight: 600 }}>
            M/s Green Filament © {new Date().getFullYear()}. All rights reserved.&nbsp;|&nbsp; GSTIN: 21AASFG2145E1ZQ
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link href="/terms" style={{ fontSize: "12px", color: "#412402", textDecoration: "none", fontWeight: 600 }}>
              Terms & Conditions
            </Link>
            <Link href="/privacy" style={{ fontSize: "12px", color: "#412402", textDecoration: "none", fontWeight: 600 }}>
              Privacy Policy
            </Link>
          </div>
        </div>

      </footer>
    </>
  );
}