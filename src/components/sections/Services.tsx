import { Cog, Globe, LayoutTemplate, Link2 } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Uma página única e direta ao ponto, feita pra vender um produto, serviço ou infoproduto. Pra quem já sabe o que quer divulgar e precisa transformar visita em cliente.",
    message:
      "Oi Nathan! Vim pelo site e quero um orçamento para uma Landing Page.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Um site completo pra apresentar seu negócio, seus serviços e conquistar confiança. Pra quem quer presença digital além das redes sociais.",
    message:
      "Oi Nathan! Vim pelo site e quero um orçamento para um Site Institucional.",
  },
  {
    icon: Link2,
    title: "Páginas de Links",
    description:
      "Todos os seus links importantes reunidos em um só lugar — WhatsApp, Instagram, catálogo. Pra quem já vive nas redes e precisa organizar o contato na bio.",
    message:
      "Oi Nathan! Vim pelo site e quero um orçamento para uma Página de Links.",
  },
  {
    icon: Cog,
    title: "Sistemas Sob Medida",
    description:
      "Uma ferramenta pensada especificamente pra resolver uma necessidade do seu negócio, como agendamento ou controle de clientes. Pra quem não encontrou nada pronto que se encaixasse.",
    message:
      "Oi Nathan! Vim pelo site e quero um orçamento para um Sistema Sob Medida.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      data-header-theme="light"
      className="bg-marfim text-grafite"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-6 text-xs font-medium uppercase tracking-wide text-bronze">
          Serviços
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          O que eu construo pra você.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="glow-card rounded-2xl border border-grafite/10 p-0.5"
            >
              <div className="glow-card-inner rounded-[calc(1rem-2px)] bg-white p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-dourado/10 text-dourado">
                  <service.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-grafite/70">
                  {service.description}
                </p>
                <a
                  href={whatsappUrl(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-dourado hover:underline"
                >
                  Quero um orçamento
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
