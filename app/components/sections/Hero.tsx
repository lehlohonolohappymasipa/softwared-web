import Image from "next/image";

type Props = {
  bookingUrl: string;
};

export default function Hero({ bookingUrl }: Props) {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[color:var(--border)]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-light.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/90 via-[var(--bg)]/75 to-[var(--bg)]/85"
          aria-hidden
        />
      </div>

      <div className="hero-theme container-page relative pb-16 pt-[var(--header-offset)] sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left column: headline + CTA */}
          <div className="lg:col-span-7">
            <div className="pill w-fit">
              <span
                className="h-2 w-2 rounded-full bg-[color:var(--accent)]"
                aria-hidden
              />
              <span className="text-sm font-semibold">
                Custom software development studio
              </span>
            </div>

            <h1 className="mt-6 font-[family-name:var(--font-display)] text-[length:var(--step-5)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)] text-[color:var(--hero-text)]">
              Custom software that automates your core processes and reduces manual work.
            </h1>

            <p className="mt-5 max-w-2xl text-[length:var(--step-1)] leading-[1.5] text-[color:var(--hero-muted)]">
              Internal systems, business automation, and web + mobile apps that
              free your team from repetitive admin so they can focus on what matters.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--hero-soft)]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-3 py-1.5">
                <span
                  className="h-2 w-2 rounded-full bg-emerald-500"
                  aria-hidden
                />
                First version in 2–6 weeks
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-3 py-1.5">
                Clear scope
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)]/80 px-3 py-1.5">
                Built around your workflow
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                className="btn btn-primary"
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a discovery call
                <span aria-hidden>→</span>
              </a>
              <a
                className="text-sm font-semibold text-[color:var(--hero-muted)] underline-offset-4 hover:text-[color:var(--hero-text)] hover:underline decoration-[color:var(--accent)]/80"
                href="#solutions"
              >
                See what we build
              </a>
            </div>
          </div>

          {/* Right column: value card */}
          <div className="lg:col-span-5">
            <div className="surface p-6 sm:p-8">
              <h2 className="font-[family-name:var(--font-display)] text-[length:var(--step-2)] leading-[var(--lh-snug)] tracking-[var(--tracking-tight)]">
                What you get in 2–6 weeks
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                A working first version that removes one bottleneck and proves
                the workflow.
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                {[
                  {
                    title: "An internal system that fits",
                    body: "A clean workflow for requests, approvals, handoffs, and updates without spreadsheet drift.",
                  },
                  {
                    title: "Automation + integrations",
                    body: "Fewer copy-paste steps. Less double-entry. Cleaner data across tools.",
                  },
                  {
                    title: "Dashboards you trust",
                    body: "Visibility into what's happening now, what's late, and what needs attention.",
                  },
                ].map((item) => (
                  <li key={item.title} className="card p-5">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">{item.body}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
                <p className="text-sm text-[color:var(--muted)]">
                  Book a discovery call. We'll map one workflow and outline a
                  clear first step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
