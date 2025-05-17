import { Geist_Mono, Inter } from "next/font/google";

const inter = Inter({
  axes: ["opsz"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export { geistMono, inter };
