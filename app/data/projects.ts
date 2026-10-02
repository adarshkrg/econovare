/* ============================================================
   PROJECTS DATA
   - Single source of truth for all project data
   - Used by both homepage slider and projects page
   ============================================================ */

export type Project = {
  id: string;
  category: string;
  title: string;
  location: string;
  year: string;
  image: string;
  featured?: boolean;
  stats: { value: string; label: string }[];
  storyTitle: string;
  challenge: string;
  solution: string;
  result: string;
  specs: { label: string; value: string }[];
};

export const projects: Project[] = [
  /* ---- 1. Hill Temple Pathway ---- */
  {
    id: "hill-temple",
    category: "Street Lighting",
    title: "Solar Lighting — Hill Temple Pathway",
    location: "Hilltop Temple, Odisha",
    year: "2023",
    image: "/images/projects/hill-temple.jpg",
    featured: true,
    stats: [
      { value: "1000", label: "Steps Lit" },
      { value: "₹0", label: "Electricity Bill" },
      { value: "12hr", label: "Backup" },
    ],
    storyTitle: "Lighting the path to the divine — one step at a time",
    challenge: "1000 steep steps to a hilltop temple were completely dark after sunset. No grid connection was possible on the rocky hillside terrain. Devotees, especially elderly visitors, faced serious safety risks climbing in darkness.",
    solution: "Green Filament's team climbed the rocky hill to install solar street lights at strategic points along the pathway. Each light was anchored to the rocky hillside — a technically challenging installation requiring manual effort with zero road access.",
    result: "Thousands of devotees now safely climb after sunset. The entire temple pathway is illuminated every night with zero electricity cost for the temple community.",
    specs: [
      { label: "Type", value: "Solar Street Light" },
      { label: "Terrain", value: "Rocky Hillside" },
      { label: "Access", value: "Zero Road Access" },
      { label: "Backup", value: "Full Night" },
    ],
  },

  /* ---- 2. Toyota Showroom 25kW ---- */
  {
    id: "toyota-showroom",
    category: "Rooftop Solar",
    title: "25kW Rooftop Solar — Toyota Showroom",
    location: "Near Cuttack, Odisha",
    year: "2024",
    image: "/images/projects/toyota-showroom.jpg",
    featured: false,
    stats: [
      { value: "25kW", label: "Capacity" },
      { value: "Grid-Tied", label: "System Type" },
      { value: "Commercial", label: "Segment" },
    ],
    storyTitle: "Powering a premium showroom with clean solar energy",
    challenge: "A premium Toyota showroom near Cuttack had massive electricity bills from showroom lighting, AC systems, and display operations running through the day.",
    solution: "Designed and installed a 25kW grid-tied rooftop solar power plant — engineered for a commercial showroom setting with aesthetics and performance both in mind.",
    result: "Significant reduction in monthly electricity bills. Clean energy powering one of Odisha's premium automobile showrooms. A flagship commercial installation for Green Filament.",
    specs: [
      { label: "Capacity", value: "25kW" },
      { label: "Type", value: "Grid-Tied" },
      { label: "Segment", value: "Commercial" },
      { label: "Location", value: "Near Cuttack" },
    ],
  },

  /* ---- 3. Solar Drinking Water — Dhenkanal ---- */
  {
    id: "drinking-water-dhenkanal",
    category: "Water System",
    title: "Solar Drinking Water System",
    location: "Dhenkanal, Odisha",
    year: "2022",
    image: "/images/projects/drinking-water.jpg",
    featured: false,
    stats: [
      { value: "5000L", label: "Tank Capacity" },
      { value: "1HP", label: "Pump" },
      { value: "Auto", label: "Operation" },
    ],
    storyTitle: "Clean drinking water for a village — powered by the sun",
    challenge: "A remote village in Dhenkanal had no piped water supply. Villagers walked long distances daily to fetch drinking water. No grid electricity meant conventional pumps were not an option.",
    solution: "Installed a complete solar-powered drinking water system with a 5000L tank, 3 × 330W panels, and a 1HP 80V submersible pump with automatic floater device for zero manual intervention.",
    result: "Clean, reliable drinking water now flows freely to the entire village every day powered by the sun. Women no longer walk miles for water. Zero electricity cost. Zero grid dependency.",
    specs: [
      { label: "Tank", value: "5000 Litres" },
      { label: "Panels", value: "3 × 330W" },
      { label: "Pump", value: "1HP 80V Submersible" },
      { label: "Warranty", value: "25 Years (Panel)" },
    ],
  },

  /* ---- 4. Rooftop Solar — Dhanbad ---- */
  {
    id: "rooftop-dhanbad",
    category: "Rooftop Solar",
    title: "10kW Off-Grid Rooftop Solar",
    location: "Dhanbad, Jharkhand",
    year: "2021",
    image: "/images/projects/rooftop-dhanbad.jpg",
    featured: false,
    stats: [
      { value: "10kW", label: "Capacity" },
      { value: "14,400", label: "Units/Year" },
      { value: "25yr", label: "Warranty" },
    ],
    storyTitle: "Complete energy independence for a Dhanbad home",
    challenge: "High electricity costs and frequent grid outages were significantly impacting the client's daily life and monthly expenses.",
    solution: "Designed and installed a 10kW off-grid rooftop solar system with 30 poly crystalline panels, 10kW inverter, and 10 battery backup units for complete energy independence.",
    result: "14,400 units of clean solar electricity generated annually. Zero grid dependency. Complete energy independence with 25-year panel warranty.",
    specs: [
      { label: "Capacity", value: "10kW" },
      { label: "Panels", value: "30 × Poly Crystalline" },
      { label: "Batteries", value: "10 Units" },
      { label: "Generation", value: "14,400 Units/Year" },
    ],
  },

  /* ---- 5. Street Light — Mayurbhanj Village ---- */
  {
    id: "street-light-mayurbhanj",
    category: "Street Lighting",
    title: "Solar Street Lights — Remote Village",
    location: "Mayurbhanj, Odisha",
    year: "2022",
    image: "/images/projects/street-light-mayurbhanj.jpg",
    featured: false,
    stats: [
      { value: "18W", label: "LED Power" },
      { value: "Full Night", label: "Backup" },
      { value: "₹0", label: "Electricity Bill" },
    ],
    storyTitle: "Bringing light to a village that had none",
    challenge: "A remote village in Mayurbhanj had no reliable street lighting. After dark, roads were unsafe and daily life was severely disrupted with no grid connection available.",
    solution: "Installed semi-integrated 18W solar street lights with 50W poly crystalline panels and 40Ah Li-ion battery backup, mounted at 5 metres height for maximum road coverage.",
    result: "The village now has safe, well-lit roads every night with full backup. Zero electricity bills for the community. Lights operate automatically from dusk to dawn.",
    specs: [
      { label: "Model", value: "Semi-Integrated 18W" },
      { label: "Panel", value: "50W Poly Crystalline" },
      { label: "Battery", value: "40Ah Li-ion" },
      { label: "Height", value: "5 Metres" },
    ],
  },

  /* ---- 6. Solar Blinker — Ganjam ---- */
  {
    id: "solar-blinker-ganjam",
    category: "Safety",
    title: "Solar Blinker — Accident Prone Road",
    location: "Ganjam, Odisha",
    year: "2023",
    image: "/images/projects/solar-blinker.jpg",
    featured: false,
    stats: [
      { value: "1km", label: "Visibility" },
      { value: "24hr", label: "Backup" },
      { value: "20W", label: "Power" },
    ],
    storyTitle: "Making a dangerous road safe — with solar power",
    challenge: "A sharp curve on a village road in Ganjam was a notorious accident spot. No electricity meant no warning signals — vehicles approached blind causing frequent accidents especially at night.",
    solution: "Installed a 20W solar-powered red blinker with 24-hour backup, visible up to 1km. Self-sufficient with 12V 14Ah SMF battery — works through rain, fog, and cloudy days.",
    result: "The accident-prone stretch now has a clearly visible red warning signal day and night. Village road safety transformed with zero electricity cost and 3-year warranty.",
    specs: [
      { label: "Power", value: "20W" },
      { label: "Color", value: "Red" },
      { label: "Visibility", value: "1 km" },
      { label: "Backup", value: "24 Hours" },
    ],
  },

  /* ---- 7. High Mast — Gopalpur ---- */
  {
    id: "high-mast-gopalpur",
    category: "High Mast",
    title: "High Mast Lighting — Solar Plant Campus",
    location: "Gopalpur, Ganjam, Odisha",
    year: "2023",
    image: "/images/projects/high-mast-gopalpur.jpg",
    featured: false,
    stats: [
      { value: "8", label: "LED Floods" },
      { value: "2400W", label: "Total Power" },
      { value: "Auto", label: "Timer Control" },
    ],
    storyTitle: "Illuminating a solar plant campus with precision lighting",
    challenge: "A large solar plant campus in Gopalpur needed powerful floodlighting for security and operations after dark. Standard grid lighting was costly and unreliable in the area.",
    solution: "Erected a 2-part high mast pole with 8 × 300W LED flood lights, 3-phase chain pulley hoisting system, and automatic timer control panel — complete turnkey installation.",
    result: "The entire solar plant campus is brilliantly lit with 2400W of LED flood lighting. Automatic timer ensures operation without manual intervention. A landmark installation in Ganjam.",
    specs: [
      { label: "Pole", value: "2-Part High Mast" },
      { label: "Lights", value: "8 × 300W LED Floods" },
      { label: "Hoist", value: "3-Phase Chain Pulley" },
      { label: "Control", value: "Auto Timer Panel" },
    ],
  },

/* ---- 8. Solar Street Light — Private Park, Puri ---- */
{
  id: "street-light-puri-park",
  category: "Street Lighting",
  title: "Solar Street Light — Children Park",
  location: "Puri, Odisha",
  year: "2026",
  image: "/images/projects/street-light-puri-park.jpg",
  featured: false,
  stats: [
    { value: "30W", label: "LED Power" },
    { value: "6m", label: "Pole Height" },
    { value: "Full Night", label: "Backup" },
  ],
  storyTitle: "Lighting a private park with reliable solar power",
  challenge: "A private park in Puri had no lighting after dark, leaving the space unusable and unsafe for evening visitors, with no grid connection planned for the area.",
  solution: "Installed a semi-integrated 30W solar street light on a 6 metre GI tubular pole (76mm OD, 1.2mm thickness), powered by a 75Wp panel and a 12.8V 24Ah LiFePO4 battery for dependable night-long backup.",
  result: "The park now stays lit through the night with zero electricity cost. A durable, low-maintenance lighting solution built for long-term outdoor use.",
  specs: [
    { label: "Model", value: "Semi-Integrated 30W" },
    { label: "Panel", value: "75Wp" },
    { label: "Battery", value: "12.8V 24Ah LiFePO4" },
    { label: "Pole", value: "6m GI Tubular, 76mm OD" },
  ],
},
  
];

/* --- Homepage featured projects (3 best) --- */
export const homepageProjects = projects.filter((p) =>
  ["hill-temple", "toyota-showroom", "drinking-water-dhenkanal"].includes(p.id)
);

/* --- Categories for filter tabs --- */
export const projectCategories = [
  "All",
  "Rooftop Solar",
  "Street Lighting",
  "Water System",
  "High Mast",
  "Safety",
];