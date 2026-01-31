import { getAbsoluteUrl } from "../lib/site";

type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  faqs?: FAQItem[];
};

export default function JsonLd({ faqs = [] }: Props) {
  const siteUrl = getAbsoluteUrl("/");
  const logoUrl = getAbsoluteUrl("/softwared_logo.png");

  const organizationSchema = {
    "@type": "Organization",
    name: "softwared",
    url: siteUrl,
    logo: logoUrl,
    description:
      "Custom software development studio helping businesses simplify operations and scale through practical, well-designed technology.",
    sameAs: ["https://www.linkedin.com/company/111125043/"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "masipah@icloud.com",
    },
  };

  const websiteSchema = {
    "@type": "WebSite",
    name: "softwared",
    url: siteUrl,
    description:
      "Custom software development for service businesses and operations teams. Internal systems, business automation, and web + mobile apps.",
  };

  const faqSchema =
    faqs.length > 0
      ? {
          "@type": "FAQPage" as const,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question" as const,
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer" as const,
              text: faq.answer,
            },
          })),
        }
      : null;

  // Use a more flexible type for the graph array
  const graph: Record<string, unknown>[] = [organizationSchema, websiteSchema];
  if (faqSchema) {
    graph.push(faqSchema);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
