import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Section";
import { packages, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Paquetes",
  description:
    "Conoce nuestros paquetes de catering italiano para eventos, con precios por persona.",
};

// Pre-filled WhatsApp link that mentions the chosen package.
function waHref(packageName: string) {
  const text = `¡Hola! Me interesa el ${packageName} para mi evento. ¿Me pueden dar más información?`;
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
}

export default function PaquetesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Paquetes"
        title="Nuestros paquetes"
        subtitle="Elige el que mejor se adapte a tu evento. Todos son adaptables según tus invitados y tu menú."
        image="/hero-paquetes.png"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-md ${
                pkg.highlight
                  ? "border-forest bg-white shadow-sm ring-1 ring-forest/15"
                  : "border-gold/20 bg-white/60"
              }`}
            >
              {pkg.tag && (
                <span
                  className={`absolute -top-3 left-8 rounded-full px-3 py-1 text-xs font-semibold ${
                    pkg.highlight
                      ? "bg-forest text-cream"
                      : "bg-gold text-cream"
                  }`}
                >
                  {pkg.tag}
                </span>
              )}

              <h2 className="font-serif text-2xl font-bold text-forest">
                {pkg.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{pkg.guests}</p>

              <p className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-bold tracking-tight text-terracotta tabular-nums">
                  {pkg.price}
                </span>
                <span className="text-sm text-muted">{pkg.unit}</span>
              </p>
              {pkg.note && (
                <p className="mt-1 text-xs italic text-muted">{pkg.note}</p>
              )}

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {pkg.description}
              </p>

              <ul className="mt-6 flex-1 space-y-2.5 border-t border-gold/15 pt-6">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-ink">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waHref(pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-cream transition-colors ${
                  pkg.highlight
                    ? "bg-terracotta hover:bg-terracotta-dark"
                    : "bg-forest hover:bg-forest-dark"
                }`}
              >
                <WhatsAppIcon />
                Cotizar por WhatsApp
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted">
          Precios por persona en pesos mexicanos. Todos los paquetes se adaptan a
          tu evento; escríbenos y armamos la cotización perfecta para ti.
        </p>
      </Container>
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="mt-0.5 h-4 w-4 shrink-0 text-terracotta"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0l-3.5-3.5a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white" aria-hidden="true">
      <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.46 1.73 6.4L3.2 28.8l6.57-1.72a12.74 12.74 0 0 0 6.23 1.62h.01c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.33-6.64-3.75-9.06A12.71 12.71 0 0 0 16.003 3.2Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.9 1.02 1.04-3.8-.25-.4a10.55 10.55 0 0 1-1.62-5.62c0-5.86 4.77-10.62 10.64-10.62 2.84 0 5.5 1.11 7.5 3.12a10.55 10.55 0 0 1 3.11 7.51c0 5.86-4.77 10.62-10.63 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64 0 1.56 1.13 3.06 1.29 3.27.16.21 2.22 3.39 5.38 4.76.75.32 1.34.51 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}
