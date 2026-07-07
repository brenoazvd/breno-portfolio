// Diagrama de fluxo simples: nós em sequência ligados por setas.
// Dados vêm da seção "# Fluxo" dos concepts (notação A -> B -> C).
export function FlowDiagram({ steps }: { steps: string[] }) {
  if (!steps.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-3 mt-5" aria-label="Fluxo do projeto">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-xs px-3 py-1.5 rounded-md border border-line text-ink whitespace-nowrap">
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="text-accent select-none" aria-hidden="true">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
