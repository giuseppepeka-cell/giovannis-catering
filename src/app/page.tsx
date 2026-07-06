import Link from "next/link";
import { Container, Eyebrow } from "@/components/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  hero,
  services,
  featuredPackage,
  process as bookingProcess,
  site,
} from "@/lib/content";

export default function Home() {
  const whatsappHref = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  // Split the title at the first comma so we can force a line break on phones
  // (keeps "llevada …" starting on the dark left side, where it stays legible).
  const commaIdx = hero.title.indexOf(", ");
  const titleFirst =
    commaIdx === -1 ? hero.title : hero.title.slice(0, commaIdx);
  const titleRest = commaIdx === -1 ? "" : hero.title.slice(commaIdx + 2);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-forest-dark text-cream">
        {/* Hero background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Green gradient: solid on the left, fading to reveal the photo on the right (all sizes) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #163126 0%, #163126 25%, rgba(22,49,38,0.85) 45%, rgba(22,49,38,0) 80%)",
          }}
        />
        <Container className="relative py-24 sm:py-32">
          <div className="max-w-2xl">
            <Eyebrow className="[text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
              {hero.eyebrow}
            </Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              {titleFirst}
              {titleRest && (
                <>
                  ,<br className="sm:hidden" /> {titleRest}
                </>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80">{hero.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4">
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
                {hero.primaryCta.label}
              </a>
              <Link
                href="/reservar"
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-white"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.82 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.21 1.42.96 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  />
                </svg>
                Reservar una llamada
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                {hero.secondaryCta.label}
              </Link>
            </div>
            <p className="mt-8 text-sm italic text-gold-light">{site.heritage}</p>
          </div>
        </Container>
      </section>

      {/* ---------------- BOOKING PROCESS (timeline) ---------------- */}
      <section className="border-b border-gold/15 bg-cream-deep">
        <Container className="py-12 sm:py-14">
          <ol className="mx-auto grid max-w-3xl grid-cols-4">
            {bookingProcess.steps.map((step, i) => (
              <li
                key={step}
                className="relative flex flex-col items-center text-center"
              >
                {/* connector line to the next step (scales at every size) */}
                {i < bookingProcess.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-4 h-0.5 w-full -translate-y-1/2 bg-gold/70 sm:top-5"
                  />
                )}
                <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-forest text-sm font-bold leading-none tabular-nums text-cream sm:h-10 sm:w-10 sm:text-base">
                  {i + 1}
                </span>
                <span className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-forest sm:mt-3 sm:text-sm">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-base italic text-muted">
            {bookingProcess.note}
          </p>
        </Container>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <Container className="py-20 sm:py-24">
        <div className="text-center">
          <Eyebrow>Nuestro servicio</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">
            Todo lo que tu evento necesita
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-white/60 transition-shadow hover:shadow-md"
            >
              {/* Image (or styled placeholder until real photos arrive) */}
              {s.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={s.image}
                  alt={s.title}
                  style={{ objectPosition: s.imagePosition }}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-forest/10 via-cream-deep to-gold/15">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth={1.25}
                    stroke="currentColor"
                    className="h-10 w-10 text-gold/70"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
              )}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-forest sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* ---------------- FEATURED PACKAGE ---------------- */}
      <section className="bg-cream-deep">
        <Container className="py-20 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow>Paquete destacado</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">
                {featuredPackage.name}
              </h2>
              <p className="mt-4 text-muted">{featuredPackage.note}</p>
              <p className="mt-6 text-5xl font-bold tracking-tight text-terracotta tabular-nums">
                {featuredPackage.pricePerPerson}
                <span className="ml-2 text-base font-normal tracking-normal text-muted">
                  por persona
                </span>
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
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
                  className="inline-flex items-center rounded-full border border-forest/30 px-7 py-3.5 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
                >
                  Más paquetes
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 rounded-2xl border border-gold/30 bg-white/70 p-8">
              {featuredPackage.includes.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-terracotta" aria-hidden="true">
                    ✦
                  </span>
                  <span className="text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* ---------------- TESTIMONIALS ---------------- */}
      <Container className="py-20 sm:py-24">
        <div className="text-center">
          <Eyebrow>Lo que dicen</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">
            Eventos que recuerdan
          </h2>
        </div>
        <div className="mt-12">
          <TestimonialsCarousel />
        </div>
      </Container>

      {/* ---------------- FAQ ---------------- */}
      <section className="bg-cream-deep">
        <Container className="py-20 sm:py-24">
          <div className="text-center">
            <Eyebrow>Preguntas frecuentes</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">
              ¿Tienes dudas?
            </h2>
          </div>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </Container>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <section className="bg-forest text-cream">
        <Container className="py-16 text-center sm:py-20">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Hagamos de tu evento algo inolvidable
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-cream/80">
            Cuéntanos sobre tu celebración y te enviaremos una cotización a la medida.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
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
              href="/reservar"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-white"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.82 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.21 1.42.96 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                />
              </svg>
              Reservar una llamada
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
