import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_NAME}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-charcoal text-cream py-20">
        <div className="max-w-2xl mx-auto px-6 prose-baa">
          <p className="text-lime text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-2">Privacy Policy</h1>
          <p className="text-xs mb-10" style={{ color: "#7a7a73" }}>
            Last updated: September 13, 2026
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">1. Overview</h2>
          <p>
            Building Above Average (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
            respects your privacy. This policy explains what information we collect through
            buildingaboveaverage.com (the &ldquo;Site&rdquo;), how we use it, and the choices you
            have.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">2. Information we collect</h2>
          <p>
            When you subscribe to the newsletter or request a free download, we collect the email
            address you provide. If you purchase a product, our payment processor, Lemon Squeezy,
            collects payment and billing information directly; we do not store card numbers
            ourselves. We may also collect basic usage data (such as pages visited) through
            standard analytics tools.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">3. How we use your information</h2>
          <p>
            We use your email address to send the newsletter, deliver free resources you
            requested, and share updates about products like the Weekly Planner, The Time Stack,
            and Life OS. We use purchase information, handled by Lemon Squeezy, to fulfill orders
            and provide support. We do not sell your personal information.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">4. Third-party services</h2>
          <p>
            Newsletter sign-ups and purchases are processed through Lemon Squeezy, our
            merchant of record. Their handling of your data is governed by their own privacy
            policy. We may also use email delivery and analytics providers that process data on
            our behalf under similar terms.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">5. Your choices</h2>
          <p>
            You can unsubscribe from the newsletter at any time using the link in any email. To
            request access to, correction of, or deletion of your personal information, contact us
            using the details below.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">6. Data retention</h2>
          <p>
            We retain your information for as long as needed to provide our services and comply
            with legal obligations, then delete or anonymize it.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">7. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above
            reflects the most recent revision.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">8. Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-lime hover:opacity-80 transition-opacity">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
