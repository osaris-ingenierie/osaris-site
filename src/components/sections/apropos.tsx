"use client";

import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { BrandName } from "@/components/ui/brand-name";

const values = [
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L12.4 7.3L18 8.1L14 12L15 17.5L10 14.8L5 17.5L6 12L2 8.1L7.6 7.3L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    label: "Expertise reconnue",
    desc: "20+ ans d'expérience en maîtrise d'œuvre tous corps d'état techniques.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" /><path d="M6.5 10L9 12.5L13.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    label: "Interlocuteur unique",
    desc: "Un ingénieur diplômé référent sur chaque mission, sans sous-traitance systématique. Communication directe, délais tenus.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="6" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M7 6V4.5C7 3.1 8.1 2 9.5 2H10.5C11.9 2 13 3.1 13 4.5V6" stroke="currentColor" strokeWidth="1.5" /></svg>),
    label: "Toutes phases MOE",
    desc: "APS → APD → PRO → DCE → Visa → DET → AOR. Accompagnement complet de la conception à la réception.",
  },
  {
    icon: (<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10 Q7 4 10 8 Q13 12 17 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" /><path d="M3 15 Q7 9 10 13 Q13 17 17 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" /></svg>),
    label: "Spécialiste PAC & hybridation",
    desc: "Expertise reconnue en hybridation de chaufferies collectives PAC Air/Eau : dimensionnement, régulation cascade, mise en service.",
  },
];

const moyens = [
  "2 stations Intel i9-14900K · 6 écrans 34''",
  "1 serveur de données dédié (RAID + sauvegarde)",
  "2 PC portables (mobilité chantier & réunions)",
  "Imprimante A3 grand format + traceur plans",
  "Réseau interne Ethernet 10 Gb",
];

const specialites = [
  { label: "Chauffage & climatisation",             slug: "chauffage-climatisation",                    icon: "M4 14 Q8 8 12 12 Q16 16 20 10" },
  { label: "Ventilation & traitement d'air",         slug: "ventilation-traitement-air",                 icon: "M3 11 L9 11 M9 11 L9 6 M9 11 L9 16 M15 11 L21 11 M15 11 L15 6 M15 11 L15 16" },
  { label: "Plomberie & réseaux sanitaires",         slug: "plomberie-reseaux-sanitaires",               icon: "M12 3 C12 3 7 8 7 13 A5 5 0 0 0 17 13 C17 8 12 3 12 3Z" },
  { label: "Production ECS & bouclage",              slug: "production-ecs-bouclage",                    icon: "M8 4 L8 16 M8 10 L16 10 M16 4 L16 16" },
  { label: "Thermique réglementaire & NF EN 12831",  slug: "thermique-reglementaire-nf-en-12831",         icon: "M3 17 L6 11 L10 14 L14 8 L18 11 L21 5" },
  { label: "Performance énergétique",                slug: "performance-energetique",                    icon: "M3 12 A9 9 0 1 1 21 12 A9 9 0 0 1 3 12 M12 7 L12 12 L15 15" },
  { label: "Traitement d'eau chaufferies & sous-station", slug: "traitement-eau-chaufferies-sous-stations", icon: "M5 12 A7 7 0 1 0 19 12 M5 12 L3 10 M5 12 L7 10 M19 12 L17 14 M19 12 L21 14" },
  { label: "Hydraulique chaufferie & sous-station",  slug: "hydraulique-chaufferie-sous-station",         icon: "M4 8 Q8 4 12 8 Q16 12 20 8 M4 14 Q8 10 12 14 Q16 18 20 14" },
  { label: "Génie électrique CFO/CFA",               slug: "genie-electrique-cfo-cfa",                    icon: "M5 5 L9 5 L9 9 L5 9 Z M15 5 L19 5 L19 9 L15 9 Z M5 15 L9 15 L9 19 L5 19 Z M9 7 L15 7 M9 17 L15 17 M17 9 L17 15" },
  { label: "Études d'exécution & assistance technique", slug: "etudes-execution-assistance-technique",    icon: "M4 6 L13 6 M4 10 L13 10 M4 14 L10 14 M16 12 L20 16 L16 20" },
];

export function AproposSection() {
  return (
    <section id="apropos" className="py-16 sm:py-20 lg:py-28 bg-night-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Bloc principal : texte gauche + valeurs droite ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">

          {/* Gauche — présentation */}
          <div>
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">À propos</span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-night-50 mb-6 leading-tight">
                Un bureau d'études<br />
                <span className="text-brand-orange">indépendant</span> fondé<br />
                en 2016.
              </h2>
            </BlurFade>

            <BlurFade delay={0.1} inView duration={0.5}>
              <div className="space-y-4 text-night-200 text-sm leading-relaxed mb-8">
                <p>
                  <BrandName /> est un bureau d'études techniques indépendant spécialisé en CVC,
                  plomberie, thermique du bâtiment, performance énergétique, ventilation, production
                  d'ECS, hybridation PAC et génie électrique. Créée début 2016, la société s'appuie
                  sur près de vingt années d'expérience en conception, dimensionnement, études
                  d'exécution et suivi d'installations techniques, acquises dans les domaines du
                  chauffage, de la climatisation, de la ventilation, des réseaux sanitaires, de la
                  thermique réglementaire et de l'optimisation énergétique.
                </p>
                <p>
                  Notre expertise couvre notamment les études d'exécution, la conception technique
                  et l'assistance à maîtrise d'œuvre pour les installations de chauffage, ventilation,
                  climatisation, plomberie, ECS, réseaux hydrauliques, thermique réglementaire,
                  performance énergétique et hybridation de chaufferies collectives à base de PAC Air/Eau.
                </p>
                <p>
                  Nous intervenons auprès des bailleurs sociaux, collectivités, promoteurs, syndics,
                  entreprises générales et entreprises d'exécution, en Île-de-France et partout en France.
                </p>
              </div>
            </BlurFade>

            {/* Moyens matériels */}
            <BlurFade delay={0.2} inView>
              <div className="p-5 bg-night-800 border border-night-700 rounded-xl shadow-card mb-6">
                <div className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 mb-3">
                  Moyens matériels
                </div>
                <ul className="space-y-1.5">
                  {moyens.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-night-200 text-xs">
                      <span className="text-brand-orange mt-0.5 flex-shrink-0">›</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>

            <BlurFade delay={0.25} inView>
              <a href="#contact" className="inline-flex items-center gap-2 text-brand-orange-dark font-display font-bold tracking-wide uppercase text-sm hover:gap-3 transition-all duration-200">
                Travailler avec nous
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </BlurFade>
          </div>

          {/* Droite — valeurs + clients */}
          <div>
            <BlurFade delay={0.1} inView duration={0.5}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 auto-rows-fr">
                {values.map((v, i) => (
                  <BlurFade key={i} delay={0.12 + i * 0.06} inView duration={0.4} className="h-full">
                    <div className="h-full flex flex-col p-5 bg-night-800 border border-night-700 rounded-xl shadow-card hover:shadow-card-hover hover:border-brand-orange/30 transition-all duration-300 group">
                      <div className="text-night-200 group-hover:text-brand-orange transition-colors mb-3">{v.icon}</div>
                      <div className="font-display font-bold text-base text-night-100 mb-1.5">{v.label}</div>
                      <p className="text-night-300 text-xs leading-relaxed">{v.desc}</p>
                    </div>
                  </BlurFade>
                ))}
              </div>

              {/* Zones */}
              <div className="p-5 bg-night-800 border border-night-700 rounded-xl shadow-card mb-4">
                <div className="font-mono text-[0.62rem] tracking-widest uppercase text-night-300 mb-3">
                  Zones d'intervention
                </div>
                <p className="text-night-200 text-sm">
                  France entière et étranger. Siège social :{" "}
                  <span className="text-night-200">18 rue Pierre Dubois, 59500 Douai</span>
                </p>
              </div>

              {/* Clients */}
              <div className="p-4 bg-night-800 border border-night-700 rounded-xl shadow-card">
                <div className="font-mono text-[0.6rem] tracking-widest uppercase text-night-300 mb-3">
                  Clients & donneurs d'ordre
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Bailleurs sociaux", "Collectivités", "Promoteurs", "Architectes", "Syndics", "Entreprises générales", "Entreprises d'exécution", "Maîtres d'ouvrage privés"].map((c) => (
                    <span key={c} className="font-mono text-[0.6rem] px-2.5 py-1 bg-night-850 text-night-200 border border-night-700 rounded">{c}</span>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>

        {/* ── Spécialités techniques ── */}
        <BlurFade delay={0.15} inView duration={0.5}>
          <div className="border-t border-night-700/40 pt-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="block w-5 h-[1.5px] bg-brand-orange" />
              <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                Spécialités techniques
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {specialites.map((s, i) => (
                <BlurFade key={i} delay={0.05 + i * 0.04} inView duration={0.35}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group p-4 bg-night-800 border border-night-700 rounded-xl shadow-card hover:shadow-card-hover hover:border-brand-orange/40 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-night-400 group-hover:text-brand-orange transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path d={s.icon} stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-night-600 group-hover:text-brand-orange group-hover:translate-x-0.5 transition-all duration-300">
                        <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="font-display font-bold text-sm text-night-200 group-hover:text-night-50 transition-colors duration-300 leading-tight">
                      {s.label}
                    </span>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>

      </div>
    </section>
  );
}
