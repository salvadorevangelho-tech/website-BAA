import Link from "next/link";
import {
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LINKEDIN_PROFILE_URL,
  SUBSTACK_URL,
} from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal" style={{ background: "#000", color: "#7a7a73" }}>
      <div className="max-w-6xl mx-auto px-6 py-10 text-center border-b border-charcoal">
        <p className="font-serif text-xl sm:text-2xl text-cream mb-6">
          Stop managing your life in fragments.
        </p>
        <Link
          href="/#waitlist"
          className="inline-block bg-lime text-charcoal text-sm font-semibold uppercase tracking-wide px-6 py-3 hover:opacity-90 transition-opacity"
        >
          Start here, join the newsletter
        </Link>
        <p className="text-xs mt-5" style={{ color: "#6f6f68" }}>
          YouTube and a community are next. Newsletter subscribers hear first.
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 py-12">
        <Logo />
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-xs hover:text-cream transition-colors">
          {CONTACT_EMAIL}
        </a>
        <div className="flex items-center gap-4">
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cream transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-cream transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="hover:text-cream transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 3h18v3.6H3V3zm0 5.4h18V12H3V8.4zm0 5.4h18v.9L12 21l-9-6.3v-.9z" />
            </svg>
          </a>
        </div>
        <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-wide justify-center">
          <Link href="/about" className="hover:text-cream transition-colors">
            About
          </Link>
          <Link href="/newsletter" className="hover:text-cream transition-colors">
            Newsletter
          </Link>
          <Link href="/planner" className="hover:text-cream transition-colors">
            Planner
          </Link>
          <Link href="/time-stack" className="hover:text-cream transition-colors">
            Time Stack
          </Link>
          <Link href="/life-os" className="hover:text-cream transition-colors">
            Life OS
          </Link>
          <Link href="/privacy-policy" className="hover:text-cream transition-colors">
            Privacy
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-cream transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
