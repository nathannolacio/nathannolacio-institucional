import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Método Florescer",
    description:
      "Landing page de venda para um e-book de educação financeira, com foco total em conversão.",
    image: "/images/project-metodo-florescer.png",
    url: "https://metodo-florescer.vercel.app/",
  },
  {
    title: "Maria Reis Terapeuta",
    description:
      "Landing page para uma terapeuta, pensada pra passar confiança e gerar agendamentos.",
    image: "/images/project-maria-reis.png",
    url: "https://www.mariareisterapeuta.com/",
  },
];

export function Projects() {
  return (
    <section
      id="projetos"
      data-header-theme="dark"
      className="bg-grafite text-marfim"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-6 text-xs font-medium uppercase tracking-wide text-dourado">
          Projetos
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Alguns projetos que já entreguei.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-2xl border border-marfim/10 bg-marfim/5 transition duration-300 hover:-translate-y-1 hover:border-marfim/20 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-medium">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-marfim/70">
                  {project.description}
                </p>
              </div>

              <span className="absolute right-5 top-5 flex -translate-y-2 items-center gap-1.5 rounded-full bg-dourado px-4 py-2 text-xs font-medium text-grafite opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                Ver projeto
                <ArrowUpRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
