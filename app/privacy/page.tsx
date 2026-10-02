/* ============================================================
   PRIVACY POLICY PAGE
   - Professional legal content
   - Clean readable layout
   - Fully responsive
   ============================================================ */

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Green Filament Solar Energy Odisha",
  description:
    "Privacy Policy for M/s Green Filament — solar energy company in Bhubaneswar, Odisha. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://greenfilament.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Green Filament Solar Energy Odisha",
    description:
      "Privacy Policy for M/s Green Filament — solar energy company in Bhubaneswar, Odisha.",
    url: "https://greenfilament.com/privacy",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Green Filament Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Green Filament",
    description: "How M/s Green Filament collects, uses, and protects your personal information.",
    images: ["/images/og-image.jpg"],
  },
};

export default function PrivacyPage() {
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
              Privacy Policy
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
          <p style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: 1.85,
            marginBottom: "40px",
            textAlign: "justify",
          }}>
            At M/s Green Filament, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you visit our website or engage our services. By using our website or services, you consent to the practices described in this policy.
          </p>

          {/* ---- Sections ---- */}
          {[
            {
              number: "01",
              title: "Information We Collect",
              content: `We may collect the following types of information when you interact with us:\n\n• Personal identification information such as your name, phone number, email address, and postal address when you contact us or request a quotation.\n\n• Technical information such as your IP address, browser type, and pages visited when you use our website, collected automatically through cookies and analytics tools.\n\n• Project-related information such as site details, electricity consumption data, and property information required to assess and deliver our solar energy services.\n\n• Communication records including emails, WhatsApp messages, and phone call notes related to your enquiries and project requirements.`,
            },
            {
              number: "02",
              title: "How We Use Your Information",
              content: `The information we collect is used for the following purposes:\n\n• To respond to your enquiries and provide accurate quotations for solar energy solutions.\n\n• To process and deliver our services including site assessment, system design, installation, and maintenance.\n\n• To assist you in availing government subsidies and schemes such as PM Surya Ghar Yojana and KUSUM Yojana.\n\n• To send you relevant updates, service reminders, and information about our products and offerings.\n\n• To improve our website and services based on usage patterns and feedback.\n\n• To comply with legal and regulatory obligations under applicable Indian laws.`,
            },
            {
              number: "03",
              title: "Data Sharing and Disclosure",
              content: `M/s Green Filament does not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:\n\n• With government bodies and DISCOM authorities as required for subsidy processing, net metering applications, and regulatory compliance.\n\n• With trusted service partners and vendors who assist in delivering our services, bound by confidentiality obligations.\n\n• With legal or regulatory authorities when required by law, court order, or government directive.\n\n• In connection with a business transfer, merger, or acquisition, where your data may be transferred to the new entity subject to the same privacy obligations.`,
            },
            {
              number: "04",
              title: "Cookies and Tracking",
              content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. Cookies are small text files stored on your device that help us understand how visitors use our website.\n\nYou can control or disable cookies through your browser settings. However, disabling cookies may affect the functionality of certain parts of our website. We use analytics tools such as Google Analytics to understand visitor behavior in an anonymized manner.`,
            },
            {
              number: "05",
              title: "Data Security",
              content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL encryption to secure data transmission. Access to personal data is restricted to authorized personnel only.\n\nWhile we take all reasonable precautions, no method of transmission over the internet is completely secure. We cannot guarantee absolute security of your data and encourage you to use secure networks when sharing sensitive information.`,
            },
            {
              number: "06",
              title: "Data Retention",
              content: `We retain your personal information for as long as necessary to fulfill the purposes described in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Project-related data is retained for a minimum of 7 years as required for warranty, service, and statutory compliance purposes. You may request deletion of your personal data subject to legal and contractual retention requirements.`,
            },
            {
              number: "07",
              title: "Your Rights",
              content: `As a user of our services, you have the following rights with respect to your personal data:\n\n• The right to access the personal information we hold about you.\n\n• The right to request correction of inaccurate or incomplete information.\n\n• The right to request deletion of your personal data, subject to legal obligations.\n\n• The right to withdraw consent for marketing communications at any time.\n\n• The right to raise a complaint if you believe your data has been misused.\n\nTo exercise any of these rights, please contact us at connect@greenfilament.com.`,
            },
            {
              number: "08",
              title: "Third-Party Links",
              content: `Our website may contain links to third-party websites including government portals, social media platforms, and partner organizations. M/s Green Filament is not responsible for the privacy practices or content of these external websites. We encourage you to review the privacy policies of any third-party sites you visit through links on our website.`,
            },
            {
              number: "09",
              title: "Children's Privacy",
              content: `Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe that a minor has provided us with personal information, please contact us immediately and we will take steps to delete such information from our records.`,
            },
            {
              number: "10",
              title: "Changes to This Policy",
              content: `M/s Green Filament reserves the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information. Continued use of our website or services after any changes constitutes your acceptance of the revised policy.`,
            },
            {
              number: "11",
              title: "Governing Law",
              content: `This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and the Information Technology (Amendment) Act, 2008. Any disputes arising out of or related to this policy shall be subject to the exclusive jurisdiction of the courts in Bhubaneswar, Odisha, India.`,
            },
            {
              number: "12",
              title: "Contact Us",
              content: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal data, please reach out to us:\n\n M/s Green Filament\n628/1333, Lane 1, Tankapani Road, Laxmi Vihar,\nBhubaneswar, Odisha — 751002\nEmail: connect@greenfilament.com\nPhone: +91 93372 56398`,
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