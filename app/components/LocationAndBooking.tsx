"use client";

import { useState, type FormEvent } from "react";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";
import { treatments } from "../data/treatments";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Capanema%2C%20Par%C3%A1";

const fieldClass =
  "mt-2 block min-h-12 w-full rounded-2xl border border-soft-border bg-cream px-4 py-2 text-base text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal";

export default function LocationAndBooking() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setIsSubmitted(true);
  }

  return (
    <section
      id="localizacao"
      aria-labelledby="location-title"
      className="scroll-mt-24 bg-cream"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div className="min-w-0 rounded-[1.25rem] border border-soft-border bg-white p-5 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80535e]">
            Localização
          </p>
          <h2
            id="location-title"
            className="mt-3 font-heading text-3xl font-bold tracking-tight text-charcoal sm:text-3xl"
          >
            Venha nos visitar
          </h2>

          <address className="mt-6 space-y-3 not-italic leading-relaxed text-muted">
            <p className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#986371]" />
              <span>Rua Exemplo, 100, sala 02 · Centro · Capanema–PA</span>
            </p>
            <p className="flex items-start gap-3">
              <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#986371]" />
              <span>Segunda a sexta, das 8h às 18h</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-1 size-5 shrink-0 text-[#986371]" />
              <span>WhatsApp demonstrativo · (91) 00000-0000</span>
            </p>
          </address>

          <div
            aria-hidden="true"
            className="mt-6 grid h-48 place-items-center rounded-2xl bg-blush bg-[linear-gradient(to_right,#e8dce080_1px,transparent_1px),linear-gradient(to_bottom,#e8dce080_1px,transparent_1px)] bg-[size:28px_28px] sm:h-56"
          >
            <span className="grid size-14 place-items-center rounded-full bg-[#986371] text-white">
              <MapPin className="size-6" />
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">Mapa ilustrativo de Capanema–PA.</p>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Capanema no Google Maps em nova aba"
            className="mt-4 inline-flex min-h-11 items-center rounded-xl gap-2 border border-soft-border px-5 py-2 text-sm font-semibold text-charcoal hover:bg-blush focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Abrir no Google Maps
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </div>

        <div
          id="agendamento"
          className="min-w-0 scroll-mt-24 rounded-[1.25rem] bg-blush p-5 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#80535e]">
            Agendamento rápido
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-charcoal sm:text-3xl">
            Agende sua avaliação
          </h2>
          <p
            id="booking-help"
            className="mt-2 text-sm leading-relaxed text-muted"
          >
            Use dados fictícios. A solicitação é simulada no navegador.
          </p>

          <form
            aria-describedby="booking-help"
            onChange={() => setIsSubmitted(false)}
            onSubmit={handleSubmit}
            className="mt-6 space-y-4"
          >
            <label className="block text-sm font-semibold text-charcoal">
              Nome completo
              <input
                placeholder="Seu nome"
                required
                minLength={3}
                maxLength={100}
                pattern={String.raw`.*\S.*`}
                className={fieldClass}
              />
            </label>

            <label className="block text-sm font-semibold text-charcoal">
              WhatsApp
              <input
                type="tel"
                placeholder="91900000000"
                inputMode="numeric"
                required
                pattern="[0-9]{10,11}"
                maxLength={11}
                aria-describedby="phone-help"
                className={fieldClass}
              />
              <span
                id="phone-help"
                className="mt-1 block text-xs font-normal text-muted"
              >
                Digite o DDD e o número, usando apenas 10 ou 11 dígitos.
              </span>
            </label>

            <fieldset>
              <legend className="text-sm font-semibold text-charcoal">Perfil do paciente</legend>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {[
                  { value: "bebe", label: "Bebê" },
                  { value: "crianca", label: "Criança" },
                  { value: "adulto", label: "Adulto" },
                ].map(({ value, label }) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="perfil"
                      value={value}
                      required
                      defaultChecked={value === "adulto"}
                      className="peer sr-only"
                    />
                    <span className="grid min-h-11 cursor-pointer place-items-center rounded-2xl border border-soft-border bg-cream px-2 text-sm text-charcoal peer-checked:border-charcoal peer-checked:bg-charcoal peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block text-sm font-semibold text-charcoal">
              Tratamento de interesse
              <select required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Selecione um tratamento
                </option>
                {treatments.map((treatment) => (
                  <option key={treatment.id} value={treatment.id}>
                    {treatment.name}
                  </option>
                ))}
              </select>
            </label>

            <button
              type="submit"
              className="min-h-14 w-full rounded-2xl bg-charcoal px-4 py-3 text-sm font-bold text-white hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Solicitar Agendamento
            </button>

            <p
              role="status"
              className={
                isSubmitted
                  ? "rounded-xl bg-blush p-3 text-sm text-charcoal"
                  : "sr-only"
              }
            >
              {isSubmitted
                ? "Solicitação simulada com sucesso. Nenhuma consulta foi marcada."
                : ""}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
