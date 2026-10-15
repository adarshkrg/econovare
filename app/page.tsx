import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProblemSolution from "./components/ProblemSolution";
import Offerings from "./components/Offerings";
import Market from "./components/Market";
import Leadership from "./components/Leadership";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "EcoNova Resources & Energy | Shaping a Cleaner, Greener Tomorrow",
  description:
    "EcoNova Resources & Energy Private Limited — World Air Pollution Control and Sustainable Energy Solutions. Integrating renewable energy, geothermal systems, agriculture, marine resources, and engineering.",
  alternates: {
    canonical: "https://econovare.com",
  },
  openGraph: {
    title: "EcoNova Resources & Energy | Shaping a Cleaner, Greener Tomorrow",
    description:
      "Integrated sustainability platform: Renewable Energy, Geothermal Heating & Cooling, Agriculture, Marine Resources & Advanced Engineering.",
    url: "https://econovare.com",
    siteName: "EcoNova Resources & Energy",
    images: [{ url: "/images/logo.png", width: 1200, height: 630, alt: "EcoNova Resources & Energy Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoNova Resources & Energy | Shaping a Cleaner, Greener Tomorrow",
    description:
      "World Air Pollution Control and Sustainable Energy Solutions. Renewable Energy, Geothermal, Agri-Tech & Marine.",
    images: ["/images/logo.png"],
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <ProblemSolution />
      <Offerings />
      <Market />
      <Leadership />
      <CTABanner />
      <Footer />
    </main>
  );
}