"use client";

import { useState, type FormEvent } from "react";
import { treatments } from "../data/treatments";

type Summary = {
  profile: string;
  treatment: string;
  goals: string;
  questions: string;
};

const fieldClass =
  "mt-2 block w-full rounded-xl border border-soft-border bg-cream px-3 py-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2";

export default function ConsultationPrep() {
  const [summary, setSummary] = useState<Summary | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    setSummary({
      profile: String(fields.get("profile")),
      treatment: String(fields.get("treatment")),
      goals: String(fields.get("goals")).trim(),
      questions: String(fields.get("questions")).trim(),
    });
  }

  return (
    <section id="preparo" aria-labelledby="prep-title" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80535e]">
          Prepare sua consulta
        </p>
        <h2
          id="prep-title"
          className="mt-3 font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
        >
          Organize suas dúvidas antes da avaliação
        </h2>
        <p id="prep-help" className="mt-4 max-w-2xl leading-relaxed text-muted">
          Use exemplos fictícios para montar um resumo. O texto fica no navegador.
        </p>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <form
            aria-describedby="prep-help"
            className="space-y-4 rounded-2xl border border-soft-border bg-white p-5 shadow-sm sm:p-8"
            onChange={() => setSummary(null)}
            onSubmit={handleSubmit}
          >
            <label className="block text-sm font-semibold text-charcoal">
              Perfil do paciente
              <select name="profile" defaultValue="Adulto" className={fieldClass}>
                <option>Bebê</option>
                <option>Criança</option>
                <option>Adulto</option>
              </select>
            </label>
            <label className="block text-sm font-semibold text-charcoal">
              Tratamento de interesse
              <select name="treatment" className={fieldClass}>
                <option>Ainda não sei</option>
                {treatments.map(({ id, name }) => (
                  <option key={id}>{name}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold text-charcoal">
              Objetivos para o sorriso
              <textarea name="goals" rows={3} maxLength={500} className={fieldClass} />
            </label>
            <label className="block text-sm font-semibold text-charcoal">
              Dúvidas sobre tratamentos
              <textarea name="questions" rows={3} maxLength={500} className={fieldClass} />
            </label>
            <button
              type="submit"
              className="min-h-11 rounded-xl bg-charcoal px-5 py-3 text-sm font-semibold text-white hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Gerar resumo
            </button>
          </form>

          <div className="min-w-0 rounded-2xl border border-soft-border bg-blush/50 p-5 sm:p-8">
            <h3 className="font-heading text-xl font-bold text-charcoal">
              Resumo para a avaliação
            </h3>
            <div aria-live="polite" className="mt-4 text-sm leading-relaxed text-muted">
              {summary ? (
                <dl className="space-y-3">
                  <div><dt className="font-semibold text-charcoal">Perfil</dt><dd>{summary.profile}</dd></div>
                  <div><dt className="font-semibold text-charcoal">Tratamento</dt><dd>{summary.treatment}</dd></div>
                  <div><dt className="font-semibold text-charcoal">Objetivos</dt><dd className="whitespace-pre-wrap wrap-anywhere">{summary.goals || "Sem objetivos informados."}</dd></div>
                  <div><dt className="font-semibold text-charcoal">Dúvidas</dt><dd className="whitespace-pre-wrap wrap-anywhere">{summary.questions || "Sem dúvidas informadas."}</dd></div>
                </dl>
              ) : (
                <p>Preencha o formulário e gere o resumo para visualizá-lo aqui.</p>
              )}
            </div>
            <a href="#agendamento" className="mt-5 inline-flex min-h-11 items-center rounded-xl border border-soft-border bg-white px-4 text-sm font-semibold text-charcoal hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2">
              Ir para o agendamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
