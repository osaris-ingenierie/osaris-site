import { BlurFade } from "@/components/ui/blur-fade";

interface ResponsiveTableProps {
  caption?: string;
  headers: string[];
  rows: string[][];
  note?: string;
  /** Index des colonnes alignées à droite (ex. puissance). */
  rightAlign?: number[];
}

/**
 * Tableau technique responsive : scroll horizontal sur mobile,
 * en-têtes en orange sobre, lignes alternées, note indicative en pied.
 */
export function ResponsiveTable({ caption, headers, rows, note, rightAlign = [] }: ResponsiveTableProps) {
  return (
    <BlurFade inView duration={0.5}>
      <figure className="my-2">
        {caption && (
          <figcaption className="font-mono text-xs tracking-wider uppercase text-brand-orange-dark mb-3">
            {caption}
          </figcaption>
        )}
        <div className="overflow-x-auto rounded-xl border border-night-700 shadow-soft">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-night-850">
                {headers.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className={`font-display font-bold text-night-50 text-[0.82rem] px-4 py-3 border-b border-night-700 ${
                      rightAlign.includes(i) ? "text-right" : "text-left"
                    }`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 1 ? "bg-night-850/40" : "bg-night-800"}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`align-top px-4 py-3 border-b border-night-700/60 text-night-200 leading-relaxed ${
                        rightAlign.includes(ci) ? "text-right whitespace-nowrap font-mono text-[0.8rem]" : "text-left"
                      } ${ci === 0 ? "font-semibold text-night-100" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {note && (
          <p className="text-night-300 text-xs leading-relaxed mt-3 italic">{note}</p>
        )}
      </figure>
    </BlurFade>
  );
}
