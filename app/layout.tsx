import type { Metadata } from "next";
import { Lora, Lato } from "next/font/google";
import "./globals.css";
import SchemaOrg from "./components/SchemaOrg";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  /* ── Basic ── */
  title: "EcoNova Resources & Energy | Sustainable Energy & Multi-Sector Solutions",
  description:
    "EcoNova Resources & Energy Private Limited — Shaping a Cleaner, Greener Tomorrow. Integrating Renewable Energy, Geothermal Heating & Cooling, Agriculture, Marine Resources, and Engineering.",
  keywords: [
    "EcoNova Resources & Energy",
    "sustainable energy solutions",
    "geothermal heating and cooling",
    "world air pollution control",
    "renewable energy projects",
    "agro business sustainability",
    "marine resources innovation",
    "clean technology India",
    "geothermal energy Gujarat",
    "Gandhinagar clean energy",
  ],
  authors: [{ name: "EcoNova Resources & Energy Private Limited" }],
  creator: "EcoNova Resources & Energy Private Limited",
  publisher: "EcoNova Resources & Energy Private Limited",
  metadataBase: new URL("https://econovare.com"),

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://econovare.com",
    siteName: "EcoNova Resources & Energy",
    title: "EcoNova Resources & Energy | Shaping a Cleaner, Greener Tomorrow",
    description:
      "World Air Pollution Control and Sustainable Energy Solutions. Integrated multi-sector platform uniting renewable energy, geothermal systems, agriculture, marine resources, and engineering.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "EcoNova Resources & Energy Private Limited",
      },
    ],
  },

  /* ── Twitter ── */
  twitter: {
    card: "summary_large_image",
    title: "EcoNova Resources & Energy | Shaping a Cleaner, Greener Tomorrow",
    description:
      "Integrated multi-sector sustainability platform uniting renewable energy, geothermal systems, agriculture, and marine resources.",
    images: ["/images/logo.png"],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${lora.variable} ${lato.variable}`}>
      <head>
        <SchemaOrg />
      </head>
      <body className={lato.className}>
        {children}
      </body>
    </html>
  );
}