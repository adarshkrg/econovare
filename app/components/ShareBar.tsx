"use client";
/* ============================================================
   ShareBar — social share card for blog posts
   Props: url (full canonical URL), title (post title)
   Plain share links, no third-party scripts.
   ============================================================ */
import { useState } from "react";
import { FaWhatsapp, FaFacebookF, FaXTwitter, FaLinkedinIn, FaLink } from "react-icons/fa6";

export default function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  /* ---------- Share targets ---------- */
  const links = [
    { label: "Share on Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}`, Icon: FaFacebookF },
    { label: "Share on X", href: `https://twitter.com/intent/tweet?text=${t}&url=${u}`, Icon: FaXTwitter },
    { label: "Share on LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`, Icon: FaLinkedinIn },
  ];

  /* ---------- Copy link ---------- */
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked, ignore */
    }
  };

  const circle = {
    width: "42px", height: "42px", borderRadius: "50%", border: "1px solid #F5A000",
    background: "#FFF3D6", color: "#854F0B", display: "flex",
    alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "18px",
  } as const;

  return (
    <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E", padding: "clamp(24px, 4vw, 40px)", marginBottom: "32px" }}>

      {/* ---------- Pill badge ---------- */}
      <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
        Share This Article
      </div>

      {/* ---------- Prompt ---------- */}
      <div style={{ fontSize: "15px", fontWeight: 600, color: "#1a1a1a", marginBottom: "4px" }}>Know someone thinking about solar?</div>
      <div style={{ fontSize: "13px", color: "#777", marginBottom: "16px" }}>Send them this article, it takes one tap.</div>

      {/* ---------- Buttons ---------- */}
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>

        {/* WhatsApp (primary) */}
        
        <a  href={`https://wa.me/?text=${t}%20${u}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FDB92E", color: "#412402", fontSize: "14px", fontWeight: 700, padding: "0 18px", height: "42px", borderRadius: "40px", textDecoration: "none" }}
        >
          <FaWhatsapp size={20} />
          Send on WhatsApp
        </a>

        {/* Facebook, X, LinkedIn */}
        {links.map(({ label, href, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} style={circle}>
            <Icon />
          </a>
        ))}

        {/* Copy link */}
        <button type="button" onClick={copy} aria-label="Copy link" style={circle}>
          <FaLink />
        </button>
        {copied && <span style={{ fontSize: "13px", color: "#777" }}>Link copied</span>}
      </div>
    </div>
  );
}