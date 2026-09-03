import type { Metadata } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wolf Gym | Academia e CT de lutas em Caldas Novas",
  description:
    "Musculação, funcional, boxe e muay thai em Caldas Novas. Treino sério, comunidade de verdade. Vem ser sua melhor versão.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${anton.variable} ${oswald.variable} ${inter.variable}`}
    >
      <body className="bg-wolf-black font-body text-wolf-white antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
