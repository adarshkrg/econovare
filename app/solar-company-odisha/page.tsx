/* ============================================================
   SOLAR COMPANY ODISHA PAGE — /solar-company-odisha
   - Server component: metadata + full page JSX
   - No client component needed
   - SEO optimised for "solar company in Odisha"
   - Mobile responsive, amber gradient hero
   ============================================================ */

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqSchema from "../components/FaqSchema";

const solarCompanyFaqs = [
  { q: "How much will my electricity bill reduce with solar?", a: "For a typical household in Bhubaneswar using 250 to 400 units per month, a 3kW system reduces the bill by 70 to 90%. Some months it drops to near zero through net metering credits." },
  { q: "Is solar worth it in 2026 in Odisha?", a: "Electricity tariffs in Odisha have been rising every year. Solar panel costs have fallen by more than 60% since 2001. The payback period today is 3 to 5 years. After that you generate free electricity for 20 plus more years. Yes, it is worth it." },
  { q: "Do you serve districts outside Bhubaneswar?", a: "Yes. We have delivered projects in Mayurbhanj, Dhenkanal, Ganjam, Khordha, Cuttack, Jharsuguda and 12 plus districts across Odisha. We also work in Jharkhand. If you are in Odisha, we can reach you." },
  { q: "Which solar panel brands do you use?", a: "For panels we work with Tata Power Solar, Waaree, Luminous, Amaze and Exide. For inverters we use Tata, Waaree, Luminous, Amaze, Exide and Amaron. All mounting structures are GI hot-dip galvanized steel." },
  { q: "How long does solar installation take?", a: "A residential rooftop system takes 1 to 2 days. Commercial systems take 3 to 5 days. Government and large projects take 5 to 10 days depending on scope and size." },
  { q: "What happens if something stops working after installation?", a: "For our manufactured products like solar street lights and solar cooking systems, we target a 48-hour response time for any complaint. For rooftop solar with branded components, manufacturer warranties apply and we support the claim process. We do not disappear after installation." },
  { q: "Can farmers in Odisha get solar pumps affordably?", a: "Under PM KUSUM scheme, farmers typically pay only 10% of the solar pump cost directly. The remaining amount is covered through a combination of central subsidy, state subsidy and a subsidised bank loan. Odisha also has the Soura Jalanidhi Yojana with similar benefits for small and marginal farmers. Scheme terms change from time to time so we recommend verifying current details before applying. We help you identify the right scheme and handle the complete application process." },
  { q: "What is the warranty on solar panels and systems?", a: "Quality solar panels from Tata and Waaree carry a 25-year performance warranty. Inverters carry 5-year warranty. Our street lights carry 2 to 5 year warranty depending on the model and application." },
];

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Solar Company in Odisha | Green Filament, Bhubaneswar",
  description:
    "Green Filament is a trusted solar company in Odisha since 2018. Rooftop solar, solar street lights, water pumps and solar cooking. 500+ projects across 12+ districts. NSIC Registered.",
  keywords: [
    "solar company in Odisha",
    "solar company Bhubaneswar",
    "rooftop solar Odisha",
    "solar street light manufacturer Odisha",
    "NSIC registered solar company Odisha",
    "solar EPC Odisha",
    "solar installation Bhubaneswar",
    "solar energy company Odisha",
    "solar pump Odisha",
    "Green Filament Odisha",
  ],
  alternates: {
    canonical: "https://greenfilament.com/solar-company-odisha",
  },
  openGraph: {
    title: "Solar Company in Odisha | Green Filament, Bhubaneswar",
    description:
      "Trusted solar company in Odisha since 2018. 500+ projects, 10,000+ street lights, 1MW+ installed. Rooftop solar, street lights, pumps and solar cooking.",
    url: "https://greenfilament.com/solar-company-odisha",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Green Filament Solar Company Odisha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Company in Odisha | Green Filament",
    description:
      "Trusted solar company in Odisha since 2018. 500+ projects, 10,000+ street lights, 1MW+ installed.",
    images: ["/images/og-image.jpg"],
  },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function SolarCompanyOdishaPage() {
  return (
    <>
      <FaqSchema faqs={solarCompanyFaqs} />
      <Navbar />
      <main>

        {/* ============================================================
            PAGE STYLES
            ============================================================ */}
        <style>{`
          .sco-services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
          .sco-projects-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .sco-certs-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .sco-stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }
          .sco-faq-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          @media (max-width: 1024px) {
            .sco-services-grid { grid-template-columns: repeat(2, 1fr); }
            .sco-stats-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .sco-services-grid { grid-template-columns: 1fr; }
            .sco-projects-grid { grid-template-columns: 1fr; }
            .sco-certs-grid { grid-template-columns: 1fr; }
            .sco-stats-grid { grid-template-columns: repeat(2, 1fr); }
            .sco-faq-grid { grid-template-columns: 1fr; }
          }
        `}</style>

        {/* ============================================================
            HERO
            ============================================================ */}
        <div style={{
          background: "linear-gradient(135deg, #c97200 0%, #d4820a 50%, #b36200 100%)",
          padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>

          {/* Dot grid */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
            <svg width="100%" height="100%">
              <defs>
                <pattern id="sco-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#sco-dots)" />
            </svg>
          </div>

          {/* Glow circles */}
          <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", left: "-40px", bottom: "-40px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", border: "0.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px", letterSpacing: "1px" }}>
              SOLAR COMPANY IN ODISHA
            </div>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.25 }}>
              Green Filament, Bhubaneswar.<br />Solar Energy for Odisha Since 2018.
            </h1>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.95)", maxWidth: "620px", margin: "0 auto 6px", lineHeight: 1.7 }}>
              Rooftop solar, solar street lights, water pumps and solar cooking.
            </p>
            <p style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "rgba(255,255,255,0.95)", maxWidth: "620px", margin: "0 auto 18px", lineHeight: 1.7 }}>
              500+ projects across 12+ districts. NSIC Registered. Startup India Recognized.
            </p>
            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", fontWeight: 700, color: "#fff", marginBottom: "28px", letterSpacing: "0.5px" }}>
              Use Sun, It&apos;s Free.
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
            <div className="sco-stats-grid">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "8+", label: "Years in Odisha" },
                { value: "12+", label: "Districts Covered" },
                { value: "1MW+", label: "Solar Capacity Installed" },
              ].map((stat, i, arr) => (
                <div key={stat.label} style={{ textAlign: "center", padding: "clamp(18px, 3vw, 28px) 16px", borderRight: i < arr.length - 1 ? "0.5px solid rgba(255,255,255,0.25)" : "none" }}>
                  <div style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#fff" }}>{stat.value}</div>
                  <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.85)", marginTop: "4px" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            OUR STORY
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto" }}>

              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                Our Story
              </div>

              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "24px", lineHeight: 1.3 }}>
                We Did Not Start as Experts. We Started as Learners.
              </h2>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                January 2018. Three of us in a small office in Bhubaneswar, convinced that solar energy was the future of Odisha. We were right about that. What we underestimated was how hard the road would be to get there.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                In our early days, we were traders. We sourced solar products from manufacturers, installed them for customers, and moved on to the next project. It seemed like a reasonable way to start. The problem was that some of the products we trusted, especially solar street lights, were not built to last. They failed. Customers called. We went back. We fixed. We paid from our own pocket because we believed our word to the customer mattered more than the supplier&apos;s excuse.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Those early years cost us money. They cost us sleep. But they gave us something more valuable. A clear understanding of exactly what was wrong with the solar products available in the market, and the conviction to do something about it. So we stopped buying other people&apos;s street lights. We started building our own.
              </p>

              <h3 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "16px", marginTop: "32px" }}>
                The Decision That Changed Everything
              </h3>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Developing our own solar street lighting technology was not a business strategy. It was a response to frustration. We had seen too many lights fail in the field. Batteries draining too fast, panels undersized for the load, LED drivers failing in humidity. We understood every failure point because we had personally dealt with every complaint.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                When we designed our own street light, we did not design it for a showroom. We designed it for a village road in Mayurbhanj. For a mining area in Jharsuguda. For a temple pathway where a thousand people climb stone steps every evening after dark. For the kind of conditions that most manufacturers never think about because they are sitting far from Odisha.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Today our solar street lights have been running for two to three years in some of the harshest environments in the state. Dusty mining areas, coastal humidity, extreme summer heat. The complaint rate is close to zero. When a rare issue does come up, we attend to it within 48 hours. Not because we have a policy that says so. Because we built this company on the promise that we will show up.
              </p>

              <h3 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "16px", marginTop: "32px" }}>
                500 Projects. 8 Years. 12 Districts. One Standard.
              </h3>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Since 2018, Green Filament has delivered more than 500 solar projects across Odisha and Jharkhand. We have installed over 1MW of rooftop solar capacity, deployed more than 10,000 solar street lights, and served over 1,000 customers. Homeowners, farmers, businesses, schools, gram panchayats and government departments.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "0", textAlign: "justify" }}>
                The numbers matter. But what matters more is that every single one of those projects was done with the same standard. Whether it was a 1kW rooftop system for a home in Bhubaneswar or a high mast lighting project for an industrial zone in Ganjam, the quality of workmanship, the components we use, and the attention we bring to every installation is the same across the board. We do not have two standards. One for big clients and one for small ones. That consistency is what has built our reputation in Odisha over the past eight years.
              </p>

            </div>
          </div>
        </div>

        {/* ============================================================
            WHAT WE DO
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                What We Do
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Solar Solutions Across Odisha
              </h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                From rooftops in Bhubaneswar to village roads in Mayurbhanj, we cover every solar need in Odisha.
              </p>
            </div>

            <div className="sco-services-grid">
              {[
                {
                  icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>),
                  title: "Rooftop Solar Systems",
                  desc: "On-grid, off-grid and hybrid systems for homes and businesses. Tata, Waaree, Luminous, Amaze and Exide panels. GI hot-dip galvanized structures. Full subsidy assistance included.",
                },
                {
                  icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>),
                  title: "Solar Street Lights",
                  desc: "Our own manufactured product. 10,000+ units across Odisha. Non-integrated and semi-integrated models in 30W to 90W. GI hot-dip galvanized poles. SMF and LiFePO4 battery options.",
                },
                {
                  icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>),
                  title: "Solar Water Pumps",
                  desc: "Agriculture, borewell and village drinking water systems. Submersible and surface pumps. PM KUSUM and Soura Jalanidhi scheme applications handled by us.",
                },
                {
                  icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>),
                  title: "Solar Cooking System",
                  desc: "Patent-granted coil-based DC heating system. No LPG, no smoke, no battery. Works like the coil heaters from the 90s but runs entirely on solar. 200+ units installed. Green Filament is the authorised manufacturer.",
                },
                {
                  icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>),
                  title: "High Mast Lighting",
                  desc: "For industrial zones, ports, highways and large open areas. 300W LED flood lights. 2-part high mast poles with chain pulley motor and automatic timer control.",
                },
                {
                  icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>),
                  title: "Solar Blinkers",
                  desc: "Road safety solar blinker lights for intersections, school zones and highway warning points. 24-hour operation. 1km visibility. 3-year warranty.",
                },
              ].map((service) => (
                <div key={service.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "24px" }}>
                  <div style={{ width: "48px", height: "48px", background: "#FFF3D6", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "14px" }}>
                    {service.icon}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{service.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify" }}>{service.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            WHAT 8 YEARS TAUGHT US
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto" }}>

              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                8 Years of Learning
              </div>

              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "24px", lineHeight: 1.3 }}>
                What 8 Years in Odisha&apos;s Solar Industry Taught Us
              </h2>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Working across 12 districts of Odisha, from Bhubaneswar to Mayurbhanj, Dhenkanal to Ganjam, Jharsuguda to Khordha, we learned that solar is not one product. It is a solution that has to be designed for the person using it.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                A homeowner in Bhubaneswar wants to know one thing. Will my electricity bill actually go down? A farmer in Dhenkanal wants to know. Will this pump work during summer when I need it most? A gram panchayat wants to know. Will these street lights still work two years from now? A business wants to know. What is the return on investment? We answer each of these questions differently. Because the answer is different for each person.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Odisha receives 280 to 300 sunny days every year. Solar makes more sense here than in most parts of India. Since 2001, electricity prices have risen by 35%. In the same period, the cost of solar systems has fallen by more than 60%. The math is simple. The only question is finding a company you can trust to do the job right.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "0", textAlign: "justify" }}>
                We also learned that the size of the project does not determine the quality of attention it deserves. A single street light for a village pathway and a 25kW commercial rooftop system both get the same engineering care from our team. That has not changed in eight years, and it will not change as we grow.
              </p>

            </div>
          </div>
        </div>

        {/* ============================================================
            REAL PROJECTS
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Real Projects
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Work Done Across Odisha
              </h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                Real locations. Real specifications. Real results.
              </p>
            </div>

            <div className="sco-projects-grid">
              {[
                {
                  tag: "RESIDENTIAL",
                  title: "PM Surya Ghar — 3kW Rooftop Solar",
                  location: "Bhubaneswar, Odisha",
                  desc: "Grid-connected rooftop system with Waaree panels. Net meter installed by TPCODL. Generating 10 to 12 units daily. Full subsidy processed under PM Surya Ghar Yojana.",
                },
                {
                  tag: "GOVT / GP",
                  title: "Solar Street Light System — 18W Semi-Integrated",
                  location: "Mayurbhanj, Odisha",
                  desc: "50W poly crystalline panel, 40Ah Li-ion battery, 5 metre GI hot galvanized pole. Full night backup. 3-year warranty. Our own manufactured product.",
                },
                {
                  tag: "VILLAGE",
                  title: "Solar Drinking Water System — 5000L Tank",
                  location: "Dhenkanal, Odisha",
                  desc: "Three panels of 330W each, 1HP 80V submersible pump, automatic floater device and 5,000 litre overhead storage tank. The village now has clean water every day at zero operating cost.",
                },
                {
                  tag: "INFRASTRUCTURE",
                  title: "High Mast Lighting — 8 x 300W LED Flood Lights",
                  location: "Gopalpur, Ganjam, Odisha",
                  desc: "2-part high mast pole with 3-phase chain pulley motor and automatic timer. Internal wiring from base to top. 8 units of 300W LED flood lights.",
                },
                {
                  tag: "CSR PROJECT",
                  title: "Solar Street Lighting — OMPL CSR Initiative",
                  location: "Jharsuguda, Odisha",
                  desc: "Executed on behalf of OMPL. Two complete street lighting installations running for over 12 months. Zero complaints. Zero maintenance calls.",
                },
                {
                  tag: "ROAD SAFETY",
                  title: "Solar Blinker — Highway Warning System",
                  location: "Ganjam, Odisha",
                  desc: "20W system, 12V 14Ah SMF battery, 9 metre pole. 24-hour backup. 1km visibility range. 3-year warranty. Installed under government road safety programme.",
                },
              ].map((project) => (
                <div key={project.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderLeft: "4px solid #FDB92E", padding: "24px" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#F5A000", letterSpacing: "1px", marginBottom: "8px" }}>{project.tag}</div>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>{project.title}</div>
                  <div style={{ fontSize: "11px", color: "#aaa", marginBottom: "10px" }}>{project.location}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify" }}>{project.desc}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ============================================================
            TRUST SECTION
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto" }}>

              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                How We Earned Trust
              </div>

              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "24px", lineHeight: 1.3 }}>
                Trust Is Not Claimed. It Is Earned.
              </h2>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Most solar companies in Odisha talk about trust. We built ours the hard way. When our early street light projects did not perform as expected, we did not disappear. We went back, absorbed the cost ourselves, understood what went wrong, and fixed it. That experience led us to develop our own street light technology. Today those lights run in mining areas and dusty village roads across Odisha, year after year, with almost no complaints.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Recently we completed two CSR projects in Jharsuguda on behalf of OMPL. One year later, both installations are running without a single complaint. That is not luck. That is the result of using the right materials, the right design, and standing behind our work after the installation is done.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                For rooftop solar, we work with India&apos;s most trusted brands. Tata Power Solar, Waaree, Luminous and others. No compromises on components. Our job is to design and install the system correctly, and we do it with the same attention we give our own manufactured products.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "0", textAlign: "justify" }}>
                We are also the authorised manufacturer of a patent-granted solar cooking system. It works on the same principle as the coil heaters many of us grew up with in the 1990s, except it runs entirely on DC solar power with no battery, no LPG and no smoke. More than 200 units are running across India today. It is proof that we do not stop at installation. We keep looking for ways to make solar more useful for more people.
              </p>

            </div>
          </div>
        </div>

        {/* ============================================================
            CERTIFICATIONS
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Certifications
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Registered. Recognized. Accountable.
              </h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                We are registered under every relevant government body. Not because paperwork impresses people, but because it gives our customers confidence that we are accountable.
              </p>
            </div>

            <div className="sco-certs-grid" style={{ maxWidth: "860px", margin: "0 auto" }}>
              {[
                { title: "NSIC Registered", detail: "Sr. No. 90156. Government purchase eligible. Verified by the National Small Industries Corporation.", color: "#FFF3D6", border: "#FAC775", text: "#854F0B" },
                { title: "Startup India Recognized", detail: "Certificate No. DIPP124447. Valid till December 2029. Recognized by DPIIT, Government of India.", color: "#FFF3D6", border: "#FAC775", text: "#854F0B" },
                { title: "Startup Odisha Recognized", detail: "Registration No. OSP/SP/01612. Recognized by the Government of Odisha under the Odisha Startup Policy.", color: "#FFF3D6", border: "#FAC775", text: "#854F0B" },
                { title: "MSME Registered", detail: "Udyam No. UDYAM-OD-19-0002515. Registered under the Ministry of Micro, Small and Medium Enterprises.", color: "#FFF3D6", border: "#FAC775", text: "#854F0B" },
              ].map((cert) => (
                <div key={cert.title} style={{ background: "#fff", borderRadius: "14px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "24px" }}>
                  <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>{cert.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75 }}>{cert.detail}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ============================================================
            SUBSIDY SECTION
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ background: "#FFF3D6", borderRadius: "16px", border: "0.5px solid #FAC775", padding: "clamp(32px, 4vw, 52px)", maxWidth: "860px", margin: "0 auto" }}>

              <div style={{ display: "inline-block", background: "#fff", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                Government Subsidies
              </div>

              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "16px" }}>
                Up to ₹1,38,000 in Subsidies Available in Odisha
              </h2>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "16px", textAlign: "justify" }}>
                If you are a homeowner in Odisha considering rooftop solar, the government will give you real money for doing it. Under PM Surya Ghar Muft Bijli Yojana, the central government provides up to ₹78,000 for a 3kW system, credited directly to your bank account. The Odisha state government adds up to ₹60,000 more. The combined total is up to ₹1,38,000 for a 3kW system.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "24px", textAlign: "justify" }}>
                We handle every form, every portal and every follow-up on your behalf. You focus on your home. We handle the rest. No extra charge for this.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <div style={{ background: "#fff", borderRadius: "10px", border: "0.5px solid #FAC775", padding: "16px 20px", flex: 1, minWidth: "160px" }}>
                  <div style={{ fontSize: "11px", color: "#854F0B", fontWeight: 600, marginBottom: "6px" }}>CENTRAL SUBSIDY</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#1a1a1a" }}>₹78,000</div>
                  <div style={{ fontSize: "11px", color: "#777", marginTop: "4px" }}>PM Surya Ghar Yojana</div>
                </div>
                <div style={{ background: "#fff", borderRadius: "10px", border: "0.5px solid #FAC775", padding: "16px 20px", flex: 1, minWidth: "160px" }}>
                  <div style={{ fontSize: "11px", color: "#854F0B", fontWeight: 600, marginBottom: "6px" }}>ODISHA STATE SUBSIDY</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#1a1a1a" }}>₹60,000</div>
                  <div style={{ fontSize: "11px", color: "#777", marginTop: "4px" }}>Odisha Govt Additional</div>
                </div>
                <div style={{ background: "#FDB92E", borderRadius: "10px", padding: "16px 20px", flex: 1, minWidth: "160px" }}>
                  <div style={{ fontSize: "11px", color: "#412402", fontWeight: 600, marginBottom: "6px" }}>TOTAL COMBINED</div>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#412402" }}>₹1,38,000</div>
                  <div style={{ fontSize: "11px", color: "#633806", marginTop: "4px" }}>For 3kW System in Odisha</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================
            FAQ
            ============================================================ */}
        <div style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                FAQ
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Questions People Ask Before Going Solar
              </h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto 16px", lineHeight: 1.7 }}>
                Honest answers. No sales pitch.
              </p>
              <div style={{ background: "#FFF3D6", border: "0.5px solid #FAC775", borderRadius: "10px", padding: "12px 20px", maxWidth: "680px", margin: "0 auto" }}>
                <p style={{ fontSize: "12px", color: "#854F0B", lineHeight: 1.7, margin: 0 }}>
                  Disclaimer: Subsidy amounts and scheme information below are based on publicly available data at the time of publishing. Government schemes are subject to change at any time. Please verify current details from official portals like pmsuryaghar.gov.in, pmkusum.mnre.gov.in and oredaodisha.com before applying.
                </p>
              </div>
            </div>

            <div className="sco-faq-grid" style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {[
                {
                  q: "How much will my electricity bill reduce with solar?",
                  a: "For a typical household in Bhubaneswar using 250 to 400 units per month, a 3kW system reduces the bill by 70 to 90%. Some months it drops to near zero through net metering credits.",
                },
                {
                  q: "Is solar worth it in 2026 in Odisha?",
                  a: "Electricity tariffs in Odisha have been rising every year. Solar panel costs have fallen by more than 60% since 2001. The payback period today is 3 to 5 years. After that you generate free electricity for 20 plus more years. Yes, it is worth it.",
                },
                {
                  q: "Do you serve districts outside Bhubaneswar?",
                  a: "Yes. We have delivered projects in Mayurbhanj, Dhenkanal, Ganjam, Khordha, Cuttack, Jharsuguda and 12 plus districts across Odisha. We also work in Jharkhand. If you are in Odisha, we can reach you.",
                },
                {
                  q: "Which solar panel brands do you use?",
                  a: "For panels we work with Tata Power Solar, Waaree, Luminous, Amaze and Exide. For inverters we use Tata, Waaree, Luminous, Amaze, Exide and Amaron. All mounting structures are GI hot-dip galvanized steel.",
                },
                {
                  q: "How long does solar installation take?",
                  a: "A residential rooftop system takes 1 to 2 days. Commercial systems take 3 to 5 days. Government and large projects take 5 to 10 days depending on scope and size.",
                },
                {
                  q: "What happens if something stops working after installation?",
                  a: "For our manufactured products like solar street lights and solar cooking systems, we target a 48-hour response time for any complaint. For rooftop solar with branded components, manufacturer warranties apply and we support the claim process. We do not disappear after installation.",
                },
                {
                  q: "Can farmers in Odisha get solar pumps affordably?",
                  a: "Under PM KUSUM scheme, farmers typically pay only 10% of the solar pump cost directly. The remaining amount is covered through a combination of central subsidy, state subsidy and a subsidised bank loan. Odisha also has the Soura Jalanidhi Yojana with similar benefits for small and marginal farmers. Scheme terms change from time to time so we recommend verifying current details before applying. We help you identify the right scheme and handle the complete application process.",
                },
                {
                  q: "What is the warranty on solar panels and systems?",
                  a: "Quality solar panels from Tata and Waaree carry a 25-year performance warranty. Inverters carry 5-year warranty. Our street lights carry 2 to 5 year warranty depending on the model and application.",
                },
              ].map((faq, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #E8E2D8", padding: "20px 24px" }}>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ color: "#FDB92E", flexShrink: 0 }}>Q.</span>
                    {faq.q}
                  </div>
                  <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.8, paddingLeft: "22px", textAlign: "justify" }}>{faq.a}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ============================================================
            OUR PROMISE
            ============================================================ */}
        <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>

              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                Our Promise
              </div>

              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "24px", lineHeight: 1.3 }}>
                We Built This Company in Bhubaneswar. We Live Here. We Work Here.
              </h2>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "18px", textAlign: "justify" }}>
                Every customer we install a system for is a neighbour, a farmer, a school, a road that someone&apos;s child walks on at night. That is not a marketing line. That is why we respond in 48 hours. That is why we absorbed the cost of early failures rather than passing them to customers. That is why we spent years developing our own street light instead of continuing to sell something we knew was not good enough.
              </p>

              <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "32px", textAlign: "justify" }}>
                Green Filament is not the largest solar company in Odisha. We are working on that. But we are among the most honest. And in this industry, that counts for more than size.
              </p>

              <div style={{ fontSize: "18px", fontWeight: 700, color: "#F5A000" }}>
                Use Sun, It&apos;s Free.
              </div>

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
            <svg width="100%" height="100%"><defs><pattern id="cta-sco" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-sco)" /></svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Ready to Go Solar in Odisha?
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
