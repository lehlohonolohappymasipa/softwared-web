import Hero from "./sections/Hero";
import Problems from "./sections/Problems";
import Solutions from "./sections/Solutions";
import Process from "./sections/Process";
import Proof from "./sections/Proof";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

import { getWhatsAppHref } from "../lib/links";

type Props = {
  bookingUrl: string;
};

export default function LandingPage({ bookingUrl }: Props) {
  const whatsAppHref = getWhatsAppHref();
  const contactEmail =
    (process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "masipah@icloud.com").trim();
  const linkedInUrl = "https://www.linkedin.com/company/111125043/";

  return (
    <main id="main" className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      <Hero bookingUrl={bookingUrl} />
      <Problems />
      <Solutions bookingUrl={bookingUrl} />
      <Process />
      <Proof />
      <FAQ />
      <Contact
        bookingUrl={bookingUrl}
        contactEmail={contactEmail}
        linkedInUrl={linkedInUrl}
        whatsAppHref={whatsAppHref}
      />
    </main>
  );
}
