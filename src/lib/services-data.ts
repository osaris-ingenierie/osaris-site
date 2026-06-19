import {
  IconCVC, IconPlomberie, IconECS, IconVentilation, IconThermique,
  IconElectricite, IconEtudes, IconHydraulique, IconTraitementEau,
  IconPerformance, IconReglementation, IconBilanThermique,
} from "@/components/ui/service-icons";

export const iconComponents = {
  cvc: IconCVC,
  plomberie: IconPlomberie,
  ecs: IconECS,
  ventilation: IconVentilation,
  thermique: IconThermique,
  electricite: IconElectricite,
  etudes: IconEtudes,
  hydraulique: IconHydraulique,
  traitementeau: IconTraitementEau,
  performance: IconPerformance,
  reglementation: IconReglementation,
  bilanthermique: IconBilanThermique,
} as const;

export type ServiceIconKey = keyof typeof iconComponents;

export interface ServiceDetail {
  intro: string;
  accompagnement: string[];
  prestations: string[];
  livrables: string[];
  enjeux: string[];
  projets: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  desc: string;
  iconKey: ServiceIconKey;
  tags: string[];
  guideSlug: string;
  detail: ServiceDetail;
}

const LIVRABLES_COMMUNS = [
  "Notes de calcul et dimensionnements",
  "Schémas de principe et synoptiques",
  "Plans techniques et d'implantation",
  "CCTP et DPGF (pièces écrites)",
  "Estimatifs et analyses comparatives",
];

export const services: Service[] = [
  {
    id: "01",
    slug: "chauffage-climatisation",
    title: "Chauffage & Hydraulique",
    shortTitle: "Chauffage & hydraulique",
    subtitle: "Chaufferies gaz, sous-stations, réseaux hydrauliques et production thermique",
    desc:
      "Études de chauffage, chaufferies gaz, sous-stations raccordées aux réseaux de chaleur et réseaux hydrauliques : production thermique, échangeurs, collecteurs, pompes, équilibrage, maintien de pression, traitement d'eau, régulation, CCTP, DPGF, exécution, réception et DOE.",
    iconKey: "cvc",
    tags: ["Chauffage", "Chaufferie", "Sous-station", "Hydraulique", "Équilibrage", "DOE"],
    guideSlug: "chauffage",
    detail: {
      intro:
        "OSARIS Ingénierie conçoit et dimensionne les installations de chauffage et leur hydraulique, de la production thermique (chaufferies gaz, sous-stations de chauffage urbain) à la distribution. Notre approche associe performance énergétique, cohérence hydraulique, traitement d'eau et exploitabilité, en construction neuve comme en rénovation.",
      accompagnement: [
        "Diagnostic et analyse des besoins thermiques",
        "Conception de la production (chaufferies gaz, sous-stations, PAC)",
        "Conception hydraulique : collecteurs, découplage, échangeurs, pompes",
        "Notes de calcul de puissance, débits, ΔT et pertes de charge",
        "Équilibrage, maintien de pression et traitement d'eau",
        "Rédaction des pièces écrites (CCTP, DPGF)",
        "Assistance en phases EXE, VISA et réception",
      ],
      prestations: [
        "Production thermique : chaudières gaz, sous-stations, PAC",
        "Hydraulique de chaufferie et de sous-station",
        "Collecteurs, bouteilles de découplage, échangeurs à plaques",
        "Réseaux de distribution, circulateurs, équilibrage",
        "Maintien de pression, vases d'expansion, traitement d'eau",
        "Régulation, cascade chaudières et télégestion",
        "Intégration en rénovation et site occupé",
      ],
      livrables: LIVRABLES_COMMUNS,
      enjeux: [
        "Maîtrise acoustique des équipements (pompes, chaudières, PAC)",
        "Cohérence hydraulique et stabilité de la régulation",
        "Protection des réseaux : embouage, corrosion, entartrage",
        "Performance énergétique et maîtrise des consommations",
        "Sécurité gaz, fumisterie et ventilation des chaufferies",
      ],
      projets: [
        "Logements collectifs neufs et réhabilités",
        "Établissements scolaires et publics",
        "Bureaux et bâtiments tertiaires",
        "Raccordements aux réseaux de chaleur urbains",
      ],
    },
  },
  {
    id: "02",
    slug: "climatisation-rafraichissement",
    title: "Climatisation & rafraîchissement",
    shortTitle: "Climatisation & rafraîchissement",
    subtitle: "Production frigorifique, détente directe, eau glacée et CTA",
    desc:
      "Études de climatisation en neuf et rénovation : split, multi-split, DRV/VRV, eau glacée, pompes à chaleur réversibles, ventilo-convecteurs, rooftops, CTA avec batterie froide, réseaux frigorifiques ou hydrauliques, condensats, acoustique, régulation et DOE.",
    iconKey: "cvc",
    tags: ["Climatisation", "DRV / VRV", "Eau glacée", "PAC réversible", "Condensats", "Acoustique"],
    guideSlug: "climatisation",
    detail: {
      intro:
        "OSARIS Ingénierie conçoit les installations de climatisation et de rafraîchissement, des systèmes à détente directe aux productions d'eau glacée. Notre approche intègre les apports thermiques, l'acoustique, les condensats, la régulation et l'intégration architecturale, en neuf comme en rénovation.",
      accompagnement: [
        "Analyse des besoins de confort d'été et des apports thermiques",
        "Choix du système (détente directe ou eau glacée)",
        "Dimensionnement des puissances frigorifiques",
        "Étude des réseaux frigorifiques ou hydrauliques",
        "Gestion des condensats et étude acoustique",
        "Sélection des équipements et de la régulation",
        "Assistance en phases EXE, VISA et réception",
      ],
      prestations: [
        "Split, multi-split, DRV / VRV",
        "Groupes d'eau glacée et pompes à chaleur réversibles",
        "Ventilo-convecteurs, rooftops, CTA avec batterie froide",
        "Réseaux frigorifiques et réseaux d'eau glacée",
        "Évacuation des condensats",
        "Régulation par zone et gestion centralisée",
        "Intégration en rénovation et site occupé",
      ],
      livrables: LIVRABLES_COMMUNS,
      enjeux: [
        "Maîtrise acoustique des unités extérieures et groupes froids",
        "Évacuation fiable des condensats",
        "Performance énergétique et confort d'été",
        "Intégration architecturale et accessibilité maintenance",
        "Traçabilité des fluides frigorigènes",
      ],
      projets: [
        "Bureaux et bâtiments tertiaires",
        "Commerces et petits ERP",
        "Locaux techniques et salles informatiques",
        "Logements collectifs et résidences",
      ],
    },
  },
  {
    id: "03",
    slug: "ventilation-traitement-air",
    title: "Ventilation & traitement d'air",
    shortTitle: "Ventilation & traitement d'air",
    subtitle: "Qualité d'air intérieur, réseaux aérauliques et centrales de traitement d'air",
    desc:
      "Études de ventilation et traitement d'air : VMC simple flux, VMC hygroréglable, VMC double flux, CTA, ventilation tertiaire, extraction sanitaire, réseaux aérauliques, qualité d'air intérieur, acoustique, régulation, équilibrage, essais, réception et DOE.",
    iconKey: "ventilation",
    tags: ["Ventilation", "VMC", "CTA", "Qualité d'air", "Réseaux aérauliques", "Équilibrage"],
    guideSlug: "ventilation",
    detail: {
      intro:
        "OSARIS Ingénierie accompagne les maîtres d'ouvrage, architectes et entreprises dans la conception, le dimensionnement et le suivi des installations de ventilation et de traitement d'air, au service de la qualité d'air intérieur et de la performance énergétique.",
      accompagnement: [
        "Diagnostic de la qualité d'air et des débits",
        "Conception des réseaux aérauliques et CTA",
        "Notes de calcul de débits et pertes de charge",
        "Sélection des équipements de ventilation",
        "Étude de la filtration et du traitement d'air",
        "Rédaction des pièces écrites (CCTP, DPGF)",
        "Assistance en phases DCE, EXE et VISA",
      ],
      prestations: [
        "Ventilation simple flux et double flux",
        "Centrales de traitement d'air (CTA)",
        "Extraction, soufflage et compensation d'air neuf",
        "Réseaux aérauliques et terminaux de diffusion",
        "Filtration et qualité d'air intérieur",
        "Calcul des débits et pertes de charge",
        "Notes de calcul et pièces écrites",
      ],
      livrables: LIVRABLES_COMMUNS,
      enjeux: [
        "Maîtrise acoustique des CTA, extracteurs, réseaux aérauliques et terminaux de diffusion",
        "Qualité d'air intérieur",
        "Débits réglementaires",
        "Pertes de charge et équilibrage aéraulique",
        "Intégration architecturale et performance énergétique",
      ],
      projets: [
        "Logements collectifs et tertiaire",
        "Établissements scolaires",
        "Locaux d'activité et industrie légère",
        "Établissements recevant du public",
      ],
    },
  },
  {
    id: "04",
    slug: "plomberie-reseaux-sanitaires",
    title: "Plomberie & Sanitaires",
    shortTitle: "Plomberie sanitaire & ECS",
    subtitle: "Eau froide, production et bouclage ECS, évacuations et protection sanitaire",
    desc:
      "Études de plomberie sanitaire : alimentation eau froide, production d'eau chaude sanitaire, bouclage ECS, évacuations EU/EV, eaux pluviales EP, appareils sanitaires, comptage, disconnexion, protection sanitaire, pentes d'évacuation, acoustique, maintenance, essais, réception et DOE.",
    iconKey: "plomberie",
    tags: ["Plomberie", "Eau froide", "ECS", "Bouclage ECS", "EU / EV", "EP"],
    guideSlug: "plomberie-sanitaire-ecs",
    detail: {
      intro:
        "OSARIS Ingénierie réalise la conception et le dimensionnement des installations de plomberie sanitaire : alimentation en eau froide, production et distribution d'eau chaude sanitaire, bouclage ECS, évacuations EU/EV et protection sanitaire. Nos études garantissent la conformité réglementaire, l'hygiène sanitaire et la fiabilité d'exploitation.",
      accompagnement: [
        "Diagnostic des besoins en eau et évacuation",
        "Conception des réseaux EFS / ECS / EU / EV / EP",
        "Dimensionnement hydraulique selon EN 12056 et DTU",
        "Conception de la production ECS et du bouclage",
        "Étude du mitigeage, de l'équilibrage et du risque légionelle",
        "Rédaction des pièces écrites (CCTP, DPGF)",
        "Assistance en phases EXE, VISA et réception",
      ],
      prestations: [
        "Réseaux d'alimentation eau froide sanitaire (EFS) et comptage",
        "Production ECS : ballons, échangeurs à plaques, semi-instantané",
        "Réseaux de bouclage ECS, mitigeage et équilibrage",
        "Évacuations EU / EV / EP et ventilations primaires",
        "Surpression, réducteurs de pression et relevage",
        "Appareils sanitaires, sanitaires PMR et robinetterie",
        "Disconnexion et protection sanitaire des réseaux",
      ],
      livrables: LIVRABLES_COMMUNS,
      enjeux: [
        "Limitation des bruits d'écoulement, coups de bélier et vibrations",
        "Maintien en température du bouclage et risque légionelle",
        "Pression et débit aux points de puisage",
        "Limitation des pertes thermiques et calorifugeage ECS",
        "Protection du réseau d'eau potable et accessibilité maintenance",
      ],
      projets: [
        "Logements collectifs et résidences",
        "EHPAD et établissements de santé",
        "Équipements sportifs et piscines",
        "Bâtiments tertiaires et ERP",
      ],
    },
  },
  {
    id: "05",
    slug: "thermique-reglementaire-re2020-rt-existant",
    title: "Thermique Du Bâtiment",
    shortTitle: "Thermique & performance énergétique",
    subtitle: "RE2020, RT Existant, déperditions NF EN 12831, STD et performance énergétique",
    desc:
      "Études thermiques en neuf et rénovation : RE2020, RT Existant, calculs de déperditions pièce par pièce selon NF EN 12831, simulation thermique dynamique, confort d'été, analyse de l'enveloppe, ponts thermiques, rénovation énergétique, performance énergétique et dimensionnement des émetteurs.",
    iconKey: "reglementation",
    tags: ["RE2020", "RT Existant", "NF EN 12831", "STD", "Déperditions", "Performance énergétique"],
    guideSlug: "thermique-performance-energetique",
    detail: {
      intro:
        "OSARIS Ingénierie réalise les études thermiques réglementaires et de dimensionnement, ainsi que l'optimisation de la performance énergétique. En neuf, la RE2020 vise à réduire les consommations, améliorer le confort d'été et limiter l'impact carbone ; en rénovation, la RT Existant encadre l'amélioration des parois et équipements. Nos calculs de déperditions (NF EN 12831) et nos simulations thermiques dynamiques fondent un dimensionnement juste et une approche énergétique globale.",
      accompagnement: [
        "Analyse réglementaire applicable au projet (RE2020 / RT Existant)",
        "Calcul des déperditions pièce par pièce (NF EN 12831)",
        "Dimensionnement des émetteurs, réseaux et générateurs",
        "Simulation thermique dynamique (STD) et confort d'été",
        "Analyse de l'enveloppe, ponts thermiques et scénarios de rénovation",
        "Préconisations de performance et de conformité",
        "Production des attestations et notes de calcul",
      ],
      prestations: [
        "Études réglementaires RE2020 et RT Existant",
        "Calcul des déperditions pièce par pièce NF EN 12831",
        "Dimensionnement des émetteurs et des générateurs",
        "Simulation thermique dynamique (STD)",
        "Analyse de l'enveloppe et des ponts thermiques",
        "Scénarios d'amélioration énergétique et priorisation",
        "Vérification de la consommation conventionnelle et de l'impact carbone",
      ],
      livrables: [
        "Notes de calcul de déperditions et tableaux de puissances",
        "Attestations et rapports réglementaires RE2020 / RT Existant",
        "Rapports de simulation thermique dynamique et confort d'été",
        "Analyses de scénarios et préconisations d'amélioration",
        "Données d'entrée et hypothèses",
      ],
      enjeux: [
        "Justesse du dimensionnement et conformité NF EN 12831",
        "Conformité réglementaire RE2020 et RT Existant",
        "Confort d'été et limitation des surchauffes",
        "Réduction des consommations et maîtrise de l'impact carbone",
        "Cohérence enveloppe / systèmes / régulation",
      ],
      projets: [
        "Constructions neuves résidentielles et tertiaires",
        "Rénovations et réhabilitations énergétiques",
        "Équipements publics",
        "Copropriétés et bailleurs sociaux",
      ],
    },
  },
  {
    id: "06",
    slug: "genie-electrique-cfo-cfa",
    title: "Electricité CFO/CFA",
    shortTitle: "Génie électrique, régulation & GTB/GTC",
    subtitle: "Courants forts/faibles, armoires techniques, régulation et supervision",
    desc:
      "Études électriques appliquées aux équipements techniques du bâtiment : CFO/CFA, armoires électriques CVC, régulation chauffage, ventilation, climatisation et ECS, GTB, GTC, télégestion, comptage énergétique, reports d'alarme, listes de points, synoptiques, exécution, mise au point et DOE.",
    iconKey: "electricite",
    tags: ["CFO / CFA", "Régulation", "GTB", "GTC", "Télégestion", "Comptage"],
    guideSlug: "genie-electrique-regulation-gtb-gtc",
    detail: {
      intro:
        "OSARIS Ingénierie conçoit le génie électrique appliqué aux équipements techniques du bâtiment ainsi que leur régulation et leur supervision. Des armoires électriques aux listes de points GTB/GTC, nos études garantissent l'alimentation, la commande, la régulation et l'exploitation fiable des installations CVC, plomberie et production thermique.",
      accompagnement: [
        "Analyse des équipements techniques à alimenter et piloter",
        "Conception des armoires électriques CFO / CFA",
        "Définition des principes de régulation et des chaînes de sécurité",
        "Élaboration des synoptiques et listes de points GTB / GTC",
        "Intégration du comptage énergétique et des reports d'alarme",
        "Coordination avec les lots électricité, automatisme et CVC",
        "Assistance en phases EXE, mise au point et réception",
      ],
      prestations: [
        "Distribution courants forts (HTA / BT)",
        "Tableaux électriques et protections",
        "Éclairage intérieur et extérieur",
        "Courants faibles : réseaux VDI, communication",
        "Sûreté : contrôle d'accès, interphonie, vidéo",
        "Coordination avec les lots techniques",
        "Locaux techniques et transformateurs si pertinent",
      ],
      livrables: [
        "Notes de calcul électriques (bilans, sélectivité)",
        "Schémas unifilaires et de distribution",
        "Plans d'implantation CFO / CFA",
        "CCTP et DPGF des lots électriques",
        "Dossiers d'exécution",
      ],
      enjeux: [
        "Sécurité des personnes et des biens",
        "Conformité normative (NF C 15-100, 13-100/200)",
        "Continuité d'alimentation et sélectivité",
        "Coordination avec les lots techniques",
        "Évolutivité des réseaux de communication",
      ],
      projets: [
        "Logements collectifs et tertiaire",
        "Établissements recevant du public",
        "Bâtiments industriels et logistiques",
        "Équipements publics et culturels",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
