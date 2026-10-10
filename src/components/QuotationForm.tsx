import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/site";

interface FormData {
  name: string;
  whatsapp: string;
  cabinetType: string;
  propertyType: string;
  measurements: string;
  budget: string;
  description: string;
}

const initialData: FormData = {
  name: "",
  whatsapp: "",
  cabinetType: "",
  propertyType: "",
  measurements: "",
  budget: "",
  description: "",
};

export function QuotationForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const buildMessage = (d: FormData): string => {
    const lines = [
      "Hello Singapore Cabinet, I would like to request a quotation.",
      "",
      `Name: ${d.name}`,
      `WhatsApp: ${d.whatsapp}`,
      `Cabinet type: ${d.cabinetType}`,
      `Property type: ${d.propertyType}`,
      `Approximate measurements: ${d.measurements}`,
      `Estimated budget: ${d.budget}`,
      `Project description: ${d.description}`,
    ];
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildMessage(data);
    const url = getWhatsAppUrl(message);
    setSubmitted(true);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass =
    "w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100";
  const labelClass = "block text-sm font-medium text-neutral-700 mb-1.5";

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <h3 className="font-heading text-xl font-semibold text-neutral-900">
          Request a Quotation
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Fill in the form below and we will continue the conversation on WhatsApp with a
          prefilled enquiry.
        </p>
      </div>

      {submitted && (
        <div className="mb-6 rounded-lg border border-brand-200 bg-brand-50 px-4 py-3 text-sm text-brand-800">
          Your enquiry has been opened in WhatsApp. If the WhatsApp tab did not appear, please
          tap the button below to continue.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={data.name}
              onChange={(e) => update("name", e.target.value)}
              className={inputClass}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              WhatsApp Number <span className="text-red-500">*</span>
            </label>
            <input
              id="whatsapp"
              type="tel"
              required
              value={data.whatsapp}
              onChange={(e) => update("whatsapp", e.target.value)}
              className={inputClass}
              placeholder="e.g. 9xxx xxxx"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="cabinetType" className={labelClass}>
              Cabinet Type <span className="text-red-500">*</span>
            </label>
            <select
              id="cabinetType"
              required
              value={data.cabinetType}
              onChange={(e) => update("cabinetType", e.target.value)}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="Kitchen Cabinets">Kitchen Cabinets</option>
              <option value="Bedroom Wardrobes">Bedroom Wardrobes</option>
              <option value="Both">Both Kitchen and Wardrobes</option>
            </select>
          </div>
          <div>
            <label htmlFor="propertyType" className={labelClass}>
              Property Type <span className="text-red-500">*</span>
            </label>
            <select
              id="propertyType"
              required
              value={data.propertyType}
              onChange={(e) => update("propertyType", e.target.value)}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="HDB BTO">HDB BTO</option>
              <option value="HDB Resale">HDB Resale</option>
              <option value="Condominium">Condominium</option>
              <option value="Landed">Landed</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="measurements" className={labelClass}>
              Approximate Measurements
            </label>
            <input
              id="measurements"
              type="text"
              value={data.measurements}
              onChange={(e) => update("measurements", e.target.value)}
              className={inputClass}
              placeholder="e.g. Kitchen 3m x 2m"
            />
          </div>
          <div>
            <label htmlFor="budget" className={labelClass}>
              Estimated Budget
            </label>
            <input
              id="budget"
              type="text"
              value={data.budget}
              onChange={(e) => update("budget", e.target.value)}
              className={inputClass}
              placeholder="e.g. $3,000 - $5,000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Project Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={data.description}
            onChange={(e) => update("description", e.target.value)}
            className={inputClass}
            placeholder="Tell us about what you need — cabinet layout, number of doors, drawers, finishes, etc."
          />
        </div>

        <button type="submit" className="btn-whatsapp w-full">
          <Send className="h-4 w-4" />
          Send Enquiry via WhatsApp
        </button>

        <p className="text-center text-xs text-neutral-400">
          Your details are sent directly to our WhatsApp at{" "}
          {siteConfig.contact.whatsappDisplay}. We do not store your information on this website.
        </p>

        {submitted && (
          <a
            href={getWhatsAppUrl(buildMessage(data))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Re-open WhatsApp Enquiry
          </a>
        )}
      </form>
    </div>
  );
}
