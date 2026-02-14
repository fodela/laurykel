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
  title: "Delali & Laura — Wedding Celebration",
  description: "Join us in celebrating the union of Delali Dogbevi & Laura Bosompem. Saturday, March 14th, 2026 at PIWC, Obuasi.",
  openGraph: {
    title: "Delali & Laura — Wedding Celebration",
    description: "Together with their families, Delali Dogbevi & Laura Bosompem invite you to their wedding.",
    type: "website",
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
