import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import { LINKEDIN_PROFILE_URL, INSTAGRAM_URL, SUBSTACK_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Salvador Evangelho: co-founder of DriveSet USA, student-athlete, and the builder behind Building Above Average.",
};

const principles: [string, string][] = [
  ["Systems over motivation", "Motivation runs out. A system you can run on your worst day doesn't."],
  ["Execution over inspiration", "Ideas are cheap. What separates people is what they actually ship."],
  ["Frameworks over feelings", "Decisions get better when they're structured, not improvised."],
  ["Compounding over intensity", "Small, repeated actions beat sporadic bursts of effort."],
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-charcoal text-cream">
        <section className="hero-bg grain py-20 sm:py-28 border-b border-charcoal">
          <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-[220px_1fr] gap-10 items-center">
            <Reveal>
              <div className="mx-auto sm:mx-0 w-40 sm:w-full aspect-square relative overflow-hidden border-2 border-lime">
                <Image
                  src="/images/headshot.png"
                  alt="Salvador Evangelho"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
            <Reveal delay>
              <p className="text-lime text-xs uppercase tracking-widest mb-3">About</p>
              <h1 className="font-serif text-3xl sm:text-5xl leading-tight mb-4">
                Salvador Evangelho
              </h1>
              <p className="text-base sm:text-lg mb-8" style={{ color: "#a3a29b" }}>
                Co-founder of DriveSet USA, a B2B outbound agency. Student-athlete and team
                captain at Goshen College. Prop firm trader. Building Above Average is where I
                write about the systems behind all of it.
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[
                  ["4,000+", "readers across all platforms"],
                  ["25", "weeks running"],
                  ["2,300", "LinkedIn followers"],
                  ["1,500", "Substack subscribers"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <div className="font-serif text-2xl text-lime">{value}</div>
                    <div className="text-xs uppercase tracking-wide" style={{ color: "#7a7a73" }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 border-b border-charcoal">
          <div className="max-w-3xl mx-auto px-6 prose-baa">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl mb-6">Why Building Above Average</h2>
              <p>
                I run DriveSet USA, a cold email and outbound client acquisition agency, where I
                own the calls, the strategy, and the client relationships. I trade NQ futures and
                AUDJPY through a prop firm. I play and captain the soccer team at Goshen College.
                And I run a barber business on campus.
              </p>
              <p>
                None of that works without systems. Building Above Average is the record of what
                I actually use: the frameworks, the time-blocking, the habit tracking, and the
                decision rules that let me run four different things without dropping any of them.
              </p>
              <p>
                Every Friday, the newsletter shares one idea, one quote, and one question. No
                filler, no motivational fluff, just what's actually working and what isn't.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-charcoal-soft py-20 border-b border-charcoal">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl text-center mb-12">
                The principles behind the build
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-8">
              {principles.map(([title, body], i) => (
                <Reveal key={title} delay={i % 2 === 1}>
                  <div className="border-t border-charcoal pt-6">
                    <span style={{ color: "var(--lime)" }}>▲</span>
                    <h3 className="font-serif text-lg mt-4 mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#a3a29b" }}>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl mb-4">Follow the build</h2>
              <p className="text-sm mb-8" style={{ color: "#a3a29b" }}>
                Get one idea, one quote, and one question every Friday, or follow along on
                LinkedIn, Substack, and Instagram.
              </p>
              <div className="max-w-sm mx-auto mb-8">
                <NewsletterForm id="nl-about" variant="lime" buttonLabel="Join free" />
              </div>
              <div className="flex justify-center gap-6 text-sm" style={{ color: "#a3a29b" }}>
                <a href={LINKEDIN_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">
                  LinkedIn
                </a>
                <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">
                  Substack
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">
                  Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
