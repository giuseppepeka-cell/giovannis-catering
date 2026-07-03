"use client";

import { useState } from "react";
import { site } from "@/lib/content";

type Status = "idle" | "success";

const inputClass =
  "w-full rounded-lg border border-gold/30 bg-white px-4 py-3 text-ink outline-none transition-colors focus:border-forest";
const labelClass = "block text-sm font-medium text-forest";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  // Pre-filled WhatsApp link, kept so the success screen can offer a fallback.
  const [waLink, setWaLink] = useState(`https://wa.me/${site.phoneRaw}`);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const get = (k: string) => ((formData.get(k) as string) || "").trim();

    // 1) Build the pre-filled WhatsApp message from the fields.
    const lines = [
      "¡Hola! Quiero solicitar una cotización de catering:",
      "",
      `• Nombre: ${get("name")}`,
      get("email") && `• Correo: ${get("email")}`,
      get("phone") && `• Teléfono: ${get("phone")}`,
      get("event_type") && `• Tipo de evento: ${get("event_type")}`,
      get("event_date") && `• Fecha del evento: ${get("event_date")}`,
      get("guests") && `• Invitados: ${get("guests")}`,
      get("message") && `• Detalles: ${get("message")}`,
    ].filter(Boolean) as string[];

    const href = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    setWaLink(href);

    // 2) Open WhatsApp now (synchronously, inside the user gesture) so it
    //    isn't blocked as a popup. Customer just taps Send.
    window.open(href, "_blank", "noopener,noreferrer");

    // 3) Fire a silent email backup via Web3Forms — fire-and-forget so a lead
    //    is captured even if the customer never taps Send in WhatsApp.
    if (site.web3formsKey) {
      formData.append("access_key", site.web3formsKey);
      formData.append(
        "subject",
        "Nueva solicitud de catering — Trattoria Giovanni"
      );
      formData.append("from_name", "Sitio web Trattoria Giovanni");
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).catch(() => {
        /* email backup is best-effort; WhatsApp is the primary path */
      });
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-gold/30 bg-cream-deep p-8 text-center">
        <p className="font-serif text-2xl font-bold text-forest">
          ¡Casi listo!
        </p>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Te abrimos WhatsApp con tu solicitud lista — solo presiona{" "}
          <strong>enviar</strong> para que la recibamos.
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
        >
          <WhatsAppIcon />
          Abrir WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
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

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark sm:w-auto"
      >
        <WhatsAppIcon />
        Cotizar por WhatsApp
      </button>

      <p className="text-xs text-muted">
        Al enviar, se abrirá WhatsApp con tu solicitud lista para mandarnos.
      </p>
    </form>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white" aria-hidden="true">
      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.62h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06A12.71 12.71 0 0 0 16.003 3.2Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.55 10.55 0 0 1-1.62-5.62c0-5.86 4.77-10.62 10.64-10.62 2.84 0 5.5 1.11 7.5 3.12a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.77 10.62-10.63 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64 0 1.56 1.13 3.06 1.29 3.27.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}
