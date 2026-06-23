import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHeader } from "@/components/Section";
import { menu, featuredPackage } from "@/lib/content";

export const metadata: Metadata = {
  title: "Menú de Catering",
  description:
    "Pizzas al horno de leña, pastas artesanales y más para tu evento.",
};

export default function MenuPage() {
  return (
    <>
      <PageHeader
        eyebrow="Menú de catering"
        title="Nuestro menú para eventos"
        subtitle={menu.intro}
      />

      <Container className="py-16 sm:py-20">
        <div className="space-y-16">
          {menu.categories.map((cat) => (
            <section key={cat.name}>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-forest">{cat.name}</h2>
                <span className="h-px flex-1 bg-gold/30" />
              </div>
              <ul className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-gold/15 pb-4"
                  >
                    <p className="font-serif text-lg font-semibold text-ink">
                      {item.name}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Pricing note */}
        <div className="mt-16 rounded-2xl bg-forest p-8 text-center text-cream sm:p-12">
          <p className="font-serif text-3xl font-bold">
            Paquetes desde {featuredPackage.pricePerPerson} por persona
          </p>
          <p className="mx-auto mt-3 max-w-xl text-cream/80">
            {featuredPackage.note} Personalizamos el menú según tu evento.
          </p>
          <Link
            href="/contacto"
            className="mt-7 inline-block rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
          >
            Solicitar cotización
          </Link>
        </div>
      </Container>
    </>
  );
}
