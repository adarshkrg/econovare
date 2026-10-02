/* ============================================================
   ROOFTOP SOLAR CUTTACK PAGE — /rooftop-solar-cuttack
   - Server component: metadata + full page JSX
   - Targets "rooftop solar installation Cuttack" search intent
   - Distinct from /solar-company-odisha (state-level company page)
     and /rooftop-solar (general product page) — this page is
     hyper-local to Cuttack city specifically
   - Mobile responsive, matches rooftop-solar-bhubaneswar pattern
   ============================================================ */

import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSchema from "../components/FaqSchema";

/* ============================================================
   FAQ DATA — must match the FAQ text rendered further down this page
   ============================================================ */
const cuttackFaqs = [
  { q: "How much does a 3kW rooftop solar system cost in Cuttack?", a: "Between 80,000 and 1.2 lakh rupees net, after PM Surya Ghar and Odisha state subsidy is applied." },
  { q: "How long does installation take?", a: "1 to 2 days for a standard residential system in Cuttack." },
  { q: "Do I need to apply for the subsidy myself?", a: "No. We handle the complete PM Surya Ghar and Odisha state subsidy application on your behalf." },
  { q: "Which DISCOM handles net metering in Cuttack?", a: "TPCODL, which covers Cuttack district along with Bhubaneswar and the surrounding Central Odisha region." },
  { q: "How much roof space do I need for a 3kW system?", a: "About 300 to 350 square feet of shadow-free roof space." },
  { q: "Do you provide free site visits in Cuttack?", a: "Yes. We visit your home to assess roof space, shading, and design the right system size before you commit to anything." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Rooftop Solar Installation in Cuttack | Green Filament",
  description:
    "Rooftop solar installation in Cuttack. Free site visit, full subsidy paperwork handled, 1 to 2 day installation. 500+ rooftop projects across Odisha.",
  keywords: [
    "rooftop solar installation Cuttack",
    "solar panel installation Cuttack",
    "rooftop solar Cuttack price",
    "solar company Cuttack",
    "PM Surya Ghar Cuttack",
    "TPCODL net metering Cuttack",
  ],
  alternates: {
    canonical: "https://greenfilament.com/rooftop-solar-cuttack",
  },
  openGraph: {
    title: "Rooftop Solar Installation in Cuttack | Green Filament",
    description:
      "Free site visit, full subsidy paperwork handled, 1 to 2 day installation. 500+ rooftop projects across Odisha.",
    url: "https://greenfilament.com/rooftop-solar-cuttack",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Rooftop Solar Installation Cuttack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooftop Solar Installation in Cuttack | Green Filament",
    description: "Free site visit, full subsidy paperwork handled, 1 to 2 day installation.",
    images: ["/images/og-image.jpg"],
  },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function RooftopSolarCuttackPage() {
  return (
    <>
      <FaqSchema faqs={cuttackFaqs} />
      <Navbar />
      <main>

        {/* ============================================================
            PAGE STYLES
            ============================================================ */}
        <style>{`
          .rsc-stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
          }
          .rsc-steps-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 14px;
          }
          .rsc-faq-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          @media (max-width: 1024px) {
            .rsc-steps-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .rsc-stats-grid { grid-template-columns: 1fr; }
            .rsc-steps-grid { grid-template-columns: 1fr; }
            .rsc-faq-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* ============================================================
            HERO
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #0d1a0d 0%, #14260f 100%)", padding: "clamp(60px, 9vw, 100px) clamp(24px, 5vw, 80px) clamp(48px, 7vw, 72px)", textAlign: "center" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FDB92E", color: "#412402", fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px", padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              CUTTACK
            </div>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.25 }}>
              Rooftop Solar Installation in Cuttack
            </h1>
            <p style={{ fontSize: "clamp(14px, 1.6vw, 17px)", color: "#c9c9c9", lineHeight: 1.8, marginBottom: "28px" }}>
              Cut your electricity bill with a <Link href="/rooftop-solar" style={{ color: "#FDB92E", fontWeight: 600, textDecoration: "underline" }}>rooftop solar system</Link> installed and serviced locally in Cuttack. We handle the subsidy paperwork, the installation, and the net metering setup, so you do not have to run between offices.
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
            <div className="rsc-stats-grid">
              {[
                { value: "500+", label: "Rooftop Projects" },
                { value: "₹80k - 1.2L", label: "Net Cost, 3kW System" },
                { value: "1-2 Days", label: "Installation Time" },
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
            WHY CUTTACK HOMEOWNERS ARE SWITCHING
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Why Solar, Why Now
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Why Cuttack Homeowners Are Switching to Solar
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              Electricity bills in Cuttack have gone up almost every year through TPCODL&apos;s tariff revisions. A typical 2BHK or 3BHK home here pays anywhere from 3,000 to 6,000 rupees a month depending on AC usage. A rooftop solar system brings that down by 70 to 90 percent, and once the panels are paid off, that electricity is essentially free for the next 20 years.
            </p>
          </div>
        </div>

        {/* ============================================================
            WHAT IT COSTS
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Pricing
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              What It Costs in Cuttack
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "24px", textAlign: "justify" }}>
              A 3kW system costs between 2.2 lakh and 2.6 lakh rupees before subsidy. With the PM Surya Ghar central subsidy of 78,000 rupees and the Odisha state subsidy of 60,000 rupees under the current <Link href="/schemes" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>government schemes</Link>, most homes in Cuttack end up paying between 80,000 and 1.2 lakh rupees net. We calculate this exactly for your home based on your roof size and current bill, in a free site visit.
            </p>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginTop: "16px", textAlign: "justify" }}>
              Want a quick number before booking a visit? Try our <Link href="/solar-roi-calculator" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>Solar ROI Calculator</Link> to see your estimated monthly savings and payback period based on your actual electricity bill.
            </p>

            {/* Cost breakdown box */}
            <div style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "14px", padding: "20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "12px", color: "#777", marginBottom: "4px" }}>SYSTEM COST</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#412402" }}>₹2.2L - ₹2.6L</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "12px", color: "#777", marginBottom: "4px" }}>TOTAL SUBSIDY</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#2d6a2d" }}>₹1,38,000</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "12px", color: "#777", marginBottom: "4px" }}>YOU PAY</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a4a8a" }}>₹80,000 - ₹1.2L</div>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            HOW INSTALLATION WORKS
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Our Process
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                How Installation Works
              </h2>
            </div>
            <div className="rsc-steps-grid">
              {[
                { step: "1", title: "Free Site Visit", desc: "We check your roof space, shading, and roof direction at no cost." },
                { step: "2", title: "Subsidy Application", desc: "We handle the full PM Surya Ghar and Odisha state subsidy application for you." },
                { step: "3", title: "Installation", desc: "1 to 2 days for a standard home, done by our own trained team." },
                { step: "4", title: "Net Metering", desc: "TPCODL inspects the system and installs your net meter. Subsidy arrives in 30 to 45 days." },
              ].map((item) => (
                <div key={item.step} style={{ background: "#FAFAFA", border: "0.5px solid #E8E2D8", borderRadius: "14px", borderTop: "3px solid #FDB92E", padding: "20px" }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: "#FDB92E", marginBottom: "8px" }}>{item.step}</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{item.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.7 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            REAL CUTTACK PROJECT
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Local Project
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              A Real Cuttack Project
            </h2>
            <div style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                <NextImage
                  src="/images/projects/rooftop-cuttack-buxi-bazar.jpg"
                  alt="3kW rooftop solar panel installation at a home near Buxi Bazar, Cuttack"
                  fill
                  sizes="(max-width: 768px) 100vw, 860px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "20px 24px" }}>
                <div style={{ fontSize: "12px", color: "#854F0B", fontWeight: 700, marginBottom: "6px" }}>GREEN FILAMENT PROJECT</div>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>3kW Rooftop Solar near Buxi Bazar, Cuttack</div>
                <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, textAlign: "justify" }}>
                  A home near Buxi Bazar Road in Cuttack installed a 3kW rooftop solar system with us. We handled the site assessment, structure design, and installation. The system now generates clean power daily, reducing the household&apos;s dependence on grid electricity.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            AREAS WE SERVE
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Service Area
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Areas We Serve Across Cuttack
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              We install across every part of the city, including Buxi Bazar, Choudhury Bazar, Badambadi, College Square, Link Road, Bidanasi, Malgodown, CDA, and every other locality in Cuttack and its surrounding areas.
            </p>
          </div>
        </div>

        {/* ============================================================
            WHY CHOOSE GREEN FILAMENT
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Why Green Filament
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Why Choose Green Filament
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
              We are a <Link href="/solar-company-odisha" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>solar company based in Bhubaneswar</Link> with over 500 rooftop installations across Odisha, including Cuttack. We handle your entire subsidy paperwork for free, so there is no back and forth with government offices on your end. All our panels come with a 25 year performance warranty.
            </p>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              The PM Surya Ghar scheme runs until 31 March 2027, or until 1 crore homes across India are covered, whichever happens first. If you are considering solar for your Cuttack home, this is a good time to get your free site assessment done.
            </p>
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
            <div className="rsc-faq-grid">
              {cuttackFaqs.map((faq, i) => (
                <div key={i} style={{ background: "#FAFAFA", border: "0.5px solid #E8E2D8", borderRadius: "10px", padding: "18px 20px" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px", display: "flex", gap: "10px" }}>
                    <span style={{ color: "#FDB92E", flexShrink: 0 }}>Q.</span>{faq.q}
                  </div>
                  <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.8, paddingLeft: "22px", textAlign: "justify" }}>{faq.a}</div>
                </div>
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
            <svg width="100%" height="100%"><defs><pattern id="cta-rsc" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-rsc)" /></svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Ready to Go Solar in Cuttack?
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
              Free site assessment. No sales pressure. We explain everything before you decide anything.
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