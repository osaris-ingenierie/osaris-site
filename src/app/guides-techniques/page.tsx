import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlurFade } from "@/components/ui/blur-fade";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { guides, faq } from "@/lib/guides-data";

const SITE_URL = "https://www.osaris-ingenierie.com";

export const metadata: Metadata = {
  title: "Guides techniques CVC, thermique et énergie du bâtiment",
  description:
    "Découvrez les guides techniques OSARIS Ingénierie pour comprendre les installations CVC, plomberie, ECS, thermique, performance énergétique et génie électrique du bâtiment.",
  keywords: [
    "bureau d'études CVC",
    "ingénierie technique du bâtiment",
    "chauffage",
    "ventilation",
    "climatisation",
    "plomberie sanitaire",
    "eau chaude sanitaire",
    "ECS collective",
    "thermique du bâtiment",
    "performance énergétique",
    "génie électrique",
    "DCE technique",
    "rénovation énergétique",
    "études techniques bâtiment",
  ],
  alternates: { canonical: `${SITE_URL}/guides-techniques` },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: `${SITE_URL}/guides-techniques`,
    siteName: "OSARIS Ingénierie",
    title: "Guides techniques CVC, thermique et énergie du bâtiment | OSARIS Ingénierie",
    description:
      "Comprendre les installations techniques du bâtiment : chauffage, ventilation, climatisation, plomberie, ECS, thermique, performance énergétique et génie électrique.",
  },
};

const raisons = [
  {
    title: "Comprendre les choix techniques",
    desc: "Saisir les principes qui guident le dimensionnement et la sélection des équipements techniques.",
  },
  {
    title: "Identifier les points de vigilance",
    desc: "Repérer les contraintes réglementaires et les erreurs fréquentes en conception comme en exécution.",
  },
  {
    title: "Préparer un projet de rénovation",
    desc: "Anticiper les enjeux d'une rénovation énergétique et les conditions de réussite d'un projet.",
  },
  {
    title: "Faciliter les échanges avec les professionnels",
    desc: "Dialoguer efficacement avec les bureaux d'études, entreprises et exploitants sur des bases techniques claires.",
  },
];

export default function GuidesTechniquesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main" className="min-h-screen">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/[0.05] blur-[130px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <BlurFade delay={0} duration={0.4}>
              <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 font-mono text-[0.7rem] tracking-wider uppercase text-night-300 mb-8">
                <Link href="/" className="hover:text-brand-orange-dark transition-colors">Accueil</Link>
                <span>/</span>
                <span className="text-night-200">Guides techniques</span>
              </nav>
            </BlurFade>

            <BlurFade delay={0.1} duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="block w-6 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Ressources & pédagogie
                </span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-night-50 leading-tight mb-5">
                Guides techniques CVC, thermique, plomberie et énergie du bâtiment
              </h1>
            </BlurFade>

            <BlurFade delay={0.15} duration={0.5}>
              <p className="font-display font-semibold text-lg sm:text-xl text-brand-orange-dark mb-6 max-w-3xl">
                Comprendre les installations techniques du bâtiment : chauffage, ventilation, climatisation, plomberie sanitaire, ECS, thermique, performance énergétique et génie électrique.
              </p>
            </BlurFade>

            <BlurFade delay={0.2} duration={0.5}>
              <div className="space-y-4 text-night-200 text-base leading-[1.75] max-w-3xl">
                <p>
                  Dans cette rubrique, OSARIS Ingénierie met à disposition des guides techniques simples et pédagogiques pour mieux comprendre les principales spécialités du bâtiment : chauffage, ventilation, climatisation, plomberie sanitaire, production d'eau chaude sanitaire, thermique du bâtiment, performance énergétique et génie électrique.
                </p>
                <p>
                  En espérant que ces contenus puissent contribuer à mieux appréhender les enjeux techniques d'un projet, depuis les études de conception jusqu'à la réception des installations.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* ── Grille de guides ── */}
        <section className="py-14 bg-night-850 border-y border-night-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Nos guides par spécialité
                </span>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
              {guides.map((guide, i) => {
                const { Icon } = guide;
                return (
                  <BlurFade key={guide.slug} delay={i * 0.04} inView duration={0.4} className="h-full">
                    <Link
                      href={`/guides-techniques/${guide.slug}`}
                      className="group h-full flex flex-col bg-night-800 p-6 rounded-xl border border-night-700 shadow-card hover:shadow-card-hover hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300"
                    >
                      <span className="svc-hero-icon inline-flex items-center justify-center w-12 h-12 rounded-lg bg-night-850 border border-night-700 text-brand-orange group-hover:border-brand-orange/30 group-hover:bg-brand-orange/[0.06] transition-all duration-300 mb-5">
                        <Icon />
                      </span>
                      <h2 className="font-display font-bold text-xl text-night-100 group-hover:text-night-50 transition-colors mb-2.5 leading-snug">
                        {guide.title}
                      </h2>
                      <p className="text-night-200 text-sm leading-relaxed mb-5 flex-1">
                        {guide.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-widest uppercase text-brand-orange-dark mt-auto">
                        {guide.cta}
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover:translate-x-1">
                          <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pourquoi consulter nos guides ── */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-night-50 leading-tight mb-5">
                Pourquoi consulter nos guides techniques ?
              </h2>
              <div className="space-y-4 text-night-200 text-base leading-[1.75] max-w-3xl mb-10">
                <p>
                  Les installations techniques du bâtiment nécessitent une approche rigoureuse afin de garantir le confort, la sécurité, la performance énergétique et la pérennité des équipements.
                </p>
                <p>
                  Ces guides permettent de mieux comprendre les choix techniques, les contraintes réglementaires, les points de vigilance en conception et les erreurs fréquentes à éviter lors d'un projet neuf ou en rénovation.
                </p>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
              {raisons.map((r, i) => (
                <BlurFade key={r.title} delay={i * 0.05} inView duration={0.4} className="h-full">
                  <div className="h-full flex items-start gap-4 p-5 bg-night-800 border border-night-700 rounded-xl shadow-soft">
                    <span className="font-mono text-xs text-brand-orange-dark font-medium flex-shrink-0 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-base text-night-100 mb-1">{r.title}</h3>
                      <p className="text-night-300 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-night-850 border-y border-night-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  FAQ
                </span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-night-50 leading-tight mb-8">
                Questions fréquentes
              </h2>
            </BlurFade>
            <FaqAccordion items={faq} />
          </div>
        </section>

        {/* ── CTA final ── */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <div className="p-8 sm:p-10 bg-night-800 border border-night-700 rounded-2xl shadow-card text-center">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-night-50 mb-3">
                  Vous avez un projet technique à étudier ?
                </h2>
                <p className="text-night-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                  OSARIS Ingénierie accompagne les maîtres d'ouvrage, architectes, syndics, entreprises et exploitants dans les études CVC, plomberie, thermique, énergie et génie électrique, depuis le diagnostic jusqu'à la réception des installations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/contact"
                    className="group/cta inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-display font-bold tracking-wide uppercase text-sm rounded-lg shadow-soft hover:bg-brand-orange-dark hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Contacter OSARIS Ingénierie
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link href="/services"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-night-800 border border-night-600 text-night-100 font-display font-bold tracking-wide uppercase text-sm rounded-lg hover:border-brand-orange/50 hover:text-brand-orange transition-all duration-200"
                  >
                    Découvrir nos prestations
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
