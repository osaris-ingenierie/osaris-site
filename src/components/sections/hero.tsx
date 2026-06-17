"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BrandName } from "@/components/ui/brand-name";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useRouter } from "next/navigation";

const stats = [
  { value: 20, suffix: "+", label: "Ans d'expérience" },
  { value: 300, suffix: "+", label: "Projets réalisés" },
  { value: 5, suffix: "", label: "Domaines techniques" },
  { value: 10, suffix: "+", label: "Ans d'activité (2016)" },
];

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 sm:pt-24 pb-14 overflow-hidden">
      <DotPattern width={24} height={24} cr={1} className="text-night-500/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-night-900/60 via-night-900/30 to-night-900" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-brand-orange/[0.06] blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-brand-orange/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <BlurFade delay={0} duration={0.5}>
            <div className="inline-flex items-center gap-2.5 mb-8 max-w-full">
              <span className="block w-6 h-[1.5px] bg-brand-orange flex-shrink-0" />
              <span className="font-mono text-[0.62rem] sm:text-[0.72rem] tracking-[0.15em] uppercase text-brand-orange-dark">
                Bureau d'études techniques · CVC · Fluides · Thermique · Énergie · Génie Électrique
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.1} duration={0.6}>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,6vw,5.25rem)] leading-[1.04] tracking-tight text-night-50 mb-8">
              Bureau d'études
              <br />
              <span className="text-brand-orange-dark">fluides</span>, thermique
              <br />
              et énergie.
            </h1>
          </BlurFade>

          <BlurFade delay={0.2} duration={0.5}>
            <p className="text-night-200 text-base sm:text-lg leading-[1.75] max-w-2xl mb-12">
              Concevoir, dimensionner et fiabiliser les installations techniques du bâtiment : chauffage, ventilation, climatisation, plomberie sanitaire, thermique, performance énergétique et génie électrique.
              <span className="block mt-3 text-night-300">
                De l'étude à la réception, <BrandName /> accompagne vos projets avec rigueur, précision et sens opérationnel.
              </span>
            </p>
          </BlurFade>

          <BlurFade delay={0.3} duration={0.5}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center mb-14 sm:mb-20">
              <ShimmerButton
                shimmerColor="rgba(255,255,255,0.5)"
                background="rgba(255,102,0,1)"
                borderRadius="8px"
                onClick={() => router.push("/services")}
                className="group/btn font-display font-bold tracking-wide uppercase text-sm px-7 py-4 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                Découvrir nos services
                <svg className="ml-2 transition-transform duration-200 group-hover/btn:translate-x-1" width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ShimmerButton>
              <button
                onClick={() => router.push("/contact")}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-night-800 border border-night-600 text-night-100 font-display font-bold tracking-wide uppercase text-sm rounded-lg shadow-soft hover:border-brand-orange/50 hover:text-brand-orange hover:-translate-y-0.5 hover:shadow-card transition-all duration-200"
              >
                Nous contacter
              </button>
            </div>
          </BlurFade>

          <BlurFade delay={0.4} duration={0.5}>
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-night-700 rounded-xl overflow-hidden shadow-soft bg-night-800 divide-x divide-y sm:divide-y-0 divide-night-700">
              {stats.map((stat, i) => (
                <div key={i} className="px-5 py-6 flex flex-col gap-1.5">
                  <div className="font-display font-extrabold text-3xl text-night-50">
                    <NumberTicker value={stat.value} delay={0.5} />
                    <span className="text-brand-orange">{stat.suffix}</span>
                  </div>
                  <div className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-night-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>

      <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} aria-label="Aller à la section services" className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-night-400 hover:text-brand-orange transition-colors duration-300">
        <svg width="22" height="22" viewBox="0 0 16 16" fill="none" className="animate-bounce">
          <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </section>
  );
}
