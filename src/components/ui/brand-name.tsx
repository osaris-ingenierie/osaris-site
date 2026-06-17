import { cn } from "@/lib/utils";

interface BrandNameProps {
  className?: string;
}

/**
 * Affiche "OSARIS Ingénierie" avec la police et le coloris du logo.
 * À utiliser chaque fois que la marque est citée dans le corps de page.
 */
export function BrandName({ className }: BrandNameProps) {
  return (
    <span
      className={cn(
        "font-display font-bold text-brand-orange tracking-wide",
        className
      )}
    >
      OSARIS Ingénierie
    </span>
  );
}
