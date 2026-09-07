"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/utils";

const navLinks = [
  { href: "#processo", label: "Como eu trabalho" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>(
      "[data-header-theme]",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTheme(
              entry.target.getAttribute("data-header-theme") as
                | "dark"
                | "light",
            );
          }
        });
      },
      { rootMargin: "-73px 0px -85% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const isGlassLight = scrolled && theme === "light";
  const isGlassDark = scrolled && theme === "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-lg transition-colors duration-300 ${
        isGlassLight
          ? "border-white/20 bg-white/25 text-grafite"
          : isGlassDark
            ? "border-marfim/10 bg-grafite/60 text-marfim"
            : "border-transparent bg-transparent text-marfim"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-medium">
          Nathan Nolacio
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-dourado ${
                isGlassLight ? "text-grafite/70" : "text-marfim/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl(
            "Oi Nathan! Vim pelo site e quero saber mais sobre os seus serviços.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-dourado px-5 py-2.5 text-sm font-medium text-grafite transition hover:shadow-[0_0_30px_-6px_rgba(180,145,90,0.7)] lg:inline-flex"
        >
          Falar no WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className={`border-t px-6 py-6 backdrop-blur-lg lg:hidden ${
            isGlassLight
              ? "border-white/20 bg-white/40 text-grafite"
              : "border-marfim/10 bg-grafite/70 text-marfim"
          }`}
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm opacity-80 transition hover:text-dourado hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl(
                "Oi Nathan! Vim pelo site e quero saber mais sobre os seus serviços.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-dourado px-5 py-2.5 text-sm font-medium text-grafite"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
