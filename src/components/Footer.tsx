import Link from "next/link";
import { nav, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-cream/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 md:grid-cols-3">
        {/* Brand */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Trattoria Giovanni"
            className="h-20 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.tagline}</p>
          <p className="mt-3 text-xs italic text-gold-light">{site.heritage}</p>
        </div>

        {/* Nav */}
        <div>
          <p className="eyebrow text-gold-light">Navegación</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm transition-colors hover:text-cream">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="eyebrow text-gold-light">Contacto</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${site.phoneRaw}`} className="transition-colors hover:text-cream">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                {site.email}
              </a>
            </li>
            {site.instagram && (
              <li>
                <a href={site.instagram} className="transition-colors hover:text-cream">
                  Instagram
                </a>
              </li>
            )}
            {site.facebook && (
              <li>
                <a href={site.facebook} className="transition-colors hover:text-cream">
                  Facebook
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream/60">
          © {new Date().getFullYear()} Trattoria Giovanni. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
