import {
  ClipboardList,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const pillars = [
  { title: "Atendimento humanizado", icon: HeartHandshake },
  { title: "Estética natural", icon: Sparkles },
  { title: "Biossegurança", icon: ShieldCheck },
  { title: "Clareza no plano", icon: ClipboardList },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="bg-[radial-gradient(ellipse_at_top_right,var(--color-blush),var(--color-cream)_65%)]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 xl:grid-cols-[1.2fr_1fr] xl:gap-16">
        <div>
          <p className="inline-flex rounded-xl bg-blush px-3 py-2 text-sm font-semibold leading-relaxed text-charcoal">
            Atendimento especializado para bebês, crianças e adultos
          </p>

          <h1
            id="hero-title"
            className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-charcoal sm:text-5xl"
          >
            Estética natural e cuidado{" "}
            <span className="italic text-rose">que acolhe</span> cada sorriso.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Da primeira consulta aos cuidados da vida adulta, nossa proposta é
            ouvir com atenção e explicar cada etapa do atendimento.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#agendamento"
              className="inline-flex min-h-11 items-center rounded-xl bg-charcoal px-4 py-2 text-sm font-semibold text-white hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Agendar Avaliação
            </a>

            <a
              href="#especialidades"
              className="inline-flex min-h-11 items-center rounded-xl border border-charcoal px-4 py-2 text-sm font-semibold text-charcoal hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Ver Especialidades
            </a>
          </div>
          <p className="mt-5 text-sm text-muted">
            Clínica odontológica fictícia · Projeto de portfólio
          </p>
        </div>

        <div className="rounded-2xl border border-soft-border bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-heading text-xl font-bold text-charcoal">
            Como cuidamos de você
          </h2>

          <ul className="mt-5 space-y-4">
            {pillars.map(({ title, icon: Icon }) => (
              <li
                key={title}
                className="flex items-center gap-3 text-sm font-semibold"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blush text-charcoal">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
