import { ReactNode } from "react";

/** Small uppercase label shown above a section title. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow text-terracotta">{children}</p>;
}

/** A page hero band with a centered title and optional subtitle. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-3 text-4xl font-bold text-forest sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">{subtitle}</p>
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
