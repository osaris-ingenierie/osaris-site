import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberedCardGrid } from "@/components/ui/numbered-card-grid";
import { services, getServiceBySlug, iconComponents } from "@/lib/services-data";

const SITE_URL = "https://www.osaris-ingenierie.com";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service introuvable" };

  const title = `${service.title} — Bureau d'études`;
  const description = service.desc;
  const url = `${SITE_URL}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      url,
      siteName: "OSARIS Ingénierie",
      title: `${service.title} · OSARIS Ingénierie`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} · OSARIS Ingénierie`,
      description,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = iconComponents[service.iconKey];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    provider: {
      "@type": "ProfessionalService",
      name: "OSARIS Ingénierie",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "France" },
    url: `${SITE_URL}/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main id="main" className="min-h-screen">
        {/* ── Hero technique ── */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/[0.05] blur-[130px] pointer-events-none" />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <BlurFade delay={0} duration={0.4}>
              <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 font-mono text-[0.7rem] tracking-wider uppercase text-night-300 mb-8">
                <Link href="/" className="hover:text-brand-orange-dark transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-brand-orange-dark transition-colors">Nos expertises</Link>
                <span>/</span>
                <span className="text-night-200">{service.shortTitle}</span>
              </nav>
            </BlurFade>

            <BlurFade delay={0.1} duration={0.5}>
              <div className="flex items-start gap-5 mb-6">
                <span className="svc-hero-icon inline-flex items-center justify-center w-16 h-16 rounded-xl bg-night-800 border border-night-700 text-brand-orange shadow-card flex-shrink-0 group">
                  <Icon className="w-9 h-9" />
                </span>
                <div>
                  <div className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark mb-2">
                    Expertise {service.id}
                  </div>
                  <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-night-50 leading-tight">
                    {service.title}
                  </h1>
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.15} duration={0.5}>
              <p className="font-display font-semibold text-lg sm:text-xl text-brand-orange-dark mb-4 max-w-3xl">
                {service.subtitle}
              </p>
            </BlurFade>

            <BlurFade delay={0.2} duration={0.5}>
              <p className="text-night-200 text-base sm:text-lg leading-[1.75] max-w-3xl mb-8">
                {service.detail.intro}
              </p>
            </BlurFade>

            <BlurFade delay={0.25} duration={0.5}>
              <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
                <Link href="/contact"
                  className="group/cta inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-orange text-white font-display font-bold tracking-wide uppercase text-sm rounded-lg shadow-soft hover:bg-brand-orange-dark hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                >
                  Demander une étude
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-night-800 border border-night-600 text-night-100 font-display font-bold tracking-wide uppercase text-sm rounded-lg hover:border-brand-orange/50 hover:text-brand-orange transition-all duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M12 7H2M6 3L2 7L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Nos expertises
                </Link>
              </div>
            </BlurFade>

            <BlurFade delay={0.3} duration={0.5}>
              <div className="flex flex-wrap gap-2 mt-8">
                {service.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[0.62rem] tracking-wider uppercase px-3 py-1.5 bg-night-850 text-night-300 border border-night-700 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </BlurFade>
          </div>
        </section>

        {/* ── Notre accompagnement ── */}
        <section className="py-14 bg-night-850 border-y border-night-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Notre accompagnement" items={service.detail.accompagnement} />
          </div>
        </section>

        {/* ── Prestations couvertes ── */}
        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Prestations couvertes" items={service.detail.prestations} />
          </div>
        </section>

        {/* ── Livrables possibles ── */}
        <section className="py-14 bg-night-850 border-y border-night-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Livrables possibles" items={service.detail.livrables} />
          </div>
        </section>

        {/* ── Enjeux techniques ── */}
        <section className="py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Enjeux techniques" items={service.detail.enjeux} />
          </div>
        </section>

        {/* ── Types de projets ── */}
        <section className="py-14 bg-night-850 border-y border-night-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <NumberedCardGrid eyebrow="Types de projets" items={service.detail.projets} />
          </div>
        </section>

        {/* ── Autres expertises ── */}
        <section className="py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade delay={0} inView duration={0.5}>
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="block w-5 h-[1.5px] bg-brand-orange" />
                <span className="font-mono text-xs tracking-widest uppercase text-brand-orange-dark">
                  Autres expertises OSARIS
                </span>
              </div>
            </BlurFade>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {others.map((o, i) => {
                const OIcon = iconComponents[o.iconKey];
                return (
                  <BlurFade key={o.slug} delay={i * 0.05} inView duration={0.4}>
                    <Link
                      href={`/services/${o.slug}`}
                      className="group flex items-center gap-3 p-4 bg-night-800 border border-night-700 rounded-xl shadow-soft hover:shadow-card hover:border-brand-orange/30 hover:-translate-y-0.5 transition-all duration-300 h-full"
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-night-850 border border-night-700 text-night-300 group-hover:text-brand-orange group-hover:border-brand-orange/30 transition-all duration-300 flex-shrink-0">
                        <OIcon className="w-6 h-6" />
                      </span>
                      <span className="font-display font-bold text-sm text-night-100 group-hover:text-night-50 transition-colors leading-tight">
                        {o.shortTitle}
                      </span>
                    </Link>
                  </BlurFade>
                );
              })}
            </div>

            {/* CTA final */}
            <BlurFade delay={0.1} inView duration={0.5}>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-night-850 border border-night-700 rounded-2xl shadow-card">
                <div>
                  <h2 className="font-display font-bold text-xl text-night-50 mb-1.5">
                    Un projet en {service.shortTitle.toLowerCase()} ?
                  </h2>
                  <p className="text-night-200 text-sm">
                    Parlons-en. Réponse sous 48h.
                  </p>
                </div>
                <Link href="/contact"
                  className="group/cta inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-orange text-white font-display font-bold tracking-wide uppercase text-sm rounded-lg shadow-soft hover:bg-brand-orange-dark hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
                >
                  Nous contacter
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
                    <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </BlurFade>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
