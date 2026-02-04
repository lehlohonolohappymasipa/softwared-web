import SectionHeading from "../SectionHeading";

type Props = {
  bookingUrl: string;
  contactEmail?: string;
  linkedInUrl?: string;
  whatsAppHref?: string;
};

export default function Contact({
  bookingUrl,
  contactEmail = "admin@softwared.co.za",
  linkedInUrl = "https://www.linkedin.com/company/111125043/",
  whatsAppHref,
}: Props) {
  return (
    <section id="contact" className="bg-[color:var(--bg)]">
      <div className="container-page py-14 sm:py-16">
        <div className="surface p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            {/* Left: CTA */}
            <div>
              <SectionHeading
                kicker="Get started"
                title="Book a discovery call."
                description="We'll map one workflow and define a clear first version that reduces admin and errors."
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  className="btn btn-primary"
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a discovery call
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            {/* Right: Other contact options */}
            <div className="lg:min-w-[280px]">
              <p className="text-sm font-semibold">Other ways to reach us</p>
              <ul className="mt-4 space-y-3 text-sm">
                {whatsAppHref && (
                  <li>
                    <a
                      href={whatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[color:var(--muted)] hover:text-[color:var(--text)]"
                    >
                      <svg
                        className="h-4 w-4 shrink-0"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.07-1.33A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18c-1.74 0-3.36-.54-4.7-1.47l-.33-.22-3.02.79.81-2.95-.24-.38A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8Z" />
                      </svg>
                      <span>WhatsApp</span>
                    </a>
                  </li>
                )}
                <li>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="flex items-center gap-2 text-[color:var(--muted)] hover:text-[color:var(--text)]"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                    <span>{contactEmail}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[color:var(--muted)] hover:text-[color:var(--text)]"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--muted)] hover:text-[color:var(--text)]"
          >
            <span aria-hidden>↑</span>
            Back to top
          </a>
        </div>
      </div>
    </section>
  );
}
