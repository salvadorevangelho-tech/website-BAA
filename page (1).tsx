import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "The Time Stack",
  description:
    "A 7 day, done-with-you system setup delivered by email. Every framework from the newsletter, in one sequence. Currently building.",
};

const days: [string, string][] = [
  ["Day 1", "Audit your week as it actually happens, not how you think it does."],
  ["Day 2", "Install the priority framework and cut your task list down to what matters."],
  ["Day 3", "Build your time-blocking template around your real energy, not an ideal day."],
  ["Day 4", "Set up the habit tracker for the handful of habits that move everything else."],
  ["Day 5", "Run your first weekly review using the 10 minute Sunday reset."],
  ["Day 6", "Stress-test the system against a busy, unpredictable day."],
  ["Day 7", "Lock in the routine and decide what to automate or drop next."],
];

export default function TimeStackPage() {
  return (
    <>
      <Navbar />
      <main className="bg-charcoal text-cream">
        <section id="waitlist" className="hero-bg grain py-20 sm:py-28 border-b border-charcoal">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <Reveal>
              <div
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2 mb-8"
                style={{
                  border: "1px solid rgba(207,244,58,0.35)",
                  color: "var(--lime)",
                  background: "rgba(207,244,58,0.06)",
                }}
              >
                Currently being built
              </div>
              <h1 className="font-serif text-4xl sm:text-6xl leading-tight mb-6">The Time Stack</h1>
              <p className="text-base sm:text-lg max-w-xl mx-auto mb-4" style={{ color: "#a3a29b" }}>
                A 7 day system setup, delivered by email. Every framework from the newsletter,
                built into one sequence you can run without Life OS, and upgrade into later if you
                want.
              </p>
              <div className="font-serif text-3xl mb-8">$29</div>
              <div className="max-w-md mx-auto">
                <NewsletterForm id="nl-timestack-hero" variant="lime" buttonLabel="Join the waitlist" />
              </div>
              <p className="text-[11px] mt-4" style={{ color: "#7a7a73" }}>
                No payment now. You&apos;ll be first to know the moment it&apos;s ready.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 border-b border-charcoal">
          <div className="max-w-2xl mx-auto px-6">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl text-center mb-12">
                What happens each day
              </h2>
            </Reveal>
            <div className="space-y-4">
              {days.map(([day, body], i) => (
                <Reveal key={day} delay={i % 2 === 1}>
                  <div className="flex gap-4 border-b border-charcoal pb-4">
                    <span className="text-lime text-sm font-semibold uppercase tracking-wide w-16 flex-none">
                      {day}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "#a3a29b" }}>{body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-charcoal-soft">
          <div className="max-w-md mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl mb-4">
                Ready to build your week from scratch?
              </h2>
              <p className="text-sm mb-8" style={{ color: "#a3a29b" }}>
                Join the waitlist and you&apos;ll hear the moment The Time Stack opens up.
              </p>
              <NewsletterForm id="nl-timestack-final" variant="lime" buttonLabel="Join the waitlist" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
