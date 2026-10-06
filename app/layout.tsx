import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter,
} from "next/font/google";
import { ScrollRestoration } from "@/components/ScrollRestoration";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fermor · Money, made clear",
  description:
    "Fermor brings your entire financial life into one calm, clear place. Understand where you stand, act with confidence, and grow steadily over time.",
  openGraph: {
    title: "Fermor · Money, made clear",
    description:
      "Understand, act, and grow financially with clarity. Early access for working professionals in India.",
    url: "https://fermor.in",
    siteName: "Fermor",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermor · Money, made clear",
    description:
      "Your money in one calm, clear place. Early access now open in India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${ibmPlexMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-dvh overflow-x-clip font-sans text-ink">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
