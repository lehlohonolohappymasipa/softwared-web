import SectionHeading from "../SectionHeading";

export default function Proof() {
  const outcomes = [
    {
      title: "Reduced admin time by hours per week",
      body: "Automated repetitive tasks that previously required manual data entry and follow-ups.",
      icon: (
        <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: "Eliminated data entry errors",
      body: "Single source of truth replaced spreadsheets that drifted out of sync.",
      icon: (
        <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
    {
      title: "Faster customer response times",
      body: "Streamlined workflows let staff serve customers instead of chasing updates.",
      icon: (
        <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m5 12 5 5L20 7" />
        </svg>
      ),
    },
    {
      title: "Real-time operational visibility",
      body: "Dashboards replaced guesswork with accurate, up-to-date information.",
      icon: (
        <svg className="h-5 w-5 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="proof"
      className="border-b border-[color:var(--border)] bg-[color:var(--bg)]"
    >
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: heading */}
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Outcomes"
              title="Results that matter for operations."
              description="Outcomes from real projects. No vanity metrics — just practical improvements."
            />

            <div className="mt-8 surface p-5">
              <p className="text-sm font-semibold">Who we work with</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[color:var(--muted)]">
                <li>• Service businesses with operational complexity</li>
                <li>• Startups scaling beyond manual processes</li>
                <li>• Operations teams tired of spreadsheet workarounds</li>
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5">
              <p className="text-sm font-semibold">Direct access</p>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                You work directly with the developer building your system. No
                account managers, no handoffs between teams.
              </p>
            </div>
          </div>

          {/* Right: outcomes grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item.title} className="card p-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-[color:var(--text)]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 card p-5">
              <blockquote className="text-[color:var(--muted)]">
                <svg className="mb-2 h-6 w-6 text-[color:var(--accent)]/40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm italic leading-relaxed">
                  "We went from chasing updates in WhatsApp groups to having
                  everything visible in one place. The difference is night and
                  day."
                </p>
                <footer className="mt-3 flex items-center gap-2 text-xs text-[color:var(--muted-2)]">
                  <span className="inline-block h-1 w-6 rounded-full bg-[color:var(--accent)]/30" aria-hidden></span>
                  Operations lead, service business
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
