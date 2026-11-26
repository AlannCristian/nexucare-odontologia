import {
  ClipboardList,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    title: "Atendimento humanizado",
    description: "Consultas com tempo para ouvir você e esclarecer suas dúvidas.",
    icon: HeartHandshake,
  },
  {
    title: "Estética natural",
    description: "Tratamentos que valorizam os traços do seu sorriso.",
    icon: Sparkles,
  },
  {
    title: "Biossegurança",
    description: "Cuidados de higiene e esterilização em cada atendimento.",
    icon: ShieldCheck,
  },
  {
    title: "Clareza no plano",
    description: "Etapas e custos explicados antes de iniciar o tratamento.",
    icon: ClipboardList,
  },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-[radial-gradient(ellipse_at_top_right,var(--color-blush),var(--color-cream)_65%)]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 xl:grid-cols-[1.2fr_1fr] xl:gap-16">
        <div>
          <p className="inline-flex rounded-full border border-soft-border bg-white/70 px-4 py-1.5 text-sm font-medium text-[#80535e]">
            Atendimento especializado para bebês, crianças e adultos
          </p>

          <h1
            id="hero-title"
            className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-charcoal sm:text-5xl md:text-6xl"
          >
            Estética natural e cuidado{" "}
            <span className="italic text-rose">que acolhe</span> cada sorriso.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Da primeira consulta aos cuidados da vida adulta, reunimos prevenção,
            ortodontia, reabilitação e estética dental com atenção às necessidades
            de cada pessoa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#agendamento"
              className="inline-flex min-h-13 items-center rounded-2xl bg-charcoal px-6 py-3 text-sm font-semibold text-white hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Agendar Avaliação
            </a>

            <a
              href="#especialidades"
              className="inline-flex min-h-13 items-center rounded-2xl border border-soft-border bg-white/80 px-6 py-3 text-sm font-semibold text-charcoal hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Ver Especialidades
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">
            Clínica odontológica fictícia · Projeto de portfólio
          </p>
        </div>

        <div className="rounded-2xl border border-soft-border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Nossos pilares
          </h2>

          <ul className="mt-1 divide-y divide-soft-border">
            {pillars.map(({ title, description, icon: Icon }) => (
              <li key={title} className="flex items-start gap-4 py-4 last:pb-0">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blush text-rose">
                  <Icon aria-hidden="true" className="size-5" />
                </span>

                <div>
                  <h3 className="font-heading font-semibold text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
