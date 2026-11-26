"use client";

import { useState } from "react";
import {
  treatmentCategories,
  treatments,
  type TreatmentFilter,
} from "../data/treatments";

export default function TreatmentsGrid() {
  const [selectedCategory, setSelectedCategory] =
    useState<TreatmentFilter>("todos");

  const visibleTreatments =
    selectedCategory === "todos"
      ? treatments
      : treatments.filter(
          (treatment) => treatment.category === selectedCategory,
        );

  return (
    <section
      id="especialidades"
      aria-labelledby="treatments-title"
      className="scroll-mt-24 bg-cream"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80535e]">
              Especialidades
            </p>
            <h2
              id="treatments-title"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Tratamentos pensados para o seu sorriso
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filtrar tratamentos"
            className="flex flex-wrap gap-2"
          >
            {treatmentCategories.map((category) => {
              const isSelected = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`min-h-10 rounded-full border px-4 py-2 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    isSelected
                      ? "border-charcoal bg-charcoal text-white"
                      : "border-soft-border bg-white text-charcoal hover:bg-blush"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

        </div>

        <p role="status" className="sr-only">
          {visibleTreatments.length} tratamentos encontrados
        </p>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTreatments.map((treatment) => (
            <li
              key={treatment.id}
              className="rounded-[1.25rem] border border-soft-border bg-white p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-semibold tracking-tight text-charcoal">
                {treatment.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {treatment.description}
              </p>
              <p className="mt-4 inline-flex rounded-full bg-blush px-3 py-1 text-xs font-semibold text-[#80535e]">
                {treatmentCategories.find(({ id }) => id === treatment.category)?.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
