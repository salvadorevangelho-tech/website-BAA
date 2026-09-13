import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import { LINKEDIN_NEWSLETTER_URL, SUBSTACK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Every Friday: one idea, one quote, one question. Browse past editions of Building Above Average.",
};

// Edit this list as new editions publish. `href` can point at the LinkedIn
// edition, a Substack post, or an internal page once one exists.
const editions: { number: number; title: string; blurb: string; readTime: string; href: string }[] = [
  {
    number: 31,
    title: "Every framework I ship has to be used, not read",
    blurb:
      "25 weeks. 2,300 LinkedIn followers. 1,500 Substack subscribers. One rule I don't break anymore.",
    readTime: "1 min read",
    href: LINKEDIN_NEWSLETTER_URL,
  },
  {
    number: 30,
    title: "2,200 Active readers",
    blurb:
      "One thing stands out: the people who sign up and stay are the ones who actually use what they read.",
    readTime: "1 min read",
    href: LINKEDIN_NEWSLETTER_URL,
  },
  {
    number: 29,
    title: "Paralyzed by What You Can't Control",
    blurb:
      "Most founders make decisions based on outcomes they can't control. The Stoic Decision Framework fixes that.",
    readTime: "1 min read",
    href: LINKEDIN_NEWSLETTER_URL,
  },
  {
    number: 28,
    title: "Frameworks That Work",
    blurb:
      "I learned something: everything I share comes down to frameworks. Not tips, not motivation.",
    readTime: "1 min read",
    href: LINKEDIN_NEWSLETTER_URL,
  },
  {
    number: 27,
    title: "Why Systems Beat Motivation",
    blurb:
      "I tested one thing. If a system is right, it performs over time. Not in week 1, in week 12.",
    readTime: "1 min read",
    href: LINKEDIN_NEWSLETTER_URL,
  },
  {
    number: 26,
    title: "Best Loser WINS",
    blurb:
      "That's right, the best loser will ALWAYS WIN, every time. Most people lose the wrong things.",
    readTime: "2 min read",
    href: LINKEDIN_NEWSLETTER_URL,
  },
];

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="bg-charcoal text-cream">
        <section className="hero-bg grain py-20 sm:py-24 border-b border-charcoal">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <p className="text-lime text-xs uppercase tracking-widest mb-3">Free, every Friday</p>
              <h1 className="font-serif text-4xl sm:text-5xl leading-tight mb-6">
                The Building Above Average newsletter
              </h1>
              <p className="text-base sm:text-lg mb-10" style={{ color: "#a3a29b" }}>
                One idea, one quote, one question. Join 4,000+ readers and get instant access to
                &ldquo;Attention is the new currency&rdquo; the moment you sign up.
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm id="nl-newsletter-hero" variant="lime" buttonLabel="Join free" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl mb-10">Past editions</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {editions.map((edition, i) => (
                <Reveal key={edition.number} delay={i % 3 !== 0}>
                  <a
                    href={edition.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full border border-charcoal hover:border-lime transition-colors p-6 group"
                  >
                    <div
                      className="aspect-[4/3] mb-5 flex flex-col items-center justify-center text-center p-5 border"
                      style={{
                        borderColor: "#2c2c27",
                        background:
                          "radial-gradient(ellipse 90% 70% at 70% 15%, rgba(207,244,58,0.12), transparent 55%), #0a0d09",
                      }}
                    >
                      <span
                        className="text-[9px] uppercase tracking-widest font-semibold mb-3"
                        style={{ color: "#7a7a73" }}
                      >
                        Building Above Average
                      </span>
                      <span style={{ color: "var(--lime)" }} className="mb-3">▲</span>
                      <p className="font-serif text-sm leading-snug" style={{ color: "#e9e7de" }}>
                        {edition.title}
                      </p>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 mb-2">
                      <span className="text-xs uppercase tracking-widest" style={{ color: "#7a7a73" }}>
                        Edition {edition.number}
                      </span>
                      <span className="text-[11px]" style={{ color: "#55554e" }}>
                        {edition.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg mb-2 leading-snug">{edition.title}</h3>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: "#a3a29b" }}>
                      {edition.blurb}
                    </p>
                    <span className="text-lime text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                      Read on LinkedIn →
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="text-sm mt-10 text-center" style={{ color: "#7a7a73" }}>
                All editions publish first on{" "}
                <a
                  href={LINKEDIN_NEWSLETTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime hover:opacity-80 transition-opacity"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime hover:opacity-80 transition-opacity"
                >
                  Substack
                </a>
                . Subscribe above to get each one by email too.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
