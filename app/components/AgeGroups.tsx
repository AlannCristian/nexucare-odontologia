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
      className="scroll-mt-36 border-y border-soft-border bg-blush"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2
          id="family-title"
          className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
        >
          Atendimento para todas as fases
        </h2>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {ageGroups.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="rounded-2xl border border-soft-border bg-white p-6 shadow-sm"
            >
              <Icon aria-hidden="true" className="size-7 text-charcoal" />
              <h3 className="mt-4 font-heading text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
