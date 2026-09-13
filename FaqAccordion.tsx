"use client";

import { useState } from "react";

export default function FaqAccordion({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map(([q, a], i) => (
        <div key={q} className="border-b border-charcoal py-5">
          <button
            className="w-full flex items-center justify-between text-left text-cream text-sm sm:text-base font-medium"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{q}</span>
            <span
              className="transition-transform"
              style={{
                color: "#7a7a73",
                transform: open === i ? "rotate(180deg)" : undefined,
              }}
            >
              ▾
            </span>
          </button>
          {open === i && (
            <p className="text-sm mt-3 leading-relaxed" style={{ color: "#a3a29b" }}>
              {a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
