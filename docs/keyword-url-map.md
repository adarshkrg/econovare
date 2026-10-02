# Green Filament — Keyword to URL Map

Single source of truth before creating any new page. Check this file first to avoid keyword cannibalization. Update the Status column as pages move from Planned to Ready to Live.

Slug convention: short and readable, keywords in title/H1/content instead of the URL. Example: `/rooftop-solar-cuttack`, not `/rooftop-solar-installation-cuttack`.

| Status | Primary Keyword | Secondary Keywords | URL | Intent | Notes |
|---|---|---|---|---|---|
| ✅ Live | Solar Company Odisha | Solar Panel Company Odisha, Solar Energy Company Odisha | `/solar-company-odisha` | Company | Flagship page. Do not duplicate with city-level "Solar Company in X" pages. |
| ✅ Live | Rooftop Solar Installation Bhubaneswar | Solar Rooftop Bhubaneswar, Solar Panel Installation Bhubaneswar | `/rooftop-solar-bhubaneswar` | Service + City | |
| 🟡 Ready | Rooftop Solar Installation Cuttack | Rooftop Solar Cuttack | `/rooftop-solar-cuttack` | Service + City | Pending deployment |
| ✅ Live | Rooftop Solar (pillar) | On-Grid Off-Grid Hybrid Solar, Rooftop Solar Odisha | `/rooftop-solar` | Product/Pillar | Statewide pillar page for rooftop content. Feeds city pages (Bhubaneswar, Cuttack, Puri). Supersedes earlier "skip — redundant" decision. |
| ✅ Live | Solar ROI Calculator Odisha | Odisha Electricity Tariff Solar Savings, Solar Payback Period Odisha | `/solar-roi-calculator` | Tool/Commercial | OERC common domestic tariff confirmed same across TPCODL, TPWODL, TPSODL, TPNODL. Rates verified from real TPCODL bills, valid state-wide. |
| ✅ Live | Solar Sizing Calculator | Solar System Size Calculator Odisha, kW Calculator Rooftop Solar | `/solar-sizing-calculator` | Tool/Commercial | Distinguishes from ROI calculator — sizing vs savings. |
| 🔴 Planned | Rooftop Solar Installation Puri | Rooftop Solar Puri | `/rooftop-solar-puri` | Service + City | Next up |
| ✅ Live | PM Surya Ghar Odisha | PM Surya Ghar subsidy Odisha | `/pm-surya-ghar-odisha` | Informational-Commercial | Scheme-focused page. Live. |
| ✅ Live | Our Services | Solar Site Assessment, Solar AMC Odisha, Solar Subsidy Advisory | `/services` | Company/Process | End-to-end process page (assessment → design → install → maintenance). Canonical bug: currently points to homepage, needs fix to `/services`. |
| ⚪ On Hold | Solar EPC Company Odisha | — | — | — | Risk: overlaps with flagship company page. Expand existing page with an EPC section instead of new page. |
| ⚪ On Hold | Solar Street Light Manufacturer Odisha | — | — | — | Check if `/solar-street-lighting` already covers this intent before building separately |
| ⚪ On Hold | Rooftop Solar Odisha (statewide) | — | — | — | Superseded — see `/rooftop-solar` row above, now Live. |
| 🔴 Planned | Solar Water Pump (pillar) | — | `/solar-water-pump` | Product/Service | Already live — treat as pillar page for pump-related content |
| 🔴 Planned | BLDC Solar Water Pump | — | `/bldc-solar-water-pump` | Product-specific | Tier 2 |
| ✅ Live | PM Kusum Solar Water Pump Odisha | — | `/pm-kusum-odisha` | Scheme-focused | Live. |
| ✅ Live | Solar High Mast Light | — | `/solar-high-mast-light` | Product | Live. Corrected slug — was previously listed as /high-mast-lighting, that URL doesn't exist. |
| 🔴 Planned | Solar Drinking Water System | — | — | Product | Tier 2 |
| 🔴 Planned | Solar Cold Storage | — | — | Product | Tier 3 — also referenced on homepage Products section, currently links to /connect only |
| 🔴 Planned | Solar CCTV Tower | — | — | Product | Tier 3, new addition |
| 🔴 Planned | Solar Home Lighting System | — | — | Product | Tier 3, new addition |
| 🔴 Planned | Solar Street Light AMC & Maintenance | — | — | Service | Tier 3 |
| ✅ Live | ALMM Cell Mandate Solar 2026 | ALMM List-II Odisha, PM Surya Ghar ALMM compliance | `/blogs/almm-cell-mandate-2026-odisha` | Blog/Informational | Government policy blog with MNRE citations. |
| ✅ Live | Solar Street Lights Rural Odisha | Rural Solar Lighting, Solar Street Light Impact | `/blogs/solar-street-lights-rural-india` | Blog/Informational | Street Lighting category. Covers rural street light impact/install angle — check before any future street light page. |
| ✅ Live | Solar Street Light Troubleshooting | Solar Street Light Not Working, Solar Light Switch Off | `/blogs/why-solar-street-light-stops-working-at-night` | Blog/Informational | Street Lighting category. Covers troubleshooting angle. |
| ✅ Live | Rooftop Solar Electricity Bill Savings | Solar Bill Reduction Odisha | `/blogs/rooftop-solar-vs-electricity-bills-2026` | Blog/Informational | Rooftop Solar category |
| ✅ Live | Solar Water Systems Rural Villages | Solar Drinking Water Odisha | `/blogs/solar-water-systems-rural-villages` | Blog/Informational | Solar Water category |
| ✅ Live | Solar Cooking Battery Free | Solar Cooking System Odisha | `/blogs/future-of-solar-cooking-battery-free` | Blog/Informational | Solar Cooking category |
| ✅ Live | 3kW Solar Price Odisha After Subsidy | 3kW Solar Cost Odisha 2026 | `/blogs/3kw-solar-price-odisha-after-subsidy-2026` | Blog/Informational | Rooftop Solar category |
| ✅ Live | TPCODL Net Metering Process 2026 | Net Metering Odisha | `/blogs/tpcodl-net-metering-process-2026` | Blog/Informational | Rooftop Solar category |
| ✅ Live | Monsoon Solar Generation Odisha | Solar Generation Rainy Season | `/blogs/monsoon-solar-generation-odisha` | Blog/Informational | Rooftop Solar category. Two-way linked with ROI Calculator. |

---

## Next sprint build order

1. Rooftop Solar Puri

## After Tier 1 ships — pause new pages, strengthen what exists

- Internal links from blogs and related service pages to these new pages
- Breadcrumbs
- Cross-links between city pages (Bhubaneswar ↔ Cuttack ↔ Puri)
- Schema + FAQ on every new page (already standard practice going forward)
- Strong CTA on every page