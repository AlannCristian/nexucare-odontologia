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
      className="bg-[radial-gradient(ellipse_at_top_right,var(--color-blush)_8%,transparent_62%)]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 sm:py-20 lg:px-8 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] xl:gap-14">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-soft-border bg-white/70 px-3.5 py-1.5 text-xs font-medium text-[#80535e]">
            <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-rose" />
            Atendimento especializado para bebês, crianças e adultos
          </p>

          <h1
            id="hero-title"
            className="mt-6 max-w-[15ch] font-heading text-[clamp(2.25rem,6.5vw,4rem)] leading-[1.08] font-bold tracking-tight text-charcoal sm:max-w-none xl:max-w-[15ch]"
          >
            Estética natural e cuidado{" "}
            <span className="italic text-[#986371]">que acolhe</span> cada sorriso.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg text-muted">
            Da primeira consulta aos cuidados da vida adulta, reunimos prevenção,
            ortodontia, reabilitação e estética dental com atenção às necessidades
            de cada pessoa.
          </p>
          <div className="mt-8 grid gap-3 min-[480px]:flex min-[480px]:flex-wrap">
            <a
              href="#agendamento"
              className="inline-flex min-h-13 items-center justify-center rounded-2xl bg-charcoal px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Agendar Avaliação
            </a>

            <a
              href="#especialidades"
              className="inline-flex min-h-13 items-center justify-center rounded-2xl border border-soft-border bg-white/80 px-6 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Ver Especialidades
            </a>
          </div>
        </div>

        <div className="rounded-[1.3rem] border border-soft-border bg-white/90 p-6 shadow-[0_12px_36px_-26px_#2d31424d] sm:p-8">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80535e]">
            Nossos pilares
          </h2>

          <ul className="mt-1 divide-y divide-soft-border">
            {pillars.map(({ title, description, icon: Icon }) => (
              <li key={title} className="flex items-start gap-4 py-4 last:pb-0">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-blush text-[#986371]">
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
