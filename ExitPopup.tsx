"use client";

import { useEffect, useState } from "react";
import NewsletterForm from "./NewsletterForm";

export default function ExitPopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    function handleMouseOut(e: MouseEvent) {
      if (dismissed) return;
      if (e.clientY <= 0 && !e.relatedTarget) {
        setVisible(true);
      }
    }
    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, [dismissed]);

  if (!visible) return null;

  function close() {
    setVisible(false);
    setDismissed(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(2px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className="relative max-w-md w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% -10%, rgba(207,244,58,0.16), transparent 60%), #0a0d09",
          border: "1px solid rgba(207,244,58,0.18)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
        }}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 text-lg leading-none hover:opacity-70 transition-opacity"
          style={{ color: "#7a7a73" }}
        >
          ✕
        </button>
        <div className="px-8 pt-10 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <span style={{ color: "var(--lime)", fontSize: 26 }}>▲</span>
          </div>
          <p
            className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-4"
            style={{ color: "var(--lime)" }}
          >
            Wait, before you go
          </p>
          <h3
            className="font-serif leading-tight mb-4"
            style={{ color: "#F6F2E9", fontSize: "1.75rem" }}
          >
            4,000+ people use one system from this guide,{" "}
            <span style={{ color: "var(--lime)" }}>100% FREE!</span>
          </h3>
          <p className="text-sm leading-relaxed mb-5" style={{ color: "#a3a29b" }}>
            Join the newsletter and get the Weekly Planner free, plus instant access to{" "}
            <span style={{ color: "var(--lime)" }}>&ldquo;Attention Is The New Currency.&rdquo;</span>
          </p>
          <div
            className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 mb-6"
            style={{
              border: "1px solid rgba(207,244,58,0.3)",
              color: "var(--lime)",
              background: "rgba(207,244,58,0.06)",
            }}
          >
            Unlock +6h in your week without doing less work
          </div>
          <NewsletterForm id="nl-exit" variant="lime" buttonLabel="Send me the PDF" />
          <p className="text-[11px] mt-5" style={{ color: "#55554e" }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
