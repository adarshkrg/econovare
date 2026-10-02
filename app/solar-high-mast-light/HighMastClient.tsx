"use client";

/* ============================================================
   SOLAR HIGH MAST LIGHT — CLIENT COMPONENT
   - All visual content + FAQ accordion
   - Real project: Kapileswar Temple, Bhubaneswar
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
const highMastFaqs = [
  { q: "How long does the battery last on a solar high mast light?", a: "Most systems provide 8 to 12 hours of backup on a full charge, enough to run through the night even after a cloudy day." },
  { q: "What maintenance does a solar high mast light need?", a: "Periodic cleaning of the solar panel and a yearly check of the battery and wiring. The pole and fixtures themselves need very little upkeep." },
  { q: "What pole height do I need?", a: "It depends on the area you need to cover. We assess your site and recommend the right height and wattage combination." },
  { q: "How long does installation take?", a: "A standard solar high mast installation typically takes 3 to 5 days, depending on pole height and site conditions." },
  { q: "Can this be used for government or gram panchayat projects?", a: "Yes, we supply solar high mast lighting for highways, government sites, and gram panchayat projects, including tender-based procurement." },
];

export default function HighMastClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <main>

        {/* ============================================================
            PAGE STYLES
            ============================================================ */}
        <style>{`
          .hm-stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .hm-specs-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }
          .hm-uses-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .hm-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            align-items: center;
          }
          .hm-benefits-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .hm-faq-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          @media (max-width: 1024px) {
            .hm-specs-grid { grid-template-columns: repeat(2, 1fr); }
            .hm-uses-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .hm-stats-grid { grid-template-columns: 1fr; }
            .hm-specs-grid { grid-template-columns: 1fr; }
            .hm-uses-grid { grid-template-columns: 1fr; }
            .hm-steps-grid { grid-template-columns: 1fr; }
            .hm-benefits-grid { grid-template-columns: 1fr; }
            .hm-faq-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* ============================================================
            HERO
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #0d1a0d 0%, #14260f 100%)", padding: "clamp(60px, 9vw, 100px) clamp(24px, 5vw, 80px) clamp(48px, 7vw, 72px)", textAlign: "center" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FDB92E", color: "#412402", fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px", padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              SOLAR HIGH MAST
            </div>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.25 }}>
              Solar High Mast Lighting
            </h1>
            <p style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: "#c9c9c9", lineHeight: 1.8, marginBottom: "28px" }}>
              One tall pole, wide area coverage, powered entirely by the sun. Built for highways, temple grounds, ports, industrial sites, and large public spaces with no grid connection needed.
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
            <div className="hm-stats-grid">
              {[
                { value: "9-40m", label: "Pole Height" },
                { value: "100-500W", label: "Wattage Range" },
                { value: "8-12 Hrs", label: "Battery Backup" },
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
            WHAT IS SOLAR HIGH MAST LIGHTING
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              What Is It
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              What Is Solar High Mast Lighting
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify", marginBottom: "16px" }}>
              A solar high mast light is a tall pole fitted with multiple LED fixtures at the top, designed to illuminate a large area from a single point. Instead of putting up several small poles across a site, one high mast tower does the job of many. This is why highways, temple grounds, ports, and industrial yards rely on this design rather than standard street lighting.
            </p>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Unlike conventional high mast systems that draw power from the grid, a solar high mast runs entirely on its own solar panel and battery. There is no monthly electricity bill and no dependence on grid uptime, which makes it a practical choice for sites where a grid connection is unreliable, expensive to extend, or simply not available. For smaller roads and village lanes, our <Link href="/solar-street-lighting" style={{ color: "#F5A000", fontWeight: 600 }}>solar street lights</Link> are the better fit. High mast is built for wide area coverage, whether that is a highway stretch, a temple ground, or a large industrial yard.
            </p>
          </div>
        </div>

        {/* ============================================================
            HOW IT WORKS
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                How It Works
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                Three Simple Steps
              </h2>
            </div>
            <div className="hm-steps-grid">
              {[
                {
                  step: "01",
                  title: "Solar Panel Charges the Battery",
                  desc: "During the day, the solar panel mounted near the pole charges the battery through an MPPT controller, which is our standard choice since it draws more usable power from the panel than a basic PWM controller.",
                },
                {
                  step: "02",
                  title: "Battery Stores the Energy",
                  desc: "The charge is stored in a lithium-ion or LiFePO4 battery sized to run every LED fixture on the pole for a full night, even after a cloudy day.",
                },
                {
                  step: "03",
                  title: "LEDs Switch On Automatically",
                  desc: "At dusk, the fixtures turn on automatically and stay lit through the night, then switch off at dawn. No manual operation, no wiring back to the grid.",
                },
              ].map((s, i) => (
                <div key={s.step} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "24px", position: "relative" }}>
                  {i < 2 && (
                    <div style={{ position: "absolute", right: "-18px", top: "50%", transform: "translateY(-50%)", zIndex: 2, background: "#FFF3D6", border: "0.5px solid #FAC775", borderRadius: "50%", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                  )}
                  <div style={{ fontSize: "11px", fontWeight: 700, color: "#FDB92E", marginBottom: "8px", letterSpacing: "1px" }}>STEP {s.step}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>{s.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75 }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            SPECIFICATIONS
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Specifications
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                Built for Wide Area Coverage
              </h2>
            </div>
            <div className="hm-specs-grid">
              {[
                { label: "Pole Height", value: "9m to 40m" },
                { label: "LED Wattage", value: "100W to 500W" },
                { label: "Battery Type", value: "Lithium-ion or LiFePO4" },
                { label: "Controller", value: "MPPT" },
              ].map((spec) => (
                <div key={spec.label} style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", borderRadius: "14px", padding: "18px", textAlign: "center" }}>
                  <div style={{ fontSize: "12px", color: "#777", marginBottom: "6px" }}>{spec.label}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#412402" }}>{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            WHY SOLAR HIGH MAST
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Why Solar
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                Why Choose Solar Over Grid-Powered High Mast
              </h2>
            </div>
            <div className="hm-benefits-grid">
              {[
                {
                  title: "No Monthly Electricity Bill",
                  desc: "A grid-powered high mast runs on a meter connection that keeps adding to your electricity cost every single month for as long as the light operates. A solar high mast has zero running cost after installation, since the sun is doing all the work.",
                },
                {
                  title: "No Grid Extension Cost",
                  desc: "Extending grid infrastructure to a highway stretch, temple ground, or remote site is expensive and often takes months of approvals. A solar high mast skips this step entirely and can be installed wherever it is needed.",
                },
                {
                  title: "Lower Long-Term Cost",
                  desc: "The upfront cost of a solar high mast is offset within a few years through eliminated electricity bills. Over the 20 plus year lifespan of the panels, the total cost works out lower than a grid-connected equivalent.",
                },
                {
                  title: "Works Where Grid Cannot Reach",
                  desc: "linkVersion",
                },
              ].map((b) => (
                <div key={b.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #2d6a2d", padding: "24px" }}>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{b.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify" }}>
                    {b.desc === "linkVersion"
                      ? <>For highways, ports, and rural sites with no nearby grid connection, solar is often the only realistic option. We install these across <Link href="/solar-company-odisha" style={{ color: "#F5A000", fontWeight: 600 }}>sites throughout Odisha</Link>, giving reliable lighting from day one without waiting on a grid connection.</>
                      : b.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            WHERE IT'S USED
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Applications
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                Where It&apos;s Used
              </h2>
            </div>
            <div className="hm-uses-grid">
              {[
                { title: "Highways & Roads", desc: "Reliable lighting along stretches with no nearby grid infrastructure." },
                { title: "Temple Grounds & Public Spaces", desc: "Wide area lighting for temple premises and community gathering spaces." },
                { title: "Ports & Industrial Sites", desc: "Wide-area coverage for yards, loading zones, and operational areas." },
                { title: "Stadiums & Public Grounds", desc: "Even illumination for large open spaces and event grounds." },
                { title: "Parking Lots", desc: "Full coverage lighting for large vehicle parking areas." },
                { title: "Mela Grounds & Exhibitions", desc: "Temporary or permanent lighting for large gathering spaces." },
              ].map((use) => (
                <div key={use.title} style={{ background: "#FAFAFA", border: "0.5px solid #E8E2D8", borderRadius: "14px", padding: "20px" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{use.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.7 }}>{use.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            REAL PROJECT — SOLAR HIGH MAST LIGHT, KAPILESWAR TEMPLE, BHUBANESWAR
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Real Project
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              A Real Solar High Mast Project
            </h2>
            <div style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                <NextImage
                  src="/images/projects/solar-high-mast-kapileswar-bhubaneswar.jpg"
                  alt="Solar high mast light installation at Kapileswar Temple, Bhubaneswar, Odisha"
                  fill
                  sizes="(max-width: 768px) 100vw, 860px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: "12px", color: "#854F0B", fontWeight: 700, marginBottom: "6px" }}>GREEN FILAMENT PROJECT</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Solar High Mast Light, Kapileswar Temple, Bhubaneswar</div>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, textAlign: "justify", marginBottom: "12px" }}>
                  Kapileswar Temple in Bhubaneswar needed reliable lighting across its grounds without relying on a grid connection. Green Filament installed a 9-metre solar high mast pole fitted with four sets of 30W LED fixtures, giving wide, even coverage across the temple premises from a single point.
                </p>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, textAlign: "justify" }}>
                  The system runs on a 75W solar panel and a 30Ah LiFePO4 battery through an MPPT controller, our standard choice for efficient charging. The lights switch on automatically at dusk and run through the night, giving the temple dependable illumination with zero electricity bill.
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
            <div className="hm-faq-grid">
              {highMastFaqs.map((faq, i) => (
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
            CTA BANNER
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)", padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
            <svg width="100%" height="100%"><defs><pattern id="cta-hm" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-hm)" /></svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Ready to Light Up Your Site?
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
              Free site assessment. We recommend the right pole height and wattage for your needs.
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
