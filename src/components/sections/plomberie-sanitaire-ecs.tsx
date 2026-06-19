import { BlurFade } from "@/components/ui/blur-fade";
import { NumberedCardGrid } from "@/components/ui/numbered-card-grid";
import { ResponsiveTable } from "@/components/ui/responsive-table";

/* ─── Données tableau ──────────────────────────────────────────────── */

const domaineRows = [
  ["Alimentation eau froide EF", "Logements, bureaux, ERP, commerces, locaux sanitaires", "Débits probables, pression disponible, pertes de charge, comptage, disconnexion, matériaux"],
  ["Eau chaude sanitaire ECS", "Logements, tertiaire, ERP, vestiaires, cuisines", "Production, stockage éventuel, température, sécurité sanitaire, pertes thermiques, équilibrage"],
  ["Bouclage ECS", "Immeubles collectifs, ERP, établissements avec points de puisage éloignés", "Temps d'attente, maintien en température, équilibrage des boucles, calorifuge, pertes énergétiques"],
  ["Évacuations eaux usées EU", "Sanitaires, lavabos, douches, éviers, équipements techniques", "Pentes, diamètres, ventilation primaire, bruit, accessibilité, curage"],
  ["Évacuations eaux vannes EV", "WC, blocs sanitaires, logements, ERP", "Chutes, ventilation, désiphonnage, pentes, raccordements, entretien"],
  ["Appareils sanitaires", "Logements, bureaux, ERP, sanitaires publics, vestiaires", "Choix des équipements, accessibilité, robustesse, économie d'eau, maintenance"],
  ["Réseaux d'eaux pluviales EP", "Toitures, terrasses, cours, bâtiments tertiaires", "Débits de pluie, descentes EP, trop-pleins, pentes, coordination structure/architecture"],
  ["Comptage et sous-comptage", "Immeubles collectifs, tertiaire, locaux privatifs", "Individualisation, relevé, accessibilité, télérelève éventuelle, maintenance"],
  ["Protection sanitaire", "Tous bâtiments", "Disconnecteurs, clapets, anti-retour, prévention pollution réseau, sécurité d'exploitation"],
  ["Plomberie technique", "Locaux techniques, chaufferies, sous-stations, CTA, productions ECS", "Remplissage, vidange, siphons, condensats, évacuations techniques, raccordements spécifiques"],
];

/* ─── Sous-composants partagés ─────────────────────────────────────── */

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <BlurFade inView duration={0.5}>
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="block w-5 h-[1.5px] bg-brand-orange" />
        <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">{eyebrow}</span>
      </div>
      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-night-50 leading-tight mb-4">{title}</h2>
    </BlurFade>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display font-bold text-xl text-night-50 leading-snug mb-3 mt-2">{children}</h3>;
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-night-200 text-base leading-[1.8] max-w-3xl mb-4">{children}</p>;
}

/* ─── Composant principal ──────────────────────────────────────────── */

export function PlomberieSanitaireEcs() {
  return (
    <>
      {/* Présentation détaillée */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Plomberie & sanitaires" title="Plomberie sanitaire, ECS & eaux pluviales" />
          <Para>
            Sa conception doit être adaptée aux usages du bâtiment : logements, bureaux, commerces, établissements recevant du public, locaux sanitaires, vestiaires, cuisines, locaux techniques ou bâtiments tertiaires. Une installation performante doit garantir des débits suffisants, une pression maîtrisée, une production ECS adaptée, un bouclage équilibré, une bonne évacuation des effluents, une gestion cohérente des eaux pluviales, une maintenance accessible et une sécurité sanitaire durable.
          </Para>
          <Para>
            OSARIS Ingénierie accompagne les maîtres d&apos;ouvrage, architectes, syndics, exploitants et entreprises dans les études de plomberie sanitaire, d&apos;eau chaude sanitaire, de bouclage ECS, d&apos;évacuations EU/EV et d&apos;eaux pluviales, en bâtiment neuf comme en rénovation.
          </Para>
        </div>
      </section>

      {/* Tableau des domaines */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Les principaux domaines de plomberie sanitaire</SubHeading>
          <Para>
            La plomberie sanitaire couvre l&apos;alimentation, la production, la distribution, l&apos;évacuation et la protection des réseaux. Le tableau ci-dessous présente les principaux domaines et leurs enjeux techniques.
          </Para>
          <ResponsiveTable
            caption="Domaines de plomberie sanitaire"
            headers={["Domaine", "Applications courantes", "Enjeux techniques principaux"]}
            rows={domaineRows}
            note="Ce classement est indicatif. Chaque projet doit être étudié selon l'usage du bâtiment, les besoins réels, la pression disponible, les contraintes sanitaires, l'implantation des réseaux, les matériaux, les exigences acoustiques et les conditions d'exploitation."
          />
        </div>
      </section>

      {/* Neuf / Rénovation */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Intervention en bâtiment neuf</SubHeading>
          <Para>
            En construction neuve, la plomberie sanitaire doit être intégrée dès les premières phases de conception afin d&apos;anticiper les gaines techniques, les réservations, les traversées de planchers, les locaux techniques, les compteurs, les réseaux horizontaux, les descentes EU/EV/EP, les attentes sanitaires, les contraintes acoustiques, les accès maintenance et les interfaces avec l&apos;architecture, la structure, la ventilation, le chauffage et l&apos;électricité.
          </Para>
          <NumberedCardGrid
            eyebrow="En neuf, OSARIS Ingénierie intervient notamment sur"
            items={[
              "L'analyse des besoins sanitaires et la définition des principes EF/ECS",
              "Le calcul des débits probables et le dimensionnement des réseaux",
              "L'étude des pertes de charge et la vérification de la pression disponible",
              "La définition des comptages et des dispositifs de protection sanitaire",
              "Le dimensionnement de la production ECS et l'étude du bouclage",
              "Le dimensionnement des évacuations EU/EV et l'étude des eaux pluviales",
              "L'implantation des appareils sanitaires",
              "Les schémas de principe, plans techniques, CCTP et DPGF",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Intervention en rénovation</SubHeading>
            <Para>
              En rénovation, la plomberie sanitaire doit s&apos;adapter à l&apos;existant : gaines techniques, colonnes EF/ECS/EU/EV, réseaux encastrés, bâtiments occupés, contraintes de phasage, pression disponible, production ECS existante, problèmes d&apos;entartrage ou de corrosion, fuites, nuisances acoustiques et contraintes architecturales.
            </Para>
            <NumberedCardGrid
              eyebrow="Les études de rénovation peuvent comprendre"
              items={[
                "Le diagnostic des réseaux existants et le relevé des colonnes",
                "L'analyse des points de puisage et la vérification des diamètres",
                "L'analyse des pressions disponibles",
                "L'identification des défauts : manque de pression, temps d'attente ECS, fuites, bruit, odeurs",
                "La vérification du bouclage ECS et l'analyse des évacuations existantes",
                "La définition des réseaux à conserver, déposer ou remplacer",
                "L'adaptation des cheminements et le phasage en site occupé",
                "L'assistance à la réception",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Eau froide */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Alimentation en eau froide sanitaire</SubHeading>
          <Para>
            Le dimensionnement de l&apos;eau froide doit garantir un débit suffisant aux points de puisage tout en maîtrisant les vitesses, les pertes de charge et les nuisances acoustiques.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Arrivée générale et comptage",
              "Filtration éventuelle et réducteur de pression si nécessaire",
              "Disconnecteurs et clapets",
              "Colonnes montantes et distributions horizontales",
              "Attentes sanitaires et robinets d'arrêt",
              "Matériaux et calorifuge éventuel",
              "Accessibilité et repérage",
            ]}
          />
        </div>
      </section>

      {/* ECS */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Production d&apos;eau chaude sanitaire ECS</SubHeading>
          <Para>
            L&apos;ECS doit être dimensionnée selon les usages réels du bâtiment, les profils de puisage, les débits de pointe et les exigences de confort.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Production individuelle ou collective",
              "Production instantanée, semi-instantanée ou avec stockage",
              "Température de production et sécurité sanitaire",
              "Prévention des risques de brûlure (mitigeage)",
              "Pertes thermiques et calorifuge",
              "Équilibrage et accessibilité maintenance",
              "Comptage éventuel",
            ]}
          />
        </div>
      </section>

      {/* Bouclage ECS */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Bouclage ECS</SubHeading>
          <Para>
            Le bouclage permet de réduire le temps d&apos;attente aux points de puisage éloignés, mais il doit être correctement dimensionné et équilibré. Un bouclage mal conçu peut entraîner des pertes énergétiques importantes, des températures insuffisantes, des temps d&apos;attente élevés ou des déséquilibres sanitaires.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Température de boucle et débit de bouclage",
              "Pertes thermiques et calorifuge des réseaux",
              "Circulateur de bouclage et vannes d'équilibrage",
              "Robinets thermostatiques de boucle si prévus",
              "Équilibrage des antennes",
              "Comptage énergétique éventuel",
              "Maintenance et prévention des dérives de température",
            ]}
          />
        </div>
      </section>

      {/* EU / EV */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Évacuations eaux usées EU et eaux vannes EV</SubHeading>
          <Para>
            Un réseau d&apos;évacuation doit être dimensionné pour assurer l&apos;écoulement gravitaire, éviter les odeurs, limiter les bruits et faciliter l&apos;entretien.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Diamètres des évacuations et pentes",
              "Chutes et collecteurs horizontaux",
              "Ventilation primaire et secondaire si nécessaire",
              "Siphons et risques de désiphonnage",
              "Tampons de visite et accessibilité au curage",
              "Limitation du bruit et traversées de planchers",
              "Raccordement au réseau existant",
            ]}
          />
        </div>
      </section>

      {/* EAUX PLUVIALES EP — rubrique dédiée */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Eaux pluviales EP</SubHeading>
          <Para>
            Les réseaux d&apos;eaux pluviales assurent la collecte et l&apos;évacuation des eaux de toiture, terrasses, cours ou surfaces extérieures raccordées. Leur conception doit prendre en compte les surfaces collectées, les intensités de pluie retenues, les pentes, les descentes EP, les collecteurs horizontaux, les boîtes à eau, les trop-pleins, les dispositifs de rétention éventuels et le raccordement au réseau existant.
          </Para>
          <Para>
            Une mauvaise conception des eaux pluviales peut entraîner des débordements, infiltrations, stagnations d&apos;eau, nuisances en façade, surcharge des réseaux ou désordres dans le bâtiment. L&apos;étude doit donc être coordonnée avec l&apos;architecture, la structure, l&apos;étanchéité, les VRD et l&apos;assainissement.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités sur les eaux pluviales"
            items={[
              "Surfaces de toiture ou terrasse collectées",
              "Descentes EP",
              "Boîtes à eau",
              "Trop-pleins",
              "Collecteurs horizontaux",
              "Pentes d'écoulement",
              "Raccordement au réseau existant",
              "Rétention ou limitation de débit si demandée",
              "Coordination avec étanchéité, structure, VRD et assainissement",
            ]}
          />
        </div>
      </section>

      {/* Appareils sanitaires */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Appareils sanitaires et accessibilité</SubHeading>
          <Para>
            Le choix des appareils dépend des usages, du niveau de fréquentation, de l&apos;accessibilité, de la maintenance et du niveau de robustesse attendu.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Lavabos, vasques, WC et urinoirs",
              "Douches, éviers et lave-mains",
              "Attentes machines",
              "Robinetteries et mitigeurs temporisés",
              "Équipements hydro-économes",
              "Sanitaires PMR et barres d'appui",
              "Hauteurs de pose, maintenance et robustesse",
            ]}
          />
        </div>
      </section>

      {/* Protection sanitaire */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Protection sanitaire et disconnexion</SubHeading>
          <Para>
            Ces dispositifs sont essentiels pour garantir la sécurité sanitaire et éviter les retours d&apos;eau polluée vers le réseau d&apos;eau potable.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Protection contre les retours d'eau",
              "Disconnecteurs et clapets anti-retour",
              "Protection des remplissages techniques",
              "Séparation des réseaux",
              "Points de puisage techniques",
              "Raccordements aux équipements CVC",
              "Prévention de la pollution du réseau d'eau potable",
            ]}
          />
        </div>
      </section>

      {/* Acoustique */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Acoustique plomberie</SubHeading>
          <Para>
            Le confort acoustique dépend de la maîtrise des vitesses, du traitement des chutes et de la désolidarisation des réseaux. Sources de bruit : vitesses d&apos;eau excessives, coups de bélier, chutes EU/EV, robinetteries, pompes, circulateurs ECS, fixations rigides, traversées de parois et gaines techniques proches de locaux sensibles.
          </Para>
          <NumberedCardGrid
            eyebrow="Solutions possibles"
            items={[
              "Limitation des vitesses",
              "Colliers isophoniques et désolidarisation",
              "Anti-béliers si nécessaire",
              "Choix de robinetteries adaptées",
              "Traitement des chutes",
              "Implantation des réseaux hors locaux sensibles",
              "Isolation acoustique des gaines",
            ]}
          />
        </div>
      </section>

      {/* Matériaux */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Matériaux, calorifuge et maintenance</SubHeading>
          <Para>
            Les choix doivent tenir compte de la durabilité, de la maintenance, de l&apos;environnement du bâtiment et de la compatibilité avec les réseaux existants.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Cuivre, acier galvanisé, multicouche, PER, PVC, fonte",
              "Matériaux compatibles avec l'usage",
              "Calorifuge ECS et protection contre la condensation EF",
              "Accessibilité des vannes et repérage",
              "Vidanges et purges",
              "Trappes de visite",
              "Remplacement des équipements",
            ]}
          />
        </div>
      </section>

      {/* Exécution */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Études d&apos;exécution pour les entreprises</SubHeading>
          <Para>
            OSARIS Ingénierie intervient aussi en phase d&apos;exécution pour accompagner les entreprises titulaires des travaux.
          </Para>
          <NumberedCardGrid
            eyebrow="Missions possibles en exécution"
            items={[
              "Plans d'exécution plomberie sanitaire et schémas EF/ECS/EU/EV",
              "Notes de calcul de débits et calculs de pertes de charge",
              "Dimensionnement des réseaux",
              "Plans de réservations et plans de colonnes",
              "Carnets de détails",
              "Sélection des appareils sanitaires et robinetteries",
              "Sélection des pompes ou circulateurs de bouclage ECS",
              "Fiches techniques matériel et réponses aux observations de visa",
              "Adaptation des plans selon les contraintes chantier et préparation du DOE",
            ]}
          />
        </div>
      </section>

      {/* Réception + DOE */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Assistance chantier, essais et réception</SubHeading>
          <Para>
            La réception d&apos;une installation de plomberie doit confirmer que les réseaux sont étanches, accessibles, correctement repérés, fonctionnels et exploitables.
          </Para>
          <NumberedCardGrid
            eyebrow="Contrôles possibles"
            items={[
              "Conformité de l'implantation et accessibilité des vannes",
              "Essais d'étanchéité et rinçage des réseaux",
              "Désinfection si nécessaire",
              "Contrôle des pressions et vérification des débits",
              "Contrôle de la température ECS et du bouclage ECS",
              "Essais d'évacuation et vérification des pentes",
              "Absence de fuite et d'odeur, repérage des réseaux",
              "Documents de réception",
            ]}
          />
          <div className="mt-8">
            <SubHeading>DOE et exploitation</SubHeading>
            <Para>
              Le dossier des ouvrages exécutés (DOE) doit permettre l&apos;exploitation et la maintenance dans la durée.
            </Para>
            <NumberedCardGrid
              eyebrow="Le DOE doit comprendre"
              items={[
                "Plans conformes à l'exécution et schémas EF/ECS/EU/EV",
                "Notes de calcul et fiches techniques",
                "Notices d'exploitation et de maintenance",
                "PV d'essais d'étanchéité, de rinçage et de désinfection si applicable",
                "Réglages du bouclage ECS",
                "Repérage des réseaux et liste des compteurs",
                "Consignes d'entretien et synoptiques de fonctionnement",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Domaines + approche */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Domaines d&apos;intervention</SubHeading>
          <NumberedCardGrid
            eyebrow="OSARIS Ingénierie intervient sur"
            items={[
              "Plomberie sanitaire logements, tertiaire et ERP",
              "Alimentation eau froide",
              "Production eau chaude sanitaire et bouclage ECS",
              "Réseaux EU/EV et réseaux EP",
              "Sanitaires PMR et appareils sanitaires",
              "Comptage et sous-comptage",
              "Disconnexion et protection sanitaire",
              "Locaux techniques et raccordements CVC",
              "Rénovation de réseaux existants",
              "Études d'exécution plomberie pour entreprises",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Notre approche</SubHeading>
            <Para>
              Une installation de plomberie sanitaire doit être correctement dimensionnée, adaptée aux usages réels, fiable, silencieuse, accessible pour la maintenance, conforme aux exigences sanitaires, sobre en eau et en énergie, compatible avec l&apos;architecture, bien repérée, documentée et vérifiable.
            </Para>
            <Para>
              Notre objectif est de concevoir et d&apos;accompagner des installations de plomberie sanitaire fiables, maintenables et adaptées aux usages réels du bâtiment, en neuf comme en rénovation, depuis les premières études jusqu&apos;à la réception technique.
            </Para>
          </div>
        </div>
      </section>
    </>
  );
}
