import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ReferencesSection } from "@/components/sections/references";
import { MethodologiePreview } from "@/components/sections/methodologie-preview";
import { AproposPreview } from "@/components/sections/apropos-preview";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      {/* Lien d'évitement — accessibilité clavier (visible uniquement au focus clavier) */}
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[100] focus-visible:px-4 focus-visible:py-2 focus-visible:bg-brand-orange focus-visible:text-night-900 focus-visible:rounded-md focus-visible:font-display focus-visible:font-bold focus-visible:text-sm"
      >
        Aller au contenu principal
      </a>

      <Header />

      <main id="main" className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ReferencesSection preview previewCount={9} />
        <MethodologiePreview />
        <AproposPreview />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
