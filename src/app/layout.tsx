import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Artloom Studio | 3D Printing & Fabrication",
  description: "Modern 3D printing and digital fabrication studio delivering precision-crafted models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased bg-[#050012] text-white`}>
        {children}
      </body>
    </html>
  );
}
