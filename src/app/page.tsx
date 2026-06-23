import Link from "next/link";
import { Container, Eyebrow } from "@/components/Section";
import { FaqAccordion } from "@/components/FaqAccordion";
import {
  hero,
  services,
  featuredPackage,
  testimonials,
  site,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden bg-forest-dark text-cream">
        {/* Soft decorative gradient */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 60% at 80% 10%, rgba(184,145,80,0.35) 0%, transparent 60%), radial-gradient(50% 50% at 10% 90%, rgba(181,70,43,0.35) 0%, transparent 60%)",
          }}
        />
        <Container className="relative py-24 sm:py-32">
          <div className="max-w-2xl">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80">{hero.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href={hero.primaryCta.href}
                className="rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
              >
                {hero.primaryCta.label}
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

      {/* ---------------- SERVICES ---------------- */}
      <Container className="py-20 sm:py-24">
        <div className="text-center">
          <Eyebrow>Nuestro servicio</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold text-forest sm:text-4xl">
            Todo lo que tu evento necesita
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-gold/20 bg-white/60 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-forest">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
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
              <p className="mt-6 font-serif text-5xl font-bold text-terracotta">
                {featuredPackage.pricePerPerson}
                <span className="ml-2 text-base font-normal text-muted">
                  por persona
                </span>
              </p>
              <Link
                href="/contacto"
                className="mt-8 inline-block rounded-full bg-forest px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
              >
                Solicitar cotización
              </Link>
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
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="flex flex-col rounded-2xl border border-gold/20 bg-white/60 p-7"
            >
              <span className="font-serif text-4xl leading-none text-gold" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-ink/90 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-forest">
                {t.author}
              </figcaption>
            </figure>
          ))}
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
            <Link
              href="/contacto"
              className="rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              Solicitar cotización
            </Link>
            <Link
              href="/reservar"
              className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
            >
              Reservar una llamada
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
