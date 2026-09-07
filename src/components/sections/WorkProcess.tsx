const steps = [
  {
    number: "01",
    title: "Contato",
    description:
      "Você me chama no WhatsApp, direto pelo botão do site, e me conta em poucas palavras o que você precisa. Não tem formulário complicado nem burocracia, só uma conversa normal, como você falaria com qualquer pessoa.",
  },
  {
    number: "02",
    title: "Proposta",
    description:
      "Entendo o que o seu negócio realmente precisa e te devolvo uma proposta objetiva: o que vai ser feito, quanto tempo leva e quanto custa. Sem letra miúda e sem taxa escondida, você sabe exatamente no que está entrando antes de fechar.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Com tudo combinado, eu começo a construir o seu projeto de verdade. Você não fica no escuro esperando: te mantenho atualizado sobre o progresso em cada etapa importante, sem precisar ficar cobrando.",
  },
  {
    number: "04",
    title: "Ajustes",
    description:
      "Antes de qualquer coisa ir pro ar, você recebe uma versão quase pronta pra revisar com calma. Se algo não estiver do jeito que você imaginou, é só me falar que eu ajusto o que for preciso até ficar certo.",
  },
  {
    number: "05",
    title: "Entrega",
    description:
      "Com tudo aprovado por você, coloco o projeto no ar oficialmente. É o momento em que o seu negócio ganha uma presença digital de verdade, pronta pra ser usada.",
  },
  {
    number: "06",
    title: "Suporte",
    description:
      "Mesmo depois de tudo pronto, eu continuo por perto: você tem 2 meses de manutenção grátis pra qualquer imprevisto que aparecer. Depois desse período, qualquer ajuste novo segue com orçamento à parte, combinado com você antes.",
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
        <p className="mt-6 max-w-xl text-base leading-relaxed text-grafite/70">
          Nada de fórmula mágica ou processo engessado. São seis etapas
          simples, pensadas pra você saber exatamente em que pé o seu
          projeto está, do primeiro &ldquo;oi&rdquo; até o site no ar.
        </p>

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
