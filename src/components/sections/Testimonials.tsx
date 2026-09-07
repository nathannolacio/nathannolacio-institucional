"use client";

import { Star } from "lucide-react";
import { useRef, useState } from "react";

// Depoimentos simulados — trocar por depoimentos reais assim que forem coletados.
// Fotos ainda não existem: mostrando iniciais no círculo por enquanto.
const testimonials = [
  {
    quote:
      "Contratei pensando que ia ser complicado, mas foi tudo bem simples. Recebi atualização em cada etapa e o resultado ficou show.",
    name: "Ana Paula",
    role: "Esteticista autônoma",
  },
  {
    quote:
      "Sem enrolação nenhuma. Expliquei o que eu precisava e ele resolveu, sem aquele monte de termo técnico que eu não entendo.",
    name: "Carlos Eduardo",
    role: "Dono de loja de roupas",
  },
  {
    quote:
      "O que mais me deixou tranquila foi saber que, se desse algum problema depois, eu tinha suporte. Isso fez toda diferença.",
    name: "Fernanda Lima",
    role: "Fisioterapeuta",
  },
  {
    quote:
      "Meu Instagram vivia bombando mas ninguém sabia como marcar horário direito. Depois da página de links, ficou tudo mais organizado.",
    name: "Juliana Alves",
    role: "Dona de salão de beleza",
  },
  {
    quote:
      "Eu não confiava muito em contratar algo pela internet, mas o Nathan foi super claro em cada etapa. Ficou show.",
    name: "Roberto Nunes",
    role: "Dono de padaria de bairro",
  },
  {
    quote:
      "Falei direto com quem construiu meu site, sem intermediário nenhum. Isso fez toda diferença pra eu confiar no trabalho.",
    name: "Patrícia Gomes",
    role: "Personal trainer",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Cada posição relativa ao card central tem um lugar fixo no "leque".
// Cards em |offset| > 1 ficam invisíveis, só existem pra entrar/sair suavemente.
const slotStyles: Record<
  number,
  { x: number; y: number; rotate: number; scale: number; opacity: number; z: number }
> = {
  [-2]: { x: -160, y: 24, rotate: -12, scale: 0.75, opacity: 0, z: 10 },
  [-1]: { x: -78, y: 14, rotate: -8, scale: 0.88, opacity: 0.55, z: 20 },
  [0]: { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1, z: 30 },
  [1]: { x: 78, y: 14, rotate: 8, scale: 0.88, opacity: 0.55, z: 20 },
  [2]: { x: 160, y: 24, rotate: 12, scale: 0.75, opacity: 0, z: 10 },
};

function getSlotStyle(offset: number): React.CSSProperties {
  const clamped = Math.max(-2, Math.min(2, offset));
  const s = slotStyles[clamped];
  return {
    transform: `translate(-50%, -50%) translateX(${s.x}%) translateY(${s.y}px) rotate(${s.rotate}deg) scale(${s.scale})`,
    opacity: s.opacity,
    zIndex: s.z,
    pointerEvents: offset === 0 ? "auto" : offset === -1 || offset === 1 ? "auto" : "none",
  };
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragMoved = useRef(false);

  function goTo(i: number) {
    setIndex(Math.max(0, Math.min(testimonials.length - 1, i)));
  }

  // Pointer Events cobrem mouse (desktop) e toque (mobile) com o mesmo código.
  function handlePointerDown(e: React.PointerEvent) {
    dragStartX.current = e.clientX;
    dragMoved.current = false;
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (dragStartX.current === null) return;
    if (Math.abs(e.clientX - dragStartX.current) > 5) {
      dragMoved.current = true;
    }
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (dragStartX.current === null) return;
    const delta = e.clientX - dragStartX.current;
    if (Math.abs(delta) > 40) {
      goTo(delta < 0 ? index + 1 : index - 1);
    }
    dragStartX.current = null;
  }

  return (
    <section
      id="depoimentos"
      data-header-theme="light"
      className="bg-marfim text-grafite"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <p className="mb-6 text-xs font-medium uppercase tracking-wide text-bronze">
          Depoimentos
        </p>
        <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          O que meus clientes dizem.
        </h2>

        <div
          className="relative mt-16 h-120 touch-pan-y select-none overflow-hidden active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {testimonials.map((testimonial, i) => {
            const offset = i - index;
            if (Math.abs(offset) > 2) return null;
            const isSide = offset === -1 || offset === 1;

            return (
              <div
                key={testimonial.name}
                className="absolute left-1/2 top-1/2 w-full max-w-sm px-3 transition-all duration-500 ease-out"
                style={getSlotStyle(offset)}
                onClick={
                  isSide
                    ? () => {
                        if (!dragMoved.current) goTo(i);
                      }
                    : undefined
                }
              >
                <div
                  className={`flex h-full flex-col overflow-hidden rounded-2xl border border-grafite/10 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.25)] ${
                    isSide ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="h-1.5 w-full bg-linear-to-r from-dourado to-bronze" />
                  <div className="flex flex-1 flex-col p-8 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-dourado/15 font-display text-base text-dourado ring-4 ring-dourado/5">
                      {getInitials(testimonial.name)}
                    </div>
                    <p className="mx-auto mt-5 text-sm leading-relaxed text-grafite/80">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-5 flex justify-center gap-0.5 text-dourado">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={14}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      ))}
                    </div>
                    <p className="mt-4 font-display text-sm font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-grafite/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Ir para o depoimento de ${testimonial.name}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-dourado" : "w-2 bg-grafite/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
