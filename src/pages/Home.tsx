import { Link } from "react-router-dom";
import { MessageCircle, ArrowRight, CookingPot, DoorClosed, CircleCheck as CheckCircle2, Ruler, Layers, Wrench, Package, Wallet, FileText, Settings, Hammer, ClipboardList, ShieldCheck, Clock, ThumbsUp } from "lucide-react";
import { Seo } from "../components/Seo";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig, getWhatsAppUrl } from "../config/site";
import { images } from "../config/images";

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
];

const costFactors = [
  {
    icon: Ruler,
    title: "Cabinet Dimensions",
    text: "Larger cabinets need more panels, doors and hardware. Keeping dimensions standard helps control cost.",
  },
  {
    icon: Layers,
    title: "Materials",
    text: "Laminate finishes are the most economical. Premium wood veneers or solid surfaces cost more.",
  },
  {
    icon: DoorClosed,
    title: "Door Configurations",
    text: "Swing doors are typically cheaper than sliding tracks. Fewer doors mean lower hardware costs.",
  },
  {
    icon: Package,
    title: "Drawer Quantities",
    text: "Each drawer adds runners, bases and assembly time. Opting for open shelving where practical reduces cost.",
  },
  {
    icon: Settings,
    title: "Hardware",
    text: "Soft-close hinges and basic runners are standard. Upgrading to premium brands increases the price.",
  },
  {
    icon: Wrench,
    title: "Installation Complexity",
    text: "Straight runs are quicker to install. Angled corners, soffits and built-in appliances add labour time.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "1. WhatsApp Us",
    text: "Send us your requirements — cabinet type, property type and rough measurements.",
  },
  {
    icon: ClipboardList,
    title: "2. Get a Quotation",
    text: "We provide a clear, itemised quote with no hidden charges so you know exactly what you are paying for.",
  },
  {
    icon: Hammer,
    title: "3. Fabrication",
    text: "Once you confirm, we fabricate your cabinets to the agreed specifications.",
  },
  {
    icon: ThumbsUp,
    title: "4. Installation",
    text: "We install your cabinets on-site, typically within one to two days for standard projects.",
  },
];

const whyChooseUs = [
  {
    icon: Wallet,
    title: "Sensible Prices",
    text: "We keep designs simple and practical so you get useful storage without overpaying for features you do not need.",
  },
  {
    icon: FileText,
    title: "Clear Quotations",
    text: "No hidden charges. You receive an itemised quote before any work begins.",
  },
  {
    icon: ShieldCheck,
    title: "Practical Materials",
    text: "Durable laminate finishes and standard hardware chosen for value and everyday use.",
  },
  {
    icon: Clock,
    title: "Straightforward Process",
    text: "From WhatsApp enquiry to installation, we keep things simple and communicate clearly at every step.",
  },
];

export function Home() {
  return (
    <>
      <Seo
        title="Affordable Kitchen Cabinets & Built-in Wardrobes in Singapore"
        description="Practical, budget-friendly kitchen cabinets and bedroom wardrobes for everyday Singapore homes. Simple designs, useful storage and sensible prices."
        path="/"
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

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white">
        <div className="container-max py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
                {siteConfig.tagline}
              </p>
              <h1 className="font-heading text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                Affordable Kitchen Cabinets &amp; Built-in Wardrobes in Singapore
              </h1>
              <p className="mt-5 max-w-xl text-base text-neutral-600 sm:text-lg">
                Practical, budget-friendly kitchen cabinets and bedroom wardrobes for everyday
                Singapore homes. Simple designs, useful storage and sensible prices.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like to get a quotation for cabinets.">
                  WhatsApp for a Quote
                </WhatsAppButton>
                <Link to="/services/kitchen-cabinets" className="btn-secondary">
                  Explore Our Cabinet Solutions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-brand-100 shadow-sm">
                <img
                  src={images.kitchenHero}
                  alt="Simple white kitchen cabinets with light woodgrain finishes in a Singapore HDB flat"
                  className="h-full w-full object-cover"
                  loading="eager"
                  width={800}
                  height={600}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl bg-white p-4 shadow-lg sm:block">
                <p className="text-2xl font-heading font-bold text-brand-600">Sensible</p>
                <p className="text-xs text-neutral-500">Prices, not gimmicks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 lg:py-20">
        <div className="container-max">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
              Our Cabinet Solutions
            </h2>
            <p className="mt-3 text-neutral-600">
              Two focused services — done well, at sensible prices.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              to="/services/kitchen-cabinets"
              className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <CookingPot className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-neutral-900">
                Kitchen Cabinets
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Affordable HDB kitchen cabinets, simple straight-line and L-shaped configurations
                with practical laminate finishes.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2">
                Learn more <ArrowRight className="h-4 w-4 transition-all" />
              </span>
            </Link>

            <Link
              to="/services/custom-wardrobes"
              className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <DoorClosed className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-neutral-900">
                Bedroom Wardrobes
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Affordable built-in wardrobes, sliding-door and swing-door options with simple
                shelving and hanging compartments.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 group-hover:gap-2">
                Learn more <ArrowRight className="h-4 w-4 transition-all" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-max">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
              Why Choose Singapore Cabinet
            </h2>
            <p className="mt-3 text-neutral-600">
              We focus on what matters — useful storage at a fair price.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affordable Kitchen Cabinet Solutions */}
      <section className="py-16 lg:py-20">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
                Affordable Kitchen Cabinet Solutions
              </h2>
              <p className="mt-4 text-neutral-600">
                We build practical kitchen cabinets for HDB, BTO and condo units. Whether you need
                a simple straight-line run or an L-shaped layout, we keep the design straightforward
                so you get the storage you need without paying for unnecessary extras.
              </p>
              <ul className="mt-6 space-y-3">
                {siteConfig.services[0].highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like a quotation for kitchen cabinets.">
                  Get a Kitchen Cabinet Quote
                </WhatsAppButton>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={images.kitchenLShaped}
                alt="L-shaped kitchen cabinet with laminate finish in a Singapore BTO flat"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Budget-Friendly Bedroom Wardrobes */}
      <section className="bg-neutral-50 py-16 lg:py-20">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm lg:order-1">
              <img
                src={images.wardrobeHero}
                alt="Full-height built-in wardrobe with sliding doors in a Singapore bedroom"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
                Budget-Friendly Bedroom Wardrobes
              </h2>
              <p className="mt-4 text-neutral-600">
                Built-in wardrobes that make the most of your bedroom space. Sliding-door or
                swing-door, full-height or standard — we help you choose a configuration that fits
                your room and your budget.
              </p>
              <ul className="mt-6 space-y-3">
                {siteConfig.services[1].highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like a quotation for a bedroom wardrobe.">
                  Get a Wardrobe Quote
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Keep Your Cabinet Costs Affordable */}
      <section className="py-16 lg:py-20">
        <div className="container-max">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
              How to Keep Your Cabinet Costs Affordable
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-neutral-600">
              Several factors influence the final price of your cabinets. Understanding these helps
              you make practical choices that fit your budget.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {costFactors.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-neutral-500">
            We do not publish price lists because every project is different.{" "}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 hover:underline"
            >
              WhatsApp us
            </a>{" "}
            for a clear, itemised quotation tailored to your needs.
          </p>
        </div>
      </section>

      {/* Simple Four-Step Process */}
      <section className="bg-brand-700 py-16 lg:py-20 text-white">
        <div className="container-max">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Simple Four-Step Process
            </h2>
            <p className="mt-3 text-brand-100">
              From enquiry to installation — straightforward and clear.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-white">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-brand-100">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20">
        <div className="container-max">
          <div className="mb-10 text-center">
            <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-neutral-600">
              Common questions about our cabinets and process.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
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
            <Link to="/faq" className="text-sm font-medium text-brand-600 hover:underline">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* WhatsApp Quotation CTA */}
      <section className="bg-brand-50 py-16 lg:py-20">
        <div className="container-max text-center">
          <h2 className="font-heading text-2xl font-bold text-neutral-900 sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-600">
            WhatsApp us now for a clear, itemised quotation. Tell us your cabinet type, property
            type and approximate measurements — we will take it from there.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton message="Hello Singapore Cabinet, I would like to get a quotation for cabinets. Could you advise on the next steps?">
              WhatsApp for a Quote
            </WhatsAppButton>
            <Link to="/contact" className="btn-secondary">
              Go to Contact Page
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            WhatsApp: {siteConfig.contact.whatsappDisplay}
          </p>
        </div>
      </section>
    </>
  );
}
