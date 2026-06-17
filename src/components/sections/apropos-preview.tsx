"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BrandName } from "@/components/ui/brand-name";

export function AproposPreview() {
  return (
    <section id="apropos" className="py-12 sm:py-14 lg:py-20 bg-night-850 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0} inView duration={0.5}>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="block w-5 h-[1.5px] bg-brand-orange" />
            <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
              À propos
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-night-50 leading-tight mb-5 max-w-3xl">
            Un bureau d'études techniques indépendant
          </h2>
          <p className="text-night-200 text-base sm:text-lg leading-[1.8] max-w-3xl mb-8">
            <BrandName /> est un bureau d'études indépendant fondé en 2016, spécialisé en CVC, plomberie, thermique du bâtiment, performance énergétique, hydraulique chaufferie et génie électrique. De la conception aux études d'exécution, nous accompagnons maîtres d'ouvrage, architectes, entreprises et exploitants sur l'ensemble de leurs projets techniques.
          </p>
          <Link
            href="/a-propos"
            className="group/cta inline-flex items-center gap-2 px-7 py-3.5 bg-night-800 border border-night-600 text-night-100 font-display font-bold tracking-wide uppercase text-sm rounded-lg hover:border-brand-orange/50 hover:text-brand-orange transition-all duration-200"
          >
            Découvrir OSARIS Ingénierie
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </BlurFade>
      </div>
    </section>
  );
}
