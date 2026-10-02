"use client";

/* ============================================================
   PM SURYA GHAR ODISHA — CLIENT COMPONENT
   - All visual content + FAQ accordion + auto-advancing
     project carousel (Bhubaneswar + Cuttack)
   - Subsidy table: 4-column table on desktop, stacked cards
     on mobile
   - Verified 22 Sep 2026 against:
     * MNRE PM Surya Ghar CFA guidelines (July 2025 edition):
       central subsidy structure, DCR panel rule, e-token
       redemption, 15 day processing, 31 March 2027 end date,
       1 crore active application limit
     * Odisha cabinet decision (3 Jan 2025) + Tata Power release:
       state subsidy Rs 25,000 (1kW), Rs 50,000 (2kW),
       up to Rs 60,000 (3kW and above)
   - Application steps written as Green Filament hand-holding
     the consumer through the portal
   - Mobile responsive, matches site pattern
   ============================================================ */

import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   FAQ DATA — must match FaqSchema data in page.tsx
   ============================================================ */
const pmSuryaGharFaqs = [
  { q: "Can I apply for PM Surya Ghar if I already have a solar system?", a: "No, the subsidy is only for new installations, not existing systems." },
  { q: "What happens if my roof does not have enough space?", a: "You can install a smaller system, such as 1kW or 2kW, which still qualifies for a proportional subsidy." },
  { q: "Do I need to buy a specific brand of solar panel?", a: "The panel does not need to be a specific brand, but it must be manufactured in India and listed under the government's approved list." },
  { q: "Is there a separate application for the Odisha state subsidy?", a: "No, the state subsidy is processed alongside the central subsidy once your system is registered." },
  { q: "What if my application gets rejected?", a: "Common reasons are incorrect bank details or non-approved panels. We double check all documentation before submission to avoid this." },
];

/* ============================================================
   SUBSIDY TABLE DATA
   ============================================================ */
const subsidyTiers = [
  { size: "1 kW", central: "₹30,000", state: "₹25,000", total: "₹55,000", highlight: false },
  { size: "2 kW", central: "₹60,000", state: "₹50,000", total: "₹1,10,000", highlight: false },
  { size: "3 kW", central: "₹78,000", state: "Up to ₹60,000", total: "Up to ₹1,38,000", highlight: true },
];

/* ============================================================
   PROJECT CAROUSEL DATA
   ============================================================ */
const carouselProjects = [
  {
    city: "BHUBANESWAR",
    title: "3kW Rooftop Solar under PM Surya Ghar",
    desc: "A family home in Bhubaneswar installed a 3kW system under the PM Surya Ghar scheme. We handled the full subsidy application on their behalf. Once the system was commissioned and the subsidy arrived, the family's monthly electricity bill reduced by around 50 percent.",
    image: "/images/projects/rooftop-bhubaneswar-jagmohan-nagar.jpg",
    href: "/rooftop-solar-bhubaneswar",
  },
  {
    city: "CUTTACK",
    title: "3kW Rooftop Solar near Buxi Bazar",
    desc: "A home near Buxi Bazar Road in Cuttack installed a 3kW rooftop solar system with us. We handled the site assessment, structure design, and installation. The system now generates clean power daily.",
    image: "/images/projects/rooftop-cuttack-buxi-bazar.jpg",
    href: "/rooftop-solar-cuttack",
  },
];

export default function PmSuryaGharClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  /* --- Auto-advance carousel every 5 seconds --- */
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % carouselProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeProject = carouselProjects[slide];

  return (
    <>
      <Navbar />
      <main>

        {/* ============================================================
            PAGE STYLES
            ============================================================ */}
        <style>{`
          .psg-cost-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }
          .psg-steps-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .psg-faq-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .psg-subsidy-table-desktop { display: block; }
          .psg-subsidy-cards-mobile { display: none; }
          @media (max-width: 1024px) {
            .psg-cost-grid { grid-template-columns: repeat(2, 1fr); }
            .psg-steps-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .psg-cost-grid { grid-template-columns: 1fr; }
            .psg-steps-grid { grid-template-columns: 1fr; }
            .psg-faq-grid { grid-template-columns: 1fr; }
            .psg-subsidy-table-desktop { display: none; }
            .psg-subsidy-cards-mobile { display: flex; }
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
              PM Surya Ghar Yojana in Odisha
            </h1>
            <p style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: "#c9c9c9", lineHeight: 1.8, marginBottom: "28px" }}>
              PM Surya Ghar is the central government scheme that pays you to install rooftop solar on your home. In Odisha, this combines with a state-level top-up, bringing your total subsidy up to 1.38 lakh rupees for a 3kW system. Here is exactly how it works.
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
            WHAT IS PM SURYA GHAR
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              What Is It
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              What Is PM Surya Ghar
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              PM Surya Ghar Muft Bijli Yojana is a central government scheme launched to help homeowners install rooftop solar at a much lower cost. The government pays a fixed subsidy directly into your bank account once your system is installed and inspected. In Odisha, this central subsidy is combined with an additional state government subsidy, making the total benefit even larger.
            </p>
          </div>
        </div>

        {/* ============================================================
            SUBSIDY AMOUNT BY SYSTEM SIZE
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Subsidy Amount
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Subsidy Amount by System Size
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "24px", textAlign: "justify" }}>
              The central subsidy increases with system size up to 3kW, after which it stays capped at ₹78,000. Odisha adds a further state subsidy on top of the central amount, at every tier.
            </p>

            {/* Desktop table */}
            <div className="psg-subsidy-table-desktop" style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", background: "#FFF3D6", padding: "14px 16px" }}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#854F0B" }}>SYSTEM CAPACITY</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#854F0B" }}>CENTRAL SUBSIDY</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#854F0B" }}>STATE SUBSIDY (ODISHA)</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#854F0B" }}>TOTAL BENEFIT</div>
              </div>
              {subsidyTiers.map((tier) => (
                <div key={tier.size} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "16px", borderTop: "0.5px solid #E8E2D8", background: tier.highlight ? "#FAFAFA" : "#fff" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{tier.size}</div>
                  <div style={{ fontSize: "14px", color: "#555" }}>{tier.central}</div>
                  <div style={{ fontSize: "14px", color: "#555" }}>{tier.state}</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#2d6a2d" }}>{tier.total}</div>
                </div>
              ))}
            </div>

            {/* Mobile stacked cards */}
            <div className="psg-subsidy-cards-mobile" style={{ flexDirection: "column", gap: "10px" }}>
              {subsidyTiers.map((tier) => (
                <div key={tier.size} style={{ background: tier.highlight ? "#FAFAFA" : "#fff", border: tier.highlight ? "0.5px solid #FDB92E" : "0.5px solid #E8E2D8", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ fontSize: "15px", fontWeight: 800, color: "#1a1a1a", marginBottom: "10px" }}>{tier.size} System</div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#555", padding: "6px 0", borderBottom: "0.5px solid #f0f0f0" }}>
                    <span>Central Subsidy</span><span style={{ fontWeight: 600, color: "#333" }}>{tier.central}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "#555", padding: "6px 0", borderBottom: "0.5px solid #f0f0f0" }}>
                    <span>State Subsidy (Odisha)</span><span style={{ fontWeight: 600, color: "#333" }}>{tier.state}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", paddingTop: "8px" }}>
                    <span style={{ fontWeight: 700, color: "#854F0B" }}>Total Benefit</span><span style={{ fontWeight: 800, color: "#2d6a2d" }}>{tier.total}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            COST COMPARISON BY SYSTEM SIZE
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Cost Comparison
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                What You Pay After Subsidy
              </h2>
            </div>
            <div className="psg-cost-grid">
              {[
                { size: "1 kW", before: "₹70k - 90k", subsidy: "₹55,000", net: "₹15k - 35k" },
                { size: "2 kW", before: "₹1.4L - 1.7L", subsidy: "₹1,10,000", net: "₹30k - 60k" },
                { size: "3 kW", before: "₹2.2L - 2.6L", subsidy: "Up to ₹1,38,000", net: "₹82k - 1.22L" },
                { size: "5 kW", before: "₹3.5L - 4L", subsidy: "Up to ₹1,38,000", net: "₹2.12L - 2.62L" },
              ].map((row) => (
                <div key={row.size} style={{ background: "#FAFAFA", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", borderRadius: "14px", padding: "18px" }}>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#1a1a1a", marginBottom: "10px" }}>{row.size}</div>
                  <div style={{ fontSize: "12px", color: "#777", marginBottom: "2px" }}>Before subsidy</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#412402", marginBottom: "8px" }}>{row.before}</div>
                  <div style={{ fontSize: "12px", color: "#777", marginBottom: "2px" }}>Subsidy</div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "#2d6a2d", marginBottom: "8px" }}>{row.subsidy}</div>
                  <div style={{ fontSize: "12px", color: "#777", marginBottom: "2px" }}>You pay</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a4a8a" }}>{row.net}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "12px", color: "#999", marginTop: "16px", textAlign: "center" }}>
              Both the central and Odisha state subsidy are capped at their 3kW rate. Systems above 3kW still receive the same maximum combined subsidy of up to ₹1,38,000.
            </p>
          </div>

          {/* ROI Calculator CTA box — centered within content column */}
          <div style={{ maxWidth: "860px", margin: "24px auto 0" }}>
            <div style={{ background: "#FFF3D6", borderLeft: "3px solid #F5A000", borderRadius: "0 10px 10px 0", padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
              <p style={{ fontSize: "15px", color: "#412402", fontWeight: 500, lineHeight: 1.7, margin: 0, flex: 1, minWidth: "220px" }}>
                Want to see your exact monthly savings after subsidy? Check your payback period based on your own electricity bill.
              </p>
              <Link href="/solar-roi-calculator" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FDB92E", color: "#412402", fontSize: "13px", fontWeight: 700, padding: "10px 18px", borderRadius: "8px", textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0 }}>
                Try ROI Calculator →
              </Link>
            </div>
          </div>
        </div>

        {/* ============================================================
            WHO IS ELIGIBLE
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Eligibility
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Who Is Eligible
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Any homeowner with their own rooftop and a valid electricity connection can apply. Your roof needs to be shadow-free for most of the day, with at least 100 square feet of space for a 1kW system, or around 300 square feet for a 3kW system. Solar panels must be made in India using Indian-made solar cells, and must be listed on the government&apos;s approved list, to qualify for the subsidy.
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
              Your latest electricity bill, Aadhaar card, and a bank passbook linked to your Aadhaar number for the subsidy transfer. Some cases may also need a house tax receipt.
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
            <div className="psg-steps-grid">
              {[
                { step: "1", title: "Register", desc: "We register your application on the official PM Surya Ghar portal using your electricity consumer number." },
                { step: "2", title: "Installation", desc: "Our team installs the system with approved, Indian-made panels." },
                { step: "3", title: "Upload Details", desc: "We upload the system details and geo-tagged photos to the portal for you." },
                { step: "4", title: "Inspection Request", desc: "We submit the inspection request to your DISCOM and coordinate the net metering agreement." },
                { step: "5", title: "Net Meter Installed", desc: "Your DISCOM installs the net meter after inspection is complete." },
                { step: "6", title: "Subsidy Credited", desc: "We guide you to redeem the subsidy on the portal, and it is credited to your bank or loan account." },
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
            LOAN OPTION
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Financing
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Can I Take a Loan for This
            </h2>
            <div style={{ background: "#FFF3D6", borderLeft: "3px solid #F5A000", borderRadius: "0 10px 10px 0", padding: "18px 22px" }}>
              <p style={{ fontSize: "15px", color: "#412402", fontWeight: 500, lineHeight: 1.8, margin: 0 }}>
                Yes. Once your subsidy arrives, it goes directly toward reducing your loan amount, which lowers your EMI going forward. Connect with your bank for details like interest rate and tenure.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            WHEN DOES SUBSIDY ARRIVE
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Timeline
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              When Does the Subsidy Arrive
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Under the scheme guidelines, the subsidy is to be processed within 15 days of your DISCOM approving the installation. You then redeem your subsidy on the portal, and we guide you through it. The total time depends on how quickly your DISCOM completes inspection and metering.
            </p>
          </div>
        </div>

        {/* ============================================================
            COMMON DELAY REASONS
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Avoid Delays
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Common Reasons Subsidy Gets Delayed
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Most delays come down to a small number of avoidable issues. Your bank account not being seeded with Aadhaar for direct transfer is the most common one. Using a solar panel brand that is not on the government&apos;s approved list is another. Pending DISCOM inspection or incomplete net metering paperwork can also hold things up. We check all of this before your application is submitted, so these issues do not come up later.
            </p>
          </div>
        </div>

        {/* ============================================================
            DEADLINE
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Deadline
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              How Long Is This Scheme Available
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              The scheme runs until 31 March 2027. The national portal accepts up to 1 crore active applications, and once that limit is reached the Ministry may set a time limit for finishing installations. Check the official portal before you apply.
            </p>
          </div>
        </div>

        {/* ============================================================
            REAL PROJECTS — AUTO-ADVANCING CAROUSEL
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Real Projects
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                PM Surya Ghar in Action
              </h2>
            </div>

            {/* Carousel card */}
            <div style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", borderRadius: "16px", overflow: "hidden" }}>
              <Link href={activeProject.href} style={{ textDecoration: "none" }}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
                  <NextImage
                    src={activeProject.image}
                    alt={`${activeProject.title}, ${activeProject.city}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 860px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ fontSize: "12px", color: "#854F0B", fontWeight: 700, marginBottom: "6px" }}>{activeProject.city}</div>
                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{activeProject.title}</div>
                  <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, textAlign: "justify", marginBottom: "10px" }}>
                    {activeProject.desc}
                  </p>
                  <span style={{ fontSize: "13px", color: "#F5A000", fontWeight: 600 }}>Know More →</span>
                </div>
              </Link>
            </div>

            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "16px" }}>
              {carouselProjects.map((p, i) => (
                <button
                  key={p.city}
                  onClick={() => setSlide(i)}
                  aria-label={`Show ${p.city} project`}
                  style={{ width: "8px", height: "8px", borderRadius: "50%", border: "none", padding: 0, cursor: "pointer", background: i === slide ? "#FDB92E" : "#E8E2D8" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            FAQ
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                FAQ
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="psg-faq-grid">
              {pmSuryaGharFaqs.map((faq, i) => (
                <div key={i} style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "10px", overflow: "hidden" }}>
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
            DISCLAIMER
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "24px clamp(24px, 5vw, 80px)" }}>
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
            <svg width="100%" height="100%"><defs><pattern id="cta-psg" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-psg)" /></svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Ready to Apply for PM Surya Ghar?
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
