import { CONTACT_EMAIL, NAV_LINKS, whatsappUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer data-header-theme="light" className="bg-marfim text-grafite">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span className="font-display text-lg font-medium">
              Nathan Nolacio
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-grafite/60">
              Desenvolvimento web e sistemas sob medida pra autônomos e
              comércio local.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-bronze">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-grafite/70 transition hover:text-dourado"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-bronze">
              Contato
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={whatsappUrl(
                    "Oi Nathan! Vim pelo site e quero saber mais sobre os seus serviços.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-grafite/70 transition hover:text-dourado"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-grafite/70 transition hover:text-dourado"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-grafite/10 pt-6 text-sm text-grafite/50">
          © {new Date().getFullYear()} Nathan Nolacio
        </div>
      </div>
    </footer>
  );
}
