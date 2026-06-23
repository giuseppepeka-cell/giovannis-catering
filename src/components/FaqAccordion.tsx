"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gold/20 border-y border-gold/20">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="font-serif text-lg font-bold text-forest">
                {faq.question}
              </span>
              <span
                className={`shrink-0 text-2xl text-terracotta transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 -mt-1 text-muted leading-relaxed">{faq.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
