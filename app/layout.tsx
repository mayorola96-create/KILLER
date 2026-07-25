import type { Metadata, Viewport } from "next";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sagepartners.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sage Partners | Ecommerce Problems Solved Practically",
  description: "Sage Partners identifies and resolves ecommerce problems affecting conversions, customer trust, retention, search visibility and profitable growth.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Sage Partners",
    title: "Sage Partners | Ecommerce Problems Solved Practically",
    description: "Identify what is holding your ecommerce store back and fix the right problems in the right order."
  },
  twitter: {
    card: "summary",
    title: "Sage Partners | Ecommerce Problems Solved Practically",
    description: "Clear diagnosis and practical solutions for ecommerce growth problems."
  }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FFF8D8" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
