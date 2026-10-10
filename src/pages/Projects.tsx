import { Seo } from "../components/Seo";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Projects() {
  return (
    <>
      <Seo
        title="Projects — Singapore Cabinet"
        description="See examples of our affordable kitchen cabinets and bedroom wardrobes installed in Singapore HDB, BTO and condo homes."
        path="/projects"
      />
      <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Projects" }]} />

      <section className="py-12 lg:py-16">
        <div className="container-max">
          <h1 className="font-heading text-3xl font-bold text-neutral-900 sm:text-4xl">
            Our Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600">
            A selection of our kitchen cabinet and wardrobe installations across Singapore homes.
            Project photos and case studies will be added in the next stage.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="container-max text-center">
          <div className="mx-auto max-w-md">
            <h2 className="font-heading text-xl font-semibold text-neutral-900">
              Project Gallery Coming Soon
            </h2>
            <p className="mt-3 text-sm text-neutral-600">
              We are compiling photos from recent kitchen cabinet and wardrobe installations.
              In the meantime, WhatsApp us to see examples relevant to your project.
            </p>
            <div className="mt-6">
              <WhatsAppButton message="Hello Singapore Cabinet, I would like to see examples of your recent cabinet projects.">
                Ask to See Examples
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
