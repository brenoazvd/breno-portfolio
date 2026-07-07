import content from "../data/content.json";

interface Exp {
  slug: string;
  title: string;
  description: string;
  start: string | null;
  end: string | null;
  tags: string[];
}

const MESES = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez",
];

// "2025-05" -> "mai 2025"; "present" -> "atual"; null -> ""
function fmt(d: string | null): string {
  if (!d) return "";
  if (d === "present") return "atual";
  const [y, m] = d.split("-");
  const mi = Number(m) - 1;
  return m && mi >= 0 && mi < 12 ? `${MESES[mi]} ${y}` : y;
}

// Ordena decrescente por início; cargos atuais (end=present) sobem para o topo,
// e entre eles o de início mais recente vem primeiro.
function sortDesc(a: Exp, b: Exp): number {
  const key = (e: Exp) =>
    (e.end === "present" ? "9999-" : "0000-") + (e.start ?? "0000-00");
  return key(b).localeCompare(key(a));
}

export function Sobre() {
  const exps = ([...content.experiencias] as Exp[])
    .filter((e) => e.start)
    .sort(sortDesc);

  return (
    <section>
      <p className="eyebrow mb-4">Sobre</p>
      <h1 className="font-display text-4xl tracking-tight mb-12">Trajetória</h1>

      <ol className="relative border-l border-line ml-2">
        {exps.map((e) => {
          const atual = e.end === "present";
          return (
            <li key={e.slug} className="relative pl-8 pb-10 last:pb-0">
              {/* marcador */}
              <span
                className={
                  "absolute -left-[6.5px] top-1.5 w-3 h-3 rounded-full border-2 " +
                  (atual
                    ? "bg-accent border-accent"
                    : "bg-ground border-line")
                }
                aria-hidden="true"
              />
              <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                <time className="eyebrow tabular-nums">
                  {fmt(e.start)} – {fmt(e.end)}
                </time>
                {atual && (
                  <span className="text-[10px] uppercase tracking-wider text-accent border border-accent rounded-full px-2 py-0.5">
                    atual
                  </span>
                )}
              </div>
              <h2 className="font-display text-xl mb-1">{e.title}</h2>
              <p className="text-muted leading-relaxed max-w-[60ch]">
                {e.description}
              </p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
