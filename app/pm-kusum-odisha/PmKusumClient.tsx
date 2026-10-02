"use client";

/* ============================================================
   PM KUSUM ODISHA — CLIENT COMPONENT
   - All visual content + FAQ accordion
   - Real project section is a placeholder until the team
     shares actual pump installation photos
   - Official sources section: 2-column cards linking to
     MNRE and the Odisha solar pump application portal
   - Mobile responsive, matches site pattern
   ============================================================ */

import { useState } from "react";
import Link from "next/link";
import NextImage from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   FAQ DATA — must match FaqSchema data in page.tsx
   ============================================================ */
const pmKusumFaqs = [
  { q: "Can I apply if I already have a diesel pump?", a: "Yes, replacing an existing diesel pump is one of the most common reasons farmers apply." },
  { q: "Do I need to own the land?", a: "Yes, valid land ownership documents are required." },
  { q: "What if I don't want a bank loan?", a: "You can pay your full share upfront instead, depending on whether Soura Jalanidhi applies to your case." },
  { q: "Can I get a bigger pump than I'm approved for?", a: "Yes, but you pay the cost difference above the approved capacity yourself." },
  { q: "How long does installation take after approval?", a: "Typically a few days once the vendor and site are confirmed." },
];

/* ============================================================
   SUBSIDY TABLE DATA
   ============================================================ */
const subsidyRows = [
  { label: "Central Subsidy (CFA)", value: "30%" },
  { label: "Odisha State Subsidy", value: "At least 30%" },
  { label: "Farmer Share", value: "10% upfront + up to 30% loan (optional)" },
];

/* ============================================================
   OFFICIAL SOURCES DATA
   ============================================================ */
const officialSources = [
  {
    name: "MNRE",
    desc: "Official PM Kusum Scheme Page",
    href: "https://mnre.gov.in/en/pradhan-mantri-kisan-urja-suraksha-evam-utthaan-mahabhiyaan-pm-kusum/",
  },
  {
    name: "Odisha Solar Pump",
    desc: "Official Application Portal",
    href: "https://www.odishasolarpump.nic.in/",
  },
];

export default function PmKusumClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>

        {/* ============================================================
            PAGE STYLES
            ============================================================ */}
        <style>{`
          .pmk-stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .pmk-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .pmk-faq-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .pmk-sources-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          @media (max-width: 1024px) {
            .pmk-steps-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .pmk-stats-grid { grid-template-columns: 1fr; }
            .pmk-steps-grid { grid-template-columns: 1fr; }
            .pmk-faq-grid { grid-template-columns: 1fr; }
            .pmk-sources-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* ============================================================
            HERO
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #0d1a0d 0%, #14260f 100%)", padding: "clamp(60px, 9vw, 100px) clamp(24px, 5vw, 80px) clamp(48px, 7vw, 72px)", textAlign: "center" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FDB92E", color: "#412402", fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px", padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              GOVERNMENT SCHEME
            </div>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.25 }}>
              PM Kusum Solar Pump Subsidy in Odisha
            </h1>
            <p style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: "#c9c9c9", lineHeight: 1.8, marginBottom: "28px" }}>
              Most Odisha farmers end up paying only 10 percent of the solar pump cost, sometimes even less under Soura Jalanidhi Yojana, with the rest covered by central subsidy, state subsidy, and an optional bank loan.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get Free Site Assessment</span>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </div>
              </Link>
              <a href="tel:+919337256398" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "0.5px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: "14px", fontWeight: 600, padding: "12px 22px", borderRadius: "40px", textDecoration: "none" }}>
                Call +91 93372 56398
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================
            STATS BAR
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 100%)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div className="pmk-stats-grid">
              {[
                { value: "3HP - 10HP", label: "Pump Range" },
                { value: "Up to 90%", label: "Subsidy (Soura Jalanidhi)" },
                { value: "10%", label: "Farmer Contribution" },
              ].map((stat, i, arr) => (
                <div key={stat.label} style={{ textAlign: "center", padding: "clamp(18px, 3vw, 28px) 16px", borderRight: i < arr.length - 1 ? "0.5px solid rgba(255,255,255,0.25)" : "none" }}>
                  <div style={{ fontSize: "clamp(20px, 3vw, 30px)", fontWeight: 800, color: "#fff" }}>{stat.value}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            WHAT IS PM KUSUM COMPONENT B
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              What Is It
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              What Is PM Kusum Component B
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              PM Kusum Component B is a central government scheme that helps farmers replace diesel irrigation pumps with solar powered pumps. It does not need a grid connection, which makes it especially useful for farmland in remote areas. The scheme is run by MNRE and implemented in Odisha through OREDA.
            </p>
          </div>
        </div>

        {/* ============================================================
            SUBSIDY BREAKDOWN
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Subsidy Breakdown
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              How the Subsidy Is Split
            </h2>
            <div style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "14px", overflow: "hidden" }}>
              {subsidyRows.map((row, i) => (
                <div key={row.label} style={{ display: "flex", justifyContent: "space-between", padding: "16px 20px", borderTop: i > 0 ? "0.5px solid #E8E2D8" : "none" }}>
                  <span style={{ fontSize: "14px", color: "#555" }}>{row.label}</span>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#2d6a2d" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            SOURA JALANIDHI
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Odisha Benefit
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Odisha&apos;s Extra Benefit: Soura Jalanidhi Yojana
            </h2>
            <div style={{ background: "#FFF3D6", borderLeft: "3px solid #F5A000", borderRadius: "0 10px 10px 0", padding: "18px 22px" }}>
              <p style={{ fontSize: "15px", color: "#412402", fontWeight: 500, lineHeight: 1.8, margin: 0 }}>
                Odisha runs its own additional scheme, Soura Jalanidhi Yojana, which can push the total subsidy up to 90 percent for small and marginal farmers, on top of the national PM Kusum baseline.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            PUMP SIZE
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Sizing
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Which Pump Size Do You Need
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Solar pumps under this scheme range from 3HP to 10HP. Most farms in Odisha fall in the 3HP to 7.5HP bracket, depending on land size and how deep the water source sits. We assess your land and water source before recommending the right capacity.
            </p>
          </div>
        </div>

        {/* ============================================================
            DOCUMENTS NEEDED
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Documents
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Documents Needed
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Land ownership papers such as RoR or Patta, your Aadhaar card, a bank passbook, and details of your water source. We help you organize everything before submission.
            </p>
          </div>
        </div>

        {/* ============================================================
            HOW TO APPLY
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Process
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                How To Apply
              </h2>
            </div>
            <div className="pmk-steps-grid">
              {[
                { step: "1", title: "Register", desc: "Register on the OREDA portal, or we do this for you." },
                { step: "2", title: "Site Verification", desc: "OREDA or DISCOM officials verify your land and water source." },
                { step: "3", title: "Contribution & Vendor", desc: "Deposit your share and select an empanelled vendor like us." },
                { step: "4", title: "Installation", desc: "Your solar pump is installed by our trained team." },
                { step: "5", title: "Inspection", desc: "The system is inspected and commissioned." },
                { step: "6", title: "Subsidy Processed", desc: "Your subsidy share is processed through the scheme." },
              ].map((item) => (
                <div key={item.step} style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "14px", borderTop: "3px solid #FDB92E", padding: "20px" }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#FDB92E", marginBottom: "8px" }}>{item.step}</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{item.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            COMMON REJECTION REASONS
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Avoid Rejections
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Common Reasons Applications Get Rejected
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Most rejections come down to incorrect or incomplete land documents, an unverified water source, or using a vendor that is not empanelled under the scheme. We check all of this before your application is submitted, so these issues do not come up later.
            </p>
          </div>
        </div>

        {/* ============================================================
            REAL PROJECT — PLACEHOLDER
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Real Project
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              A Real Solar Pump Project
            </h2>
            <div style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                <NextImage
                  src="/images/projects/pm-kusum-khaliapali-boudh.jpg"
                  alt="Solar water pump installation at Khaliapali village, Boudh district, Odisha"
                  fill
                  sizes="(max-width: 768px) 100vw, 860px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: "12px", color: "#854F0B", fontWeight: 700, marginBottom: "6px" }}>GREEN FILAMENT PROJECT</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Solar Water Pump, Khaliapali, Boudh District</div>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, textAlign: "justify" }}>
                  A ground-mounted solar water pump installed at Khaliapali village in Boudh district under the government solar irrigation scheme. The system now gives the farmer reliable water access without depending on diesel or grid electricity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            FAQ
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                FAQ
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="pmk-faq-grid">
              {pmKusumFaqs.map((faq, i) => (
                <div key={i} style={{ background: "#FAFAFA", border: "0.5px solid #E8E2D8", borderRadius: "10px", overflow: "hidden" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{faq.q}</span>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.25s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: "13px", color: "#555", lineHeight: 1.8 }}>{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            OFFICIAL SOURCES
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "24px clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", color: "#999", marginBottom: "12px", fontWeight: 700 }}>OFFICIAL SOURCES</p>
            <div className="pmk-sources-grid">
              {officialSources.map((source) => (
                <a key={source.name} href={source.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "12px", background: "#FAFAFA", border: "0.5px solid #E8E2D8", borderRadius: "10px", padding: "12px 16px", textDecoration: "none" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a" }}>{source.name}</div>
                    <div style={{ fontSize: "12px", color: "#777" }}>{source.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            DISCLAIMER
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "24px clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.8, textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
              All scheme and subsidy information on this page is based on publicly available data at the time of publishing. Green Filament does not guarantee the accuracy or current validity of any government scheme details. Subsidy amounts, eligibility criteria and scheme availability are subject to change at the discretion of Central or State Government authorities. We strongly recommend verifying details from official government portals before applying.
            </p>
          </div>
        </div>

        {/* ============================================================
            CTA BANNER
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)", padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
            <svg width="100%" height="100%"><defs><pattern id="cta-pmk" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-pmk)" /></svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Ready to Apply for PM Kusum?
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
              Free site assessment. We handle the entire application on your behalf.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Connect With Us</span>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </div>
              </Link>
              <a href="https://wa.me/919337256398" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.15)", border: "0.5px solid rgba(255,255,255,0.35)", color: "#fff", fontSize: "14px", fontWeight: 600, padding: "12px 22px", borderRadius: "40px", textDecoration: "none" }}>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}