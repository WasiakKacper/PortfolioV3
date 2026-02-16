import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import { ReactLenis } from "./utils/lenis";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Kacper Wasiak - Frontend developer",
  description: "Frontend developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${jost.className} antialiased`}>{children}</body>
      </ReactLenis>
    </html>
  );
}
