import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import DashboardMock from "@/components/DashboardMock";

export const metadata: Metadata = {
  title: "Life OS",
  description:
    "Life OS: one dashboard, 17 modules, all connected to the same data. Habits, goals, deep work, health, and business in one place.",
};

const modules = [
  "Dashboard", "Habits", "Goals", "Tasks", "Journal", "Deep Work", "Learning",
  "Health", "Mood", "Business", "Reading", "Content", "Analytics", "AI Insights",
  "Monthly Report", "Calendar", "Data Vault",
];

const comparison: [string, string, string][] = [
  ["Setup time", "Hours of building templates", "Add one habit, start today"],
  ["Where your data lives", "Scattered across tabs and docs", "One dashboard, everything linked"],
  ["Analytics", "Manual, if you remember to update it", "Automatic, from your daily logs"],
];

export default function LifeOsPage() {
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
              <h1 className="font-serif text-4xl sm:text-6xl leading-tight mb-6">Life OS</h1>
              <p className="text-base sm:text-lg max-w-xl mx-auto mb-4" style={{ color: "#a3a29b" }}>
                One dashboard, 17 modules, all connected to the same data. No separate apps for
                habits, tasks, journaling, and analytics.
              </p>
              <div className="flex items-baseline gap-2 justify-center mb-8">
                <span className="text-sm line-through" style={{ color: "#6f6f68" }}>$7.99</span>
                <span className="font-serif text-3xl">
                  $5.99<span className="text-base" style={{ color: "#7a7a73" }}>/mo</span>
                </span>
              </div>
              <div className="max-w-md mx-auto">
                <NewsletterForm id="nl-lifeos-hero" variant="lime" buttonLabel="Join the waitlist" />
              </div>
              <p className="text-[11px] mt-4" style={{ color: "#7a7a73" }}>
                Lock in $5.99/month for good. Price moves to $7.99 for everyone after launch.
              </p>
            </Reveal>
            <Reveal>
              <DashboardMock />
            </Reveal>
          </div>
        </section>

        <section className="py-20 border-b border-charcoal">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <p className="text-lime text-xs uppercase tracking-widest text-center mb-3">
                What you get access to
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-center mb-12">
                Everything inside Life OS
              </h2>
            </Reveal>
            <Reveal className="flex flex-wrap justify-center gap-3">
              {modules.map((m) => (
                <span
                  key={m}
                  className="text-sm px-4 py-2 border"
                  style={{ borderColor: "#2c2c27", color: "#e9e7de", background: "#141510" }}
                >
                  {m}
                </span>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="py-20 border-b border-charcoal">
          <div className="max-w-3xl mx-auto px-6">
            <Reveal>
              <h2 className="font-serif text-3xl sm:text-4xl text-center mb-4">
                Notion and spreadsheets, <span className="text-lime">or Life OS</span>
              </h2>
              <p className="text-sm text-center mb-12" style={{ color: "#a3a29b" }}>
                You could build this yourself. Most people start and never finish.
              </p>
            </Reveal>
            <Reveal>
              <div className="border border-charcoal">
                <div className="grid grid-cols-3 text-xs uppercase tracking-wide" style={{ color: "#7a7a73" }}>
                  <div className="p-4" />
                  <div className="p-4 border-l border-charcoal">Notion + Sheets</div>
                  <div className="p-4 border-l border-charcoal text-lime">Life OS</div>
                </div>
                {comparison.map(([label, a, b]) => (
                  <div key={label} className="grid grid-cols-3 text-sm border-t border-charcoal">
                    <div className="p-4" style={{ color: "#c9c7bd" }}>{label}</div>
                    <div className="p-4 border-l border-charcoal" style={{ color: "#6f6f68" }}>{a}</div>
                    <div className="p-4 border-l border-charcoal" style={{ color: "#e9e7de" }}>{b}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20 bg-charcoal-soft">
          <div className="max-w-md mx-auto px-6 text-center">
            <Reveal>
              <h2 className="font-serif text-2xl sm:text-3xl mb-4">
                Currently building. Join the waitlist to lock in $5.99/month.
              </h2>
              <p className="text-sm mb-8" style={{ color: "#a3a29b" }}>
                No payment now. You&apos;ll be first to know the moment Life OS opens up, at the
                early access price.
              </p>
              <NewsletterForm id="nl-lifeos-final" variant="lime" buttonLabel="Join the waitlist" />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
