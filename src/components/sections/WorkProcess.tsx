const steps = [
  {
    number: "01",
    title: "Contato",
    description: "Você me chama no WhatsApp ou pede um orçamento pelo site.",
  },
  {
    number: "02",
    title: "Proposta",
    description:
      "Entendo sua necessidade e te devolvo uma proposta clara, sem letra miúda.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description: "Construo o projeto, te atualizando sobre o progresso.",
  },
  {
    number: "04",
    title: "Ajustes",
    description:
      "Você recebe uma versão quase final e pede os ajustes que achar necessário.",
  },
  {
    number: "05",
    title: "Entrega",
    description: "Coloco o projeto no ar.",
  },
  {
    number: "06",
    title: "Suporte",
    description:
      "2 meses de manutenção grátis. Depois disso, qualquer ajuste segue com orçamento à parte.",
  },
];

export function WorkProcess() {
  return (
    <section
      id="processo"
      data-header-theme="light"
      className="bg-marfim text-grafite"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-6 text-xs font-medium uppercase tracking-wide text-bronze">
          Passo a passo
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Como eu trabalho
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-marfim font-display text-sm text-dourado ring-1 ring-dourado/40">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-lg font-medium">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grafite/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
