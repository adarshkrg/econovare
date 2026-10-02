"use client";

/* ============================================================
   Solar ROI Calculator — interactive block only
   - Quick mode: single month units input
   - Detailed mode: 12 month grid input
   - Compares 1kW / 2kW / 3kW systems using OERC domestic slabs
   - Rendered inside /solar-roi-calculator page.tsx, which
     provides Navbar, Footer, FAQ and surrounding content
   - NOTE: SYSTEM_COST_PER_KW below is confirmed at Rs 65,000/kW
   ============================================================ */

import { useState } from "react";

/* ---------- Constants (edit these to update calculator logic) ---------- */

// OERC domestic telescopic slab rates, verified from real TPCODL bills (Jul 2026)
// Applies state-wide across TPCODL, TPWODL, TPSODL, TPNODL (confirmed same schedule)
const SLABS = [
  { upto: 50, rate: 2.9 },
  { upto: 200, rate: 4.7 },
  { upto: 400, rate: 5.7 },
  { upto: Infinity, rate: 6.1 },
];
const ELECTRICITY_DUTY = 0.04; // 4%

// Average solar generation per kW installed, Odisha conditions
const GENERATION_PER_KW_MONTHLY = 120; // units/month per kW

// PM Surya Ghar central subsidy structure
function getSubsidy(kw: number): number {
  if (kw <= 2) return kw * 30000;
  if (kw === 3) return 2 * 30000 + 18000;
  return 78000; // cap
}

// Confirmed system cost per kW
const SYSTEM_COST_PER_KW = 65000;

// CO2 saved per unit generated (approx grid displacement factor for India)
const CO2_PER_UNIT_KG = 0.82;

const SYSTEM_SIZES = [1, 2, 3];

/* ---------- Slab-based bill calculation ---------- */
function calculateBill(units: number): number {
  let remaining = units;
  let prevCap = 0;
  let total = 0;
  for (const slab of SLABS) {
    const slabUnits = Math.min(remaining, slab.upto - prevCap);
    if (slabUnits <= 0) break;
    total += slabUnits * slab.rate;
    remaining -= slabUnits;
    prevCap = slab.upto;
    if (remaining <= 0) break;
  }
  return total * (1 + ELECTRICITY_DUTY);
}

/* ---------- Result type ---------- */
interface SystemResult {
  kw: number;
  monthlySavings: number;
  paybackYears: number;
  co2PerYear: number;
}

function computeResults(avgMonthlyUnits: number): SystemResult[] {
  const billBefore = calculateBill(avgMonthlyUnits);

  return SYSTEM_SIZES.map((kw) => {
    const generated = kw * GENERATION_PER_KW_MONTHLY;
    const unitsAfter = Math.max(0, avgMonthlyUnits - generated);
    const billAfter = calculateBill(unitsAfter);
    const monthlySavings = Math.max(0, billBefore - billAfter);

    const systemCost = kw * SYSTEM_COST_PER_KW;
    const subsidy = getSubsidy(kw);
    const netCost = Math.max(0, systemCost - subsidy);
    const annualSavings = monthlySavings * 12;
    const paybackYears = annualSavings > 0 ? netCost / annualSavings : 0;

    const co2PerYear = generated * 12 * CO2_PER_UNIT_KG;

    return {
      kw,
      monthlySavings: Math.round(monthlySavings),
      paybackYears: Math.round(paybackYears * 10) / 10,
      co2PerYear: Math.round(co2PerYear),
    };
  });
}

/* ---------- Component ---------- */
export default function SolarRoiCalculatorClient() {
  const [mode, setMode] = useState<"quick" | "detailed">("quick");
  const [quickUnits, setQuickUnits] = useState("");
  const [monthlyUnits, setMonthlyUnits] = useState<string[]>(Array(12).fill(""));
  const [results, setResults] = useState<SystemResult[] | null>(null);
  const [error, setError] = useState("");

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  function handleCalculate() {
    setError("");

    if (mode === "quick") {
      const val = parseFloat(quickUnits);
      if (!quickUnits || isNaN(val) || val <= 0) {
        setError("Enter a valid number of units to continue.");
        setResults(null);
        return;
      }
      setResults(computeResults(val));
    } else {
      const nums = monthlyUnits.map((v) => parseFloat(v));
      const validCount = nums.filter((n) => !isNaN(n) && n > 0).length;
      if (validCount < 12) {
        setError("Enter units for all 12 months to continue.");
        setResults(null);
        return;
      }
      const avg = nums.reduce((a, b) => a + b, 0) / 12;
      setResults(computeResults(avg));
    }
  }

  function updateMonth(index: number, value: string) {
    const updated = [...monthlyUnits];
    updated[index] = value;
    setMonthlyUnits(updated);
  }

  return (
    <div className="section-pad" style={{ background: "#F7F2E9" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)" }}>

        {/* Pill badge + heading */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
            Solar ROI Calculator
          </div>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#1a1a1a", margin: "8px 0" }}>
            See What Solar Could Save You in Odisha
          </h1>
          <p style={{ fontSize: "14px", color: "#555", maxWidth: "460px", margin: "0 auto", textAlign: "center", lineHeight: 1.7 }}>
            Compare 1kW, 2kW and 3kW rooftop systems using real OERC domestic tariff rates verified from an actual Odisha electricity bill.
          </p>
        </div>

        {/* Mode toggle */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "20px" }}>
          <button
            onClick={() => { setMode("quick"); setResults(null); setError(""); }}
            style={{
              background: mode === "quick" ? "#1a1a1a" : "#fff",
              color: mode === "quick" ? "#fff" : "#1a1a1a",
              border: mode === "quick" ? "none" : "0.5px solid #E8E2D8",
              borderRadius: "8px",
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Quick mode
          </button>
          <button
            onClick={() => { setMode("detailed"); setResults(null); setError(""); }}
            style={{
              background: mode === "detailed" ? "#1a1a1a" : "#fff",
              color: mode === "detailed" ? "#fff" : "#1a1a1a",
              border: mode === "detailed" ? "none" : "0.5px solid #E8E2D8",
              borderRadius: "8px",
              padding: "8px 20px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Detailed mode
          </button>
        </div>

        {/* Input card */}
        <div
          style={{
            background: "#fff",
            borderRadius: "14px",
            padding: "24px",
            maxWidth: mode === "quick" ? "420px" : "560px",
            margin: "0 auto 32px",
            border: "0.5px solid #E8E2D8",
          }}
        >
          {mode === "quick" ? (
            <>
              <label style={{ fontSize: "13px", color: "#777", display: "block", marginBottom: "6px" }}>
                Monthly units consumed (from your bill)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={quickUnits}
                onChange={(e) => setQuickUnits(e.target.value)}
                placeholder="e.g. 283"
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "0.5px solid #E8E2D8",
                  fontSize: "15px",
                }}
              />
            </>
          ) : (
            <>
              <p style={{ fontSize: "13px", color: "#777", marginBottom: "12px" }}>
                Enter units consumed for each month, from your last 12 bills
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
                {months.map((m, i) => (
                  <div key={m}>
                    <label style={{ fontSize: "12px", color: "#777", display: "block", marginBottom: "4px" }}>
                      {m}
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={monthlyUnits[i]}
                      onChange={(e) => updateMonth(i, e.target.value)}
                      placeholder="0"
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        padding: "8px",
                        borderRadius: "8px",
                        border: "0.5px solid #E8E2D8",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {error && (
            <p style={{ color: "#854F0B", fontSize: "13px", marginTop: "10px" }}>{error}</p>
          )}

          <button
            onClick={handleCalculate}
            style={{
              width: "100%",
              marginTop: "16px",
              background: "#FDB92E",
              color: "#412402",
              border: "none",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Calculate savings
          </button>
        </div>

        {/* Results cards */}
        {results && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {/* Order: 1kW, 3kW (most popular, center), 2kW */}
            {[results[0], results[2], results[1]].map((r) => {
              const isPopular = r.kw === 3;
              return (
                <div
                  key={r.kw}
                  style={{
                    background: "#fff",
                    borderRadius: "14px",
                    padding: "20px",
                    position: "relative",
                    border: isPopular ? "2px solid #F5A000" : "0.5px solid #E8E2D8",
                    borderTop: isPopular ? "2px solid #F5A000" : "3px solid #FDB92E",
                  }}
                >
                  {isPopular && (
                    <span
                      style={{
                        position: "absolute",
                        top: "-12px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#FDB92E",
                        color: "#412402",
                        fontSize: "11px",
                        fontWeight: 500,
                        padding: "4px 12px",
                        borderRadius: "10px",
                      }}
                    >
                      Most popular
                    </span>
                  )}
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a1a", margin: isPopular ? "10px 0 12px" : "0 0 12px" }}>
                    {r.kw}kW system
                  </p>

                  <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>Monthly savings</p>
                  <p style={{ fontSize: "20px", fontWeight: 500, color: "#1a1a1a", margin: "2px 0 10px" }}>
                    Rs {r.monthlySavings.toLocaleString("en-IN")}
                  </p>

                  <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>Payback period</p>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a1a", margin: "2px 0 10px" }}>
                    {r.paybackYears} years
                  </p>

                  <p style={{ fontSize: "12px", color: "#777", margin: 0 }}>CO2 saved per year</p>
                  <p style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a1a", margin: "2px 0" }}>
                    {r.co2PerYear.toLocaleString("en-IN")} kg
                  </p>
                </div>
              );
            })}
          </div>
        )}

        <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", marginTop: "24px" }}>
          Rates based on OERC common domestic tariff, applicable across TPCODL, TPWODL, TPSODL and TPNODL
        </p>
      </div>
    </div>
  );
}
