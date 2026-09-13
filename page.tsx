import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Weekly Planner",
  description:
    "The free Weekly Planner: the priority framework and time-blocking template 4,000+ readers use to reclaim 6+ hours a week.",
};

const features: [string, string][] = [
  ["Priority framework", "A simple filter for deciding what actually earns your time this week."],
  ["Time-blocking template", "Pre-built blocks for deep work, admin, and recovery, ready to drop into your calendar."],
  ["Weekly review ritual", "A 10 minute Sunday reset that closes the loop on the week before."],
  ["Habit tracker", "Track the handful of habits that move everything else."],
];

export default function PlannerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-charcoal text-cream">
        <section className="hero-bg grain py-20 sm:py-28 border-b border-charcoal">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <div className="flex items-baseline gap-2 justify-center mb-4">
                <span className="text-xs line-through" style={{ color: "#6f6f68" }}>$12/mo</span>
                <span className="text-lime text-lg font-semibold">100% FREE</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl leading-tight mb-6">
                The Weekly Planner
              </h1>
              <p className="text-base sm:text-lg max-w-xl mx-auto mb-10" style={{ color: "#a3a29b" }}>
                Organize your week. More time, less chaos. The exact priority framework and
                time-blocking template 4,000+ readers use to reclaim 6+ hours weekly, free inside
                the newsletter.
              </p>
              <div className="max-w-md mx-auto">
                <NewsletterForm id="nl-planner-hero" variant="lime" buttonLabel="Claim Your Template" />
              </div>
              <p className="text-[11px] mt-4" style={{ color: "#7a7a73" }}>
                Instant download · No spam · Unsubscribe anytime
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 border-b border-charcoal">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl text-center mb-12">
                What&apos;s inside
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map(([title, body], i) => (
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

        <section className="py-20 bg-charcoal-soft">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl mb-4">
                Want a full 7 day system, not just the template?
              </h2>
              <p className="text-sm mb-8" style={{ color: "#a3a29b" }}>
                The Time Stack builds it out for you, step by step, delivered straight to your
                inbox.
              </p>
              <a
                href="/time-stack"
                className="inline-block text-sm font-semibold uppercase tracking-wide px-8 py-3 hover:opacity-90 transition-opacity"
                style={{ background: "var(--lime)", color: "var(--charcoal)" }}
              >
                See The Time Stack
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
