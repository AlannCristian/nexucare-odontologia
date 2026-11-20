import { HeartHandshake } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#familia", label: "Para toda a família" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre a clínica" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-soft-border bg-cream">
      <div className="mx-auto flex-wrap max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a
          href="#inicio"
          className="inline-flex items-center gap-2 rounded-xl text-charcoal focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blush">
            <HeartHandshake aria-hidden="true" className="size-5" />
          </span>
          <span className="font-heading text-sm font-bold sm:text-base">
            NexuCare Odontologia
          </span>
        </a>

        <nav aria-label="Navegação principal" className="flex flex-wrap gap-1">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="inline-flex min-h-11 items-center rounded-xl px-2 text-sm font-semibold text-charcoal hover:bg-blush focus-visible:outline-2 sm:px-3"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
