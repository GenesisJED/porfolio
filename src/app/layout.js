import { Inter, Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Genesis Escalona | Full Stack Developer",
  description:
    "Portfolio of Genesis Escalona - Full Stack Developer specialized in React, Next.js, Node.js and TypeScript.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${sora.variable} ${jetbrains.variable} antialiased min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
