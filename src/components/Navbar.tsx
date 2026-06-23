"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/content";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gold/20 bg-cream/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Trattoria Giovanni"
            className="h-14 w-auto sm:h-16"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-terracotta ${
                    active ? "text-terracotta" : "text-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contacto"
          className="hidden whitespace-nowrap rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark lg:inline-block"
        >
          Solicitar cotización
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-forest lg:hidden"
        >
          <span className="text-3xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gold/20 bg-cream lg:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-base font-medium ${
                      active ? "text-terracotta" : "text-ink/80"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="py-3">
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream"
              >
                Solicitar cotización
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
