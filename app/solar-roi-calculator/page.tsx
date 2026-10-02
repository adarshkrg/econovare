/* ============================================================
   SOLAR ROI CALCULATOR PAGE — /solar-roi-calculator
   - Server component: metadata + full page JSX
   - Only the calculator itself (mode toggle, inputs, results)
     is a client component — rest is server rendered, matching
     the pattern used on /rooftop-solar-bhubaneswar
   - Targets "solar ROI calculator Odisha" search intent
   ============================================================ */

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSchema from "../components/FaqSchema";
import FaqAccordion from "../components/FaqAccordion";
import SolarRoiCalculatorClient from "./SolarRoiCalculatorClient";

/* ============================================================
   FAQ DATA — must match the FAQ text rendered further down this page
   Passed into both FaqSchema (for Google) and FaqAccordion (for users)
   ============================================================ */
const roiFaqs = [
  { q: "How much can I save with solar in Odisha?", a: "Your savings depend on how many units you consume each month and which slab your usage falls into. A household consistently crossing into the Rs 5.70 or Rs 6.10 slab sees the biggest monthly savings once solar starts offsetting that consumption." },
  { q: "What is net metering and how does it affect my bill?", a: "Net metering lets you export surplus solar power to the grid and get credited for it. Your bill is then calculated on your net consumption, which is what you actually pulled from the grid after subtracting what your panels sent back." },
  { q: "How is the payback period calculated?", a: "We divide the total cost of your system, after subsidy, by your estimated annual savings. This gives you the number of years it takes for your savings to equal what you spent on installation." },
  { q: "Do TPWODL, TPSODL and TPNODL have the same rates as TPCODL?", a: "Yes. OERC sets one common domestic tariff schedule that all four Odisha discoms follow. Only your service area and billing portal change based on your discom, not the per unit rate." },
  { q: "What size solar system should I choose, 1kW, 2kW or 3kW?", a: "This depends on your monthly consumption. As a rough guide, 1kW suits smaller households with lower bills, while 3kW suits homes with higher consumption or additional appliances like air conditioners." },
  { q: "Does this calculator include the PM Surya Ghar subsidy?", a: "Yes, the comparison factors in the applicable central subsidy for residential rooftop systems before showing your payback period." },
  { q: "How accurate are the numbers shown here?", a: "The tariff calculations are based on verified OERC slab rates. Actual savings can vary slightly depending on your roof orientation, shading and real time solar generation, so we recommend a free site visit for an exact quote." },
  { q: "Can I use this calculator if I do not know my exact monthly units?", a: "Yes, use Quick mode with an approximate figure from your last bill. If you want a more accurate estimate, switch to Detailed mode and enter units for all 12 months." },
  { q: "How much CO2 does a rooftop solar system save every year?", a: "This varies by system size, and we show it for each option in the calculator. A 3kW system, for example, offsets several tonnes of CO2 annually compared to grid electricity generated from coal." },
  { q: "Is there a minimum roof size needed for these systems?", a: "A 1kW system typically needs around 80 to 100 square feet, and this scales up roughly in proportion for 2kW and 3kW systems." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Solar ROI Calculator Odisha | Check Your Payback Period - Green Filament",
  description:
    "Free solar ROI calculator for Odisha households. Compare 1kW, 2kW and 3kW systems using real OERC domestic tariff rates. See monthly savings, payback period and CO2 saved.",
  keywords: [
    "solar ROI calculator Odisha",
    "TPCODL solar savings calculator",
    "solar payback period Odisha",
    "Odisha electricity tariff solar savings",
    "solar savings calculator Bhubaneswar",
  ],
  alternates: {
    canonical: "https://greenfilament.com/solar-roi-calculator",
  },
  openGraph: {
    title: "Solar ROI Calculator Odisha | Green Filament",
    description:
      "See how much you could save with rooftop solar in Odisha. Free calculator using real OERC tariff slabs.",
    url: "https://greenfilament.com/solar-roi-calculator",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Solar ROI Calculator Odisha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar ROI Calculator Odisha | Green Filament",
    description: "See how much you could save with rooftop solar in Odisha.",
    images: ["/images/og-image.jpg"],
  },
};

export default function SolarRoiCalculatorPage() {
  return (
    <>
      <FaqSchema faqs={roiFaqs} />
      <Navbar />
      <main>

        {/* ============================================================
            HERO + CALCULATOR (interactive — client component)
            ============================================================ */}
        <SolarRoiCalculatorClient />

        {/* ============================================================
            HOW THIS CALCULATOR WORKS
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              How It Works
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              How This Calculator Works
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "16px", textAlign: "justify" }}>
              We built this calculator using the same telescopic slab system that OERC uses to bill every household in Odisha. When you enter your monthly units, we run them through the four tariff slabs exactly the way TPCODL, TPWODL, TPSODL and TPNODL would on your actual bill. That means the savings numbers you see here are not a rough estimate pulled from a generic formula, they follow the real math behind your electricity bill.
            </p>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              For each system size, we calculate how many units your rooftop panels would generate in an average Odisha month, then work out how much of your grid bill that generation would offset. The result is your monthly savings, how many years it takes for the system to pay for itself, and how much carbon dioxide you would keep out of the atmosphere every year. Curious why we use an average instead of a single month's figure? We break down real monsoon versus dry season generation data in{" "}
              <Link href="/blogs/monsoon-solar-generation-odisha" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>
                this article
              </Link>.
            </p>
          </div>
        </div>

        {/* ============================================================
            UNDERSTANDING YOUR ODISHA ELECTRICITY BILL
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Understanding Your Bill
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              Understanding Your Odisha Electricity Bill
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "16px", textAlign: "justify" }}>
              Every domestic connection in Odisha is billed under a telescopic slab system. The first block of units you use each month costs Rs 2.90 per unit, the next block costs Rs 4.70, then Rs 5.70, and anything above that is billed at Rs 6.10 per unit. On top of this, the state adds a 4 percent electricity duty. This structure means the more you consume, the more your last few units cost you, which is exactly why solar makes the biggest difference for households with higher monthly bills.
            </p>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              This slab structure is common across all four Odisha discoms. TPCODL, TPWODL, TPSODL and TPNODL are all run by Tata Power in partnership with the Odisha government, and OERC sets one tariff schedule that applies to all of them. So whether you are in Bhubaneswar, Cuttack, Sambalpur or Berhampur, the rates you see in this calculator apply to your bill too.
            </p>
          </div>
        </div>

        {/* ============================================================
            REAL PROJECT REFERENCE
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
              Real Project
            </div>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
              A Real Project, Real Numbers
            </h2>
            <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
              We installed a 9 metre solar high mast system at Kapileswar Temple in Bhubaneswar, and it has been running on solar power alone since. You can read the full breakdown of that project, including the exact panel and battery specs we used, on our{" "}
              <Link href="/solar-high-mast-light" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>
                solar high mast light
              </Link>{" "}
              page.
            </p>
          </div>
        </div>

        {/* ============================================================
            FAQ (reusable accordion component)
            ============================================================ */}
        <FaqAccordion faqs={roiFaqs} />

        {/* ============================================================
            DISCLAIMER
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "24px clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <p style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.8, textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
              This calculator gives an estimate based on verified OERC tariff rates and average Odisha solar generation figures. Actual savings depend on your roof condition, shading, and real time generation. Green Filament recommends a free site visit for an exact quote before making any purchase decision.
            </p>
          </div>
        </div>

        {/* ============================================================
            CTA BANNER
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)", padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Want An Exact Quote Instead Of An Estimate?
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
              This calculator gives you a close estimate. For an exact quote based on your roof and usage, talk to our team.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Get a Free Quote</span>
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
