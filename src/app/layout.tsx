import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://www.osaris-ingenierie.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OSARIS Ingénierie — Bureau d'études CVC, Plomberie, Thermique & Énergie",
    template: "%s · OSARIS Ingénierie",
  },
  description:
    "Bureau d'études techniques indépendant fondé en 2016, spécialisé en CVC, chauffage, ventilation, climatisation, plomberie, ECS, thermique réglementaire, performance énergétique, hybridation PAC et génie électrique. Conception, études d'exécution et assistance maîtrise d'œuvre. Douai, Île-de-France et toute la France.",
  keywords: [
    "OSARIS Ingénierie",
    "bureau d'études techniques",
    "bureau d'études CVC",
    "ingénierie thermique",
    "ingénierie fluides",
    "plomberie sanitaire",
    "ventilation VMC",
    "chauffage collectif",
    "climatisation",
    "production ECS",
    "thermique réglementaire RE2020",
    "performance énergétique",
    "hybridation PAC Air/Eau",
    "chaufferies collectives",
    "génie électrique CFO CFA",
    "études d'exécution",
    "plans EXE",
    "assistance maîtrise d'œuvre",
    "DCE CCTP",
    "Douai",
    "Hauts-de-France",
    "Île-de-France",
    "France",
  ],
  authors: [{ name: "OSARIS Ingénierie SAS" }],
  creator: "OSARIS Ingénierie SAS",
  publisher: "OSARIS Ingénierie SAS",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "OSARIS Ingénierie",
    title: "OSARIS Ingénierie — Bureau d'études techniques CVC, Thermique & Énergie",
    description:
      "Conception, études d'exécution et assistance MOE en CVC, plomberie, ventilation, thermique réglementaire, performance énergétique, hybridation PAC et génie électrique.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSARIS Ingénierie — Bureau d'études techniques",
    description:
      "Expertise CVC, plomberie, thermique, énergie et génie électrique pour maîtres d'ouvrage, architectes et entreprises d'exécution.",
  },
  category: "Engineering",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "OSARIS Ingénierie",
  legalName: "OSARIS Ingénierie SAS",
  description:
    "Bureau d'études techniques indépendant spécialisé en CVC, plomberie, thermique du bâtiment, performance énergétique, hybridation PAC et génie électrique.",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/icon.png`,
  email: "contact@osaris-ingenierie.com",
  telephone: "+33652193807",
  foundingDate: "2016",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "SIREN",
    value: "818166373",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 rue Pierre Dubois",
    postalCode: "59500",
    addressLocality: "Douai",
    addressRegion: "Hauts-de-France",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Île-de-France" },
    { "@type": "AdministrativeArea", name: "Hauts-de-France" },
    { "@type": "Country", name: "France" },
  ],
  knowsAbout: [
    "Génie climatique CVC",
    "Plomberie et réseaux sanitaires",
    "Production ECS collective",
    "Ventilation et traitement d'air",
    "Thermique réglementaire RE2020",
    "Performance énergétique",
    "Hybridation PAC Air/Eau",
    "Chaufferies collectives",
    "Génie électrique CFO/CFA",
    "Études d'exécution",
  ],
  serviceType: "Bureau d'études techniques du bâtiment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-night-900 text-night-50 antialiased">
        {children}
      </body>
    </html>
  );
}
