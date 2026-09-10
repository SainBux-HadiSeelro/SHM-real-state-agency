import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHM Real Estate Agency | AI Lead Generation System",
  description:
    "Attract, capture, qualify, nurture, and convert high-intent real estate property leads automatically with SHM Real Estate's AI-Powered System.",
  keywords: [
    "Real Estate Lead Generation",
    "AI Real Estate CRM",
    "Automated Property Leads",
    "SHM Real Estate Agency",
    "AI Property Marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-navy-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
