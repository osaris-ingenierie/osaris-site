"use client";

import { useState } from "react";
import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";
import { references, categories } from "@/lib/references-data";

interface ReferencesSectionProps {
  /** Mode aperçu (page d'accueil) : sélection limitée + bouton vers /references, sans filtres. */
  preview?: boolean;
  /** Nombre de références affichées en mode aperçu. */
  previewCount?: number;
}

export function ReferencesSection({ preview = false, previewCount = 9 }: ReferencesSectionProps) {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered =
    activeCategory === "Tous"
      ? references
      : references.filter((r) => r.cat === activeCategory);

  const shown = preview ? references.slice(0, previewCount) : filtered;

  return (
    <section id="references" className="py-12 sm:py-14 lg:py-20 bg-night-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0} inView duration={0.5}>
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="block w-5 h-[1.5px] bg-brand-orange" />
              <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                Références
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-night-50 mb-2">
              Projets réalisés
            </h2>
            <p className="text-night-200 text-sm">
              {preview ? (
                <>Sélection de projets représentatifs — <span className="text-night-300">{references.length} références au total</span></>
              ) : (
                <>Sélection non exhaustive — 2016 → 2026 · <span className="text-night-300">{references.length} références</span></>
              )}
            </p>
          </div>
        </BlurFade>

        {/* Filtres catégories — uniquement sur la page dédiée */}
        {!preview && (
          <BlurFade delay={0.1} inView>
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "font-mono text-[0.62rem] tracking-widest uppercase px-3 py-1.5 rounded border transition-all duration-200",
                    activeCategory === cat
                      ? "bg-brand-orange text-white border-brand-orange shadow-soft"
                      : "bg-night-800 text-night-200 border-night-600 hover:border-brand-orange/40 hover:text-brand-orange"
                  )}
                >
                  {cat}
                  {cat !== "Tous" && (
                    <span className="ml-1.5 opacity-60">
                      ({references.filter((r) => r.cat === cat).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </BlurFade>
        )}

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shown.map((ref, i) => (
            <BlurFade key={`${ref.title}-${i}`} delay={Math.min(i * 0.03, 0.3)} inView duration={0.35}>
              <div className="group h-full bg-night-800 border border-night-700 rounded-xl p-5 shadow-card hover:shadow-card-hover hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300">
                <div className="font-mono text-[0.6rem] tracking-widest uppercase text-brand-orange-dark mb-2">
                  {ref.cat}
                </div>
                <h3 className="font-display font-bold text-lg text-night-50 mb-0.5 leading-tight">
                  {ref.title}
                </h3>
                <div className="font-mono text-xs text-night-300 mb-2">
                  {ref.location}
                </div>
                <p className="text-night-200 text-sm leading-relaxed mb-3">
                  {ref.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ref.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[0.58rem] tracking-wider uppercase px-2 py-0.5 bg-night-850 text-night-300 border border-night-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* CTA : aperçu → page références ; page → mention book */}
        <BlurFade delay={0.3} inView>
          <div className="text-center mt-10">
            {preview ? (
              <Link
                href="/references"
                className="group/cta inline-flex items-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-display font-bold tracking-wide uppercase text-sm rounded-lg shadow-soft hover:bg-brand-orange-dark hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
              >
                Voir toutes nos références
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ) : (
              <p className="text-night-300 text-sm font-mono tracking-wide">
                Liste non exhaustive ·{" "}
                <Link href="/contact" className="text-brand-orange-dark hover:text-brand-orange transition-colors underline underline-offset-4">
                  Demandez notre book de références complet
                </Link>
              </p>
            )}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
