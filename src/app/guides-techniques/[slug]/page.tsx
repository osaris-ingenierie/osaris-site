import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberedCardGrid } from "@/components/ui/numbered-card-grid";
import { guides, getGuideBySlug } from "@/lib/guides-data";

const SITE_URL = "https://www.osaris-ingenierie.com";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide introuvable" };

  const url = `${SITE_URL}/guides-techniques/${guide.slug}`;
  return {
    title: guide.guideTitle,
    description: guide.intro,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url,
      siteName: "OSARIS Ingénierie",
      title: `${guide.guideTitle} | OSARIS Ingénierie`,
      description: guide.intro,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const { Icon } = guide;
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: guide.guideTitle,
    description: guide.intro,
    articleSection: "Guides techniques",
    inLanguage: "fr-FR",
    url: `${SITE_URL}/guides-techniques/${guide.slug}`,
    author: {
      "@type": "Organization",
      name: "OSARIS Ingénierie",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "OSARIS Ingénierie",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
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
        <section className="relative pt-32 pb-14 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/[0.05] blur-[130px] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <BlurFade delay={0} duration={0.4}>
              <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 font-mono text-[0.7rem] tracking-wider uppercase text-night-300 mb-8">
                <Link href="/" className="hover:text-brand-orange-dark transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/guides-techniques" className="hover:text-brand-orange-dark transition-colors">Guides techniques</Link>
                <span>/</span>
                <span className="text-night-200">{guide.title}</span>
              </nav>
            </BlurFade>

            <BlurFade delay={0.1} duration={0.5}>
              <div className="flex items-start gap-5 mb-6">
                <span className="svc-hero-icon inline-flex items-center justify-center w-16 h-16 rounded-xl bg-night-800 border border-night-700 text-brand-orange shadow-card flex-shrink-0 group">
                  <Icon className="w-9 h-9" />
                </span>
                <div>
                  <div className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark mb-2">
                    Guide technique
                  </div>
                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-night-50 leading-tight">
                    {guide.guideTitle}
                  </h1>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.15} duration={0.5}>
              <p className="text-night-200 text-base sm:text-lg leading-[1.75]">
                {guide.intro}
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ── 1. Définition ── */}
        <section className="py-12 bg-night-850 border-y border-night-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Définition
                </span>
              </div>
              <p className="text-night-200 text-base leading-[1.8] max-w-3xl">
                {guide.detail.definition}
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ── 2. Rôle dans un projet ── */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Rôle dans un projet bâtiment" items={guide.detail.role} />
          </div>
        </section>

        {/* ── 3. Équipements ── */}
        <section className="py-12 bg-night-850 border-y border-night-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Principaux équipements concernés" items={guide.detail.equipements} />
          </div>
        </section>

        {/* ── 4. Points de vigilance ── */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Points de vigilance en conception" items={guide.detail.vigilance} />
          </div>
        </section>

        {/* ── 5. Erreurs fréquentes ── */}
        <section className="py-12 bg-night-850 border-y border-night-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Erreurs fréquentes à éviter" items={guide.detail.erreurs} />
          </div>
        </section>

        {/* ── 6. Accompagnement OSARIS ── */}
        <section className="py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Accompagnement OSARIS Ingénierie
                </span>
              </div>
              <p className="text-night-200 text-base leading-[1.8] max-w-3xl">
                OSARIS Ingénierie accompagne les maîtres d'ouvrage, architectes, syndics, entreprises et exploitants sur l'ensemble de cette spécialité : études et diagnostic, dimensionnement, notes de calcul, pièces techniques (CCTP, DPGF), suivi d'exécution et assistance jusqu'à la réception des installations.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* ── Autres guides ── */}
        <section className="py-14 bg-night-850 border-t border-night-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Autres guides techniques
                </span>
              </div>
            </BlurFade>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((o, i) => {
                const OIcon = o.Icon;
                return (
                  <BlurFade key={o.slug} delay={i * 0.05} inView duration={0.4}>
                    <Link
                      href={`/guides-techniques/${o.slug}`}
                      className="group flex items-center gap-3 p-4 bg-night-800 border border-night-700 rounded-xl shadow-soft hover:shadow-card hover:border-brand-orange/30 hover:-translate-y-0.5 transition-all duration-300 h-full"
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-night-850 border border-night-700 text-night-300 group-hover:text-brand-orange group-hover:border-brand-orange/30 transition-all duration-300 flex-shrink-0">
                        <OIcon className="w-6 h-6" />
                      </span>
                      <span className="font-display font-bold text-sm text-night-100 group-hover:text-night-50 transition-colors leading-tight">
                        {o.title}
                      </span>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>

            {/* CTA */}
            <BlurFade delay={0.1} inView duration={0.5}>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 p-8 bg-night-800 border border-night-700 rounded-2xl shadow-card text-center sm:text-left">
                <div className="flex-1">
                  <h2 className="font-display font-bold text-xl text-night-50 mb-1.5">
                    Un projet en {guide.title.toLowerCase()} ?
                  </h2>
                  <p className="text-night-200 text-sm">
                    OSARIS Ingénierie étudie votre projet, du diagnostic à la réception.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <Link href="/contact"
                    className="group/cta inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange text-white font-display font-bold tracking-wide uppercase text-sm rounded-lg shadow-soft hover:bg-brand-orange-dark hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Contacter OSARIS Ingénierie
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <Link
                    href="/guides-techniques"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-night-800 border border-night-600 text-night-100 font-display font-bold tracking-wide uppercase text-sm rounded-lg hover:border-brand-orange/50 hover:text-brand-orange transition-all duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M12 7H2M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Retour aux guides techniques
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
