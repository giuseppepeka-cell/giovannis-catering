import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { Container, PageHeader } from "@/components/Section";
import { menu, featuredPackage, site } from "@/lib/content";

// Returns the image path if a matching file exists in /public (trying common
// extensions), otherwise null — so items show a placeholder until the photo is added.
function resolveImage(imgPath?: string) {
  if (!imgPath) return null;
  const base = imgPath.replace(/\.[^.]+$/, "");
  for (const ext of [".jpg", ".jpeg", ".png", ".webp", ".avif"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", base + ext))) {
      return base + ext;
    }
  }
  return null;
}

export const metadata: Metadata = {
  title: "Menú de Catering",
  description:
    "Pizzas al horno de leña, pastas artesanales y más para tu evento.",
};

const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Menú de catering"
        title="Nuestro menú para eventos"
        subtitle={menu.intro}
      />

      <Container className="py-16 sm:py-20">
        {menu.organicNote && (
          <div className="mx-auto mb-14 max-w-2xl rounded-2xl border border-gold/30 bg-cream-deep p-6 text-center">
            <p className="font-serif text-lg font-semibold text-forest">
              Ingredientes orgánicos
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {menu.organicNote}
            </p>
          </div>
        )}

        <div className="space-y-16">
          {menu.categories.map((cat) => {
            const hasImages = cat.items.some((it) => "image" in it);
            return (
              <section key={cat.name}>
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-forest">{cat.name}</h2>
                  <span className="h-px flex-1 bg-gold/30" />
                </div>

                {hasImages ? (
                  /* Photo cards (pizzas) */
                  <ul className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                    {cat.items.map((item) => {
                      const imgSrc = resolveImage(
                        (item as { image?: string }).image
                      );
                      return (
                        <li
                          key={item.name}
                          className="flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-white/60 transition-shadow hover:shadow-md"
                        >
                          {imgSrc ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={imgSrc}
                              alt={item.name}
                              className="aspect-square w-full object-cover"
                            />
                          ) : (
                            <div
                              className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-forest/10 via-cream-deep to-gold/15"
                              aria-hidden="true"
                            >
                              <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                strokeWidth={1.25}
                                stroke="currentColor"
                                className="h-9 w-9 text-gold/60"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                              </svg>
                            </div>
                          )}
                          <div className="flex flex-1 flex-col p-4 sm:p-5">
                            <h3 className="font-serif text-base font-semibold text-forest sm:text-lg">
                              {item.name}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  /* Text list (pastas, ensaladas, etc.) */
                  <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                    {cat.items.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-gold/15 pb-4"
                      >
                        <p className="font-serif text-lg font-semibold text-ink">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm text-muted">
                          {item.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>

        {/* Pricing note */}
        <div className="mt-16 rounded-2xl bg-forest p-8 text-center text-cream sm:p-12">
          <p className="font-serif text-3xl font-bold">
            Paquetes desde{" "}
            <span className="font-sans tracking-tight tabular-nums">
              {featuredPackage.pricePerPerson}
            </span>{" "}
            por persona
          </p>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            {featuredPackage.note} Personalizamos el menú según tu evento.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              <svg
                viewBox="0 0 32 32"
                className="h-4 w-4 fill-white"
                aria-hidden="true"
              >
                <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.62h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06A12.71 12.71 0 0 0 16.003 3.2Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.55 10.55 0 0 1-1.62-5.62c0-5.86 4.77-10.62 10.64-10.62 2.84 0 5.5 1.11 7.5 3.12a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.77 10.62-10.63 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64 0 1.56 1.13 3.06 1.29 3.27.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
              </svg>
              Cotiza por WhatsApp
            </a>
            <Link
              href="/paquetes"
              className="inline-flex items-center rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Ver paquetes
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
