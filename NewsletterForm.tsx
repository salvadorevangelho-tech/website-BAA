"use client";

import { useState } from "react";
import { LEMON_SQUEEZY_SUBSCRIBE_URL } from "@/lib/constants";

type Variant = "lime" | "outline" | "outlineDark" | "outlineLight" | "solid";

const variantStyles: Record<
  Variant,
  { input: string; button: string; rounded?: boolean }
> = {
  lime: {
    input: "input-dark border-[#3a3a35]",
    button: "bg-lime text-charcoal border-none",
    rounded: true,
  },
  outline: {
    input: "input-dark border-[#3a3a35]",
    button: "bg-transparent border border-lime text-lime",
  },
  outlineDark: {
    input: "input-dark border-[#3a3a35]",
    button: "bg-transparent border border-[#3a3a35] text-cream",
  },
  outlineLight: {
    input: "input-light border-[#d8d2c2]",
    button: "bg-transparent border border-charcoal text-charcoal",
  },
  solid: {
    input: "input-light border-[#d8d2c2]",
    button: "bg-charcoal text-lime border-none",
  },
};

export default function NewsletterForm({
  variant = "outline",
  id,
  buttonLabel = "Join free",
  stacked = false,
}: {
  variant?: Variant;
  id: string;
  buttonLabel?: string;
  stacked?: boolean;
}) {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const styles = variantStyles[variant];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("email") as HTMLInputElement;
    const email = input.value;
    if (!email) return;

    setSubmitting(true);

    const tempForm = document.createElement("form");
    tempForm.method = "POST";
    tempForm.action = LEMON_SQUEEZY_SUBSCRIBE_URL;
    tempForm.target = "_blank";
    tempForm.style.display = "none";
    const field = document.createElement("input");
    field.type = "hidden";
    field.name = "email";
    field.value = email;
    tempForm.appendChild(field);
    document.body.appendChild(tempForm);
    tempForm.submit();
    document.body.removeChild(tempForm);

    setSubmitting(false);
    setStatus("done");
    input.value = "";
  }

  return (
    <div className={stacked ? "w-full" : "w-full"}>
      <form
        onSubmit={handleSubmit}
        className={`flex ${stacked ? "flex-col" : "flex-col sm:flex-row"} gap-2 w-full`}
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className={`flex-1 text-sm px-4 py-3 bg-transparent border outline-none ${styles.input} ${
            styles.rounded ? "rounded-full" : ""
          }`}
        />
        <button
          type="submit"
          disabled={submitting}
          className={`text-sm font-semibold uppercase tracking-wide px-6 py-3 hover:opacity-90 whitespace-nowrap transition-opacity ${styles.button} ${
            styles.rounded ? "rounded-full" : ""
          }`}
        >
          {submitting ? "Joining..." : buttonLabel}
        </button>
      </form>
      {status === "done" && (
        <div
          className="flex items-center gap-2 text-xs mt-2 px-3 py-2"
          style={{
            color: "#CFF43A",
            border: "1px solid rgba(207,244,58,0.35)",
            background: "rgba(207,244,58,0.08)",
          }}
          role="status"
        >
          <span aria-hidden="true">✓</span>
          <span>We opened a confirmation tab, finish there and you&apos;re on the list.</span>
        </div>
      )}
    </div>
  );
}
