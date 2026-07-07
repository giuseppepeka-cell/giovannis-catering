import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Section";
import { locations } from "@/lib/content";

export const metadata: Metadata = {
  title: "Ubicaciones",
  description: "Encuentra las sucursales de Trattoria Giovanni.",
};

export default function UbicacionesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ubicaciones"
        title="Encuéntranos"
        subtitle="Visita cualquiera de nuestras sucursales o pide nuestro catering a tu evento."
        image="/hero-ubicaciones.jpg"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((loc) => {
            // Free Google Maps embed — no API key required.
            const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
              loc.mapsQuery
            )}&output=embed`;
            const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
              loc.mapsQuery
            )}`;

            return (
              <div
                key={loc.name}
                className="overflow-hidden rounded-2xl border border-gold/20 bg-white"
              >
                <iframe
                  src={mapSrc}
                  title={`Mapa de ${loc.name}`}
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-forest">{loc.name}</h2>
                  <p className="mt-2 text-muted">{loc.address}</p>
                  <a
                    href={directionsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold text-terracotta hover:text-terracotta-dark"
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
