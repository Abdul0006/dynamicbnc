import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dynamicbnc.com.pk"),
  title: {
    default: "Dynamic Builders & Contractors - Construction, Architecture & Real Estate",
    template: "%s | Dynamic Builders & Contractors"
  },
  description: "YOUR TRUSTED PARTNER IN CONSTRUCTION, ARCHITECTURE & REAL ESTATE. Serving Rawalpindi & Islamabad with excellence.",
  keywords: ["construction", "architecture", "real estate", "builders", "contractors", "Pakistan", "Rawalpindi", "Islamabad"],
  authors: [{ name: "Dynamic Builders & Contractors" }],
  creator: "Dynamic Builders & Contractors",
  publisher: "Dynamic Builders & Contractors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dynamicbnc.com.pk",
    title: "Dynamic Builders & Contractors - Construction, Architecture & Real Estate",
    description: "YOUR TRUSTED PARTNER IN CONSTRUCTION, ARCHITECTURE & REAL ESTATE. Serving Rawalpindi & Islamabad with excellence.",
    siteName: "Dynamic Builders & Contractors",
    images: [
      {
        url: "/og-image.jpg", // Placeholder for actual Open Graph image
        width: 1200,
        height: 630,
        alt: "Dynamic Builders & Contractors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Builders & Contractors - Construction, Architecture & Real Estate",
    description: "YOUR TRUSTED PARTNER IN CONSTRUCTION, ARCHITECTURE & REAL ESTATE. Serving Rawalpindi & Islamabad with excellence.",
    images: ["/og-image.jpg"], // Placeholder for actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    }
  },
  verification: {
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
