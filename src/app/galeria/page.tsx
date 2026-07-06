import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { Container, PageHeader } from "@/components/Section";

export const metadata: Metadata = {
  title: "Galería",
  description: "Fotos de nuestros eventos, pizzas al horno de leña y montajes.",
};

// Auto-loads every image dropped into /public/gallery — no code edits needed.
// Supported: .jpg .jpeg .png .webp .avif. Files are shown in name order, so
// prefix with numbers (01-, 02-, …) if you want to control the sequence.
function getGalleryImages() {
  const dir = path.join(process.cwd(), "public", "gallery");
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    files = [];
  }
  return files
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file) => {
      const alt =
        file
          .replace(/\.[^.]+$/, "")
          .replace(/[-_]+/g, " ")
          .trim() || "Trattoria Giovanni";
      return { src: `/gallery/${file}`, alt };
    });
}

export default function GaleriaPage() {
  const images = getGalleryImages();

  return (
    <>
      <PageHeader
        eyebrow="Galería"
        title="Momentos servidos a la mesa"
        subtitle="Un vistazo a nuestros eventos, platillos y servicio en vivo."
      />
      <Container className="py-16 sm:py-20">
        {images.length === 0 ? (
          <div className="rounded-2xl border border-gold/20 bg-white/60 p-10 text-center">
            <p className="font-serif text-2xl font-semibold text-forest">
              Próximamente
            </p>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Estamos preparando nuestra galería de fotos. ¡Vuelve pronto para
              ver nuestros eventos!
            </p>
          </div>
        ) : (
          // Masonry (CSS columns): photos pack into columns at their natural
          // aspect ratio — no gaps at any screen size, and nothing is cropped.
          <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
            {images.map((img) => (
              <div
                key={img.src}
                className="group mb-3 break-inside-avoid overflow-hidden rounded-xl border border-gold/20 bg-cream-deep"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        )}
        <p className="mt-10 text-center text-sm text-muted">
          ¿Quieres ver más? Síguenos en redes sociales o escríbenos por WhatsApp.
        </p>
      </Container>
    </>
  );
}
