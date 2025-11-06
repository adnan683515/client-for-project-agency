"use client";

import { useEffect } from "react";
import { Federo } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";
import AOS from "aos";
import "aos/dist/aos.css";

// Federo font setup
export const federo = Federo({
  weight: "400",
  style: "normal",
  variable: "--font-federo",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,    // whether animation should happen only once
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${federo.className} antialiased`}>
        <Navber />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
