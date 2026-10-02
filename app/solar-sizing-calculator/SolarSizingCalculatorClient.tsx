"use client";

import React, { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ============================================================
   TYPES
   ============================================================ */

type SystemType = "on-grid" | "off-grid" | "hybrid";
type Mode = "quick" | "detailed";
type BackupLoadMode = "all" | "essential";

interface ApplianceType {
  name: string;
  watts: number;
}

interface Appliance {
  id: number;
  category: string;
  type: string;
  quantity: number;
  hours: number;
  essential: boolean;
}

interface CalculationResult {
  dailyEnergy: number;
  solarKW: number;
  panelCount: number;
  panelCapacity: number;
  inverterKW: number;
  batteryKWh: number;
  batteryAh12V: number;
  batteryCount12V100Ah: number;
  backupHours: number;
  backupLoadKW: number;
}

interface Faq {
  q: string;
  a: string;
}

/* ============================================================
   STATES — ALPHABETICAL
   ============================================================ */

const STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

/* ============================================================
   SOLAR RESOURCE FACTORS
   ============================================================ */

const STATE_SOLAR_FACTOR: Record<string, number> = {
  "Andaman and Nicobar Islands": 4.5, "Andhra Pradesh": 4.8, "Arunachal Pradesh": 4.0, Assam: 4.1,
  Bihar: 4.3, Chandigarh: 4.7, Chhattisgarh: 4.8, "Dadra and Nagar Haveli and Daman and Diu": 4.8,
  Delhi: 4.8, Goa: 4.7, Gujarat: 5.2, Haryana: 4.9, "Himachal Pradesh": 4.5, "Jammu and Kashmir": 4.5,
  Jharkhand: 4.6, Karnataka: 4.8, Kerala: 4.4, Ladakh: 5.3, Lakshadweep: 4.5, "Madhya Pradesh": 5.0,
  Maharashtra: 4.9, Manipur: 4.1, Meghalaya: 4.0, Mizoram: 4.2, Nagaland: 4.1, Odisha: 4.6,
  Puducherry: 4.6, Punjab: 4.8, Rajasthan: 5.3, Sikkim: 4.0, "Tamil Nadu": 4.9, Telangana: 4.9,
  Tripura: 4.2, "Uttar Pradesh": 4.7, Uttarakhand: 4.5, "West Bengal": 4.2,
};

/* ============================================================
   PANEL
   ============================================================ */

const PANEL_WATT = 550;

/* ============================================================
   APPLIANCES
   ============================================================ */

const APPLIANCES: Record<string, ApplianceType[]> = {
  Fan: [
    { name: "BLDC Fan", watts: 30 },
    { name: "Standard Fan", watts: 70 },
    { name: "High-Speed Fan", watts: 100 },
  ],
  "LED Bulb": [
    { name: "10W LED", watts: 10 },
    { name: "12W LED", watts: 12 },
    { name: "15W LED", watts: 15 },
    { name: "18W LED", watts: 18 },
  ],
  TV: [
    { name: "LED TV", watts: 100 },
    { name: "Large LED TV", watts: 150 },
  ],
  Refrigerator: [
    { name: "Small Refrigerator", watts: 120 },
    { name: "Standard Refrigerator", watts: 180 },
    { name: "Large Refrigerator", watts: 250 },
  ],
  "Water Pump": [
    { name: "0.5 HP Pump", watts: 375 },
    { name: "1 HP Pump", watts: 750 },
  ],
  Computer: [
    { name: "Desktop Computer", watts: 200 },
    { name: "Laptop", watts: 60 },
  ],
  "Air Conditioner": [
    { name: "1 Ton AC", watts: 1200 },
    { name: "1.5 Ton AC", watts: 1600 },
    { name: "2 Ton AC", watts: 2000 },
  ],
  "Washing Machine": [
    { name: "Standard Washing Machine", watts: 500 },
    { name: "Front Load Washing Machine", watts: 700 },
  ],
};

/* ============================================================
   HELPERS
   ============================================================ */

function roundUp(value: number, step: number) {
  return Math.ceil(value / step) * step;
}

function getAppliance(category: string, type: string) {
  return (
    APPLIANCES[category]?.find((item) => item.name === type) || APPLIANCES[category]?.[0]
  );
}

/* ============================================================
   CALCULATION
   ============================================================ */

function calculateSystem(
  dailyEnergy: number,
  state: string,
  systemType: SystemType,
  backupHours: number,
  backupLoadKW: number
): CalculationResult {
  const solarFactor = STATE_SOLAR_FACTOR[state] || 4.5;

  /* Planning efficiency: accounts for typical system losses. */
  const requiredSolarKW = dailyEnergy / (solarFactor * 0.8);
  const solarKW = Math.max(0.55, Math.ceil(requiredSolarKW * 10) / 10);
  const panelCount = Math.max(1, Math.ceil((solarKW * 1000) / PANEL_WATT));
  const actualSolarKW = (panelCount * PANEL_WATT) / 1000;

  /* Initial inverter sizing. */
  let inverterKW =
    systemType === "on-grid"
      ? Math.max(1, roundUp(actualSolarKW * 0.9, 0.5))
      : Math.max(1, roundUp(actualSolarKW, 0.5));

  let batteryKWh = 0;
  let batteryAh12V = 0;
  let batteryCount12V100Ah = 0;

  if (systemType !== "on-grid") {
    /*
     * Battery backup energy.
     * backupLoadKW: actual load selected for battery backup
     * backupHours: requested hours without solar
     * Assumptions: 80% usable battery capacity, 90% inverter/system efficiency
     */
    const backupEnergy = backupLoadKW * backupHours;
    batteryKWh = backupEnergy / (0.8 * 0.9);
    batteryKWh = Math.max(1, Math.ceil(batteryKWh * 10) / 10);

    /* Convert energy to a 12V Ah equivalent. */
    batteryAh12V = Math.ceil((batteryKWh * 1000) / 12);

    /* Approximate number of 12V 100Ah batteries. */
    batteryCount12V100Ah = Math.max(1, Math.ceil(batteryAh12V / 100));
  }

  return {
    dailyEnergy, solarKW: actualSolarKW, panelCount, panelCapacity: PANEL_WATT,
    inverterKW, batteryKWh, batteryAh12V, batteryCount12V100Ah, backupHours, backupLoadKW,
  };
}

/* ============================================================
   MAIN COMPONENT
   ============================================================ */

export default function SolarSizingCalculatorClient({ faqs = [] as Faq[] }: { faqs?: Faq[] }) {
  const [state, setState] = useState("");
  const [systemType, setSystemType] = useState<SystemType>("on-grid");
  const [mode, setMode] = useState<Mode>("quick");
  const [quickLoad, setQuickLoad] = useState("");
  const [quickHours, setQuickHours] = useState("");
  const [backupHours, setBackupHours] = useState("4");
  const [backupLoadMode, setBackupLoadMode] = useState<BackupLoadMode>("all");
  const [appliances, setAppliances] = useState<Appliance[]>([
    { id: 1, category: "Fan", type: "BLDC Fan", quantity: 1, hours: 6, essential: true },
  ]);
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [error, setError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ============================================================
     DETAILED CALCULATIONS
     ============================================================ */

  const totalDetailedEnergy = useMemo(() => {
    return appliances.reduce((total, appliance) => {
      const selected = getAppliance(appliance.category, appliance.type);
      if (!selected) return total;
      return total + (selected.watts * appliance.quantity * appliance.hours) / 1000;
    }, 0);
  }, [appliances]);

  const totalDetailedLoad = useMemo(() => {
    return appliances.reduce((total, appliance) => {
      const selected = getAppliance(appliance.category, appliance.type);
      if (!selected) return total;
      return total + selected.watts * appliance.quantity;
    }, 0);
  }, [appliances]);

  const essentialDetailedLoad = useMemo(() => {
    return appliances.reduce((total, appliance) => {
      if (!appliance.essential) return total;
      const selected = getAppliance(appliance.category, appliance.type);
      if (!selected) return total;
      return total + selected.watts * appliance.quantity;
    }, 0);
  }, [appliances]);

  /* ============================================================
     HANDLERS
     ============================================================ */

  function resetResults() {
    setResults(null);
    setError("");
  }

  function handleSystemChange(type: SystemType) {
    setSystemType(type);
    resetResults();
  }

  function handleModeChange(newMode: Mode) {
    setMode(newMode);
    resetResults();
  }

  function addAppliance() {
    const firstCategory = Object.keys(APPLIANCES)[0];
    setAppliances((current) => [
      ...current,
      { id: Date.now(), category: firstCategory, type: APPLIANCES[firstCategory][0].name, quantity: 1, hours: 1, essential: true },
    ]);
  }

  function removeAppliance(id: number) {
    setAppliances((current) => current.filter((item) => item.id !== id));
  }

  function updateAppliance(id: number, field: keyof Appliance, value: string | number | boolean) {
    setAppliances((current) =>
      current.map((item) => {
        if (item.id !== id) return item;
        if (field === "category") {
          const category = String(value);
          const firstType = APPLIANCES[category][0].name;
          return { ...item, category, type: firstType };
        }
        return { ...item, [field]: value };
      })
    );
  }

  /* ============================================================
     CALCULATE
     ============================================================ */

  function handleCalculate() {
    setError("");
    setResults(null);

    if (!state) {
      setError("Please select your state.");
      return;
    }

    let dailyEnergy = 0;
    let peakLoadKW = 0;
    let backupLoadKW = 0;

    if (mode === "quick") {
      const load = Number(quickLoad);
      const hours = Number(quickHours);

      if (!load || load <= 0) {
        setError("Enter your total load in watts.");
        return;
      }
      if (!hours || hours <= 0 || hours > 24) {
        setError("Enter usage between 1 and 24 hours per day.");
        return;
      }

      dailyEnergy = (load * hours) / 1000;
      peakLoadKW = load / 1000;
      /* In quick mode the complete entered load is considered the backup load. */
      backupLoadKW = peakLoadKW;
    } else {
      if (appliances.length === 0) {
        setError("Add at least one appliance.");
        return;
      }
      if (totalDetailedEnergy <= 0) {
        setError("Enter valid appliance details.");
        return;
      }

      dailyEnergy = totalDetailedEnergy;
      peakLoadKW = totalDetailedLoad / 1000;
      backupLoadKW = backupLoadMode === "essential" ? essentialDetailedLoad / 1000 : totalDetailedLoad / 1000;

      if (backupLoadKW <= 0) {
        setError("Select at least one appliance as essential.");
        return;
      }
    }

    let requestedBackupHours = 0;
    if (systemType !== "on-grid") {
      requestedBackupHours = Number(backupHours);
      if (!requestedBackupHours || requestedBackupHours <= 0 || requestedBackupHours > 24) {
        setError("Choose battery backup between 1 and 24 hours.");
        return;
      }
    }

    const result = calculateSystem(dailyEnergy, state, systemType, requestedBackupHours, backupLoadKW);

    /* Make inverter responsive to actual peak load. */
    result.inverterKW = Math.max(result.inverterKW, roundUp(peakLoadKW * 1.25, 0.5));

    setResults(result);
  }

  const systemDescription: Record<SystemType, string> = {
    "on-grid": "Reduce your electricity bill while staying connected to the grid.",
    "off-grid": "Generate and store your own electricity without depending on the grid.",
    hybrid: "Use solar first, store energy in a battery and keep the grid as backup.",
  };

  /* ============================================================
     RENDER
     ============================================================ */

  return (
    <>
      <Navbar />
      <main>
      {/* HERO + CALCULATOR CARD */}
      <section className="section-pad" style={{ background: "#F7F2E9", padding: "clamp(48px, 7vw, 80px) clamp(20px, 5vw, 80px)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          {/* HERO */}
          <div style={{ textAlign: "center", marginBottom: "26px" }}>
            <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
              Solar Sizing Calculator
            </div>
            <h1 style={{ fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 700, color: "#1a1a1a", margin: "8px 0" }}>
              Find the Right Solar System for Your Needs
            </h1>
            <p style={{ fontSize: "14px", color: "#555", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
              Answer a few simple questions. We&apos;ll estimate the solar panels, inverter and battery capacity you may need.
            </p>
          </div>

          {/* PROGRESS */}
          <div style={{ maxWidth: "720px", margin: "0 auto 24px", display: "flex", justifyContent: "center", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
            {["01 Location", "02 System", "03 Usage", "04 Backup", "05 Result"].map((step, index) => (
              <div key={step} style={{ fontSize: "11px", color: index === 0 ? "#854F0B" : "#999", background: index === 0 ? "#FFF3D6" : "#fff", border: "0.5px solid #E8E2D8", padding: "6px 10px", borderRadius: "20px" }}>
                {step}
              </div>
            ))}
          </div>

          {/* MAIN CARD */}
          <div style={{ background: "#fff", borderRadius: "18px", border: "0.5px solid #E8E2D8", maxWidth: "920px", margin: "0 auto", padding: "clamp(20px, 4vw, 32px)" }}>
            {/* LOCATION */}
            <CalculatorSection number="01" title="Where will your solar system be installed?" description="Solar availability varies by location.">
              <select
                value={state}
                onChange={(e) => { setState(e.target.value); resetResults(); }}
                style={inputStyle}
              >
                <option value="">Select your state</option>
                {STATES.map((item) => (<option key={item} value={item}>{item}</option>))}
              </select>
            </CalculatorSection>

            {/* SYSTEM */}
            <CalculatorSection number="02" title="What type of solar system do you need?" description={systemDescription[systemType]}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "10px" }}>
                {[
                  ["on-grid", "☀️", "On-Grid", "Reduce electricity bills"],
                  ["off-grid", "🔋", "Off-Grid", "Solar + battery"],
                  ["hybrid", "☀️🔋", "Hybrid", "Solar + battery + grid"],
                ].map((item) => {
                  const value = item[0] as SystemType;
                  const active = systemType === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleSystemChange(value)}
                      style={{ textAlign: "left", border: active ? "1.5px solid #F5A000" : "0.5px solid #E8E2D8", background: active ? "#FFF3D6" : "#fff", borderRadius: "12px", padding: "15px", cursor: "pointer" }}
                    >
                      <div style={{ fontSize: "20px", marginBottom: "7px" }}>{item[1]}</div>
                      <div style={{ fontSize: "14px", fontWeight: 600, color: "#1a1a1a" }}>{item[2]}</div>
                      <div style={{ fontSize: "11px", color: "#777", marginTop: "4px" }}>{item[3]}</div>
                    </button>
                  );
                })}
              </div>
            </CalculatorSection>

            {/* USAGE */}
            <CalculatorSection number="03" title="How much electricity do you use?" description="Choose the simple option if you already know your total load.">
              <div style={{ display: "flex", gap: "8px", marginBottom: "18px" }}>
                {[["quick", "Quick"], ["detailed", "Detailed"]].map((item) => {
                  const value = item[0] as Mode;
                  const active = mode === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handleModeChange(value)}
                      style={{ background: active ? "#1a1a1a" : "#fff", color: active ? "#fff" : "#1a1a1a", border: active ? "none" : "0.5px solid #E8E2D8", borderRadius: "8px", padding: "8px 20px", fontSize: "13px", cursor: "pointer" }}
                    >
                      {item[1]}
                    </button>
                  );
                })}
              </div>

              {mode === "quick" && (
                <div style={{ background: "#FAFAFA", borderRadius: "12px", padding: "18px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
                    <Field label="Total load" suffix="W" value={quickLoad} placeholder="e.g. 1000" onChange={setQuickLoad} />
                    <Field label="How long do you use it each day?" suffix="hours" value={quickHours} placeholder="e.g. 8" onChange={setQuickHours} />
                  </div>
                  <p style={{ fontSize: "11px", color: "#888", margin: "12px 0 0" }}>
                    Don&apos;t know your total load? Switch to Detailed mode and add your appliances.
                  </p>
                </div>
              )}

              {mode === "detailed" && (
                <div style={{ background: "#FAFAFA", borderRadius: "12px", padding: "18px" }}>
                  {appliances.map((appliance) => {
                    const options = APPLIANCES[appliance.category] || [];
                    return (
                      <div key={appliance.id} style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "10px", padding: "14px", marginBottom: "10px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr 70px 85px 30px", gap: "8px", alignItems: "end" }}>
                          <SmallSelect
                            label="Appliance"
                            value={appliance.category}
                            onChange={(value) => updateAppliance(appliance.id, "category", value)}
                            options={Object.keys(APPLIANCES).map((category) => ({ label: category, value: category }))}
                          />
                          <SmallSelect
                            label="Type"
                            value={appliance.type}
                            onChange={(value) => updateAppliance(appliance.id, "type", value)}
                            options={options.map((option) => ({ label: option.name + " — " + option.watts + "W", value: option.name }))}
                          />
                          <SmallNumber label="Qty" value={appliance.quantity} onChange={(value) => updateAppliance(appliance.id, "quantity", Math.max(1, value))} />
                          <SmallNumber label="Hours/day" value={appliance.hours} step="0.5" onChange={(value) => updateAppliance(appliance.id, "hours", Math.max(0.5, value))} />
                          <button
                            type="button"
                            aria-label="Remove appliance"
                            onClick={() => removeAppliance(appliance.id)}
                            style={{ border: "none", background: "transparent", color: "#999", cursor: "pointer", fontSize: "18px" }}
                          >×</button>
                        </div>

                        {systemType !== "on-grid" && (
                          <label style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px", fontSize: "11px", color: "#777" }}>
                            <input
                              type="checkbox"
                              checked={appliance.essential}
                              onChange={(e) => updateAppliance(appliance.id, "essential", e.target.checked)}
                            />
                            Keep this appliance running during battery backup
                          </label>
                        )}
                      </div>
                    );
                  })}

                  <button
                    type="button"
                    onClick={addAppliance}
                    style={{ background: "#fff", border: "0.5px solid #E8E2D8", color: "#555", borderRadius: "8px", padding: "9px 14px", fontSize: "12px", cursor: "pointer" }}
                  >
                    + Add another appliance
                  </button>

                  <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "0.5px solid #E8E2D8", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
                    <span style={{ fontSize: "12px", color: "#777" }}>Estimated daily energy</span>
                    <strong style={{ fontSize: "14px" }}>{totalDetailedEnergy.toFixed(2)} kWh/day</strong>
                  </div>
                </div>
              )}
            </CalculatorSection>

            {/* BACKUP */}
            {systemType !== "on-grid" && (
              <CalculatorSection number="04" title="When sunlight is unavailable" description="Tell us how long your battery should keep your selected loads running.">
                <div style={{ background: "#FFF9ED", border: "0.5px solid #F6D58C", borderRadius: "12px", padding: "18px" }}>
                  <Field label="How many hours of battery backup do you need?" suffix="hours" value={backupHours} placeholder="e.g. 4" onChange={setBackupHours} />

                  {mode === "detailed" && (
                    <div style={{ marginTop: "18px" }}>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "#444", margin: "0 0 8px" }}>What should the battery keep running?</p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "8px" }}>
                        <button
                          type="button"
                          onClick={() => setBackupLoadMode("all")}
                          style={{ textAlign: "left", padding: "12px", border: backupLoadMode === "all" ? "1.5px solid #F5A000" : "0.5px solid #E8E2D8", background: backupLoadMode === "all" ? "#FFF3D6" : "#fff", borderRadius: "9px", cursor: "pointer" }}
                        >
                          <strong style={{ fontSize: "13px" }}>All selected loads</strong>
                          <div style={{ fontSize: "11px", color: "#777", marginTop: "4px" }}>Battery supports everything you selected.</div>
                        </button>
                        <button
                          type="button"
                          onClick={() => setBackupLoadMode("essential")}
                          style={{ textAlign: "left", padding: "12px", border: backupLoadMode === "essential" ? "1.5px solid #F5A000" : "0.5px solid #E8E2D8", background: backupLoadMode === "essential" ? "#FFF3D6" : "#fff", borderRadius: "9px", cursor: "pointer" }}
                        >
                          <strong style={{ fontSize: "13px" }}>Essential loads only</strong>
                          <div style={{ fontSize: "11px", color: "#777", marginTop: "4px" }}>Only appliances marked essential use the battery.</div>
                        </button>
                      </div>
                    </div>
                  )}

                  <p style={{ fontSize: "11px", color: "#777", lineHeight: 1.6, margin: "14px 0 0" }}>
                    Example: 4 hours means the battery should be able to power the selected backup loads for approximately four hours when solar power is unavailable.
                  </p>
                </div>
              </CalculatorSection>
            )}

            {error && (
              <div style={{ background: "#FFF3D6", color: "#854F0B", borderRadius: "8px", padding: "10px 12px", fontSize: "13px", marginBottom: "14px" }}>
                {error}
              </div>
            )}

            <button
              type="button"
              onClick={handleCalculate}
              style={{ width: "100%", background: "#FDB92E", color: "#412402", border: "none", borderRadius: "9px", padding: "14px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}
            >
              Calculate My Solar System
            </button>
          </div>

          {/* RESULTS */}
          {results && (
            <div style={{ maxWidth: "920px", margin: "30px auto 0" }}>
              <div style={{ textAlign: "center", marginBottom: "18px" }}>
                <div style={{ display: "inline-block", background: "#FFF3D6", color: "#854F0B", border: "0.5px solid #FAC775", padding: "4px 14px", borderRadius: "20px", fontSize: "12px" }}>
                  Estimated Requirement
                </div>
                <h2 style={{ fontSize: "clamp(24px, 3vw, 30px)", margin: "10px 0 0", color: "#1a1a1a" }}>
                  Your {systemType === "on-grid" ? "On-Grid" : systemType === "off-grid" ? "Off-Grid" : "Hybrid"} Solar System
                </h2>
                <p style={{ fontSize: "12px", color: "#888", margin: "6px 0 0" }}>
                  {state} • {results.dailyEnergy.toFixed(2)} kWh/day estimated usage
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "14px" }}>
                <ResultCard title="Solar System" value={results.solarKW.toFixed(1) + " kW"} description={results.panelCount + " × " + results.panelCapacity + "W solar panels"} highlight />
                <ResultCard title="Solar Panels" value={String(results.panelCount)} description={results.panelCount + " panels × " + results.panelCapacity + "W"} />
                <ResultCard title="Inverter" value={results.inverterKW.toFixed(1) + " kW"} description={systemType === "on-grid" ? "On-grid inverter" : systemType === "off-grid" ? "Off-grid inverter" : "Hybrid inverter"} />
                {systemType !== "on-grid" && (
                  <ResultCard title="Battery" value={results.batteryCount12V100Ah + " × 12V 100Ah"} description={"Approx. " + results.batteryAh12V + "Ah total battery capacity"} />
                )}
                <ResultCard title="Daily Energy" value={results.dailyEnergy.toFixed(2) + " kWh"} description="Estimated daily energy requirement" />
                {systemType !== "on-grid" && (
                  <ResultCard title="Backup" value={results.backupHours + " hours"} description={"Based on " + results.backupLoadKW.toFixed(2) + " kW backup load"} />
                )}
              </div>

              {systemType !== "on-grid" && (
                <div style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "14px", padding: "18px", marginTop: "16px" }}>
                  <h3 style={{ fontSize: "15px", margin: "0 0 8px", color: "#1a1a1a" }}>🔋 Understanding your battery estimate</h3>
                  <p style={{ margin: 0, fontSize: "12px", lineHeight: 1.7, color: "#666" }}>
                    The battery estimate is based on your requested backup hours and the loads you selected for backup. The calculator uses energy internally and presents an approximate 12V battery-bank equivalent for easier understanding. Final battery voltage, chemistry and configuration should be confirmed during system design.
                  </p>
                </div>
              )}

              <details style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "14px", padding: "16px 18px", marginTop: "16px" }}>
                <summary style={{ cursor: "pointer", fontSize: "13px", fontWeight: 600, color: "#444" }}>How did we calculate this?</summary>
                <div style={{ marginTop: "12px", fontSize: "12px", color: "#666", lineHeight: 1.8 }}>
                  <p><strong>Daily energy:</strong> Based on your selected load and daily usage.</p>
                  <p><strong>Solar capacity:</strong> Estimated using the solar availability for your selected state and typical system losses.</p>
                  <p><strong>Inverter:</strong> Estimated from the required solar capacity and connected load with a design margin.</p>
                  {systemType !== "on-grid" && (
                    <p><strong>Battery:</strong> Estimated from the requested backup duration and the load selected for battery backup.</p>
                  )}
                </div>
              </details>

              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <a
                  href="/connect"
                  style={{ display: "inline-flex", alignItems: "center", background: "#FDB92E", color: "#412402", borderRadius: "30px", padding: "11px 22px", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}
                >
                  Get a Professional Solar Assessment
                </a>
              </div>
            </div>
          )}

          <p style={{ textAlign: "center", fontSize: "11px", color: "#aaa", marginTop: "22px" }}>
            Solar sizing is an initial estimate. Final panel, inverter, battery and installation requirements should be confirmed through a professional site assessment.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-pad" style={{ background: "#fff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
            How It Works
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
            How Our Solar Sizing Calculator Works
          </h2>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, marginBottom: "16px", textAlign: "justify" }}>
            Select your state and choose the type of solar system you want. You can then use Quick mode if you already know your total electrical load, or Detailed mode if you want to calculate your requirement from individual appliances.
          </p>
          <p style={{ fontSize: "15px", color: "#555", lineHeight: 1.9, textAlign: "justify" }}>
            The calculator uses your location and estimated energy requirement to recommend a suitable solar system size. Depending on your selected system, it can estimate the required solar panels, inverter and battery capacity. For a bill-savings estimate on a specific system size, try our <a href="/solar-roi-calculator" style={{ color: "#854F0B", fontWeight: 600 }}>Solar ROI Calculator</a>.
          </p>
        </div>
      </section>

      {/* SYSTEM TYPES */}
      <section className="section-pad" style={{ background: "#FAFAFA", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "16px" }}>
            Choose Your System
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "18px", lineHeight: 1.3 }}>
            Which Solar System Is Right For You?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
            {[
              { title: "On-Grid Solar", text: "Best when you have a reliable electricity grid connection and mainly want to reduce your electricity bill." },
              { title: "Off-Grid Solar", text: "Designed for locations without a reliable grid connection. Solar and batteries provide your electricity." },
              { title: "Hybrid Solar", text: "Combines solar, battery storage and the grid to provide both savings and backup power." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "0.5px solid #E8E2D8", borderRadius: "14px", padding: "22px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "0 0 10px", color: "#1a1a1a" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#666", margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section-pad" style={{ background: "#fff", padding: "clamp(48px, 7vw, 80px) clamp(24px, 5vw, 80px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "36px" }}>
              <div style={{ display: "inline-block", background: "#FFF3D6", border: "0.5px solid #FAC775", color: "#854F0B", fontSize: "13px", fontWeight: 500, padding: "4px 14px", borderRadius: "20px", marginBottom: "12px" }}>
                FAQ
              </div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ background: "#FAFAFA", borderRadius: "10px", border: "0.5px solid #E8E2D8", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "16px" }}
                  >
                    <span style={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>{faq.q}</span>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#FFF3D6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "transform 0.25s", transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                  </button>
                  {openFaq === i && <div style={{ padding: "0 20px 16px", fontSize: "13px", color: "#555", lineHeight: 1.8 }}>{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DISCLAIMER */}
      <section className="section-pad" style={{ background: "#FAFAFA", padding: "24px clamp(24px, 5vw, 80px)" }}>
        <p style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", fontSize: "12px", color: "#aaa", lineHeight: 1.8 }}>
          This calculator provides an initial solar sizing estimate. Actual system requirements may vary based on roof conditions, shading, appliance characteristics, weather, battery technology and site-specific electrical requirements. A professional site assessment is recommended before installation.
        </p>
      </section>
      </main>
      <Footer />
    </>
  );
}

/* ============================================================
   CALCULATOR SECTION
   ============================================================ */

function CalculatorSection({ number, title, description, children }: { number: string; title: string; description: string; children: React.ReactNode; }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "12px" }}>
        <div style={{ minWidth: "28px", height: "28px", borderRadius: "50%", background: "#FFF3D6", color: "#854F0B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 700 }}>
          {number}
        </div>
        <div>
          <h3 style={{ margin: "2px 0 3px", fontSize: "15px", fontWeight: 600, color: "#1a1a1a" }}>{title}</h3>
          <p style={{ margin: 0, fontSize: "11px", color: "#888", lineHeight: 1.5 }}>{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

/* ============================================================
   FIELD
   ============================================================ */

function Field({ label, suffix, value, placeholder, onChange }: { label: string; suffix: string; value: string; placeholder: string; onChange: (value: string) => void; }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "12px", color: "#777", marginBottom: "6px" }}>{label}</label>
      <div style={{ position: "relative" }}>
        <input
          type="number"
          min="0"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...inputStyle, paddingRight: "65px" }}
        />
        <span style={{ position: "absolute", right: "12px", top: "11px", fontSize: "11px", color: "#999" }}>{suffix}</span>
      </div>
    </div>
  );
}

/* ============================================================
   SMALL SELECT
   ============================================================ */

function SmallSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: { label: string; value: string }[]; }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "10px", color: "#888", marginBottom: "5px" }}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ width: "100%", padding: "9px", borderRadius: "7px", border: "0.5px solid #E8E2D8", fontSize: "11px", background: "#fff" }}
      >
        {options.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
      </select>
    </div>
  );
}

/* ============================================================
   SMALL NUMBER
   ============================================================ */

function SmallNumber({ label, value, onChange, step = "1" }: { label: string; value: number; onChange: (value: number) => void; step?: string; }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: "10px", color: "#888", marginBottom: "5px" }}>{label}</label>
      <input
        type="number"
        min="0.5"
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%", boxSizing: "border-box", padding: "9px", borderRadius: "7px", border: "0.5px solid #E8E2D8", fontSize: "11px" }}
      />
    </div>
  );
}

/* ============================================================
   RESULT CARD
   ============================================================ */

function ResultCard({ title, value, description, highlight = false }: { title: string; value: string; description: string; highlight?: boolean; }) {
  return (
    <div style={{ background: "#fff", borderRadius: "14px", padding: "20px", border: highlight ? "2px solid #F5A000" : "0.5px solid #E8E2D8", borderTop: "3px solid #FDB92E" }}>
      <p style={{ fontSize: "12px", color: "#777", margin: "0 0 5px" }}>{title}</p>
      <p style={{ fontSize: "22px", fontWeight: 600, color: "#1a1a1a", margin: "0 0 5px" }}>{value}</p>
      <p style={{ fontSize: "11px", color: "#999", lineHeight: 1.5, margin: 0 }}>{description}</p>
    </div>
  );
}

/* ============================================================
   INPUT STYLE
   ============================================================ */

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px",
  borderRadius: "8px",
  border: "0.5px solid #E8E2D8",
  background: "#fff",
  fontSize: "13px",
  color: "#333",
};
