import { HeartHandshake } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-soft-border bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
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

        <nav aria-label="Navegação principal">
          <a
            href="#inicio"
            className="inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-charcoal hover:bg-blush focus-visible:outline-2"
          >
            Início
          </a>
        </nav>
      </div>
    </header>
  );
}
