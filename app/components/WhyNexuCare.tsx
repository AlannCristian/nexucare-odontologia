import { CalendarCheck, HeartHandshake, ScanLine, Sparkles } from "lucide-react";

const values = [
  {
    title: "Estética natural",
    icon: Sparkles,
    description: "Planejamento que respeita as características do seu sorriso.",
  },
  {
    title: "Acolhimento sem pressa",
    icon: HeartHandshake,
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
      className="scroll-mt-24 border-y border-soft-border bg-blush/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80535e]">
            Sobre a clínica
          </p>
          <h2
            id="about-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            Por que escolher a NexuCare Odontologia?
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            A primeira avaliação é um momento para conversar sobre suas dúvidas
            e entender as etapas do cuidado com o seu sorriso.
          </p>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-soft-border bg-white p-6"
            >
              <span className="mb-4 grid size-11 place-items-center rounded-xl bg-blush text-[#80535e]">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="font-heading text-lg font-bold text-charcoal">
                {title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
