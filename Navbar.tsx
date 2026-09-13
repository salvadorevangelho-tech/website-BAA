"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/planner", label: "Planner" },
  { href: "/time-stack", label: "Time Stack" },
  { href: "/life-os", label: "Life OS" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-charcoal"
      style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(6px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: "#a3a29b" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-cream transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/#waitlist"
            className="hidden sm:inline-block border border-lime text-lime text-xs sm:text-sm font-semibold uppercase tracking-wide px-4 py-2 hover:bg-lime hover:text-charcoal transition-colors"
          >
            Start Building
          </Link>
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 border border-charcoal text-cream"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M0 2H16M0 8H16M0 14H16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-charcoal px-6 py-4 flex flex-col gap-4 text-sm"
          style={{ background: "#000", color: "#a3a29b" }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-cream transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="border border-lime text-lime text-xs font-semibold uppercase tracking-wide px-4 py-3 text-center hover:bg-lime hover:text-charcoal transition-colors mt-2"
            onClick={() => setOpen(false)}
          >
            Start Building
          </Link>
        </nav>
      )}
    </header>
  );
}
