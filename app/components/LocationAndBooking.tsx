"use client";

import { useState, type FormEvent } from "react";
import { MapPin } from "lucide-react";
import { treatments } from "../data/treatments";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Capanema%2C%20Par%C3%A1";

const fieldClass =
  "mt-2 block min-h-11 w-full rounded-xl border border-soft-border bg-cream px-3 py-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal";

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
      className="scroll-mt-36 bg-cream"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h2
            id="location-title"
            className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
          >
            Localização
          </h2>

          <address className="mt-4 space-y-2 not-italic leading-relaxed text-muted">
            <p>Rua Exemplo, 100, sala 02 · Centro · Capanema–PA</p>
            <p>Segunda a sexta, das 8h às 18h</p>
            <p>Telefone e WhatsApp demonstrativos: (91) 00000-0000</p>
          </address>

          <div className="mt-6 rounded-2xl border border-soft-border bg-blush p-6">
            <MapPin aria-hidden="true" className="size-7 text-charcoal" />
            <p className="mt-3 font-heading font-bold text-charcoal">
              Capanema–PA
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Endereço ilustrativo. O mapa mostra a cidade de referência.
            </p>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Capanema no Google Maps em nova aba"
              className="mt-4 inline-flex min-h-11 items-center rounded-xl border border-charcoal px-4 py-2 text-sm font-semibold text-charcoal hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>

        <div
          id="agendamento"
          className="min-w-0 scroll-mt-36 rounded-2xl border border-soft-border bg-white p-5 shadow-sm sm:p-8"
        >
          <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
            Agende uma avaliação
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

            <label className="block text-sm font-semibold text-charcoal">
              Perfil do paciente
              <select required defaultValue="" className={fieldClass}>
                <option value="" disabled>
                  Selecione o perfil
                </option>
                <option value="bebe">Bebê</option>
                <option value="crianca">Criança</option>
                <option value="adulto">Adulto</option>
              </select>
            </label>

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
              className="min-h-11 w-full rounded-xl bg-charcoal px-4 py-3 text-sm font-bold text-white hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2"
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
