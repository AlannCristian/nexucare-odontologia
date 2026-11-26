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
      className="scroll-mt-24 border-y border-soft-border bg-blush/50"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
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

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {ageGroups.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-soft-border bg-white p-6 shadow-sm sm:p-8"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-blush text-[#80535e]">
                <Icon aria-hidden="true" className="size-6" />
              </span>

              <h3 className="mt-5 font-heading text-xl font-bold text-charcoal">
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
