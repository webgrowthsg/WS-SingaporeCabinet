import { Link } from "react-router-dom";
import { MessageCircle, Mail } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-max py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white font-heading font-bold text-sm">
                SC
              </div>
              <span className="font-heading text-base font-semibold text-white">
                Singapore Cabinet
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              {siteConfig.tagline} Affordable kitchen cabinets and built-in wardrobes for everyday
              Singapore homes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/services/kitchen-cabinets" className="hover:text-brand-400">
                  Kitchen Cabinets
                </Link>
              </li>
              <li>
                <Link to="/services/custom-wardrobes" className="hover:text-brand-400">
                  Custom Wardrobes
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-brand-400">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-brand-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-brand-400">
                  Cabinet Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-brand-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Get in Touch</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 hover:text-brand-400"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          <p>&copy; {year} {siteConfig.name}. All rights reserved.</p>
          <p className="mt-1">
            Affordable kitchen cabinets and built-in wardrobes for HDB, BTO, condo and resale flats
            in Singapore.
          </p>
        </div>
      </div>
    </footer>
  );
}
