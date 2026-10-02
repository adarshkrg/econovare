import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Solar Projects in Odisha | 500+ Installations | Green Filament",
  description:
    "Explore 500+ solar projects delivered by Green Filament across 12+ districts in Odisha. Rooftop solar, street lights, solar pumps and more. Real work. Real impact.",
  keywords: [
    "solar projects Odisha",
    "solar installation Bhubaneswar",
    "rooftop solar projects Odisha",
    "solar street light projects",
    "solar pump installation Odisha",
    "Green Filament projects",
    "solar energy projects India",
    "solar contractor Odisha",
    "solar company portfolio Odisha",
    "solar panel installation Bhubaneswar",
  ],
  alternates: {
    canonical: "https://greenfilament.com/projects",
  },
  openGraph: {
    title: "Solar Projects in Odisha | 500+ Installations | Green Filament",
    description:
      "500+ solar projects across 12+ districts in Odisha. Rooftop solar, street lights, solar pumps and more by Green Filament.",
    url: "https://greenfilament.com/projects",
    siteName: "Green Filament",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Green Filament Solar Projects Odisha" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Projects in Odisha | 500+ Installations | Green Filament",
    description:
      "500+ solar installations across 12+ districts in Odisha. Real work. Real impact.",
    images: ["/images/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}