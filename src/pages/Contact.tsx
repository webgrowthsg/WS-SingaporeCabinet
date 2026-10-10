import { MessageCircle, Mail, Clock } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { QuotationForm } from "../components/QuotationForm";
import { siteConfig, getWhatsAppUrl } from "../config/site";

export function Contact() {
  return (
    <>
      <Seo
        title="Contact Singapore Cabinet — Get a Quotation"
        description="Contact Singapore Cabinet on WhatsApp for an affordable kitchen cabinet or wardrobe quotation. Fill in our enquiry form or message us directly."
        path="/contact"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Contact" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            The quickest way to get a quotation is to WhatsApp us. Fill in the form below and your
            details will be sent as a prefilled WhatsApp message, or reach out directly.
          </p>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container-max">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="rounded-xl border border-neutral-200 bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366]">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-base font-semibold text-neutral-900">
                    WhatsApp
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    {siteConfig.contact.whatsappDisplay}
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline"
                  >
                    Chat now
                  </a>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-base font-semibold text-neutral-900">
                    Email
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    {siteConfig.contact.email}
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="mt-3 inline-block text-sm font-medium text-brand-600 hover:underline"
                  >
                    Send email
                  </a>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h2 className="font-heading text-base font-semibold text-neutral-900">
                    Response Time
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600">
                    We typically respond to WhatsApp enquiries within the same day during business
                    hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <QuotationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-50 py-12 lg:py-16">
        <div className="container-max text-center">
          <h2 className="font-heading text-xl font-semibold text-neutral-900">
            Prefer to chat directly?
          </h2>
          <div className="mt-4">
            <WhatsAppButton>
              WhatsApp Us Now
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
