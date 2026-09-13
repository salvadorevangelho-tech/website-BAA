import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { playfair, caveat, inter } from "@/lib/fonts";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Building Above Average",
    template: "%s | Building Above Average",
  },
  description:
    "Systems for founders and builders to save time, get clarity, and stay organized. Free newsletter, the Weekly Planner, and Life OS.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Building Above Average",
    description:
      "Systems for founders and builders to save time, get clarity, and stay organized.",
    url: SITE_URL,
    siteName: "Building Above Average",
    images: ["/images/logo.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${caveat.variable} ${inter.variable}`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
