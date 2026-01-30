import Image, { getImageProps } from "next/image";
import Link from "next/link";

import SectionHeading from "./SectionHeading";

type Props = {
  bookingUrl: string;
};

export default function Homepage({ bookingUrl }: Props) {
  const heroAlt = "Subtle abstract background";
  const heroSize = { width: 2400, height: 1350 };

  const { props: heroLightProps } = getImageProps({
    src: "/images/hero-bg-light.webp",
    alt: heroAlt,
    ...heroSize,
    priority: true,
    sizes: "100vw",
  });

  const { props: heroDarkProps } = getImageProps({
    src: "/images/hero-bg.webp",
    alt: heroAlt,
    ...heroSize,
    priority: true,
    sizes: "100vw",
  });

  return (
    <main id="main" className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* Hero (background image + overlay) */}
      <section className="relative overflow-hidden border-b border-[color:var(--border)]">
        <div className="absolute inset-0">
          <picture>
            <source
              media="(prefers-color-scheme: dark)"
              srcSet={heroDarkProps.srcSet ?? heroDarkProps.src}
            />
            <source
              media="(prefers-color-scheme: light)"
              srcSet={heroLightProps.srcSet ?? heroLightProps.src}
            />
            <img
              {...heroLightProps}
              alt={heroAlt}
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                ...heroLightProps.style,
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </picture>
          <div
            className="hero-bg__overlay--light absolute inset-0 bg-gradient-to-b from-white/88 via-white/72 to-white/82"
            aria-hidden
          />
          <div
            className="hero-bg__overlay--dark absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/80"
            aria-hidden
          />
        </div>

        <div className="hero-theme container-page relative pb-16 pt-[var(--header-offset)] sm:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="pill w-fit border-[color:var(--hero-chip-border)] bg-[color:var(--hero-chip-bg)] text-[color:var(--hero-text)]">
                <span className="h-2 w-2 rounded-full bg-[color:var(--accent-2)]" aria-hidden />
                <span className="text-sm font-semibold">
                  softwared — Technology shaped for impact.
                </span>
              </div>

              <h1 className="mt-6 font-[family-name:var(--font-display)] text-[length:var(--step-5)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)] text-[color:var(--hero-text)]">
                Custom software development that removes admin errors.
              </h1>

              <p className="mt-5 max-w-2xl text-[length:var(--step-1)] leading-[1.45] text-[color:var(--hero-muted)]">
                Internal systems, business automation, and web and mobile apps that help your team serve more customers without hiring more staff.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[color:var(--hero-soft)]">
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hero-chip-border)] bg-[color:var(--hero-chip-bg)] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden />
                  First version in 2 to 6 weeks
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hero-chip-border)] bg-[color:var(--hero-chip-bg)] px-3 py-1.5">
                  Clear scope
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hero-chip-border)] bg-[color:var(--hero-chip-bg)] px-3 py-1.5">
                  Built around your workflow
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                  Book a discovery call
                  <span aria-hidden>→</span>
                </a>
                <Link
                  className="text-sm font-semibold text-[color:var(--hero-muted)] underline-offset-4 hover:text-[color:var(--hero-text)] hover:underline decoration-[color:var(--accent-2)]/80"
                  href="/services/"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="surface border border-[color:var(--hero-card-border)] bg-[color:var(--hero-card-bg)] p-6 text-[color:var(--hero-text)] shadow-none backdrop-blur sm:p-8">
                <h2 className="font-[family-name:var(--font-display)] text-[length:var(--step-2)] leading-[var(--lh-snug)] tracking-[var(--tracking-tight)]">
                  What you get in 2 to 6 weeks
                </h2>
                <p className="mt-2 text-sm text-[color:var(--hero-soft)]">
                  A working first version that removes one bottleneck and proves the workflow.
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
                      body: "Visibility into what’s happening now, what’s late, and what needs attention.",
                    },
                  ].map((item) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-[color:var(--hero-card-item-border)] bg-[color:var(--hero-card-item-bg)] p-4"
                    >
                      <p className="font-semibold">{item.title}</p>
                      <p className="mt-2 text-[color:var(--hero-soft)]">{item.body}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-[color:var(--hero-card-item-border)] bg-[color:var(--hero-card-item-bg)] p-4">
                  <p className="text-sm text-[color:var(--hero-soft)]">
                    Book a discovery call. We’ll map one workflow and outline a clear first step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)]">
        <div className="container-page py-14 sm:py-16">
          <SectionHeading
            kicker="Who it’s for"
            title="Service businesses, startups, and ops teams."
            description="If you’ve outgrown spreadsheets and manual handoffs, we’ll replace the fragile parts with a system that runs."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Service businesses",
                body: "Bookings, job workflows, customer updates, and back office admin. Made consistent and trackable.",
              },
              {
                title: "Startups",
                body: "Internal tools that keep operations clean while your product and team scale.",
              },
              {
                title: "Operations teams",
                body: "Internal systems, automation, and dashboards that remove bottlenecks and make work visible.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes + supporting image #1 */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)]">
        <div className="container-page py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="Outcomes"
                title="Less admin. Fewer errors. More capacity."
                description="Outcomes that matter: faster service, fewer mistakes, and less time spent chasing updates."
              />
            </div>

            <div className="lg:col-span-7">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Reduce admin",
                    body: "Cut repetitive tasks with automation and clean workflows.",
                  },
                  {
                    title: "Eliminate avoidable errors",
                    body: "Make the system the source of truth. No stale spreadsheets and missed handoffs.",
                  },
                  {
                    title: "Serve more customers",
                    body: "Increase throughput without increasing headcount.",
                  },
                  {
                    title: "Real visibility",
                    body: "Dashboards and reporting that show what’s happening now.",
                  },
                ].map((item) => (
                  <div key={item.title} className="card p-6">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm text-[color:var(--muted)]">{item.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
                <Image
                  src="/images/benefit-dashboard.webp"
                  alt="Dashboard-style illustration showing status and reporting"
                  width={1400}
                  height={900}
                  sizes="(min-width: 1024px) 720px, 100vw"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary + supporting image #2 */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)]">
        <div className="container-page py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                kicker="What we build"
                title="Internal systems, automation, web + mobile apps."
                description="Designed to match how work actually moves in your business, and to keep improving after launch."
              />

              <ul className="mt-8 space-y-3 text-sm text-[color:var(--muted)]">
                <li>Custom software development for internal systems and portals</li>
                <li>Business automation (approvals, notifications, scheduling, data sync)</li>
                <li>Dashboards, reporting, audit trails, and operational visibility</li>
                <li>Web and mobile apps (phone, tablet, desktop)</li>
              </ul>

              <div className="mt-8 flex items-center gap-4">
                <Link className="btn btn-secondary" href="/services/">
                  See services
                </Link>
                <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                  Book a discovery call
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
                <Image
                  src="/images/benefit-automation.webp"
                  alt="Automation/workflow illustration showing connected steps"
                  width={1400}
                  height={900}
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process + supporting image #3 */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)]">
        <div className="container-page py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="Process"
                title="Calm process. Clear scope. Steady delivery."
                description="Start with one bottleneck, ship the first version in 2 to 6 weeks, then iterate with real usage."
              />

              <div className="mt-8 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
                <Image
                  src="/images/benefit-mobile-web.webp"
                  alt="Mobile and web app illustration"
                  width={1400}
                  height={900}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <ol className="space-y-4">
                {[
                  {
                    title: "Discovery call",
                    body: "We map your workflow, identify the bottleneck, and agree on outcomes.",
                  },
                  {
                    title: "Scope + plan",
                    body: "We define the smallest version that removes friction and reduces errors.",
                  },
                  {
                    title: "Build + integrate",
                    body: "We implement the system, automation, and integrations. Then we share progress regularly.",
                  },
                  {
                    title: "Launch + iterate",
                    body: "We ship, support rollout, and improve based on real usage and feedback.",
                  },
                ].map((step, idx) => (
                  <li key={step.title} className="card p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] text-sm font-semibold text-[color:var(--accent)]"
                        aria-hidden
                      >
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{step.title}</p>
                        <p className="mt-2 text-sm text-[color:var(--muted)]">{step.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-8 rounded-3xl border border-[color:var(--border)] bg-black/[0.02] p-6 dark:bg-white/[0.06]">
                <p className="text-sm font-semibold">A note on delivery</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Minimal UI. No heavy animations. No unnecessary dependencies.
                </p>
              </div>

              <div className="mt-8">
                <Link className="btn btn-secondary" href="/process/">
                  View the process
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-[color:var(--border)] bg-[color:var(--bg)]">
        <div className="container-page py-14 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                kicker="FAQ"
                title="Quick answers."
                description="If you have a different question, bring it to the call."
              />
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-4">
                {[
                  {
                    q: "What do you build?",
                    a: "Custom software development for internal systems, business automation, dashboards, and web and mobile apps.",
                  },
                  {
                    q: "How long does the first version take?",
                    a: "Most first versions ship in 2 to 6 weeks. We keep scope tight so delivery stays predictable.",
                  },
                  {
                    q: "Do you integrate with our existing tools?",
                    a: "Yes, where it reduces admin and mistakes. We connect tools and remove duplicate entry.",
                  },
                  {
                    q: "What do you need from us?",
                    a: "One point of contact, access to the current workflow, and fast feedback during the build.",
                  },
                ].map((item) => (
                  <details key={item.q} className="card p-6">
                    <summary className="cursor-pointer list-none font-semibold">
                      {item.q}
                    </summary>
                    <p className="mt-3 text-sm text-[color:var(--muted)]">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[color:var(--bg)]">
        <div className="container-page py-14 sm:py-16">
          <div className="surface p-8 sm:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-[length:var(--step-3)] leading-[var(--lh-snug)] tracking-[var(--tracking-tight)]">
                  Book a discovery call.
                </h2>
                <p className="mt-3 text-[color:var(--muted)]">
                  We’ll map one workflow and define a clear first version that reduces admin and errors.
                </p>
              </div>
              <a className="btn btn-primary" href={bookingUrl} target="_blank" rel="noreferrer">
                Book a discovery call
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
