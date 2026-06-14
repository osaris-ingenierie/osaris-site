import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ReferencesSection } from "@/components/sections/references";
import { MethodologieSection } from "@/components/sections/methodologie";
import { AproposSection } from "@/components/sections/apropos";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* Lien d'évitement — accessibilité clavier */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-orange focus:text-night-900 focus:rounded-md focus:font-display focus:font-bold focus:text-sm"
      >
        Aller au contenu principal
      </a>

      <Header />

      <main id="main" className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ReferencesSection />
        <MethodologieSection />
        <AproposSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
