import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";
import { images } from "../config/images";

const projectTypes = [
  {
    title: "Compact Kitchen Cabinet Design",
    description:
      "Straight-line kitchen cabinet installation with white laminate doors, upper and lower shelving and practical storage layout.",
    type: "Kitchen Cabinets",
    property: "Compact Kitchen",
    image: images.projects[0].image,
    alt: images.projects[0].alt,
  },
  {
    title: "Kitchen Cabinet Renovation",
    description:
      "Kitchen cabinet replacement with white laminate cabinets and practical countertops. Old cabinets removed and new ones installed.",
    type: "Kitchen Cabinet Replacement",
    property: "Renovation",
    image: images.projects[1].image,
    alt: images.projects[1].alt,
  },
  {
    title: "Full-Height Built-in Wardrobe",
    description:
      "Full-height built-in wardrobe with white panels. Practical internal layout with hanging compartments, shelving and drawer section.",
    type: "Built-in Wardrobe",
    property: "Bedroom",
    image: images.projects[2].image,
    alt: images.projects[2].alt,
  },
  {
    title: "Compact Bedroom Wardrobe",
    description:
      "Built-in wardrobe for a compact bedroom. Standard height with hanging and shelving — economical and practical.",
    type: "Built-in Wardrobe",
    property: "Compact Bedroom",
    image: images.projects[3].image,
    alt: images.projects[3].alt,
  },
  {
    title: "L-Shaped Kitchen Cabinets",
    description:
      "L-shaped kitchen cabinet installation with grey and white laminate doors, upper and lower cabinets and standard hardware.",
    type: "Kitchen Cabinets",
    property: "L-Shaped Kitchen",
    image: images.projects[4].image,
    alt: images.projects[4].alt,
  },
  {
    title: "Floor-to-Ceiling Wardrobe",
    description:
      "Floor-to-ceiling built-in wardrobe with woodgrain and glass sliding doors. Wall-to-wall fit with dual hanging heights and shelving.",
    type: "Built-in Wardrobe",
    property: "Full-Height",
    image: images.projects[5].image,
    alt: images.projects[5].alt,
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
