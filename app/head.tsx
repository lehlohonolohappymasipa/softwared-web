import { getAbsoluteUrl } from "./lib/site";

export default function Head() {
  const linkedInUrl = (process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "").trim();

  const orgId = `${getAbsoluteUrl("/")}#org`;
  const businessId = `${getAbsoluteUrl("/")}#localbusiness`;
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
          "Custom software development for internal systems, business automation, and web and mobile apps that reduce admin and errors.",
        ...(linkedInUrl ? { sameAs: [linkedInUrl] } : {}),
        knowsAbout: [
          "custom software development",
          "business automation",
          "internal systems",
          "workflow automation",
          "software integration",
          "web application development",
          "mobile app development",
          "business automation software",
        ],
      },
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: "softwared",
        url: getAbsoluteUrl("/"),
        image: logoUrl,
        logo: logoUrl,
        parentOrganization: { "@id": orgId },
        areaServed: "Worldwide",
        description:
          "Custom software development and business automation for service businesses, startups, and ops teams.",
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
        provider: { "@id": businessId },
        areaServed: "Worldwide",
        description:
          "Build internal systems and custom software that reduces admin, eliminates errors, and improves visibility.",
      },
      {
        "@type": "Service",
        "@id": `${getAbsoluteUrl("/")}#service-web-apps`,
        name: "Web application development",
        serviceType: "Web application development",
        provider: { "@id": businessId },
        areaServed: "Worldwide",
        description:
          "Build modern web applications for customers and internal teams, including dashboards and portals.",
      },
      {
        "@type": "Service",
        "@id": `${getAbsoluteUrl("/")}#service-mobile-apps`,
        name: "Mobile app development",
        serviceType: "Mobile app development",
        provider: { "@id": businessId },
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
    </>
  );
}
