import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Heart, TrendingDown } from "lucide-react";
import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";

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

export function About() {
  return (
    <>
      <Seo
        title="About Singapore Cabinet — Affordable Cabinet Specialists"
        description="Singapore Cabinet focuses exclusively on affordable kitchen cabinets and bedroom wardrobes. Learn about our practical, budget-friendly approach to cabinetry."
        path="/about"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            About Singapore Cabinet
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            We are a Singapore-based cabinet specialist focused on one thing: providing practical,
            affordable kitchen cabinets and bedroom wardrobes for everyday homes.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max">
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((item) => (
              <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="font-heading text-lg font-semibold text-neutral-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-max max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-neutral-900">
            Who We Help
          </h2>
          <ul className="mt-6 space-y-3 text-neutral-700">
            <li>Budget-conscious homeowners furnishing their HDB or BTO flat</li>
            <li>Young couples setting up their first home without overspending</li>
            <li>Landlords who need practical, durable storage solutions</li>
            <li>Condo owners looking for economical cabinetry options</li>
          </ul>
          <div className="mt-8">
            <WhatsAppButton message="Hello Singapore Cabinet, I saw your About page and would like to enquire about cabinets.">
              WhatsApp Us to Get Started
            </WhatsAppButton>
          </div>
          <div className="mt-6">
            <Link to="/services/kitchen-cabinets" className="text-sm font-medium text-brand-600 hover:underline">
              Explore our kitchen cabinet solutions <ArrowRight className="inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
