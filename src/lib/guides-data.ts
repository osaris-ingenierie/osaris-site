import {
  IconCVC, IconVentilation, IconPlomberie, IconECS, IconThermique,
  IconPerformance, IconElectricite, IconHydraulique,
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
  Icon: ComponentType<{ className?: string }>;
  detail: GuideSection;
}

export const guides: Guide[] = [
  {
    slug: "chauffage",
    title: "Chauffage",
    guideTitle: "Guide technique chauffage",
    desc: "Comprendre le dimensionnement d'une installation de chauffage : calcul des puissances, choix des émetteurs, régime d'eau, équilibrage hydraulique, pompes, vannes, pertes de charge et optimisation énergétique.",
    cta: "Lire le guide chauffage",
    intro:
      "Le chauffage assure le confort thermique des occupants en période froide. Son dimensionnement nécessite une analyse des déperditions, du régime de température, des émetteurs, des débits, des pertes de charge et de l'équilibrage hydraulique.",
    Icon: IconCVC,
    detail: {
      definition:
        "Le chauffage regroupe l'ensemble des équipements assurant la production, la distribution et l'émission de chaleur dans un bâtiment. Une installation performante repose sur un dimensionnement précis, adapté aux besoins réels et au régime de température choisi.",
      role: [
        "Garantir le confort thermique des occupants en hiver",
        "Limiter les consommations énergétiques",
        "Assurer la durabilité et la fiabilité des équipements",
        "Faciliter l'exploitation et la maintenance",
      ],
      equipements: [
        "Production : chaudières, pompes à chaleur, sous-stations",
        "Distribution : réseaux hydrauliques, collecteurs, circulateurs",
        "Émetteurs : radiateurs, planchers chauffants, ventilo-convecteurs",
        "Organes de réglage : vannes d'équilibrage, vannes thermostatiques",
        "Régulation : sondes, lois d'eau, programmation",
      ],
      vigilance: [
        "Calcul des déperditions selon NF EN 12831",
        "Cohérence entre le régime d'eau et les émetteurs",
        "Équilibrage hydraulique des circuits",
        "Dimensionnement des pompes et maîtrise des pertes de charge",
        "Compatibilité avec une production basse température (PAC)",
      ],
      erreurs: [
        "Surdimensionnement des générateurs, source de surcoût et de cycles courts",
        "Absence d'équilibrage entraînant des inconforts par zone",
        "Régime d'eau inadapté aux émetteurs existants en rénovation",
        "Pompes mal sélectionnées et consommations électriques excessives",
      ],
    },
  },
  {
    slug: "ventilation",
    title: "Ventilation",
    guideTitle: "Guide technique ventilation",
    desc: "Découvrir les principes de ventilation des bâtiments : renouvellement d'air, extraction, soufflage, CTA, VMC, qualité d'air intérieur, acoustique, pertes de charge et contraintes de maintenance.",
    cta: "Lire le guide ventilation",
    intro:
      "La ventilation permet de renouveler l'air intérieur, d'évacuer les polluants, l'humidité et les odeurs, tout en garantissant une qualité d'air adaptée aux usages du bâtiment.",
    Icon: IconVentilation,
    detail: {
      definition:
        "La ventilation assure le renouvellement de l'air intérieur d'un bâtiment. Elle évacue l'air vicié et apporte de l'air neuf, en simple flux ou en double flux avec récupération de chaleur, selon les usages et les exigences de performance.",
      role: [
        "Maintenir une bonne qualité d'air intérieur",
        "Évacuer l'humidité, les polluants et les odeurs",
        "Contribuer à la performance énergétique (double flux)",
        "Assurer le confort et la santé des occupants",
      ],
      equipements: [
        "VMC simple flux et double flux",
        "Centrales de traitement d'air (CTA)",
        "Réseaux de gaines, bouches d'extraction et de soufflage",
        "Récupérateurs de chaleur et filtres",
        "Caissons d'extraction et de désenfumage",
      ],
      vigilance: [
        "Respect des débits réglementaires",
        "Maîtrise des pertes de charge des réseaux",
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
    slug: "climatisation",
    title: "Climatisation / DRV / VRV",
    guideTitle: "Guide technique climatisation",
    desc: "Comprendre les systèmes de climatisation : splits, multi-splits, DRV/VRV, unités intérieures et extérieures, évacuation des condensats, contraintes acoustiques et intégration architecturale.",
    cta: "Lire le guide climatisation",
    intro:
      "La climatisation permet d'assurer le confort d'été et la maîtrise des températures intérieures. Elle nécessite une attention particulière sur les puissances frigorifiques, les unités intérieures et extérieures, les condensats, l'acoustique et l'intégration architecturale.",
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
        "Splits et multi-splits",
        "Systèmes DRV / VRV",
        "Unités intérieures et groupes extérieurs",
        "Réseaux frigorifiques et évacuation des condensats",
        "Régulation et gestion centralisée",
      ],
      vigilance: [
        "Dimensionnement des puissances frigorifiques",
        "Évacuation fiable des condensats",
        "Contraintes acoustiques des unités extérieures",
        "Intégration architecturale et accessibilité",
        "Choix des fluides frigorigènes (réglementation F-Gas)",
      ],
      erreurs: [
        "Sous-dimensionnement ou surdimensionnement des unités",
        "Évacuation des condensats négligée, source de désordres",
        "Nuisances sonores des groupes extérieurs mal anticipées",
        "Implantation des unités sans concertation architecturale",
      ],
    },
  },
  {
    slug: "plomberie-sanitaire",
    title: "Plomberie sanitaire",
    guideTitle: "Guide technique plomberie sanitaire",
    desc: "Comprendre les réseaux d'eau froide, d'eau chaude sanitaire, les évacuations EU/EV, les pressions de service, les diamètres de canalisations, le calorifugeage et les protections sanitaires.",
    cta: "Lire le guide plomberie",
    intro:
      "La plomberie sanitaire regroupe les réseaux d'eau froide, d'eau chaude sanitaire et d'évacuation. Elle doit garantir la sécurité sanitaire, la pression disponible, le bon dimensionnement des canalisations et la facilité de maintenance.",
    Icon: IconPlomberie,
    detail: {
      definition:
        "La plomberie sanitaire comprend la distribution d'eau froide et chaude sanitaire et l'évacuation des eaux usées et vannes. Sa conception garantit l'hygiène, la pression aux points de puisage et la conformité aux normes et DTU.",
      role: [
        "Garantir la sécurité et l'hygiène sanitaire de l'eau",
        "Assurer pression et débit aux points de puisage",
        "Évacuer les eaux usées et vannes de façon fiable",
        "Faciliter l'exploitation et la maintenance des réseaux",
      ],
      equipements: [
        "Réseaux d'eau froide sanitaire (EFS)",
        "Réseaux d'eau chaude sanitaire (ECS)",
        "Évacuations EU / EV et ventilations primaires",
        "Surpresseurs et réducteurs de pression",
        "Appareils sanitaires et robinetterie",
      ],
      vigilance: [
        "Dimensionnement selon EN 12056 et DTU 60.11",
        "Pressions de service et équilibrage des réseaux",
        "Calorifugeage des canalisations",
        "Protections sanitaires (disconnecteurs, clapets)",
        "Limitation des bruits d'écoulement et coups de bélier",
      ],
      erreurs: [
        "Diamètres inadaptés générant bruit ou manque de pression",
        "Calorifugeage insuffisant et pertes thermiques",
        "Absence de protection contre les retours d'eau",
        "Coups de bélier non traités",
      ],
    },
  },
  {
    slug: "eau-chaude-sanitaire",
    title: "Eau chaude sanitaire — ECS",
    guideTitle: "Guide technique eau chaude sanitaire",
    desc: "Comprendre la production et la distribution d'eau chaude sanitaire : ballons, échangeurs, préparateurs ECS, bouclage, mitigeurs thermostatiques, températures de service et sécurité sanitaire.",
    cta: "Lire le guide ECS",
    intro:
      "L'eau chaude sanitaire concerne la production, le stockage, la distribution et le bouclage de l'ECS. Sa conception doit prendre en compte le confort des usagers, les températures de service, les pertes thermiques et la prévention du risque légionelle.",
    Icon: IconECS,
    detail: {
      definition:
        "L'eau chaude sanitaire (ECS) recouvre la production, le stockage et la distribution d'eau chaude pour les usages sanitaires. Sa conception vise le confort, la maîtrise des températures et la prévention du risque légionelle.",
      role: [
        "Fournir une eau chaude disponible et confortable",
        "Maîtriser le risque sanitaire (légionelle)",
        "Limiter les pertes thermiques de distribution",
        "Optimiser la production et le stockage",
      ],
      equipements: [
        "Ballons de stockage et préparateurs ECS",
        "Échangeurs à plaques",
        "Réseaux de bouclage départ / retour",
        "Mitigeurs thermostatiques",
        "Circulateurs de bouclage",
      ],
      vigilance: [
        "Maintien en température de l'ensemble du bouclage",
        "Prévention du risque légionelle",
        "Équilibrage du réseau de bouclage",
        "Limitation des pertes thermiques",
        "Acoustique des circulateurs",
      ],
      erreurs: [
        "Bouclage mal équilibré et zones froides propices aux légionelles",
        "Stockage et production sous-dimensionnés",
        "Calorifugeage insuffisant du réseau ECS",
        "Absence de mitigeage et risque de brûlure",
      ],
    },
  },
  {
    slug: "thermique-du-batiment",
    title: "Thermique du bâtiment",
    guideTitle: "Guide technique thermique du bâtiment",
    desc: "Découvrir les déperditions thermiques, l'isolation, les ponts thermiques, les apports internes et solaires, le confort d'hiver, le confort d'été et le calcul de puissance.",
    cta: "Lire le guide thermique",
    intro:
      "La thermique du bâtiment permet d'évaluer les déperditions, les apports, l'isolation et les besoins énergétiques. Elle constitue une base essentielle pour dimensionner correctement les équipements techniques.",
    Icon: IconThermique,
    detail: {
      definition:
        "La thermique du bâtiment étudie les échanges de chaleur entre le bâtiment et son environnement : déperditions, apports solaires et internes, inertie et isolation. Elle fonde le dimensionnement des installations de chauffage et de rafraîchissement.",
      role: [
        "Évaluer les besoins de chauffage et de rafraîchissement",
        "Optimiser l'isolation et limiter les ponts thermiques",
        "Garantir le confort d'hiver et d'été",
        "Fournir une base fiable au dimensionnement des équipements",
      ],
      equipements: [
        "Enveloppe : parois, menuiseries, isolation",
        "Traitement des ponts thermiques",
        "Protections solaires",
        "Inertie thermique du bâti",
        "Outils de calcul et de simulation (STD)",
      ],
      vigilance: [
        "Calcul des déperditions selon NF EN 12831",
        "Prise en compte des apports internes et solaires",
        "Traitement des ponts thermiques",
        "Confort d'été et limitation des surchauffes",
        "Cohérence entre calculs et équipements installés",
      ],
      erreurs: [
        "Hypothèses de calcul inadaptées au bâtiment réel",
        "Ponts thermiques négligés",
        "Confort d'été oublié dans la conception",
        "Surdimensionnement des équipements par excès de sécurité",
      ],
    },
  },
  {
    slug: "performance-energetique",
    title: "Performance énergétique",
    guideTitle: "Guide technique performance énergétique",
    desc: "Comprendre les leviers d'optimisation énergétique : rénovation thermique, remplacement des équipements, récupération d'énergie, comptage, régulation, GTB/GTC et amélioration du rendement global.",
    cta: "Lire le guide énergie",
    intro:
      "La performance énergétique vise à réduire les consommations tout en maintenant le confort et la qualité d'usage. Elle repose sur l'optimisation de l'enveloppe, des systèmes techniques, de la régulation et du suivi des consommations.",
    Icon: IconPerformance,
    detail: {
      definition:
        "La performance énergétique d'un bâtiment mesure sa capacité à assurer le confort et les usages avec un minimum d'énergie. Elle s'améliore par une approche globale combinant enveloppe, systèmes, régulation et suivi.",
      role: [
        "Réduire durablement les consommations",
        "Maintenir le confort et la qualité d'usage",
        "Valoriser le patrimoine bâti",
        "Maîtriser les coûts d'exploitation",
      ],
      equipements: [
        "Systèmes performants (PAC, récupération d'énergie)",
        "Régulation et GTB / GTC",
        "Comptage et sous-comptage énergétique",
        "Isolation et amélioration de l'enveloppe",
        "Pilotage et programmation",
      ],
      vigilance: [
        "Approche globale enveloppe / systèmes",
        "Priorisation des travaux selon le retour sur investissement",
        "Qualité de la régulation et du pilotage",
        "Suivi réel des consommations",
        "Cohérence des scénarios de rénovation",
      ],
      erreurs: [
        "Remplacer un équipement sans traiter l'enveloppe",
        "Régulation mal paramétrée annulant les gains",
        "Absence de suivi des consommations après travaux",
        "Travaux non priorisés et budget mal employé",
      ],
    },
  },
  {
    slug: "genie-electrique",
    title: "Génie électrique",
    guideTitle: "Guide technique génie électrique",
    desc: "Comprendre l'alimentation électrique des équipements techniques du bâtiment : protections, puissances disponibles, armoires électriques, raccordements des CTA, pompes, PAC, ballons et extracteurs.",
    cta: "Lire le guide génie électrique",
    intro:
      "Le génie électrique permet d'assurer l'alimentation, la protection et le raccordement des équipements techniques du bâtiment : pompes, CTA, PAC, ballons, extracteurs, armoires et dispositifs de régulation.",
    Icon: IconElectricite,
    detail: {
      definition:
        "Le génie électrique appliqué aux lots techniques assure l'alimentation, la protection et le raccordement des équipements CVC et fluides. Il garantit la sécurité, la conformité et la cohérence entre puissances disponibles et besoins.",
      role: [
        "Alimenter et protéger les équipements techniques",
        "Garantir la sécurité des personnes et des biens",
        "Assurer la conformité normative des installations",
        "Coordonner les besoins électriques avec les autres lots",
      ],
      equipements: [
        "Armoires et tableaux électriques",
        "Protections et dispositifs différentiels",
        "Alimentations des CTA, pompes, PAC, ballons, extracteurs",
        "Réseaux courants forts et courants faibles",
        "Asservissements et report d'alarmes",
      ],
      vigilance: [
        "Bilan de puissance et puissances disponibles",
        "Sélectivité et coordination des protections",
        "Conformité NF C 15-100 et NF C 13-100/200",
        "Coordination avec les lots techniques (CVC, plomberie)",
        "Locaux techniques et contraintes associées",
      ],
      erreurs: [
        "Puissances disponibles insuffisantes pour les équipements",
        "Protections mal coordonnées",
        "Asservissements CVC / électricité oubliés",
        "Manque de coordination entre lots en phase chantier",
      ],
    },
  },
  {
    slug: "regulation-gtb-gtc",
    title: "Régulation / GTB / GTC",
    guideTitle: "Guide technique régulation, GTB et GTC",
    desc: "Comprendre le rôle de la régulation et de la supervision technique : sondes, automates, vannes motorisées, lois d'eau, programmation horaire, remontées d'alarmes et suivi énergétique.",
    cta: "Lire le guide régulation",
    intro:
      "La régulation, la GTB et la GTC permettent de piloter, superviser et optimiser les installations techniques. Elles participent à la performance énergétique, au confort, à la maintenance et au suivi des alarmes.",
    Icon: IconHydraulique,
    detail: {
      definition:
        "La régulation pilote localement les installations techniques, tandis que la GTB (gestion technique du bâtiment) et la GTC (gestion technique centralisée) supervisent l'ensemble des équipements pour optimiser leur fonctionnement.",
      role: [
        "Piloter finement les installations techniques",
        "Optimiser la performance énergétique",
        "Améliorer le confort et la réactivité",
        "Faciliter la maintenance et le suivi des alarmes",
      ],
      equipements: [
        "Sondes et capteurs (température, CO₂, pression)",
        "Automates et régulateurs",
        "Vannes et registres motorisés",
        "Superviseur GTB / GTC",
        "Compteurs et sous-compteurs",
      ],
      vigilance: [
        "Définition claire des lois d'eau et consignes",
        "Programmation horaire adaptée aux usages",
        "Remontées d'alarmes pertinentes et hiérarchisées",
        "Interopérabilité des protocoles (BACnet, Modbus)",
        "Suivi énergétique exploitable",
      ],
      erreurs: [
        "Régulation mal paramétrée annulant les économies attendues",
        "Trop d'alarmes non hiérarchisées, ignorées par l'exploitant",
        "Absence de suivi énergétique réel",
        "Protocoles incompatibles entre équipements",
      ],
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export interface FaqItem {
  q: string;
  a: string;
}

export const faq: FaqItem[] = [
  {
    q: "Quel est le rôle d'un bureau d'études CVC ?",
    a: "Un bureau d'études CVC conçoit et dimensionne les installations de chauffage, ventilation et climatisation : il définit les puissances, sélectionne les équipements, établit les plans et notes de calcul, rédige les pièces écrites (CCTP, DPGF) et accompagne le projet jusqu'à la réception des ouvrages.",
  },
  {
    q: "Pourquoi réaliser un calcul de déperditions ?",
    a: "Le calcul de déperditions (selon NF EN 12831) détermine la puissance de chauffage nécessaire à chaque local. Il évite le surdimensionnement, source de surcoût et d'inconfort, et garantit que les équipements installés correspondent réellement aux besoins du bâtiment.",
  },
  {
    q: "Quelle est la différence entre une VMC simple flux et une ventilation double flux ?",
    a: "La VMC simple flux extrait l'air vicié et fait entrer l'air neuf par des entrées d'air. La ventilation double flux récupère la chaleur de l'air extrait pour préchauffer l'air entrant via un échangeur, améliorant le confort et réduisant les déperditions liées au renouvellement d'air.",
  },
  {
    q: "À quoi sert un bouclage ECS ?",
    a: "Le bouclage maintient l'eau chaude sanitaire en circulation permanente dans le réseau, garantissant une eau chaude immédiate aux points de puisage et limitant le développement des légionelles en maintenant une température suffisante sur l'ensemble du réseau.",
  },
  {
    q: "Pourquoi l'équilibrage hydraulique est-il important ?",
    a: "L'équilibrage répartit correctement les débits d'eau entre les différents émetteurs ou circuits. Sans équilibrage, certains locaux sont surchauffés et d'autres sous-chauffés ; un réseau équilibré assure le confort, optimise le rendement et réduit les consommations.",
  },
  {
    q: "Qu'est-ce qu'un DCE technique ?",
    a: "Le Dossier de Consultation des Entreprises (DCE) rassemble les pièces techniques permettant aux entreprises de chiffrer les travaux : CCTP (clauses techniques), DPGF (décomposition de prix), plans et schémas. C'est le document de référence pour la consultation et la passation des marchés.",
  },
  {
    q: "Pourquoi intégrer le génie électrique dans les études CVC ?",
    a: "Les équipements CVC (PAC, CTA, pompes, ballons, extracteurs) nécessitent une alimentation électrique dimensionnée et protégée. Intégrer le génie électrique dès la conception garantit la cohérence des puissances, des protections et des raccordements, et évite les reprises en phase chantier.",
  },
  {
    q: "Quels sont les points de vigilance pour une pompe à chaleur en rénovation ?",
    a: "En rénovation, il faut vérifier la compatibilité du régime d'eau avec les émetteurs existants, l'équilibrage du réseau, le dimensionnement réaliste selon les déperditions, l'intégration acoustique de l'unité extérieure et, souvent, une solution d'appoint ou hybride pour les périodes les plus froides.",
  },
];
