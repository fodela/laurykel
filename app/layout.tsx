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
  title: "Delali & Laura — Wedding Celebration",
  description:
    "Join us in celebrating the union of Delali Dogbevi & Laura Bosompem. Saturday, March 14th, 2026 at PIWC, Obuasi.",
  keywords: [
    "wedding",
    "Delali Dogbevi",
    "Laura Bosompem",
    "Obuasi",
    "Ghana",
    "PIWC",
    "March 2026",
  ],
  authors: [{ name: "Delali & Laura" }],
  openGraph: {
    title: "Delali & Laura — Wedding Celebration",
    description:
      "Together with their families, Delali Dogbevi & Laura Bosompem invite you to celebrate their wedding on March 14th, 2026 in Obuasi, Ghana.",
    type: "website",
    url: "https://laurykel.pages.dev",
    siteName: "Delali & Laura Wedding",
    locale: "en_US",
    images: [
      {
        url: "/images/Save the Date DL.jpg",
        width: 2400,
        height: 3300,
        alt: "Save the Date — Delali & Laura Wedding, March 14, 2026",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Delali & Laura — Wedding Celebration",
    description:
      "Join the celebration! Delali Dogbevi & Laura Bosompem — March 14th, 2026 in Obuasi, Ghana.",
    images: ["/images/Save the Date DL.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  other: {
    "apple-mobile-web-app-title": "Delali & Laura",
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
