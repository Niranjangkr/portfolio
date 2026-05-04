import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niranjan Gaonkar — Software Engineer",
  description:
    "Software Engineer building full-stack applications with Next.js, Node.js, and AI-powered systems. Currently at CubikTech.",
  openGraph: {
    title: "Niranjan Gaonkar — Software Engineer",
    description:
      "Software Engineer building full-stack applications with Next.js, Node.js, and AI-powered systems.",
    url: "https://niranjan.dev",
    siteName: "Niranjan Gaonkar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Niranjan Gaonkar — Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan Gaonkar — Software Engineer",
    description:
      "Software Engineer building full-stack applications with Next.js, Node.js, and AI-powered systems.",
    images: ["/og.png"],
  },
};

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen antialiased flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
