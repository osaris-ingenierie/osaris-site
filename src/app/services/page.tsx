import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ServicesSection } from "@/components/sections/services";

const SITE_URL = "https://www.osaris-ingenierie.com";

export const metadata: Metadata = {
  title: "Nos expertises techniques",
  description:
    "Les expertises d'OSARIS Ingénierie : chauffage et climatisation, ventilation, plomberie, ECS, thermique réglementaire RE2020, déperditions NF EN 12831, performance énergétique, hydraulique chaufferie et génie électrique CFO/CFA.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/services`,
    siteName: "OSARIS Ingénierie",
    title: "Nos expertises techniques | OSARIS Ingénierie",
    description:
      "Bureau d'études CVC, plomberie, thermique, énergie et génie électrique du bâtiment.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
