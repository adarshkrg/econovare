import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | EcoNova Resources & Energy Private Limited",
  description:
    "Privacy Policy for EcoNova Resources & Energy Private Limited. Learn how we handle your personal data and protect your privacy.",
  alternates: {
    canonical: "https://econovare.com/privacy",
  },
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p style={{ color: "var(--en-aqua-light)", fontSize: "16px" }}>
              EcoNova Resources & Energy Private Limited
            </p>
          </div>
        </section>

        <section className="section-pad">
          <div className="en-container" style={{ maxWidth: "860px", margin: "0 auto", color: "var(--en-text-body)", lineHeight: 1.8 }}>
            <h2 className="en-heading" style={{ fontSize: "22px", color: "var(--en-dark-green)", marginBottom: "14px" }}>
              1. Information We Collect
            </h2>
            <p style={{ marginBottom: "24px" }}>
              We collect information that you directly provide when inquiring about our renewable energy, geothermal, agricultural,
              or engineering services, including your name, email address, phone number, and organization details.
            </p>

            <h2 className="en-heading" style={{ fontSize: "22px", color: "var(--en-dark-green)", marginBottom: "14px" }}>
              2. How We Use Information
            </h2>
            <p style={{ marginBottom: "24px" }}>
              Your information is used strictly to respond to your technical and business consultation requests, prepare feasibility
              studies, coordinate engineering engagements, and communicate project updates.
            </p>

            <h2 className="en-heading" style={{ fontSize: "22px", color: "var(--en-dark-green)", marginBottom: "14px" }}>
              3. Data Protection & Security
            </h2>
            <p style={{ marginBottom: "24px" }}>
              We implement appropriate technical measures to safeguard your personal data. We do not sell or lease your personal information
              to third-party marketers.
            </p>

            <h2 className="en-heading" style={{ fontSize: "22px", color: "var(--en-dark-green)", marginBottom: "14px" }}>
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>EcoNova Resources & Energy Private Limited</strong>
              <br />
              Plot No. 213/3, ARIHANT PALACE, Sector-20, Gandhinagar, Gujarat 382021
              <br />
              Email: info.econovare@gmail.com | Phone: +91 9727780048
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}