import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";
import FaqSchema from "../components/FaqSchema";

const servicesFaqs = [
  { q: "What does Green Filament's site assessment include?", a: "A free on-site visit covering roof structure, shadow study, energy consumption review, and a detailed feasibility report before any work begins." },
  { q: "Do you handle subsidy paperwork?", a: "Yes. We manage PM Surya Ghar, PM KUSUM, and Odisha state subsidy applications end-to-end, following up until the subsidy credit is received." },
  { q: "What is included in net metering support?", a: "We handle the DISCOM application, grid connection approval, bidirectional meter installation, and verify your bill credits are set up correctly." },
  { q: "Do you offer maintenance after installation?", a: "Yes. We offer Annual Maintenance Contracts (AMC), on-call repairs, and quarterly performance inspections to keep your system running at peak efficiency." },
  { q: "Is the site assessment really free?", a: "Yes, site assessment and custom quote are free with no obligation." },
];

export const metadata: Metadata = {
  title: "Our Services | Green Filament Solar",
  description: "End-to-end solar services across Odisha — site assessment, system design, installation, net metering, subsidy advisory, AMC and preventive maintenance.",
  keywords: [
    "solar services Odisha",
    "solar site assessment",
    "solar AMC Odisha",
    "solar subsidy advisory",
    "solar maintenance Odisha",
    "net metering support",
  ],
  alternates: {
    canonical: "https://greenfilament.com/services",
  },
  openGraph: {
    title: "Our Services | Green Filament Solar",
    description: "End-to-end solar services across Odisha — from site assessment to lifetime AMC support.",
    url: "https://greenfilament.com/services",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Green Filament Solar Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Green Filament Solar",
    description: "End-to-end solar services across Odisha.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <FaqSchema faqs={servicesFaqs} />
      <ServicesClient />
    </>
  );
}