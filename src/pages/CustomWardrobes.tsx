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
  SlidersHorizontal,
  PanelsTopLeft,
  Shirt,
} from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";
import { images } from "../config/images";

const wardrobeFaqs = [
  {
    q: "Should I choose sliding doors or swing doors for my wardrobe?",
    a: "Sliding doors are ideal when bedroom space is tight because they do not require clearance to open outward. Swing doors are typically more economical and allow full access to the wardrobe interior at once. Your choice depends on room layout and budget.",
  },
  {
    q: "What is a full-height wardrobe and is it worth it?",
    a: "A full-height wardrobe extends from floor to ceiling, maximising storage in rooms with standard HDB ceiling heights. It costs more than a standard-height wardrobe due to the additional panels and doors, but the extra storage is often worth it for compact bedrooms.",
  },
  {
    q: "How many drawers should I include in my wardrobe?",
    a: "Two to four drawers are practical for most wardrobes — useful for undergarments, accessories and folded items. Adding more drawers increases the cost because each drawer requires runners and assembly. We can advise on the right number for your needs.",
  },
  {
    q: "Can you build a wardrobe into an awkward corner or angled wall?",
    a: "Yes, we can customise wardrobes to fit corners, angled ceilings and uneven walls. However, non-standard shapes require more fabrication time and may cost more than a straight run. WhatsApp us with photos and measurements for advice.",
  },
  {
    q: "What materials are used for your wardrobes?",
    a: "We use melamine-faced chipboard (MFC) for the carcass with laminate door finishes — both practical and budget-friendly. Plywood is available for areas with higher humidity. We will advise on the best material for your bedroom conditions.",
  },
  {
    q: "How do I measure my bedroom for a built-in wardrobe?",
    a: "Measure the wall width where the wardrobe will go, the floor-to-ceiling height, and note any window positions, light switches or aircon ledges. If you are unsure, send us rough measurements and photos via WhatsApp.",
  },
];

const costFactors = [
  {
    icon: Ruler,
    title: "Wardrobe Dimensions",
    text: "Width and height determine material quantity. Full-height wardrobes use more panels than standard-height ones, but the additional storage often justifies the cost in compact bedrooms.",
  },
  {
    icon: Layers,
    title: "Material Choice",
    text: "MFC with laminate doors is the most affordable. Plywood carcass or acrylic doors cost more. Material choice affects both appearance and long-term durability.",
  },
  {
    icon: DoorClosed,
    title: "Door Configuration",
    text: "Swing doors are generally cheaper than sliding doors because sliding tracks cost more. However, sliding doors save floor space — a trade-off worth considering in tight bedrooms.",
  },
  {
    icon: Package,
    title: "Drawer Quantity",
    text: "Each drawer adds runners, a base panel and assembly time. Opting for a mix of drawers and open shelving helps control costs while keeping storage practical.",
  },
  {
    icon: Settings,
    title: "Hardware and Accessories",
    text: "Soft-close hinges and basic runners are standard. Adding accessories like pull-down rails, mirrors or lighting increases the price.",
  },
  {
    icon: Wrench,
    title: "Installation Complexity",
    text: "Straight wall installations are straightforward. Angled ceilings, corner configurations and built-in lighting all add fabrication and installation time.",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "1. WhatsApp Enquiry",
    text: "Send us your bedroom dimensions, flat type and storage needs. We will suggest practical wardrobe options.",
  },
  {
    icon: ClipboardList,
    title: "2. Itemised Quotation",
    text: "You receive a clear quote listing wardrobe dimensions, door type, materials and internal layout.",
  },
  {
    icon: Hammer,
    title: "3. Fabrication",
    text: "Once you confirm, we fabricate your wardrobe panels and doors to specification.",
  },
  {
    icon: ThumbsUp,
    title: "4. On-Site Installation",
    text: "We install your wardrobe, fit doors and drawers, and ensure everything is aligned.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
    { "@type": "ListItem", position: 3, name: "Custom Wardrobes", item: `${siteConfig.url}/services/custom-wardrobes` },
  ],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Affordable Built-in Wardrobe Installation",
  serviceType: "Built-in Wardrobe Installation",
  provider: {
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.contact.whatsappInternational,
    areaServed: "Singapore",
  },
  areaServed: "Singapore",
  description:
    "Affordable built-in wardrobes and bedroom cabinets for HDB, BTO and condo homes in Singapore. Sliding-door, swing-door and full-height options with practical internal layouts.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: wardrobeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function CustomWardrobes() {
  const service = siteConfig.services[1];

  return (
    <>
      <Seo
        title="Affordable Built-in Wardrobes Singapore | Bedroom Cabinets"
        description="Affordable built-in wardrobes and bedroom cabinets in Singapore. Explore simple sliding, swing-door and space-saving wardrobe designs."
        path="/services/custom-wardrobes"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd, faqJsonLd]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Services" },
          { label: "Custom Wardrobes" },
        ]}
      />

      {/* Hero / Intro */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
                Affordable Built-in Wardrobes &amp; Bedroom Cabinets
              </h1>
              <p className="mt-4 text-lg text-neutral-600">
                Practical bedroom wardrobes for HDB, BTO and condo homes in Singapore. Whether you
                need a sliding-door wardrobe for a tight room or a full-height built-in for maximum
                storage, we keep designs simple and prices sensible.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like to ask about affordable wardrobe options for my bedroom.">
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
                src={images.wardrobeHero}
                alt="Full-height built-in wardrobe with sliding doors in a Singapore HDB bedroom"
                className="h-full w-full object-cover"
                loading="eager"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Built-in Wardrobes in Singapore */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Affordable Built-in Wardrobes in Singapore
              </h2>
              <p className="mt-4 text-neutral-600">
                Built-in wardrobes make the most of your bedroom by using wall-to-wall and
                floor-to-ceiling space efficiently. Unlike freestanding wardrobes, they are
                customised to your room dimensions, which means no wasted gaps and a cleaner look.
              </p>
              <p className="mt-4 text-neutral-600">
                We focus on practical storage — hanging compartments, shelving and a sensible number
                of drawers — without pushing accessories you do not need. This approach keeps the
                price affordable while giving you a wardrobe that works for everyday use.
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

      {/* Practical Wardrobe Designs for HDB Bedrooms */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={images.wardrobeCompact}
                alt="Simple built-in wardrobe in a compact HDB bedroom with practical shelving and hanging space"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Practical Wardrobe Designs for HDB Bedrooms
              </h2>
              <p className="mt-4 text-neutral-600">
                HDB bedrooms are typically compact, which makes built-in wardrobes a smart storage
                solution. By fitting the wardrobe to the exact wall width and ceiling height, you
                avoid wasted space and gain more usable storage than a freestanding unit would
                provide.
              </p>
              <p className="mt-4 text-neutral-600">
                Common HDB bedroom wardrobe configurations include a single run along one wall,
                an L-shaped wardrobe in rooms with two available walls, or a wardrobe positioned
                opposite the bed. We can advise on which layout works best for your room size and
                furniture arrangement.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Wall-to-wall fit eliminates dust-trapping gaps
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Internal layout tailored to your clothing and storage habits
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Options for master bedrooms and common rooms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sliding-Door Wardrobes */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <SlidersHorizontal className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Sliding-Door Wardrobes
              </h2>
              <p className="mt-4 text-neutral-600">
                Sliding-door wardrobes are ideal for bedrooms where floor space is limited. Because
                the doors slide horizontally on tracks, you do not need to leave clearance in front
                of the wardrobe for door swing — making them perfect for tight HDB common rooms or
                bedrooms where the bed is positioned close to the wardrobe.
              </p>
              <h3 className="mt-6 font-heading text-base font-semibold text-neutral-900">
                Pros and trade-offs
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Saves floor space — no door swing clearance needed
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Smooth track operation for everyday use
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Tracks and hardware cost more than swing-door hinges
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Only one section is accessible at a time
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like to ask about a sliding-door wardrobe for my bedroom.">
                  Ask About Sliding-Door Wardrobes
                </WhatsAppButton>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={images.wardrobeSlidingDoor}
                alt="Sliding-door wardrobe with laminate panels in a compact Singapore bedroom"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Swing-Door Wardrobes */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-2xl bg-neutral-100 shadow-sm lg:order-1">
              <img
                src={images.wardrobeSwingDoor}
                alt="Swing-door built-in wardrobe with simple laminate doors in a Singapore BTO bedroom"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <DoorClosed className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Swing-Door Wardrobes
              </h2>
              <p className="mt-4 text-neutral-600">
                Swing-door wardrobes use hinged doors that open outward. They are typically the most
                economical wardrobe door option because hinges are simpler and cheaper than sliding
                tracks. They also allow you to see the entire wardrobe interior at once when all
                doors are open, which makes organising easier.
              </p>
              <p className="mt-4 text-neutral-600">
                The main consideration is floor space — you need enough clearance in front of the
                wardrobe for the doors to open fully. This is usually not a problem in master
                bedrooms but may be tight in smaller common rooms.
              </p>
              <h3 className="mt-6 font-heading text-base font-semibold text-neutral-900">
                Pros and trade-offs
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Most economical door option — hinges cost less than tracks
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Full visibility of wardrobe interior when doors are open
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Requires floor clearance for door swing
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Soft-close hinges are standard for quiet closing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Height Bedroom Wardrobes */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <PanelsTopLeft className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Full-Height Bedroom Wardrobes
              </h2>
              <p className="mt-4 text-neutral-600">
                A full-height wardrobe extends from floor to ceiling, making use of every centimetre
                of vertical space. In HDB flats with standard ceiling heights of around 2.6 to 2.7
                metres, this means significantly more storage than a standard-height wardrobe —
                particularly for items you do not need daily access to, like luggage, seasonal
                clothing or spare bedding.
              </p>
              <p className="mt-4 text-neutral-600">
                Full-height wardrobes cost more than standard-height ones because they require
                additional panels, doors and hardware. However, the extra storage is often worth it
                in compact Singapore bedrooms where floor space is at a premium.
              </p>
              <h3 className="mt-6 font-heading text-base font-semibold text-neutral-900">
                When to consider full-height
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  Your bedroom is compact and you need maximum storage
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  You want to store items you do not access daily up high
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                  You prefer a seamless wall-to-ceiling look
                </li>
              </ul>
              <div className="mt-6">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like to ask about a full-height wardrobe for my bedroom.">
                  Ask About Full-Height Wardrobes
                </WhatsAppButton>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={images.wardrobeFullHeight}
                alt="Floor-to-ceiling built-in wardrobe maximising vertical storage in a Singapore HDB bedroom"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Simple Internal Wardrobe Layouts */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Simple Internal Wardrobe Layouts
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            The inside of your wardrobe matters more than the outside. A well-organised internal
            layout makes daily use easier and helps you avoid paying for compartments you do not
            need. We keep internal layouts practical and straightforward.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Shirt className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Hanging Compartments
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Two hanging heights — a full-height section for dresses and long garments, and a
                half-height section for shirts and trousers. This is the core of most wardrobes.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Adjustable Shelving
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Shelves for folded clothes, bags and boxes. Adjustable shelf pegs let you change
                spacing as your storage needs evolve — practical and economical.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <Package className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Basic Drawers
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Two to four drawers for undergarments, socks and accessories. More drawers add
                cost — we recommend including only what you will use regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wardrobe Materials and Finishes */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Wardrobe Materials and Finishes
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            The materials used for your wardrobe carcass and doors affect both durability and cost.
            For budget-conscious homeowners, practical material choices provide reliable everyday
            use without the premium price.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Carcass Material
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Melamine-faced chipboard (MFC) is the standard choice — sturdy, cost-effective and
                suitable for most bedroom conditions. Plywood is available for rooms with higher
                humidity.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Door Finishes
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Laminate doors are the most affordable and come in a range of colours and woodgrain
                patterns. Acrylic doors offer a glossier look at a higher price point.
              </p>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h3 className="font-heading text-base font-semibold text-neutral-900">
                Back Panels
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Standard melamine back panels provide a clean interior finish. Matching the back
                panel colour to the carcass keeps the wardrobe looking tidy inside.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <WhatsAppButton message="Hello Singapore Cabinet, I would like to ask about affordable wardrobe options for my bedroom.">
              Ask About Affordable Cabinet Options
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Space-Saving Storage Solutions */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-sm">
              <img
                src={images.wardrobeSpaceSaving}
                alt="Space-saving wardrobe with practical internal layout in a small Singapore bedroom"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-neutral-900">
                Space-Saving Storage Solutions
              </h2>
              <p className="mt-4 text-neutral-600">
                In compact Singapore bedrooms, every bit of storage counts. Built-in wardrobes are
                inherently space-saving because they fit your exact wall dimensions, but the internal
                layout also plays a role in how efficiently you can use the space.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                  <span>
                    <strong>Dual hanging heights</strong> — a full-height rail for long items and a
                    double-hung section for shorter clothing doubles your hanging capacity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                  <span>
                    <strong>Top compartment</strong> — a shelf above the hanging area for items you
                    do not access daily, like spare pillows or luggage.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-4 flex-shrink-0 text-brand-500" />
                  <span>
                    <strong>Wall-to-wall fit</strong> — eliminates wasted side gaps that
                    freestanding wardrobes leave behind.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
                  <span>
                    <strong>Simple drawer bank</strong> — a compact set of drawers within the
                    wardrobe for smaller items, avoiding the need for a separate chest of drawers.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Keep Wardrobe Costs Affordable */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            How to Keep Wardrobe Costs Affordable
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            Several practical choices can help keep your wardrobe project within budget without
            compromising on everyday usefulness. Focus on functional storage and avoid features that
            add cost without adding value.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Choose swing doors</strong> over sliding doors if you have enough floor
                clearance — hinges are cheaper than sliding tracks.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Limit drawers to what you need</strong> — open shelving is more economical
                and works well for folded items.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Use laminate finishes</strong> instead of acrylic or veneer for a practical
                look at a lower price.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Skip accessories</strong> like pull-down hanging rails, built-in mirrors
                and LED lighting unless they are essential to your daily routine.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Keep the layout rectangular</strong> — straight runs are cheaper than
                L-shaped or angled configurations.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-500" />
              <p className="text-sm text-neutral-700">
                <strong>Standard height is fine</strong> if you do not need ceiling-level storage —
                full-height costs more in panels and doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Built-in Wardrobe Prices */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            What Affects Built-in Wardrobe Prices?
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-600">
            We do not publish a fixed price list because every wardrobe is built to your
            specifications. The following factors all influence the final cost. Understanding them
            helps you make choices that fit your budget.
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
            <WhatsAppButton variant="nav" message="Hello Singapore Cabinet, I would like a wardrobe quotation.">
              WhatsApp us
            </WhatsAppButton>{" "}
            for a clear, itemised quotation tailored to your bedroom.
          </p>
        </div>
      </section>

      {/* Wardrobe Measurement and Installation */}
      <section className="bg-brand-700 py-12 lg:py-16 text-white">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Wardrobe Measurement and Installation
          </h2>
          <p className="mt-3 text-brand-100">
            From WhatsApp enquiry to installed wardrobe — simple and transparent.
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
          <div className="mt-8 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
            <h3 className="font-heading text-base font-semibold">
              What to measure before contacting us
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-brand-100">
              <li>Wall width where the wardrobe will be installed</li>
              <li>Floor-to-ceiling height</li>
              <li>Positions of windows, switches or aircon ledges near the wardrobe wall</li>
              <li>Any existing furniture that will share the wall</li>
            </ul>
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
            Common questions about our wardrobes, door types and process.
          </p>
          <div className="mt-8 mx-auto max-w-3xl space-y-4">
            {wardrobeFaqs.map((faq) => (
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
              to="/services/kitchen-cabinets"
              className="group flex items-center justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <p className="text-xs font-medium text-brand-600">Related Service</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-neutral-900">
                  Kitchen Cabinets
                </h3>
                <p className="mt-1 text-sm text-neutral-600">
                  Affordable kitchen cabinets for HDB and BTO homes.
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
              Ready to Discuss Your Wardrobe?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-brand-100">
              WhatsApp us your bedroom dimensions and storage needs for a clear, itemised quotation.
              We will help you choose the most practical and affordable wardrobe for your space.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton
                variant="secondary"
                message="Hello Singapore Cabinet, I would like to ask about affordable wardrobe options for my bedroom."
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
