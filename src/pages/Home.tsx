import { Link } from "react-router-dom";

const COMPETENCIAS = [
  "Pipelines ETL",
  "Modelagem de banco de dados (Azure SQL)",
  "Azure (Functions, SQL, cloud)",
  "Hospedagem e deploy em VPS (Docker, nginx, CI/CD)",
  "Criação de agentes de IA e servidores MCP",
  "Machine learning aplicado",
  "Dashboards e BI (Power BI)",
];

export function Home() {
  return (
    <section>
      <img
        src="./breno.jpg"
        alt="Breno Rodrigues Azevedo"
        width={96}
        height={96}
        className="w-24 h-24 rounded-full object-cover mb-8 border border-line"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <p className="eyebrow mb-8">Breno Rodrigues Azevedo</p>
      <h1 className="font-display text-5xl leading-[1.08] tracking-tight text-balance mb-6">
        Analista de dados que constrói o pipeline e o sistema em cima dele.
      </h1>
      <p className="text-lg text-muted leading-relaxed max-w-[54ch] mb-6 font-light">
        Modelo o banco, escrevo os pipelines ETL no Azure e faço o deploy da
        aplicação na VPS. Também construo automações, agentes de IA (servidores
        MCP, skills para coding agents) e os painéis que a diretoria usa para
        decidir. Analista de dados pleno no Grupo OEP, onde criei o Hub de
        Inovação junto com um parceiro e hoje desenvolvo os sistemas internos em
        FastAPI, React e TypeScript. Fundador da Lumra Insights.
      </p>

      <ul className="list-disc pl-5 marker:text-muted flex flex-col gap-1.5 mb-10 pt-6 border-t border-line max-w-[54ch]">
        {COMPETENCIAS.map((c) => (
          <li key={c} className="text-sm text-ink leading-relaxed pl-1">
            {c}
          </li>
        ))}
      </ul>

      <div className="flex gap-6 text-sm">
        <Link to="/projetos" className="text-ink border-b border-line hover:border-accent pb-1">
          Ver projetos
        </Link>
        <Link to="/cv" className="text-ink border-b border-line hover:border-accent pb-1">
          Currículo
        </Link>
      </div>
    </section>
  );
}
