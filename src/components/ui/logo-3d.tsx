"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Logo OSARIS pseudo-3D — 100 % SVG/CSS, zéro dépendance.
 *
 * - Glyphe « O » d'OSARIS extrudé en fausse 3D (faces empilées + arête latérale).
 * - Parallaxe douce qui suit la souris (rotateX / rotateY via transform 3D).
 * - Légère rotation flottante au repos.
 * - Respecte prefers-reduced-motion : rendu statique, aucune animation.
 * - Aucune charge réseau, aucun WebGL, fonctionne partout (mobile inclus).
 */
export function Logo3D({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Pas d'interaction au pointeur sur écrans tactiles (pas de hover fiable)
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (reduced || !finePointer) return;

    setInteractive(true);
    const wrap = wrapRef.current;
    const scene = sceneRef.current;
    if (!wrap || !scene) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      // Décalage normalisé [-1, 1]
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      const rotY = clamp(dx) * 16; // amplitude horizontale
      const rotX = clamp(-dy) * 12; // amplitude verticale
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        scene.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      scene.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`logo3d-wrap ${className ?? ""}`}
      aria-hidden="true"
    >
      <div
        ref={sceneRef}
        className={`logo3d-scene ${interactive ? "" : "logo3d-float"}`}
      >
        {/* Profondeur : copies empilées du glyphe pour l'effet extrudé */}
        <div className="logo3d-depth">
          {Array.from({ length: 7 }).map((_, i) => (
            <Glyph key={i} layer={i} />
          ))}
        </div>
        {/* Face avant nette */}
        <div className="logo3d-face">
          <Glyph front />
        </div>
      </div>
    </div>
  );
}

function Glyph({ layer = 0, front = false }: { layer?: number; front?: boolean }) {
  // Le glyphe "O" d'OSARIS : carré arrondi évidé d'un carré arrondi intérieur.
  return (
    <svg viewBox="0 0 120 120" className={front ? "logo3d-glyph-front" : "logo3d-glyph-depth"}>
      <defs>
        {front && (
          <linearGradient id="osarisFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF8533" />
            <stop offset="55%" stopColor="#FF6600" />
            <stop offset="100%" stopColor="#E25800" />
          </linearGradient>
        )}
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12 H96 a12 12 0 0 1 12 12 V96 a12 12 0 0 1 -12 12 H24 a12 12 0 0 1 -12 -12 V24 a12 12 0 0 1 12 -12 Z
           M44 40 a6 6 0 0 0 -6 6 V74 a6 6 0 0 0 6 6 H76 a6 6 0 0 0 6 -6 V46 a6 6 0 0 0 -6 -6 Z"
        fill={front ? "url(#osarisFace)" : "#C04A00"}
        style={!front ? { opacity: 0.5 - layer * 0.04 } : undefined}
      />
    </svg>
  );
}
