import { geistMono, inter } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nikathesungod",
  description: "nikathesungod",
  icons: {
    icon: "/pfp.png",
  },
  openGraph: {
    title: "nikathesungod",
    description: "nikathesungod",
    url: "https://nikathesungod.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "nikathesungod",
    description: "nikathesungod",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.variable} ${geistMono.variable} font-sans antialiased bg-site-background min-h-svh`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
