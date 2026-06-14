"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BrandName } from "@/components/ui/brand-name";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    title: "Analyse du besoin",
    intro: "Réunion de cadrage avec le maître d'ouvrage, l'architecte, la maîtrise d'œuvre, l'entreprise d'exécution ou les différents intervenants du projet afin d'identifier les objectifs techniques, les contraintes d'exploitation, les exigences réglementaires, le budget prévisionnel et le niveau de performance attendu.",
    exe: "Dans le cadre d'une mission EXE pour une entreprise, cette étape permet d'analyser les pièces du marché : CCTP, DPGF, plans DCE, notes techniques, limites de prestations, variantes éventuelles, contraintes de planning et exigences de validation. Elle permet également de définir le périmètre précis des études d'exécution à produire : plans d'exécution, schémas de principe, notes de calcul, dimensionnements complémentaires, fiches techniques, synoptiques, carnets de détails et documents de synthèse.",
    neuf: "En construction neuve, l'analyse porte principalement sur le programme, les exigences réglementaires, les performances énergétiques visées, les choix de systèmes techniques et l'intégration des installations dans le projet architectural.",
    renov: "En rénovation, l'analyse intègre l'état des installations existantes, les contraintes d'intervention en site occupé, les possibilités de réemploi, les limites techniques du bâtiment existant et les éventuels phasages de travaux.",
  },
  {
    num: "02",
    title: "Relevés & diagnostic",
    intro: "Collecte et analyse des données techniques disponibles : plans, DOE, puissances installées, réseaux existants, inventaire et état des équipements en place, contraintes architecturales, réservations, gaines techniques, locaux techniques et conditions d'accès. Une visite sur site permet de vérifier la cohérence des informations recueillies, d'identifier les contraintes réelles d'intervention, d'évaluer les possibilités de réemploi et d'anticiper les adaptations nécessaires aux installations existantes.",
    exe: "Dans le cadre d'une mission EXE pour une entreprise, cette phase permet de fiabiliser les bases d'étude avant production des plans d'exécution : vérification des cheminements, altimétries, encombrements, possibilités de passage, zones de raccordement, supports, percements, réservations et interfaces avec les autres corps d'état.",
    neuf: "En construction neuve, cette étape consiste principalement à analyser les plans architecturaux, les contraintes d'implantation, les locaux techniques, les gaines, les réservations, les cheminements et les interfaces avec les autres lots.",
    renov: "En rénovation, le diagnostic devient une étape déterminante : relevés des réseaux existants, identification des équipements conservés ou déposés, vérification des puissances disponibles, contrôle des accès de maintenance, analyse de l'état des installations et repérage des contraintes non visibles sur les plans.",
  },
  {
    num: "03",
    title: "Études techniques",
    intro: "Réalisation des études de conception et des notes de calcul nécessaires au projet : déperditions thermiques, bilans de puissance, dimensionnements hydrauliques et aérauliques, besoins ECS, ventilation, chauffage, climatisation, plomberie et génie électrique. Les solutions sont étudiées en cohérence avec les normes applicables, les contraintes du bâtiment, les objectifs de performance énergétique, les conditions d'exploitation et les exigences de maintenance.",
    exe: "Dans le cadre d'une mission EXE pour une entreprise, les calculs et vérifications nécessaires à la mise en œuvre sont réalisés : pertes de charge, débits, diamètres de réseaux, vitesses d'écoulement, puissances terminales, sélection des circulateurs, équilibrage hydraulique, réseaux aérauliques, débits de ventilation, besoins ECS, évacuations, dimensionnement des équipements et cohérence avec les matériels proposés. Cette étape permet de transformer les principes du DCE en solutions techniques exécutables, compatibles avec les contraintes du chantier et les équipements réellement retenus par l'entreprise.",
    neuf: "En construction neuve, les études permettent de concevoir ou de développer des installations complètes, cohérentes avec l'enveloppe du bâtiment, les usages prévus, la réglementation applicable et les objectifs de performance énergétique.",
    renov: "En rénovation, les études doivent intégrer les limites de l'existant : capacités des réseaux conservés, compatibilité avec les équipements en place, contraintes de passage, continuité de service, maintien de l'exploitation et adaptation des installations aux nouveaux besoins.",
  },
  {
    num: "04",
    title: "Dimensionnement & plans d'exécution",
    intro: "Sélection et dimensionnement des équipements techniques : chaudières, pompes à chaleur, CTA, extracteurs, ballons ECS, circulateurs, réseaux hydrauliques, réseaux aérauliques, terminaux, organes de sécurité, dispositifs de régulation et équipements électriques associés. Les plans d'implantation, schémas de principe, synoptiques hydrauliques, plans de réseaux et prescriptions techniques sont établis afin de garantir la faisabilité, la performance, l'accessibilité et la fiabilité des installations.",
    exe: "Dans le cadre d'une mission EXE pour une entreprise, les documents nécessaires à l'exécution des travaux sont produits : plans d'exécution CVC/plomberie/électricité, plans de réservations, plans de percements, carnets de détails, schémas hydrauliques, synoptiques de régulation, plans de locaux techniques, plans de cheminement, coupes techniques et détails de raccordement. Les études EXE permettent également d'optimiser les solutions prévues au marché, de vérifier les encombrements, de coordonner les interfaces avec les autres lots et de sécuriser la mise en œuvre sur chantier.",
    neuf: "En construction neuve, le dimensionnement vise à optimiser les installations dès la conception ou en phase EXE : puissance juste nécessaire, performance énergétique, intégration architecturale, accessibilité pour maintenance et cohérence entre les différents lots techniques.",
    renov: "En rénovation, le dimensionnement doit vérifier la compatibilité entre les nouveaux équipements et les installations existantes conservées : diamètres de réseaux, pertes de charge, débits disponibles, puissances électriques, encombrements, évacuations, supports, régulation et sécurité.",
  },
  {
    num: "05",
    title: "DCE, consultation ou dossier EXE entreprise",
    intro: "Élaboration des pièces techniques nécessaires à la consultation des entreprises : CCTP, DPGF, notes techniques, plans, schémas, prescriptions de mise en œuvre, limites de prestations et performances attendues. Le bureau d'études peut également assister le maître d'ouvrage dans l'analyse des offres, la vérification de la cohérence technique des propositions, l'identification des écarts éventuels et l'examen des variantes proposées par les entreprises.",
    exe: "Dans le cadre d'une mission EXE pour une entreprise, cette étape correspond à la constitution du dossier technique d'exécution à transmettre pour validation : plans EXE, notes de calcul, fiches techniques matériel, tableaux de sélection, nomenclatures, synoptiques, carnets de détails, schémas électriques fonctionnels, plans de réservations et documents de synthèse. L'objectif est de fournir à l'entreprise un dossier exploitable pour l'approvisionnement, la préparation de chantier, la coordination avec les autres corps d'état et la réalisation des travaux.",
    neuf: "En construction neuve, le dossier précise les prestations à réaliser par lot, les équipements à prévoir, les interfaces techniques, les exigences réglementaires et les conditions de mise en œuvre.",
    renov: "En rénovation, le dossier doit distinguer clairement les ouvrages à conserver, déposer, modifier, déplacer ou remplacer. Il précise également les contraintes de phasage, les interventions en site occupé, les raccordements provisoires éventuels et les limites de prestations entre existant et travaux neufs.",
  },
  {
    num: "06",
    title: "Suivi technique, visa & assistance chantier",
    intro: "Accompagnement pendant la phase travaux : analyse des documents d'exécution, visa technique, réponses aux questions de chantier, suivi des interfaces entre corps d'état, vérification de la conformité des installations et assistance aux arbitrages techniques.",
    exe: "Dans le cadre d'une mission EXE pour une entreprise, l'accompagnement se poursuit pendant la réalisation des travaux : mise à jour des plans selon les retours chantier, adaptation des cheminements, réponses aux observations du bureau de contrôle ou de la maîtrise d'œuvre, ajustement des notes de calcul, intégration des modifications de matériel et préparation des documents de fin de chantier. Cette phase comprend notamment l'analyse des fiches techniques, le suivi des points sensibles, l'assistance aux essais, les vérifications fonctionnelles, les adaptations après synthèse technique, la levée des observations et la préparation des DOE.",
    neuf: "En construction neuve, le suivi permet de vérifier la bonne exécution des installations par rapport aux études de conception, aux plans, aux prescriptions techniques, aux performances prévues et aux documents d'exécution validés.",
    renov: "En rénovation, le suivi porte une attention particulière aux adaptations de chantier, aux découvertes en cours de travaux, à la continuité d'exploitation, aux raccordements sur existant, aux essais après modification, à la remise en service des installations et à la cohérence entre les travaux réalisés et les contraintes réelles du site.",
  },
];

export function MethodologieSection() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (num: string) => setOpen(open === num ? null : num);

  return (
    <section id="methodologie" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <BlurFade delay={0} inView duration={0.5}>
          <div className="grid lg:grid-cols-2 gap-10 mb-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Notre processus
                </span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl text-night-50">
                Une méthodologie adaptée<br />aux missions de conception<br />et d'exécution
              </h2>
            </div>
            <div className="space-y-4 text-night-200 text-sm leading-relaxed">
              <p>
                <BrandName /> accompagne les maîtres d'ouvrage, architectes, bureaux de maîtrise d'œuvre
                et entreprises d'exécution dans le développement technique des projets CVC, plomberie,
                thermique, énergie et génie électrique.
              </p>
              <p>
                La méthodologie s'adapte à la nature de la mission : conception en phase études,
                assistance technique, optimisation énergétique, rénovation d'installations existantes
                ou études d'exécution pour les entreprises.
              </p>
              <p>
                Dans ce cadre, <BrandName /> produit les documents techniques nécessaires à la
                préparation, au dimensionnement, à la coordination et à la réalisation des travaux.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Accordéon */}
        <div className="divide-y divide-night-700/40">
          {steps.map((step, i) => {
            const isOpen = open === step.num;
            return (
              <BlurFade key={step.num} delay={i * 0.06} inView duration={0.4}>
                <div>
                  {/* En-tête cliquable */}
                  <button
                    onClick={() => toggle(step.num)}
                    className="w-full flex items-center gap-5 py-6 px-2 text-left group hover:bg-night-850 transition-colors duration-200 rounded-sm"
                    aria-expanded={isOpen}
                  >
                    <div className={cn(
                      "flex-shrink-0 w-11 h-11 flex items-center justify-center border rounded-full transition-colors duration-300",
                      isOpen
                        ? "border-brand-orange text-brand-orange"
                        : "border-night-600 text-night-300 group-hover:border-brand-orange/50 group-hover:text-brand-orange"
                    )}>
                      <span className="font-mono text-xs font-medium">{step.num}</span>
                    </div>

                    <h3 className={cn(
                      "flex-1 font-display font-bold text-xl transition-colors duration-200",
                      isOpen ? "text-night-50" : "text-night-100 group-hover:text-night-50"
                    )}>
                      {step.title}
                    </h3>

                    <svg
                      width="16" height="16" viewBox="0 0 16 16" fill="none"
                      className={cn(
                        "flex-shrink-0 text-night-400 transition-transform duration-300",
                        isOpen ? "rotate-180 text-brand-orange" : "group-hover:text-night-200"
                      )}
                    >
                      <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Contenu dépliable */}
                  <div className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                  )}>
                    <div className="pl-16 pr-2 pb-8 space-y-5">

                      {/* Texte principal */}
                      <p className="text-night-200 text-sm leading-relaxed">
                        {step.intro}
                      </p>

                      {/* Encart mission EXE */}
                      <div className="p-4 bg-brand-orange/[0.05] border-l-2 border-brand-orange rounded-r-lg">
                        <div className="font-mono text-[0.6rem] tracking-widest uppercase text-brand-orange-dark mb-2">
                          Mission EXE — Entreprise d'exécution
                        </div>
                        <p className="text-night-200 text-xs leading-relaxed">{step.exe}</p>
                      </div>

                      {/* Construction neuve / Rénovation */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-night-850 border border-night-700 rounded-lg">
                          <div className="font-mono text-[0.6rem] tracking-widest uppercase text-brand-orange-dark mb-2">
                            Construction neuve
                          </div>
                          <p className="text-night-200 text-xs leading-relaxed">{step.neuf}</p>
                        </div>
                        <div className="p-4 bg-night-850 border border-night-700 rounded-lg">
                          <div className="font-mono text-[0.6rem] tracking-widest uppercase text-night-300 mb-2">
                            Rénovation / Réhabilitation
                          </div>
                          <p className="text-night-200 text-xs leading-relaxed">{step.renov}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
