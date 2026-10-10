import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";

const projectTypes = [
  {
    title: "HDB BTO Kitchen Cabinets",
    description:
      "Straight-line and L-shaped kitchen cabinet installations for new BTO flats. Simple laminate finishes in white, light grey and woodgrain tones.",
    type: "Kitchen Cabinets",
    property: "HDB BTO",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Simple white laminate kitchen cabinets with woodgrain accents in a Singapore BTO flat",
  },
  {
    title: "HDB Resale Kitchen Replacement",
    description:
      "Full kitchen cabinet replacement for resale flats. Old cabinets removed, new laminate cabinets installed in a straight-line configuration.",
    type: "Kitchen Cabinet Replacement",
    property: "HDB Resale",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Freshly replaced kitchen cabinets in a Singapore resale HDB flat with light laminate finish",
  },
  {
    title: "BTO Master Bedroom Wardrobe",
    description:
      "Full-height sliding-door wardrobe for a BTO master bedroom. Practical internal layout with hanging compartments, shelving and a small drawer section.",
    type: "Built-in Wardrobe",
    property: "HDB BTO",
    image: "https://images.unsplash.com/photo-1558997515-98c9603f4894?w=800&q=80",
    alt: "Full-height sliding-door built-in wardrobe in a Singapore BTO master bedroom",
  },
  {
    title: "Common Bedroom Swing-Door Wardrobe",
    description:
      "Swing-door wardrobe for a smaller HDB common bedroom. Standard height with hanging and shelving — economical and practical.",
    type: "Built-in Wardrobe",
    property: "HDB BTO",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=800&q=80",
    alt: "Swing-door built-in wardrobe in a compact HDB common bedroom with laminate doors",
  },
  {
    title: "L-Shaped Kitchen — Condo Unit",
    description:
      "L-shaped kitchen cabinet installation for a condo unit. Upper and lower cabinets with a laminate finish and standard soft-close hardware.",
    type: "Kitchen Cabinets",
    property: "Condominium",
    image: "https://images.unsplash.com/photo-1576022757810-af06631e6bf4?w=800&q=80",
    alt: "L-shaped kitchen cabinet with laminate finish and upper cabinets in a Singapore condo unit",
  },
  {
    title: "Full-Height Bedroom Wardrobe — Resale Flat",
    description:
      "Full-height built-in wardrobe replacing an older freestanding unit in a resale HDB bedroom. Wall-to-wall fit with dual hanging heights and shelving.",
    type: "Built-in Wardrobe",
    property: "HDB Resale",
    image: "https://images.unsplash.com/photo-1591646682698-3919b4dbf1bd?w=800&q=80",
    alt: "Full-height floor-to-ceiling built-in wardrobe in a Singapore resale flat bedroom",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/projects` },
  ],
};

export function Projects() {
  return (
    <>
      <Seo
        title="Cabinet Projects — Affordable Kitchen Cabinets & Wardrobes Singapore"
        description="Examples of our affordable kitchen cabinet and built-in wardrobe installations in HDB, BTO and condo homes across Singapore."
        path="/projects"
        jsonLd={[breadcrumbJsonLd]}
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Projects" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Our Cabinet Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            A selection of kitchen cabinet and built-in wardrobe installations across HDB, BTO and
            condo homes in Singapore. Simple layouts, practical finishes and sensible prices.
          </p>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700">
                      {project.type}
                    </span>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-600">
                      {project.property}
                    </span>
                  </div>
                  <h2 className="mt-3 font-heading text-base font-semibold text-neutral-900">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See More / Enquire */}
      <section className="py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                Want to See More Examples?
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                WhatsApp us to request photos relevant to your specific project — kitchen cabinet
                layout, wardrobe door type, or property type.
              </p>
              <div className="mt-5">
                <WhatsAppButton message="Hello Singapore Cabinet, I would like to see examples of projects similar to mine. Can you share some photos?">
                  Request Relevant Photos
                </WhatsAppButton>
              </div>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="font-heading text-lg font-semibold text-neutral-900">
                Get a Quotation for Your Project
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                Tell us your cabinet type, property type and approximate dimensions. We will provide
                a clear, itemised quotation.
              </p>
              <div className="mt-5">
                <Link to="/contact" className="btn-secondary inline-flex">
                  Fill In Our Quotation Form
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related service links */}
      <section className="bg-brand-50 py-10">
        <div className="container-max flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:gap-8">
          <Link
            to="/services/kitchen-cabinets"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Affordable Kitchen Cabinets <ArrowRight className="inline h-4 w-4" />
          </Link>
          <Link
            to="/services/custom-wardrobes"
            className="text-sm font-medium text-brand-600 hover:underline"
          >
            Built-in Bedroom Wardrobes <ArrowRight className="inline h-4 w-4" />
          </Link>
          <Link to="/faq" className="text-sm font-medium text-brand-600 hover:underline">
            Frequently Asked Questions <ArrowRight className="inline h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
