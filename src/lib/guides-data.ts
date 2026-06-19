import {
  IconCVC, IconVentilation, IconPlomberie, IconThermique,
  IconElectricite,
} from "@/components/ui/service-icons";
import type { ComponentType } from "react";

export interface GuideSection {
  definition: string;
  role: string[];
  equipements: string[];
  vigilance: string[];
  erreurs: string[];
}

export interface Guide {
  slug: string;
  title: string;
  guideTitle: string;
  desc: string;
  cta: string;
  intro: string;
  tags: string[];
  Icon: ComponentType<{ className?: string }>;
  detail: GuideSection;
}

export const guides: Guide[] = [
  {
    slug: "chauffage",
    title: "Guide Chauffage & Hydraulique",
    guideTitle: "Guide chauffage & hydraulique chaufferie / sous-station",
    desc: "Comprendre les principes de conception des installations de chauffage collectif : chaufferies gaz, sous-stations raccordées aux réseaux de chauffage urbain, échangeurs, réseaux hydrauliques, collecteurs, pompes, maintien de pression, traitement d'eau, régulation et équilibrage. Ce guide présente les points clés à vérifier en conception, en rénovation, en exécution et lors de la réception technique.",
    cta: "Consulter le guide chauffage",
    intro:
      "Le chauffage assure le confort thermique des occupants en période froide. Sa conception couvre la production thermique (chaufferies gaz, sous-stations de chauffage urbain), l'hydraulique de distribution, l'équilibrage, le maintien de pression, le traitement d'eau et la régulation, en neuf comme en rénovation.",
    tags: ["Chaufferie gaz", "Sous-station", "Réseau de chaleur", "Hydraulique", "Équilibrage", "DOE"],
    Icon: IconCVC,
    detail: {
      definition:
        "Le chauffage regroupe l'ensemble des équipements assurant la production, la distribution et l'émission de chaleur dans un bâtiment. Une installation performante repose sur un dimensionnement précis, une hydraulique cohérente, un traitement d'eau adapté et une régulation maîtrisée, de la chaufferie gaz à la sous-station raccordée à un réseau de chaleur.",
      role: [
        "Garantir le confort thermique des occupants en hiver",
        "Produire la chaleur (chaufferie gaz ou sous-station de chauffage urbain)",
        "Distribuer et équilibrer l'eau chaude dans les réseaux hydrauliques",
        "Limiter les consommations et faciliter l'exploitation",
      ],
      equipements: [
        "Production : chaudières gaz, sous-stations, échangeurs à plaques",
        "Distribution : collecteurs, réseaux hydrauliques, circulateurs",
        "Équilibrage : vannes d'équilibrage, organes de réglage",
        "Maintien de pression, vases d'expansion, traitement d'eau",
        "Régulation : sondes, lois d'eau, cascade chaudières, télégestion",
      ],
      vigilance: [
        "Dimensionnement de la production et des puissances utiles",
        "Cohérence hydraulique : débits, ΔT, pertes de charge, découplage",
        "Équilibrage des circuits et stabilité de la pression différentielle",
        "Traitement d'eau : protection contre embouage, corrosion, entartrage",
        "Sécurité gaz, fumisterie et ventilation des locaux (chaufferies)",
      ],
      erreurs: [
        "Surdimensionnement des générateurs, source de surcoût et de cycles courts",
        "Absence d'équilibrage entraînant des inconforts par zone",
        "Hydraulique incohérente dégradant la condensation et la régulation",
        "Traitement d'eau négligé, réduisant la durée de vie des équipements",
      ],
    },
  },
  {
    slug: "climatisation",
    title: "Guide Climatisation & Rafraîchissement",
    guideTitle: "Guide climatisation & rafraîchissement",
    desc: "Comprendre les principaux systèmes de climatisation et de rafraîchissement : split, multi-split, DRV/VRV, groupes d'eau glacée, pompes à chaleur réversibles, ventilo-convecteurs, rooftops et CTA avec batterie froide. Ce guide aborde le dimensionnement des puissances frigorifiques, les réseaux frigorifiques ou hydrauliques, les condensats, l'acoustique, la régulation et l'accessibilité maintenance.",
    cta: "Consulter le guide climatisation",
    intro:
      "La climatisation assure le confort d'été et la maîtrise des températures intérieures. Elle nécessite une attention particulière sur les puissances frigorifiques, les systèmes (détente directe ou eau glacée), les condensats, l'acoustique, la régulation et l'intégration architecturale.",
    tags: ["Climatisation", "DRV / VRV", "Eau glacée", "PAC réversible", "Condensats", "Acoustique"],
    Icon: IconCVC,
    detail: {
      definition:
        "La climatisation traite la température et parfois l'hygrométrie des locaux en période chaude. Les systèmes à détente directe (splits, DRV/VRV) ou à eau glacée sont sélectionnés selon les besoins, les contraintes du bâtiment et les objectifs de confort.",
      role: [
        "Assurer le confort d'été et la maîtrise des températures",
        "Répondre aux besoins de locaux spécifiques (serveurs, ERP)",
        "Maîtriser la consommation énergétique du rafraîchissement",
        "S'intégrer dans l'architecture et l'acoustique du bâtiment",
      ],
      equipements: [
        "Splits, multi-splits et systèmes DRV / VRV",
        "Groupes d'eau glacée et pompes à chaleur réversibles",
        "Ventilo-convecteurs, rooftops, CTA avec batterie froide",
        "Réseaux frigorifiques et réseaux d'eau glacée",
        "Évacuation des condensats, régulation et gestion centralisée",
      ],
      vigilance: [
        "Dimensionnement des puissances frigorifiques et apports internes",
        "Évacuation fiable des condensats",
        "Contraintes acoustiques des unités extérieures et groupes froids",
        "Intégration architecturale et accessibilité maintenance",
        "Choix et traçabilité des fluides frigorigènes",
      ],
      erreurs: [
        "Sous-dimensionnement ou surdimensionnement des unités",
        "Évacuation des condensats négligée, source de désordres",
        "Nuisances sonores des groupes extérieurs mal anticipées",
        "Conflits chaud/froid faute de régulation cohérente",
      ],
    },
  },
  {
    slug: "ventilation",
    title: "Guide Ventilation & Traitement d'Air",
    guideTitle: "Guide ventilation & traitement d'air",
    desc: "Comprendre les principes de conception des installations de ventilation : VMC simple flux, VMC hygroréglable, VMC double flux, ventilation tertiaire, CTA, extraction sanitaire, réseaux aérauliques, grilles, bouches et diffuseurs. Ce guide traite des débits d'air, des pertes de charge, de l'équilibrage aéraulique, de l'acoustique, de la qualité d'air intérieur, de la régulation et de la réception des installations.",
    cta: "Consulter le guide ventilation",
    intro:
      "La ventilation assure le renouvellement de l'air intérieur, l'évacuation de l'humidité, des odeurs et des polluants, tout en participant au confort thermique et à la qualité d'air intérieur. Sa conception doit être adaptée à l'usage des locaux et garantir des débits maîtrisés, un fonctionnement silencieux et une consommation optimisée.",
    tags: ["Ventilation", "VMC", "CTA", "Qualité d'air", "Réseaux aérauliques", "Équilibrage"],
    Icon: IconVentilation,
    detail: {
      definition:
        "La ventilation assure le renouvellement de l'air intérieur d'un bâtiment. Elle évacue l'air vicié et apporte de l'air neuf, en simple flux, hygroréglable ou double flux avec récupération de chaleur, selon les usages et les exigences de performance et de qualité d'air intérieur.",
      role: [
        "Maintenir une bonne qualité d'air intérieur",
        "Évacuer l'humidité, les polluants et les odeurs",
        "Contribuer à la performance énergétique (double flux, récupération)",
        "Assurer le confort et la santé des occupants",
      ],
      equipements: [
        "VMC simple flux autoréglable et hygroréglable",
        "VMC double flux et centrales de traitement d'air (CTA)",
        "Réseaux de gaines, bouches d'extraction et de soufflage",
        "Grilles de transfert, diffuseurs, registres et récupérateurs",
        "Filtres, caissons d'extraction et pièges à son",
      ],
      vigilance: [
        "Respect des débits réglementaires ou fonctionnels",
        "Maîtrise des pertes de charge et des vitesses d'air",
        "Traitement acoustique des CTA, extracteurs et terminaux",
        "Accessibilité pour la maintenance et le changement des filtres",
        "Équilibrage aéraulique des réseaux",
      ],
      erreurs: [
        "Réseaux sous-dimensionnés générant bruit et pertes de charge",
        "Absence de traitement acoustique des équipements",
        "Filtres et caissons inaccessibles pour la maintenance",
        "Débits non équilibrés entre les locaux",
      ],
    },
  },
  {
    slug: "plomberie-sanitaire-ecs",
    title: "Guide Plomberie & Sanitaires",
    guideTitle: "Guide plomberie sanitaire, ECS & eaux pluviales",
    desc: "Comprendre les principes de conception des installations de plomberie sanitaire : alimentation eau froide, production ECS, bouclage ECS, évacuations EU/EV, eaux pluviales EP, appareils sanitaires, comptage, disconnexion et protection sanitaire. Ce guide présente les points de vigilance liés aux débits, pressions, pertes de charge, températures ECS, temps d'attente, équilibrage du bouclage, pentes d'évacuation, descentes EP, acoustique, maintenance, essais et DOE.",
    cta: "Consulter le guide plomberie",
    intro:
      "La plomberie sanitaire constitue un lot essentiel au bon fonctionnement d'un bâtiment. Elle assure l'alimentation en eau froide, la production et la distribution d'eau chaude sanitaire, l'évacuation des eaux usées et eaux vannes, l'évacuation des eaux pluviales, ainsi que la protection sanitaire des réseaux.",
    tags: ["Plomberie sanitaire", "Eau froide", "ECS", "Bouclage ECS", "EU / EV", "EP"],
    Icon: IconPlomberie,
    detail: {
      definition:
        "La plomberie sanitaire comprend la distribution d'eau froide, la production et la distribution d'eau chaude sanitaire (ECS) avec bouclage, et l'évacuation des eaux usées et vannes. Sa conception garantit l'hygiène, la pression aux points de puisage, la maîtrise du risque légionelle et la conformité aux DTU.",
      role: [
        "Alimenter les points d'eau en eau froide et eau chaude sanitaire",
        "Produire et boucler l'ECS en maîtrisant le risque sanitaire",
        "Évacuer les eaux usées et vannes de façon fiable",
        "Protéger le réseau d'eau potable et faciliter la maintenance",
      ],
      equipements: [
        "Réseaux d'eau froide sanitaire (EFS) et comptage",
        "Production ECS : ballons, échangeurs, préparateurs",
        "Réseaux de bouclage ECS, circulateurs, vannes d'équilibrage",
        "Évacuations EU / EV, ventilations primaires, appareils sanitaires",
        "Disconnecteurs, clapets et dispositifs de protection sanitaire",
      ],
      vigilance: [
        "Dimensionnement selon EN 12056 et DTU 60.11",
        "Maintien en température et équilibrage du bouclage ECS",
        "Prévention du risque légionelle et des brûlures (mitigeage)",
        "Calorifugeage des canalisations et limitation des pertes",
        "Protections sanitaires (disconnecteurs, clapets), coups de bélier",
      ],
      erreurs: [
        "Diamètres inadaptés générant bruit ou manque de pression",
        "Bouclage ECS mal équilibré, zones froides propices aux légionelles",
        "Production et stockage ECS sous-dimensionnés",
        "Absence de protection contre les retours d'eau",
      ],
    },
  },
  {
    slug: "thermique-performance-energetique",
    title: "Guide Thermique Du Bâtiment",
    guideTitle: "Guide thermique du bâtiment, déperditions & performance énergétique",
    desc: "Comprendre les études thermiques appliquées au bâtiment : calculs de déperditions, dimensionnement des émetteurs, NF EN 12831, RE2020, RT Existant, simulation thermique dynamique, confort d'été, analyse de l'enveloppe, ponts thermiques et scénarios de rénovation énergétique. Ce guide aide à relier performance énergétique, confort et cohérence des systèmes techniques.",
    cta: "Consulter le guide thermique",
    intro:
      "La thermique du bâtiment permet de comprendre, quantifier et optimiser les échanges de chaleur entre un bâtiment et son environnement. La performance énergétique repose sur une approche globale : enveloppe, isolation, ponts thermiques, ventilation, apports solaires, inertie, systèmes et régulation, en neuf comme en rénovation.",
    tags: ["Déperditions", "NF EN 12831", "RE2020", "RT Existant", "STD", "Performance énergétique"],
    Icon: IconThermique,
    detail: {
      definition:
        "La thermique du bâtiment étudie les échanges de chaleur entre le bâtiment et son environnement : déperditions, apports solaires et internes, inertie et isolation. La performance énergétique vise à réduire les consommations en combinant qualité de l'enveloppe, systèmes performants, régulation et suivi des consommations.",
      role: [
        "Évaluer les besoins de chauffage et de rafraîchissement",
        "Calculer les déperditions et dimensionner les émetteurs",
        "Optimiser l'enveloppe et limiter les ponts thermiques",
        "Garantir le confort d'hiver et d'été tout en réduisant les consommations",
      ],
      equipements: [
        "Enveloppe : parois, menuiseries, isolation, protections solaires",
        "Outils de calcul de déperditions (NF EN 12831) et de STD",
        "Systèmes performants (PAC, récupération d'énergie)",
        "Régulation, GTB / GTC et comptage énergétique",
        "Traitement des ponts thermiques et de l'inertie",
      ],
      vigilance: [
        "Calcul des déperditions selon NF EN 12831 et hypothèses réalistes",
        "Analyse réglementaire adaptée (RE2020 en neuf, RT Existant en rénovation)",
        "Confort d'été et limitation des surchauffes (STD)",
        "Cohérence enveloppe / systèmes / régulation",
        "Priorisation des travaux et suivi réel des consommations",
      ],
      erreurs: [
        "Hypothèses de calcul inadaptées au bâtiment réel",
        "Ponts thermiques négligés et risques de condensation",
        "Confort d'été oublié dans la conception",
        "Remplacer un équipement sans traiter l'enveloppe ni la régulation",
      ],
    },
  },
  {
    slug: "genie-electrique-regulation-gtb-gtc",
    title: "Guide Electricité CFO/CFA",
    guideTitle: "Guide génie électrique, régulation, GTB & GTC",
    desc: "Comprendre les interfaces électriques et de régulation des équipements techniques du bâtiment : CFO/CFA, armoires électriques CVC, automatismes, régulation chauffage, ventilation, climatisation, production ECS, GTB, GTC, télégestion, comptage énergétique, reports d'alarme, listes de points et synoptiques. Ce guide présente les éléments nécessaires à une exploitation fiable, lisible et maintenable.",
    cta: "Consulter le guide GTB / GTC",
    intro:
      "Le génie électrique appliqué aux installations techniques permet d'alimenter, protéger, commander et superviser les équipements CVC, plomberie, production thermique, ventilation, climatisation et ECS. La régulation, la GTB et la GTC adaptent le fonctionnement aux besoins réels et optimisent l'exploitation.",
    tags: ["CFO / CFA", "Régulation", "GTB", "GTC", "Télégestion", "Comptage"],
    Icon: IconElectricite,
    detail: {
      definition:
        "Le génie électrique appliqué aux lots techniques assure l'alimentation, la protection et le raccordement des équipements CVC et fluides. La régulation pilote localement les installations, tandis que la GTB (gestion technique du bâtiment) et la GTC (gestion technique centralisée) supervisent l'ensemble pour optimiser le fonctionnement et l'exploitation.",
      role: [
        "Alimenter, protéger et commander les équipements techniques",
        "Réguler le chauffage, la ventilation, la climatisation et l'ECS",
        "Superviser, suivre les alarmes et piloter via GTB / GTC",
        "Optimiser les consommations et faciliter l'exploitation",
      ],
      equipements: [
        "Armoires électriques techniques (CFO / CFA)",
        "Régulateurs, automates, sondes et actionneurs",
        "Vannes et registres motorisés, circulateurs à vitesse variable",
        "Superviseur GTB / GTC, listes de points, synoptiques",
        "Compteurs énergétiques, télégestion et reports d'alarme",
      ],
      vigilance: [
        "Bilan de puissance, sélectivité et coordination des protections",
        "Définition claire des lois d'eau, consignes et chaînes de sécurité",
        "Qualité de la liste de points et des synoptiques GTB / GTC",
        "Interopérabilité des protocoles (BACnet, Modbus)",
        "Hiérarchisation des alarmes et suivi énergétique exploitable",
      ],
      erreurs: [
        "Puissances disponibles insuffisantes pour les équipements",
        "Régulation mal paramétrée annulant les économies attendues",
        "Trop d'alarmes non hiérarchisées, ignorées par l'exploitant",
        "Protocoles incompatibles et interfaces mal définies",
      ],
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

/** Redirections des anciens slugs de guides vers les 6 guides fusionnés. */
export const guideRedirects: Record<string, string> = {
  "plomberie-sanitaire": "plomberie-sanitaire-ecs",
  "eau-chaude-sanitaire": "plomberie-sanitaire-ecs",
  "thermique-du-batiment": "thermique-performance-energetique",
  "performance-energetique": "thermique-performance-energetique",
  "genie-electrique": "genie-electrique-regulation-gtb-gtc",
  "regulation-gtb-gtc": "genie-electrique-regulation-gtb-gtc",
};

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Quelle est la différence entre une chaufferie gaz et une sous-station de chauffage urbain ?",
    a:
      "Une chaufferie gaz produit la chaleur par combustion sur site (chaudières, brûleurs, alimentation gaz, fumisterie). Une sous-station ne produit pas de chaleur : elle transfère l'énergie d'un réseau de chaleur urbain vers les réseaux du bâtiment au moyen d'échangeurs, sans combustion.",
  },
  {
    q: "OSARIS Ingénierie intervient-il en rénovation comme en neuf ?",
    a:
      "Oui. Nous intervenons en bâtiment neuf dès la conception, et en rénovation sur la base d'un diagnostic de l'existant, en tenant compte des contraintes de site, de phasage et de continuité de service.",
  },
  {
    q: "Réalisez-vous des études d'exécution pour les entreprises ?",
    a:
      "Oui. Au-delà de la conception pour les maîtres d'ouvrage, nous accompagnons les entreprises titulaires en phase d'exécution : plans, schémas, notes de calcul, synoptiques, listes de points et préparation du DOE.",
  },
  {
    q: "Quels livrables produisez-vous ?",
    a:
      "Selon la mission : notes de calcul et dimensionnements, schémas de principe, plans techniques, pièces écrites (CCTP, DPGF), rapports d'essais et d'équilibrage, et éléments de DOE.",
  },
  {
    q: "Comment est assurée la qualité d'air intérieur dans vos études de ventilation ?",
    a:
      "Par un dimensionnement adapté aux usages et à l'occupation, des débits maîtrisés, une régulation cohérente (horaires, sondes CO₂ ou hygrométrie) et une attention à l'entretien des filtres et au nettoyage des réseaux.",
  },
  {
    q: "Vos calculs de déperditions suivent-ils une norme ?",
    a:
      "Lorsque la mission le nécessite, nos calculs de déperditions sont réalisés selon la NF EN 12831, pièce par pièce, pour dimensionner émetteurs, réseaux et générateurs.",
  },
  {
    q: "Qu'apporte une GTB ou une GTC à l'exploitation ?",
    a:
      "Elles centralisent la supervision, les alarmes et le comptage, facilitent le pilotage horaire et par zone, et permettent un suivi énergétique pour identifier les dérives et optimiser l'exploitation.",
  },
  {
    q: "Comment vous contacter pour une étude ?",
    a:
      "Via la page contact du site. Nous étudions chaque projet selon ses contraintes propres, du diagnostic à la réception technique.",
  },
];
