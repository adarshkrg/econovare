/* ============================================================
   BLOG LISTING PAGE — /blog
   - Hero section
   - Category filter tabs
   - Blog post cards grid
   - Fully responsive
   ============================================================ */

import type { Metadata } from "next";
import Link from "next/link";
import NextImage from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, blogCategories } from "../data/blog";

/* ============================================================
   SEO METADATA
   ============================================================ */
export const metadata: Metadata = {
  title: "Solar Energy Blog — Tips, Guides & Insights | Green Filament",
  description:
    "Expert insights on rooftop solar, solar pumps, street lighting, solar cooking, and government schemes in Odisha. Real projects. Practical guides. From Green Filament.",
  keywords: [
    "solar energy blog Odisha",
    "rooftop solar guide India",
    "solar tips Bhubaneswar",
    "solar street light guide",
    "government solar schemes Odisha",
    "PM Surya Ghar guide",
    "KUSUM scheme guide",
    "solar pump guide Odisha",
    "clean energy blog India",
    "Green Filament blog",
  ],
  alternates: {
    canonical: "https://greenfilament.com/blogs",
  },
  openGraph: {
    title: "Solar Energy Blog — Tips, Guides & Insights | Green Filament",
    description:
      "Expert insights on rooftop solar, solar pumps, street lighting, and government schemes in Odisha. Real projects. Practical guides.",
    url: "https://greenfilament.com/blogs",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Green Filament Solar Energy Blog Odisha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Energy Blog | Green Filament Odisha",
    description:
      "Rooftop solar, pumps, street lights, schemes — practical guides from 7+ years of solar installations.",
    images: ["/images/og-image.jpg"],
  },
};

/* ============================================================
   PAGE
   ============================================================ */
export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>

        <style>{`
          .blog-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .blog-card {
            background: #fff;
            border-radius: 14px;
            border: 0.5px solid #E8E2D8;
            overflow: hidden;
            transition: all 0.3s;
            display: flex;
            flex-direction: column;
            text-decoration: none;
          }
          .blog-card:hover {
            box-shadow: 0 8px 28px rgba(245,160,0,0.12);
            border-color: #FAC775;
            transform: translateY(-3px);
          }
          @media (max-width: 1024px) {
            .blog-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .blog-grid { grid-template-columns: 1fr; }
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
          <div style={{ position: "absolute", inset: 0, opacity: 0.1, pointerEvents: "none" }}>
            <svg width="100%" height="100%">
              <defs>
                <pattern id="blog-dots" width="24" height="24" patternUnits="userSpaceOnUse">
                  <circle cx="12" cy="12" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#blog-dots)" />
            </svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "inline-block", background: "rgba(255,255,255,0.2)", border: "0.5px solid rgba(255,255,255,0.4)", color: "#fff", fontSize: "11px", fontWeight: 600, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px", letterSpacing: "1px" }}>
              SOLAR INSIGHTS
            </div>
            <h1 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 700, color: "#fff", marginBottom: "14px", lineHeight: 1.25 }}>
              Solar Energy Blog
            </h1>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
              Real projects, practical guides, and expert insights on solar energy, government schemes, and clean technology from Odisha.
            </p>
          </div>
        </div>

        {/* ============================================================
            BLOG GRID
            ============================================================ */}
        <div style={{ background: "#F7F2E9", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

            {/* Section header */}
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                Latest Posts
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Insights from the Field
              </h2>
              <p style={{ fontSize: "14px", color: "#777", maxWidth: "420px", margin: "0 auto", lineHeight: 1.7 }}>
                Real stories, practical guides, and expert knowledge from 7+ years of solar installations across Odisha.
              </p>
            </div>

            {/* Blog cards grid */}
            <div className="blog-grid">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`} className="blog-card">

                  {/* Post image */}
                  <div style={{ height: "200px", position: "relative", background: "#e0e0e0", flexShrink: 0 }}>
                    <NextImage
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
                    {/* Category badge */}
                    <div style={{ position: "absolute", top: "12px", left: "12px", background: "#FDB92E", color: "#412402", fontSize: "10px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>
                      {post.category}
                    </div>
                  </div>

                  {/* Post content */}
                  <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>

                    {/* Meta */}
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <span style={{ fontSize: "11px", color: "#aaa" }}>
                        {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "#E8E2D8", flexShrink: 0, display: "inline-block" }} />
                      <span style={{ fontSize: "11px", color: "#aaa" }}>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <div style={{ fontSize: "15px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.4, flex: 1 }}>
                      {post.title}
                    </div>

                    {/* Excerpt */}
                    <div style={{ fontSize: "12px", color: "#777", lineHeight: 1.7 }}>
                      {post.excerpt}
                    </div>

                    {/* Read more */}
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#F5A000" }}>Read More</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

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
                <pattern id="cta-blog" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-blog)" />
            </svg>
          </div>
          <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
              Have a Solar Project in Mind?
            </h2>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
              Talk to our experts — free site assessment, no obligations.
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
              <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a", marginRight: "12px" }}>Talk to Our Team</span>
              <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FDB92E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
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
