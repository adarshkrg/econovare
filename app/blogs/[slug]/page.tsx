"use client";

/* ============================================================
   BLOG POST PAGE — /blogs/[slug]
   - Dynamic route — renders any post from blog.ts
   - Clean article layout
   - Structured sections: h2, p, ul, highlight, project,
     formula, calculation, deficitbox
   - FAQ section
   - Related posts
   - Fully responsive
   ============================================================ */

import Link from "next/link";
import NextImage from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogPosts } from "../../data/blog";
import { use } from "react";
import FaqSchema from "../../components/FaqSchema";
import ShareBar from "../../components/ShareBar";

/* ============================================================
   INLINE LINK PARSER
   - Lets blog paragraph text carry internal links using
     simple markdown-style syntax: [visible text](/path)
   - Keeps blog.ts as plain data (no JSX) while still allowing
     links to product/scheme pages inside body paragraphs
   ============================================================ */
function renderTextWithLinks(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      const [, label, href] = match;
      const isExternal = href.startsWith("http");
      if (isExternal) {
        return (
          <a key={i} href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>
            {label}
          </a>
        );
      }
      return (
        <Link key={i} href={href} style={{ color: "#F5A000", fontWeight: 600, textDecoration: "underline" }}>
          {label}
        </Link>
      );
    }
    return part;
  });
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  /* --- Related posts --- */
  const related = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 2);
  const relatedPosts = related.length > 0 ? related : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <FaqSchema faqs={post.faqs} />
      <Navbar />
      <main>

        {/* ============================================================
            STYLES
            ============================================================ */}
        <style>{`
          .article-h2 { font-size: clamp(18px, 2.5vw, 24px); font-weight: 700; color: #1a1a1a; margin: 32px 0 14px; line-height: 1.3; }
          .article-p { font-size: 15px; color: #444; line-height: 1.9; margin: 0 0 18px; text-align: justify; }
          .article-ul { margin: 0 0 18px; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 8px; }
          .article-ul li { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: #444; line-height: 1.7; }
          .article-ul-dot { width: 6px; height: 6px; border-radius: 50%; background: #FDB92E; flex-shrink: 0; margin-top: 7px; }
          .article-highlight { background: #FFF3D6; border-left: 4px solid #FDB92E; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; font-size: 15px; font-weight: 600; color: #854F0B; line-height: 1.7; }
          .article-project { background: #fff; border-radius: 12px; border: 0.5px solid #E8E2D8; border-left: 4px solid #FDB92E; padding: 20px; margin: 24px 0; }
          .article-formula { background: #FFF3D6; border-left: 4px solid #FDB92E; border-radius: 0 8px 8px 0; padding: 16px 20px; margin: 24px 0; }
          .article-formula-text { font-family: monospace; font-size: 20px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; }
          .article-formula-where { font-size: 13px; color: #555; line-height: 2; }
          .article-calculation { border: 0.5px solid #E8E2D8; border-radius: 12px; overflow: hidden; margin: 16px 0; }
          .article-calculation-header { background: #FFF3D6; padding: 10px 16px; font-size: 12px; font-weight: 700; color: #854F0B; }
          .article-calculation-body { padding: 16px; }
          .article-calculation-formula { font-family: monospace; font-size: 14px; color: #555; margin-bottom: 6px; }
          .article-calculation-result { font-family: monospace; font-size: 18px; font-weight: 700; color: #F5A000; margin-bottom: 10px; }
          .article-calculation-explanation { font-size: 13px; color: #777; line-height: 1.75; }
          .article-deficitbox { background: #FCEBEB; border: 0.5px solid #F7C1C1; border-radius: 12px; padding: 20px; margin: 24px 0; }
          .article-deficitbox-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 14px; }
          .article-deficitbox-item { background: #fff; border-radius: 8px; padding: 12px; text-align: center; }
          .article-deficitbox-label { font-size: 10px; color: #aaa; margin-bottom: 4px; }
          .article-deficitbox-value { font-size: 18px; font-weight: 700; }
          .article-deficitbox-message { font-size: 13px; font-weight: 700; color: #A32D2D; }
          .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          @media (max-width: 768px) {
            .related-grid { grid-template-columns: 1fr; }
            .article-p { font-size: 14px; }
            .article-h2 { margin-top: 24px; }
            .article-deficitbox-grid { grid-template-columns: 1fr; }
            .article-formula-text { font-size: 16px; }
            .article-calculation-result { font-size: 15px; }
          }
        `}</style>

        {/* ============================================================
            HERO
            ============================================================ */}
        <div style={{ position: "relative", height: "clamp(240px, 35vw, 420px)", background: "#e0e0e0", overflow: "hidden" }}>
          <NextImage src={post.image} alt={post.title} fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(20px, 4vw, 40px) clamp(24px, 5vw, 80px)" }}>
            <div style={{ maxWidth: "900px", margin: "0 auto" }}>

              {/* Breadcrumb */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
                <Link href="/blogs" style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Blog</Link>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>›</span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>{post.category}</span>
              </div>

              {/* Category badge */}
              <div style={{ display: "inline-block", background: "#FDB92E", color: "#412402", fontSize: "10px", fontWeight: 700, padding: "3px 12px", borderRadius: "20px", marginBottom: "10px" }}>
                {post.category}
              </div>

              {/* Title */}
              <h1 style={{ fontSize: "clamp(20px, 3vw, 36px)", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: "10px" }}>
                {post.title}
              </h1>

              {/* Meta */}
              <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>
                  {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.4)", display: "inline-block" }} />
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>{post.readTime}</span>
              </div>

            </div>
          </div>
        </div>

        {/* ============================================================
            ARTICLE BODY
            ============================================================ */}
        <div style={{ background: "#F7F2E9", padding: "clamp(40px, 6vw, 72px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>

            {/* Article card */}
            <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #E8E2D8", padding: "clamp(24px, 4vw, 52px)", marginBottom: "32px" }}>

              {/* Excerpt */}
              <p style={{ fontSize: "16px", fontWeight: 600, color: "#854F0B", lineHeight: 1.75, marginBottom: "28px", borderBottom: "0.5px solid #F0EBE0", paddingBottom: "24px" }}>
                {post.excerpt}
              </p>

              {/* ============================================================
                  RENDER SECTIONS
                  ============================================================ */}
              {post.sections.map((section, i) => {

                /* --- h2 --- */
                if (section.type === "h2") return (
                  <h2 key={i} className="article-h2">{section.text}</h2>
                );

                /* --- p --- */
                if (section.type === "p") return (
                  <p key={i} className="article-p">{renderTextWithLinks(section.text)}</p>
                );

                /* --- ul --- */
                if (section.type === "ul") return (
                  <ul key={i} className="article-ul">
                    {section.items.map((item, j) => (
                      <li key={j}><span className="article-ul-dot" />{item}</li>
                    ))}
                  </ul>
                );

                /* --- highlight --- */
                if (section.type === "highlight") return (
                  <div key={i} className="article-highlight">{section.text}</div>
                );

                /* --- project --- */
                if (section.type === "project") return (
                  <div key={i} className="article-project">
                    <div style={{ fontSize: "10px", fontWeight: 700, color: "#F5A000", letterSpacing: "1px", marginBottom: "6px" }}>{section.label.toUpperCase()}</div>
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", marginBottom: "10px" }}>{section.title}</div>
                    <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.8, textAlign: "justify" }}>{section.desc}</div>
                  </div>
                );

                /* --- formula --- */
                if (section.type === "formula") return (
                  <div key={i} className="article-formula">
                    <div className="article-formula-text">{section.formula}</div>
                    <div className="article-formula-where">
                      Where,<br />
                      {section.where.map((w, j) => (
                        <span key={j}>{w}<br /></span>
                      ))}
                    </div>
                  </div>
                );

                /* --- calculation --- */
                if (section.type === "calculation") return (
                  <div key={i} className="article-calculation">
                    <div className="article-calculation-header">{section.step}</div>
                    <div className="article-calculation-body">
                      <div className="article-calculation-formula">{section.formula}</div>
                      <div className="article-calculation-result">{section.result}</div>
                      <div className="article-calculation-explanation">{section.explanation}</div>
                    </div>
                  </div>
                );

                /* --- deficitbox --- */
                if (section.type === "deficitbox") return (
                  <div key={i} className="article-deficitbox">
                    <div className="article-deficitbox-grid">
                      {section.items.map((item, j) => (
                        <div key={j} className="article-deficitbox-item">
                          <div className="article-deficitbox-label">{item.label}</div>
                          <div className="article-deficitbox-value" style={{ color: item.color }}>{item.value}</div>
                        </div>
                      ))}
                    </div>
                    <div className="article-deficitbox-message">{section.message}</div>
                  </div>
                );

                return null;
              })}

              {/* CTA */}
              <div style={{ background: "#FFF3D6", borderRadius: "12px", border: "0.5px solid #FAC775", padding: "24px", marginTop: "36px", textAlign: "center" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1a1a1a", marginBottom: "6px" }}>Want to Know More?</div>
                <div style={{ fontSize: "13px", color: "#777", marginBottom: "18px" }}>Talk to our solar experts — free consultation, no obligations.</div>
                <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#FDB92E", borderRadius: "40px", padding: "10px 10px 10px 24px", textDecoration: "none", boxShadow: "0 4px 16px rgba(253,185,46,0.3)" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#412402", marginRight: "12px" }}>Talk to Our Team</span>
                  <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                  </div>
                </Link>
              </div>

            </div>

            {/* ============================================================
                SHARE
                ============================================================ */}
            <ShareBar url={`https://greenfilament.com/blogs/${post.slug}`} title={post.title} />

            {/* ============================================================
                FAQ SECTION
                ============================================================ */}
            <div style={{ background: "#fff", borderRadius: "16px", border: "0.5px solid #E8E2D8", padding: "clamp(24px, 4vw, 40px)", marginBottom: "32px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                Frequently Asked Questions
              </div>
              <h2 style={{ fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "20px" }}>Common Questions</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {post.faqs.map((faq, i) => (
                  <div key={i} style={{ background: "#FAFAFA", borderRadius: "10px", border: "0.5px solid #E8E2D8", padding: "16px 20px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <span style={{ color: "#FDB92E", flexShrink: 0 }}>Q.</span>
                      {faq.q}
                    </div>
                    <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.75, paddingLeft: "22px" }}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ============================================================
                RELATED POSTS
                ============================================================ */}
            {relatedPosts.length > 0 && (
              <div>
                <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
                  Keep Reading
                </div>
                <div className="related-grid">
                  {relatedPosts.map((related) => (
                    <Link key={related.slug} href={`/blogs/${related.slug}`} style={{ background: "#fff", borderRadius: "12px", border: "0.5px solid #E8E2D8", overflow: "hidden", textDecoration: "none", display: "flex", flexDirection: "column" }}>
                      <div style={{ height: "140px", position: "relative", background: "#e0e0e0" }}>
                        <NextImage src={related.image} alt={related.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                        <div style={{ position: "absolute", top: "10px", left: "10px", background: "#FDB92E", color: "#412402", fontSize: "9px", fontWeight: 700, padding: "2px 8px", borderRadius: "20px" }}>{related.category}</div>
                      </div>
                      <div style={{ padding: "14px" }}>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.4, marginBottom: "8px" }}>{related.title}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                          <span style={{ fontSize: "11px", fontWeight: 600, color: "#F5A000" }}>Read More</span>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

        {/* ============================================================
            CTA BANNER
            ============================================================ */}
        <div style={{ background: "linear-gradient(135deg, #F5A000 0%, #FDB92E 50%, #e07b00 100%)", padding: "clamp(48px, 7vw, 72px) clamp(24px, 5vw, 80px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
            <svg width="100%" height="100%"><defs><pattern id="cta-post" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" /></pattern></defs><rect width="100%" height="100%" fill="url(#cta-post)" /></svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>Ready to Go Solar?</h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>Get a free site assessment and custom quote from Green Filament.</p>
            <Link href="/connect" style={{ display: "inline-flex", alignItems: "center", background: "#fff", borderRadius: "40px", padding: "6px 6px 6px 22px", textDecoration: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Talk to Our Team</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
              </div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
