import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MethodologieSection } from "@/components/sections/methodologie";

const SITE_URL = "https://www.osaris-ingenierie.com";

export const metadata: Metadata = {
  title: "Méthodologie — de l'analyse à la réception",
  description:
    "La méthodologie d'OSARIS Ingénierie : analyse du besoin, relevés et diagnostic, études techniques, dimensionnement et plans d'exécution, DCE, suivi et assistance chantier, en conception comme en rénovation.",
  alternates: { canonical: `${SITE_URL}/methodologie` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/methodologie`,
    siteName: "OSARIS Ingénierie",
    title: "Méthodologie | OSARIS Ingénierie",
    description:
      "Une démarche structurée des études de conception jusqu'à la réception des installations.",
  },
};

export default function MethodologiePage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen pt-20">
        <MethodologieSection />
      </main>
      <Footer />
    </>
  );
}
