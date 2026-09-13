import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";
import ParticleCanvas from "@/components/ParticleCanvas";
import DashboardMock from "@/components/DashboardMock";
import FaqAccordion from "@/components/FaqAccordion";
import StickyMobileCta from "@/components/StickyMobileCta";
import ExitPopup from "@/components/ExitPopup";
import Link from "next/link";
import {
  LINKEDIN_NEWSLETTER_URL,
  LINKEDIN_PROFILE_URL,
} from "@/lib/constants";

const principles: [string, string][] = [
  ["Reduce cognitive load", "One screen shows only what matters today."],
  ["Close the loop daily", "Log it once, it feeds every weekly and monthly view."],
  ["Identity first", "Habits and goals tied to who you're becoming."],
  ["Nested reviews", "Daily data rolls up automatically over time."],
  ["Energy aware", "Track what charges you, not just time spent."],
  ["Compounding system", "The longer you log, the sharper your patterns get."],
];

const benefits: [string, string][] = [
  ["Habits", "Daily checklist, streaks, weekly consistency score."],
  ["Goals", "Link goals to the habits that actually drive them."],
  ["Deep Work", "Timed sessions, logged straight to your weekly total."],
  ["Analytics", "See your real patterns across habits, mood, output."],
  ["Business", "Revenue, projects, and content in the same dashboard."],
  ["Growth", "Journal, mood, and monthly reports from your own logs."],
];

const modules = [
  "Dashboard", "Habits", "Goals", "Tasks", "Journal", "Deep Work", "Learning",
  "Health", "Mood", "Business", "Reading", "Content", "Analytics", "AI Insights",
  "Monthly Report", "Calendar", "Data Vault",
];

const faqs: [string, string][] = [
  ["Is the newsletter really free?", "Yes, no card needed. You also get the free PDF instantly."],
  ["Can I cancel Life OS anytime?", "Yes, it is a monthly subscription with no lock in period."],
  ["What if I am not satisfied?", "Full refund within 7 days of your first payment."],
  ["Where do I pay?", "Checkout runs through Lemon Squeezy. Cards, PayPal, and Apple Pay are accepted."],
  ["Does everyone start with the same data?", "No, every account starts empty. You add your own habits and goals."],
];

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* WAITLIST */}
      <section
        id="waitlist"
        className="hero-bg grain text-cream py-20 sm:py-28 relative overflow-hidden border-b border-charcoal"
      >
        <ParticleCanvas />
        <div className="max-w-3xl mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <Reveal>
            <div
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-4 py-2 mb-8"
              style={{
                border: "1px solid rgba(207,244,58,0.35)",
                color: "var(--lime)",
                background: "rgba(207,244,58,0.06)",
              }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ background: "var(--lime)" }}
                />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--lime)" }} />
              </span>
              Life OS is still being built
            </div>
            <h2 className="font-serif leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              Save 5+ hours weekly. Get clarity.
              <br />
              <span className="text-lime">Stay organized.</span>
            </h2>
            <p className="text-base sm:text-lg max-w-lg mx-auto mb-10" style={{ color: "#a3a29b" }}>
              Join 4,000+ builders, founders, and operators who reclaimed their time. Join the
              waitlist and lock in <b style={{ color: "#F6F2E9" }}>$5.99/month</b> for good. The
              price moves to <s style={{ color: "#6f6f68" }}>$7.99</s> for everyone after launch.
            </p>
            <div className="max-w-md mx-auto mb-8">
              <div
                className="p-2 rounded-full"
                style={{ border: "1px solid rgba(207,244,58,0.3)", background: "rgba(20,21,16,0.6)" }}
              >
                <NewsletterForm id="nl-email-1" variant="lime" buttonLabel="Join the waitlist, for FREE" />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
              <span style={{ color: "#7a7a73" }}>Join 4,000+ readers across LinkedIn, newsletter, and Substack</span>
              <span style={{ color: "#3a3a35" }}>·</span>
              <a
                href={LINKEDIN_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium hover:text-lime transition-colors"
                style={{ color: "#e9e7de" }}
              >
                in Follow the build on LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERO */}
      <section id="hero-cta" className="hero-bg grain text-cream pt-16 pb-20 sm:pt-24 relative overflow-hidden">
        <ParticleCanvas />
        <div className="max-w-5xl mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <Reveal>
            <div
              className="inline-block text-xs uppercase tracking-widest border border-charcoal px-4 py-2 mb-8"
              style={{ color: "#a3a29b" }}
            >
              4,000+ readers across LinkedIn, newsletter &amp; Substack
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl leading-tight max-w-3xl mx-auto mb-6">
              Save time. Get <span className="text-lime">clarity.</span> Get{" "}
              <span className="text-lime">organized.</span>
            </h1>
            <p className="text-base sm:text-lg max-w-xl mx-auto mb-12" style={{ color: "#a3a29b" }}>
              The Weekly Planner normally runs <span style={{ color: "#F6F2E9" }}>$12/month</span>.
              But now it&apos;s <span style={{ color: "var(--lime)", fontWeight: 600 }}>100% FREE</span>{" "}
              inside the newsletter. Includes the priority framework, the time-blocking template, and
              the single system <span style={{ color: "var(--lime)" }}>4,000+ readers</span> use to
              reclaim 6+ hours weekly.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            <Reveal>
              <div className="border border-charcoal bg-charcoal-soft p-7 h-full flex flex-col">
                <span className="mb-4" style={{ color: "var(--lime)" }}>✉</span>
                <h2 className="font-serif text-xl mb-1">Free Newsletter</h2>
                <p className="text-xs uppercase tracking-wide mb-4" style={{ color: "#7a7a73" }}>
                  Every Friday, $0
                </p>
                <p className="text-sm mb-4 flex-1" style={{ color: "#a3a29b" }}>
                  One idea, one quote, one question. Plus instant access to{" "}
                  <span className="font-hand text-lg text-lime">&ldquo;Attention is the new currency&rdquo;</span>{" "}
                  free when you join. Join the +4,000 readers.
                </p>
                <NewsletterForm id="nl-email-2" variant="outline" buttonLabel="Join free" stacked />
                <Link
                  href="/newsletter"
                  className="text-xs mt-3 hover:text-lime transition-colors"
                  style={{ color: "#7a7a73" }}
                >
                  Read past editions →
                </Link>
              </div>
            </Reveal>
            <Reveal delay>
              <div className="border-2 border-lime bg-charcoal-soft p-7 h-full flex flex-col relative">
                <span
                  className="font-hand absolute top-4 right-4 bg-lime text-charcoal text-xs font-semibold px-2 py-0.5"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  this month only
                </span>
                <span className="mb-4" style={{ color: "var(--lime)" }}>◎</span>
                <h2 className="font-serif text-xl mb-1">Weekly Planner</h2>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-xs line-through" style={{ color: "#6f6f68" }}>$12/mo</span>
                  <span className="text-lime text-lg font-semibold">100% FREE</span>
                </div>
                <p className="text-[11px] uppercase tracking-wide mb-4" style={{ color: "#8FAE1F" }}>
                  Your first week, organized. See how 4,000+ readers reclaim 6 hours.
                </p>
                <p className="text-sm mb-4 flex-1" style={{ color: "#a3a29b" }}>
                  Organize your week. More time, less chaos. The priority framework and
                  time-blocking template 4,000+ readers use to reclaim 6+ hours a week.
                </p>
                <div className="mb-3">
                  <NewsletterForm id="nl-email-3" variant="lime" buttonLabel="Claim Your Template" stacked />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-[10px]" style={{ color: "#7a7a73" }}>
                  <span>Instant download</span>
                  <span>No spam</span>
                  <span>✓ Unsubscribe anytime</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <DashboardMock />
          </Reveal>
        </div>
      </section>

      {/* LEAD MAGNET */}
      <section id="newsletter" className="bg-cream py-20 border-t" style={{ borderColor: "#e3ddcf" }}>
        <div className="max-w-4xl mx-auto px-6 grid sm:grid-cols-2 gap-10 items-center">
          <Reveal className="text-center sm:text-left">
            <div style={{ perspective: "1200px" }}>
              <div
                className="relative mx-auto sm:mx-0 transition-transform duration-500 ease-out hover:scale-105"
                style={{ maxWidth: 260, transform: "rotateY(20deg) rotateX(3deg)", transformStyle: "preserve-3d" }}
              >
                <div
                  className="absolute inset-0"
                  style={{ transform: "translate(7px,9px)", background: "#e7e2d3", boxShadow: "10px 14px 24px rgba(0,0,0,0.35)" }}
                />
                <div
                  className="absolute inset-0"
                  style={{ transform: "translate(4px,5px)", background: "#f2eee2", boxShadow: "10px 14px 24px rgba(0,0,0,0.35)" }}
                />
                <div
                  className="font-hand absolute z-10 flex items-center justify-center text-center"
                  style={{
                    top: -18, right: -18, width: 62, height: 62, borderRadius: "50%",
                    background: "var(--lime)", color: "var(--charcoal)", fontSize: 15, fontWeight: 700,
                    transform: "rotate(12deg)", boxShadow: "0 6px 16px rgba(0,0,0,0.35)",
                  }}
                >
                  free
                </div>
                <div
                  className="aspect-[3/4] flex flex-col justify-between p-6 text-left relative"
                  style={{
                    background: "radial-gradient(ellipse 90% 70% at 70% 15%, rgba(207,244,58,0.2), transparent 55%), #0a0d09",
                    boxShadow: "0 0 0 1px rgba(207,244,58,0.15), 22px 26px 46px rgba(0,0,0,0.6)",
                  }}
                >
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--lime)" }}>
                      Free Guide
                    </p>
                    <h3 className="font-serif font-bold leading-tight text-2xl" style={{ color: "#F6F2E9" }}>
                      Attention Is
                    </h3>
                    <h3 className="font-serif font-bold leading-tight text-2xl mb-4" style={{ color: "var(--lime)" }}>
                      The New Currency.
                    </h3>
                    <div className="w-10 h-[2px] mb-4" style={{ background: "var(--lime)" }} />
                    <p className="text-[11px] leading-relaxed" style={{ color: "#8f9488" }}>
                      5 systems for starting, capturing, and compounding while everyone else waits to
                      be ready.
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                    <span className="text-[9px]" style={{ color: "#F6F2E9" }}>Building Above Average</span>
                    <span className="text-[9px] tracking-wide" style={{ color: "var(--lime)" }}>SALVADOR EVANGELHO</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 max-w-xs mx-auto sm:mx-0 text-center sm:text-left">
              <p className="text-[11px] mb-3" style={{ color: "#9a9488" }}>
                PDF · 12 pages · 5 min read · trusted by 4,000+ readers
              </p>
              <NewsletterForm id="nl-email-4" variant="solid" buttonLabel="Claim your free PDF" />
            </div>
          </Reveal>
          <Reveal delay>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#9a9488" }}>
              Free when you subscribe
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-charcoal mb-4">
              Get &ldquo;Attention is the new currency&rdquo; free.
            </h2>
            <p className="text-sm mb-6 leading-relaxed" style={{ color: "#5a5850" }}>
              Join 4,000+ readers getting one idea, one quote, and one question every Friday, and
              get instant access to this PDF the moment you sign up.
            </p>
            <div className="max-w-sm">
              <NewsletterForm id="nl-email-5" variant="solid" buttonLabel="Join the newsletter" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="system" className="bg-charcoal text-cream py-24 border-t border-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <p className="text-lime text-xs uppercase tracking-widest text-center mb-3">What you actually get</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-center mb-16 max-w-2xl mx-auto">
              Less time managing your life. More time living it.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map(([title, body], i) => (
              <Reveal key={title} delay={i % 3 !== 0}>
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

      {/* BENEFITS */}
      <section className="bg-cream py-24 border-t" style={{ borderColor: "#e3ddcf" }}>
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal text-center mb-16">
              Everything you need, one dashboard.
            </h2>
          </Reveal>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: "#e3ddcf", border: "1px solid #e3ddcf" }}
          >
            {benefits.map(([title, body]) => (
              <div key={title} className="bg-cream p-8">
                <span style={{ color: "#8FAE1F", fontSize: 20 }}>●</span>
                <h3 className="font-serif text-xl text-charcoal mt-4 mb-2">{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5a5850" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-charcoal text-cream py-24 border-t border-charcoal">
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
              {[
                ["Setup time", "Hours of building templates", "Add one habit, start today"],
                ["Where your data lives", "Scattered across tabs and docs", "One dashboard, everything linked"],
                ["Analytics", "Manual, if you remember to update it", "Automatic, from your daily logs"],
              ].map(([label, a, b]) => (
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

      {/* WHATS INSIDE */}
      <section className="bg-charcoal text-cream py-24 border-t border-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="text-lime text-xs uppercase tracking-widest text-center mb-3">What you get access to</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-center mb-4">Everything inside Life OS</h2>
            <p className="text-sm text-center mb-12 max-w-lg mx-auto" style={{ color: "#a3a29b" }}>
              One dashboard, 17 modules, all connected to the same data. No separate apps for
              habits, tasks, journaling, and analytics.
            </p>
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

      {/* TESTIMONIALS */}
      <section className="bg-charcoal text-cream py-24 border-t border-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-center mb-3">What readers say</h2>
            <p className="text-sm text-center mb-16" style={{ color: "#a3a29b" }}>
              They saved time. Here&apos;s what that time let them do.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Your newsletter really touched me. Edition 23, stop overcomplicating, just execute, I really needed to hear that.",
                name: "Chanaan Dapitan",
                role: "Business Development Partner, Limitless Rewired",
                initial: "C",
              },
              {
                quote:
                  "Building Above Average is a way of living, a philosophy. This newsletter changed my perspective, especially the emphasis on taking action. My days feel like they have three extra hours. My habits got much better and my deep work output went up ten times.",
                name: "Ashish Rai",
                role: "Founder & CEO, ReachHQ / VerifyHQ",
                initial: "A",
              },
            ].map((t) => (
              <Reveal key={t.name}>
                <div className="border border-charcoal p-6 h-full flex flex-col">
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: "#c9c7bd" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-none"
                      style={{ background: "rgba(207,244,58,0.12)", border: "1px solid rgba(207,244,58,0.4)", color: "var(--lime)" }}
                    >
                      {t.initial}
                    </div>
                    <div className="text-xs">
                      <div className="text-cream font-semibold">{t.name}</div>
                      <div style={{ color: "#7a7a73" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-cream py-24 border-t" style={{ borderColor: "#e3ddcf" }}>
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-widest mb-3 text-center" style={{ color: "#9a9488" }}>
              Simple pricing
            </p>
            <h2 className="font-serif text-3xl text-charcoal mb-3 text-center">One plan. Everything included.</h2>
            <p className="text-sm mb-10 max-w-md mx-auto text-center" style={{ color: "#5a5850" }}>
              Start free. Get organized fast for $29. Go all in with Life OS at $5.99/month,
              locked in for good.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            <Reveal>
              <div className="border-2 p-6 h-full flex flex-col relative bg-white" style={{ borderColor: "#d8d2c2" }}>
                <span
                  className="font-hand absolute top-3 right-4 text-charcoal text-xs font-semibold px-2 py-0.5"
                  style={{ background: "#e3ddcf", transform: "rotate(-3deg)" }}
                >
                  start here
                </span>
                <span className="mb-4" style={{ color: "#5a5850" }}>✉</span>
                <h3 className="font-serif text-xl text-charcoal mb-1">Newsletter</h3>
                <div className="font-serif text-2xl text-charcoal mb-4">$0</div>
                <p className="text-[11px] uppercase tracking-wide mb-4" style={{ color: "#8a887c" }}>
                  Free, forever
                </p>
                <ul className="text-left text-sm space-y-2 mb-6 flex-1" style={{ color: "#4a483f" }}>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>One idea, one quote, one question, every Friday</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>Free PDF: Attention is the new currency</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>Unsubscribe anytime</li>
                </ul>
                <div className="mb-3">
                  <NewsletterForm id="nl-email-6" variant="outlineLight" buttonLabel="Join free" stacked />
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-[10px]" style={{ color: "#8a887c" }}>
                  <a href={LINKEDIN_NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    Read past editions on LinkedIn →
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay>
              <div className="border-2 p-6 h-full flex flex-col relative bg-white" style={{ borderColor: "var(--lime)" }}>
                <span
                  className="font-hand absolute top-3 right-4 bg-lime text-charcoal text-xs font-semibold px-2 py-0.5"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  currently building
                </span>
                <span className="mb-4" style={{ color: "#5a5850" }}>⚡</span>
                <h3 className="font-serif text-xl text-charcoal mb-1">The Time Stack</h3>
                <div className="font-serif text-2xl text-charcoal mb-4">$29</div>
                <p className="text-[11px] uppercase tracking-wide mb-4" style={{ color: "#8FAE1F" }}>
                  Your first week organized
                </p>
                <ul className="text-left text-sm space-y-2 mb-6 flex-1" style={{ color: "#4a483f" }}>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>7 day system setup, delivered by email</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>Every framework from the newsletter, in one sequence</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>Built to run without Life OS, upgrade anytime</li>
                </ul>
                <a
                  href="/time-stack"
                  className="text-center text-sm font-semibold uppercase tracking-wide px-5 py-3 hover:opacity-90 transition-opacity"
                  style={{ background: "var(--charcoal)", color: "var(--lime)" }}
                >
                  Join the Waitlist
                </a>
              </div>
            </Reveal>
            <Reveal delay>
              <div className="border-2 p-6 h-full flex flex-col relative bg-white" style={{ borderColor: "#1E1E1C" }}>
                <span
                  className="font-hand absolute top-3 right-4 bg-lime text-charcoal text-xs font-semibold px-2 py-0.5"
                  style={{ transform: "rotate(-3deg)" }}
                >
                  most complete
                </span>
                <span className="mb-4" style={{ color: "#5a5850" }}>◎</span>
                <h3 className="font-serif text-xl text-charcoal mb-1">Life OS</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-sm line-through" style={{ color: "#a8a396" }}>$7.99</span>
                  <span className="font-serif text-3xl text-charcoal">
                    $5.99<span className="text-base" style={{ color: "#8a887c" }}>/mo</span>
                  </span>
                </div>
                <p className="text-[11px] uppercase tracking-wide mb-4" style={{ color: "#8FAE1F" }}>
                  Currently building · $5.99 for early access, $7.99 after launch
                </p>
                <ul className="text-left text-sm space-y-2 mb-6 flex-1" style={{ color: "#4a483f" }}>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>Full Life OS dashboard, real time</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>Habits, goals, deep work, health, business</li>
                  <li className="flex items-start gap-2"><span style={{ color: "#8FAE1F" }}>✓</span>Analytics and monthly report</li>
                </ul>
                <a
                  href="#waitlist"
                  className="text-center text-sm font-semibold uppercase tracking-wide px-6 py-3 hover:opacity-90 transition-opacity mb-3"
                  style={{ background: "var(--charcoal)", color: "var(--lime)" }}
                >
                  Currently Building, Join the Waitlist
                </a>
                <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center text-[10px]" style={{ color: "#8a887c" }}>
                  <span>🔒 Cards, PayPal, Apple Pay</span>
                  <span>↻ Cancel anytime</span>
                  <span>✓ 7 day refund</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-charcoal py-24 border-t border-charcoal">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-3xl text-cream text-center mb-12">Common questions</h2>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="hero-bg grain text-cream py-24 border-t border-charcoal relative overflow-hidden">
        <ParticleCanvas />
        <div className="max-w-2xl mx-auto px-6 text-center relative" style={{ zIndex: 1 }}>
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-5xl mb-5">Stop drifting. Start building.</h2>
            <p className="mb-10" style={{ color: "#a3a29b" }}>
              Free newsletter every Friday, or Life OS from $5.99 a month, locked in for early access.
            </p>
            <div className="flex flex-wrap justify-center items-start gap-4">
              <div className="w-full sm:w-auto sm:max-w-xs">
                <NewsletterForm id="nl-email-7" variant="outlineDark" buttonLabel="Join free" />
              </div>
              <a
                href="#waitlist"
                className="bg-lime text-charcoal text-sm font-semibold uppercase tracking-wide px-8 py-3 hover:opacity-90 transition-opacity"
              >
                Join the Life OS Waitlist
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <StickyMobileCta />
      <ExitPopup />
    </>
  );
}
