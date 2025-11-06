import { Geist, Geist_Mono, Federo } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navber";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const federo = Federo({
  weight: "400",              // <-- required!
  style: "normal",            // optional, default is normal
  variable: "--font-federo",  // optional CSS variable
  subsets: ["latin"],         // optional, usually ["latin"]
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bangla">
      <body className={`${geistSans.variable}  ${federo.variable} antialiased`}>
        <Navber />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
