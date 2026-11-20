export const treatmentCategories = [
  { id: "todos", label: "Todos" },
  { id: "estetica", label: "Estética & Sorriso" },
  { id: "ortodontia", label: "Ortodontia" },
  { id: "prevencao", label: "Prevenção & Cirurgia" },
] as const;

export type TreatmentFilter = (typeof treatmentCategories)[number]["id"];

type Treatment = {
  id: string;
  name: string;
  description: string;
  category: Exclude<TreatmentFilter, "todos">;
};

export const treatments: Treatment[] = [
  {
    id: "aparelho-ortodontico",
    name: "Aparelho Ortodôntico",
    description: "Acompanhamento do alinhamento dos dentes e da mordida.",
    category: "ortodontia",
  },
  {
    id: "aparelho-movel",
    name: "Aparelho Móvel",
    description:
      "Aparelho removível com indicação e acompanhamento individual.",
    category: "ortodontia",
  },
  {
    id: "clareamento",
    name: "Clareamento Dental",
    description: "Procedimento para clarear a tonalidade dos dentes.",
    category: "estetica",
  },
  {
    id: "faceta",
    name: "Faceta",
    description:
      "Revestimento da face do dente para ajustar sua forma ou aparência.",
    category: "estetica",
  },
  {
    id: "restauracao",
    name: "Restauração",
    description:
      "Reconstrução de partes do dente afetadas por cárie ou fratura.",
    category: "estetica",
  },
  {
    id: "limpeza",
    name: "Limpeza Dental",
    description:
      "Limpeza profissional para remover placa e manchas superficiais.",
    category: "prevencao",
  },
  {
    id: "tartaro",
    name: "Remoção de Tártaro",
    description: "Remoção de depósitos endurecidos que se acumulam nos dentes.",
    category: "prevencao",
  },
  {
    id: "cirurgia-oral",
    name: "Cirurgia Oral",
    description:
      "Avaliação e planejamento de procedimentos cirúrgicos na boca.",
    category: "prevencao",
  },
  {
    id: "siso",
    name: "Extração de Siso",
    description: "Avaliação dos dentes do siso e remoção quando indicada.",
    category: "prevencao",
  },
  {
    id: "implante",
    name: "Implante",
    description: "Suporte para a reposição de dentes perdidos.",
    category: "prevencao",
  },
  {
    id: "protese",
    name: "Prótese",
    description:
      "Reposição de dentes para recuperar a função e a aparência do sorriso.",
    category: "estetica",
  },
  {
    id: "endodontia",
    name: "Endodontia",
    description:
      "Tratamento da parte interna do dente, também conhecido como canal.",
    category: "prevencao",
  },
];
