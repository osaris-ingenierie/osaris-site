import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact";

const SITE_URL = "https://www.osaris-ingenierie.com";

export const metadata: Metadata = {
  title: "Contact — demander une étude",
  description:
    "Contactez OSARIS Ingénierie pour vos études CVC, plomberie, thermique, performance énergétique, hydraulique chaufferie et génie électrique. Réponse sous 48h, du diagnostic à la réception.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/contact`,
    siteName: "OSARIS Ingénierie",
    title: "Contact | OSARIS Ingénierie",
    description:
      "Demandez une étude technique à OSARIS Ingénierie — CVC, fluides, thermique, énergie et génie électrique.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
