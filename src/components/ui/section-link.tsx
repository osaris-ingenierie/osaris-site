"use client";

import { useSectionNav } from "@/lib/use-section-nav";

interface SectionLinkProps {
  section: string;
  className?: string;
  children: React.ReactNode;
}

/**
 * Lien vers une section de la page d'accueil, sans ancre dans l'URL.
 * Utilisable dans les Server Components (pages services / guides).
 * Sur la home : scroll direct. Ailleurs : navigation vers / puis scroll.
 */
export function SectionLink({ section, className, children }: SectionLinkProps) {
  const navigateToSection = useSectionNav();
  return (
    <button type="button" onClick={() => navigateToSection(section)} className={className}>
      {children}
    </button>
  );
}
