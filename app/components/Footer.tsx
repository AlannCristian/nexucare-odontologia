const links = [
  { href: "#inicio", label: "Início" },
  { href: "#familia", label: "Para toda a família" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#sobre", label: "Sobre a clínica" },
  { href: "#localizacao", label: "Localização" },
];

export default function Footer() {
  return (
    <footer className="border-t border-soft-border bg-white text-charcoal">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[3fr_2fr] md:gap-12 lg:py-14">
        <div>
          <a href="#inicio" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4">
            <span aria-hidden="true" className="relative h-5 w-7 shrink-0">
              <span className="absolute top-0 left-0 size-5 rounded-full border-2 border-[#986371]" />
              <span className="absolute top-0 right-0 size-5 rounded-full border-2 border-charcoal" />
            </span>
            <span className="font-heading text-lg">
              <strong>NexuCare</strong>{" "}
              <span className="text-[#80535e]">Odontologia</span>
            </span>
          </a>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Cuidado próximo, estética natural e confiança em cada sorriso.
          </p>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Clínica fictícia criada para estudo e portfólio.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé" className="grid grid-cols-2 content-start gap-x-4 gap-y-2 text-sm text-muted">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="inline-flex min-h-10 items-center rounded-sm underline-offset-4 hover:text-charcoal hover:underline focus-visible:outline-2 focus-visible:outline-offset-2">
              {label}
            </a>
          ))}
        </nav>
      </div>

      <p className="border-t border-soft-border px-5 py-6 text-center text-xs text-muted">
        © NexuCare Odontologia. Todos os direitos reservados.
      </p>
    </footer>
  );
}
