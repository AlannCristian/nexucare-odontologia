export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="flex flex-wrap justify-between gap-6">
          <div>
            <p className="font-heading text-xl font-bold">
              NexuCare Odontologia
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Clínica fictícia criada para estudo e portfólio.
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Responsável técnico demonstrativo: Dra. Júlia Prado (personagem
              fictícia).
            </p>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-5 gap-y-3 text-sm"
          >
            <a href="#inicio" className="underline-offset-4 hover:underline">
              Início
            </a>
            <a
              href="#especialidades"
              className="underline-offset-4 hover:underline"
            >
              Especialidades
            </a>
            <a
              href="#localizacao"
              className="underline-offset-4 hover:underline"
            >
              Localização
            </a>
          </nav>
        </div>

        <p className="mt-8 border-t border-white/20 pt-5 text-xs text-slate-200">
          © NexuCare Odontologia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
