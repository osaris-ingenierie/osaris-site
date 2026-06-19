import { BlurFade } from "@/components/ui/blur-fade";
import { NumberedCardGrid } from "@/components/ui/numbered-card-grid";
import { ResponsiveTable } from "@/components/ui/responsive-table";

/* ─── Données tableau ──────────────────────────────────────────────── */

const systemeRows = [
  ["Ventilation naturelle", "Bâtiments existants, logements anciens, locaux avec ouvrants", "Débits dépendants du vent et du tirage thermique, maîtrise limitée, entrées d'air, grilles hautes/basses"],
  ["VMC simple flux autoréglable", "Logements, petits bâtiments, rénovation", "Débits fixes, extraction sanitaires/cuisine, entrées d'air, acoustique, équilibrage des débits"],
  ["VMC simple flux hygroréglable", "Logements collectifs ou individuels", "Adaptation des débits selon l'humidité, économies d'énergie, choix des bouches hygro, entrées d'air, avis techniques"],
  ["VMC double flux", "Logements performants, bureaux, bâtiments basse consommation", "Récupération de chaleur, réseaux soufflage/extraction, filtres, équilibrage, acoustique, entretien"],
  ["Ventilation tertiaire simple flux", "Bureaux, commerces, sanitaires, locaux sociaux", "Débits d'air neuf ou extraction, caissons, bouches, grilles, transfert d'air, régulation horaire"],
  ["Centrale de traitement d'air CTA", "ERP, bureaux, écoles, bâtiments tertiaires", "Filtration, chauffage, rafraîchissement, récupération d'énergie, régulation, équilibrage aéraulique"],
  ["Ventilation de locaux techniques", "Chaufferies, sous-stations, locaux électriques, locaux déchets", "Amenée d'air, extraction, dissipation thermique, sécurité, implantation des grilles"],
  ["Extraction spécifique", "Sanitaires, cuisines, locaux ménage, locaux polluants", "Débits dédiés, réseaux séparés, rejet extérieur, acoustique, entretien"],
  ["Ventilation de parking", "Parkings couverts, sous-sols, zones de stationnement", "Extraction mécanique, détection CO/NOx, désenfumage éventuel, débits importants, sécurité"],
  ["Ventilation industrielle légère", "Ateliers, locaux d'activité, zones techniques", "Captation des polluants, renouvellement d'air, compensation, filtration éventuelle, bruit"],
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

export function VentilationTraitementAir() {
  return (
    <>
      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Traitement d'air" title="Ventilation, traitement d'air & qualité d'air intérieur" />
          <Para>
            La ventilation constitue un élément essentiel du confort et de la salubrité d&apos;un bâtiment. Elle assure le renouvellement de l&apos;air intérieur, l&apos;évacuation de l&apos;humidité, des odeurs et des polluants, tout en participant au confort thermique et à la qualité d&apos;air intérieur.
          </Para>
          <Para>
            Sa conception doit être adaptée à l&apos;usage des locaux : logements, bureaux, commerces, établissements recevant du public, locaux sanitaires, parkings, locaux techniques ou bâtiments tertiaires. Une installation de ventilation performante doit garantir des débits maîtrisés, un fonctionnement silencieux, une bonne accessibilité maintenance et une consommation électrique optimisée.
          </Para>
          <Para>
            Une installation de ventilation ne se limite pas au choix d&apos;un caisson d&apos;extraction ou d&apos;une CTA. Elle doit intégrer les débits d&apos;air réglementaires ou fonctionnels, l&apos;usage des locaux, l&apos;occupation, les contraintes acoustiques, les pertes de charge, les réseaux aérauliques, les entrées d&apos;air, les grilles de transfert, les bouches d&apos;extraction ou de soufflage, les CTA, les ventilateurs, les filtres, les registres, la régulation, la maintenance, l&apos;accessibilité et les interfaces avec le chauffage, la climatisation et le désenfumage éventuel.
          </Para>
          <Para>
            OSARIS Ingénierie intervient en bâtiment neuf comme en rénovation, en phase conception pour les maîtres d&apos;ouvrage, architectes, syndics et exploitants, ainsi qu&apos;en phase d&apos;exécution pour les entreprises titulaires des travaux.
          </Para>
        </div>
      </section>

      {/* Tableau des systèmes */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Les principaux systèmes de ventilation</SubHeading>
          <Para>
            Le choix d&apos;un système de ventilation dépend de l&apos;usage du bâtiment, des débits nécessaires, du niveau de performance attendu et des contraintes d&apos;exploitation. Le tableau ci-dessous donne une grille de lecture des principales familles de systèmes.
          </Para>
          <ResponsiveTable
            caption="Classement indicatif des systèmes de ventilation"
            headers={["Type de système", "Applications courantes", "Enjeux techniques principaux"]}
            rows={systemeRows}
            note="Ce classement est indicatif. Chaque projet doit être étudié selon l'usage du bâtiment, les débits nécessaires, la réglementation applicable, les contraintes acoustiques, les pertes de charge, l'implantation des réseaux et les conditions d'exploitation."
          />
        </div>
      </section>

      {/* Neuf / Rénovation */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Intervention en bâtiment neuf</SubHeading>
          <Para>
            En construction neuve, la ventilation doit être intégrée dès les premières phases de conception afin d&apos;anticiper les débits réglementaires, les gaines verticales, les faux plafonds, les locaux techniques, les réservations, les sorties en toiture ou façade, les niveaux acoustiques, les accès maintenance et les interfaces avec le chauffage, la climatisation, la plomberie, l&apos;électricité et l&apos;architecture.
          </Para>
          <NumberedCardGrid
            eyebrow="En neuf, OSARIS Ingénierie intervient notamment sur"
            items={[
              "L'analyse des usages et des occupations",
              "La définition des débits d'air neuf et d'extraction",
              "Le choix du principe de ventilation",
              "L'implantation des CTA, caissons ou ventilateurs",
              "Le dimensionnement des réseaux aérauliques",
              "Le calcul des pertes de charge",
              "La sélection des bouches, grilles, diffuseurs et registres",
              "L'étude des transferts d'air et l'intégration acoustique",
              "L'intégration des filtres et batteries éventuelles",
              "Les schémas de principe, plans techniques, CCTP et DPGF",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Intervention en rénovation</SubHeading>
            <Para>
              En rénovation, la ventilation doit s&apos;adapter à l&apos;existant : gaines existantes, faux plafonds limités, traversées de planchers, percements difficiles, locaux occupés, contraintes acoustiques, façades ou toitures déjà construites, équipements existants, impossibilité de créer certains réseaux et contraintes d&apos;exploitation pendant les travaux.
            </Para>
            <NumberedCardGrid
              eyebrow="Les études de rénovation peuvent comprendre"
              items={[
                "Le diagnostic de la ventilation existante",
                "Le relevé des caissons, gaines, bouches et grilles",
                "La mesure ou l'estimation des débits existants",
                "L'analyse des défauts de ventilation",
                "L'identification des désordres : humidité, odeurs, condensation, bruit, inconfort",
                "La vérification des entrées d'air",
                "L'analyse des possibilités de réutilisation des réseaux existants",
                "L'adaptation des cheminements et le remplacement ou redimensionnement des caissons",
                "L'amélioration acoustique et le phasage des travaux en site occupé",
                "L'assistance à la réception",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Logements */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Ventilation des logements</SubHeading>
          <Para>
            Dans les logements, la ventilation doit assurer le renouvellement d&apos;air permanent tout en limitant les déperditions thermiques, les nuisances sonores et les risques d&apos;humidité.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités en logement"
            items={[
              "VMC simple flux autoréglable",
              "VMC simple flux hygroréglable type A ou type B",
              "VMC double flux avec récupération de chaleur",
              "Entrées d'air et détalonnage des portes",
              "Bouches d'extraction cuisine, salle de bains, WC",
              "Transfert d'air et conduits collectifs",
              "Caissons d'extraction et rejet extérieur",
              "Acoustique et entretien",
            ]}
          />
        </div>
      </section>

      {/* Tertiaire et ERP */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Ventilation tertiaire et ERP</SubHeading>
          <Para>
            Dans les bâtiments tertiaires et les ERP — bureaux, salles de réunion, commerces, écoles, locaux sociaux, sanitaires, locaux techniques, salles polyvalentes et locaux à occupation variable — les débits doivent être adaptés à l&apos;occupation, à l&apos;activité et au niveau de qualité d&apos;air attendu.
          </Para>
          <NumberedCardGrid
            eyebrow="Systèmes possibles"
            items={[
              "Extraction simple flux",
              "Soufflage d'air neuf",
              "CTA double flux avec récupération d'énergie",
              "Variation de débit",
              "Pilotage horaire",
              "Sondes CO₂ et régulation selon l'occupation",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>CTA et traitement d&apos;air</SubHeading>
          <Para>
            Une centrale de traitement d&apos;air (CTA) peut assurer l&apos;introduction d&apos;air neuf, l&apos;extraction d&apos;air vicié, la filtration, le chauffage, le rafraîchissement, la récupération d&apos;énergie, le mélange d&apos;air, la régulation des débits, la gestion horaire et le contrôle de la qualité d&apos;air.
          </Para>
          <NumberedCardGrid
            eyebrow="Points à étudier sur une CTA"
            items={[
              "Débit d'air et pression disponible",
              "Filtres et niveaux de filtration",
              "Batteries chaudes ou froides",
              "Récupérateur de chaleur",
              "Ventilateurs et registres",
              "Pièges à son et accès maintenance",
              "Évacuation des condensats si batterie froide",
              "Régulation et raccordement GTB",
            ]}
          />
        </div>
      </section>

      {/* Réseaux aérauliques */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Réseaux aérauliques</SubHeading>
          <Para>
            Un réseau mal dimensionné peut entraîner du bruit, des pertes de charge excessives, des débits insuffisants, une surconsommation des ventilateurs et des difficultés d&apos;équilibrage. La conception des réseaux de gaines est donc déterminante.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités sur les réseaux de gaines"
            items={[
              "Dimensionnement des gaines et vitesses d'air",
              "Pertes de charge et équilibre des débits",
              "Registres de réglage et clapets coupe-feu si nécessaires",
              "Calorifuge et étanchéité des réseaux",
              "Supports et trappes d'accès",
              "Nettoyage et intégration en faux plafond",
              "Contraintes de réservation",
            ]}
          />
        </div>
      </section>

      {/* Diffusion / extraction / transfert */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Diffusion, extraction et transfert d&apos;air</SubHeading>
          <Para>
            La position et le choix des terminaux aérauliques influencent directement le confort, le niveau sonore et l&apos;efficacité du renouvellement d&apos;air.
          </Para>
          <NumberedCardGrid
            eyebrow="Terminaux aérauliques"
            items={[
              "Bouches d'extraction et de soufflage",
              "Diffuseurs plafonniers",
              "Grilles murales et grilles de reprise",
              "Grilles de transfert",
              "Détalonnage des portes",
              "Clapets et registres",
            ]}
          />
        </div>
      </section>

      {/* Acoustique */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Acoustique de ventilation</SubHeading>
          <Para>
            Le confort acoustique est un enjeu majeur de la ventilation. Les principales sources de bruit sont les ventilateurs, les caissons, les CTA, les vitesses d&apos;air trop élevées, les bouches mal sélectionnées, les transmissions par gaines, les vibrations, les traversées de parois et le rejet extérieur.
          </Para>
          <NumberedCardGrid
            eyebrow="Solutions acoustiques possibles"
            items={[
              "Sélection de ventilateurs adaptés",
              "Limitation des vitesses d'air",
              "Pièges à son et manchettes souples",
              "Supports antivibratiles",
              "Traitement des traversées de parois",
              "Choix de bouches à faible niveau sonore",
              "Éloignement des rejets des zones sensibles",
            ]}
          />
        </div>
      </section>

      {/* Régulation */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Régulation et pilotage</SubHeading>
          <Para>
            La régulation permet d&apos;adapter les débits aux besoins réels et de réduire les consommations électriques des auxiliaires.
          </Para>
          <NumberedCardGrid
            eyebrow="La régulation peut intégrer"
            items={[
              "Programmation horaire et débits réduits en inoccupation",
              "Variation de vitesse",
              "Détection de présence",
              "Sondes CO₂, d'humidité et de température",
              "Pressostats filtres et reports d'alarme",
              "Interface GTB ou GTC et pilotage par zone",
            ]}
          />
        </div>
      </section>

      {/* Qualité d'air intérieur */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Qualité d&apos;air intérieur</SubHeading>
          <Para>
            La qualité d&apos;air intérieur dépend autant du dimensionnement que de l&apos;exploitation et de l&apos;entretien. Une installation bien conçue mais mal entretenue ne garantit pas une bonne qualité d&apos;air.
          </Para>
          <NumberedCardGrid
            eyebrow="Facteurs de qualité d'air intérieur"
            items={[
              "Renouvellement d'air et évacuation de l'humidité",
              "Maîtrise des odeurs et du CO₂",
              "Limitation des polluants intérieurs",
              "Filtration et entretien des filtres",
              "Nettoyage des réseaux",
              "Limitation des zones mortes et confort des occupants",
            ]}
          />
        </div>
      </section>

      {/* Exécution */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Études d&apos;exécution pour les entreprises</SubHeading>
          <Para>
            OSARIS Ingénierie intervient aussi en phase d&apos;exécution pour accompagner les entreprises titulaires des travaux et produire un dossier technique clair et cohérent.
          </Para>
          <NumberedCardGrid
            eyebrow="L'accompagnement en exécution peut comprendre"
            items={[
              "Plans d'exécution ventilation et schémas aérauliques",
              "Notes de calcul de débits et de pertes de charge",
              "Dimensionnement des gaines",
              "Sélection des CTA, caissons et ventilateurs",
              "Sélection des bouches, grilles et diffuseurs",
              "Notes acoustiques simplifiées",
              "Plans de réservations et plans de synthèse CVC",
              "Fiches techniques matériel et réponses aux observations de visa",
              "Adaptation des plans selon les contraintes chantier",
              "Préparation des éléments nécessaires au DOE",
            ]}
          />
        </div>
      </section>

      {/* Réception + DOE */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Assistance chantier, essais et réception</SubHeading>
          <Para>
            La réception d&apos;une installation de ventilation doit confirmer que les débits sont atteints, que le fonctionnement est stable et que l&apos;installation est exploitable.
          </Para>
          <NumberedCardGrid
            eyebrow="Contrôles possibles à la réception"
            items={[
              "Conformité de l'implantation et accessibilité des équipements",
              "Sens de rotation des ventilateurs",
              "État des filtres et fonctionnement des registres",
              "Mesure des débits et équilibrage aéraulique",
              "Contrôle des pressions et du niveau sonore",
              "Fonctionnement des alarmes et de la régulation",
              "Rejet extérieur et documents de réception",
            ]}
          />
          <div className="mt-8">
            <SubHeading>DOE et exploitation</SubHeading>
            <Para>
              Le dossier des ouvrages exécutés (DOE) doit permettre l&apos;exploitation et la maintenance de l&apos;installation dans la durée.
            </Para>
            <NumberedCardGrid
              eyebrow="Le DOE doit comprendre"
              items={[
                "Plans conformes à l'exécution et schémas aérauliques",
                "Notes de calcul et fiches techniques",
                "Notices d'exploitation et de maintenance",
                "PV de mise en service",
                "Rapport de mesure des débits et rapport d'équilibrage",
                "Repérage des bouches et réseaux",
                "Consignes de réglage et liste des alarmes",
                "Périodicité de remplacement des filtres et synoptiques de régulation",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Domaines + approche */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Domaines d&apos;intervention</SubHeading>
          <NumberedCardGrid
            eyebrow="OSARIS Ingénierie intervient sur"
            items={[
              "Ventilation logements",
              "VMC simple flux et hygroréglable",
              "VMC double flux",
              "Ventilation tertiaire, bureaux et ERP",
              "Ventilation sanitaires et locaux techniques",
              "CTA simple flux et double flux",
              "Extraction mécanique et réseaux aérauliques",
              "Équilibrage des débits et régulation ventilation",
              "Qualité d'air intérieur",
              "Rénovation d'installations existantes et études d'exécution",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Notre approche</SubHeading>
            <Para>
              Une installation de ventilation doit être correctement dimensionnée, adaptée aux usages réels, silencieuse, sobre en énergie, accessible pour la maintenance, compatible avec l&apos;architecture, correctement régulée, équilibrée, documentée et vérifiable.
            </Para>
            <Para>
              Notre objectif est de concevoir et d&apos;accompagner des installations de ventilation fiables, silencieuses, performantes et adaptées aux usages réels du bâtiment, en neuf comme en rénovation, depuis les premières études jusqu&apos;à la réception technique.
            </Para>
          </div>
        </div>
      </section>
    </>
  );
}
