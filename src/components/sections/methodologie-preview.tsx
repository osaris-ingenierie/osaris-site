"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";

const steps = [
  { num: "01", title: "Analyse du besoin", desc: "Compréhension du projet, des contraintes et des objectifs techniques et énergétiques." },
  { num: "02", title: "Relevés & diagnostic", desc: "Relevés sur site, analyse de l'existant et des plans, identification des contraintes." },
  { num: "03", title: "Notes de calcul & plans", desc: "Dimensionnements, notes de calcul, schémas de principe et plans techniques." },
  { num: "04", title: "Dossier technique / assistance chantier", desc: "Pièces écrites, dossier d'exécution, visa et assistance jusqu'à la réception." },
];

export function MethodologiePreview() {
  return (
    <section id="methodologie" className="py-12 sm:py-14 lg:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0} inView duration={0.5}>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="block w-5 h-[1.5px] bg-brand-orange" />
              <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                Méthodologie
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-night-50 mb-2">
              Une démarche structurée
            </h2>
            <p className="text-night-200 text-sm max-w-2xl">
              De l'analyse du besoin à l'assistance chantier, une méthode rigoureuse adaptée à la conception comme à l'exécution.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {steps.map((step, i) => (
            <BlurFade key={step.num} delay={i * 0.06} inView duration={0.4} className="h-full">
              <div className="group h-full flex flex-col bg-night-800 border border-night-700 rounded-xl p-6 shadow-card hover:shadow-card-hover hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300">
                <span className="font-display font-extrabold text-3xl text-brand-orange/30 group-hover:text-brand-orange/60 transition-colors mb-3">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-lg text-night-50 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-night-200 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.3} inView>
          <div className="mt-10">
            <Link
              href="/methodologie"
              className="group/cta inline-flex items-center gap-2 px-7 py-3.5 bg-night-800 border border-night-600 text-night-100 font-display font-bold tracking-wide uppercase text-sm rounded-lg hover:border-brand-orange/50 hover:text-brand-orange transition-all duration-200"
            >
              Voir notre méthodologie
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
