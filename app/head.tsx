import { getAbsoluteUrl, getSiteUrl } from "./lib/site";

export default function Head() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Softwared",
    url: getAbsoluteUrl("/"),
    logo: getAbsoluteUrl("/softwared_logo.png"),
    description:
      "Custom software development for web applications, mobile applications, e-commerce solutions, and Flutter apps.",
    knowsAbout: [
      "software",
      "software development",
      "web applications",
      "mobile applications",
      "e-commerce",
      "Flutter",
    ],
  };

  return (
    <>
      {/* Helps Google understand your brand/services (no UI impact) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Useful if you forget to set metadataBase; also helps some crawlers */}
      <meta property="og:site_name" content="Softwared" />
      <meta property="og:url" content={getAbsoluteUrl("/")} />
      <meta name="twitter:domain" content={new URL(siteUrl).hostname} />
    </>
  );
}
