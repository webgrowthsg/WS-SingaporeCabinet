import { Link } from "react-router-dom";
import {
  ArrowRight,
  Ruler,
  Layers,
  DoorClosed,
  Package,
  Settings,
  Wrench,
  Hammer,
  ClipboardList,
  MessageCircle,
  ThumbsUp,
  CircleCheck as CheckCircle2,
  RefreshCw,
  Droplets,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";

const kitchenFaqs = [
  {
    q: "What is the most affordable kitchen cabinet layout?",
    a: "A straight-line (single-wall) cabinet run is typically the most economical because it involves fewer corners, less hardware and simpler installation. L-shaped layouts cost slightly more but make better use of corner space in larger HDB kitchens.",
  },
  {
    q: "Can you replace just the cabinet doors without changing the entire cabinet?",
    a: "Door-only replacement is sometimes possible if your existing cabinet frames are still structurally sound. WhatsApp us with photos of your current cabinets and we will advise whether a full replacement or door refacing is more practical for your situation.",
  },
  {
    q: "Are laminate finishes durable enough for Singapore kitchens?",
    a: "Yes. Laminate is a practical choice for Singapore kitchens because it resists moisture, is easy to wipe down and comes in a wide range of colours and woodgrain patterns. It is also significantly more affordable than acrylic or solid surface finishes.",
  },
  {
    q: "How do I measure my kitchen for a quotation?",
    a: "Measure the wall length where cabinets will go, the floor-to-ceiling height, and note the positions of windows, doors, pipes and appliances. If you are unsure, send us rough measurements and photos via WhatsApp and we will guide you.",
  },
  {
    q: "Do you handle kitchen cabinet replacement for resale flats?",
    a: "Yes. We frequently replace old cabinets in resale HDB flats. We can remove and dispose of existing cabinets and install new ones. WhatsApp us with your flat type and kitchen photos to get started.",
  },
  {
    q: "What should I avoid to keep kitchen cabinet costs down?",
    a: "Reducing the number of drawers, choosing standard laminate over premium finishes, avoiding built-in appliances that require custom cut-outs, and keeping the layout simple all help control the final cost.",
  },
];

const costFactors = [
  {
    icon: Ruler,
    title: "Cabinet Dimensions",
    text: "The total length and height of your cabinet run directly affects material quantity. Standard HDB ceiling heights work well with off-the-shelf panel sizes, which reduces waste and cost.",
  },
  {
    icon: Layers,
    title: "Material Choice",
    text: "Laminate is the most budget-friendly finish. Acrylic, wood veneer and solid surfaces each cost progressively more while offering a different look.",
  },
  {
    icon: DoorClosed,
    title: "Door Configuration",
    text: "Standard swing doors with soft-close hinges are economical. Glass insert doors or handleless push-to-open systems add to the hardware cost.",
  },
  {
    icon: Package,
    title: "Drawer Quantity",
    text: "Drawers cost more than shelves because each drawer needs runners, a base panel and front assembly. Using drawers where they add the most value and open shelving elsewhere helps control cost.",
  },
  {
    icon: Settings,
    title: "Hardware",
    text: "Basic soft-close hinges and runners are standard. Upgrading to premium imported brands or adding pull-out accessories like carousels and spice racks increases the price.",
  },
  {
    icon: Wrench,
    title: "Installation Complexity",
    text: "Straight runs are quick to install. Corners, angled walls, built-in appliances, pipe boxing and uneven floors all add labour time and therefore cost.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "1. WhatsApp Enquiry",
    text: "Send us your kitchen dimensions, flat type and a few photos. We will advise on practical layout options.",
  },
  {
    icon: ClipboardList,
    title: "2. Itemised Quotation",
    text: "You receive a clear quote listing cabinet dimensions, materials, finishes and hardware — no hidden charges.",
  },
  {
    icon: Hammer,
    title: "3. Fabrication",
    text: "Once you confirm, we fabricate your kitchen cabinets to the agreed specifications.",
  },
  {
    icon: ThumbsUp,
    title: "4. On-Site Installation",
    text: "We install your cabinets, align doors and drawers, and clean up before we leave.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
    { "@type": "ListItem", position: 3, name: "Kitchen Cabinets", item: `${siteConfig.url}/services/kitchen-cabinets` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affordable Kitchen Cabinet Installation",
  serviceType: "Kitchen Cabinet Installation",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.whatsappInternational,
    areaServed: "Singapore",
  },
  areaServed: "Singapore",
  description:
    "Affordable kitchen cabinets for HDB, BTO and condo homes in Singapore. Simple straight-line and L-shaped designs with practical laminate finishes.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: kitchenFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function KitchenCabinets() {
  const service = siteConfig.services[0];

  return (
    <>
      <Seo
        title="Affordable Kitchen Cabinets Singapore | HDB & BTO"
        description="Affordable kitchen cabinets in Singapore for HDB, BTO and condo homes. Explore simple designs, practical materials and budget-friendly options."
        path="/services/kitchen-cabinets"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Services" },
          { label: "Kitchen Cabinets" },
        ]}
      />

      {/* Hero / Intro */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
                Affordable Kitchen Cabinets in Singapore
              </h1>
              <p className="mt-4 text-lg text-neutral-600">
                Practical kitchen cabinets for HDB, BTO and condo homes. We focus on simple
                layouts, durable laminate finishes and useful storage — so you get a functional
                kitchen without paying for unnecessary extras.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like to ask about affordable kitchen cabinet options for my home.">
                  Ask About Affordable Cabinet Options
                </WhatsAppButton>
                <Link to="/contact" className="btn-secondary">
                  Request a Quotation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                alt="Affordable white laminate kitchen cabinets with woodgrain accents in a Singapore HDB flat"
                className="h-full w-full object-cover"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Kitchen Cabinets for Singapore Homes */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Affordable Kitchen Cabinets for Singapore Homes
              </h2>
              <p className="mt-4 text-neutral-600">
                Most Singapore kitchens are compact, which means every centimetre matters. Our
                cabinets are designed to make the most of standard HDB and BTO kitchen dimensions
                without overcomplicating the layout. We use practical materials, standard hardware
                and straightforward configurations so you get useful storage at a sensible price.
              </p>
              <p className="mt-4 text-neutral-600">
                Whether you are furnishing a new BTO flat, updating a resale kitchen or replacing
                worn-out cabinets, we can help you choose a layout that fits your cooking habits,
                your space and your budget.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {service.highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                  <span className="text-sm text-neutral-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Kitchen Cabinet Designs */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Simple Kitchen Cabinet Designs
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            A simple kitchen cabinet does not mean a compromise on usefulness. It means choosing
            practical storage over decorative features. Standard door sizes, open shelving where
            appropriate, and basic drawer configurations keep fabrication and installation
            straightforward — which keeps the price down.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Straight-Line Cabinets
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                All cabinets along one wall. The simplest and most affordable layout, ideal for
                smaller HDB and BTO kitchens.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                L-Shaped Cabinets
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Cabinets along two adjoining walls. Makes good use of corner space in slightly
                larger kitchens while staying straightforward.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Upper and Lower Cabinets
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Lower cabinets for heavy items and appliances, upper cabinets for lighter storage.
                A practical combination for most kitchens.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <WhatsAppButton message="Hello Singapore Cabinet, I would like to ask about affordable kitchen cabinet options for my home.">
              Ask About Affordable Cabinet Options
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Kitchen Cabinets for HDB and BTO Flats */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Simple HDB BTO kitchen with straight-line laminate cabinets and basic upper shelving"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Kitchen Cabinets for HDB and BTO Flats
              </h2>
              <p className="mt-4 text-neutral-600">
                HDB and BTO kitchens have standardised dimensions, which works in your favour.
                Standard panel sizes mean less material waste, and familiar layouts mean faster
                installation. We are experienced with the typical pipe positions, service ducts and
                wall configurations found in HDB kitchens.
              </p>
              <p className="mt-4 text-neutral-600">
                For BTO flats, we can work with the existing kitchen structure and build cabinets
                that fit around the provided service points. For resale flats, we handle the removal
                of old cabinets and installation of new ones.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Cabinets sized to standard HDB wall lengths and ceiling heights
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Pipe boxing and service duct accommodation included
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Options for both new BTO fit-outs and resale flat replacements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Straight-Line vs L-Shaped */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Straight-Line vs L-Shaped Kitchen Cabinets
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            The two most common kitchen cabinet layouts in Singapore flats are straight-line and
            L-shaped. Each has practical trade-offs in terms of storage, cost and workflow.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-neutral-900">
                Straight-Line Kitchen Cabinets
              </h3>
              <p className="mt-3 text-sm text-neutral-600">
                All cabinets run along a single wall. This is the most economical layout because it
                involves no corner joints, minimises hardware and is the fastest to install. It
                works well in compact HDB and BTO kitchens where wall space is limited.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Lowest cost option — fewer panels and less hardware
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Simple installation, typically completed in a day
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Good for small kitchens with one usable wall
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-lg font-semibold text-neutral-900">
                L-Shaped Kitchen Cabinets
              </h3>
              <p className="mt-3 text-sm text-neutral-600">
                Cabinets run along two adjoining walls, forming an L. This layout uses corner space
                more effectively and creates a natural work triangle between the sink, stove and
                fridge. It costs slightly more due to the corner cabinet and additional hardware.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Better use of corner space in larger kitchens
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  More counter area for food preparation
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Corner cabinet adds some cost but improves storage
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-neutral-500">
            Not sure which layout suits your kitchen? WhatsApp us your kitchen dimensions and we
            will recommend the most practical and cost-effective option.
          </p>
        </div>
      </section>

      {/* Upper and Lower Kitchen Cabinets */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Upper and Lower Kitchen Cabinets
              </h2>
              <p className="mt-4 text-neutral-600">
                A typical kitchen uses a combination of lower cabinets for heavy items and upper
                cabinets for lighter everyday items. Lower cabinets usually include a mix of
                shelving and drawers, while upper cabinets are shelf-based with swing doors.
              </p>
              <p className="mt-4 text-neutral-600">
                If budget is a concern, you can opt for fewer upper cabinets and use open shelving
                in their place. This reduces material and hardware costs while still providing
                accessible storage for frequently used items.
              </p>
              <h3 className="mt-6 font-heading text-base font-semibold text-neutral-900">
                Practical considerations
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Lower cabinets bear the weight of appliances and heavy cookware
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Upper cabinets are best for plates, cups and dry goods
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Open shelving is a cost-effective alternative to some upper cabinets
                </li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600488999382-29c5e8b9d83d?w=800&q=80"
                alt="Upper and lower kitchen cabinets with laminate doors in a compact Singapore flat kitchen"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Practical Kitchen Cabinet Materials */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Practical Kitchen Cabinet Materials
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            The materials you choose for your cabinet carcass, doors and countertops affect both
            durability and cost. For budget-conscious homeowners, practical material choices provide
            long-term reliability without the premium price tag.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Carcass Material
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Melamine-faced chipboard (MFC) is the standard carcass material — durable,
                moisture-resistant and cost-effective. Plywood is available for areas with higher
                moisture exposure but costs more.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Door Finishes
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Laminate doors are the most affordable and come in solid colours and woodgrain
                patterns. Acrylic and veneer doors offer a different look but at a higher price.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Countertops
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Laminate countertops are the budget option. Compact laminate and solid surfaces are
                more durable and seamless but cost more. We can advise on what suits your budget.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <WhatsAppButton message="Hello Singapore Cabinet, I would like to ask about affordable kitchen cabinet options for my home.">
              Ask About Affordable Cabinet Options
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Laminate Finishes and Maintenance */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1580046523806-3c0a9c8bdf3d?w=800&q=80"
                alt="Light woodgrain laminate kitchen cabinet doors with easy-clean surfaces in a Singapore BTO"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Laminate Finishes and Maintenance
              </h2>
              <p className="mt-4 text-neutral-600">
                Laminate is the most practical finish for Singapore kitchens. It is easy to clean,
                resists moisture and steam, and is available in a wide range of solid colours and
                woodgrain patterns. For budget-conscious homeowners, laminate offers the best
                balance between appearance, durability and cost.
              </p>
              <h3 className="mt-6 font-heading text-base font-semibold text-neutral-900">
                Easy maintenance tips
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <Droplets className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Wipe spills promptly with a damp cloth to prevent staining
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Avoid abrasive scouring pads that can scratch the surface
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Keep hinge areas dry to prevent rust over time
                </li>
                <li className="flex items-start gap-2">
                  <Droplets className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Use a mild detergent for regular cleaning — no special products needed
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reduce Kitchen Cabinet Costs */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            How to Reduce Kitchen Cabinet Costs
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Several practical choices can help keep your kitchen cabinet project affordable without
            sacrificing everyday usability. The key is to focus on functional storage and avoid
            features that add cost without adding value.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Choose a straight-line layout</strong> over L-shaped or U-shaped if your
                kitchen wall space allows — fewer corners mean lower cost.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Use drawers selectively</strong> — two or three well-placed drawers are more
                cost-effective than drawers throughout.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Opt for laminate finishes</strong> instead of acrylic, veneer or solid
                surfaces for a practical look at a lower price.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Use open shelving</strong> for some upper storage instead of full upper
                cabinets to save on doors and hardware.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Skip pull-out accessories</strong> like carousels, spice pull-outs and
                bin systems unless they are essential to your workflow.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Keep appliances freestanding</strong> rather than built-in, which avoids
                custom cut-outs and additional panels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kitchen Cabinet Replacement */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Kitchen Cabinet Replacement
              </h2>
              <p className="mt-4 text-neutral-600">
                If your existing kitchen cabinets are worn, swollen from moisture or simply no
                longer functional, replacement may be more practical than repairing individual
                parts. We handle the full replacement process — removing old cabinets, disposing of
                them, and installing new ones.
              </p>
              <p className="mt-4 text-neutral-600">
                For resale flat renovations, this is often the most straightforward approach. We can
                match the new cabinet layout to your existing kitchen footprint or suggest a more
                practical configuration if your needs have changed.
              </p>
              <h3 className="mt-6 font-heading text-base font-semibold text-neutral-900">
                What to send us for a replacement quote
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Photos of your current kitchen from a few angles
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Wall length measurements where cabinets run
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Your flat type (HDB BTO, resale, condo, etc.)
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Any specific requirements or preferences
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton message="Hello Singapore Cabinet, I am looking to replace my existing kitchen cabinets. I can send photos and measurements.">
                  Get a Replacement Quote
                </WhatsAppButton>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff65c98c6b0?w=800&q=80"
                alt="Kitchen cabinet replacement showing new laminate cabinets installed in a resale HDB flat"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Kitchen Cabinet Prices */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            What Affects Kitchen Cabinet Prices?
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Every kitchen is different, which is why we do not publish a fixed price list. The
            following factors all influence the final cost of your kitchen cabinets. Understanding
            them helps you make informed decisions that fit your budget.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <p className="mt-8 text-sm text-neutral-500">
            We do not publish price lists because every project is different.{" "}
            <WhatsAppButton variant="nav" message="Hello Singapore Cabinet, I would like a kitchen cabinet quotation.">
              WhatsApp us
            </WhatsAppButton>{" "}
            for a clear, itemised quotation tailored to your kitchen.
          </p>
        </div>
      </section>

      {/* Installation Process */}
      <section className="bg-brand-700 py-12 lg:py-16 text-white">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Our Cabinet Installation Process
          </h2>
          <p className="mt-3 text-brand-100">
            From WhatsApp enquiry to finished kitchen — straightforward and clear.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-neutral-600">
            Common questions about our kitchen cabinets, materials and process.
          </p>
          <div className="mt-8 mx-auto max-w-3xl space-y-4">
            {kitchenFaqs.map((faq) => (
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
          <div className="mt-6 text-center">
            <Link to="/faq" className="text-sm font-medium text-brand-600 hover:underline">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Related Service Links + Final CTA */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-6 sm:grid-cols-2">
            <Link
              to="/services/custom-wardrobes"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs font-medium text-brand-600">Related Service</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-neutral-900">
                  Bedroom Wardrobes
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Affordable built-in wardrobes for your bedroom.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-neutral-400 transition-all group-hover:ml-2 group-hover:text-brand-600" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs font-medium text-brand-600">Get Started</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-neutral-900">
                  Request a Quotation
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Fill in our form for a clear, itemised quote.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-neutral-400 transition-all group-hover:ml-2 group-hover:text-brand-600" />
            </Link>
          </div>

          <div className="mt-10 rounded-2xl bg-brand-600 p-8 text-center text-white">
            <h2 className="font-heading text-xl font-bold sm:text-2xl">
              Ready to Discuss Your Kitchen Cabinets?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              WhatsApp us your kitchen dimensions and flat type for a clear, itemised quotation.
              We will help you choose the most practical and affordable layout for your home.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                variant="secondary"
                message="Hello Singapore Cabinet, I would like to ask about affordable kitchen cabinet options for my home."
              >
                Ask About Affordable Cabinet Options
              </WhatsAppButton>
            </div>
            <p className="mt-4 text-sm text-brand-100">
              WhatsApp: {siteConfig.contact.whatsappDisplay}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
