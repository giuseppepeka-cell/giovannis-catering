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

// Repeating pattern of tile sizes for the collage. col-span only kicks in at
// sm+ (mobile stays 2 columns with the occasional tall accent).
const SPANS = [
  "sm:col-span-2 sm:row-span-2", // big feature
  "",
  "row-span-2", // tall
  "",
  "sm:col-span-2", // wide
  "",
  "row-span-2", // tall
  "",
  "sm:col-span-2 sm:row-span-2", // big feature
  "",
  "",
];

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
          <div className="grid auto-rows-[150px] grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-[190px] sm:grid-cols-3 lg:grid-cols-4">
            {images.map((img, i) => (
              <div
                key={img.src}
                className={`group overflow-hidden rounded-xl border border-gold/20 bg-cream-deep ${
                  SPANS[i % SPANS.length]
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
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
