import { Link } from "react-router-dom";
import { CircleCheck as CheckCircle2, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { siteConfig } from "../config/site";

export function KitchenCabinets() {
  const service = siteConfig.services[0];

  return (
    <>
      <Seo
        title="Affordable Kitchen Cabinets Singapore — HDB, BTO & Condo"
        description="Budget-friendly kitchen cabinets for HDB, BTO and condo units in Singapore. Simple straight-line and L-shaped configurations with practical laminate finishes."
        path="/services/kitchen-cabinets"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Kitchen Cabinet Installation",
            provider: {
              "@type": "LocalBusiness",
              name: siteConfig.name,
              url: siteConfig.url,
              areaServed: "Singapore",
            },
            areaServed: "Singapore",
            description: "Affordable kitchen cabinets for HDB, BTO and condo units.",
          },
        ]}
      />
      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: "Services" },
          { label: "Kitchen Cabinets" },
        ]}
      />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Affordable Kitchen Cabinets in Singapore
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            Practical kitchen cabinets designed for HDB, BTO and condo homes. Simple layouts,
            durable laminate finishes and sensible prices — without unnecessary extras.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            What We Offer
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-max max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Keeping Kitchen Cabinets Affordable
          </h2>
          <p className="mt-4 text-neutral-600">
            Simple layouts and fewer unnecessary accessories help control costs. We will advise you
            on the most practical configuration for your kitchen space and budget. Detailed content
            and configuration examples will be added in the next stage.
          </p>
          <div className="mt-8">
            <WhatsAppButton message="Hello Singapore Cabinet, I would like a quotation for kitchen cabinets.">
              Get a Kitchen Cabinet Quote
            </WhatsAppButton>
          </div>
          <div className="mt-6">
            <Link
              to="/services/custom-wardrobes"
              className="text-sm font-medium text-brand-600 hover:underline"
            >
              View our bedroom wardrobe solutions <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
