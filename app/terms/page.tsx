import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | EcoNova Resources & Energy Private Limited",
  description:
    "Terms of Service for EcoNova Resources & Energy Private Limited.",
  alternates: {
    canonical: "https://econovare.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh", backgroundColor: "var(--en-bg-white)" }}>
        <section
          style={{
            background: "linear-gradient(135deg, var(--en-dark-green) 0%, var(--en-teal) 100%)",
            padding: "clamp(50px, 7vw, 80px) clamp(24px, 5vw, 80px)",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <div className="en-container">
            <h1 className="en-heading" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, marginBottom: "10px" }}>
              Terms of Service
            </h1>
            <p style={{ color: "var(--en-aqua-light)", fontSize: "16px" }}>
              EcoNova Resources & Energy Private Limited
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="en-container" style={{ maxWidth: "860px", margin: "0 auto", color: "var(--en-text-body)", lineHeight: 1.8 }}>
            <h2 className="en-heading" style={{ fontSize: "22px", color: "var(--en-dark-green)", marginBottom: "14px" }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ marginBottom: "24px" }}>
              By accessing and using this website, you agree to be bound by these Terms of Service and all applicable laws and regulations of India.
            </p>

            <h2 className="en-heading" style={{ fontSize: "22px", color: "var(--en-dark-green)", marginBottom: "14px" }}>
              2. Intellectual Property
            </h2>
            <p style={{ marginBottom: "24px" }}>
              All content, brand names, logos, engineering diagrams, and documentation displayed on this website are the intellectual property
              of EcoNova Resources & Energy Private Limited and may not be reproduced without written permission.
            </p>

            <h2 className="en-heading" style={{ fontSize: "22px", color: "var(--en-dark-green)", marginBottom: "14px" }}>
              3. Contact
            </h2>
            <p>
              For legal inquiries:
              <br />
              <strong>EcoNova Resources & Energy Private Limited</strong>
              <br />
              Plot No. 213/3, ARIHANT PALACE, Sector-20, Gandhinagar, Gujarat 382021
              <br />
              Email: info.econovare@gmail.com
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}