import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Reservar una llamada",
  description:
    "Agenda una llamada con Giovanni para planear el catering de tu evento.",
};

export default function ReservarPage() {
  const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <>
      <PageHeader
        eyebrow="Reservar una llamada"
        title="Hablemos de tu evento"
        subtitle="Agenda una llamada y planeamos juntos el menú, la fecha y los detalles."
      />

      <Container className="py-16 sm:py-20">
        {site.calcomLink ? (
          // Cal.com scheduler — connects to Giovanni's Google Calendar
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-white">
            <iframe
              src={`https://cal.com/${site.calcomLink}`}
              title="Reservar una llamada"
              className="h-[700px] w-full"
              loading="lazy"
            />
          </div>
        ) : (
          // Shown until the Cal.com link is added in content.ts
          <div className="mx-auto max-w-xl rounded-2xl border border-gold/30 bg-cream-deep p-8 text-center sm:p-12">
            <p className="font-serif text-2xl font-bold text-forest">
              Agenda en línea — próximamente
            </p>
            <p className="mt-3 text-muted">
              Estamos por activar la reserva de llamadas en línea. Mientras tanto,
              escríbenos por WhatsApp y con gusto coordinamos un horario.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-block rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
            >
              Escribir por WhatsApp
            </a>
          </div>
        )}
      </Container>
    </>
  );
}
