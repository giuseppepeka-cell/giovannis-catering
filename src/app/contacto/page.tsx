import type { Metadata } from "next";
import { Container, PageHeader } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una cotización para el catering de tu evento con Trattoria Giovanni.",
};

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Solicita tu cotización"
        subtitle="Cuéntanos sobre tu evento y te enviaremos una propuesta a la medida."
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Direct contact details */}
          <aside className="space-y-6">
            <div>
              <p className="eyebrow text-terracotta">Contacto directo</p>
              <h2 className="mt-2 font-serif text-2xl font-bold text-forest">
                ¿Prefieres escribirnos?
              </h2>
            </div>
            <ul className="space-y-4 text-ink">
              <li>
                <span className="block text-sm text-muted">WhatsApp / Teléfono</span>
                <a
                  href={`https://wa.me/${site.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest hover:text-terracotta"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <span className="block text-sm text-muted">Correo electrónico</span>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-forest hover:text-terracotta"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="rounded-xl bg-cream-deep p-5 text-sm text-muted">
              <span className="italic">{site.heritage}</span>. Atendemos eventos a
              partir de 30 personas.
            </p>
          </aside>

          {/* The form */}
          <div className="rounded-2xl border border-gold/20 bg-white/60 p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </>
  );
}
