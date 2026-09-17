import type { Metadata } from "next";
import { Anton, Oswald, Inter } from "next/font/google";
import "./globals.css";

const META_PIXEL_ID = "2230887867473725";

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
      <head>
        {/* Official Meta Pixel snippet in the initial HTML so Events Manager can detect it. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${META_PIXEL_ID}');fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className="bg-wolf-black font-body text-wolf-white antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
