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
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
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
          className="mt-8 flex flex-wrap justify-center gap-2"
        >
          {treatmentCategories.map((category) => {
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedCategory(category.id)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 ${
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

        <p role="status" className="mt-4 text-center text-sm text-muted">
          {visibleTreatments.length} tratamentos encontrados
        </p>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleTreatments.map((treatment) => (
            <li
              key={treatment.id}
              className="flex flex-col items-start rounded-2xl border border-soft-border bg-white p-6 shadow-sm"
            >
              <h3 className="font-heading text-lg font-bold text-charcoal">
                {treatment.name}
              </h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">
                {treatment.description}
              </p>
              <p className="mt-4 rounded-full bg-blush px-3 py-1 text-xs font-semibold text-[#80535e]">
                {treatmentCategories.find(({ id }) => id === treatment.category)?.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
