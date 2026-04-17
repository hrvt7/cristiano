import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  weight: ["400", "600", "700", "900"],
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cristiano Pizzéria — Eredeti olasz pizza Szombathelyen",
  description:
    "Cristiano Pizzéria Szombathely — olaszországi fatüzelésű kemencében sütött eredeti nápolyi pizzák, 80% olasz alapanyagból. Házhoz szállítás. Telefon: +36 70 425 37 93",
  keywords: [
    "pizza szombathely",
    "cristiano pizzéria",
    "olasz pizza szombathely",
    "pizza rendelés szombathely",
    "fatüzelésű pizza",
    "nápolyi pizza",
  ],
  openGraph: {
    title: "Cristiano Pizzéria — Eredeti olasz pizza Szombathelyen",
    description:
      "Olaszországi fatüzelésű kemencében sült eredeti pizzák. 80% olasz alapanyag. Rendelj telefonon vagy gyere be!",
    type: "website",
    locale: "hu_HU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Cristiano Pizzéria",
              description:
                "Eredeti olasz pizzéria Szombathelyen. Olaszországi fatüzelésű kemencében sütött nápolyi pizzák.",
              servesCuisine: ["Italian", "Pizza", "Mediterranean"],
              telephone: "+36 70 425 37 93",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Százhold utca 23",
                addressLocality: "Szombathely",
                postalCode: "9700",
                addressCountry: "HU",
              },
              priceRange: "$$",
              url: "https://www.cristianopizza.hu",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
