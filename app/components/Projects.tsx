"use client";

/* ============================================================
   PROJECTS SECTION — Homepage
   - Full width story slider
   - Photo + stats on left, story on right
   - Challenge → Solution → Result format
   - Arrows + dots centered below text
   - Fade animation on story change
   - Data imported from app/data/projects.ts
   - Fully responsive
   ============================================================ */

import { useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { homepageProjects } from "../data/projects";

export default function Projects() {

  /* --- Current story index --- */
  const [current, setCurrent] = useState(0);

  /* --- Navigate between stories --- */
  function navigate(dir: number) {
    setCurrent((prev) => (prev + dir + homepageProjects.length) % homepageProjects.length);
  }

  const project = homepageProjects[current];

  return (
    <>
      {/* ============================================================
          PROJECTS STYLES
          ============================================================ */}
      <style>{`

        /* ── Story step row ── */
        .story-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
        }
        .story-step:last-child { margin-bottom: 0; }

        /* ── Step icon ── */
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

        /* ── Navigation arrow button ── */
        .p-arrow {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          border: 1.5px solid #E8E2D8;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          color: #1a1a1a;
          flex-shrink: 0;
        }
        .p-arrow:hover {
          background: #FDB92E;
          border-color: #FDB92E;
          color: #ffffff;
        }

        /* ── Story fade-in animation ── */
        @keyframes storyFade {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .story-animate {
          animation: storyFade 0.4s ease forwards;
        }

        /* ── Responsive grid ── */
        .project-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

      <section id="projects" style={{
        background: "#ffffff",
        padding: "clamp(60px, 8vw, 100px) 0",
      }}>
        <div style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 clamp(24px, 5vw, 80px)",
        }}>

          {/* ============================================================
              SECTION HEADER
              ============================================================ */}
          <div style={{ textAlign: "center", marginBottom: "40px" }}>

            {/* --- Pill badge --- */}
            <div style={{
              display: "inline-block",
              background: "#FFF3D6",
              border: "0.5px solid #FAC775",
              color: "#854F0B",
              fontSize: "13px",
              fontWeight: 500,
              padding: "4px 14px",
              borderRadius: "20px",
              marginBottom: "14px",
            }}>
              Our Projects
            </div>

            {/* --- Section title --- */}
            <h2 style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 700,
              color: "#1a1a1a",
              marginBottom: "10px",
            }}>
              Stories That Speak For Themselves
            </h2>

            {/* --- Section subtitle --- */}
            <p style={{
              fontSize: "14px",
              color: "#777",
              maxWidth: "420px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}>
              Real projects. Real impact. Delivered across Odisha and beyond.
            </p>

          </div>

          {/* ============================================================
              STORY SLIDER CARD
              - Animates on story change via key prop
              ============================================================ */}
          <div
            key={current}
            className="story-animate"
            style={{
              background: "#fff",
              borderRadius: "16px",
              border: "0.5px solid #E8E2D8",
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
            }}
          >
            <div className="project-grid">

              {/* ============================================================
                  LEFT PANEL — project photo + stats
                  ============================================================ */}
              <div style={{
                position: "relative",
                minHeight: "clamp(280px, 35vw, 420px)",
                background: "#e0e0e0",
              }}>

                {/* --- Project photo --- */}
                <NextImage
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />

                {/* --- Dark gradient overlay --- */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%)",
                }} />

                {/* --- Photo content --- */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "clamp(16px, 3vw, 28px)",
                  zIndex: 1,
                }}>

                  {/* Category badge */}
                  <div style={{
                    display: "inline-block",
                    background: "#FDB92E",
                    color: "#412402",
                    fontSize: "10px",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    marginBottom: "10px",
                  }}>
                    {project.category}
                  </div>

                  {/* Project title */}
                  <div style={{
                    fontSize: "clamp(16px, 2vw, 22px)",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "4px",
                  }}>
                    {project.title}
                  </div>

                  {/* Location */}
                  <div style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.75)",
                    marginBottom: "18px",
                  }}>
                    📍 {project.location} · {project.year}
                  </div>

                  {/* Stats row */}
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    {project.stats.map((stat) => (
                      <div key={stat.label} style={{
                        background: "rgba(255,255,255,0.15)",
                        border: "0.5px solid rgba(255,255,255,0.2)",
                        padding: "8px 14px",
                        borderRadius: "8px",
                        textAlign: "center",
                      }}>
                        <div style={{
                          fontSize: "clamp(14px, 1.8vw, 18px)",
                          fontWeight: 700,
                          color: "#fff",
                        }}>
                          {stat.value}
                        </div>
                        <div style={{
                          fontSize: "9px",
                          color: "rgba(255,255,255,0.7)",
                          marginTop: "2px",
                        }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* ============================================================
                  RIGHT PANEL — story text + navigation
                  ============================================================ */}
              <div style={{
                padding: "clamp(20px, 3vw, 36px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}>

                <div>

                  {/* --- Project story pill --- */}
                  <div style={{
                    display: "inline-block",
                    background: "#FFF3D6",
                    border: "0.5px solid #FAC775",
                    color: "#854F0B",
                    fontSize: "10px",
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: "20px",
                    marginBottom: "10px",
                  }}>
                    Project Story
                  </div>

                  {/* --- Story title --- */}
                  <div style={{
                    fontSize: "clamp(15px, 1.8vw, 18px)",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    marginBottom: "24px",
                    lineHeight: 1.35,
                  }}>
                    {project.storyTitle}
                  </div>

                  {/* --- The Challenge --- */}
                  <div className="story-step">
                    <div className="step-icon" style={{ background: "#ffe4e6", color: "#be123c" }}>⚡</div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#be123c", marginBottom: "4px" }}>
                        The Challenge
                      </div>
                      <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7 }}>
                        {project.challenge}
                      </div>
                    </div>
                  </div>

                  {/* --- Our Solution --- */}
                  <div className="story-step">
                    <div className="step-icon" style={{ background: "#FFF3D6", color: "#854F0B" }}>☀</div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#854F0B", marginBottom: "4px" }}>
                        Our Solution
                      </div>
                      <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7 }}>
                        {project.solution}
                      </div>
                    </div>
                  </div>

                  {/* --- The Result --- */}
                  <div className="story-step">
                    <div className="step-icon" style={{ background: "#d1fae5", color: "#065f46" }}>✓</div>
                    <div>
                      <div style={{ fontSize: "11px", fontWeight: 700, color: "#065f46", marginBottom: "4px" }}>
                        The Result
                      </div>
                      <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.7 }}>
                        {project.result}
                      </div>
                    </div>
                  </div>

                </div>

                {/* ============================================================
                    NAVIGATION — arrows + dots
                    ============================================================ */}
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "12px",
                  marginTop: "24px",
                  paddingTop: "20px",
                  borderTop: "0.5px solid #F0EBE0",
                }}>

                  {/* --- Left arrow --- */}
                  <button className="p-arrow" onClick={() => navigate(-1)} aria-label="Previous project">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                  </button>

                  {/* --- Dots --- */}
                  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    {homepageProjects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to project ${i + 1}`}
                        style={{
                          width: i === current ? "20px" : "8px",
                          height: "8px",
                          borderRadius: i === current ? "4px" : "50%",
                          background: i === current ? "#FDB92E" : "#E8E2D8",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.3s",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>

                  {/* --- Right arrow --- */}
                  <button className="p-arrow" onClick={() => navigate(1)} aria-label="Next project">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>

                </div>

              </div>
            </div>
          </div>

          {/* ============================================================
              VIEW ALL PROJECTS CTA
              ============================================================ */}
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <Link href="/projects" style={{
              display: "inline-block",
              border: "1.5px solid #FDB92E",
              color: "#854F0B",
              fontSize: "14px",
              fontWeight: 700,
              padding: "12px 32px",
              borderRadius: "6px",
              textDecoration: "none",
            }}>
              View All Projects →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}