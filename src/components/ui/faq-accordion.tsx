"use client";

import { useState } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import type { FaqItem } from "@/lib/guides-data";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <BlurFade key={i} delay={i * 0.04} inView duration={0.4}>
            <div className="bg-night-800 border border-night-700 rounded-xl shadow-soft overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 p-5 text-left group"
              >
                <span className="font-display font-bold text-base text-night-100 group-hover:text-brand-orange transition-colors">
                  {item.q}
                </span>
                <span className={`flex-shrink-0 text-brand-orange transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <line x1="9" y1="3" x2="9" y2="15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="3" y1="9" x2="15" y2="9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-night-200 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        );
      })}
    </div>
  );
}
