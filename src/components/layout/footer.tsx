const navItems = [
  { label: "Services",      href: "#services" },
  { label: "Références",     href: "#references" },
  { label: "Méthodologie",   href: "#methodologie" },
  { label: "À propos",       href: "#apropos" },
  { label: "Contact",        href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night-850 border-t border-night-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Identité */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7 flex-shrink-0" aria-hidden="true">
                <div className="absolute inset-0 border-[2px] border-brand-orange rounded-[5px]" />
                <div className="absolute inset-[5px] border-[1.5px] border-brand-orange rounded-[1.5px] bg-night-900" />
              </div>
              <div className="font-display font-bold text-lg text-brand-orange tracking-wide">
                OSARIS Ingénierie · SAS
              </div>
            </div>
            <p className="font-mono text-[0.62rem] text-night-300 leading-relaxed">
              Bureau d'études techniques indépendant<br />
              Fluides · Énergie · Thermique · Génie électrique<br />
              Fondé en 2016<br />
              SIREN : 818 166 373
            </p>
          </div>

          {/* Coordonnées */}
          <div>
            <div className="font-mono text-[0.6rem] tracking-widest uppercase text-night-300 mb-4">
              Coordonnées
            </div>
            <address className="not-italic space-y-2 font-mono text-[0.65rem] text-night-200">
              <div>18 rue Pierre Dubois, 59500 Douai</div>
              <a href="tel:+33652193807" className="block hover:text-brand-orange transition-colors">
                (+33) 06 52 19 38 07
              </a>
              <a href="mailto:contact@osaris-ingenierie.com" className="block hover:text-brand-orange transition-colors">
                contact@osaris-ingenierie.com
              </a>
              <a href="https://www.osaris-ingenierie.com" className="block hover:text-brand-orange transition-colors">
                www.osaris-ingenierie.com
              </a>
            </address>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-mono text-[0.6rem] tracking-widest uppercase text-night-300 mb-4">
              Navigation
            </div>
            <nav aria-label="Pied de page" className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-[0.65rem] text-night-300 hover:text-brand-orange transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Informations légales & assurance */}
        <div className="border-t border-night-700/40 pt-6 mb-6">
          <div className="font-mono text-[0.6rem] tracking-widest uppercase text-night-300 mb-3">
            Informations légales &amp; assurance
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 font-mono text-[0.6rem] text-night-300 leading-relaxed">
            <p>
              <span className="text-night-200">OSARIS Ingénierie SAS</span> — SIREN : 818 166 373<br />
              Bureau d'études techniques · 18 rue Pierre Dubois, 59500 Douai
            </p>
            <p>
              <span className="text-night-200">Assurance : EUROMAF SA</span> — Assurance des Ingénieurs et Architectes européens<br />
              Contrat n° 7010657/S · Attestation n° 20262004012 · RC professionnelle et décennale selon activités assurées
            </p>
          </div>
        </div>

        <div className="border-t border-night-700/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="font-mono text-[0.58rem] text-night-400">
            © {year} OSARIS Ingénierie SAS — Tous droits réservés
          </div>
          <div className="font-mono text-[0.58rem] text-night-400">
            Bureau d'études · Hauts-de-France · France &amp; International
          </div>
        </div>
      </div>
    </footer>
  );
}
