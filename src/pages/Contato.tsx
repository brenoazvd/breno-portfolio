export function Contato() {
  return (
    <section>
      <p className="eyebrow mb-4">Contato</p>
      <h1 className="font-display text-4xl tracking-tight mb-8">
        Vamos conversar
      </h1>
      <div className="flex flex-col gap-3">
        <a
          href="mailto:brenorazevedo@gmail.com"
          className="text-lg text-ink border-b border-line hover:border-accent pb-1 w-fit"
        >
          brenorazevedo@gmail.com
        </a>
        <a
          href="tel:+5511998868176"
          className="text-lg text-ink border-b border-line hover:border-accent pb-1 w-fit"
        >
          +55 11 99886-8176
        </a>
      </div>
    </section>
  );
}
