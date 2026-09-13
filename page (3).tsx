import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Terms and conditions for ${SITE_NAME}.`,
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-charcoal text-cream py-20">
        <div className="max-w-2xl mx-auto px-6 prose-baa">
          <p className="text-lime text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="font-serif text-3xl sm:text-4xl mb-2">Terms and Conditions</h1>
          <p className="text-xs mb-10" style={{ color: "#7a7a73" }}>
            Last updated: September 13, 2026
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">1. Agreement</h2>
          <p>
            By accessing buildingaboveaverage.com (the &ldquo;Site&rdquo;) or purchasing any
            product referenced on it, including the Weekly Planner, The Time Stack, or Life OS,
            you agree to these terms.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">2. The newsletter and free resources</h2>
          <p>
            The Building Above Average newsletter and any free downloads are provided for
            informational and educational purposes only. Nothing on this Site constitutes
            financial, legal, medical, or professional advice.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">3. Purchases and payment</h2>
          <p>
            Paid products are sold and processed through Lemon Squeezy, our merchant of record,
            which handles billing, taxes, and payment security. By purchasing, you also agree to
            Lemon Squeezy&apos;s terms of service.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">4. Refunds</h2>
          <p>
            Unless otherwise stated on a specific product page, paid products carry a 7 day refund
            window from the date of purchase. To request a refund, contact us using the details
            below.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">5. Subscriptions</h2>
          <p>
            Life OS is billed monthly. You can cancel your subscription at any time; access
            continues through the end of the current billing period.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">6. Intellectual property</h2>
          <p>
            All content on this Site, including frameworks, templates, and written material, is
            the property of Building Above Average and may not be reproduced or resold without
            permission.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">7. Limitation of liability</h2>
          <p>
            Building Above Average is not liable for any indirect, incidental, or consequential
            damages arising from your use of the Site or its products. Results from any framework
            or system depend on individual effort and circumstances and are not guaranteed.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">8. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Continued use of the Site after changes
            constitutes acceptance of the revised terms.
          </p>

          <h2 className="font-serif text-xl mt-10 mb-3">9. Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
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
