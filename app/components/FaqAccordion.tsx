"use client";

/* ============================================================
   FAQ ACCORDION (visual, client-side)
   - Small client component so server pages (like solar-cooking)
     can have an interactive FAQ without converting the whole
     page into a client component
   - Pass the same faqs array here AND into <FaqSchema /> so the
     visible text and the schema always match
   ============================================================ */

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: "#ffffff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* ── Section header: pill badge + title ── */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>FAQ</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>Frequently Asked Questions</h2>
        </div>

        {/* ── Accordion list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: "#FAFAFA", borderRadius: "10px", border: "0.5px solid #E8E2D8", overflow: "hidden" }}>

              {/* Question row — click to expand/collapse */}
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{faq.q}</span>
                <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.25s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </div>
              </button>

              {/* Answer — only rendered when this item is open */}
              {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: "13px", color: "#555", lineHeight: 1.8 }}>{faq.a}</div>}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}