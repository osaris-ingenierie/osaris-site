import { BlurFade } from "@/components/ui/blur-fade";
import { NumberedCardGrid } from "@/components/ui/numbered-card-grid";
import { ResponsiveTable } from "@/components/ui/responsive-table";

/* ─── Données tableau ──────────────────────────────────────────────── */

const domaineRows = [
  ["Calculs de déperditions", "Logements, tertiaire, rénovation, remplacement d'émetteurs", "Puissance de chauffage, dimensionnement des émetteurs, température extérieure de base, parois, ventilation"],
  ["Thermique réglementaire", "Bâtiments neufs, extensions, rénovations selon contexte", "Vérification des exigences applicables, cohérence enveloppe/systèmes, justificatifs réglementaires"],
  ["RT Existant", "Rénovation de bâtiments existants", "Analyse des exigences applicables, amélioration de l'enveloppe, systèmes performants, cohérence globale"],
  ["RE2020", "Construction neuve", "Performance énergétique, confort d'été, sobriété, choix techniques cohérents"],
  ["Simulation thermique dynamique STD", "Bureaux, logements, bâtiments performants, confort d'été", "Températures intérieures, apports solaires, inertie, protections solaires, scénarios d'occupation"],
  ["Étude des ponts thermiques", "Rénovation, isolation intérieure/extérieure, bâtiments neufs", "Linéiques, jonctions, pertes thermiques, risques de condensation, cohérence de l'isolation"],
  ["Analyse de l'enveloppe", "Murs, planchers, toitures, menuiseries", "Coefficients U, isolation, vitrages, étanchéité à l'air, confort thermique"],
  ["Performance des systèmes", "Chauffage, ECS, ventilation, climatisation", "Rendements, régulation, comptage, pertes, optimisation des consommations"],
  ["Audit et amélioration énergétique", "Copropriétés, tertiaire, patrimoine existant", "Identification des gisements d'économie, scénarios de travaux, priorisation technique"],
  ["Assistance aux entreprises", "Phase exécution, notes de calcul, visas", "Justificatifs, dimensionnements, plans, réponses aux observations, DOE"],
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

export function ThermiquePerformanceEnergetique() {
  return (
    <>
      {/* Intro */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Thermique & énergie" title="Thermique du bâtiment & performance énergétique" />
          <Para>
            La thermique du bâtiment permet de comprendre, quantifier et optimiser les échanges de chaleur entre un bâtiment et son environnement. Elle intervient dès la conception d&apos;un projet neuf, mais également lors d&apos;une rénovation, d&apos;un remplacement d&apos;équipements ou d&apos;une amélioration énergétique.
          </Para>
          <Para>
            La performance énergétique repose sur une approche globale : qualité de l&apos;enveloppe, isolation, ponts thermiques, ventilation, apports solaires, inertie, systèmes de chauffage, production d&apos;eau chaude sanitaire, climatisation, régulation et usages du bâtiment. Thermique du bâtiment et performance énergétique sont deux sujets complémentaires : la première analyse les besoins et les déperditions, la seconde vise à réduire les consommations et à améliorer les rendements.
          </Para>
          <Para>
            OSARIS Ingénierie accompagne les maîtres d&apos;ouvrage, architectes, syndics, exploitants et entreprises dans les études thermiques, les calculs de déperditions, les analyses réglementaires, les simulations énergétiques et les études d&apos;amélioration de la performance des bâtiments, en phase conception comme en phase d&apos;exécution.
          </Para>
        </div>
      </section>

      {/* Tableau des domaines */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Les principaux domaines d&apos;intervention</SubHeading>
          <Para>
            Les études thermiques et énergétiques couvrent un large éventail de missions, du calcul de déperditions à l&apos;audit énergétique. Le tableau ci-dessous présente les principaux domaines et leurs enjeux techniques.
          </Para>
          <ResponsiveTable
            caption="Domaines d'intervention thermique & énergie"
            headers={["Domaine", "Applications courantes", "Enjeux techniques principaux"]}
            rows={domaineRows}
            note="Ce classement est indicatif. Chaque projet doit être analysé selon le type de bâtiment, son usage, son état existant, les objectifs du maître d'ouvrage, les exigences réglementaires applicables, les systèmes techniques en place et les contraintes économiques du projet."
          />
        </div>
      </section>

      {/* Neuf / Rénovation */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Intervention en bâtiment neuf</SubHeading>
          <Para>
            En construction neuve, la thermique doit être intégrée dès les premières phases de conception. Les choix d&apos;orientation, d&apos;isolation, de surfaces vitrées, de protections solaires, de ventilation, de chauffage, d&apos;ECS et de rafraîchissement conditionnent directement la performance future du bâtiment.
          </Para>
          <NumberedCardGrid
            eyebrow="En neuf, OSARIS Ingénierie intervient notamment sur"
            items={[
              "L'analyse des besoins thermiques",
              "L'accompagnement à la conception bioclimatique",
              "L'étude de l'enveloppe et des parois opaques et vitrées",
              "La prise en compte des apports solaires",
              "Les calculs thermiques réglementaires si intégrés à la mission",
              "La vérification de la cohérence enveloppe / systèmes",
              "L'analyse du confort d'été et la STD si nécessaire",
              "Le dimensionnement des puissances de chauffage et de rafraîchissement",
              "L'accompagnement au choix des systèmes",
              "Les schémas de principe, pièces écrites CCTP / DPGF et l'assistance en conception",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Intervention en rénovation</SubHeading>
            <Para>
              En rénovation, la performance énergétique doit s&apos;appuyer sur un diagnostic réaliste de l&apos;existant. Les bâtiments anciens présentent souvent des parois mal isolées, des ponts thermiques, des menuiseries anciennes, une ventilation insuffisante, de l&apos;humidité, des systèmes de chauffage anciens, des déséquilibres hydrauliques, une régulation absente ou mal paramétrée, des consommations élevées et un inconfort d&apos;hiver ou d&apos;été.
            </Para>
            <NumberedCardGrid
              eyebrow="Les études de rénovation peuvent comprendre"
              items={[
                "Le diagnostic thermique de l'existant",
                "L'analyse des parois et menuiseries",
                "L'estimation ou le calcul des déperditions",
                "L'identification des ponts thermiques",
                "L'analyse des consommations et la vérification des puissances installées",
                "L'analyse des émetteurs existants",
                "L'étude de scénarios de rénovation et l'amélioration de l'isolation",
                "Le remplacement ou l'optimisation des systèmes et de la ventilation",
                "L'analyse du confort d'été et la priorisation des travaux",
                "L'assistance à la consultation des entreprises et à la réception",
              ]}
            />
            <Para>
              En rénovation, l&apos;objectif n&apos;est pas seulement de réduire les consommations, mais aussi d&apos;améliorer le confort, la qualité d&apos;air, la maintenabilité et la cohérence technique du bâtiment.
            </Para>
          </div>
        </div>
      </section>

      {/* Calculs de déperditions */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Calculs de déperditions thermiques</SubHeading>
          <Para>
            Les calculs de déperditions permettent de déterminer les puissances nécessaires pour maintenir les températures intérieures de confort dans les conditions extérieures de référence. Lorsque la mission le nécessite, ces calculs peuvent être réalisés selon la NF EN 12831.
          </Para>
          <NumberedCardGrid
            eyebrow="Ces calculs sont nécessaires pour"
            items={[
              "Dimensionner les chaudières, pompes à chaleur ou sous-stations",
              "Dimensionner radiateurs, convecteurs, planchers chauffants ou batteries",
              "Vérifier les puissances existantes et éviter le surdimensionnement",
              "Identifier les locaux les plus déperditifs",
              "Préparer une rénovation énergétique",
              "Adapter les puissances après isolation",
            ]}
          />
          <div className="mt-6">
            <NumberedCardGrid
              eyebrow="OSARIS Ingénierie peut calculer les déperditions"
              items={[
                "Par bâtiment et par zone",
                "Par logement et par typologie de logement",
                "Pièce par pièce",
                "Avant et après travaux",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Thermique réglementaire */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Thermique réglementaire et exigences applicables</SubHeading>
          <Para>
            Les exigences réglementaires varient selon le contexte : bâtiment neuf, extension, rénovation, changement d&apos;usage, bâtiment tertiaire, logement collectif, maison individuelle, importance des travaux, date de dépôt du permis ou contexte administratif.
          </Para>
          <NumberedCardGrid
            eyebrow="Grandes familles d'études"
            items={[
              "RE2020 pour les bâtiments neufs concernés",
              "RT Existant pour les rénovations concernées",
              "Exigences par élément selon les travaux",
              "Exigences globales selon le type de projet",
              "Attestations ou justificatifs selon la mission",
            ]}
          />
          <Para>
            Les références et seuils réglementaires doivent être adaptés au contexte du projet et vérifiés selon les textes en vigueur. OSARIS Ingénierie accompagne le projet dans la compréhension et l&apos;application des exigences thermiques adaptées à chaque situation.
          </Para>
        </div>
      </section>

      {/* STD */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Simulation thermique dynamique (STD)</SubHeading>
          <Para>
            La simulation thermique dynamique permet d&apos;analyser le comportement thermique d&apos;un bâtiment heure par heure, en tenant compte de la météo, de l&apos;orientation, des apports solaires, de l&apos;inertie, des protections solaires, de l&apos;occupation, des apports internes, de la ventilation, des scénarios d&apos;usage et des systèmes techniques.
          </Para>
          <NumberedCardGrid
            eyebrow="La STD est particulièrement utile pour"
            items={[
              "Analyser le confort d'été et limiter les surchauffes",
              "Comparer plusieurs scénarios",
              "Étudier l'impact des protections solaires",
              "Optimiser la ventilation nocturne",
              "Vérifier l'intérêt d'une solution de rafraîchissement",
              "Accompagner la conception de bâtiments performants",
            ]}
          />
        </div>
      </section>

      {/* Enveloppe */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Enveloppe, isolation et ponts thermiques</SubHeading>
          <Para>
            Une rénovation énergétique performante nécessite une cohérence entre l&apos;isolation, la ventilation et les systèmes de chauffage. Une isolation mal conçue peut générer des désordres : condensation, inconfort, ponts thermiques résiduels, humidité ou surchauffe estivale.
          </Para>
          <NumberedCardGrid
            eyebrow="Points traités sur l'enveloppe"
            items={[
              "Murs extérieurs, planchers bas, toitures et combles",
              "Menuiseries et vitrages",
              "Protections solaires",
              "Isolation intérieure et extérieure",
              "Étanchéité à l'air",
              "Ponts thermiques et risques de condensation",
              "Confort de paroi froide",
            ]}
          />
        </div>
      </section>

      {/* Performance des systèmes */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Performance des systèmes techniques</SubHeading>
          <Para>
            La performance énergétique dépend aussi des systèmes. Le remplacement d&apos;un générateur seul ne suffit pas toujours : la performance réelle dépend de la distribution, de la régulation, des températures d&apos;eau, des pertes réseaux, de l&apos;équilibrage et des usages.
          </Para>
          <NumberedCardGrid
            eyebrow="Systèmes analysés"
            items={[
              "Chauffage et eau chaude sanitaire",
              "Ventilation et climatisation",
              "Régulation et comptage",
              "Équilibrage et calorifuge",
              "Circulateurs et pompes",
              "Récupération d'énergie et télégestion",
            ]}
          />
        </div>
      </section>

      {/* Confort */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Confort d&apos;hiver et confort d&apos;été</SubHeading>
          <Para>
            L&apos;amélioration énergétique doit être compatible avec le confort réel des occupants, en hiver comme en été.
          </Para>
          <NumberedCardGrid
            eyebrow="Facteurs de confort thermique"
            items={[
              "Température intérieure et température opérative",
              "Parois froides et courants d'air",
              "Vitesse d'air",
              "Apports solaires et inertie",
              "Protections solaires et ventilation nocturne",
              "Surchauffes estivales et rafraîchissement éventuel",
            ]}
          />
        </div>
      </section>

      {/* Scénarios */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Analyse énergétique et scénarios de travaux</SubHeading>
          <Para>
            OSARIS Ingénierie peut comparer plusieurs actions d&apos;amélioration énergétique afin d&apos;aider le maître d&apos;ouvrage à décider.
          </Para>
          <NumberedCardGrid
            eyebrow="Actions comparées"
            items={[
              "Isolation des murs, toitures et planchers bas",
              "Remplacement des menuiseries",
              "Amélioration de la ventilation",
              "Remplacement du chauffage et optimisation de l'ECS",
              "Régulation, équilibrage et calorifugeage",
              "Comptage et pilotage énergétique",
            ]}
          />
          <div className="mt-6">
            <NumberedCardGrid
              eyebrow="Objectifs de l'analyse"
              items={[
                "Identifier les travaux prioritaires",
                "Évaluer la cohérence technique",
                "Éviter les travaux isolés peu efficaces",
                "Adapter les solutions au budget",
                "Préparer une consultation d'entreprises",
                "Faciliter la prise de décision du maître d'ouvrage",
              ]}
            />
          </div>
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
              "Notes de calcul de déperditions et calculs pièce par pièce",
              "Vérification des puissances installées",
              "Dimensionnement des émetteurs (radiateurs, convecteurs, batteries)",
              "Vérification des puissances de pompes à chaleur ou chaudières",
              "Calculs de débits chauffage et notes justificatives thermiques",
              "Plans d'exécution CVC et schémas de principe",
              "Réponses aux observations de visa",
              "Adaptation des études selon contraintes chantier et assistance au DOE",
            ]}
          />
        </div>
      </section>

      {/* Réception + DOE */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Assistance chantier, essais et réception</SubHeading>
          <Para>
            La réception doit permettre de vérifier que les travaux réalisés sont cohérents avec les objectifs thermiques et énergétiques du projet.
          </Para>
          <NumberedCardGrid
            eyebrow="Contrôles possibles"
            items={[
              "Cohérence des matériaux isolants et épaisseurs d'isolation",
              "Continuité de l'isolation et traitement des ponts thermiques",
              "Conformité des émetteurs et puissances installées",
              "Réglages de régulation et équilibrage des réseaux",
              "Calorifugeage et températures de départ et retour",
              "Accessibilité maintenance et documents de réception",
            ]}
          />
          <div className="mt-8">
            <SubHeading>DOE et exploitation</SubHeading>
            <Para>
              Un DOE complet facilite l&apos;exploitation, les futures rénovations, les réglages et le suivi énergétique.
            </Para>
            <NumberedCardGrid
              eyebrow="Le DOE peut comprendre"
              items={[
                "Plans conformes à l'exécution",
                "Fiches techniques isolants, menuiseries et équipements",
                "Notes de calcul et réglages de régulation",
                "Rapports d'essais et consignes d'exploitation",
                "Synoptiques et données utiles à l'exploitant",
                "Recommandations de maintenance",
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
              "Thermique du bâtiment et performance énergétique",
              "Calculs de déperditions et calculs pièce par pièce",
              "NF EN 12831 si applicable",
              "Étude thermique réglementaire (RE2020, RT Existant si applicable)",
              "Simulation thermique dynamique et confort d'été",
              "Analyse de l'enveloppe et ponts thermiques",
              "Scénarios de rénovation énergétique",
              "Dimensionnement des émetteurs, optimisation chauffage et ECS",
              "Ventilation et qualité d'air",
              "Assistance aux entreprises, études d'exécution CVC et DOE thermique",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Notre approche</SubHeading>
            <Para>
              Une bonne étude thermique doit être adaptée au bâtiment, basée sur les usages réels, cohérente avec les systèmes techniques, compatible avec les contraintes architecturales, exploitable par les entreprises, compréhensible par le maître d&apos;ouvrage, utile pour arbitrer les travaux, documentée et vérifiable.
            </Para>
            <Para>
              Notre objectif est d&apos;accompagner les projets de construction neuve et de rénovation avec une approche thermique globale, pragmatique et exploitable, afin d&apos;améliorer le confort, réduire les consommations et sécuriser les choix techniques.
            </Para>
          </div>
        </div>
      </section>
    </>
  );
}
