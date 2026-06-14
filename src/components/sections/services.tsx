"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { services, iconComponents } from "@/lib/services-data";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0} inView duration={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Domaines d'intervention
                </span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-night-50 leading-tight">
                Nos expertises techniques
              </h2>
            </div>
            <p className="sm:max-w-xs sm:text-right text-night-200 text-sm leading-relaxed">
              De la conception à la réception, en passant par les études d'exécution pour les entreprises.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = iconComponents[service.iconKey];
            return (
              <BlurFade key={service.id} delay={i * 0.05} inView duration={0.4}>
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group flex flex-col bg-night-800 p-6 h-full rounded-xl border border-night-700 shadow-card hover:shadow-card-hover hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300"
                  )}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-night-850 border border-night-700 text-night-300 group-hover:text-brand-orange group-hover:border-brand-orange/30 group-hover:bg-brand-orange/[0.06] transition-all duration-300">
                      <Icon />
                    </span>
                    <span className="font-mono text-xs text-night-400 group-hover:text-brand-orange-dark transition-colors">
                      {service.id}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-night-100 group-hover:text-night-50 transition-colors mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-night-200 text-sm leading-relaxed mb-5 flex-1">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="font-mono text-[0.6rem] tracking-wider uppercase px-2 py-1 bg-night-850 text-night-300 border border-night-700 rounded group-hover:border-brand-orange/40 group-hover:text-brand-orange-dark transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest uppercase text-brand-orange-dark mt-auto">
                    En savoir plus
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
