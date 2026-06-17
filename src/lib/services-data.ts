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
    title: "Chauffage & climatisation",
    shortTitle: "Chauffage & climatisation",
    subtitle: "Production thermique, distribution, émetteurs et climatisation",
    desc: "Conception et dimensionnement des installations de chauffage et de climatisation : production thermique, PAC, chaudières, réseaux de distribution, émetteurs et régulation.",
    iconKey: "cvc",
    tags: ["PAC & chaudières", "Distribution", "Régulation"],
    detail: {
      intro:
        "OSARIS Ingénierie conçoit et dimensionne les installations de chauffage et de climatisation, de la production thermique aux émetteurs. Notre approche associe performance énergétique, confort des occupants et intégration en construction neuve comme en rénovation.",
      accompagnement: [
        "Diagnostic et analyse des besoins thermiques",
        "Conception de la production (PAC, chaudières)",
        "Dimensionnement des réseaux et émetteurs",
        "Notes de calcul de puissance et de déperditions",
        "Sélection des équipements et de la régulation",
        "Rédaction des pièces écrites (CCTP, DPGF)",
        "Assistance en phases DCE, EXE et VISA",
      ],
      prestations: [
        "Production thermique : PAC, chaudières, sous-stations",
        "Réseaux de distribution hydraulique",
        "Émetteurs : radiateurs, planchers, ventilo-convecteurs",
        "Climatisation et rafraîchissement (DRV, eau glacée)",
        "Régulation et pilotage des installations",
        "Dimensionnement et bilans de puissance",
        "Intégration en rénovation et site occupé",
      ],
      livrables: LIVRABLES_COMMUNS,
      enjeux: [
        "Maîtrise acoustique des équipements techniques, pompes, chaudières et PAC",
        "Performance énergétique et conformité RE2020",
        "Confort thermique été comme hiver",
        "Maîtrise des consommations et de l'exploitation",
        "Intégration architecturale des équipements",
      ],
      projets: [
        "Logements collectifs neufs et réhabilités",
        "Établissements scolaires et publics",
        "Bureaux et bâtiments tertiaires",
        "EHPAD et établissements de santé",
      ],
    },
  },
  {
    id: "02",
    slug: "ventilation-traitement-air",
    title: "Ventilation & traitement d'air",
    shortTitle: "Ventilation & traitement d'air",
    subtitle: "Qualité d'air intérieur, réseaux aérauliques et centrales de traitement d'air",
    desc: "Réseaux aérauliques simple et double flux, centrales de traitement d'air (CTA), extraction et soufflage. Calcul des débits, pertes de charge et qualité d'air intérieur.",
    iconKey: "ventilation",
    tags: ["VMC simple / double flux", "CTA", "Aéraulique"],
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
    id: "03",
    slug: "plomberie-reseaux-sanitaires",
    title: "Plomberie & réseaux sanitaires",
    shortTitle: "Plomberie & réseaux sanitaires",
    subtitle: "Réseaux d'alimentation, distribution sanitaire et évacuation des bâtiments",
    desc: "Études des réseaux d'eau froide et chaude sanitaire, évacuations EU/EV/EP, surpression, relevage. Dimensionnement hydraulique selon EN 12056 et conformité DTU.",
    iconKey: "plomberie",
    tags: ["EFS / ECS", "EU / EV / EP", "EN 12056"],
    detail: {
      intro:
        "OSARIS Ingénierie réalise la conception et le dimensionnement des réseaux de plomberie sanitaire : alimentation en eau froide et chaude, évacuations, surpression et relevage. Nos études garantissent la conformité réglementaire, l'hygiène sanitaire et la fiabilité d'exploitation.",
      accompagnement: [
        "Diagnostic des besoins en eau et évacuation",
        "Conception des réseaux EFS / ECS / EU / EV / EP",
        "Dimensionnement hydraulique selon EN 12056 et DTU",
        "Sélection des équipements et appareils sanitaires",
        "Étude surpression, réduction de pression et relevage",
        "Rédaction des pièces écrites (CCTP, DPGF)",
        "Assistance en phases DCE, EXE et VISA",
      ],
      prestations: [
        "Réseaux d'alimentation eau froide sanitaire (EFS)",
        "Réseaux d'eau chaude sanitaire (ECS) et bouclage",
        "Évacuations EU / EV / EP et ventilations primaires",
        "Surpression et réducteurs de pression",
        "Relevage des eaux usées et eaux claires",
        "Appareils sanitaires et robinetterie",
        "Dimensionnement selon EN 12056 et DTU 60.11",
      ],
      livrables: LIVRABLES_COMMUNS,
      enjeux: [
        "Limitation des bruits d'écoulement, coups de bélier, vibrations et transmissions solidiennes des réseaux",
        "Hygiène et qualité sanitaire de l'eau",
        "Pression et débit aux points de puisage",
        "Évacuation et ventilation des réseaux",
        "Durabilité et accessibilité de maintenance",
      ],
      projets: [
        "Logements collectifs et résidences",
        "EHPAD et établissements de santé",
        "Équipements sportifs et piscines",
        "Bâtiments tertiaires et IGH",
      ],
    },
  },
  {
    id: "04",
    slug: "production-ecs-bouclage",
    title: "Production ECS & bouclage",
    shortTitle: "Production ECS & bouclage",
    subtitle: "Production d'eau chaude sanitaire collective et réseaux de bouclage maîtrisés",
    desc: "Production d'eau chaude sanitaire collective : ballons, échangeurs, solaire thermique, thermodynamique. Conception des réseaux de bouclage, mitigeage et maîtrise du risque sanitaire.",
    iconKey: "ecs",
    tags: ["Bouclage ECS", "Échangeurs", "Risque légionelle"],
    detail: {
      intro:
        "OSARIS Ingénierie conçoit les installations de production d'eau chaude sanitaire collective et leurs réseaux de bouclage. Nous dimensionnons les systèmes (ballons, échangeurs) en intégrant la maîtrise du risque sanitaire, l'équilibrage et la performance énergétique.",
      accompagnement: [
        "Diagnostic des besoins en eau chaude sanitaire",
        "Conception de la production et du bouclage",
        "Dimensionnement des ballons, échangeurs et réseaux",
        "Étude du mitigeage et de l'équilibrage",
        "Maîtrise des températures et du risque légionelle",
        "Rédaction des pièces écrites (CCTP, DPGF)",
        "Assistance en phases DCE, EXE et VISA",
      ],
      prestations: [
        "Production ECS collective : ballons, échangeurs à plaques",
        "Production solaire thermique et thermodynamique",
        "Réseaux de bouclage départ / retour",
        "Mitigeage et équilibrage des réseaux",
        "Maintien en température et prévention légionelle",
        "Sélection des circulateurs",
        "Bilans de besoins et de puissance",
      ],
      livrables: LIVRABLES_COMMUNS,
      enjeux: [
        "Maîtrise des nuisances acoustiques liées aux circulateurs et réseaux de bouclage",
        "Maintien en température et risque légionelle",
        "Équilibrage du bouclage et vitesses d'eau",
        "Limitation des pertes thermiques",
        "Confort et disponibilité de l'ECS",
      ],
      projets: [
        "Logements collectifs et résidences sociales",
        "EHPAD et foyers logements",
        "Établissements sportifs",
        "Hôtellerie et restauration",
      ],
    },
  },
  {
    id: "05",
    slug: "thermique-reglementaire-re2020-rt-existant",
    title: "Thermique réglementaire RE2020 & RT Existant",
    shortTitle: "Thermique réglementaire RE2020 & RT Existant",
    subtitle: "Études thermiques réglementaires des bâtiments neufs et existants",
    desc: "Études thermiques réglementaires applicables aux bâtiments neufs et existants, avec prise en compte des exigences de performance énergétique, de confort d'été, de consommation conventionnelle et de conformité réglementaire.",
    iconKey: "reglementation",
    tags: ["RE2020", "RT Existant", "Conformité"],
    detail: {
      intro:
        "La réglementation thermique en France encadre la performance énergétique des bâtiments. Pour les constructions neuves, la RE2020 vise à réduire les consommations d'énergie, améliorer le confort d'été et limiter l'impact carbone des bâtiments. Pour les bâtiments existants, la RT Existant s'applique notamment aux travaux de rénovation et permet de vérifier le respect des exigences minimales de performance énergétique lors du remplacement ou de l'amélioration des équipements et parois.",
      accompagnement: [
        "Analyse réglementaire applicable au projet (RE2020 / RT Existant)",
        "Recueil des données d'entrée et hypothèses",
        "Modélisation énergétique du bâtiment",
        "Vérification des indicateurs réglementaires",
        "Étude du confort d'été",
        "Préconisations de conformité",
        "Production des attestations réglementaires",
      ],
      prestations: [
        "Études réglementaires RE2020 (bâtiments neufs)",
        "Études RT Existant (rénovation)",
        "Vérification de la consommation conventionnelle",
        "Analyse du confort d'été",
        "Évaluation de l'impact carbone (RE2020)",
        "Contrôle des exigences minimales de performance",
        "Attestations de prise en compte réglementaire",
      ],
      livrables: [
        "Attestations et rapports réglementaires",
        "Notes de calcul réglementaires",
        "Synthèses de conformité RE2020 / RT Existant",
        "Préconisations d'amélioration",
        "Données d'entrée et hypothèses",
      ],
      enjeux: [
        "Conformité réglementaire RE2020 et RT Existant",
        "Réduction des consommations d'énergie",
        "Confort d'été et limitation des surchauffes",
        "Maîtrise de l'impact carbone des bâtiments",
        "Valorisation de la performance énergétique",
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
    id: "05b",
    slug: "calcul-deperditions-nf-en-12831-std",
    title: "Calcul des déperditions thermiques Pièce/Pièce NF EN 12831 & STD",
    shortTitle: "Déperditions NF EN 12831 & STD",
    subtitle: "Calcul pièce par pièce, dimensionnement des puissances et simulation dynamique",
    desc: "Calculs de déperditions thermiques pièce par pièce, dimensionnement des puissances selon NF EN 12831 et simulation thermique dynamique STD.",
    iconKey: "bilanthermique",
    tags: ["NF EN 12831", "Pièce par pièce", "STD"],
    detail: {
      intro:
        "Le calcul des déperditions thermiques pièce par pièce selon la norme NF EN 12831 permet de déterminer les besoins de chauffage de chaque local en tenant compte des parois, vitrages, volumes, températures de consigne, renouvellements d'air et conditions climatiques de référence. Cette prestation permet de dimensionner correctement les émetteurs de chauffage, les réseaux et les générateurs. La simulation thermique dynamique STD permet d'analyser le comportement thermique d'un bâtiment dans le temps, en tenant compte de l'inertie, des apports solaires, des apports internes, de l'occupation, de la ventilation et des variations climatiques horaires. Elle est particulièrement utile pour évaluer le confort d'été, les risques de surchauffe, les besoins énergétiques réels et comparer plusieurs scénarios techniques ou architecturaux.",
      accompagnement: [
        "Recueil des données : parois, vitrages, volumes, consignes",
        "Définition des conditions climatiques de référence",
        "Calcul des déperditions pièce par pièce (NF EN 12831)",
        "Dimensionnement des émetteurs, réseaux et générateurs",
        "Modélisation pour simulation thermique dynamique (STD)",
        "Analyse du confort d'été et des risques de surchauffe",
        "Comparaison de scénarios techniques ou architecturaux",
      ],
      prestations: [
        "Calcul des déperditions pièce par pièce NF EN 12831",
        "Prise en compte parois, vitrages, volumes et consignes",
        "Renouvellements d'air et conditions climatiques de référence",
        "Dimensionnement des émetteurs et des réseaux",
        "Dimensionnement des générateurs",
        "Simulation thermique dynamique (STD)",
        "Évaluation du confort d'été et des besoins réels",
      ],
      livrables: [
        "Notes de calcul de déperditions pièce par pièce",
        "Tableaux de puissances par local",
        "Rapports de simulation thermique dynamique",
        "Analyses de confort d'été et de surchauffe",
        "Comparatifs de scénarios",
      ],
      enjeux: [
        "Justesse du dimensionnement pièce par pièce",
        "Conformité à la norme NF EN 12831",
        "Cohérence entre calculs, émetteurs et générateurs",
        "Évaluation du confort d'été et des surchauffes",
        "Aide à la décision par comparaison de scénarios",
      ],
      projets: [
        "Constructions neuves résidentielles et tertiaires",
        "Rénovations et réhabilitations énergétiques",
        "Bâtiments à forts enjeux de confort d'été",
        "Copropriétés, bailleurs sociaux et équipements publics",
      ],
    },
  },
  {
    id: "06",
    slug: "performance-energetique",
    title: "Performance énergétique",
    shortTitle: "Performance énergétique",
    subtitle: "Optimisation des systèmes, réduction des consommations et approche globale",
    desc: "Analyse énergétique, optimisation des systèmes, réduction des consommations, amélioration du rendement, pilotage et scénarios de rénovation avec priorisation des travaux.",
    iconKey: "performance",
    tags: ["Audit", "Optimisation", "Rénovation"],
    detail: {
      intro:
        "OSARIS Ingénierie accompagne ses clients dans l'amélioration de la performance énergétique des bâtiments. De l'analyse à la priorisation des travaux, nous proposons une approche globale bâtiment / systèmes orientée résultats et maîtrise des consommations.",
      accompagnement: [
        "Analyse énergétique du bâtiment et des systèmes",
        "Identification des gisements d'économies",
        "Optimisation des systèmes et du rendement",
        "Étude du pilotage et de la régulation",
        "Élaboration de scénarios de rénovation",
        "Priorisation des travaux et chiffrage",
        "Suivi et accompagnement à la mise en œuvre",
      ],
      prestations: [
        "Analyse et audit énergétique",
        "Optimisation des systèmes techniques",
        "Réduction des consommations",
        "Amélioration du rendement des installations",
        "Pilotage et régulation",
        "Scénarios de rénovation chiffrés",
        "Priorisation des travaux",
      ],
      livrables: [
        "Rapports d'analyse et d'audit énergétique",
        "Scénarios de rénovation comparés",
        "Plans d'actions priorisés",
        "Notes de calcul et estimatifs",
        "Préconisations techniques",
      ],
      enjeux: [
        "Réduction durable des consommations",
        "Amélioration du rendement global",
        "Approche cohérente bâtiment / systèmes",
        "Retour sur investissement des travaux",
        "Valorisation et étiquette énergétique",
      ],
      projets: [
        "Copropriétés et bailleurs sociaux",
        "Bâtiments tertiaires et publics",
        "Patrimoine en rénovation",
        "Établissements de santé et d'enseignement",
      ],
    },
  },
  {
    id: "08",
    slug: "hydraulique-chaufferie-sous-station",
    title: "Hydraulique chaufferie & sous-station",
    shortTitle: "Hydraulique chaufferie & sous-station",
    subtitle: "Schémas hydrauliques, découplage, stabilité et traitement d'eau",
    desc: "Dimensionnement hydraulique des chaufferies, sous-stations, pompes, échangeurs, collecteurs, organes d'équilibrage et dispositifs de traitement d'eau : filtration, désembouage, dégazage, appoint et protection des réseaux.",
    iconKey: "hydraulique",
    tags: ["Découplage", "Équilibrage", "Traitement d'eau"],
    detail: {
      intro:
        "OSARIS Ingénierie conçoit l'hydraulique des chaufferies et sous-stations : du schéma de principe à l'équilibrage, en intégrant le traitement d'eau des réseaux. Nous garantissons la stabilité hydraulique, le découplage primaire/secondaire, la qualité d'eau et la protection durable des équipements.",
      accompagnement: [
        "Conception des schémas hydrauliques",
        "Dimensionnement des collecteurs et bouteilles de découplage",
        "Sélection des échangeurs et des pompes",
        "Calcul des pertes de charge et des débits",
        "Étude de l'équilibrage et des vannes de régulation",
        "Définition du traitement d'eau et de la protection des réseaux",
        "Assistance en phases EXE et mise en service",
      ],
      prestations: [
        "Schémas hydrauliques de chaufferie et sous-station",
        "Collecteurs, bouteilles de découplage, échangeurs et pompes",
        "Équilibrage, vannes de régulation, ΔT et débits",
        "Découplage primaire / secondaire et stabilité hydraulique",
        "Traitement d'eau : filtration, désembouage, pot à boues, dégazage",
        "Appoint d'eau et adoucissement si nécessaire",
        "Protection des échangeurs, chaudières, PAC, pompes et réseaux (embouage, corrosion, entartrage)",
      ],
      livrables: [
        "Schémas hydrauliques détaillés",
        "Notes de calcul hydrauliques (débits, ΔT, pertes de charge)",
        "Préconisations de traitement d'eau et de protection des réseaux",
        "Tableaux de sélection des équipements",
        "Plans de chaufferie et sous-station, CCTP",
      ],
      enjeux: [
        "Stabilité hydraulique sur tous les régimes",
        "Maîtrise du ΔT et des débits",
        "Découplage primaire / secondaire efficace",
        "Qualité d'eau et protection contre embouage, corrosion et entartrage",
        "Pérennité des échangeurs, générateurs et réseaux",
      ],
      projets: [
        "Chaufferies collectives et hybridées",
        "Sous-stations de réseaux de chaleur",
        "Réhabilitations de production de chaleur",
        "Bailleurs sociaux et copropriétés",
      ],
    },
  },
  {
    id: "09",
    slug: "genie-electrique-cfo-cfa",
    title: "Génie électrique CFO / CFA",
    shortTitle: "Génie électrique CFO / CFA",
    subtitle: "Courants forts, courants faibles et réseaux de communication du bâtiment",
    desc: "Conception courants forts et faibles : distribution BT/HTA, tableaux électriques, protections, éclairage, réseaux de communication, sûreté et coordination avec les lots techniques.",
    iconKey: "electricite",
    tags: ["TGBT BT/HTA", "Courants faibles", "Sûreté"],
    detail: {
      intro:
        "OSARIS Ingénierie conçoit les installations de génie électrique courants forts et courants faibles. De la distribution aux réseaux de communication, nos études garantissent sécurité, conformité normative et coordination avec l'ensemble des lots techniques.",
      accompagnement: [
        "Diagnostic des besoins électriques CFO / CFA",
        "Conception de la distribution HTA / BT",
        "Bilans de puissance et notes de calcul",
        "Sélection des tableaux et protections",
        "Étude de l'éclairage et des réseaux de communication",
        "Coordination avec les lots techniques",
        "Assistance en phases DCE, EXE et VISA",
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
