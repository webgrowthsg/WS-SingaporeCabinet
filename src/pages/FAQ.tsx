import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";

const categories = [
  {
    heading: "Getting a Quotation",
    faqs: [
      {
        q: "How do I get a quotation?",
        a: "WhatsApp us with your cabinet type (kitchen or wardrobe), property type and approximate dimensions. A couple of photos of the space helps too. We will follow up with a clear, itemised quotation.",
      },
      {
        q: "Do you charge for site visits or quotations?",
        a: "Please WhatsApp us to confirm the current policy. In many cases we can provide an initial estimate from photos and measurements before arranging a site visit.",
      },
      {
        q: "How long does it take to receive a quotation?",
        a: "We aim to respond to WhatsApp enquiries the same day during business hours. Once we have your measurements and photos, we can usually provide an initial estimate quickly.",
      },
      {
        q: "What information do I need to provide for a quotation?",
        a: "For kitchen cabinets: wall lengths, ceiling height, number of doors and drawers you need, and photos of the space. For wardrobes: wall width, ceiling height, door type preference and photos. Rough measurements are fine to start.",
      },
    ],
  },
  {
    heading: "Kitchen Cabinets",
    faqs: [
      {
        q: "Do you only do kitchen cabinets and wardrobes?",
        a: "Yes. We focus exclusively on affordable kitchen cabinets and bedroom wardrobes so we can keep our prices sensible and our turnaround straightforward.",
      },
      {
        q: "Can you work with HDB and BTO flats?",
        a: "Absolutely. Most of our projects are in HDB BTO and resale flats. We are familiar with standard HDB dimensions and can suggest practical layouts that make the most of your space.",
      },
      {
        q: "What is the most affordable kitchen cabinet layout?",
        a: "A straight-line (single-wall) configuration is typically the most economical because it involves fewer corners, less hardware and simpler installation. L-shaped layouts cost slightly more but make better use of corner space.",
      },
      {
        q: "Do you offer kitchen cabinet replacement for resale flats?",
        a: "Yes. We frequently replace old cabinets in resale HDB flats. We remove and dispose of the existing cabinets and install new ones in their place.",
      },
      {
        q: "Are laminate finishes durable enough for Singapore kitchens?",
        a: "Yes. Laminate is a practical choice for Singapore kitchens — it resists moisture and steam, is easy to wipe down and comes in a wide range of colours and woodgrain patterns. It is also significantly more affordable than acrylic or solid surface finishes.",
      },
    ],
  },
  {
    heading: "Bedroom Wardrobes",
    faqs: [
      {
        q: "Should I choose sliding doors or swing doors?",
        a: "Sliding doors are ideal when bedroom space is tight because they do not need clearance to open outward. Swing doors are typically more economical and allow full access to the wardrobe interior at once. We can advise based on your room layout and budget.",
      },
      {
        q: "What is a full-height wardrobe and is it worth the extra cost?",
        a: "A full-height wardrobe extends from floor to ceiling, maximising storage in compact rooms. It costs more due to additional panels and doors, but the extra storage is often worth it in smaller HDB bedrooms where floor space is limited.",
      },
      {
        q: "How many drawers should I include in my wardrobe?",
        a: "Two to four drawers are practical for most wardrobes. Adding more increases the cost because each drawer requires runners and assembly. Open shelving is more economical and works well for folded items.",
      },
      {
        q: "Can you build a wardrobe into a corner or alcove?",
        a: "Yes. We can customise wardrobes to fit corners and alcoves. Non-standard shapes require more fabrication and may cost more than a straight run. WhatsApp us with photos and measurements for advice.",
      },
    ],
  },
  {
    heading: "Materials, Costs and Installation",
    faqs: [
      {
        q: "What materials do you use?",
        a: "We use melamine-faced chipboard (MFC) for cabinet carcasses with laminate door finishes — both chosen for durability and value. Plywood is available for areas with higher moisture exposure. We will advise on the best option for your situation.",
      },
      {
        q: "Why do you not publish prices?",
        a: "Every project is different. Cabinet cost depends on dimensions, layout, material choice, door configuration, drawer quantity and installation complexity. Publishing a fixed price list would be misleading. We provide clear, itemised quotations instead.",
      },
      {
        q: "How long does installation take?",
        a: "Most straightforward kitchen cabinet or wardrobe installations are completed within one to two days, depending on scope. We will give you a clearer timeline with your quotation.",
      },
      {
        q: "What can I do to keep costs down?",
        a: "Choose simpler layouts (straight-line over L-shaped), use laminate over premium finishes, limit drawer quantities, skip accessories you do not need, and keep appliances freestanding where possible. We can advise on the most cost-effective configuration for your specific space.",
      },
    ],
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.url}/faq` },
  ],
};

const allFaqs = categories.flatMap((c) => c.faqs);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function FAQ() {
  return (
    <>
      <Seo
        title="FAQ — Affordable Kitchen Cabinets & Wardrobes Singapore"
        description="Common questions about our affordable kitchen cabinets and bedroom wardrobes in Singapore — quotations, materials, installation time, door types and cost factors."
        path="/faq"
        jsonLd={[faqJsonLd, breadcrumbJsonLd]}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "FAQ" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Answers to common questions about our kitchen cabinets, wardrobes, materials,
            installation process and quotations.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max max-w-3xl space-y-12">
          {categories.map((category) => (
            <div key={category.heading}>
              <h2 className="font-heading text-xl font-bold text-neutral-900 mb-5">
                {category.heading}
              </h2>
              <div className="space-y-3">
                {category.faqs.map((faq) => (
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
            </div>
          ))}

          <div className="rounded-xl bg-brand-50 p-6 text-center">
            <p className="font-heading text-base font-semibold text-neutral-900">
              Still have a question?
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              WhatsApp us directly and we will answer as quickly as we can.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <WhatsAppButton message="Hello Singapore Cabinet, I have a question about your cabinets.">
                Ask Us on WhatsApp
              </WhatsAppButton>
              <Link to="/contact" className="text-sm font-medium text-brand-600 hover:underline">
                Or use the contact form <ArrowRight className="inline h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-10">
        <div className="container-max flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Link
            to="/services/kitchen-cabinets"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Kitchen Cabinet Details <ArrowRight className="inline h-4 w-4" />
          </Link>
          <Link
            to="/services/custom-wardrobes"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Wardrobe Details <ArrowRight className="inline h-4 w-4" />
          </Link>
          <Link to="/contact" className="text-sm font-medium text-brand-600 hover:underline">
            Get a Quotation <ArrowRight className="inline h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
