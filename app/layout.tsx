import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";

const heading = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "AI4DRUGFREE – FREE NATION 2026: THE MOVEMENT",
  description:
    "A cinematic, immersive movement for a drug-free future powered by AI.",
};

import LenisProvider from "./components/LenisProvider";
import ScrollProgress from "./components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="bg-void text-warm antialiased" suppressHydrationWarning>
        <ScrollProgress />
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
