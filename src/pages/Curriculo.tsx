import { useEffect } from "react";
import content from "../data/content.json";

// perfil vem de perfil/perfil.yaml (fonte verbatim RenderCV) via build-content.mjs.
type Highlight = string;
interface ExpItem {
  company?: string;
  position?: string;
  location?: string;
  start_date?: string;
  end_date?: string;
  highlights?: Highlight[];
}
interface EduItem {
  institution?: string;
  area?: string;
  degree?: string;
  start_date?: string;
  end_date?: string;
  highlights?: Highlight[];
}
interface SkillItem {
  label?: string;
  details?: string;
}
interface LangItem {
  language?: string;
  fluency?: string;
}
const perfil = content.perfil as {
  name?: string;
  location?: string;
  email?: string;
  phone?: string;
  website?: string;
  sections?: {
    summary?: string[];
    experience?: ExpItem[];
    education?: EduItem[];
    skills?: SkillItem[];
    languages?: LangItem[];
    certifications?: { label?: string }[];
  };
} | null;

function fmtDate(d?: string) {
  if (!d) return "";
  if (d === "present") return "atual";
  return d; // já vem como YYYY-MM
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-8">
      <h2 className="eyebrow mb-4 pb-2 border-b border-line">{title}</h2>
      {children}
    </section>
  );
}

export function Curriculo() {
  // Título da aba = nome do PDF ao salvar / cabeçalho do print.
  useEffect(() => {
    const anterior = document.title;
    document.title = "Currículo — Breno Rodrigues Azevedo";
    return () => {
      document.title = anterior;
    };
  }, []);

  if (!perfil) {
    return (
      <section>
        <h1 className="font-display text-3xl">Currículo</h1>
        <p className="text-muted mt-4">
          perfil/perfil.yaml não encontrado. Rode <code>npm run content</code>.
        </p>
      </section>
    );
  }

  const s = perfil.sections ?? {};

  return (
    <div className="cv-print">
      <div className="flex justify-between items-start mb-8 no-print">
        <p className="eyebrow">Currículo</p>
        <button
          type="button"
          onClick={() => window.print()}
          className="text-sm text-ink border-b border-line hover:border-accent pb-1"
        >
          Exportar PDF
        </button>
      </div>

      <header className="mb-10">
        <h1 className="font-display text-4xl tracking-tight mb-2">{perfil.name}</h1>
        <p className="text-sm text-muted">
          {[perfil.location, perfil.email, perfil.phone]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <p className="text-sm text-muted mt-1">
          Portfólio:{" "}
          <a
            href="https://brenoazvd.github.io/breno-portfolio/"
            className="border-b border-line hover:border-accent"
          >
            brenoazvd.github.io/breno-portfolio
          </a>
        </p>
      </header>

      {s.summary?.length ? (
        <Section title="Resumo">
          {s.summary.map((p, i) => (
            <p key={i} className="text-ink leading-relaxed max-w-[65ch]">
              {p}
            </p>
          ))}
        </Section>
      ) : null}

      {s.experience?.length ? (
        <Section title="Experiência">
          <div className="flex flex-col gap-6">
            {s.experience.map((e, i) => (
              <article key={i}>
                <div className="flex justify-between items-baseline gap-4 flex-wrap">
                  <h3 className="font-medium text-ink">{e.position}</h3>
                  <span className="text-sm text-muted tabular-nums whitespace-nowrap">
                    {fmtDate(e.start_date)} – {fmtDate(e.end_date)}
                  </span>
                </div>
                <p className="text-sm text-muted mb-2">{e.company}</p>
                <ul className="list-disc pl-5 marker:text-muted flex flex-col gap-1.5">
                  {e.highlights?.map((h, j) => (
                    <li key={j} className="text-sm text-ink leading-relaxed pl-1">
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {s.education?.length ? (
        <Section title="Formação">
          <div className="flex flex-col gap-5">
            {s.education.map((e, i) => (
              <article key={i}>
                <div className="flex justify-between items-baseline gap-4 flex-wrap">
                  <h3 className="font-medium text-ink">
                    {e.degree} · {e.area}
                  </h3>
                  <span className="text-sm text-muted tabular-nums whitespace-nowrap">
                    {fmtDate(e.start_date)} – {fmtDate(e.end_date)}
                  </span>
                </div>
                <p className="text-sm text-muted">{e.institution}</p>
              </article>
            ))}
          </div>
        </Section>
      ) : null}

      {s.skills?.length ? (
        <Section title="Competências">
          <div className="flex flex-col gap-2">
            {s.skills.map((sk, i) => (
              <p key={i} className="text-sm">
                <span className="text-ink font-medium">{sk.label}: </span>
                <span className="text-muted">{sk.details}</span>
              </p>
            ))}
          </div>
        </Section>
      ) : null}

      {s.languages?.length ? (
        <Section title="Idiomas">
          <p className="text-sm text-muted">
            {s.languages.map((l) => `${l.language} (${l.fluency})`).join(" · ")}
          </p>
        </Section>
      ) : null}

      {s.certifications?.length ? (
        <Section title="Certificações">
          <ul className="flex flex-col gap-1">
            {s.certifications.map((c, i) => (
              <li key={i} className="text-sm text-muted">
                {c.label}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </div>
  );
}
