import { ReactNode } from "react";

/** Small uppercase label shown above a section title. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`eyebrow text-terracotta ${className}`}>{children}</p>;
}

/**
 * A page hero band with a centered title and optional subtitle.
 *
 * Pass `image` (a path in /public) to show a background photo behind the text,
 * covered by a flat green tint so the photo still reads but the text stays
 * legible. With no image it falls back to the plain cream band. Until the image
 * file is added the section shows a solid dark-green band (the tint base).
 */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image,
  imagePosition,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  // CSS object-position for the background photo, e.g. "50% 65%" to show a
  // lower part of the image when the subject sits too high. Defaults to center.
  imagePosition?: string;
}) {
  const hasImage = Boolean(image);
  return (
    <section
      className={`relative overflow-hidden ${
        hasImage ? "bg-forest-dark" : "bg-cream-deep"
      }`}
    >
      {hasImage && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            style={imagePosition ? { objectPosition: imagePosition } : undefined}
          />
          {/* Flat green tint — no fade, just opacity so the photo shows through. */}
          <div className="absolute inset-0 bg-forest-dark/80" aria-hidden />
        </>
      )}
      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1
          className={`mt-3 text-4xl font-bold sm:text-5xl ${
            hasImage
              ? "text-cream [text-shadow:0_2px_6px_rgba(0,0,0,0.45)]"
              : "text-forest"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mx-auto mt-4 max-w-xl text-lg ${
              hasImage
                ? "text-cream/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.4)]"
                : "text-muted"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/** Standard horizontal page container with vertical padding. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-5 ${className}`}>{children}</div>
  );
}
