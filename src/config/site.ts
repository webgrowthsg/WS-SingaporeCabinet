export const siteConfig = {
  name: "Singapore Cabinet",
  tagline: "Practical Cabinets. Sensible Prices.",
  domain: "singaporecabinet.com",
  url: "https://singaporecabinet.com",
  contact: {
    whatsappNumber: "6593416879",
    whatsappDisplay: "9341 6879",
    whatsappInternational: "+65 9341 6879",
    whatsappUrl: "https://wa.me/6593416879",
    email: "hello@singaporecabinet.com",
  },
  nav: [
    { label: "Home", path: "/" },
    { label: "Kitchen Cabinets", path: "/services/kitchen-cabinets" },
    { label: "Built-in Wardrobes", path: "/services/custom-wardrobes" },
    { label: "Projects", path: "/projects" },
    { label: "Guides", path: "/guides" },
    { label: "Contact", path: "/contact" },
  ],
  services: [
    {
      slug: "kitchen-cabinets",
      title: "Kitchen Cabinets",
      short: "Affordable HDB kitchen cabinets, simple straight-line and L-shaped configurations with practical laminate finishes.",
      icon: "Kitchen",
      highlights: [
        "Affordable HDB kitchen cabinets",
        "Simple straight-line cabinets",
        "L-shaped kitchen cabinets",
        "Upper and lower cabinets",
        "Kitchen cabinet replacement",
        "Practical laminate finishes",
        "Basic storage configurations",
      ],
    },
    {
      slug: "custom-wardrobes",
      title: "Bedroom Wardrobes",
      short: "Affordable built-in wardrobes, sliding-door and swing-door options with simple shelving and hanging compartments.",
      icon: "DoorClosed",
      highlights: [
        "Affordable built-in wardrobes",
        "Sliding-door wardrobes",
        "Swing-door wardrobes",
        "Full-height wardrobes",
        "Simple shelving",
        "Hanging compartments",
        "Basic drawers",
        "Space-saving bedroom cabinets",
      ],
    },
  ],
  social: {
    ogImage: "https://images.pexels.com/photos/6523300/pexels-photo-6523300.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  },
};

export function whatsappLink(message?: string): string {
  const base = siteConfig.contact.whatsappUrl;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export const defaultWhatsAppMessage =
  "Hello Singapore Cabinet, I would like to get a quotation for cabinets. Could you advise on the next steps?";

export function getWhatsAppUrl(message?: string): string {
  return whatsappLink(message ?? defaultWhatsAppMessage);
}
