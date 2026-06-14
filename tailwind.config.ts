import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
      },
      colors: {
        /*
         * THÈME CLAIR PREMIUM — accent ORANGE (couleur du logo OSARIS)
         * Le mot "fluides" du hero utilise un dégradé bleu dédié (.grad-fluides),
         * tous les autres accents reprennent l'orange de la marque.
         */
        brand: {
          orange: "#FF6600",        // orange logo OSARIS (accent principal)
          "orange-dark": "#CC5200", // orange foncé (hover)
          "orange-light": "#FF8533",// orange clair
        },
        /*
         * Échelle "night" INVERSÉE pour thème clair.
         * Les noms restent identiques ; seules les valeurs changent.
         *   night-50  = texte le plus foncé (titres bleu nuit)
         *   night-900 = fond le plus clair (blanc cassé)
         */
        night: {
          50:  "#15233A",  /* titres — bleu nuit profond */
          100: "#1E3151",  /* texte fort */
          200: "#3A4A63",  /* texte secondaire (anthracite bleuté) */
          300: "#5A6B82",  /* texte tertiaire */
          400: "#677488",  /* texte discret / placeholders — AA */
          500: "#AEB9C8",  /* bordures fortes */
          600: "#CDD6E1",  /* bordures normales */
          700: "#E1E7EF",  /* bordures fines / séparateurs */
          800: "#FFFFFF",  /* cartes / surfaces (blanc pur sur fond grisé) */
          850: "#F2F5F9",  /* blocs légèrement contrastés */
          900: "#F7F9FC",  /* fond principal — blanc cassé bleuté */
          950: "#EDF1F7",  /* fond alterné le plus clair */
        },
        /* Accent secondaire — cyan/vert énergie, usage parcimonieux */
        accent: {
          cyan: "#0E9BB5",
          energy: "#2BA66A",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,35,58,0.04), 0 4px 16px rgba(21,35,58,0.06)",
        "card-hover": "0 2px 4px rgba(21,35,58,0.06), 0 12px 32px rgba(21,35,58,0.10)",
        soft: "0 1px 3px rgba(21,35,58,0.05)",
      },
      keyframes: {
        "shimmer-slide": {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
        "spin-around": {
          "0%":          { transform: "translateZ(0) rotate(0)" },
          "15%, 35%":    { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%":    { transform: "translateZ(0) rotate(270deg)" },
          "100%":        { transform: "translateZ(0) rotate(360deg)" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around":   "spin-around calc(var(--speed) * 2) infinite linear",
        "fade-up":       "fade-up 0.6s ease-out forwards",
        "fade-in":       "fade-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
