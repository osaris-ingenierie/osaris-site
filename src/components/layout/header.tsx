"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/references", label: "Références" },
  { href: "/methodologie", label: "Méthodologie" },
  { href: "/guides-techniques", label: "Guides techniques" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-night-900/95 backdrop-blur-md border-b border-night-700 shadow-soft" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled ? "h-14 lg:h-[4.5rem]" : "h-16 lg:h-[5.5rem]"
        )}>

          <Link href="/" className="logo-anim flex items-center gap-3 group shrink-0" aria-label="OSARIS Ingénierie — accueil">
            <div className="logo-glyph relative w-7 h-7 flex-shrink-0">
              <div className="absolute inset-0 border-[2px] border-brand-orange rounded-[5px]" />
              <div className="absolute inset-[5px] border-[1.5px] border-brand-orange rounded-[1.5px] bg-night-900" />
              <span className="logo-shine" aria-hidden="true" />
            </div>
            <div className="font-display font-bold text-lg text-brand-orange tracking-wide whitespace-nowrap">
              OSARIS Ingénierie
              <span className="text-[0.6em] font-medium text-brand-orange/70 align-baseline ml-1">· SAS</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9 mx-auto pl-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative font-mono text-[0.7rem] tracking-[0.14em] uppercase text-night-200 hover:text-night-50 transition-colors duration-200 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5 shrink-0">
            <a href="tel:+33652193807" className="hidden lg:inline-flex items-center gap-2 text-night-200 hover:text-brand-orange font-mono text-xs transition-colors">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 2.5C2 2.5 3.5 1 5 2.5L6.5 4C7.5 5 6 6 6 6C6 6 8 8 8 8C8 8 9 6.5 10 7.5L11.5 9C13 10.5 11.5 12 11.5 12C11.5 12 2 10 2 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              06 52 19 38 07
            </a>
            <span className="hidden lg:block w-px h-5 bg-night-600" aria-hidden="true" />
            <Link href="/contact" className="group/cta hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-orange text-white font-display font-bold text-sm tracking-wide uppercase rounded-lg shadow-soft hover:bg-brand-orange-dark hover:shadow-card hover:-translate-y-0.5 transition-all duration-200">
              Demander une étude
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="transition-transform duration-200 group-hover/cta:translate-x-1">
                <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button className="lg:hidden p-2 text-night-200 hover:text-night-50 transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" aria-expanded={menuOpen}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                {menuOpen ? (
                  <><line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
                ) : (
                  <><line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><line x1="3" y1="13" x2="19" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></>
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-night-700 py-5 bg-night-900/95 backdrop-blur-md">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="font-mono text-xs tracking-widest uppercase text-night-200 hover:text-brand-orange hover:bg-night-850 rounded-md py-3 px-3 transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
              <a href="tel:+33652193807" className="flex items-center gap-2 font-mono text-xs text-night-200 hover:text-brand-orange py-3 px-3 transition-colors">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2.5C2 2.5 3.5 1 5 2.5L6.5 4C7.5 5 6 6 6 6C6 6 8 8 8 8C8 8 9 6.5 10 7.5L11.5 9C13 10.5 11.5 12 11.5 12C11.5 12 2 10 2 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                06 52 19 38 07
              </a>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-orange text-white font-display font-bold text-sm tracking-wide uppercase rounded-lg shadow-soft">
                Demander une étude
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
