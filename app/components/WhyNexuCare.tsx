import { CalendarCheck, Gem, Heart, ScanLine } from "lucide-react";

const values = [
  {
    title: "Estética natural",
    icon: Gem,
    description: "Planejamento que respeita as características do seu sorriso.",
  },
  {
    title: "Acolhimento sem pressa",
    icon: Heart,
    description:
      "Tempo para ouvir quem tem receio de dentista e explicar o que acontece na consulta.",
  },
  {
    title: "Tecnologia no diagnóstico",
    icon: ScanLine,
    description:
      "Exames e recursos de imagem quando indicados, com explicação dos achados.",
  },
  {
    title: "Acompanhamento contínuo",
    icon: CalendarCheck,
    description: "Retornos planejados conforme cada etapa do cuidado.",
  },
];

export default function WhyNexuCare() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-24 bg-charcoal text-white"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-16 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1.17fr)] lg:gap-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4a5ad]">
            Sobre a clínica
          </p>
          <h2
            id="about-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Por que escolher a NexuCare Odontologia?
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-white/80">
            Consultas com tempo para ouvir suas dúvidas, explicar as opções
            e combinar as próximas etapas desde a primeira avaliação.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {values.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-[1.25rem] border border-white/12 bg-white/5 p-6"
            >
              <Icon aria-hidden="true" className="mb-4 size-6 text-[#d4a5ad]" />
              <h3 className="font-heading font-semibold">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
