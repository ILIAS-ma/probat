import type { Metadata } from "next";
import "./globals.css";
import { PaintLoader } from "@/components/site/paint-loader";

export const metadata: Metadata = {
  title: "Dispobat",
  description: "Landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <PaintLoader />
        {children}
      </body>
    </html>
  );
}
