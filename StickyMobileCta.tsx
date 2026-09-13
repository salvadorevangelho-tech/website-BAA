"use client";

import { useEffect, useState } from "react";

export default function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 700);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between gap-3 px-4 py-3 border-t transition-transform duration-300"
      style={{
        background: "#000",
        borderColor: "#2c2c27",
        transform: show ? "translateY(0)" : "translateY(100%)",
      }}
    >
      <div className="text-cream text-xs">
        <span className="line-through mr-1" style={{ color: "#6f6f68" }}>
          $7.99
        </span>
        <span className="text-lime font-semibold">$5.99/mo</span>
        <span className="ml-1" style={{ color: "#7a7a73" }}>
          early access
        </span>
      </div>
      <a
        href="#waitlist"
        className="bg-lime text-charcoal text-xs font-semibold uppercase tracking-wide px-4 py-2"
      >
        Join Waitlist
      </a>
    </div>
  );
}
