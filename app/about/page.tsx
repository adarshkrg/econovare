import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../components/About";
import Leadership from "../components/Leadership";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "About Us | EcoNova Resources & Energy Private Limited",
  description:
    "EcoNova Resources & Energy Private Limited unites renewable energy, agriculture, marine resources, and advanced technology into an integrated sustainability platform.",
  alternates: {
    canonical: "https://econovare.com/about",
  },
  openGraph: {
    title: "About Us | EcoNova Resources & Energy Private Limited",
    description:
      "Integrated sustainability platform spanning renewable energy, manufacturing, agriculture, marine resources, research, and technology partnerships.",
    url: "https://econovare.com/about",
    siteName: "EcoNova Resources & Energy",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "20px" }}>
        <About />
        <Leadership />
      </div>
      <CTABanner />
      <Footer />
    </main>
  );
}