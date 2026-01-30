import type { Metadata } from "next";

import ContactIntro from "./components/ContactIntro";
import ContactOptions from "./components/ContactOptions";
import WhatToExpect from "./components/WhatToExpect";

export const metadata: Metadata = {
  title: "Book a discovery call",
  description:
    "Book a discovery call with softwared to discuss operational bottlenecks, internal systems, business automation, and web and mobile apps.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  const contactEmail = (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "masipah@icloud.com").trim();
  const linkedInUrl = "https://www.linkedin.com/company/111125043/";

  return (
    <main id="main" className="bg-[color:var(--bg)] text-[color:var(--text)]">
      <section className="border-b border-[color:var(--border)]">
        <div className="container-page pb-14 pt-[var(--header-offset)] sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_26rem] lg:items-start lg:gap-12">
            <div>
              <ContactIntro />
              <WhatToExpect />
            </div>

            <div>
              <ContactOptions contactEmail={contactEmail} linkedInUrl={linkedInUrl} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
