import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ReferencesSection } from "@/components/sections/references";

const SITE_URL = "https://www.osaris-ingenierie.com";

export const metadata: Metadata = {
  title: "Références — projets réalisés",
  description:
    "Découvrez les références d'OSARIS Ingénierie : chaufferies et PAC, logements collectifs, équipements publics, tertiaire, réhabilitation, ENR et géothermie. Plus de soixante projets en CVC, fluides, thermique et génie électrique.",
  alternates: { canonical: `${SITE_URL}/references` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/references`,
    siteName: "OSARIS Ingénierie",
    title: "Références — projets réalisés | OSARIS Ingénierie",
    description:
      "Projets réalisés en CVC, plomberie, thermique, hydraulique chaufferie, PAC et génie électrique.",
  },
};

export default function ReferencesPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen pt-20">
        <ReferencesSection />
      </main>
      <Footer />
    </>
  );
}
