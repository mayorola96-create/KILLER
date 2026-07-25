import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sagepartners.space"),
  title: "Sage Partners | Ecommerce Problems Solved Practically",
  description:
    "Practical ecommerce diagnosis, conversion improvement, AISEO, retention and technical optimization.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/images/sage-logo.png",
    shortcut: "/images/sage-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
