import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laurykel.pages.dev"),
  title: {
    default: "Delali & Laura — Wedding Celebration | March 14, 2026",
    template: "%s | Delali & Laura Wedding",
  },
  description:
    "Join us in celebrating the union of Delali Dogbevi & Laura Bosompem. Saturday, March 14th, 2026 at PIWC, Obuasi, Ghana. Traditional ceremony, white wedding, and thanksgiving service.",
  keywords: [
    "wedding",
    "Delali Dogbevi",
    "Laura Bosompem",
    "Obuasi wedding",
    "Ghana wedding",
    "PIWC Obuasi",
    "March 2026 wedding",
    "traditional wedding Ghana",
    "white wedding ceremony",
    "wedding celebration",
    "Kokotuasi",
    "Kunka New Site",
    "wedding RSVP",
    "Ashanti Region wedding",
  ],
  authors: [{ name: "Delali Dogbevi & Laura Bosompem" }],
  creator: "Delali & Laura",
  publisher: "Delali & Laura Wedding",
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  category: "event",
  openGraph: {
    title: "Delali & Laura — Wedding Celebration | March 14, 2026",
    description:
      "Together with their families, Delali Dogbevi & Laura Bosompem invite you to celebrate their wedding on Saturday, March 14th, 2026 in Obuasi, Ghana. Join us for the traditional ceremony, white wedding, and thanksgiving service.",
    type: "website",
    url: "https://laurykel.pages.dev",
    siteName: "Delali & Laura Wedding",
    locale: "en_US",
    countryName: "Ghana",
    images: [
      {
        url: "https://laurykel.pages.dev/savethedate-og.jpg",
        width: 1200,
        height: 630,
        alt: "Delali & Laura - Save The Date - March 14, 2026",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delali & Laura — Wedding Celebration | March 14, 2026",
    description:
      "Join the celebration! Delali Dogbevi & Laura Bosompem — March 14th, 2026 in Obuasi, Ghana. Traditional ceremony, white wedding & thanksgiving.",
    images: ["https://laurykel.pages.dev/savethedate-og.jpg"],
    creator: "@delaliandlaura",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "https://laurykel.pages.dev",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Delali & Laura",
    "mobile-web-app-capable": "yes",
    "theme-color": "#0a1628",
    "msapplication-TileColor": "#c8a951",
    "msapplication-navbutton-color": "#0a1628",
    "application-name": "Delali & Laura Wedding",
    "geo.region": "GH-AH",
    "geo.placename": "Obuasi",
    "geo.position": "6.2023;-1.6735",
    "ICBM": "6.2023, -1.6735",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${outfit.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
