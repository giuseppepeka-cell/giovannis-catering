"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";

const INTERVAL = 5000; // ms between auto-advances

export function TestimonialsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused, active, count]);

  return (
    <div
      className="mx-auto max-w-2xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides cross-fade in place */}
      <div className="relative min-h-[350px] sm:min-h-[230px]">
        {testimonials.map((t, i) => (
          <figure
            key={i}
            aria-hidden={i !== active}
            className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-opacity duration-700 ${
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <span
              className="font-serif text-5xl leading-none text-gold"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="mt-4 text-lg leading-relaxed text-ink/90">
              {t.quote}
            </blockquote>
            {(t.image || t.author) && (
              <figcaption className="mt-6 flex items-center justify-center gap-3">
                {t.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={t.image}
                    alt={t.author}
                    style={{
                      objectFit:
                        (t as { imageFit?: "cover" | "contain" }).imageFit ??
                        "cover",
                    }}
                    className="h-11 w-11 rounded-full bg-cream-deep"
                  />
                )}
                {t.author && (
                  <span className="text-sm font-semibold text-forest">
                    {t.author}
                  </span>
                )}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Dots — also let the visitor jump to a review */}
      <div className="mt-8 flex justify-center gap-2.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ver reseña ${i + 1}`}
            aria-current={i === active}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              i === active ? "bg-terracotta" : "bg-gold/40 hover:bg-gold/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
