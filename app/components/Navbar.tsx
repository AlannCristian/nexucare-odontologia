"use client";

import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#familia", label: "Para toda a família" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre a clínica" },
  { href: "#localizacao", label: "Localização" },
  { href: "#agendamento", label: "Agendar Avaliação" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="sticky top-0 z-20 border-b border-soft-border bg-cream/95 backdrop-blur-sm"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 px-5 py-3 lg:px-8 xl:grid-cols-[auto_minmax(0,1fr)]">
        <a
          href="#inicio"
          onClick={() => setIsOpen(false)}
          className="inline-flex min-h-11 w-fit items-center gap-3 rounded-xl text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span aria-hidden="true" className="relative h-5 w-7 shrink-0">
            <span className="absolute top-0 left-0 size-5 rounded-full border-2 border-[#986371]" />
            <span className="absolute top-0 right-0 size-5 rounded-full border-2 border-charcoal" />
          </span>

          <span className="font-heading text-base sm:text-lg">
            <strong>NexuCare</strong>{" "}
            <span className="text-[#80535e]">Odontologia</span>
          </span>
        </a>

        <button
          ref={menuButton}
          type="button"
          aria-controls="navegacao-principal"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="grid size-11 place-items-center rounded-xl text-charcoal hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 xl:hidden"
        >
          {isOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>

        <nav
          id="navegacao-principal"
          aria-label="Navegação principal"
          className={`${isOpen ? "flex" : "hidden"} col-span-2 mt-3 max-h-[calc(100dvh-5rem)] flex-col gap-1 overflow-y-auto border-t border-soft-border pt-3 xl:col-span-1 xl:mt-0 xl:flex xl:max-h-none xl:flex-row xl:items-center xl:justify-end xl:overflow-visible xl:border-0 xl:pt-0`}
        >
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={`inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${
                href === "#agendamento"
                  ? "bg-charcoal text-white hover:bg-ink"
                  : "text-charcoal hover:bg-blush"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
