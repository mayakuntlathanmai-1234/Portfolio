import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/scroll";

const interTight = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Thanmai Mayakuntla — Full Stack Developer",
  description: "Portfolio of Thanmai Mayakuntla, Computer Science student specializing in Generative AI for Agentic & Multimodal Intelligence, React, Spring Boot, and FastAPI.",
  authors: [{ name: "Thanmai Mayakuntla" }],
  openGraph: {
    title: "Thanmai Mayakuntla — Full Stack Developer",
    description: "Third-year B.Tech CSE student specializing in Generative AI for Agentic & Multimodal Intelligence.",
    images: ["/og.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#f4f2ee] text-[#0d0d0d] antialiased selection:bg-[#0d0d0d] selection:text-[#f4f2ee]">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
