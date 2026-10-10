import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found — Singapore Cabinet"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="py-20 lg:py-32">
        <div className="container-max text-center">
          <p className="font-heading text-6xl font-bold text-brand-200">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-neutral-900">
            Page Not Found
          </h1>
          <p className="mt-3 text-neutral-600">
            Sorry, the page you are looking for does not exist.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              Back to Home
            </Link>
            <WhatsAppButton>WhatsApp Us Instead</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
