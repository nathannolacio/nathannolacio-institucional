function ToggleIcon() {
  return (
    <span
      aria-hidden
      className="mb-5 inline-flex h-5 w-9 items-center rounded-full bg-marfim/10 ring-1 ring-marfim/15"
    >
      <span className="ml-0.5 h-3.5 w-3.5 rounded-full bg-dourado shadow-[0_0_10px_2px_rgba(180,145,90,0.7)]" />
    </span>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-marfim/10 bg-marfim/5 p-7">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-dourado/20 blur-[60px]"
      />
      <div className="relative">
        <ToggleIcon />
        <h3 className="font-display text-lg font-medium">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-marfim/70">
          {children}
        </p>
      </div>
    </div>
  );
}

export function Differentiators() {
  return (
    <section
      id="diferenciais"
      data-header-theme="dark"
      className="relative overflow-hidden bg-grafite text-marfim"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-105 -translate-x-1/2 rounded-full bg-dourado/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-6 text-xs font-medium uppercase tracking-wide text-dourado">
          Diferenciais
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          O que muda quando você fecha comigo.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-marfim/70">
          São coisas simples, mas que fazem toda diferença no dia a dia de
          quem contrata: menos burocracia, mais clareza e a garantia de que
          você não vai ficar na mão depois que o projeto sai do ar.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card title="Atendimento direto">
            Quem fala com você sobre o seu projeto é a mesma pessoa que
            constrói ele, sempre eu, do primeiro contato até a entrega
            final.{" "}
            <span className="font-medium text-dourado">
              Sem atendente, sem gerente de conta
            </span>
            , sem fila de espera pra alguém te responder.
          </Card>
          <Card title="Sem jargão técnico">
            Você não precisa entender nada de tecnologia pra confiar no
            resultado. Explico cada etapa em português claro e deixo você{" "}
            <span className="font-medium text-dourado">
              confortável usando
            </span>{" "}
            o que foi entregue, sem depender de mim pra tudo.
          </Card>
          <Card title="2 meses de manutenção grátis">
            Imprevisto acontece, e por isso todo projeto sai com 2 meses de
            manutenção grátis. Se aparecer algum bug ou problema nesse
            período, eu resolvo{" "}
            <span className="font-medium text-dourado">sem custo nenhum</span>{" "}
            pra você.
          </Card>
        </div>
      </div>
    </section>
  );
}
