import { getAbsoluteUrl, getSiteUrl } from "./lib/site";

export default function Head() {
  const siteUrl = getSiteUrl();
  const linkedInUrl = (process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "").trim();

  const orgId = `${getAbsoluteUrl("/")}#org`;
  const websiteId = `${getAbsoluteUrl("/")}#website`;
  const logoUrl = getAbsoluteUrl("/softwared_logo.png");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: "softwared",
        legalName: "softwared",
        url: getAbsoluteUrl("/"),
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        description:
          "Custom software development studio building web applications, mobile apps, and business automation software.",
        ...(linkedInUrl ? { sameAs: [linkedInUrl] } : {}),
        knowsAbout: [
          "custom software development",
          "web application development",
          "mobile app development",
          "business automation software",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: getAbsoluteUrl("/"),
        name: "softwared",
        publisher: { "@id": orgId },
      },
      {
        "@type": "Service",
        "@id": `${getAbsoluteUrl("/")}#service-custom-software`,
        name: "Custom software development",
        serviceType: "Custom software development",
        provider: { "@id": orgId },
        areaServed: "Worldwide",
        description:
          "Design and build tailored software that automates workflows and supports business operations.",
      },
      {
        "@type": "Service",
        "@id": `${getAbsoluteUrl("/")}#service-web-apps`,
        name: "Web application development",
        serviceType: "Web application development",
        provider: { "@id": orgId },
        areaServed: "Worldwide",
        description:
          "Build modern web applications for customers and internal teams, including dashboards and portals.",
      },
      {
        "@type": "Service",
        "@id": `${getAbsoluteUrl("/")}#service-mobile-apps`,
        name: "Mobile app development",
        serviceType: "Mobile app development",
        provider: { "@id": orgId },
        areaServed: "Worldwide",
        description:
          "Develop mobile applications that work smoothly across devices and integrate with business systems.",
      },
    ],
  };

  return (
    <>
      <link rel="preload" as="image" href="/softwared_logo.png" fetchPriority="high" />
      <link
        rel="preload"
        as="image"
        href="/softwared_logo_darkmode.png"
        media="(prefers-color-scheme: dark)"
        fetchPriority="high"
      />

      {/* Helps Google understand your brand/services (no UI impact) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Useful if you forget to set metadataBase; also helps some crawlers */}
      <meta
        name="google-site-verification"
        content="ZzVtjdeOh5_xQNqPYYLfo95uj9F4hHfXaOcpZ_quaFI"
      />
      <meta property="og:site_name" content="Softwared" />
      <meta property="og:url" content={getAbsoluteUrl("/")} />
      <meta name="twitter:domain" content={new URL(siteUrl).hostname} />
    </>
  );
}
