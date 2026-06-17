import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AproposSection } from "@/components/sections/apropos";

const SITE_URL = "https://www.osaris-ingenierie.com";

export const metadata: Metadata = {
  title: "À propos — bureau d'études techniques indépendant",
  description:
    "OSARIS Ingénierie, bureau d'études techniques indépendant fondé en 2016, spécialisé en CVC, plomberie, thermique du bâtiment, performance énergétique, hydraulique chaufferie et génie électrique.",
  alternates: { canonical: `${SITE_URL}/a-propos` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/a-propos`,
    siteName: "OSARIS Ingénierie",
    title: "À propos | OSARIS Ingénierie",
    description:
      "Bureau d'études techniques indépendant en CVC, fluides, thermique, énergie et génie électrique.",
  },
};

export default function AproposPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen pt-20">
        <AproposSection />
      </main>
      <Footer />
    </>
  );
}
