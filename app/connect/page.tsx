"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ConnectPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "Geothermal Heating & Cooling",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main style={{ backgroundColor: "var(--en-bg-white)", minHeight: "90vh" }}>
        {/* Header Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, var(--en-dark-green) 0%, var(--en-deep-teal) 100%)",
            padding: "clamp(50px, 8vw, 80px) clamp(24px, 5vw, 80px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            color: "#ffffff",
          }}
        >
          <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(125, 249, 229, 0.15)",
                border: "1px solid rgba(125, 249, 229, 0.3)",
                color: "var(--en-mint)",
                fontSize: "13px",
                fontWeight: 800,
                padding: "6px 18px",
                borderRadius: "999px",
                marginBottom: "16px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Contact EcoNova
            </span>
            <h1
              className="en-heading"
              style={{
                fontSize: "clamp(30px, 4.5vw, 48px)",
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: "12px",
                lineHeight: 1.2,
              }}
            >
              Get in Touch with Our Team
            </h1>
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--en-aqua-light)",
                lineHeight: 1.6,
              }}
            >
              Discuss feasibility studies, geothermal pilots, renewable EPC, or agricultural and marine collaborations.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-pad">
          <div className="en-container">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
                alignItems: "start",
              }}
            >
              {/* Left Column: Contact Details & Map Link */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <span
                    style={{
                      color: "var(--en-teal)",
                      fontWeight: 800,
                      fontSize: "13px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    Direct Inquiries
                  </span>
                  <h2
                    className="en-heading"
                    style={{
                      fontSize: "28px",
                      fontWeight: 800,
                      color: "var(--en-dark-green)",
                      marginBottom: "12px",
                    }}
                  >
                    Office Information
                  </h2>
                  <p style={{ color: "var(--en-text-body)", fontSize: "15px", lineHeight: 1.6 }}>
                    Our headquarters are located in Gandhinagar, Gujarat. Contact us by phone or email to initiate consultations.
                  </p>
                </div>

                {/* Phone Card */}
                <a
                  href="tel:+919727780048"
                  style={{
                    backgroundColor: "var(--en-bg-soft)",
                    border: "1px solid var(--en-border)",
                    borderRadius: "14px",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--en-teal)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--en-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "var(--en-teal)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    📞
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--en-text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
                      Phone / Mobile
                    </div>
                    <div style={{ fontSize: "17px", fontWeight: 800, color: "var(--en-dark-green)" }}>
                      +91 9727780048
                    </div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href="mailto:info.econovare@gmail.com"
                  style={{
                    backgroundColor: "var(--en-bg-soft)",
                    border: "1px solid var(--en-border)",
                    borderRadius: "14px",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--en-teal)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--en-border)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "var(--en-forest-green)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    ✉️
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--en-text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
                      Email Address
                    </div>
                    <div style={{ fontSize: "16px", fontWeight: 800, color: "var(--en-dark-green)" }}>
                      info.econovare@gmail.com
                    </div>
                  </div>
                </a>

                {/* Address Card */}
                <div
                  style={{
                    backgroundColor: "var(--en-bg-soft)",
                    border: "1px solid var(--en-border)",
                    borderRadius: "14px",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "18px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      backgroundColor: "var(--en-navy)",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    📍
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", color: "var(--en-text-muted)", fontWeight: 700, textTransform: "uppercase", marginBottom: "4px" }}>
                      Registered Address
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--en-dark-green)", lineHeight: 1.5 }}>
                      Plot No. 213/3, ARIHANT PALACE, Sector-20,
                      <br />
                      Gandhinagar, Gujarat 382021, India
                    </div>
                    <div style={{ marginTop: "10px" }}>
                      <a
                        href="https://maps.google.com/?q=Plot+No.+213/3,+ARIHANT+PALACE,+Sector-20,+Gandhinagar,+Gujarat+382021"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--en-teal)",
                          fontSize: "14px",
                          fontWeight: 700,
                          textDecoration: "underline",
                        }}
                      >
                        Open in Google Maps ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Google Maps Embed / Preview */}
                <div
                  style={{
                    borderRadius: "14px",
                    overflow: "hidden",
                    border: "1px solid var(--en-border)",
                    height: "260px",
                    position: "relative",
                  }}
                >
                  <iframe
                    title="EcoNova Office Location"
                    src="https://maps.google.com/maps?q=Plot%20No.%20213/3,%20ARIHANT%20PALACE,%20Sector-20,%20Gandhinagar,%20Gujarat%20382021&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right Column: Working Contact Form */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid var(--en-border)",
                  borderRadius: "20px",
                  padding: "clamp(28px, 4vw, 40px)",
                  boxShadow: "0 8px 30px rgba(30, 58, 43, 0.06)",
                }}
              >
                <h2
                  className="en-heading"
                  style={{
                    fontSize: "24px",
                    fontWeight: 800,
                    color: "var(--en-dark-green)",
                    marginBottom: "8px",
                  }}
                >
                  Send an Inquiry
                </h2>
                <p style={{ fontSize: "14px", color: "var(--en-text-body)", marginBottom: "24px" }}>
                  Please fill out the form below. Our technical and business team will review your requirements and respond promptly.
                </p>

                {submitted ? (
                  <div
                    style={{
                      backgroundColor: "var(--en-bg-soft)",
                      border: "2px solid var(--en-teal)",
                      borderRadius: "12px",
                      padding: "30px 20px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ fontSize: "36px", marginBottom: "12px" }}>✅</div>
                    <h3 style={{ fontSize: "20px", fontWeight: 800, color: "var(--en-dark-green)", marginBottom: "8px" }}>
                      Thank You for Contacting EcoNova!
                    </h3>
                    <p style={{ fontSize: "15px", color: "var(--en-text-body)", lineHeight: 1.6, marginBottom: "18px" }}>
                      Your message has been received. Our directors and specialized engineering team will get in touch with you at{" "}
                      <strong>{formData.email || "your provided email"}</strong>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      style={{
                        padding: "10px 20px",
                        backgroundColor: "var(--en-teal)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Rajesh Sharma"
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--en-border)",
                          fontSize: "15px",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: "8px",
                            border: "1px solid var(--en-border)",
                            fontSize: "15px",
                            outline: "none",
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          style={{
                            width: "100%",
                            padding: "12px 14px",
                            borderRadius: "8px",
                            border: "1px solid var(--en-border)",
                            fontSize: "15px",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                        Organization / Institution
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company, University, or Government body"
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--en-border)",
                          fontSize: "15px",
                          outline: "none",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                        Area of Interest / Vertical *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--en-border)",
                          fontSize: "15px",
                          outline: "none",
                          backgroundColor: "#ffffff",
                        }}
                      >
                        <option value="Geothermal Heating & Cooling">Geothermal Heating & Cooling (GHC)</option>
                        <option value="Renewable Energy Projects">Renewable Energy Projects (Solar, Wind, Biomass, Hydrogen)</option>
                        <option value="Engineering & Technology">Engineering & Technology (Turnkey EPC, Manufacturing, O&M)</option>
                        <option value="Agriculture & Food Processing">Agriculture & Food Processing (Agri-tech, Value Addition)</option>
                        <option value="Marine & Aquaculture">Marine & Aquaculture (Blue Economy, Processing)</option>
                        <option value="Research & Partnerships">Research, Technology Transfer & Partnerships</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "var(--en-dark-green)", marginBottom: "6px" }}>
                        Your Message / Project Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share details about your project or consultation requirements..."
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--en-border)",
                          fontSize: "15px",
                          outline: "none",
                          fontFamily: "inherit",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        padding: "14px 24px",
                        backgroundColor: "var(--en-teal)",
                        color: "#ffffff",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: 700,
                        fontSize: "16px",
                        cursor: "pointer",
                        boxShadow: "0 4px 14px rgba(14, 124, 134, 0.35)",
                        transition: "background-color 0.2s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--en-deep-teal)")}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--en-teal)")}
                    >
                      Submit Consultation Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}