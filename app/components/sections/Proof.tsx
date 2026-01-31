import SectionHeading from "../SectionHeading";

export default function Proof() {
  const outcomes = [
    {
      title: "Reduced admin time by hours per week",
      body: "Automated repetitive tasks that previously required manual data entry and follow-ups.",
    },
    {
      title: "Eliminated data entry errors",
      body: "Single source of truth replaced spreadsheets that drifted out of sync.",
    },
    {
      title: "Faster customer response times",
      body: "Streamlined workflows let staff serve customers instead of chasing updates.",
    },
    {
      title: "Real-time operational visibility",
      body: "Dashboards replaced guesswork with accurate, up-to-date information.",
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

            <div className="mt-8 surface p-6">
              <p className="text-sm font-semibold">Who we work with</p>
              <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
                <li>• Service businesses with operational complexity</li>
                <li>• Startups scaling beyond manual processes</li>
                <li>• Operations teams tired of spreadsheet workarounds</li>
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6">
              <p className="text-sm font-semibold">Direct access</p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
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
                  <p className="font-semibold text-[color:var(--text)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-[color:var(--muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 card p-6">
              <blockquote className="text-[color:var(--muted)]">
                <p className="text-sm italic">
                  "We went from chasing updates in WhatsApp groups to having
                  everything visible in one place. The difference is night and
                  day."
                </p>
                <footer className="mt-3 text-xs text-[color:var(--muted-2)]">
                  — Operations lead, service business
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
