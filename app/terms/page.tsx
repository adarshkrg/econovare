/* ============================================================
   TERMS & CONDITIONS PAGE
   - Professional legal content
   - Clean readable layout
   - Fully responsive
   ============================================================ */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Green Filament Solar Energy Odisha",
  description:
    "Terms and Conditions for M/s Green Filament — solar energy company in Bhubaneswar, Odisha. Read our service terms, payment policy, warranty, and legal information.",
  alternates: {
    canonical: "https://greenfilament.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Green Filament Solar Energy Odisha",
    description:
      "Terms and Conditions for M/s Green Filament — solar energy company in Bhubaneswar, Odisha.",
    url: "https://greenfilament.com/terms",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Green Filament Terms and Conditions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Green Filament",
    description: "Service terms, payment policy, warranty and legal information for Green Filament Solar Energy.",
    images: ["/images/og-image.jpg"],
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>

        
{/* ============================================================
    HERO — muted amber + dot grid + glow
    ============================================================ */}
        <div style={{
          background: "linear-gradient(135deg, #c97200 0%, #d4820a 50%, #b36200 100%)",
          padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>

          {/* --- Dot grid --- */}
          <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
            <svg width="100%" height="100%">
              <defs>
                <pattern id="about-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#about-dots)" />
            </svg>
          </div>

          {/* --- Center glow --- */}
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle,rgba(255,255,255,0.08) 0%,transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* --- Top right glow circle --- */}
          <div style={{
            position: "absolute",
            right: "-60px",
            top: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }} />

          {/* --- Bottom left glow circle --- */}
          <div style={{
            position: "absolute",
            left: "-40px",
            bottom: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.2)",
              border: "0.5px solid rgba(255,255,255,0.4)",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 600,
              padding: "4px 14px",
              borderRadius: "20px",
              marginBottom: "12px",
              letterSpacing: "1px",
            }}>
              LEGAL
            </div>
            <h1 style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "10px",
            }}>
              Terms & Conditions
            </h1>
            <p style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.7,
            }}>
              Last updated: January 2025
            </p>
          </div>
        </div>

        {/* ============================================================
            CONTENT
            ============================================================ */}
        <div style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "clamp(40px, 5vw, 72px) clamp(24px, 5vw, 40px)",
        }}>

          {/* ---- Intro ---- */}
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.85, marginBottom: "40px", textAlign: "justify", }}>
            Welcome to M/s Green Filament. By accessing our website or engaging our services, you agree to be bound by the following Terms and Conditions. Please read them carefully before proceeding. These terms apply to all visitors, clients, and users of our services.
          </p>

          {/* ---- Section component inline ---- */}
          {[
            {
              number: "01",
              title: "About Us",
              content: `M/s Green Filament is a solar energy company registered under the Government of Odisha, operating from Bhubaneswar, Odisha, India. We are recognized under Start-up India, Start-up Odisha, and are NSIC Registered and MSME Registered. Our services include rooftop solar installation, solar pumps, solar street lighting, solar cooking systems, energy audits, and related consultancy services.`,
            },
            {
              number: "02",
              title: "Acceptance of Terms",
              content: `By using our website (greenfilament.com), requesting a quotation, or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using our website or services. Green Filament reserves the right to modify these terms at any time without prior notice.`,
            },
            {
              number: "03",
              title: "Services",
              content: `M/s Green Filament provides solar energy solutions including but not limited to rooftop solar power plant installation, solar pump systems, solar street lighting, solar cooking systems, energy audits, net metering assistance, subsidy advisory, annual maintenance contracts (AMC), and turnkey project execution. All services are subject to site feasibility, technical assessment, and mutual agreement on scope of work and pricing.`,
            },
            {
              number: "04",
              title: "Quotations and Pricing",
              content: `All quotations provided by M/s Green Filament are valid for a period of 30 days from the date of issue unless otherwise stated. Prices are subject to change based on prevailing market rates, government policies, and material costs. Final pricing is confirmed only upon signing a formal work order or agreement. GST and other applicable taxes will be charged as per government regulations in force at the time of invoicing.`,
            },
            {
              number: "05",
              title: "Payment Terms",
              content: `Payment terms will be specified in the project agreement or work order. Generally, an advance payment is required before commencement of work. The remaining balance is payable as per milestones defined in the agreement. M/s Green Filament reserves the right to suspend or terminate services in case of payment default. All payments must be made through bank transfer, UPI, or other approved modes. Cash payments above the statutory limit are not accepted.`,
            },
            {
              number: "06",
              title: "Government Subsidies and Schemes",
              content: `M/s Green Filament assists clients in availing government subsidies under schemes such as PM Surya Ghar Yojana, KUSUM Yojana, and other state and central government schemes. However, the approval, disbursement, and quantum of subsidy are at the sole discretion of the respective government authorities. M/s Green Filament does not guarantee subsidy approval and shall not be held liable for delays or rejections by government bodies.`,
            },
            {
              number: "07",
              title: "Warranty and Maintenance",
              content: `Products supplied by M/s Green Filament carry manufacturer warranties as applicable. M/s Green Filament provides workmanship warranty for installation work as specified in the project agreement. Warranty claims are subject to proper use, maintenance, and adherence to operating guidelines. Damage caused by natural disasters, negligence, unauthorized modifications, or third-party interference will not be covered under warranty.`,
            },
            {
              number: "08",
              title: "Intellectual Property",
              content: `All content on this website including text, graphics, logos, images, and design is the intellectual property of M/s Green Filament and is protected under applicable intellectual property laws. Unauthorized reproduction, distribution, or use of any content from this website is strictly prohibited. You may not use our brand name, logo, or any of our proprietary materials without prior written consent.`,
            },
            {
              number: "09",
              title: "Limitation of Liability",
              content: `M/s Green Filament shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website. Our total liability in any matter arising out of or related to these terms shall not exceed the total amount paid by the client for the specific service in question. We are not liable for delays or failures caused by circumstances beyond our reasonable control including but not limited to government policy changes, natural disasters, or supply chain disruptions.`,
            },
            {
              number: "10",
              title: "Privacy",
              content: `Your use of our website and services is also governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. By using our services, you consent to the collection and use of your information as described in our Privacy Policy.`,
            },
            {
              number: "11",
              title: "Governing Law",
              content: `These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.`,
            },
            {
              number: "12",
              title: "Contact Us",
              content: `For any questions or concerns regarding these Terms and Conditions, please contact us at:\n\n M/s Green Filament\n628/1333, Lane 1, Tankapani Road, Laxmi Vihar,\nBhubaneswar, Odisha — 751002\nEmail: connect@greenfilament.com\nPhone: +91 93372 56398`,
            },
          ].map((section) => (
            <div key={section.number} style={{ marginBottom: "40px" }}>

              {/* Section header */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "14px" }}>
                <div style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  color: "#FDB92E",
                  background: "#FFF3D6",
                  border: "0.5px solid #FAC775",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  flexShrink: 0,
                }}>
                  {section.number}
                </div>
                <h2 style={{
                  fontSize: "clamp(16px, 2vw, 20px)",
                  fontWeight: 700,
                  color: "#1a1a1a",
                }}>
                  {section.title}
                </h2>
              </div>

              {/* Divider */}
              <div style={{ height: "0.5px", background: "#F0EBE0", marginBottom: "14px" }} />

              {/* Content */}
              <p style={{
                fontSize: "14px",
                color: "#555",
                lineHeight: 1.85,
                whiteSpace: "pre-line",
                textAlign: "justify",
              }}>
                {section.content}
              </p>

            </div>
          ))}

        </div>

      </main>
      <Footer />
    </>
  );
}