import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Users,
  Heart,
  TrendingDown,
  CircleCheck as CheckCircle2,
  MessageCircle,
  ClipboardList,
  Hammer,
  ThumbsUp,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";

const values = [
  {
    icon: Target,
    title: "Focused on Two Things",
    text: "We do kitchen cabinets and bedroom wardrobes — nothing else. This specialisation means we work efficiently and keep prices sensible.",
  },
  {
    icon: Users,
    title: "Built for Singapore Homes",
    text: "We understand HDB, BTO and condo dimensions. Our cabinet layouts are designed to fit standard Singapore spaces without waste.",
  },
  {
    icon: TrendingDown,
    title: "Affordable by Design",
    text: "We avoid unnecessary accessories and complicated joinery. Simple, functional cabinets cost less and still do the job well.",
  },
  {
    icon: Heart,
    title: "Honest Communication",
    text: "Clear quotations, straightforward advice and no pressure to upgrade. We tell you what you need, not what costs more.",
  },
];

const whoWeHelp = [
  {
    label: "HDB and BTO flat owners",
    detail: "Furnishing a new flat or refreshing an older one — practical layouts at sensible prices.",
  },
  {
    label: "Young couples",
    detail: "Setting up a first home without overspending on cabinetry that looks good and works well.",
  },
  {
    label: "Landlords",
    detail: "Durable, low-maintenance cabinets and wardrobes that stand up to tenant use.",
  },
  {
    label: "Condo owners",
    detail: "Economical cabinetry that fits standard condo kitchen and bedroom dimensions.",
  },
  {
    label: "Resale flat buyers",
    detail: "Replacing worn or outdated cabinets as part of a practical renovation.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "1. Send Us Your Details",
    text: "WhatsApp us your cabinet type, property type and approximate measurements — a few photos help too.",
  },
  {
    icon: ClipboardList,
    title: "2. Receive a Clear Quote",
    text: "We send an itemised quotation so you know exactly what you are paying for before committing.",
  },
  {
    icon: Hammer,
    title: "3. We Fabricate",
    text: "Once confirmed, we fabricate your cabinets to the agreed specification.",
  },
  {
    icon: ThumbsUp,
    title: "4. On-Site Installation",
    text: "We install your cabinets, align everything properly and leave the site clean.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteConfig.url}/about` },
  ],
};

export function About() {
  return (
    <>
      <Seo
        title="About Singapore Cabinet — Affordable Cabinet Specialists in Singapore"
        description="Singapore Cabinet focuses exclusively on affordable kitchen cabinets and bedroom wardrobes for HDB, BTO and condo homes. Practical designs, clear quotations, sensible prices."
        path="/about"
        jsonLd={[breadcrumbJsonLd]}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About" }]} />

      {/* Intro */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
                About Singapore Cabinet
              </h1>
              <p className="mt-4 text-lg text-neutral-600">
                We are a Singapore-based cabinet specialist focused on one thing: providing
                practical, affordable kitchen cabinets and bedroom wardrobes for everyday homes.
              </p>
              <p className="mt-4 text-neutral-600">
                We do not try to be everything to everyone. We do two things — kitchen cabinets
                and built-in wardrobes — and we aim to do them well, at prices that make sense for
                budget-conscious Singapore homeowners.
              </p>
              <div className="mt-8">
                <WhatsAppButton message="Hello Singapore Cabinet, I saw your About page and would like to enquire about cabinets.">
                  WhatsApp Us to Get Started
                </WhatsAppButton>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Clean, practical kitchen cabinet installation in a Singapore HDB flat"
                className="h-full w-full object-cover"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            What We Stand For
          </h2>
          <p className="mt-3 text-neutral-600">
            Four principles guide how we work and how we price.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Our Approach to Affordable Cabinets
              </h2>
              <p className="mt-4 text-neutral-600">
                Keeping cabinets affordable is not about cutting corners — it is about making
                deliberate choices. We recommend practical materials, standard configurations and
                only the hardware that genuinely adds value to your daily use.
              </p>
              <p className="mt-4 text-neutral-600">
                When you contact us, we will ask about your kitchen or bedroom dimensions, your
                storage priorities and your budget. We then recommend the most cost-effective
                configuration for your specific situation — not the most expensive one that still
                fits your budget.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Practical laminate finishes — durable, easy to clean and affordable",
                  "Standard cabinet hardware — reliable and simple to maintain",
                  "Straight-line layouts where suitable — fewer corners, lower cost",
                  "Only the drawers and accessories you will actually use",
                  "Clear itemised quotes — no surprises after you confirm",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1558997515-98c9603f4894?w=800&q=80"
                alt="Practical full-height built-in wardrobe with laminate finish in a Singapore bedroom"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Who We Help
          </h2>
          <p className="mt-3 text-neutral-600">
            Most of our customers are practical people who want useful storage at a fair price.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoWeHelp.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <h3 className="font-heading text-base font-semibold text-neutral-900">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            How We Work
          </h2>
          <p className="mt-3 text-neutral-600">
            A simple process — from WhatsApp enquiry to installed cabinets.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section className="bg-brand-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              to="/services/kitchen-cabinets"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs font-medium text-brand-600">Our Services</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-neutral-900">
                  Kitchen Cabinets
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Affordable HDB and BTO kitchen cabinet solutions.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-neutral-400 transition-all group-hover:ml-2 group-hover:text-brand-600" />
            </Link>
            <Link
              to="/services/custom-wardrobes"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs font-medium text-brand-600">Our Services</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-neutral-900">
                  Bedroom Wardrobes
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Practical built-in wardrobes for Singapore bedrooms.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-neutral-400 transition-all group-hover:ml-2 group-hover:text-brand-600" />
            </Link>
          </div>
          <div className="mt-8 text-center">
            <WhatsAppButton message="Hello Singapore Cabinet, I saw your About page and would like to enquire about cabinets.">
              WhatsApp Us to Get Started
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}

