import type { Metadata } from "next";
import "./globals.css";
import { PaintLoader } from "@/components/site/paint-loader";

export const metadata: Metadata = {
  title: "DISPO BAT — Peinture · Ravalement · Décoration intérieure",
  description:
    "Depuis plus de 10 ans, DISPO BAT met son savoir-faire au service des professionnels pour tous leurs projets de peinture, ravalement et décoration intérieure.",
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
