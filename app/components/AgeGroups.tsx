import { Baby, Smile, UserRound } from "lucide-react";

const ageGroups = [
  {
    title: "Bebês",
    description:
      "Orientação aos responsáveis sobre a higiene bucal e os primeiros dentinhos.",
    icon: Baby,
  },
  {
    title: "Crianças",
    description:
      "Consultas com explicações adequadas à idade, foco em prevenção e tempo para a criança se adaptar.",
    icon: Smile,
  },
  {
    title: "Adultos",
    description:
      "Avaliação individual para prevenção, ortodontia, reabilitação oral e estética do sorriso.",
    icon: UserRound,
  },
];

export default function AgeGroups() {
  return (
    <section
      id="familia"
      aria-labelledby="family-title"
      className="scroll-mt-24 bg-white"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="max-w-[38rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80535e]">
            Para toda a família
          </p>

          <h2
            id="family-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            Atendimento para todas as fases da vida
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {ageGroups.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className={`rounded-[1.25rem] border border-soft-border p-6 shadow-sm sm:p-8 ${index === 1 ? "bg-blush" : "bg-cream"}`}
            >
              <span className="grid size-14 place-items-center rounded-[1.25rem] bg-white shadow-sm text-[#80535e]">
                <Icon aria-hidden="true" className="size-6" />
              </span>

              <h3 className="mt-6 font-heading text-xl font-semibold text-charcoal">
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
