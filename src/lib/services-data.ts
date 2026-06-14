import {
  IconCVC, IconPlomberie, IconECS, IconVentilation, IconThermique,
  IconElectricite, IconEtudes, IconHydraulique, IconTraitementEau,
  IconPerformance,
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
    slug: "thermique-reglementaire-nf-en-12831",
    title: "Thermique réglementaire & NF EN 12831",
    shortTitle: "Thermique réglementaire & NF EN 12831",
    subtitle: "Calculs de déperditions et dimensionnement des puissances selon NF EN 12831",
    desc: "Calculs de déperditions selon NF EN 12831, hypothèses et températures de base, coefficients thermiques des parois, dimensionnement des puissances et cohérence avec les équipements.",
    iconKey: "thermique",
    tags: ["NF EN 12831", "Déperditions", "Dimensionnement"],
    detail: {
      intro:
        "OSARIS Ingénierie réalise les calculs thermiques réglementaires de déperditions selon la norme NF EN 12831. Ces études garantissent un dimensionnement juste des puissances de chauffage, en cohérence avec les équipements retenus, en neuf comme en rénovation.",
      accompagnement: [
        "Recueil des hypothèses et températures de base",
        "Calcul des coefficients thermiques des parois",
        "Calcul des déperditions selon NF EN 12831",
        "Prise en compte des apports et de la ventilation",
        "Dimensionnement des puissances par local",
        "Vérification de cohérence calculs / équipements",
        "Assistance en conception et rénovation",
      ],
      prestations: [
        "Calculs de déperditions NF EN 12831",
        "Définition des hypothèses et températures de base",
        "Coefficients thermiques des parois (Up, Ψ)",
        "Bilan des déperditions par local et global",
        "Prise en compte de la ventilation",
        "Dimensionnement des puissances de chauffage",
        "Cohérence entre calculs et équipements",
      ],
      livrables: [
        "Notes de calcul de déperditions NF EN 12831",
        "Tableaux de puissances par local",
        "Hypothèses et données d'entrée",
        "Synthèses de dimensionnement",
        "Préconisations d'équipements",
      ],
      enjeux: [
        "Justesse du dimensionnement des puissances",
        "Conformité à la norme NF EN 12831",
        "Cohérence entre calculs et équipements installés",
        "Optimisation en rénovation énergétique",
        "Confort thermique et maîtrise des consommations",
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
    id: "07",
    slug: "traitement-eau-chaufferies-sous-stations",
    title: "Traitement d'eau des chaufferies & sous-stations",
    shortTitle: "Traitement d'eau chaufferies & sous-stations",
    subtitle: "Qualité d'eau des réseaux, protection des installations et anti-corrosion",
    desc: "Qualité d'eau des réseaux de chauffage : adoucissement, traitement anti-corrosion, désembouage, filtration, pots à boues et protection des échangeurs.",
    iconKey: "traitementeau",
    tags: ["Adoucissement", "Désembouage", "Anti-corrosion"],
    detail: {
      intro:
        "OSARIS Ingénierie intègre le traitement d'eau des réseaux de chauffage dans la conception des chaufferies et sous-stations. Une eau maîtrisée protège les installations, préserve les échangeurs et garantit la pérennité et le rendement des équipements.",
      accompagnement: [
        "Diagnostic de la qualité d'eau des réseaux",
        "Définition du traitement adapté (adoucissement, conditionnement)",
        "Étude anti-corrosion et anti-embouage",
        "Dimensionnement de la filtration et des pots à boues",
        "Conception de l'appoint d'eau et des purges",
        "Protection des échangeurs et équipements",
        "Préconisations de maintenance",
      ],
      prestations: [
        "Qualité d'eau des réseaux de chauffage",
        "Adoucissement et conditionnement",
        "Traitement anti-corrosion",
        "Désembouage et filtration",
        "Pots à boues et séparateurs",
        "Gestion des purges et de l'appoint d'eau",
        "Protection des échangeurs",
      ],
      livrables: [
        "Notes techniques de traitement d'eau",
        "Schémas de principe des dispositifs",
        "Préconisations d'équipements",
        "CCTP et prescriptions techniques",
        "Plans de maintenance",
      ],
      enjeux: [
        "Protection et pérennité des installations",
        "Préservation du rendement des échangeurs",
        "Prévention de la corrosion et de l'embouage",
        "Qualité d'eau et stabilité des réseaux",
        "Maîtrise des coûts de maintenance",
      ],
      projets: [
        "Chaufferies collectives de logements",
        "Sous-stations de réseaux de chaleur",
        "Bailleurs sociaux et copropriétés",
        "Bâtiments tertiaires et publics",
      ],
    },
  },
  {
    id: "08",
    slug: "hydraulique-chaufferie-sous-station",
    title: "Hydraulique chaufferie & sous-station",
    shortTitle: "Hydraulique chaufferie & sous-station",
    subtitle: "Schémas hydrauliques, découplage et stabilité des installations",
    desc: "Conception hydraulique des chaufferies et sous-stations : collecteurs, bouteilles de découplage, échangeurs, pompes, équilibrage, vannes de régulation, débits et ΔT.",
    iconKey: "hydraulique",
    tags: ["Découplage", "Équilibrage", "ΔT / débits"],
    detail: {
      intro:
        "OSARIS Ingénierie conçoit l'hydraulique des chaufferies et sous-stations : du schéma de principe à l'équilibrage. Nous garantissons la stabilité hydraulique, le découplage primaire/secondaire et le bon fonctionnement des installations sur l'ensemble des régimes.",
      accompagnement: [
        "Conception des schémas hydrauliques",
        "Dimensionnement des collecteurs et bouteilles de découplage",
        "Sélection des échangeurs et des pompes",
        "Calcul des pertes de charge et des débits",
        "Étude de l'équilibrage et des vannes de régulation",
        "Vérification du découplage primaire / secondaire",
        "Assistance en phases EXE et mise en service",
      ],
      prestations: [
        "Schémas hydrauliques de chaufferie et sous-station",
        "Collecteurs et bouteilles de découplage",
        "Échangeurs à plaques et pompes",
        "Calcul des pertes de charge et débits",
        "Équilibrage et vannes de régulation",
        "Découplage primaire / secondaire",
        "Maîtrise du ΔT et stabilité hydraulique",
      ],
      livrables: [
        "Schémas hydrauliques détaillés",
        "Notes de calcul hydrauliques (débits, ΔT, pertes de charge)",
        "Tableaux de sélection des équipements",
        "Plans de chaufferie et sous-station",
        "CCTP et prescriptions techniques",
      ],
      enjeux: [
        "Stabilité hydraulique sur tous les régimes",
        "Maîtrise du ΔT et des débits",
        "Découplage primaire / secondaire efficace",
        "Équilibrage et performance des pompes",
        "Fiabilité et exploitation des installations",
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
  {
    id: "10",
    slug: "etudes-execution-assistance-technique",
    title: "Études d'exécution & assistance technique",
    shortTitle: "Études d'exécution & assistance technique",
    subtitle: "Plans d'exécution, visas, synthèse et assistance en phase chantier",
    desc: "Production des plans d'exécution, visas, notes techniques et synthèse. Assistance chantier, analyse de variantes, réponses aux entreprises et suivi des interfaces techniques.",
    iconKey: "etudes",
    tags: ["Plans EXE", "VISA", "Synthèse"],
    detail: {
      intro:
        "OSARIS Ingénierie produit les études d'exécution et assure l'assistance technique des projets. De la production des plans EXE au suivi des interfaces de chantier, nous transformons les principes de conception en solutions exécutables et fiables.",
      accompagnement: [
        "Analyse du dossier de conception",
        "Production des plans d'exécution",
        "Visas techniques des documents entreprises",
        "Rédaction de notes techniques",
        "Synthèse technique et suivi des interfaces",
        "Analyse de variantes et mise au point",
        "Assistance chantier et à la réception",
      ],
      prestations: [
        "Plans d'exécution tous lots techniques",
        "Visas des plans et documents d'exécution",
        "Notes techniques et de synthèse",
        "Synthèse et suivi des interfaces",
        "Assistance et suivi de chantier",
        "Analyse de variantes et réponses aux entreprises",
        "Mise au point technique et assistance à la réception",
      ],
      livrables: [
        "Plans d'exécution et de synthèse",
        "Comptes rendus de visa",
        "Notes techniques",
        "Comptes rendus de chantier",
        "Dossiers de réception et listes de réserves",
      ],
      enjeux: [
        "Exécutabilité et faisabilité sur chantier",
        "Coordination entre corps d'état",
        "Maîtrise des interfaces techniques",
        "Respect des délais et du planning",
        "Qualité d'exécution et levée des réserves",
      ],
      projets: [
        "Entreprises générales et de lots techniques",
        "Chantiers neufs et de réhabilitation",
        "Opérations en site occupé",
        "Maîtres d'ouvrage publics et privés",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
