import { Link } from "react-router-dom";
import {
  ArrowRight,
  Ruler,
  Layers,
  DoorClosed,
  Package,
  Settings,
  Wrench,
  CircleCheck as CheckCircle2,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${siteConfig.url}/guides` },
  ],
};

const kitchenTips = [
  {
    icon: Ruler,
    title: "Measure Carefully Before Quoting",
    text: "Measure your wall length, ceiling height and note the positions of windows, doors, sockets and pipes. Accurate measurements prevent costly changes later.",
  },
  {
    icon: Layers,
    title: "Choose Laminate for Value",
    text: "Laminate is the most practical finish for Singapore kitchens — moisture-resistant, easy to clean and available in many woodgrain and solid-colour options at an affordable price.",
  },
  {
    icon: DoorClosed,
    title: "Keep the Layout Simple",
    text: "Straight-line cabinets cost less than L-shaped or U-shaped layouts. Choose the most complex layout only when your kitchen genuinely needs it.",
  },
  {
    icon: Package,
    title: "Limit Drawers to What You Use",
    text: "Drawers cost more than shelves. Two or three well-placed drawers for everyday items are more cost-effective than drawers throughout.",
  },
  {
    icon: Settings,
    title: "Avoid Unnecessary Accessories",
    text: "Pull-out carousels, built-in bins and tiered spice racks add cost without adding much storage. Use them only where they solve a specific problem.",
  },
  {
    icon: Wrench,
    title: "Keep Appliances Freestanding Where Possible",
    text: "Built-in ovens and dishwashers require custom cut-outs, reinforced carcasses and extra panels. Freestanding appliances keep the cabinet work simpler and cheaper.",
  },
];

const wardrobeTips = [
  {
    title: "Measure the Full Wall Width and Ceiling Height",
    text: "A built-in wardrobe is customised to fit your exact wall. Measure from wall to wall and from floor to ceiling. Note any light switches, sockets or aircon ledges that fall on the wardrobe wall.",
  },
  {
    title: "Decide on Door Type Before Getting a Quote",
    text: "Swing doors cost less than sliding doors. If you have enough floor clearance in front of the wardrobe, swing doors are the more economical choice.",
  },
  {
    title: "Plan Your Internal Layout Around Daily Use",
    text: "Think about what you store: long dresses need a full-height hanging section, shirts and trousers work with a double-hung layout. Shelves are cheaper than drawers for folded items.",
  },
  {
    title: "Full-Height Adds Cost — Only Go Full-Height If You Need the Storage",
    text: "Extending the wardrobe to the ceiling adds panels, doors and hardware. If your top shelf would just hold seldom-used items, a standard-height wardrobe is more economical.",
  },
  {
    title: "Skip Accessories Unless They Solve a Real Problem",
    text: "Pull-down rails, built-in mirrors and LED strips add cost. Use them only where they genuinely improve your daily use.",
  },
];

const commonMistakes = [
  {
    mistake: "Overspecifying on materials",
    fix: "Acrylic and veneer finishes look premium but add significant cost. Laminate is durable and practical for most Singapore homes.",
  },
  {
    mistake: "Too many drawers",
    fix: "Four or five drawers per wardrobe is common but often unnecessary. Two to three strategic drawers and open shelving costs less and is equally usable.",
  },
  {
    mistake: "Ignoring moisture in kitchen cabinets",
    fix: "Areas directly above or below the sink are exposed to moisture. Ensure the carcass material and finish are appropriate — a good installer will flag this.",
  },
  {
    mistake: "Not accounting for door swing clearance",
    fix: "Swing doors need space to open. Measure how far the door extends when fully open and check you have enough clearance without blocking other furniture.",
  },
  {
    mistake: "Requesting a quote without measurements",
    fix: "A quote without measurements can only be a rough estimate. Take your measurements first — it makes the process faster and the quote more accurate.",
  },
];

export function Guides() {
  return (
    <>
      <Seo
        title="Cabinet Buying Guides — Singapore Cabinet"
        description="Practical guides for Singapore homeowners planning affordable kitchen cabinets or built-in wardrobes. Tips on layouts, materials, costs and what to avoid."
        path="/guides"
        jsonLd={[breadcrumbJsonLd]}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Guides" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Cabinet Buying Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Practical advice for Singapore homeowners planning affordable kitchen cabinets or
            built-in wardrobes — what to consider, what to avoid and how to keep costs sensible.
          </p>
        </div>
      </section>

      {/* Kitchen Cabinet Tips */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-brand-600">
            Kitchen Cabinets
          </div>
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            How to Plan Affordable Kitchen Cabinets
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            A practical checklist for homeowners planning a kitchen cabinet installation or
            replacement in Singapore.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kitchenTips.map((tip) => (
              <div key={tip.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <tip.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-base font-semibold text-neutral-900">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">{tip.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services/kitchen-cabinets"
              className="text-sm font-medium text-brand-600 hover:underline"
            >
              Read our full Kitchen Cabinet guide <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wardrobe Tips */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="mb-2 text-xs font-medium uppercase tracking-wide text-brand-600">
            Bedroom Wardrobes
          </div>
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            How to Plan an Affordable Built-in Wardrobe
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Key considerations before requesting a wardrobe quotation — from measurements to
            internal layout choices.
          </p>
          <div className="mt-8 space-y-4 max-w-3xl">
            {wardrobeTips.map((tip, index) => (
              <div
                key={tip.title}
                className="flex gap-4 rounded-xl border border-neutral-200 bg-white p-5"
              >
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-xs font-bold text-brand-600">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-neutral-900">
                    {tip.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/services/custom-wardrobes"
              className="text-sm font-medium text-brand-600 hover:underline"
            >
              Read our full Wardrobe guide <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Common Mistakes to Avoid
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            These are the decisions that most often push cabinet costs higher than they need to be.
          </p>
          <div className="mt-8 max-w-3xl space-y-4">
            {commonMistakes.map((item) => (
              <div
                key={item.mistake}
                className="rounded-xl border border-neutral-200 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{item.mistake}</p>
                    <p className="mt-1 text-sm text-neutral-600">{item.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Guide */}
      <section className="py-12 lg:py-16">
        <div className="container-max max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            What to Measure Before Contacting Us
          </h2>
          <p className="mt-3 text-neutral-600">
            The more accurate your measurements, the faster we can provide a useful quotation.
            Rough measurements are fine to start — we can refine them at a site visit.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                For Kitchen Cabinets
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {[
                  "Wall length(s) where cabinets will run",
                  "Floor-to-ceiling height",
                  "Window, door and pipe positions",
                  "Location of sink, hob and appliances",
                  "Width of any existing countertop",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                For Bedroom Wardrobes
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                {[
                  "Wall width where the wardrobe will go",
                  "Floor-to-ceiling height",
                  "Positions of light switches, sockets",
                  "Aircon ledge or piping on the wall",
                  "How much of the wall the wardrobe should span",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <WhatsAppButton message="Hello Singapore Cabinet, I have my measurements ready and would like to get a quotation.">
              Send Us Your Measurements
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* CTA row */}
      <section className="bg-brand-50 py-10">
        <div className="container-max flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Link
            to="/services/kitchen-cabinets"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Kitchen Cabinet Service <ArrowRight className="inline h-4 w-4" />
          </Link>
          <Link
            to="/services/custom-wardrobes"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Wardrobe Service <ArrowRight className="inline h-4 w-4" />
          </Link>
          <Link to="/faq" className="text-sm font-medium text-brand-600 hover:underline">
            FAQ <ArrowRight className="inline h-4 w-4" />
          </Link>
          <Link to="/contact" className="text-sm font-medium text-brand-600 hover:underline">
            Get a Quotation <ArrowRight className="inline h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
