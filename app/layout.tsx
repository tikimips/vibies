import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Vibies — Satisfying 3D Printed Toys",
  description: "Fidget toys that actually feel good. Flexi dragons, squishy creatures, and more — all 3D printed with love.",
  openGraph: {
    title: "Vibies",
    description: "Satisfying 3D printed toys. The click. The feel. The vibe.",
    url: "https://vibies.co",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}
