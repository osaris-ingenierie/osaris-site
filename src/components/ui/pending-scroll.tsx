"use client";

import { useEffect } from "react";
import { scrollToSection, PENDING_SCROLL_KEY } from "@/lib/use-section-nav";

/** Au chargement de la home, exécute un éventuel scroll mémorisé (navigation inter-pages). */
export function PendingScroll() {
  useEffect(() => {
    let id: string | null = null;
    try {
      id = sessionStorage.getItem(PENDING_SCROLL_KEY);
      if (id) sessionStorage.removeItem(PENDING_SCROLL_KEY);
    } catch {
      /* ignore */
    }
    if (id) {
      // Laisser le temps au layout de se stabiliser avant de scroller
      const t = setTimeout(() => scrollToSection(id as string), 120);
      return () => clearTimeout(t);
    }
  }, []);

  return null;
}
