import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Offerings from "../components/Offerings";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "Core Offerings | EcoNova Resources & Energy",
  description:
    "Explore EcoNova's core offerings across Renewable Energy Projects, Engineering & Technology, Agriculture & Food Processing, and Marine & Aquaculture.",
  alternates: {
    canonical: "https://econovare.com/offerings",
  },
  openGraph: {
    title: "Core Offerings | EcoNova Resources & Energy",
    description:
      "Integrated sustainable resource ecosystems: Renewable Energy, Engineering, Agriculture, and Marine resources.",
    url: "https://econovare.com/offerings",
    siteName: "EcoNova Resources & Energy",
  },
};

export default function OfferingsPage() {
  return (
    <main>
      <Navbar />
      <div style={{ paddingTop: "20px" }}>
        <Offerings />
      </div>
      <CTABanner />
      <Footer />
    </main>
  );
}
