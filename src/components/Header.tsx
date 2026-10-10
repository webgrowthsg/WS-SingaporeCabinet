import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../config/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-shadow ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white"
      }`}
    >
      <div className="container-max flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 text-white font-heading font-bold text-lg">
            SC
          </div>
          <span className="font-heading text-lg font-semibold text-neutral-900">
            Singapore Cabinet
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {siteConfig.nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path!}
              end={item.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-brand-600 ${
                  isActive ? "text-brand-600" : "text-neutral-700"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp for a Quote
          </a>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav className="container-max flex flex-col py-4" aria-label="Mobile navigation">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.path}
                to={item.path!}
                className="py-2 text-sm font-medium text-neutral-700 hover:text-brand-600"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp mt-4 w-full"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp for a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

