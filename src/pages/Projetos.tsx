import content from "../data/content.json";
import { FlowDiagram } from "../components/FlowDiagram";

interface Proj {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  flow: string[];
  resource: string | null;
  repoPublic: boolean;
}

// Ordem curada dos projetos profissionais (mais forte/recente primeiro).
// ponytail: ordem fixa aqui — é um portfólio pessoal, não vale um campo de peso
// por concept. Ajustar a lista quando entrar/sair projeto.
const ORDEM = [
  "saas-oep-plataforma",
  "crm-proprio-captacao",
  "tutoria-risco-poc",
  "fin7",
  "gerente-sustentavel",
  "elvirabe-totvs-sync-function",
];
const ESTUDO = new Set([
  "datathon-passos-magicos-ml",
  "ibge-socioeconomico-elvira-brandao",
  "pnad-covid19",
]);

function ordenar(projetos: Proj[]): { destaque: Proj[]; estudo: Proj[] } {
  const bySlug = new Map(projetos.map((p) => [p.slug, p]));
  const destaque: Proj[] = [];
  ORDEM.forEach((slug) => {
    const p = bySlug.get(slug);
    if (p) destaque.push(p);
  });
  // qualquer profissional não listado explicitamente entra no fim do destaque
  projetos.forEach((p) => {
    if (!ORDEM.includes(p.slug) && !ESTUDO.has(p.slug)) destaque.push(p);
  });
  const estudo = projetos.filter((p) => ESTUDO.has(p.slug));
  return { destaque, estudo };
}

function Card({ p }: { p: Proj }) {
  return (
    <article>
      <h2 className="font-display text-2xl mb-2">{p.title}</h2>
      <p className="text-muted leading-relaxed max-w-[60ch] mb-4">
        {p.description}
      </p>
      {p.highlights.length > 0 && (
        <ul className="list-disc pl-5 marker:text-muted flex flex-col gap-1.5 mb-2">
          {p.highlights.map((h, i) => (
            <li key={i} className="text-sm text-ink pl-1">
              {h}
            </li>
          ))}
        </ul>
      )}
      <FlowDiagram steps={p.flow} />
      {p.repoPublic && p.resource && (
        <a
          href={p.resource}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-5 text-sm text-ink border-b border-line hover:border-accent pb-0.5"
        >
          Ver repositório
        </a>
      )}
    </article>
  );
}

export function Projetos() {
  const { destaque, estudo } = ordenar(content.projetos as Proj[]);

  return (
    <section>
      <p className="eyebrow mb-4">Projetos</p>
      <h1 className="font-display text-4xl tracking-tight mb-12">
        O que já construí
      </h1>

      <div className="flex flex-col gap-16">
        {destaque.map((p) => (
          <Card key={p.slug} p={p} />
        ))}
      </div>

      {estudo.length > 0 && (
        <>
          <h2 className="eyebrow mt-20 mb-8 pb-2 border-b border-line">
            Projetos de estudo
          </h2>
          <div className="flex flex-col gap-16">
            {estudo.map((p) => (
              <Card key={p.slug} p={p} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
