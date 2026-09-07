import Image from "next/image";
import { whatsappUrl } from "@/lib/utils";

export function Hero() {
  return (
    <section
      data-header-theme="dark"
      className="relative overflow-hidden bg-grafite text-marfim"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-10%] h-105 w-105 rounded-full bg-dourado/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-80 w-80 rounded-full bg-bronze/20 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center md:py-36">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-wide text-dourado">
            Desenvolvimento web &amp; sistemas sob medida
          </p>
          <h1 className="font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Tecnologia sob medida pra quem não tem tempo de entender de
            tecnologia.
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-marfim/70">
            Landing pages, sites institucionais, páginas de links e sistemas
            sob medida, pra você que é autônomo ou toca um comércio local e
            precisa de uma presença digital que funciona, sem termo técnico e
            sem enrolação.
          </p>

          <div className="mt-10 flex flex-col items-start gap-3">
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
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm py-8">
          <div className="relative">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 scale-110 rounded-4xl bg-dourado/25 blur-3xl"
            />
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl ring-1 ring-dourado/30">
              <Image
                src="/images/nathan-hero.jpg"
                alt="Nathan Nolácio"
                fill
                sizes="(min-width: 768px) 384px, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-full border border-marfim/15 bg-marfim/10 px-5 py-3 text-marfim shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <span className="relative flex h-2 w-2 flex-none">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-sm font-medium">
              Disponível para novos projetos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
