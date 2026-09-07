import { Cog, Globe, LayoutTemplate, Link2 } from "lucide-react";
import { whatsappUrl } from "@/lib/utils";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Uma página única e direta ao ponto, pensada pra vender um produto, serviço ou infoproduto específico. Cada elemento ali (texto, botão, imagem) existe com um propósito: transformar quem visita em cliente. Ideal pra quem já sabe exatamente o que quer divulgar.",
    message:
      "Oi Nathan! Vim pelo site e quero um orçamento para uma Landing Page.",
  },
  {
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Um site completo pra apresentar o seu negócio, contar sua história e mostrar seus serviços com profissionalismo. Vai além do que uma rede social entrega: é um espaço só seu, que passa confiança pra quem está decidindo se fecha com você.",
    message:
      "Oi Nathan! Vim pelo site e quero um orçamento para um Site Institucional.",
  },
  {
    icon: Link2,
    title: "Páginas de Links",
    description:
      "Todos os seus links importantes reunidos num só lugar: WhatsApp, Instagram, catálogo, cardápio, o que for. Perfeita pra quem já construiu presença nas redes e precisa de um jeito simples de direcionar quem clica na bio pra onde interessa.",
    message:
      "Oi Nathan! Vim pelo site e quero um orçamento para uma Página de Links.",
  },
  {
    icon: Cog,
    title: "Sistemas Sob Medida",
    description:
      "Uma ferramenta construída especificamente pra resolver uma necessidade real do seu negócio, seja agendamento, controle de clientes, gestão de pedidos, o que for. Pra quem já tentou soluções prontas e percebeu que nenhuma encaixava direito.",
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
        <p className="mt-6 max-w-xl text-base leading-relaxed text-grafite/70">
          Cada projeto começa do zero, pensado pro que o seu negócio
          realmente precisa, nada de solução genérica reaproveitada de
          outro cliente.
        </p>

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
