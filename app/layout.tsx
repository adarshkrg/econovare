import type { Metadata } from "next";
import "./globals.css";
import SchemaOrg from "./components/SchemaOrg";
import AnalyticsEvents from "./components/AnalyticsEvents";

export const metadata: Metadata = {

  /* ── Basic ── */
  title: "Green Filament | Solar Energy Company in Bhubaneswar, Odisha",
  description: "Green Filament is Odisha's trusted solar energy company. We deliver rooftop solar, solar pumps, street lights, solar cooking systems and more across Bhubaneswar and 12+ districts. NSIC Registered, Start-up India recognized.",

  /* ── Keywords ── */
  keywords: [
    "solar energy Odisha",
    "rooftop solar Bhubaneswar",
    "solar company Odisha",
    "solar panels Bhubaneswar",
    "solar pump Odisha",
    "KUSUM scheme",
    "KUSUM scheme Odisha",
    "solar street light Odisha",
    "solar cooking system",
    "PM Surya Ghar Yojana",
    "Green Filament solar",
    "solar installation Bhubaneswar",
    "renewable energy Odisha",
  ],

  /* ── Canonical URL ── */
  metadataBase: new URL("https://greenfilament.com"),
  alternates: {
    canonical: "/",
  },

  /* ── Open Graph — for WhatsApp, Facebook, LinkedIn previews ── */
  openGraph: {
    title: "Green Filament | Solar Energy Company in Bhubaneswar, Odisha",
    description: "Odisha's trusted solar energy company — rooftop solar, pumps, street lights, solar cooking and more. 500+ projects across 12+ districts.",
    url: "https://greenfilament.com",
    siteName: "Green Filament",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Green Filament Solar Energy Company Odisha",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  /* ── Twitter/X card ── */
  twitter: {
    card: "summary_large_image",
    title: "Green Filament | Solar Energy Company in Bhubaneswar, Odisha",
    description: "Odisha's trusted solar energy company — rooftop solar, pumps, street lights, solar cooking and more.",
    images: ["/images/og-image.jpg"],
  },

  /* ── Favicon ── */
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
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
  verification: {
  google: "LwpgsRnR9vkuBjFKXJMyTFrr3gjx0zNeH364fxNjGL8",

},

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" data-scroll-behavior="smooth">
    <head>
      <SchemaOrg />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6299WY2N0C" />
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6299WY2N0C');
        `
      }} />
    </head>
    <body>
  <AnalyticsEvents />
  {children}
</body>
  </html>
);
}