"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import { useState } from "react";
import { cn } from "@/lib/utils";

const categories = ["Tous", "Chaufferies & PAC", "Logements neufs", "Équipements publics", "Tertiaire & Culture", "Réhabilitation", "ENR & Géothermie"];

const references = [
  // ── CHAUFFERIES & PAC ──────────────────────────────────────────────────────
  {
    cat: "Chaufferies & PAC",
    title: "Résidence Les Cosmonautes — 40 lgts",
    location: "Palaiseau (91120)",
    desc: "Hybridation des chaudières collectives par PAC chauffage & ECS collective. 3/5/7/9 avenue des Cosmonautes.",
    tags: ["PAC air/eau", "ECS collective", "Hybridation"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidence Roquette",
    location: "Paris 11e (75011)",
    desc: "Hybridation des chaudières collectives par PAC chauffage & ECS collective. 146-148 rue de la Roquette.",
    tags: ["PAC air/eau", "Cascade", "Régulation"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidence Delouvain",
    location: "Paris 19e (75019)",
    desc: "Création d'une chaufferie collective hybride chaudières gaz + PAC chauffage/ECS. 4bis/8bis rue Delouvain.",
    tags: ["PAC", "Hybridation", "Chaufferie neuve"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidence Porte Jaune — 110 lgts",
    location: "Saint-Cloud (92210)",
    desc: "Nouvelle production de chauffage et eau chaude sanitaire à base de PAC air/eau. 98 rue de la Porte Jaune.",
    tags: ["PAC air/eau", "ECS collective", "110 lgts"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidence Châtenay Marronniers",
    location: "Châtenay-Malabry (92290)",
    desc: "Rénovation de la production de chaleur collective — chaufferie hybride chaudières gaz + PAC chauffage/ECS.",
    tags: ["PAC air/eau", "Rénovation", "Hybridation"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidence Les Mureaux — 183 lgts",
    location: "Les Mureaux (78130)",
    desc: "Rénovation globale des installations thermiques — réfection de la chaufferie centrale. Avenue Paul Raoult.",
    tags: ["Chaufferie centrale", "183 lgts", "Réhabilitation"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidence Boyaval",
    location: "Beaumont-sur-Oise (95260)",
    desc: "Réfection de 4 chaufferies centrales et liaisons inter-bâtiments (chauffage & ECS). Groupes 997c et 998c.",
    tags: ["Multi-chaufferies", "ECS", "Inter-bâtiments"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidences Jean Bart (61 lgts) & Georges Pascarel (127 lgts)",
    location: "Sevran / Aulnay-sous-Bois (93)",
    desc: "Création d'une sous-station reliée au réseau de chaleur urbain — distribution chauffage & ECS.",
    tags: ["Réseau chaleur urbain", "Sous-station", "188 lgts"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Chaufferie 55 logements — 116 rue de Javel",
    location: "Paris 15e",
    desc: "Réfection de la chaufferie collective d'un immeuble de 55 logements.",
    tags: ["Chaufferie collective", "55 lgts"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Foyer logement — chaufferie gaz 482 kW",
    location: "Amiens (80000)",
    desc: "Rénovation de la chaufferie gaz d'un foyer logement — puissance utile 482 kW.",
    tags: ["Chaufferie gaz", "482 kW", "Foyer logement"],
  },
  {
    cat: "Chaufferies & PAC",
    title: "Résidence L'Argilière — 80 lgts",
    location: "Villers-Saint-Paul (60)",
    desc: "Réhabilitation énergétique — CVC, création de sous-stations reliées au réseau de chauffage urbain, plomberie & sanitaires. 1-15 rue Belle Visée.",
    tags: ["Réseau chaleur urbain", "Sous-station", "CVC"],
  },

  // ── LOGEMENTS COLLECTIFS NEUFS ─────────────────────────────────────────────
  {
    cat: "Logements neufs",
    title: "422 logements collectifs",
    location: "Ozoir-la-Ferrière (77330)",
    desc: "Construction neuve — conception des lots CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie", "422 lgts"],
  },
  {
    cat: "Logements neufs",
    title: "122 logements collectifs",
    location: "Ozoir-la-Ferrière (77330)",
    desc: "Construction neuve — conception des lots CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie", "122 lgts"],
  },
  {
    cat: "Logements neufs",
    title: "47 logements + 2 niveaux de sous-sol",
    location: "Aubervilliers (93300)",
    desc: "Construction d'un ensemble immobilier — études de conception CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie", "Parking souterrain"],
  },
  {
    cat: "Logements neufs",
    title: "46 logements collectifs",
    location: "Limeil-Brévannes (94)",
    desc: "Construction — conception lots électricité CFO/CFA. Rue Pierre Curie, rue du Tertre, rue Léon Schwartzenberg.",
    tags: ["CFO/CFA", "TGBT"],
  },
  {
    cat: "Logements neufs",
    title: "32 logements + 4 commerces",
    location: "L'Haÿ-les-Roses (94240)",
    desc: "Construction sur un niveau de sous-sol — mission ACT et DET des lots fluides. 134 rue de Chevilly.",
    tags: ["ACT/DET", "Fluides", "Mixte"],
  },
  {
    cat: "Logements neufs",
    title: "174 logements collectifs",
    location: "Bordeaux (33000)",
    desc: "Construction — conception des lots électricité courants forts et faibles (CFO/CFA).",
    tags: ["CFO/CFA", "174 lgts"],
  },
  {
    cat: "Logements neufs",
    title: "Faisabilité 53 logements collectifs",
    location: "Aubervilliers (93300)",
    desc: "Étude thermique et faisabilité énergétique pour construction neuve.",
    tags: ["RE2020", "Thermique", "Faisabilité"],
  },

  // ── ÉQUIPEMENTS PUBLICS & COLLECTIVITÉS ───────────────────────────────────
  {
    cat: "Équipements publics",
    title: "Lycée Militaire — piscine & salles de sport",
    location: "Saint-Cyr-l'École (78)",
    desc: "Réhabilitation — réfection des installations de chauffage, sanitaires et d'une sous-station de production de chaleur.",
    tags: ["Piscine", "Sous-station", "Sport"],
  },
  {
    cat: "Équipements publics",
    title: "Extension école primaire Marie-Curie",
    location: "Garges-lès-Gonesse (95140)",
    desc: "STD, étude thermique & faisabilité énergétique — conception et suivi des lots CVC, plomberie & sanitaires.",
    tags: ["RE2020", "STD", "CVC"],
  },
  {
    cat: "Équipements publics",
    title: "Extension du réfectoire — VMC double flux",
    location: "Paris 10e (75010)",
    desc: "Extension d'un réfectoire d'école primaire avec mise en place d'une ventilation double flux.",
    tags: ["VMC DF", "École", "Ventilation"],
  },
  {
    cat: "Équipements publics",
    title: "Extension mairie",
    location: "L'Haÿ-les-Roses (94240)",
    desc: "Études de conception CVC, plomberie & sanitaires.",
    tags: ["CVC", "Mairie", "Collectivité"],
  },
  {
    cat: "Équipements publics",
    title: "Gymnase Jean Macé",
    location: "Corbeil-Essonnes (91100)",
    desc: "Réhabilitation — études d'exécution CVC, plomberie & sanitaires.",
    tags: ["Sport", "CVC", "Exécution"],
  },
  {
    cat: "Équipements publics",
    title: "Médiathèque",
    location: "Garches (92380)",
    desc: "Construction — conception des lots électricité courants forts et faibles (CFO/CFA).",
    tags: ["CFO/CFA", "Culture"],
  },
  {
    cat: "Équipements publics",
    title: "Centre d'hébergement d'urgence",
    location: "Paris 16e (75016)",
    desc: "Construction — conception des lots électricité courants forts et faibles (CFO/CFA).",
    tags: ["CFO/CFA", "Social"],
  },
  {
    cat: "Équipements publics",
    title: "Halle de marché",
    location: "Strasbourg (67200)",
    desc: "Construction — études de conception CVC, plomberie & sanitaires. Rue du Marché-Gare.",
    tags: ["Halle", "CVC", "Plomberie"],
  },
  {
    cat: "Équipements publics",
    title: "Halle de marché Dame Blanche",
    location: "Garges-lès-Gonesse (95140)",
    desc: "Construction — études de conception CVC, plomberie & sanitaires.",
    tags: ["Halle", "CVC"],
  },
  {
    cat: "Équipements publics",
    title: "Halle de marché couverte",
    location: "Malakoff (92240)",
    desc: "Rénovation — études de conception CVC, plomberie & sanitaires.",
    tags: ["Halle", "CVC", "Rénovation"],
  },
  {
    cat: "Équipements publics",
    title: "PC de sécurité",
    location: "Paris (75)",
    desc: "Mise en place d'un poste de commandement de sécurité — études de conception CFO/CFA et CVC, plomberie & sanitaires.",
    tags: ["CFO/CFA", "CVC", "Sécurité"],
  },

  // ── TERTIAIRE, CULTURE & INDUSTRIE ────────────────────────────────────────
  {
    cat: "Tertiaire & Culture",
    title: "Tour Sky — IGH",
    location: "Courbevoie (92400)",
    desc: "Réfection des réseaux EFS/ECS/RECS — immeuble de grande hauteur. 16 rue de Bezons.",
    tags: ["IGH", "ECS", "EFS"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Hôtel 3★",
    location: "Blotzheim (68730)",
    desc: "Construction — conception des lots électricité courants forts et faibles (CFO/CFA).",
    tags: ["CFO/CFA", "Hôtellerie"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Campus Fonderie de l'Image",
    location: "Bagnolet (93170)",
    desc: "Mise en conformité électricité CFO/CFA — deux missions successives.",
    tags: ["CFO/CFA", "Mise en conformité"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Maison des arts",
    location: "Vauhallan (91430)",
    desc: "Extension d'un équipement culturel — conception des lots électricité CFO/CFA.",
    tags: ["CFO/CFA", "Culture"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Rénovation d'un moulin en musée",
    location: "Amilly (45200)",
    desc: "Conception des lots électricité courants forts et faibles.",
    tags: ["Patrimoine", "CFO/CFA", "Musée"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Église Saint-Fermin-des-Vignes",
    location: "Amilly (45200)",
    desc: "Rénovation — conception des lots électricité courants forts et faibles.",
    tags: ["Patrimoine", "CFO/CFA", "Lieu de culte"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Salles de spectacle type Karaoké",
    location: "Paris 11e (75011)",
    desc: "Création — conception des lots CVC, plomberie & sanitaires, électricité CFO/CFA.",
    tags: ["CVC", "CFO/CFA", "Spectacle"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Immeuble bureaux + stockage",
    location: "Blanc-Mesnil (93155)",
    desc: "Reconstruction — études de conception CVC, plomberie & sanitaires.",
    tags: ["Bureaux", "CVC", "Tertiaire"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Bureaux & ateliers ZAC Lamirault",
    location: "Collégien (77090)",
    desc: "Aménagement — études de conception électricité CFO/CFA, CVC, plomberie & sanitaires. 38 rue de Lamirault.",
    tags: ["CFO/CFA", "CVC", "Plomberie"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Extension immeuble bureaux → habitation",
    location: "Viroflay (78220)",
    desc: "Changement de destination — conception des lots électricité courants forts et faibles.",
    tags: ["CFO/CFA", "Transformation"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Réfection sanitaires parc d'attraction",
    location: "Marne-la-Vallée (77)",
    desc: "Réfection des installations sanitaires et ventilation double flux.",
    tags: ["Plomberie", "VMC DF", "Parc attraction"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Désenfumage surface de vente — IT246",
    location: "Paris 15e (75015)",
    desc: "Étude de faisabilité technique de désenfumage mécanique suivant IT246.",
    tags: ["Désenfumage", "IT246", "Commerce"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Stand de tir — VMC DF & thermique",
    location: "Saint-Denis (93)",
    desc: "Aménagement d'un local en stand de tir (bâtiment tertiaire RDC) — ventilation double flux et thermique du bâtiment.",
    tags: ["VMC DF", "Thermique", "Tertiaire"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Chambres froides Qualitalia",
    location: "Paris 17e (75017)",
    desc: "Conception & suivi du lot froid alimentaire pour la chaîne Qualitalia.",
    tags: ["Froid alimentaire", "Chambre froide"],
  },
  {
    cat: "Tertiaire & Culture",
    title: "Parc de logistique urbaine SOGARIS — 2 postes HTA/BT",
    location: "Rungis (94150)",
    desc: "Remplacement de 2 postes de transformation HTA/BT sans changement de puissance — conception des lots électricité courants forts et faibles.",
    tags: ["HTA/BT", "Transformation", "CFO/CFA"],
  },

  // ── RÉHABILITATION LOGEMENTS EXISTANTS ────────────────────────────────────
  {
    cat: "Réhabilitation",
    title: "Résidence Barbusse",
    location: "Villetaneuse (93430)",
    desc: "Réhabilitation & résidentialisation — études d'exécution CVC, plomberie & sanitaires.",
    tags: ["Réhabilitation", "CVC", "Résidentialisation"],
  },
  {
    cat: "Réhabilitation",
    title: "135 logements",
    location: "Coulommiers (77120)",
    desc: "Réhabilitation — études d'exécution CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie", "135 lgts"],
  },
  {
    cat: "Réhabilitation",
    title: "280 logements — parties privatives",
    location: "Élancourt (78990)",
    desc: "Réhabilitation des parties privatives — études d'exécution plomberie & sanitaires.",
    tags: ["Plomberie", "Privatif", "280 lgts"],
  },
  {
    cat: "Réhabilitation",
    title: "198 logements — 2 bâtiments",
    location: "Aubervilliers (93300)",
    desc: "Réfection des installations de plomberie & sanitaires de deux bâtiments d'habitation.",
    tags: ["Plomberie", "198 lgts"],
  },
  {
    cat: "Réhabilitation",
    title: "94 logements",
    location: "La Courneuve (93120)",
    desc: "Réhabilitation — études d'exécution CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie", "94 lgts"],
  },
  {
    cat: "Réhabilitation",
    title: "118 logements — Paris Clisson",
    location: "Paris 13e",
    desc: "Réhabilitation énergétique — études d'exécution VMC, plomberie & sanitaires. 57 rue Clisson / 51 et 47 rue Jeanne d'Arc.",
    tags: ["VMC", "Plomberie", "118 lgts"],
  },
  {
    cat: "Réhabilitation",
    title: "50 logements",
    location: "Villers-Saint-Paul (60870)",
    desc: "Réhabilitation — études d'exécution CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie", "50 lgts"],
  },
  {
    cat: "Réhabilitation",
    title: "13 logements",
    location: "Nogent-sur-Marne (94130)",
    desc: "Réhabilitation — études d'exécution CVC, plomberie & sanitaires. 141 Grande Rue Charles de Gaulle.",
    tags: ["CVC", "Plomberie"],
  },
  {
    cat: "Réhabilitation",
    title: "11 logements",
    location: "Le Perreux-sur-Marne (94170)",
    desc: "Réhabilitation d'une résidence — études d'exécution CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie"],
  },
  {
    cat: "Réhabilitation",
    title: "4 logements",
    location: "Varennes-Jarcy (91480)",
    desc: "Réhabilitation — études d'exécution VMC, plomberie & sanitaires.",
    tags: ["VMC", "Plomberie"],
  },
  {
    cat: "Réhabilitation",
    title: "Immeuble R+7 — 2 bâtiments Haussmanniens",
    location: "Paris 16e (75016)",
    desc: "Rénovation — conception des lots CVC, plomberie & sanitaires, électricité CFO/CFA.",
    tags: ["Haussmannien", "CVC", "CFO/CFA"],
  },
  {
    cat: "Réhabilitation",
    title: "Immeuble R+6",
    location: "Paris 16e (75016)",
    desc: "Rénovation — conception des lots CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie"],
  },
  {
    cat: "Réhabilitation",
    title: "Immeuble R+5 Haussmannien",
    location: "Pantin (93)",
    desc: "Rénovation — étude thermique et études d'exécution CVC, plomberie & sanitaires.",
    tags: ["Haussmannien", "Thermique", "CVC"],
  },
  {
    cat: "Réhabilitation",
    title: "37 logements",
    location: "La Garenne-Colombes (92250)",
    desc: "Réhabilitation — études d'exécution électricité CFO/CFA, VMC, plomberie & sanitaires. 100 boulevard de la République.",
    tags: ["CFO/CFA", "VMC", "Plomberie"],
  },
  {
    cat: "Réhabilitation",
    title: "Résidence Pierre Brossolette — 120 lgts",
    location: "Mainvilliers (28300)",
    desc: "Réhabilitation thermique — réalisation des études thermiques réglementaires. 1-12 rue Pierre Brossolette.",
    tags: ["Thermique", "RTEx", "120 lgts"],
  },
  {
    cat: "Réhabilitation",
    title: "Hôtel → Maisons relais & places ALTHO",
    location: "Paray-Vieille-Poste (91550)",
    desc: "Réhabilitation d'un hôtel en maisons relais — études d'exécution CVC, plomberie & sanitaires.",
    tags: ["CVC", "Plomberie", "Changement destination"],
  },
  {
    cat: "Réhabilitation",
    title: "Réhabilitation plomberie — 2 bâtiments",
    location: "Sucy-en-Brie (94370)",
    desc: "Réhabilitation des installations de plomberie & sanitaires de deux bâtiments d'habitation.",
    tags: ["Plomberie", "Sanitaires"],
  },
  {
    cat: "Réhabilitation",
    title: "Surélevation immeuble",
    location: "Paris 13e — 53 rue de la Glacière",
    desc: "Surélévation d'un immeuble — études de conception électricité CFO/CFA.",
    tags: ["CFO/CFA", "Surélévation"],
  },
  {
    cat: "Réhabilitation",
    title: "Réfection VMC simple flux",
    location: "Palaiseau (91120)",
    desc: "Réfection de la ventilation simple flux d'un immeuble d'habitation — étude d'exécution CVC.",
    tags: ["VMC SF", "CVC"],
  },
  {
    cat: "Réhabilitation",
    title: "VMC double flux — immeuble bureaux R+1",
    location: "Corbeil-Essonnes (91104)",
    desc: "Mise en place d'une ventilation double flux — conception et suivi du lot ventilation.",
    tags: ["VMC DF", "Bureaux"],
  },
  {
    cat: "Réhabilitation",
    title: "Relevage eaux claires — parking",
    location: "Le Plessis-Paté (91220)",
    desc: "Mise en place d'un système de relevage des eaux claires au niveau du parking d'un immeuble d'habitation.",
    tags: ["Relevage", "EU", "Parking"],
  },

  // ── ENR & GÉOTHERMIE ──────────────────────────────────────────────────────
  {
    cat: "ENR & Géothermie",
    title: "PAC eau/eau géothermie sur nappe — grande puissance",
    location: "Maine-et-Loire (49)",
    desc: "Conception d'une production de chaleur de grande puissance à base de PAC eau/eau (géothermie sur nappe) — CVC, plomberie & sanitaires.",
    tags: ["Géothermie nappe", "Grande puissance"],
  },
  {
    cat: "ENR & Géothermie",
    title: "ECS solaire collective — 42 logements",
    location: "Épinay-sur-Orge (91360)",
    desc: "Mise en place d'une production d'ECS solaire collective — étude d'exécution plomberie & sanitaires.",
    tags: ["Solaire thermique", "ECS", "42 lgts"],
  },
  {
    cat: "ENR & Géothermie",
    title: "Réfection réseau ECS collectif",
    location: "Paris 8e (75008)",
    desc: "Réfection des réseaux collectifs de distribution d'ECS — étude d'exécution plomberie & sanitaires.",
    tags: ["ECS", "Réfection réseau"],
  },
  {
    cat: "ENR & Géothermie",
    title: "Centre équestre de l'Étrier — thermique",
    location: "Paris (75)",
    desc: "Études thermiques réglementaires pour l'extension du centre équestre. Route des Lacs, Madrid.",
    tags: ["Thermique", "RTEx", "Extension"],
  },
];

export function ReferencesSection() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const filtered =
    activeCategory === "Tous"
      ? references
      : references.filter((r) => r.cat === activeCategory);

  return (
    <section id="references" className="py-16 sm:py-20 lg:py-28 bg-night-850 relative">
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
              Sélection non exhaustive — 2016 → 2026 ·{" "}
              <span className="text-night-300">{references.length} références</span>
            </p>
          </div>
        </BlurFade>

        {/* Filtres catégories */}
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

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((ref, i) => (
            <BlurFade
              key={`${ref.title}-${i}`}
              delay={Math.min(i * 0.03, 0.3)}
              inView
              duration={0.35}
            >
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
                    <span
                      key={tag}
                      className="font-mono text-[0.58rem] tracking-wider uppercase px-2 py-0.5 bg-night-850 text-night-300 border border-night-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade delay={0.3} inView>
          <div className="text-center mt-10">
            <p className="text-night-300 text-sm font-mono tracking-wide">
              Liste non exhaustive ·{" "}
              <a
                href="#contact"
                className="text-brand-orange-dark hover:text-brand-orange transition-colors underline underline-offset-4"
              >
                Demandez notre book de références complet
              </a>
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
