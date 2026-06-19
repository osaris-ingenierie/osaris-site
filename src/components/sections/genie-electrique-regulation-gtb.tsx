import { BlurFade } from "@/components/ui/blur-fade";
import { NumberedCardGrid } from "@/components/ui/numbered-card-grid";
import { ResponsiveTable } from "@/components/ui/responsive-table";

/* ─── Données tableau ──────────────────────────────────────────────── */

const domaineRows = [
  ["Alimentation électrique des équipements CVC", "Chaufferies, sous-stations, CTA, pompes, groupes froids, PAC", "Puissance disponible, protections, câblage, sectionnement, sécurité, maintenance"],
  ["Armoires électriques techniques", "Chaufferies, ventilation, production ECS, locaux techniques", "Commande, protections, relayage, voyants, marche/arrêt, reports défauts, lisibilité"],
  ["Régulation chauffage", "Chaufferies, sous-stations, réseaux secondaires, radiateurs, planchers chauffants", "Loi d'eau, cascade chaudières, vannes motorisées, sondes, circulateurs, optimisation énergétique"],
  ["Régulation ventilation", "CTA, caissons, VMC, extraction, soufflage d'air neuf", "Horaires, variation de vitesse, pression constante, CO₂, hygrométrie, qualité d'air"],
  ["Régulation climatisation", "DRV/VRV, eau glacée, PAC, ventilo-convecteurs, CTA", "Consignes, régulation par zone, conflits chaud/froid, reports défauts, confort"],
  ["GTB", "Bâtiments tertiaires, ERP, copropriétés, patrimoine multi-sites", "Supervision, alarmes, comptage, historisation, pilotage énergétique, exploitation"],
  ["GTC", "Installations techniques ciblées, chaufferies, sous-stations, ventilation", "Commande centralisée, synoptiques, états, défauts, horaires, suivi technique"],
  ["Comptage et suivi énergétique", "Chauffage, ECS, eau, électricité, ventilation, climatisation", "Sous-comptage, télérelève, analyse des consommations, indicateurs d'exploitation"],
  ["Automatismes et reports d'alarme", "Locaux techniques, équipements CVC, pompes, sécurité", "Chaînes de sécurité, défauts, contacts secs, priorités, continuité de service"],
  ["Études d'exécution électriques CVC", "Entreprises CVC, électriciens, automaticiens", "Plans, schémas, listes de points, synoptiques, fiches techniques, visas"],
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

export function GenieElectriqueRegulationGtb() {
  return (
    <>
      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Électricité & supervision" title="Génie électrique, régulation, GTB & GTC" />
          <Para>
            Le génie électrique appliqué aux installations techniques du bâtiment permet d&apos;alimenter, protéger, commander et superviser les équipements CVC, plomberie, production thermique, ventilation, climatisation et eau chaude sanitaire.
          </Para>
          <Para>
            La régulation assure l&apos;adaptation des équipements aux besoins réels du bâtiment : température, occupation, horaires, qualité d&apos;air, pression, débit, sécurité et performance énergétique. La GTB et la GTC permettent de centraliser les informations, de suivre les alarmes, de piloter les installations, d&apos;analyser les consommations et d&apos;améliorer l&apos;exploitation technique du bâtiment.
          </Para>
          <Para>
            OSARIS Ingénierie accompagne les maîtres d&apos;ouvrage, architectes, syndics, exploitants et entreprises dans les études de génie électrique technique, de régulation, de GTB et de GTC, en bâtiment neuf comme en rénovation, en phase conception comme en phase d&apos;exécution.
          </Para>
        </div>
      </section>

      {/* Tableau des domaines */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Les principaux domaines d&apos;intervention</SubHeading>
          <Para>
            Les études couvrent l&apos;alimentation électrique des équipements techniques, la régulation des lots CVC, la supervision GTB/GTC, le comptage et les automatismes. Le tableau ci-dessous présente les principaux domaines et leurs enjeux.
          </Para>
          <ResponsiveTable
            caption="Domaines d'intervention génie électrique, régulation & GTB/GTC"
            headers={["Domaine", "Applications courantes", "Enjeux techniques principaux"]}
            rows={domaineRows}
            note="Ce classement est indicatif. Chaque projet doit être analysé selon le type de bâtiment, les équipements techniques à piloter, les objectifs d'exploitation, les exigences de sécurité, le niveau de supervision attendu, les protocoles disponibles et les contraintes de maintenance."
          />
        </div>
      </section>

      {/* Neuf / Rénovation */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Intervention en bâtiment neuf</SubHeading>
          <Para>
            En construction neuve, le génie électrique technique et la régulation doivent être intégrés dès les premières phases de conception. Les choix d&apos;alimentation, d&apos;implantation d&apos;armoires, de câblage, de supervision, de capteurs, d&apos;automates, de protocoles et de comptage conditionnent directement la qualité d&apos;exploitation future.
          </Para>
          <NumberedCardGrid
            eyebrow="En neuf, OSARIS Ingénierie intervient notamment sur"
            items={[
              "L'analyse des équipements techniques à alimenter",
              "La définition des besoins électriques CVC et des puissances nécessaires",
              "L'implantation des armoires techniques",
              "La définition des principes de commande et des chaînes de sécurité",
              "La définition des reports d'alarme",
              "L'élaboration des synoptiques de régulation",
              "La définition des listes de points GTB / GTC",
              "L'intégration des compteurs énergétiques",
              "La coordination avec les lots électricité CFO/CFA, CVC, plomberie et GTB",
              "Les schémas de principe, plans techniques, CCTP et DPGF",
            ]}
          />
          <Para>
            Une bonne coordination entre CVC, électricité, automatisme et GTB permet d&apos;éviter les oublis de câblage, les interfaces mal définies, les équipements non supervisés ou les difficultés de mise en service.
          </Para>
          <div className="mt-8">
            <SubHeading>Intervention en rénovation</SubHeading>
            <Para>
              En rénovation, l&apos;étude doit s&apos;adapter aux équipements existants, aux armoires en place, aux automatismes existants, aux câbles disponibles, aux protocoles déjà utilisés et au niveau de supervision souhaité. Les contraintes fréquentes incluent des armoires anciennes, des schémas incomplets, l&apos;absence de repérage, des automates obsolètes, des sondes défaillantes, une régulation peu performante, l&apos;absence de télégestion ou un comptage incomplet.
            </Para>
            <NumberedCardGrid
              eyebrow="Les études de rénovation peuvent comprendre"
              items={[
                "Le diagnostic des armoires techniques et le relevé des équipements alimentés",
                "L'analyse des automatismes existants",
                "La vérification des protections électriques et des chaînes de sécurité",
                "La vérification des sondes et actionneurs",
                "L'analyse des défauts de régulation",
                "L'identification des points à superviser",
                "La définition d'une nouvelle architecture GTB / GTC",
                "Le remplacement ou l'adaptation des régulateurs et l'ajout de comptages",
                "L'amélioration des reports d'alarme",
                "Le phasage des travaux en site occupé et l'assistance à la mise en service",
              ]}
            />
            <Para>
              En rénovation, l&apos;objectif est de fiabiliser les installations existantes, d&apos;améliorer leur pilotage, de réduire les dérives énergétiques et de faciliter l&apos;exploitation.
            </Para>
          </div>
        </div>
      </section>

      {/* Génie électrique technique */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Génie électrique appliqué aux équipements techniques</SubHeading>
          <Para>
            Les installations électriques techniques doivent être lisibles, maintenables et cohérentes avec le fonctionnement attendu des équipements.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Alimentations électriques des équipements CVC",
              "Armoires électriques de chaufferie, CTA, ventilation et pompes",
              "Coffrets de commande et protections électriques",
              "Sectionnements de proximité et arrêts d'urgence si nécessaires",
              "Relayage, voyants de fonctionnement et défauts",
              "Contacts secs et reports d'alarme",
              "Câblage des sondes et actionneurs",
              "Repérage et accessibilité maintenance",
            ]}
          />
        </div>
      </section>

      {/* CFO / CFA */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>CFO, CFA et interfaces techniques</SubHeading>
          <Para>
            OSARIS Ingénierie ne se limite pas à la puissance électrique : le bureau d&apos;études définit aussi les besoins fonctionnels des équipements techniques afin que le lot électricité puisse prévoir les alimentations, attentes et interfaces nécessaires.
          </Para>
          <NumberedCardGrid
            eyebrow="Interfaces avec les lots électriques"
            items={[
              "CFO pour les alimentations de puissance",
              "CFA pour les commandes, reports, communication et supervision",
              "Alimentations des armoires, pompes, CTA, groupes froids, PAC et ventilateurs",
              "Liaison avec les automates et câbles de sondes",
              "Bus de communication et reports défauts",
              "Comptage et coordination électricien / automaticien / entreprise CVC",
            ]}
          />
        </div>
      </section>

      {/* Régulation chauffage */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Régulation chauffage</SubHeading>
          <Para>
            Une régulation chauffage bien conçue permet de stabiliser le fonctionnement, d&apos;améliorer le confort et de réduire les consommations.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Loi d'eau et sonde extérieure",
              "Sondes départ / retour",
              "Cascade chaudières",
              "Vannes 2 voies ou 3 voies",
              "Circulateurs à variation de vitesse et pompes doubles",
              "Priorité ECS et régulation par zone",
              "Optimisation des régimes d'eau et limitation des surchauffes",
              "Confort d'hiver et économie d'énergie",
            ]}
          />
        </div>
      </section>

      {/* Régulation ventilation */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Régulation ventilation et qualité d&apos;air</SubHeading>
          <Para>
            Une bonne régulation de ventilation permet d&apos;adapter les débits à l&apos;occupation réelle, de réduire les consommations électriques et de maintenir une qualité d&apos;air correcte.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Programmation horaire et variation de vitesse",
              "Pression constante et débit constant",
              "Sondes CO₂, d'humidité et de température",
              "Pressostats filtres et alarmes encrassement filtre",
              "Registres motorisés",
              "Batteries chaudes ou froides et récupération d'énergie",
              "Reports défauts et lien avec la qualité d'air intérieur",
            ]}
          />
        </div>
      </section>

      {/* Régulation climatisation */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Régulation climatisation et rafraîchissement</SubHeading>
          <Para>
            La régulation doit éviter les fonctionnements simultanés chaud/froid, les surconsommations et les inconforts liés au sur-refroidissement.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Régulation par zone et thermostats locaux",
              "Pilotage DRV / VRV et groupes d'eau glacée",
              "Pompes à chaleur réversibles et ventilo-convecteurs",
              "CTA avec batterie froide",
              "Consignes été / hiver et limitation des températures",
              "Gestion des conflits chauffage / climatisation",
              "Reports défauts, suivi des températures et interface GTB / GTC",
            ]}
          />
        </div>
      </section>

      {/* GTB / GTC différence */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>GTB et GTC : différence et complémentarité</SubHeading>
          <Para>
            La GTC permet généralement de commander, visualiser et suivre des installations techniques ciblées. La GTB offre une vision plus globale du bâtiment, avec supervision multi-lots, alarmes, historiques, comptages, scénarios horaires et suivi énergétique. Dans la pratique, les deux approches peuvent être complémentaires selon la taille du bâtiment et les besoins de l&apos;exploitant.
          </Para>
          <NumberedCardGrid
            eyebrow="Fonctions possibles"
            items={[
              "Supervision des chaufferies, sous-stations et CTA",
              "Supervision des pompes, productions ECS et groupes froids",
              "Suivi des températures et des alarmes",
              "Gestion horaire",
              "Comptage énergétique et historiques",
              "Accès distant et optimisation de l'exploitation",
            ]}
          />
        </div>
      </section>

      {/* Architecture / liste de points */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Architecture GTB/GTC et liste de points</SubHeading>
          <Para>
            La réussite d&apos;une GTB ou d&apos;une GTC dépend de la qualité de la définition des points à superviser : points de mesure, de commande, d&apos;état, d&apos;alarme, consignes, compteurs, historiques, priorités, synoptiques, protocoles de communication, interfaces entre équipements, compatibilité des automates et besoins de l&apos;exploitant.
          </Para>
          <NumberedCardGrid
            eyebrow="Exemples de points"
            items={[
              "Température départ / retour chauffage et température extérieure",
              "État et défaut chaudière",
              "Marche et défaut pompe, position vanne",
              "Température ECS",
              "Défaut CTA et encrassement filtre",
              "CO₂ salle de réunion",
              "Consommation énergie et consommation eau",
              "Alarme pression basse et alarme température haute",
            ]}
          />
        </div>
      </section>

      {/* Comptage */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Comptage, suivi énergétique et exploitation</SubHeading>
          <Para>
            Le comptage permet d&apos;objectiver les consommations et d&apos;identifier les anomalies : dérive de température, fonctionnement hors horaires, surconsommation pompe, défaut d&apos;équilibrage ou mauvaise régulation.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Compteurs d'énergie thermique, électriques, d'eau et de gaz",
              "Sous-comptage par usage",
              "Télérelève et historiques",
              "Indicateurs de performance",
              "Suivi des dérives et aide à l'exploitation",
              "Comparaison avant / après travaux",
            ]}
          />
        </div>
      </section>

      {/* Alarmes */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Alarmes, sécurités et continuité de service</SubHeading>
          <Para>
            Une alarme utile doit être claire, hiérarchisée, exploitable et transmise aux bonnes personnes. La distinction entre alarmes critiques et non critiques est essentielle à la continuité de service.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités"
            items={[
              "Défaut chaudière, brûleur et pompe",
              "Pression basse et température haute",
              "Défaut CTA, ventilateur et encrassement filtre",
              "Défaut groupe froid et production ECS",
              "Défaut communication et coupure électrique",
              "Reports d'alarme et contacts secs",
              "Hiérarchisation des alarmes et continuité de service",
            ]}
          />
        </div>
      </section>

      {/* Exécution */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Études d&apos;exécution pour les entreprises</SubHeading>
          <Para>
            OSARIS Ingénierie intervient à la fois pour les maîtres d&apos;ouvrage en conception et pour les entreprises en exécution.
          </Para>
          <NumberedCardGrid
            eyebrow="Missions possibles en exécution"
            items={[
              "Plans d'exécution électriques CVC et schémas de principe",
              "Synoptiques de régulation et listes de points GTB / GTC",
              "Analyse fonctionnelle",
              "Définition des entrées / sorties automates",
              "Plans d'implantation des sondes et schémas de câblage fonctionnels",
              "Coordination avec l'électricien, l'automaticien et le fournisseur GTB",
              "Fiches techniques matériel et réponses aux observations de visa",
              "Adaptation des plans selon contraintes chantier et préparation du DOE",
            ]}
          />
        </div>
      </section>

      {/* Mise au point / réception + DOE */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Assistance chantier, mise au point et réception</SubHeading>
          <Para>
            La mise au point est essentielle : une installation correctement câblée mais mal paramétrée peut générer inconfort, surconsommations et défauts d&apos;exploitation.
          </Para>
          <NumberedCardGrid
            eyebrow="Contrôles possibles"
            items={[
              "Conformité des armoires et accessibilité des équipements",
              "Repérage des câbles et cohérence des protections",
              "Positionnement des sondes et fonctionnement des actionneurs",
              "Test des reports d'alarme, commandes marche/arrêt et sécurités",
              "Vérification des consignes",
              "Essais de cascade chaudières, de variation de vitesse et des horaires",
              "Vérification des synoptiques GTB et des remontées de points",
              "Essais de communication et validation avec l'exploitant",
            ]}
          />
          <div className="mt-8">
            <SubHeading>DOE et exploitation</SubHeading>
            <Para>
              Un DOE complet facilite l&apos;exploitation, les dépannages, les futures modifications et la continuité de service.
            </Para>
            <NumberedCardGrid
              eyebrow="Le DOE peut comprendre"
              items={[
                "Plans conformes à l'exécution et schémas électriques",
                "Schémas de régulation et synoptiques GTB / GTC",
                "Analyse fonctionnelle et liste de points",
                "Fiches techniques, notices d'exploitation et de maintenance",
                "Paramètres de régulation, consignes et horaires",
                "Liste des alarmes et PV d'essais",
                "Sauvegarde programme automate si disponible et informations de communication",
                "Repérage des armoires et équipements",
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
              "Génie électrique appliqué aux équipements CVC",
              "Armoires électriques techniques",
              "Régulation chaufferie, sous-station, ventilation et climatisation",
              "Régulation production ECS",
              "GTB et GTC",
              "Listes de points et synoptiques de régulation",
              "Comptage énergétique et télégestion",
              "Reports d'alarme",
              "Études d'exécution électriques CVC et coordination CFO/CFA",
              "Assistance aux entreprises, réception et DOE",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Notre approche</SubHeading>
            <Para>
              Une bonne installation électrique, de régulation ou de GTB/GTC doit être correctement définie, adaptée aux usages réels, lisible pour l&apos;exploitant, compatible avec les équipements techniques, sécurisée, maintenable, évolutive, documentée, testée et vérifiable.
            </Para>
            <Para>
              Notre objectif est d&apos;accompagner les projets de construction neuve et de rénovation avec une approche technique, fonctionnelle et exploitable, afin de fiabiliser les installations, améliorer le confort, optimiser les consommations et faciliter le travail des exploitants.
            </Para>
          </div>
        </div>
      </section>
    </>
  );
}
