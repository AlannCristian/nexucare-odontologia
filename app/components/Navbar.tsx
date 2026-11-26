"use client";

import { useRef, useState } from "react";
import { HeartHandshake, Menu, X } from "lucide-react";

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
      className="sticky top-0 z-20 border-b border-soft-border bg-cream"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-5 py-3 sm:px-8">
        <a
          href="#inicio"
          onClick={() => setIsOpen(false)}
          className="inline-flex min-h-11 items-center gap-2 rounded-xl text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <HeartHandshake aria-hidden="true" className="size-6 shrink-0" />

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
          onClick={() => setIsOpen(!isOpen)}
          className="grid size-11 place-items-center rounded-xl text-charcoal hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
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
          className={`${isOpen ? "flex" : "hidden"} w-full flex-col gap-1 border-t border-soft-border pt-3 mt-3 lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:items-center lg:border-0 lg:pt-0`}
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
