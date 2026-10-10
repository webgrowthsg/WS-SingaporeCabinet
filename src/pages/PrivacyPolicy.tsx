import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy — Singapore Cabinet"
        description="Privacy policy for Singapore Cabinet. Learn how we handle your information when you contact us via WhatsApp or our website."
        path="/privacy-policy"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max max-w-3xl">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-500">Last updated: October 2026</p>

          <div className="mt-8 space-y-6 text-sm text-neutral-700">
            <div>
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                1. Overview
              </h2>
              <p className="mt-2">
                Singapore Cabinet respects your privacy. This policy explains what information we
                collect when you contact us and how we use it.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                When you contact us via WhatsApp or our enquiry form, we may collect your name,
                WhatsApp number, cabinet requirements, property type, approximate measurements,
                budget and project description. This information is used solely to prepare and
                respond to your quotation request.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                3. How We Use Your Information
              </h2>
              <p className="mt-2">
                Your information is used to provide quotations, answer enquiries and communicate
                with you about your cabinet project. We do not sell or share your information with
                third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                4. Data Storage
              </h2>
              <p className="mt-2">
                Your quotation enquiry is sent directly to our WhatsApp. We do not store your
                personal information on this website. Communication history is retained within
                WhatsApp for the purpose of ongoing project discussions.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                5. Cookies
              </h2>
              <p className="mt-2">
                This website does not use tracking cookies. Standard browser functionality may be
                used for basic site operation.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                6. Contact
              </h2>
              <p className="mt-2">
                If you have any questions about this privacy policy, please WhatsApp us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
