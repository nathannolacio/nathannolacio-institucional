import { CONTACT_EMAIL, whatsappUrl } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-grafite text-marfim"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 h-105 w-105 -translate-x-1/2 rounded-full bg-dourado/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center md:py-36">
        <p className="mb-6 text-xs font-medium uppercase tracking-wide text-dourado">
          Contato
        </p>
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Vamos tirar sua ideia do papel?
        </h2>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-marfim/70">
          Me chama no WhatsApp e me conta o que você precisa.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={whatsappUrl(
              "Oi Nathan! Vim pelo site e quero saber mais sobre os seus serviços.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-dourado px-7 py-3.5 text-sm font-medium text-grafite shadow-[0_0_40px_-8px_rgba(180,145,90,0.6)] transition hover:shadow-[0_0_55px_-6px_rgba(180,145,90,0.75)]"
          >
            Falar no WhatsApp
            <span aria-hidden>→</span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-marfim/60 underline underline-offset-4 transition hover:text-dourado"
          >
            ou me manda um e-mail: {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
