import Image from "next/image";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberedCardGrid } from "@/components/ui/numbered-card-grid";
import { ResponsiveTable } from "@/components/ui/responsive-table";

/* ─── Données tableaux ─────────────────────────────────────────────── */

const chaufferieRows = [
  ["Petite production gaz", "≤ 70 kW", "Maison de ville, petit tertiaire, petit ERP, local commun, petit immeuble", "Choix du générateur, évacuation des fumées, amenée d'air, condensats, expansion, remplissage, sécurité gaz, accessibilité maintenance"],
  ["Chaufferie collective de petite puissance", "> 70 kW à 400 kW", "Petite copropriété, immeuble collectif, école, bureaux, équipement public de taille modérée", "Local chaufferie, ventilation haute/basse, alimentation gaz, fumisterie, sécurité, hydraulique, équilibrage, régulation, DOE"],
  ["Chaufferie collective de moyenne puissance", "> 400 kW à 1 MW", "Immeuble important, groupe scolaire, bâtiment tertiaire, résidence collective", "Cascade chaudières, maintien de pression, traitement d'eau, réseaux multiples, pertes de charge, comptage, régulation avancée, essais et mise au point"],
  ["Grande chaufferie", "> 1 MW à 2 MW", "Ensemble immobilier, site tertiaire important, équipement public, patrimoine multi-bâtiments", "Analyse réglementaire renforcée, ventilation, fumisterie, acoustique, sécurité gaz, continuité de service, télégestion, exploitation"],
  ["Chaufferie de forte puissance", "> 2 MW à 5 MW", "Site complexe, grand ensemble immobilier, bâtiment public important, patrimoine avec besoins élevés", "Contraintes d'implantation, exploitation continue, redondance, supervision, maintenance lourde, analyse réglementaire spécifique éventuelle"],
  ["Très grande chaufferie / centrale thermique", "> 5 MW", "Site industriel, grand réseau interne, production centralisée importante", "Études spécifiques, contraintes réglementaires élevées, analyse environnementale, sécurité renforcée, exploitation spécialisée"],
];

const sousStationRows = [
  ["Petite sous-station", "≤ 100 kW", "Petit tertiaire, petit immeuble, local commun, commerce", "Compacité, échangeur, comptage, régulation simple, accessibilité maintenance"],
  ["Sous-station collective de petite puissance", "100 à 400 kW", "Petite copropriété, école, bureaux, petit ERP", "Dimensionnement échangeur, régulation chauffage, comptage, maintien de pression, équilibrage secondaire"],
  ["Sous-station collective de moyenne puissance", "400 kW à 1 MW", "Immeuble collectif, résidence, bâtiment tertiaire, équipement public", "Réseaux secondaires multiples, ECS éventuelle, circulateurs doubles, régulation avancée, pertes de charge, DOE"],
  ["Grande sous-station", "1 à 2 MW", "Ensemble immobilier, grand bâtiment tertiaire, groupe scolaire, patrimoine multi-bâtiments", "Continuité de service, échangeurs multiples, comptage, télégestion, équilibrage, accessibilité, exploitation"],
  ["Sous-station de forte puissance", "> 2 MW", "Site complexe, ensemble immobilier important, réseau secondaire interne", "Redondance, supervision, maintien de pression, découplage hydraulique, phasage, exploitation spécialisée"],
];

/* ─── Sous-composants ──────────────────────────────────────────────── */

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
  return (
    <h3 className="font-display font-bold text-xl text-night-50 leading-snug mb-3 mt-2">{children}</h3>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-night-200 text-base leading-[1.8] max-w-3xl mb-4">{children}</p>;
}

function GuideImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <BlurFade inView duration={0.5}>
      <figure className="my-6">
        <div className="overflow-hidden rounded-xl border border-night-700 shadow-card">
          <Image
            src={src}
            alt={alt}
            width={1280}
            height={900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full h-auto"
          />
        </div>
        <figcaption className="text-night-300 text-xs leading-relaxed mt-3 italic">{caption}</figcaption>
      </figure>
    </BlurFade>
  );
}

function KeywordTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {tags.map((t) => (
        <span key={t} className="font-mono text-[0.6rem] tracking-wider uppercase px-2 py-1 bg-night-850 text-night-300 border border-night-700 rounded">
          {t}
        </span>
      ))}
    </div>
  );
}

/* ─── Composant principal ──────────────────────────────────────────── */

export function ChauffageProductionThermique() {
  return (
    <>
      {/* ── Cartes de navigation des deux blocs ── */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Production de chaleur" title="Chaufferies gaz et sous-stations de chauffage urbain" />
          <Para>
            OSARIS Ingénierie conçoit et accompagne deux grandes familles de production de chaleur, traitées ici comme deux sujets distincts : les chaufferies gaz, qui produisent la chaleur par combustion sur site, et les sous-stations raccordées aux réseaux de chauffage urbain, qui transfèrent l&apos;énergie d&apos;un réseau de chaleur vers le bâtiment au moyen d&apos;échangeurs.
          </Para>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <BlurFade inView duration={0.45}>
              <div className="h-full flex flex-col bg-night-800 border border-night-700 rounded-xl p-6 shadow-card">
                <h3 className="font-display font-bold text-lg text-night-50 mb-2">Chaufferies gaz &amp; production thermique</h3>
                <p className="text-night-200 text-sm leading-relaxed flex-1">
                  Conception, hydraulique, sécurité gaz, fumisterie, régulation et exécution des chaufferies gaz, en bâtiment neuf comme en rénovation.
                </p>
                <KeywordTags tags={["Chaufferie gaz", "Production thermique", "Chauffage collectif", "Hydraulique chauffage"]} />
              </div>
            </BlurFade>
            <BlurFade inView duration={0.45} delay={0.08}>
              <div className="h-full flex flex-col bg-night-800 border border-night-700 rounded-xl p-6 shadow-card">
                <h3 className="font-display font-bold text-lg text-night-50 mb-2">Sous-stations de chauffage urbain</h3>
                <p className="text-night-200 text-sm leading-relaxed flex-1">
                  Échangeurs, hydraulique secondaire, comptage, régulation et interface concessionnaire pour le raccordement aux réseaux de chaleur.
                </p>
                <KeywordTags tags={["Sous-station chauffage urbain", "Réseau de chaleur", "Échangeur de chaleur", "Raccordement réseau de chaleur"]} />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BLOC A — CHAUFFERIES GAZ ══════════════════════ */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Bloc A — Chaufferies gaz" title="Chaufferies gaz, production thermique & hydraulique technique" />
          <Para>
            Une chaufferie constitue le cœur énergétique d&apos;un bâtiment. Elle regroupe les équipements permettant de produire, distribuer, réguler et sécuriser la chaleur nécessaire au chauffage des locaux et, selon les configurations, à la production d&apos;eau chaude sanitaire.
          </Para>
          <Para>
            Sa conception ne se limite pas au choix des chaudières. Elle doit intégrer l&apos;ensemble des contraintes liées à la puissance installée, à l&apos;alimentation gaz, à l&apos;implantation du local, à la ventilation, à l&apos;évacuation des fumées, à l&apos;hydraulique chauffage, au traitement d&apos;eau, à l&apos;expansion, à la régulation chauffage, à la sécurité, à l&apos;accessibilité, à la maintenance et à l&apos;exploitation future de l&apos;installation.
          </Para>
          <Para>
            OSARIS Ingénierie intervient sur les chaufferies gaz en bâtiment neuf comme en rénovation chaufferie, en phase conception pour les maîtres d&apos;ouvrage, architectes, syndics et exploitants, ainsi qu&apos;en phase d&apos;études d&apos;exécution CVC pour les entreprises titulaires des travaux.
          </Para>

          <GuideImage
            src="/images/guides/chauffage/chaufferie-chaudieres-condensation.webp"
            alt="Chaufferie gaz collective avec chaudières à condensation en cascade, réseaux hydrauliques calorifugés et fumisterie."
            caption="Chaufferie gaz collective équipée de plusieurs chaudières à condensation, réseaux hydrauliques isolés et conduits de fumées."
          />
        </div>
      </section>

      {/* A.1 — Tableau classement chaufferies */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Classement des chaufferies selon la puissance</SubHeading>
          <Para>
            Le niveau d&apos;étude d&apos;une chaufferie dépend fortement de la puissance utile installée, du type de bâtiment, de l&apos;implantation du local et du mode d&apos;exploitation. Le tableau ci-dessous donne une grille de lecture simplifiée permettant de distinguer les principales familles de chaufferies.
          </Para>
          <ResponsiveTable
            caption="Classement indicatif des chaufferies gaz"
            headers={["Classe de chaufferie", "Puissance indicative", "Exemples de bâtiments concernés", "Enjeux techniques principaux"]}
            rows={chaufferieRows}
            rightAlign={[1]}
            note="Ce classement est indicatif. Chaque projet doit être analysé selon la puissance utile installée, la puissance calorifique, le combustible, l'implantation, le classement du bâtiment, le type d'exploitation et les exigences réglementaires applicables."
          />
        </div>
      </section>

      {/* A.2 — Neuf / Rénovation */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Intervention en bâtiment neuf</SubHeading>
          <Para>
            En construction neuve, la chaufferie doit être pensée dès les premières phases de conception. L&apos;objectif est d&apos;intégrer correctement le local technique dans le bâtiment, d&apos;anticiper les contraintes de maintenance et de prévoir les interfaces avec les autres lots.
          </Para>
          <NumberedCardGrid
            eyebrow="En neuf, OSARIS Ingénierie intervient notamment sur"
            items={[
              "La définition des besoins thermiques du bâtiment",
              "Le choix du principe de production de chaleur et la puissance à installer",
              "Le choix du nombre de chaudières et l'implantation du local",
              "Les accès, dégagements de maintenance et réservations",
              "L'alimentation gaz, la ventilation haute et basse",
              "La fumisterie et les sorties en toiture ou façade",
              "Les condensats, le remplissage et le traitement d'eau",
              "Le vase d'expansion ou le maintien de pression",
              "Les collecteurs, réseaux hydrauliques, circulateurs et organes de réglage",
              "La régulation, les reports d'alarme, les plans, schémas, CCTP chauffage et DPGF chauffage",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Intervention en rénovation</SubHeading>
            <Para>
              En rénovation chaufferie, l&apos;approche est différente. Il faut composer avec l&apos;existant : local déjà construit, réseaux en place, contraintes d&apos;accès, conduits existants, alimentation gaz disponible, équipements à déposer, continuité de service et exploitation du bâtiment pendant les travaux.
            </Para>
            <NumberedCardGrid
              eyebrow="Les études de rénovation peuvent comprendre"
              items={[
                "Le diagnostic de la chaufferie existante et le relevé des équipements",
                "L'analyse des réseaux hydrauliques existants",
                "La vérification des puissances réellement nécessaires",
                "L'analyse des consommations et du fonctionnement actuel",
                "La vérification de l'alimentation gaz et de la fumisterie existante",
                "La vérification de la ventilation du local",
                "L'identification des non-conformités ou points de vigilance",
                "La définition des équipements à conserver, déposer ou remplacer",
                "L'adaptation des collecteurs et panoplies, la compatibilité avec les réseaux",
                "Le maintien du chauffage ou de l'ECS pendant les travaux, le phasage et l'assistance à la réception",
              ]}
            />
          </div>
        </div>
      </section>

      {/* A.3 — Hydraulique de chaufferie + image panoplie */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Une conception qui ne se limite pas aux chaudières</SubHeading>
          <Para>
            Une chaufferie performante repose sur la cohérence de l&apos;ensemble des équipements : chaudières et brûleurs, alimentation gaz et organes de coupure, collecteurs départ et retour, circulateurs et pompes de charge, vannes d&apos;isolement, d&apos;équilibrage et de régulation, pots à boues et filtres, séparateurs d&apos;air et purgeurs, dispositifs de vidange, remplissage et protection contre les retours d&apos;eau, traitement d&apos;eau, vases d&apos;expansion ou groupes de maintien de pression, évacuation des condensats, conduits de fumée, ventilation du local, automatismes et télégestion. Chaque composant doit être dimensionné et implanté de façon cohérente avec le fonctionnement global de l&apos;installation.
          </Para>

          <GuideImage
            src="/images/guides/chauffage/panoplie-hydraulique-chaufferie.webp"
            alt="Panoplie hydraulique de chaufferie avec circulateurs doubles, vases d'expansion, vannes et réseaux de chauffage calorifugés."
            caption="Exemple de panoplie hydraulique de chaufferie avec circulateurs, vases d'expansion, organes de réglage et réseaux calorifugés."
          />

          <SubHeading>Hydraulique de chaufferie</SubHeading>
          <Para>
            L&apos;hydraulique chauffage est un point déterminant dans le bon fonctionnement d&apos;une chaufferie. Un mauvais dimensionnement thermique peut entraîner des défauts de débit, des déséquilibres de température, des bruits hydrauliques, une mauvaise condensation des chaudières, une surconsommation des circulateurs ou une instabilité de régulation.
          </Para>
          <NumberedCardGrid
            eyebrow="OSARIS Ingénierie vérifie notamment"
            items={[
              "Les régimes de température et les débits nominaux",
              "Les pertes de charge, diamètres de canalisations et vitesses d'eau",
              "Les hauteurs manométriques et interactions entre circuits",
              "Le fonctionnement à débit constant ou variable",
              "Le besoin éventuel de découplage hydraulique",
              "La sélection des circulateurs et le réglage des pompes",
              "Les vannes d'équilibrage et la stabilité de la pression différentielle",
              "Les conditions de purge et de vidange",
            ]}
          />
        </div>
      </section>

      {/* A.4 — Sécurité gaz, fumisterie, ventilation */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Sécurité gaz, fumisterie et ventilation</SubHeading>
          <Para>
            Les chaufferies gaz nécessitent une attention particulière sur les organes de sécurité et les conditions de combustion. L&apos;alimentation gaz doit être étudiée selon la puissance appelée, la pression disponible, le tracé des canalisations, les organes de coupure, l&apos;accessibilité, le repérage et les essais d&apos;étanchéité.
          </Para>
          <Para>
            La fumisterie doit être compatible avec les chaudières installées, les températures de fumées, les pertes de charge admissibles, les possibilités de ramonage, les trappes de visite, les zones de rejet et les prescriptions des fabricants. La ventilation du local doit permettre l&apos;amenée d&apos;air nécessaire, l&apos;évacuation de la chaleur dégagée et le bon fonctionnement de l&apos;installation : une ventilation insuffisante peut provoquer une surchauffe du local, des défauts de combustion ou des mises en sécurité.
          </Para>
        </div>
      </section>

      {/* A.5 — Régulation + image armoires */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Régulation, automatismes et télégestion</SubHeading>
          <Para>
            La régulation chauffage permet d&apos;adapter la production de chaleur aux besoins réels du bâtiment. Elle peut intégrer la gestion en cascade des chaudières, les lois d&apos;eau, les sondes extérieures, les sondes de départ et retour, les vannes motorisées, les circulateurs à variation de vitesse, les priorités ECS, les horaires d&apos;occupation, les sécurités de pression, les reports d&apos;alarme, la télégestion et les comptages énergétiques. Une régulation bien conçue améliore le rendement saisonnier, stabilise le fonctionnement, réduit les consommations et facilite le suivi par l&apos;exploitant.
          </Para>

          <GuideImage
            src="/images/guides/chauffage/armoires-electriques-chaufferie.webp"
            alt="Armoires électriques de chaufferie avec commande chaudières, circulateurs, voyants de défaut, marche et sécurité."
            caption="Armoires électriques et automatismes de chaufferie pour la commande des chaudières, circulateurs, sécurités et reports d'alarmes."
          />
        </div>
      </section>

      {/* A.6 — Exécution / chantier / DOE */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Études d&apos;exécution pour les entreprises</SubHeading>
          <Para>
            OSARIS Ingénierie intervient également en phase d&apos;exécution pour accompagner les entreprises titulaires des travaux. Cette mission permet à l&apos;entreprise de produire un dossier technique clair, cohérent et défendable auprès de la maîtrise d&apos;œuvre, du bureau de contrôle, du maître d&apos;ouvrage et de l&apos;exploitant.
          </Para>
          <NumberedCardGrid
            eyebrow="L'accompagnement en études d'exécution CVC peut comprendre"
            items={[
              "Les plans d'exécution de chaufferie et schémas hydrauliques détaillés",
              "Les notes de calcul de puissance, de débits et de pertes de charge",
              "Le dimensionnement des canalisations",
              "La sélection des chaudières, circulateurs et pompes",
              "La vérification de l'expansion et du maintien de pression",
              "L'analyse de la ventilation haute et basse, les principes de fumisterie",
              "Les synoptiques de régulation et listes de points GTB ou télégestion",
              "Les fiches techniques matériel et réponses aux observations de visa",
              "L'adaptation des plans selon les contraintes de chantier",
              "La préparation des éléments nécessaires au DOE chaufferie",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Assistance chantier, essais, réception et DOE</SubHeading>
            <Para>
              En phase chantier, OSARIS Ingénierie peut accompagner le maître d&apos;ouvrage ou l&apos;entreprise sur les adaptations techniques, les visas, les interfaces entre lots, les essais et la réception : étanchéité des réseaux, essais gaz, organes de sécurité, combustion, évacuation des fumées, ventilation, mise en eau, rinçage, purge, maintien de pression, réglages des circulateurs, équilibrage hydraulique, températures de départ et retour, alarmes, reports GTB et documents de réception.
            </Para>
            <Para>
              Le dossier des ouvrages exécutés (DOE chaufferie) est indispensable pour l&apos;exploitation future : plans conformes à l&apos;exécution, schémas hydrauliques à jour, notes de calcul, fiches techniques, notices d&apos;exploitation et de maintenance, PV de mise en service et d&apos;essais, rapport d&apos;équilibrage, réglages des vannes et des pompes, consignes de régulation, liste des alarmes et synoptique de fonctionnement. Un DOE complet facilite l&apos;exploitation, les dépannages, les futures modifications et la transmission des informations entre entreprises, exploitants et maîtres d&apos;ouvrage.
            </Para>
          </div>
        </div>
      </section>

      {/* ══════════════════════ BLOC B — SOUS-STATIONS ══════════════════════ */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Bloc B — Réseaux de chaleur" title="Sous-stations raccordées aux réseaux de chauffage urbain" />
          <Para>
            Une sous-station de chauffage urbain assure l&apos;interface entre un réseau de chaleur public ou privé et les installations thermiques d&apos;un bâtiment. Elle permet de transférer l&apos;énergie fournie par le réseau primaire vers les réseaux secondaires du bâtiment, généralement au moyen d&apos;un ou plusieurs échangeurs de chaleur.
          </Para>
          <Para>
            Contrairement à une chaufferie gaz, une sous-station ne produit pas directement la chaleur par combustion sur site. Elle ne comporte donc pas de chaudières, de brûleurs, d&apos;alimentation gaz ou de fumisterie. Sa conception repose principalement sur l&apos;échange thermique, l&apos;hydraulique, la régulation, le comptage d&apos;énergie, la sécurité de pression et l&apos;exploitation des réseaux secondaires.
          </Para>
          <Para>
            OSARIS Ingénierie accompagne les maîtres d&apos;ouvrage, syndics, architectes, exploitants, concessionnaires et entreprises dans les études de création, rénovation, remplacement ou optimisation de sous-stations raccordées aux réseaux de chauffage urbain.
          </Para>

          <GuideImage
            src="/images/guides/chauffage/sous-station-echangeurs-reseau-chaleur.webp"
            alt="Sous-station de chauffage urbain avec échangeurs à plaques, réseaux hydrauliques calorifugés, vannes de régulation et instruments de mesure."
            caption="Exemple de sous-station raccordée à un réseau de chauffage urbain avec échangeurs à plaques, réseaux primaires/secondaires, vannes de régulation, instruments de mesure et réseaux calorifugés."
          />

          <SubHeading>Principe de fonctionnement d&apos;une sous-station</SubHeading>
          <Para>
            Le réseau de chaleur transporte de l&apos;eau chaude ou de l&apos;eau surchauffée depuis une centrale de production vers les bâtiments abonnés. Dans chaque bâtiment, la sous-station assure le transfert de chaleur entre le réseau primaire du concessionnaire et les réseaux secondaires internes, sans mélange direct entre les deux circuits, sauf cas particulier de raccordement direct autorisé et techniquement compatible.
          </Para>
          <NumberedCardGrid
            eyebrow="La sous-station comprend généralement"
            items={[
              "Une arrivée primaire depuis le réseau de chaleur",
              "Un ou plusieurs échangeurs de chaleur",
              "Des vannes d'isolement, filtres et pots à boues",
              "Des organes de régulation, sondes de température et de pression",
              "Un compteur d'énergie et une télérelève éventuelle",
              "Des circulateurs côté secondaire et collecteurs de distribution",
              "Un vase d'expansion ou groupe de maintien de pression",
              "Des équipements de sécurité et organes de vidange, purge et remplissage",
              "Une régulation locale ou raccordée à une GTB",
            ]}
          />
        </div>
      </section>

      {/* B.1 — Tableau sous-stations */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Classement des sous-stations selon l&apos;usage et la puissance</SubHeading>
          <Para>
            Le niveau d&apos;étude d&apos;une sous-station dépend de la puissance appelée, du type de bâtiment, des régimes de température, des besoins ECS et du nombre de circuits secondaires à alimenter.
          </Para>
          <ResponsiveTable
            caption="Classement indicatif des sous-stations"
            headers={["Type de sous-station", "Puissance indicative", "Applications courantes", "Enjeux techniques principaux"]}
            rows={sousStationRows}
            rightAlign={[1]}
            note="Ce classement reste indicatif. Chaque projet dépend des prescriptions du concessionnaire, de la puissance souscrite, des régimes de température primaire et secondaire, des pertes de charge disponibles, des besoins réels du bâtiment et des contraintes d'exploitation."
          />
        </div>
      </section>

      {/* B.2 — Neuf / Rénovation sous-station */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Intervention en bâtiment neuf</SubHeading>
          <Para>
            En construction neuve, la sous-station doit être intégrée dès les premières phases de conception. Son implantation conditionne les interfaces avec le réseau de chaleur, les locaux techniques, les gaines, les réseaux hydrauliques et électriques, la GTB et l&apos;exploitation future.
          </Para>
          <NumberedCardGrid
            eyebrow="En neuf, OSARIS Ingénierie intervient notamment sur"
            items={[
              "L'analyse des besoins thermiques et la puissance à souscrire",
              "Le choix du principe de raccordement réseau de chaleur",
              "L'implantation du local sous-station",
              "L'organisation des réseaux primaires et secondaires",
              "Le dimensionnement des échangeurs et des circulateurs secondaires",
              "La définition des régimes de température et l'étude des pertes de charge",
              "La sélection des vannes de régulation et la définition des comptages d'énergie",
              "L'intégration de la production ECS si nécessaire et le maintien de pression",
              "Le traitement d'eau côté secondaire",
              "Les schémas de principe, plans techniques, CCTP chauffage et DPGF chauffage",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Intervention en rénovation</SubHeading>
            <Para>
              En rénovation, la sous-station doit s&apos;adapter aux contraintes existantes : local disponible, réseaux hydrauliques en place, anciennes chaudières déposées, colonnes existantes, régimes d&apos;eau historiques, accès limité, continuité de service et exploitation du bâtiment pendant les travaux. Le raccordement réseau de chaleur doit être accompagné d&apos;une analyse complète des réseaux secondaires.
            </Para>
            <NumberedCardGrid
              eyebrow="Les études de rénovation peuvent comprendre"
              items={[
                "Le diagnostic du local technique existant et le relevé des équipements",
                "L'analyse des réseaux de chauffage existants et des régimes de température",
                "La vérification des puissances nécessaires",
                "La comparaison entre ancienne chaufferie et nouveau raccordement urbain",
                "La définition des équipements à déposer et l'adaptation des collecteurs",
                "Le dimensionnement des échangeurs et le recalcul des circulateurs",
                "La vérification du vase d'expansion ou du maintien de pression",
                "L'analyse de la production ECS existante et l'intégration des comptages",
                "La préparation du phasage chantier et le maintien éventuel du service",
                "L'assistance à la réception",
              ]}
            />
          </div>
        </div>
      </section>

      {/* B.3 — Concessionnaire + échangeurs */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Interface avec le concessionnaire du réseau de chaleur</SubHeading>
          <Para>
            Une sous-station raccordée à un réseau de chaleur implique une coordination spécifique avec le concessionnaire ou l&apos;exploitant du réseau primaire. Cette interface porte notamment sur la puissance souscrite, le régime de température primaire, la pression disponible, les limites de prestation, le comptage d&apos;énergie, les organes de coupure, les prescriptions de raccordement, les contraintes d&apos;accès au local, les modalités de mise en service, les points de mesure et de télérelève, et les responsabilités entre réseau primaire et installations secondaires. OSARIS Ingénierie peut accompagner le maître d&apos;ouvrage ou l&apos;entreprise dans l&apos;analyse des prescriptions concessionnaire et leur intégration dans les études techniques.
          </Para>
          <SubHeading>Échangeurs de chaleur</SubHeading>
          <Para>
            L&apos;échangeur de chaleur est l&apos;élément central de la sous-station : il assure le transfert d&apos;énergie entre le réseau primaire et le réseau secondaire du bâtiment. Son dimensionnement dépend de la puissance à transmettre, des régimes de température primaire et secondaire, du pincement thermique, des pertes de charge admissibles, de la qualité d&apos;eau, du niveau d&apos;encrassement prévisible, des exigences de maintenance et de la production ECS éventuelle. Un mauvais dimensionnement peut entraîner un manque de puissance, une température secondaire insuffisante, des pertes de charge excessives, une mauvaise stabilité de régulation ou une pénalisation du retour primaire.
          </Para>
        </div>
      </section>

      {/* B.4 — Hydraulique secondaire + ECS */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Hydraulique secondaire</SubHeading>
          <Para>
            Le bon fonctionnement d&apos;une sous-station dépend fortement de l&apos;hydraulique chauffage côté bâtiment.
          </Para>
          <NumberedCardGrid
            eyebrow="OSARIS Ingénierie étudie notamment"
            items={[
              "Les collecteurs départ et retour et les circulateurs secondaires",
              "Les pertes de charge des réseaux, diamètres et vitesses d'eau",
              "Les vannes d'équilibrage et de régulation",
              "Les pots à boues, filtres, séparateurs d'air et purgeurs",
              "Les points de vidange et le vase d'expansion",
              "Le maintien de pression et la compatibilité avec les réseaux existants",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Production d&apos;eau chaude sanitaire associée</SubHeading>
            <Para>
              Certaines sous-stations assurent également la production d&apos;eau chaude sanitaire, par échangeur instantané, production semi-instantanée ou avec stockage. Cette partie nécessite une étude spécifique afin de garantir la puissance ECS disponible, le débit de pointe, la température de production, le stockage éventuel, la boucle de recyclage ECS, les pertes de charge, la sécurité anti-brûlure, la maîtrise du risque sanitaire, la régulation de température, le comptage éventuel et l&apos;accessibilité maintenance. La production ECS peut représenter une part importante de la puissance appelée et conditionner le choix de l&apos;échangeur ou de la panoplie de sous-station.
            </Para>
          </div>
        </div>
      </section>

      {/* B.5 — Régulation, comptage, télégestion */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Régulation, comptage et télégestion</SubHeading>
          <Para>
            La régulation chauffage permet d&apos;adapter la chaleur fournie aux besoins réels du bâtiment, d&apos;assurer la stabilité des températures, la maîtrise des débits et l&apos;optimisation du retour primaire. Elle peut comprendre une vanne de régulation primaire, une loi d&apos;eau chauffage, des sondes de température départ et retour, des sondes extérieures et ECS, des circulateurs à vitesse variable, des priorités ECS, des sécurités de température et de pression, des reports d&apos;alarme, un compteur d&apos;énergie, une télérelève et une interface GTB ou GTC. Une régulation bien conçue améliore le confort, réduit les consommations électriques des auxiliaires, limite les retours trop chauds vers le réseau primaire et facilite le suivi d&apos;exploitation par la télégestion.
          </Para>
        </div>
      </section>

      {/* B.6 — Exécution / chantier / DOE / domaines */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Études d&apos;exécution pour les entreprises</SubHeading>
          <Para>
            OSARIS Ingénierie intervient également en études d&apos;exécution CVC pour accompagner les entreprises titulaires des travaux.
          </Para>
          <NumberedCardGrid
            eyebrow="Cette mission peut comprendre"
            items={[
              "Les plans d'exécution de sous-station et schémas hydrauliques détaillés",
              "Les notes de calcul de puissance et le calcul des débits primaires et secondaires",
              "Le calcul des pertes de charge et le dimensionnement des échangeurs",
              "La sélection des circulateurs et des vannes de régulation",
              "La vérification du maintien de pression et la définition des organes d'équilibrage",
              "L'analyse des prescriptions concessionnaire",
              "La préparation des fiches techniques et réponses aux observations de visa",
              "L'adaptation des plans selon les contraintes de chantier et la préparation du DOE",
            ]}
          />
          <div className="mt-8">
            <SubHeading>Assistance chantier, essais, réception et DOE</SubHeading>
            <Para>
              La réception d&apos;une sous-station doit permettre de vérifier que l&apos;installation est conforme, exploitable, réglée et correctement documentée : conformité de l&apos;implantation, accessibilité des équipements, étanchéité des réseaux, mise en eau, rinçage, purge, traitement d&apos;eau, maintien de pression, fonctionnement des circulateurs, réglages des vannes, contrôle des températures départ et retour, vérification du compteur d&apos;énergie, régulation, reports d&apos;alarme, production ECS si présente et cohérence des documents de réception.
            </Para>
            <Para>
              Le DOE est indispensable pour l&apos;exploitation future : plans conformes à l&apos;exécution, schémas hydrauliques à jour, notes de calcul, fiches techniques, notices d&apos;exploitation et de maintenance, PV de mise en service, rapports d&apos;essais, réglages des vannes et des circulateurs, consignes de régulation, informations de comptage, synoptiques de fonctionnement et limites de prestation avec le concessionnaire.
            </Para>
          </div>
        </div>
      </section>

      {/* B.7 — Domaines d'intervention */}
      <section className="py-12 bg-night-850 border-y border-night-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubHeading>Domaines d&apos;intervention sur les sous-stations</SubHeading>
          <NumberedCardGrid
            eyebrow="OSARIS Ingénierie intervient sur"
            items={[
              "Les sous-stations raccordées aux réseaux de chauffage urbain",
              "Les raccordements au réseau de chaleur",
              "Les sous-stations chauffage seul et chauffage + ECS",
              "Les échangeurs primaires / secondaires",
              "Les productions ECS par échangeur",
              "Les réseaux secondaires de distribution",
              "Les circuits radiateurs, CTA et planchers chauffants",
              "Les circulateurs secondaires et vannes de régulation",
              "Les comptages d'énergie, la régulation et la télégestion",
              "La rénovation d'anciennes chaufferies converties en sous-stations",
            ]}
          />
        </div>
      </section>
    </>
  );
}
