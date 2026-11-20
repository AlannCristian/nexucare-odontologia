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
      className="scroll-mt-36"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2
          id="treatments-title"
          className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
        >
          Especialidades e tratamentos
        </h2>

        <div
          role="group"
          aria-label="Filtrar tratamentos"
          className="mt-6 flex flex-wrap gap-2"
        >
          {treatmentCategories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category.id)}
                className={`min-h-11 rounded-xl border px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${
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

        <p role="status" className="mt-4 text-sm text-muted">
          {visibleTreatments.length} tratamentos encontrados
        </p>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTreatments.map((treatment) => (
            <li
              key={treatment.id}
              className="rounded-2xl border border-soft-border bg-white p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-bold text-charcoal">
                {treatment.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                {treatment.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
