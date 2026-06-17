"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

const PENDING_KEY = "osaris:pendingScroll";

/** Scroll fluide vers une section, sans modifier l'URL (pas d'ancre #). */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Hook de navigation par section.
 * - Sur la page d'accueil : scroll direct, sans toucher l'URL.
 * - Depuis une page secondaire : navigue vers "/" et mémorise la cible
 *   (sessionStorage) ; le scroll se fait au chargement de la home, sans ancre.
 */
export function useSectionNav() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (id: string) => {
      if (pathname === "/") {
        scrollToSection(id);
      } else {
        try {
          sessionStorage.setItem(PENDING_KEY, id);
        } catch {
          /* sessionStorage indisponible : navigation simple */
        }
        router.push("/");
      }
    },
    [pathname, router]
  );
}

export const PENDING_SCROLL_KEY = PENDING_KEY;
