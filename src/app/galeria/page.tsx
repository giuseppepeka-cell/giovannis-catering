import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Section";
import { gallery } from "@/lib/content";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotos de nuestros eventos, pizzas al horno de leña y montajes.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="Momentos servidos a la mesa"
        subtitle="Un vistazo a nuestros eventos, platillos y servicio en vivo."
      />
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((img) => (
            <div
              key={img.src}
              className="group overflow-hidden rounded-2xl border border-gold/20 bg-cream-deep"
            >
              {/* Using a plain img keeps SVG placeholders simple; swap for real photos later. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted">
          ¿Quieres ver más? Síguenos en redes sociales o escríbenos por WhatsApp.
        </p>
      </Container>
    </>
  );
}
