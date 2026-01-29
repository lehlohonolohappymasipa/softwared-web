import ClientEffects from "./components/ClientEffects";
import SiteHeader from "./components/SiteHeader";
import { getBasePath } from "./lib/site";

const BOOKING_URL = "https://calendly.com/masipalh/30min";

export default function Home() {
  const basePath = getBasePath();
  const logoLightSrc = `${basePath}/softwared_logo.png`;
  const logoDarkSrc = `${basePath}/softwared_logo_darkmode.png`;

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <ClientEffects />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
      >
        Skip to content
      </a>

      <SiteHeader
        bookingUrl={BOOKING_URL}
        logoLightSrc={logoLightSrc}
        logoDarkSrc={logoDarkSrc}
      />

      <main id="main" className="scroll-mt-20 pb-28 md:scroll-mt-24 md:pb-0">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-grid scroll-mt-20 md:scroll-mt-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[color:var(--accent-2)]/26 blur-3xl" />
            <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[color:var(--accent)]/22 blur-3xl" />
          </div>

          <div
            className="container-page relative pb-16 pt-[calc(clamp(4rem,7vw,5.75rem)+2.5rem)] sm:pb-20 sm:pt-[calc(clamp(4rem,7vw,5.75rem)+3.25rem)] lg:pb-24 lg:pt-[calc(clamp(4rem,7vw,5.75rem)+4rem)]"
            data-reveal-group
          >
            <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 md:col-span-8 lg:col-span-7">
                <div className="pill w-fit">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden />
                  <span className="text-sm font-semibold">Custom software for operational leverage</span>
                </div>

                <h1
                  className="mt-6 font-[family-name:var(--font-display)] text-[length:var(--step-5)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)] reveal"
                  data-reveal
                >
                  Custom software development that runs your business for you.
                </h1>

                <p
                  className="mt-6 max-w-2xl text-[length:var(--step-1)] leading-[1.45] text-[color:var(--muted)] reveal"
                  data-reveal
                >
                  softwared builds tailored web applications, mobile apps, and business automation software that
                  streamlines operations, helps you serve more customers, and reduces manual work without the
                  overhead of a large development team.
                </p>
                <p
                  className="mt-2 max-w-2xl text-[length:var(--step-0)] text-[color:var(--muted-2)] reveal"
                  data-reveal
                >
                  From internal systems to customer apps, we help businesses simplify operations, grow efficiently,
                  and focus on what matters most.
                </p>
                <p
                  className="mt-4 max-w-2xl text-sm text-[color:var(--muted-2)] reveal"
                  data-reveal
                >
                  Ideal for service businesses, startups, and growing teams that have outgrown spreadsheets and
                  manual work.
                </p>

                <div
                  className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center reveal"
                  data-reveal
                >
                  <a
                    className="btn btn-primary"
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book a discovery call
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    className="text-sm font-semibold text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--foreground)] hover:underline decoration-[color:var(--accent)]/70"
                    href="#benefits"
                  >
                    Explore benefits
                  </a>
                </div>

                <div
                  className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-[color:var(--muted-2)] reveal"
                  data-reveal
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70" aria-hidden />
                    Fast to deliver
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70" aria-hidden />
                    Reliable & maintainable
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]/70" aria-hidden />
                    Built around your workflows
                  </span>
                </div>
              </div>

              <div className="col-span-4 md:col-span-8 lg:col-span-5">
                <div className="premium-panel tilt float p-6 sm:p-8 reveal" data-reveal data-tilt>
                  <h2 className="font-[family-name:var(--font-display)] text-[length:var(--step-2)] leading-[var(--lh-snug)] tracking-[var(--tracking-tight)]">
                    What you get in 2 to 6 weeks
                  </h2>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    A working first version that removes a real bottleneck and is ready to improve with your team.
                  </p>

                  <ul className="mt-6 space-y-4 text-sm">
                    <li className="card p-4">
                      <div className="flex items-start gap-4">
                        <span className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--surface-2)] text-[color:var(--accent)]">
                          ✓
                        </span>
                        <div>
                          <p className="font-semibold">Workflow automation</p>
                          <p className="mt-2 text-[color:var(--muted)]">
                            Replace spreadsheets and manual admin with a single system.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="card p-4">
                      <div className="flex items-start gap-4">
                        <span className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--surface-2)] text-[color:var(--accent)]">
                          ✓
                        </span>
                        <div>
                          <p className="font-semibold">Dashboards & reporting</p>
                          <p className="mt-2 text-[color:var(--muted)]">
                            Make decisions using current information, with less guesswork.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="card p-4">
                      <div className="flex items-start gap-4">
                        <span className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--surface-2)] text-[color:var(--accent)]">
                          ✓
                        </span>
                        <div>
                          <p className="font-semibold">Mobile + web experience</p>
                          <p className="mt-2 text-[color:var(--muted)]">
                            Built to work seamlessly across phone, tablet, and desktop.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[color:var(--surface-2)] p-4">
                    <p className="text-sm text-[color:var(--muted)]">
                      Book a call so we can understand where work gets stuck and give you a clear plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits" className="bg-[color:var(--surface)] scroll-mt-20 md:scroll-mt-24">
          <div className="container-page py-16 sm:py-20">
            <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 md:col-span-8 lg:col-span-5">
                <h2
                  className="font-[family-name:var(--font-display)] text-[length:var(--step-4)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)] reveal"
                  data-reveal
                >
                  Build leverage into your operations.
                </h2>
                <p
                  className="mt-4 text-[length:var(--step-1)] text-[color:var(--muted)] reveal"
                  data-reveal
                >
                  Software is how you scale without adding headcount. We build systems that reduce admin, eliminate
                  errors, and help you serve more customers.
                </p>

                <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[color:var(--surface-2)] p-6 reveal" data-reveal>
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/70 p-2 dark:bg-black/30" aria-hidden>
                      <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
                        <path
                          d="M12 2a10 10 0 1 0 10 10"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-[color:var(--accent)]"
                        />
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="text-[color:var(--accent)]"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Fast delivery, modern tools</p>
                      <p className="mt-2 text-sm text-[color:var(--muted)]">
                        Built with reliable, modern tools so you get a high quality system faster and at a lower
                        cost.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-4 md:col-span-8 lg:col-span-7">
                <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12" data-reveal-group>
                  {[
                    {
                      title: "Custom-built around your business",
                      body: "No generic software. Every application is designed to match your workflows, customers, and goals.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M4 7h16M4 12h10M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Clear communication",
                      body: "You work directly with the developer building your product. There are no middlemen.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M4 5h16v11H7l-3 3V5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <path d="M7 9h10M7 12h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Automate and simplify core operations",
                      body: "Replace repetitive admin with software that works all day and night. This reduces errors and saves time.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M12 2v4M12 18v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M8 12a4 4 0 1 0 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Serve more customers without hiring",
                      body: "Handle more customers without hiring more staff.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M16 11a4 4 0 1 0-8 0" stroke="currentColor" strokeWidth="2" />
                          <path d="M4 22c1.6-4.2 5-6 8-6s6.4 1.8 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Affordable development",
                      body: "We use modern tools to deliver faster at a lower cost than many traditional agencies.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M12 1v22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M17 6H9a4 4 0 1 0 0 8h6a4 4 0 1 1 0 8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Mobile and web solutions",
                      body: "Your software works seamlessly across phones, tablets, and desktops.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M7 4h10v16H7z" stroke="currentColor" strokeWidth="2" />
                          <path d="M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ),
                    },
                    {
                      title: "Built for growth",
                      body: "Scalable foundations so your app grows as your business grows.",
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                          <path d="M4 18V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M7 14l4-4 3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ),
                    },
                  ].map((b) => (
                    <div key={b.title} className="col-span-4 md:col-span-4 lg:col-span-6 reveal" data-reveal>
                      <div className="card tilt h-full p-6" data-tilt>
                        <div className="flex items-start gap-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-2)] text-[color:var(--accent)]">
                            {b.icon}
                          </div>
                          <div>
                            <h3 className="font-[family-name:var(--font-display)] text-[length:var(--step-1)] leading-[var(--lh-snug)] tracking-[var(--tracking-tight)]">
                              {b.title}
                            </h3>
                            <p className="mt-2 text-sm text-[color:var(--muted)]">{b.body}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 md:scroll-mt-24">
          <div className="container-page py-16 sm:py-20">
            <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 md:col-span-8 lg:col-span-5">
                <h2
                  className="font-[family-name:var(--font-display)] text-[length:var(--step-4)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)] reveal"
                  data-reveal
                >
                  A simple process that gets your system live.
                </h2>
                <p className="mt-4 text-[length:var(--step-1)] text-[color:var(--muted)] reveal" data-reveal>
                  First we get clarity, then we build the simplest solution that removes a real problem.
                </p>
              </div>
              <div className="col-span-4 md:col-span-8 lg:col-span-7">
                <ol className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12" data-reveal-group>
                  {[
                    {
                      k: "01",
                      t: "Discovery and process mapping",
                      d: "We identify where work slows down and define what success looks like.",
                    },
                    {
                      k: "02",
                      t: "Plan and confirm what’s included",
                      d: "We confirm what the system will do, who will use it, and what information it needs.",
                    },
                    {
                      k: "03",
                      t: "Build the first version (2 to 6 weeks)",
                      d: "We build and launch the core automation and a simple interface your team can use quickly.",
                    },
                    {
                      k: "04",
                      t: "Improve and grow",
                      d: "We add features and integrations as you see results and your needs grow.",
                    },
                  ].map((s) => (
                    <li key={s.k} className="col-span-4 md:col-span-4 lg:col-span-6">
                      <div className="card h-full p-6 reveal" data-reveal>
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-sm font-semibold text-[color:var(--accent)]">{s.k}</p>
                          <span className="h-10 w-10 rounded-2xl bg-[color:var(--surface-2)]" aria-hidden />
                        </div>
                        <h3 className="mt-4 font-[family-name:var(--font-display)] text-[length:var(--step-2)] leading-[var(--lh-snug)] tracking-[var(--tracking-tight)]">
                          {s.t}
                        </h3>
                        <p className="mt-2 text-sm text-[color:var(--muted)]">{s.d}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-[color:var(--surface)] scroll-mt-20 md:scroll-mt-24">
          <div className="container-page py-16 sm:py-20">
            <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-4 md:col-span-8 lg:col-span-5">
                <h2
                  className="font-[family-name:var(--font-display)] text-[length:var(--step-4)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)] reveal"
                  data-reveal
                >
                  Questions, answered.
                </h2>
                <p className="mt-4 text-[length:var(--step-1)] text-[color:var(--muted)] reveal" data-reveal>
                  No fluff. Just the questions business owners actually ask.
                </p>
              </div>
              <div className="col-span-4 md:col-span-8 lg:col-span-7">
                <div className="space-y-4" data-reveal-group>
                  {["How soon can we launch?", "Will it work on mobile and desktop?", "Who will we communicate with?", "Can we connect it to our existing tools?"]
                    .map((q) => (
                      <details key={q} className="card p-6 reveal" data-reveal>
                        <summary className="cursor-pointer list-none text-sm font-semibold">
                          {q}
                          <span className="float-right text-[color:var(--muted-2)]" aria-hidden>
                            +
                          </span>
                        </summary>
                        <div className="mt-4 text-sm text-[color:var(--muted)]">
                          {q === "How soon can we launch?" &&
                            "Most projects start with a focused first version in 2 to 6 weeks. After that, we improve it based on real use."}
                          {q === "Will it work on mobile and desktop?" &&
                            "Yes. It will work well on phone, tablet, and desktop."}
                          {q === "Who will we communicate with?" &&
                            "You work directly with the developer building your product. You get clear updates and one point of contact."}
                          {q === "Can we connect it to our existing tools?" &&
                            "Usually, yes. We can connect to common CRMs, payment providers, spreadsheets, and internal databases."}
                        </div>
                      </details>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="container-page py-16 sm:py-20">
            <div className="surface p-8 sm:p-10 reveal" data-reveal>
              <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
                <div className="col-span-4 md:col-span-5 lg:col-span-7">
                  <h2 className="font-[family-name:var(--font-display)] text-[length:var(--step-4)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)]">
                    Let’s automate what’s slowing you down.
                  </h2>
                  <p className="mt-4 text-[length:var(--step-1)] text-[color:var(--muted)]">
                    Book a discovery call and we’ll turn one messy workflow into a clean system you can scale.
                  </p>
                </div>
                <div className="col-span-4 md:col-span-3 lg:col-span-5">
                  <a className="btn btn-primary w-full" href={BOOKING_URL} target="_blank" rel="noreferrer">
                    Book a discovery call
                    <span aria-hidden>→</span>
                  </a>
                  <p className="mt-4 text-xs text-[color:var(--muted-2)]">
                    No obligation. If we’re not a fit, you’ll still leave with clarity.
                  </p>
                </div>
              </div>
            </div>

            <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
              <p className="text-sm text-[color:var(--muted-2)]">
                © {new Date().getFullYear()} Softwared. Technology shaped for impact.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <a className="text-[color:var(--muted)] hover:text-[color:var(--foreground)]" href="#top">
                  Back to top
                </a>
                <a className="text-[color:var(--muted)] hover:text-[color:var(--foreground)]" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  Book a call
                </a>
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
