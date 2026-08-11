import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Select Place | Barber & Spa",
  description:
    "Premium grooming, barbering and spa services for the modern gentleman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full overflow-x-hidden antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen overflow-x-hidden bg-black text-white">
        <Navbar />

        <main className="overflow-x-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}