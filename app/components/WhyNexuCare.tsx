const values = [
  {
    title: "Estética natural",
    description: "Planejamento que respeita as características do seu sorriso.",
  },
  {
    title: "Acolhimento sem pressa",
    description:
      "Tempo para ouvir quem tem receio de dentista e explicar o que acontece na consulta.",
  },
  {
    title: "Tecnologia no diagnóstico",
    description:
      "Exames e recursos de imagem quando indicados, com explicação dos achados.",
  },
  {
    title: "Acompanhamento contínuo",
    description: "Retornos planejados conforme cada etapa do cuidado.",
  },
];

export default function WhyNexuCare() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="scroll-mt-36 border-t border-soft-border bg-blush"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2
          id="about-title"
          className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
        >
          Por que escolher a NexuCare?
        </h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {values.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-2xl border border-soft-border bg-white p-6"
            >
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
