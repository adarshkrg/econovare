"use client";

/* ============================================================
   PROJECTS PAGE
   - Hero: amber gradient + grid pattern
   - Stats bar
   - Filter tabs by category
   - Featured project — full width story card
   - Project grid — all projects
   - CTA banner
   - Data imported from app/data/projects.ts
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { projects, projectCategories } from "../data/projects";

export default function ProjectsClients() {
    const [activeCategory, setActiveCategory] = useState("All");

    /* --- Filter projects by category --- */
    const filtered = activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    /* --- Featured project --- */
    const featured = projects.find((p) => p.featured);

    return (
        <>
            <Navbar />
            <main>

                {/* ============================================================
            PROJECTS PAGE STYLES
            ============================================================ */}
                <style>{`

          /* ── Project card ── */
          .proj-card {
            background: #fff;
            border-radius: 16px;
            border: 0.5px solid #E8E2D8;
            overflow: hidden;
            transition: all 0.3s;
            display: flex;
            flex-direction: column;
          }
          .proj-card:hover {
            box-shadow: 0 8px 28px rgba(245,160,0,0.12);
            border-color: #FAC775;
            transform: translateY(-3px);
          }

          /* ── Category badge ── */
          .cat-badge {
            display: inline-block;
            font-size: 9px;
            font-weight: 700;
            padding: 3px 10px;
            border-radius: 20px;
            background: #FFF3D6;
            color: #854F0B;
          }

          /* ── Filter tab ── */
          .filter-tab {
            font-size: 12px;
            font-weight: 600;
            padding: 7px 16px;
            border-radius: 20px;
            cursor: pointer;
            border: 0.5px solid #E8E2D8;
            background: #FAFAFA;
            color: #555;
            transition: all 0.2s;
            white-space: nowrap;
          }
          .filter-tab:hover {
            border-color: #FAC775;
            color: #854F0B;
          }
          .filter-tab-active {
            background: #FDB92E !important;
            color: #412402 !important;
            border-color: #FDB92E !important;
          }

          /* ── Story step ── */
          .story-step {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            margin-bottom: 14px;
          }
          .story-step:last-child { margin-bottom: 0; }
          .step-icon {
            width: 28px;
            height: 28px;
            border-radius: 7px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            flex-shrink: 0;
            margin-top: 1px;
          }

          /* ── Grids ── */
          .proj-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .featured-grid {
            display: grid;
            grid-template-columns: 1.2fr 1fr;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
          }

          /* ── Responsive ── */
          @media (max-width: 1024px) {
            .proj-grid { grid-template-columns: repeat(2, 1fr); }
          }
          @media (max-width: 768px) {
            .proj-grid { grid-template-columns: 1fr; }
            .featured-grid { grid-template-columns: 1fr; }
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
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
                            OUR PROJECTS
                        </div>
                        <h1 style={{
                            fontSize: "clamp(26px, 4vw, 48px)",
                            fontWeight: 700,
                            color: "#fff",
                            marginBottom: "14px",
                            lineHeight: 1.25,
                        }}>
                            Real Work. Real Impact.
                        </h1>
                        <p style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.9)",
                            maxWidth: "480px",
                            margin: "0 auto",
                            lineHeight: 1.8,
                        }}>
                            500+ projects delivered across Odisha and beyond — each one a story of clean energy transforming lives.
                        </p>
                    </div>
                </div>

                {/* ============================================================
            STATS BAR
            ============================================================ */}

                <div style={{ background: "#FAFAFA", borderTop: "0.5px solid #E8E2D8", borderBottom: "0.5px solid #E8E2D8" }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
                        <div className="stats-grid">
                            {[
                                { value: "500+", label: "Projects Completed" },
                                { value: "12+", label: "Districts Covered" },
                                { value: "1MW+", label: "Solar Capacity" },
                                { value: "8+", label: "Years of Excellence" },
                            ].map((stat, i) => (
                                <div key={stat.label} style={{
                                    textAlign: "center",
                                    padding: "clamp(16px, 2vw, 24px) 16px",
                                    borderRight: i < 3 ? "0.5px solid #E8E2D8" : "none",
                                }}>
                                    <div style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#FDB92E" }}>
                                        {stat.value}
                                    </div>
                                    <div style={{ fontSize: "11px", color: "#555", marginTop: "4px" }}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ============================================================
            FEATURED PROJECT
            ============================================================ */}
                {featured && (
                    <div style={{
                        background: "#FAFAFA",
                        padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                    }}>
                        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                            {/* Header */}
                            <div style={{ textAlign: "center", marginBottom: "28px" }}>
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
                                    ✦ Featured Project
                                </div>
                                <h2 style={{
                                    fontSize: "clamp(22px, 3vw, 32px)",
                                    fontWeight: 700,
                                    color: "#1a1a1a",
                                }}>
                                    Our Most Impactful Story
                                </h2>
                            </div>

                            {/* Featured card */}
                            <div style={{
                                background: "#fff",
                                borderRadius: "16px",
                                border: "0.5px solid #FAC775",
                                overflow: "hidden",
                                boxShadow: "0 8px 32px rgba(245,160,0,0.1)",
                            }}>
                                <div className="featured-grid">

                                    {/* Left: photo */}
                                    <div style={{ position: "relative", minHeight: "clamp(280px, 35vw, 420px)", background: "#e0e0e0" }}>
                                        <NextImage
                                            src={featured.image}
                                            alt={featured.title}
                                            fill
                                            priority
                                            loading="eager"
                                            sizes="(max-width: 768px) 100vw, 55vw"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%)" }} />
                                        <div style={{ position: "absolute", top: "14px", left: "14px", display: "flex", gap: "6px" }}>
                                            <span style={{ background: "#FDB92E", color: "#412402", fontSize: "9px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>✦ Featured</span>
                                            <span className="cat-badge">{featured.category}</span>
                                        </div>
                                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(16px, 3vw, 28px)", zIndex: 1 }}>
                                            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginBottom: "6px" }}>
                                                📍 {featured.location} · {featured.year}
                                            </div>
                                            <div style={{ fontSize: "clamp(16px, 2vw, 22px)", fontWeight: 700, color: "#fff", marginBottom: "14px" }}>
                                                {featured.title}
                                            </div>
                                            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                                                {featured.stats.map((stat) => (
                                                    <div key={stat.label} style={{
                                                        background: "rgba(255,255,255,0.15)",
                                                        border: "0.5px solid rgba(255,255,255,0.2)",
                                                        padding: "8px 14px",
                                                        borderRadius: "8px",
                                                        textAlign: "center",
                                                    }}>
                                                        <div style={{ fontSize: "16px", fontWeight: 700, color: "#fff" }}>{stat.value}</div>
                                                        <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{stat.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: story */}
                                    <div style={{ padding: "clamp(24px, 3vw, 36px)", display: "flex", flexDirection: "column", gap: "16px" }}>
                                        <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "10px", fontWeight: 600, padding: "3px 10px", borderRadius: "20px" }}>
                                            Project Story
                                        </div>
                                        <div style={{ fontSize: "clamp(15px, 1.8vw, 18px)", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.35 }}>
                                            {featured.storyTitle}
                                        </div>

                                        <div className="story-step">
                                            <div className="step-icon" style={{ background: "#ffe4e6", color: "#be123c" }}>⚡</div>
                                            <div>
                                                <div style={{ fontSize: "11px", fontWeight: 700, color: "#be123c", marginBottom: "4px" }}>The Challenge</div>
                                                <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, textAlign: "justify" }}>{featured.challenge}</div>
                                            </div>
                                        </div>

                                        <div className="story-step">
                                            <div className="step-icon" style={{ background: "#FFF3D6", color: "#854F0B" }}>☀</div>
                                            <div>
                                                <div style={{ fontSize: "11px", fontWeight: 700, color: "#854F0B", marginBottom: "4px" }}>Our Solution</div>
                                                <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, textAlign: "justify" }}>{featured.solution}</div>
                                            </div>
                                        </div>

                                        <div className="story-step">
                                            <div className="step-icon" style={{ background: "#d1fae5", color: "#065f46" }}>✓</div>
                                            <div>
                                                <div style={{ fontSize: "11px", fontWeight: 700, color: "#065f46", marginBottom: "4px" }}>The Result</div>
                                                <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7, textAlign: "justify" }}>{featured.result}</div>
                                            </div>
                                        </div>

                                        {/* Specs */}
                                        <div style={{ background: "#FAFAFA", borderRadius: "10px", padding: "14px", marginTop: "auto" }}>
                                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                                                {featured.specs.map((spec) => (
                                                    <div key={spec.label}>
                                                        <div style={{ fontSize: "9px", color: "#aaa", marginBottom: "2px" }}>{spec.label}</div>
                                                        <div style={{ fontSize: "12px", fontWeight: 700, color: "#1a1a1a" }}>{spec.value}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ============================================================
            FILTER TABS + PROJECT GRID
            ============================================================ */}
                <div style={{
                    background: "#ffffff",
                    padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)",
                }}>
                    <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

                        {/* Section header */}
                        <div style={{ textAlign: "center", marginBottom: "32px" }}>
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
                                All Projects
                            </div>
                            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a" }}>
                                Explore Our Work
                            </h2>
                        </div>

                        {/* Filter tabs */}
                        <div style={{
                            display: "flex",
                            gap: "8px",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            marginBottom: "32px",
                        }}>
                            {projectCategories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`filter-tab ${activeCategory === cat ? "filter-tab-active" : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Project grid */}
                        <div className="proj-grid">
                            {filtered.map((project, index) => (
                                <div key={project.id} className="proj-card">

                                    {/* Photo */}
                                    <div style={{ height: "200px", position: "relative", background: "#e0e0e0", flexShrink: 0 }}>
                                        <NextImage
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            style={{ objectFit: "cover" }}
                                            priority={index < 3}
                                        />
                                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }} />
                                        <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: "6px" }}>
                                            <span className="cat-badge">{project.category}</span>
                                            {project.featured && (
                                                <span style={{ background: "#FDB92E", color: "#412402", fontSize: "9px", fontWeight: 700, padding: "3px 10px", borderRadius: "20px" }}>✦</span>
                                            )}
                                        </div>
                                        <div style={{ position: "absolute", bottom: "10px", left: "10px", right: "10px" }}>
                                            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.75)", marginBottom: "3px" }}>
                                                📍 {project.location}
                                            </div>
                                            <div style={{ fontSize: "14px", fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>
                                                {project.title}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>

                                        {/* Story title */}
                                        <div style={{ fontSize: "13px", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.4 }}>
                                            {project.storyTitle}
                                        </div>

                                        {/* Result highlight */}
                                        <div style={{ fontSize: "12px", color: "#555", lineHeight: 1.7, textAlign: "justify", flex: 1 }}>
                                            {project.result}
                                        </div>

                                        {/* Stats chips */}
                                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                            {project.stats.map((stat) => (
                                                <div key={stat.label} style={{
                                                    background: "#FFF3D6",
                                                    border: "0.5px solid #FAC775",
                                                    padding: "4px 10px",
                                                    borderRadius: "6px",
                                                    textAlign: "center",
                                                }}>
                                                    <div style={{ fontSize: "11px", fontWeight: 700, color: "#854F0B" }}>{stat.value}</div>
                                                    <div style={{ fontSize: "9px", color: "#aaa" }}>{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty state */}
                        {filtered.length === 0 && (
                            <div style={{ textAlign: "center", padding: "48px", color: "#aaa" }}>
                                <div style={{ fontSize: "32px", marginBottom: "12px" }}>☀</div>
                                <div style={{ fontSize: "14px" }}>No projects found in this category yet.</div>
                            </div>
                        )}

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
                                <pattern id="cta-proj" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#cta-proj)" />
                        </svg>
                    </div>
                    <div style={{ position: "absolute", right: "-60px", top: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <h2 style={{ fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                            Have a Project in Mind?
                        </h2>
                        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.88)", marginBottom: "24px" }}>
                            Talk to our experts and get a free site assessment — no obligations.
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