"use client";

import { BlurFade } from "@/components/ui/blur-fade";

interface NumberedCardGridProps {
  /** Libellé de l'eyebrow affiché au-dessus du titre (mono, orange) */
  eyebrow: string;
  /** Liste des items à afficher, chacun devenant une carte numérotée */
  items: string[];
  /** Délai d'apparition de base pour la cascade BlurFade */
  baseDelay?: number;
}

/**
 * Grille de cartes numérotées (01, 02, 03…), homogène avec la section
 * « Notre accompagnement ». Chaque item de la liste devient une carte
 * individuelle. Grille responsive : 1 col (mobile) / 2 (tablette) / 3 (desktop).
 * Apparition progressive au scroll, micro-interaction au survol.
 */
export function NumberedCardGrid({ eyebrow, items, baseDelay = 0 }: NumberedCardGridProps) {
  return (
    <div>
      <BlurFade delay={baseDelay} inView duration={0.5}>
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="block w-5 h-[1.5px] bg-brand-orange" />
          <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
            {eyebrow}
          </span>
        </div>
      </BlurFade>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <BlurFade key={item} delay={baseDelay + i * 0.04} inView duration={0.4}>
            <div className="group flex items-start gap-3 p-4 bg-night-800 border border-night-700 rounded-lg shadow-soft hover:shadow-card hover:border-brand-orange/30 hover:-translate-y-0.5 transition-all duration-300 h-full">
              <span className="font-mono text-xs text-brand-orange-dark font-medium flex-shrink-0 mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-night-200 text-sm leading-relaxed">{item}</span>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
