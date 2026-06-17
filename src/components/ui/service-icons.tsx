"use client";

/**
 * Famille de pictogrammes métier OSARIS Ingénierie.
 * Style homogène : viewBox 28×28, trait 1.5px, couleur héritée (currentColor).
 * Chaque icône possède un élément animé discret, déclenché au survol de la carte
 * parente (group) — sobre, technique, premium.
 *
 * Accessibilité : toutes les animations sont neutralisées via prefers-reduced-motion
 * (cf. la règle globale dans globals.css + les classes .svc-anim-*).
 */

type IconProps = { className?: string };

const base = "w-7 h-7";

export function IconCVC({ className }: IconProps) {
  // Bouche de soufflage + flux d'air qui glissent
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <rect x="3" y="4" width="22" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="7" y1="4" x2="7" y2="13" stroke="currentColor" strokeWidth="1" />
      <line x1="14" y1="4" x2="14" y2="13" stroke="currentColor" strokeWidth="1" />
      <line x1="21" y1="4" x2="21" y2="13" stroke="currentColor" strokeWidth="1" />
      <g className="svc-flow">
        <path d="M6 18 q3 -2 6 0 t6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M6 22 q3 -2 6 0 t6 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
      </g>
    </svg>
  );
}

export function IconPlomberie({ className }: IconProps) {
  // Réseau de plomberie : collecteur horizontal + 2 dérivations (EF/EC),
  // vanne centrale, siphon d'évacuation, flux d'eau animé + goutte.
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Tuyau collecteur principal (horizontal) — support du flux animé */}
      <path
        id="svc-pipe-main"
        d="M3 16 H25"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Dérivation eau froide (gauche, montante avec coude) */}
      <path d="M8 16 V8 a2 2 0 0 1 2 -2 h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Dérivation eau chaude (droite, montante avec coude) */}
      <path d="M18 16 V10 a2 2 0 0 1 2 -2 h1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Vanne / raccord central (volant stylisé) */}
      <circle cx="13" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <line x1="13" y1="13.8" x2="13" y2="12.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="11.6" y1="12.4" x2="14.4" y2="12.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

      {/* Siphon d'évacuation (forme en U sous le collecteur, à droite) */}
      <path d="M22 16 v3 a2 2 0 0 1 -2 2 h-1 a2 2 0 0 0 -2 2 v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* Points de raccord (têtes de réseau EF / EC) */}
      <circle cx="11.5" cy="6" r="1.3" fill="currentColor" />
      <circle cx="21.5" cy="8" r="1.3" fill="currentColor" />

      {/* Flux d'eau qui circule le long du collecteur principal */}
      <circle className="svc-flowdot" cx="4" cy="16" r="1.4" fill="currentColor" />

      {/* Goutte d'eau discrète sous le siphon */}
      <path className="svc-drop2" d="M17 25 q1 1.4 0 2.4 q-1 -1 0 -2.4 Z" fill="currentColor" />
    </svg>
  );
}

export function IconECS({ className }: IconProps) {
  // Ballon ECS + boucle de recirculation (départ/retour) avec flux circulaire
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Ballon de stockage */}
      <rect x="5" y="3" width="9" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" />
      {/* Élément chauffant */}
      <path d="M9.5 7 v7 M7.5 9 h4 M7.5 11.5 h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
      {/* Départ ECS (haut) + retour boucle (bas) */}
      <path className="svc-loop" d="M14 6 h6 a3 3 0 0 1 3 3 v6 a3 3 0 0 1 -3 3 h-6"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Flèches de circulation départ/retour */}
      <path d="M14 6 l2 -1.5 M14 6 l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M14 18 l2 -1.5 M14 18 l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Point de circulation animé */}
      <circle className="svc-circulate" cx="23" cy="12" r="1.4" fill="currentColor" />
    </svg>
  );
}

export function IconVentilation({ className }: IconProps) {
  // Ventilateur / CTA — 4 hélices clairement identifiables, rotation lente
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5" />
      <g className="svc-rotor" style={{ transformOrigin: "14px 14px" }}>
        {/* 4 pales disposées à 90° autour du moyeu */}
        <path d="M14 13 C14 8.5 12.5 6 11 6.5 C12.5 8 13 10.5 14 13 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
        <path d="M15 14 C19.5 14 22 12.5 21.5 11 C20 12.5 17.5 13 15 14 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
        <path d="M14 15 C14 19.5 15.5 22 17 21.5 C15.5 20 15 17.5 14 15 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
        <path d="M13 14 C8.5 14 6 15.5 6.5 17 C8 15.5 10.5 15 13 14 Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.12" />
      </g>
      <circle cx="14" cy="14" r="1.8" fill="currentColor" />
    </svg>
  );
}

export function IconThermique({ className }: IconProps) {
  // Bâtiment + jauge thermique qui se remplit
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <path d="M4 24 V11 l7 -5 7 5 V24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <line x1="4" y1="24" x2="18" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="22" y="6" width="3" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <rect className="svc-gauge" x="22.8" y="11" width="1.4" height="8" rx="0.7" fill="currentColor" />
    </svg>
  );
}

export function IconPAC({ className }: IconProps) {
  // Unité PAC + onde d'échange thermique qui pulse
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <rect x="3" y="8" width="13" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path className="svc-pulse" d="M6.5 14 q1.5 -2 3 0 t3 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <line x1="16" y1="14" x2="19" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22.5" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22.5 11.5 v5 M20 14 h5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function IconElectricite({ className }: IconProps) {
  // Tableau électrique (TGBT) + départs CFO (puissance/éclair) et CFA (signal/réseau)
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Armoire / tableau */}
      <rect x="4" y="3" width="11" height="22" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Rangées de disjoncteurs */}
      <line x1="6.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="6.5" y1="10" x2="12.5" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="6.5" y1="13" x2="12.5" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Départ CFO : éclair (courant fort) */}
      <path className="svc-bolt" d="M19 6 l-2 4 h2 l-2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" transform="translate(2 0)" />
      {/* Départ CFA : ondes de signal (courant faible) */}
      <g className="svc-signal">
        <path d="M19 18 a3 3 0 0 1 3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
        <path d="M19 15 a6 6 0 0 1 6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      </g>
      <circle cx="19" cy="21" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconEtudes({ className }: IconProps) {
  // Plan technique + cotation qui se trace
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <rect x="4" y="4" width="20" height="20" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9 h6 v6 h-6 z" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <line x1="16" y1="9" x2="20" y2="9" stroke="currentColor" strokeWidth="1" />
      <line x1="16" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1" />
      <line className="svc-measure" x1="8" y1="19" x2="20" y2="19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <line x1="8" y1="17.5" x2="8" y2="20.5" stroke="currentColor" strokeWidth="1" />
      <line x1="20" y1="17.5" x2="20" y2="20.5" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function IconAssistance({ className }: IconProps) {
  // Document de suivi + coche de validation qui se trace
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      <path d="M6 3 h11 l5 5 v17 a1 1 0 0 1 -1 1 H6 a1 1 0 0 1 -1 -1 V4 a1 1 0 0 1 1 -1 z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path d="M17 3 v5 h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <path className="svc-check" d="M9 16 l3 3 l6 -7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconFroid({ className }: IconProps) {
  // Groupe frigorifique + flocon technique qui pulse
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Caisson groupe froid */}
      <rect x="3" y="9" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Ailettes condenseur */}
      <line x1="6" y1="12" x2="6" y2="17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="9" y1="12" x2="9" y2="17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <line x1="12" y1="12" x2="12" y2="17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Liaison frigorifique */}
      <line x1="15" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" />
      {/* Flocon technique */}
      <g className="svc-snow" style={{ transformOrigin: "22px 14px" }}>
        <line x1="22" y1="9" x2="22" y2="19" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="17.7" y1="11.5" x2="26.3" y2="16.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <line x1="17.7" y1="16.5" x2="26.3" y2="11.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function IconHydraulique({ className }: IconProps) {
  // Collecteurs + bouteille de découplage + circulation (chaufferie/sous-station)
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Collecteur aller (haut) et retour (bas) */}
      <line x1="4" y1="8" x2="24" y2="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="4" y1="20" x2="24" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      {/* Bouteille de découplage centrale */}
      <rect x="12" y="6" width="4" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      {/* Dérivations */}
      <line x1="8" y1="8" x2="8" y2="20" stroke="currentColor" strokeWidth="1.2" />
      <line x1="20" y1="8" x2="20" y2="20" stroke="currentColor" strokeWidth="1.2" />
      {/* Flux circulant */}
      <circle className="svc-flowdot" cx="4" cy="8" r="1.3" fill="currentColor" />
      <circle className="svc-pulse" cx="14" cy="14" r="1.3" fill="currentColor" />
    </svg>
  );
}

export function IconTraitementEau({ className }: IconProps) {
  // Cuve de traitement + gouttes filtrées + pot à boues
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Cuve / adoucisseur */}
      <rect x="6" y="6" width="11" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      {/* Niveau d'eau */}
      <path d="M6 15 q2.75 -2 5.5 0 t5.5 0" stroke="currentColor" strokeWidth="1.2" fill="none" className="svc-flow" />
      {/* Média filtrant (points) */}
      <circle cx="9" cy="19" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="20" r="0.8" fill="currentColor" opacity="0.6" />
      <circle cx="14.5" cy="19" r="0.8" fill="currentColor" opacity="0.6" />
      {/* Entrée / sortie */}
      <path d="M17 10 h5 M17 20 h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Goutte traitée */}
      <path className="svc-drop2" d="M22 12 q1 1.4 0 2.4 q-1 -1 0 -2.4 Z" fill="currentColor" />
    </svg>
  );
}

export function IconPerformance({ className }: IconProps) {
  // Bâtiment + jauge de performance qui progresse + feuille d'efficacité
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Arcs de jauge */}
      <path d="M5 20 A9 9 0 0 1 23 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.35" />
      <path className="svc-gaugearc" d="M5 20 A9 9 0 0 1 18 11.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      {/* Aiguille */}
      <line x1="14" y1="20" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="20" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconReglementation({ className }: IconProps) {
  // Bâtiment performant + label conformité (coche dans un écusson)
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Bâtiment */}
      <path d="M4 24 V11 l6 -4 6 4 V24" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      <line x1="3" y1="24" x2="17" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Feuille / énergie */}
      <path d="M7.5 17 q2.5 -3 5 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Écusson de conformité */}
      <path d="M21 6 l4 1.5 v4 q0 4 -4 5.5 q-4 -1.5 -4 -5.5 v-4 Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      <path className="svc-check" d="M19.3 11.8 l1.4 1.4 l2.4 -3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IconBilanThermique({ className }: IconProps) {
  // Plan pièce par pièce (grille) + thermomètre = bilan/déperditions
  return (
    <svg viewBox="0 0 28 28" fill="none" className={`${base} ${className ?? ""}`} aria-hidden="true">
      {/* Plan en grille (pièces) */}
      <rect x="3" y="5" width="15" height="18" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="3" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.2" />
      <line x1="10.5" y1="5" x2="10.5" y2="14" stroke="currentColor" strokeWidth="1.2" />
      <line x1="10.5" y1="14" x2="10.5" y2="23" stroke="currentColor" strokeWidth="1.2" />
      {/* Flux de déperdition (flèches sortantes animées) */}
      <path className="svc-pulse" d="M6 9 h2 M6 18 h2 M13.5 9 h2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Thermomètre */}
      <rect x="22" y="6" width="3" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="23.5" cy="20" r="2.4" stroke="currentColor" strokeWidth="1.3" />
      <rect className="svc-gauge" x="22.8" y="11" width="1.4" height="9" rx="0.7" fill="currentColor" />
    </svg>
  );
}

export const serviceIcons = {
  cvc: IconCVC,
  plomberie: IconPlomberie,
  ecs: IconECS,
  ventilation: IconVentilation,
  thermique: IconThermique,
  pac: IconPAC,
  electricite: IconElectricite,
  etudes: IconEtudes,
  assistance: IconAssistance,
  froid: IconFroid,
  hydraulique: IconHydraulique,
  traitementeau: IconTraitementEau,
  performance: IconPerformance,
} as const;

export type ServiceIconKey = keyof typeof serviceIcons;
