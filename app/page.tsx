import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Insight from "./components/Insight";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Green Filament | Solar Energy Company in Bhubaneswar, Odisha",
  description:
    "Green Filament is Odisha's leading solar energy company based in Bhubaneswar. Rooftop solar, solar pumps, street lights & solar cooking across 12+ districts. NSIC Registered.",
  alternates: {
    canonical: "https://greenfilament.com",
  },
  openGraph: {
    title: "Green Filament | Solar Energy Company in Bhubaneswar, Odisha",
    description:
      "Odisha's trusted solar energy company — rooftop solar, pumps, street lights, solar cooking and more. 500+ projects across 12+ districts.",
    url: "https://greenfilament.com",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Green Filament Solar Energy Company Odisha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Filament | Solar Energy Company in Bhubaneswar, Odisha",
    description:
      "Odisha's trusted solar energy company — rooftop solar, pumps, street lights, solar cooking and more.",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Insight />
      <Projects />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}