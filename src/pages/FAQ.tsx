import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";

const faqs = [
  {
    q: "Do you only do kitchen cabinets and wardrobes?",
    a: "Yes. We focus exclusively on affordable kitchen cabinets and bedroom wardrobes so we can keep our prices sensible and our turnaround straightforward.",
  },
  {
    q: "Can you work with HDB and BTO flats?",
    a: "Absolutely. Most of our projects are in HDB BTO and resale flats. We are familiar with standard HDB dimensions and can suggest practical layouts that make the most of your space.",
  },
  {
    q: "How do I get a quotation?",
    a: "Simply WhatsApp us with your cabinet type, property type and approximate measurements. We will follow up with a clear, itemised quotation.",
  },
  {
    q: "Do you charge for site visits?",
    a: "Please WhatsApp us to confirm the current policy on site visits. In many cases, we can provide an initial estimate from photos and measurements before arranging a visit.",
  },
  {
    q: "What materials do you use?",
    a: "We work with practical laminate finishes and standard cabinet hardware — chosen for durability and value. If you need a specific finish, let us know and we will advise on cost.",
  },
  {
    q: "How long does installation take?",
    a: "Most straightforward kitchen cabinet or wardrobe installations are completed within one to two days, depending on the scope. We will give you a clearer timeline with your quotation.",
  },
  {
    q: "Do you offer kitchen cabinet replacement?",
    a: "Yes. If your existing cabinets are worn or you want to refresh your kitchen, we can replace them with new cabinets. WhatsApp us with photos of your current kitchen for advice.",
  },
  {
    q: "Can I choose between sliding and swing doors for wardrobes?",
    a: "Yes. Sliding doors save space in tighter bedrooms, while swing doors are typically more economical. We will help you choose based on your room layout and budget.",
  },
];

export function FAQ() {
  return (
    <>
      <Seo
        title="FAQ — Singapore Cabinet"
        description="Common questions about our affordable kitchen cabinets, bedroom wardrobes, materials, installation process and quotations."
        path="/faq"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "FAQ" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Answers to common questions about our kitchen cabinets, wardrobes and process.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-lg border border-neutral-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-heading text-base font-medium text-neutral-900">
                  {faq.q}
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-neutral-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-600">Still have questions?</p>
            <div className="mt-4">
              <WhatsAppButton message="Hello Singapore Cabinet, I have a question about your cabinets.">
                Ask Us on WhatsApp
              </WhatsAppButton>
            </div>
            <Link to="/contact" className="mt-4 inline-block text-sm font-medium text-brand-600 hover:underline">
              Or visit our contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
