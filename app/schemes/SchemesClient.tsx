"use client";

/* ============================================================
   SCHEMES PAGE
   - Disclaimer modal on page load (sessionStorage — once per visit)
   - Hero: amber gradient + grid pattern
   - Subsidy stats bar — white card style (like projects page)
   - Expandable scheme cards — Know More + Talk to Expert
   - Eligibility + Documents + Steps per scheme
   - CTA banner
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

/* --- Schemes data --- */
const centralSchemes = [
  {
    tag: "CENTRAL",
    since: "Since Feb 2024",
    title: "PM Surya Ghar Muft Bijli Yojana",
    badge: "₹78,000",
    desc: "Up to ₹78,000 subsidy for rooftop solar installation + 300 units free electricity per month. Collateral-free loan at 6.75% also available through public sector banks.",
    for: "Homeowners",
    portalName: "pmsuryaghar.gov.in",
    portalUrl: "https://pmsuryaghar.gov.in",
    eligibility: [
      "Indian resident homeowner with roof rights",
      "Must have an existing electricity connection in your name",
      "Only on-grid rooftop solar systems eligible",
      "Net meter integration required",
    ],
    documents: ["Aadhaar Card", "Electricity Bill", "Property Proof", "Bank Passbook", "Passport Photo", "Net Meter Application"],
    steps: [
      "Register on pmsuryaghar.gov.in with your mobile number and electricity consumer details",
      "Select your DISCOM and apply for rooftop solar installation",
      "Get feasibility approval from DISCOM and select an empanelled vendor like Green Filament",
      "After installation, submit net metering application and bank details",
      "Subsidy of up to ₹78,000 is directly credited to your bank account",
    ],
  },
  {
    tag: "CENTRAL",
    since: "Since 2019",
    title: "PM KUSUM Yojana — Solar Pumps",
    badge: "90% Subsidy",
    desc: "30% central + 30% state subsidy on solar pumps. Farmer pays only 10% (30% via bank loan). Solar pumps up to 15HP for irrigation across Odisha.",
    for: "Farmers",
    portalName: "pmkusum.mnre.gov.in",
    portalUrl: "https://pmkusum.mnre.gov.in",
    eligibility: [
      "Individual farmers, groups of farmers, FPOs",
      "Gram Panchayats and cooperatives",
      "Water user associations",
      "Must have agricultural land with irrigation need",
    ],
    documents: ["Aadhaar Card", "Farmer ID", "Land Records", "Bank Passbook", "Residential Proof", "Passport Photo"],
    steps: [
      "Apply through your state nodal agency — OREDA in Odisha",
      "Submit land documents and farmer identity proof",
      "Technical feasibility check conducted by OREDA",
      "After approval, pay 10% of pump cost (30% via bank loan)",
      "Green Filament installs the solar pump and subsidy is adjusted directly",
    ],
  },
  {
    tag: "CENTRAL",
    since: "Active",
    title: "PM KUSUM Component A — Solar Power Plant",
    badge: "25yr Income",
    desc: "Install 500kW–2MW solar power plants on barren or agricultural land. Sell electricity to DISCOM at fixed tariff for 25 years. Additional income for farmers.",
    for: "Farmers, FPOs, Panchayats",
    portalName: "pmkusum.mnre.gov.in",
    portalUrl: "https://pmkusum.mnre.gov.in",
    eligibility: [
      "Individual farmers or groups of farmers",
      "Farmer Producer Organizations (FPOs)",
      "Gram Panchayats and cooperatives",
      "Must have barren or uncultivable land near DISCOM substation",
    ],
    documents: ["Aadhaar Card", "Land Ownership Proof", "Bank Passbook", "Entity Registration (for FPO/GP)", "NOC from land authority"],
    steps: [
      "Express interest through OREDA or state nodal agency",
      "Site feasibility and grid connectivity assessment",
      "Sign Power Purchase Agreement (PPA) with DISCOM",
      "Green Filament designs and installs the solar power plant",
      "Earn fixed income from electricity sale for 25 years",
    ],
  },
  {
    tag: "CENTRAL",
    since: "Active",
    title: "Collateral-Free Solar Loan",
    badge: "₹2L @ 6.75%",
    desc: "Loans up to ₹2 lakh at 6.75% interest with no collateral required. Available through 12 public sector banks via JanSamarth Portal for rooftop solar.",
    for: "Homeowners",
    portalName: "jansamarth.in",
    portalUrl: "https://jansamarth.in",
    eligibility: [
      "Indian resident homeowner applying under PM Surya Ghar",
      "Must have valid electricity connection in name",
      "Loan linked to PM Surya Ghar Yojana application",
      "Valid KYC documents required",
    ],
    documents: ["Aadhaar Card", "PAN Card", "Electricity Bill", "Bank Statement (6 months)", "Income Proof", "PM Surya Ghar Application ID"],
    steps: [
      "First register on pmsuryaghar.gov.in and get application ID",
      "Visit jansamarth.in and apply for solar rooftop loan",
      "Select preferred public sector bank for loan processing",
      "Loan sanctioned within 15 days of application submission",
      "Loan disbursed directly to vendor after installation approval",
    ],
  },
];

const stateSchemes = [
  {
    tag: "ODISHA STATE",
    since: "2024–2027",
    title: "Odisha State Additional Subsidy",
    badge: "Up to ₹60,000",
    desc: "₹25,000 for 1kW · ₹50,000 for 2kW · ₹60,000 for 3kW and above. Over and above the central subsidy. Combined total up to ₹1,38,000 for 3kW systems!",
    for: "Homeowners in Odisha",
    portalName: "oredaodisha.com",
    portalUrl: "https://oredaodisha.com",
    eligibility: [
      "Odisha resident homeowner with valid electricity connection",
      "Applying under PM Surya Ghar Muft Bijli Yojana",
      "On-grid rooftop solar system installation",
      "Property located within Odisha DISCOM jurisdiction",
    ],
    documents: ["Aadhaar Card", "Electricity Bill", "Property Proof", "Bank Passbook", "PM Surya Ghar Application ID", "DISCOM Approval Letter"],
    steps: [
      "First apply under PM Surya Ghar Muft Bijli Yojana on pmsuryaghar.gov.in",
      "After central approval, state subsidy is automatically processed via OREDA",
      "OREDA verifies installation and documentation",
      "State subsidy of up to ₹60,000 credited directly to your bank account",
      "Combined total subsidy up to ₹1,38,000 for 3kW systems",
    ],
  },
  {
    tag: "ODISHA STATE",
    since: "Since 2018",
    title: "Soura Jalanidhi Yojana",
    badge: "90% Subsidy",
    desc: "Dug well-based solar pump irrigation scheme for Odisha farmers. 90% subsidy on solar agricultural pumps. Minimum 0.5 acres of agricultural land required.",
    for: "Farmers",
    portalName: "odishasolarpump.nic.in",
    portalUrl: "https://odishasolarpump.nic.in",
    eligibility: [
      "Small and marginal farmers with valid Farmer ID",
      "Minimum 0.5 acres of agricultural land",
      "Resident of Odisha with valid residential proof",
      "Applicant must agree to maintain and safeguard the solar pump",
    ],
    documents: ["Aadhaar Card", "Farmer ID", "Land Records", "Bank Passbook", "Residential Proof", "Passport Photo"],
    steps: [
      "Register on odishasolarpump.nic.in with Farmer ID and mobile number",
      "Apply under Subsidy for Installation of Solar Pumps on Farm Lands",
      "Upload required documents and submit application online",
      "After approval, pay 10% of pump cost to complete registration",
      "Green Filament installs the pump and subsidy is credited to your account",
    ],
  },
  {
    tag: "ODISHA STATE",
    since: "Active",
    title: "OREDA Solar Street Light Scheme",
    badge: "₹10 Cr Fund",
    desc: "Solar LED street lights for Gram Panchayats across Odisha. ₹10 crore allocated in the 2024-25 state budget. Covers rural roads, village commons, and public spaces.",
    for: "Gram Panchayats",
    portalName: "oredaodisha.com",
    portalUrl: "https://oredaodisha.com",
    eligibility: [
      "Registered Gram Panchayats in Odisha",
      "Urban local bodies and municipalities",
      "Government institutions with public lighting needs",
      "Priority to areas without existing street lighting",
    ],
    documents: ["GP Resolution Letter", "Location Survey Report", "NOC from concerned authority", "Bank Account Details of GP", "List of proposed locations"],
    steps: [
      "Gram Panchayat passes resolution for solar street light installation",
      "Submit application to block-level OREDA office with location details",
      "OREDA conducts site survey and approves number of lights",
      "Green Filament installs solar street lights at approved locations",
      "Handover and maintenance responsibility transferred to GP",
    ],
  },
  {
    tag: "ODISHA STATE",
    since: "Active",
    title: "OREDA Solar for Govt Buildings",
    badge: "Zero Cost",
    desc: "Grid-connected rooftop solar on schools, hospitals, and panchayat offices under RESCO model. Zero upfront cost for government institutions. Implemented by OREDA.",
    for: "Govt Institutions",
    portalName: "oredaodisha.com",
    portalUrl: "https://oredaodisha.com",
    eligibility: [
      "Government schools and colleges in Odisha",
      "District and community hospitals",
      "Gram Panchayat offices and block offices",
      "Other government buildings with adequate roof space",
    ],
    documents: ["Institution Registration Certificate", "NOC from head of institution", "Electricity bills (last 6 months)", "Roof ownership proof", "Bank account details"],
    steps: [
      "Institution applies to OREDA with NOC and electricity consumption details",
      "OREDA conducts rooftop feasibility assessment",
      "Solar system installed at zero upfront cost under RESCO model",
      "Institution pays reduced electricity tariff to RESCO operator",
      "Full ownership transferred to institution after agreement period",
    ],
  },
  {
    tag: "ODISHA STATE",
    since: "Active",
    title: "DDG — Off-Grid Solar Villages",
    badge: "Free Power",
    desc: "Decentralized Distributed Generation scheme for remote villages without grid access. Off-grid solar electrification implemented by OREDA across Odisha.",
    for: "Remote Villages",
    portalName: "oredaodisha.com",
    portalUrl: "https://oredaodisha.com",
    eligibility: [
      "Remote villages and hamlets not connected to electricity grid",
      "Villages in tribal and forest areas of Odisha",
      "Hamlets with minimum 10 households",
      "Recommended by District Collector or Block Development Officer",
    ],
    documents: ["Village Survey Report", "BDO/Collector Recommendation", "List of households", "Land availability certificate", "Community consent letter"],
    steps: [
      "BDO or District Collector identifies eligible remote villages",
      "OREDA conducts survey and approves electrification plan",
      "Off-grid solar micro-grid or home lighting systems installed",
      "Community trained for basic operations and maintenance",
      "Ongoing support provided by OREDA and empanelled vendors",
    ],
  },
  {
    tag: "ODISHA STATE",
    since: "Active",
    title: "Net Metering Policy — Odisha",
    badge: "Earn from Solar",
    desc: "Sell excess solar electricity back to the grid. Credits are adjusted in your monthly electricity bill. Available for all rooftop solar users across Odisha DISCOMs.",
    for: "All Solar Users",
    portalName: "oredaodisha.com",
    portalUrl: "https://oredaodisha.com",
    eligibility: [
      "Any rooftop solar system owner in Odisha",
      "Must have an existing electricity connection",
      "System capacity up to sanctioned load limit",
      "On-grid solar system with net meter installed",
    ],
    documents: ["Electricity Consumer Number", "Solar System Installation Certificate", "Net Meter Application Form", "Technical specification of solar system", "Bank account details for credits"],
    steps: [
      "Install grid-connected rooftop solar with empanelled vendor like Green Filament",
      "Apply for net meter at your DISCOM office with installation certificate",
      "DISCOM inspects installation and approves net metering",
      "Bidirectional net meter installed by DISCOM at your premises",
      "Excess electricity exported to grid is credited in monthly bill",
    ],
  },
];

/* ============================================================
   SCHEME CARD COMPONENT — expandable
   ============================================================ */
function SchemeCard({ scheme, isState }: { scheme: typeof centralSchemes[0]; isState?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{
      background: "#fff",
      borderRadius: "14px",
      border: `0.5px solid ${expanded ? "#FAC775" : "#E8E2D8"}`,
      overflow: "hidden",
      transition: "all 0.3s",
      boxShadow: expanded ? "0 8px 24px rgba(245,160,0,0.12)" : "none",
    }}>

      {/* ---- Main card content ---- */}
      <div style={{ padding: "24px" }}>

        {/* Tag + since */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
          <span style={{
            display: "inline-block",
            fontSize: "9px",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "20px",
            letterSpacing: "0.5px",
            background: isState ? "#FFF3D6" : "#e8f0ff",
            color: isState ? "#854F0B" : "#1a4a8a",
          }}>
            {scheme.tag}
          </span>
          <span style={{ fontSize: "10px", color: "#aaa" }}>{scheme.since}</span>
        </div>

        {/* Title */}
        <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>
          {scheme.title}
        </div>

        {/* Badge */}
        <div style={{ fontSize: "22px", fontWeight: 800, color: "#FDB92E", marginBottom: "10px" }}>
          {scheme.badge}
        </div>

        {/* Description */}
        <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.75, textAlign: "justify", marginBottom: "12px" }}>
          {scheme.desc}
        </div>

        {/* For */}
        <div style={{ fontSize: "10px", color: "#aaa", marginBottom: "16px" }}>
          For: {scheme.for} · {scheme.portalName}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              flex: 1,
              background: "#FFF3D6",
              border: "0.5px solid #FAC775",
              color: "#854F0B",
              fontSize: "12px",
              fontWeight: 700,
              padding: "9px 14px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {expanded ? "Hide Details ↑" : "Know More ↓"}
          </button>
          <Link
            href="/connect"
            style={{
              flex: 1,
              background: "#FDB92E",
              color: "#412402",
              fontSize: "12px",
              fontWeight: 700,
              padding: "9px 14px",
              borderRadius: "8px",
              textDecoration: "none",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Talk to Expert →
          </Link>
        </div>

      </div>

      {/* ---- Expanded content ---- */}
      {expanded && (
        <div style={{ background: "#FAFAFA", borderTop: "0.5px solid #F0EBE0", padding: "20px 24px" }}>

          {/* Eligibility */}
          <div style={{ marginBottom: "18px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.5px", marginBottom: "10px" }}>
              ✓ WHO IS ELIGIBLE
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              {scheme.eligibility.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FDB92E", flexShrink: 0, marginTop: "5px" }} />
                  <span style={{ fontSize: "12px", color: "#555", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div style={{ marginBottom: "18px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.5px", marginBottom: "10px" }}>
              📄 DOCUMENTS REQUIRED
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {scheme.documents.map((doc) => (
                <span key={doc} style={{
                  display: "inline-block",
                  background: "#fff",
                  border: "0.5px solid #E8E2D8",
                  borderRadius: "6px",
                  padding: "4px 10px",
                  fontSize: "11px",
                  color: "#555",
                }}>
                  {doc}
                </span>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div style={{ marginBottom: "18px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#1a1a1a", letterSpacing: "0.5px", marginBottom: "10px" }}>
              📋 HOW TO APPLY
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {scheme.steps.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background: "#FFF3D6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#F5A000",
                    flexShrink: 0,
                  }}>
                    {i + 1}
                  </div>
                  <div style={{ fontSize: "12px", color: "#555", lineHeight: 1.6, paddingTop: "3px" }}>{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Official portal */}

          <a href={scheme.portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 14px",
              background: "#fff",
              borderRadius: "8px",
              border: "0.5px solid #E8E2D8",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "11px", color: "#777" }}>Official Portal</span>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1a4a8a" }}>{scheme.portalName} ↗</span>
          </a>

        </div>
      )}

    </div>
  );
}

/* ============================================================
   DISCLAIMER MODAL
   ============================================================ */
function DisclaimerModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,10,10,0.65)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          maxWidth: "480px",
          width: "100%",
          padding: "36px 32px",
          borderTop: "4px solid #FDB92E",
        }}
      >
        {/* Icon */}
        <div style={{
          width: "44px",
          height: "44px",
          background: "#FFF8E7",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
          border: "1px solid #FDB92E",
          fontSize: "20px",
        }}>
          ⚠
        </div>

        {/* Pill */}
        <p style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "1.5px",
          color: "#ad3b07",
          margin: "0 0 8px",
          textTransform: "uppercase",
        }}>
          Before You Continue
        </p>

        {/* Title */}
        <h2 style={{
          fontSize: "30px",
          fontWeight: 700,
          color: "#1a1a1a",
          margin: "0 0 16px",
          lineHeight: 1.3,
          
        }}>
          Government Scheme Information Disclaimer
        </h2>

        {/* Body */}
        <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.8, margin: "0 0 14px", textAlign: "justify" }}>
          The schemes listed on this page are based on <strong>publicly available information</strong> at the time of publishing. Subsidy amounts, eligibility criteria, and availability are subject to change at the discretion of Central or State Government authorities.
        </p>
        <p style={{ fontSize: "14px", color: "#444", lineHeight: 1.8, margin: "0 0 28px", textAlign: "justify" }}>
          Green Filament does not guarantee the accuracy or current validity of any scheme information. We strongly recommend verifying details from <strong>official government portals</strong> before applying.
        </p>

        {/* CTA */}
        <button
          onClick={onClose}
          style={{
            width: "100%",
            background: "#FDB92E",
            color: "#1a1a1a",
            border: "none",
            borderRadius: "10px",
            padding: "14px",
            fontSize: "15px",
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.3px",
          }}
        >
          I Understand, Continue →
        </button>

        <p style={{ textAlign: "center", fontSize: "12px", color: "#999", margin: "12px 0 0" }}>
          Please read before proceeding
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   PAGE
   ============================================================ */
export default function SchemesClient() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);

const handleDisclaimerClose = () => setShowDisclaimer(false);

  return (
    <>
      <Navbar />

      {/* Disclaimer modal */}
      {showDisclaimer && <DisclaimerModal onClose={handleDisclaimerClose} />}

      <main>

        <style>{`
          .schemes-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px;
          }
          .subsidy-stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
          }
          @media (max-width: 768px) {
            .schemes-grid { grid-template-columns: 1fr; }
            .subsidy-stats-grid {
              grid-template-columns: 1fr;
              gap: 0;
            }
            .subsidy-divider-v { display: none; }
            .subsidy-divider-h {
              display: block !important;
              height: 0.5px;
              background: #E8E2D8;
              margin: 0 24px;
            }
          }
        `}</style>


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
              fontSize: "11px",
              fontWeight: 600,
              padding: "4px 14px",
              borderRadius: "20px",
              marginBottom: "12px",
              letterSpacing: "1px",
            }}>
              GOVERNMENT SCHEMES
            </div>
            <h1 style={{
              fontSize: "clamp(26px, 4vw, 48px)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: "14px",
              lineHeight: 1.25,
            }}>
              Solar Schemes for Odisha
            </h1>
            <p style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.9)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}>
              Get up to ₹1,38,000 in subsidies from Central and State Government. Green Filament helps you apply and avail every scheme you are eligible for.
            </p>
          </div>
        </div>

        {/* ============================================================
            SUBSIDY STATS BAR — white card style
            ============================================================ */}
        <div style={{
          background: "#F7F2E9",
          padding: "clamp(32px, 4vw, 48px) clamp(24px, 5vw, 80px)",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{
              background: "#fff",
              borderRadius: "14px",
              border: "0.5px solid #E8E2D8",
              borderTop: "3px solid #FDB92E",
              overflow: "hidden",
            }}>
              <div className="subsidy-stats-grid">

                {/* Central */}
                <div style={{ textAlign: "center", padding: "clamp(20px, 3vw, 32px) 24px" }}>
                  <p style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "1.4px",
                    color: "#854F0B",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                  }}>
                    Central Subsidy
                  </p>
                  <p style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#1a1a1a", margin: "0 0 6px" }}>
                    ₹78,000
                  </p>
                  <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>PM Surya Ghar Yojana</p>
                </div>

                {/* Divider vertical */}
                <div className="subsidy-divider-v" style={{ width: "0.5px", background: "#E8E2D8", margin: "20px 0" }} />
                <div className="subsidy-divider-h" style={{ display: "none" }} />

                {/* State */}
                <div style={{ textAlign: "center", padding: "clamp(20px, 3vw, 32px) 24px" }}>
                  <p style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "1.4px",
                    color: "#854F0B",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                  }}>
                    Odisha State Subsidy
                  </p>
                  <p style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#1a1a1a", margin: "0 0 6px" }}>
                    ₹60,000
                  </p>
                  <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>Odisha Govt Additional</p>
                </div>

                {/* Divider vertical */}
                <div className="subsidy-divider-v" style={{ width: "0.5px", background: "#E8E2D8", margin: "20px 0" }} />
                <div className="subsidy-divider-h" style={{ display: "none" }} />

                {/* Total */}
                <div style={{ textAlign: "center", padding: "clamp(20px, 3vw, 32px) 24px" }}>
                  <p style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "1.4px",
                    color: "#854F0B",
                    margin: "0 0 8px",
                    textTransform: "uppercase",
                  }}>
                    Total Combined
                  </p>
                  <p style={{ fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 800, color: "#FDB92E", margin: "0 0 6px" }}>
                    ₹1,38,000
                  </p>
                  <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>For 3kW System in Odisha</p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            CENTRAL GOVERNMENT SCHEMES
            ============================================================ */}
        <div style={{
          background: "#FAFAFA",
          padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{
                display: "inline-block",
                background: "#e8f0ff",
                border: "0.5px solid #93c5fd",
                color: "#1a4a8a",
                fontSize: "13px",
                fontWeight: 500,
                padding: "4px 14px",
                borderRadius: "20px",
                marginBottom: "12px",
              }}>
                Central Government
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Central Government Schemes
              </h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                Schemes launched by Government of India — applicable for all Odisha residents.
              </p>
            </div>
            <div className="schemes-grid">
              {centralSchemes.map((scheme) => (
                <SchemeCard key={scheme.title} scheme={scheme} />
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            ODISHA STATE SCHEMES
            ============================================================ */}
        <div style={{
          background: "#ffffff",
          padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
        }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{
                display: "inline-block",
                background: "#FFF3D6",
                border: "0.5px solid #FAC775",
                color: "#854F0B",
                fontSize: "13px",
                fontWeight: 500,
                padding: "4px 14px",
                borderRadius: "20px",
                marginBottom: "12px",
              }}>
                Odisha State Government
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Odisha State Schemes
              </h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                Schemes launched by Government of Odisha — exclusively for Odisha residents.
              </p>
            </div>
            <div className="schemes-grid">
              {stateSchemes.map((scheme) => (
                <SchemeCard key={scheme.title} scheme={scheme} isState />
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            HOW WE HELP
            ============================================================ */}
        <div style={{
          background: "#FAFAFA",
          padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
        }}>
          <div style={{
            maxWidth: "1400px",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "16px",
            border: "0.5px solid #E8E2D8",
            padding: "clamp(32px, 4vw, 52px)",
            textAlign: "center",
          }}>
            <div style={{
              display: "inline-block",
              background: "#FFF3D6",
              border: "0.5px solid #FAC775",
              color: "#854F0B",
              fontSize: "13px",
              fontWeight: 500,
              padding: "4px 14px",
              borderRadius: "20px",
              marginBottom: "16px",
            }}>
              How We Help
            </div>
            <h2 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "12px" }}>
              Not Sure Which Scheme Applies to You?
            </h2>
            <p style={{ fontSize: "14px", color: "#777", maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.8, textAlign: "justify" }}>
              Our solar experts will assess your eligibility, identify the right schemes, and handle all paperwork — completely free of charge. We have helped 500+ customers across Odisha avail government subsidies without any hassle.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
              maxWidth: "700px",
              margin: "0 auto 32px",
            }}>
              {[
                { step: "01", title: "Free Assessment", desc: "We check your eligibility for all applicable schemes" },
                { step: "02", title: "Paperwork Handled", desc: "We file all applications on your behalf at no cost" },
                { step: "03", title: "Subsidy Credited", desc: "Subsidy directly credited to your bank account" },
              ].map((s) => (
                <div key={s.step} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "24px", fontWeight: 800, color: "#FDB92E", marginBottom: "8px" }}>{s.step}</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", marginBottom: "4px" }}>{s.title}</div>
                  <div style={{ fontSize: "11px", color: "#777", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              ))}
            </div>

            <Link href="/connect" style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#FDB92E",
              borderRadius: "40px",
              padding: "10px 10px 10px 24px",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(253,185,46,0.3)",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#412402", marginRight: "12px" }}>
                Get Free Consultation
              </span>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </Link>

          </div>
        </div>

        {/* ============================================================
            CTA BANNER
            ============================================================ */}
        <div style={{
          background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)",
          padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
            <svg width="100%" height="100%">
              <defs>
                <pattern id="cta-schemes" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-schemes)" />
            </svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Ready to Claim Your Subsidy?
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
              Let Green Filament handle everything — from eligibility check to installation to subsidy credit.
            </p>
            <Link href="/connect" style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "40px",
              padding: "6px 6px 6px 22px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>
                Connect With Us
              </span>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#FDB92E",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}