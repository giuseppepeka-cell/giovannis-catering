"use client";

import { useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-gold/30 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-forest";
const labelClass = "block text-sm font-medium text-forest";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const configured = Boolean(site.web3formsKey);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!configured) return;

    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", site.web3formsKey);
    formData.append("subject", "Nueva solicitud de catering — Trattoria Giovanni");
    formData.append("from_name", "Sitio web Trattoria Giovanni");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-cream-deep p-8 text-center">
        <p className="font-serif text-2xl font-bold text-forest">
          ¡Gracias por tu mensaje!
        </p>
        <p className="mt-3 text-muted">
          Hemos recibido tu solicitud. Te contactaremos muy pronto para darte una
          cotización a la medida.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!configured && (
        <div className="rounded-lg border border-terracotta/30 bg-terracotta/5 p-4 text-sm text-terracotta-dark">
          El envío del formulario aún no está activado. Por ahora, escríbenos por{" "}
          <a
            href={`https://wa.me/${site.phoneRaw}`}
            className="font-semibold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>{" "}
          o al correo{" "}
          <a href={`mailto:${site.email}`} className="font-semibold underline">
            {site.email}
          </a>
          .
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Nombre completo *
          </label>
          <input id="name" name="name" required className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Teléfono / WhatsApp
          </label>
          <input id="phone" name="phone" className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="event_date">
            Fecha del evento
          </label>
          <input
            id="event_date"
            name="event_date"
            type="date"
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="guests">
            Número de invitados
          </label>
          <input
            id="guests"
            name="guests"
            type="number"
            min={1}
            className={`mt-1.5 ${inputClass}`}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="event_type">
            Tipo de evento
          </label>
          <select id="event_type" name="event_type" className={`mt-1.5 ${inputClass}`}>
            <option value="">Selecciona…</option>
            <option>Boda</option>
            <option>Evento corporativo</option>
            <option>Cumpleaños</option>
            <option>Reunión privada</option>
            <option>Otro</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Cuéntanos sobre tu evento
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`mt-1.5 ${inputClass}`}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terracotta-dark">
          Ocurrió un error al enviar. Inténtalo de nuevo o escríbenos por WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={!configured || status === "submitting"}
        className="w-full rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {status === "submitting" ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  );
}
