import { Helmet } from "react-helmet-async";
import { siteConfig } from "../config/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  jsonLd?: object[];
}

export function Seo({ title, description, path, type = "website", jsonLd = [] }: SeoProps) {
  const canonical = `${siteConfig.url}${path}`;
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.tagline,
    url: siteConfig.url,
    areaServed: "Singapore",
    telephone: siteConfig.contact.whatsappInternational,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={siteConfig.social.ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(defaultJsonLd)}</script>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
}
