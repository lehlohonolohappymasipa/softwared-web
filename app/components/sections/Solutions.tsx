import Image from "next/image";
import SectionHeading from "../SectionHeading";

type Props = {
  bookingUrl: string;
};

export default function Solutions({ bookingUrl }: Props) {
  const services = [
    {
      title: "Internal systems",
      body: "Portals for requests, approvals, job tracking, and customer updates.",
    },
    {
      title: "Business automation",
      body: "Automate scheduling, notifications, data validation, and handoffs.",
    },
    {
      title: "Dashboards + reporting",
      body: "See what's in progress, what's late, and where the bottleneck is.",
    },
    {
      title: "Web + mobile apps",
      body: "Apps for internal teams and customer portals, on any device.",
    },
  ];

  return (
    <section
      id="solutions"
      className="border-b border-[color:var(--border)] bg-[color:var(--bg)]"
    >
      <div className="container-page py-14 sm:py-16">
        <SectionHeading
          kicker="What we build"
          title="Software shaped around how your business actually works."
          description="Custom systems that reduce admin, eliminate errors, and let you serve more customers without more headcount."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div key={item.title} className="card p-5">
              <p className="font-semibold">{item.title}</p>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Before/After visual comparison */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
            <div className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--muted-2)]">
                After: Clean dashboard
              </p>
            </div>
            <Image
              src="/images/benefit-dashboard.webp"
              alt="Clean operational dashboard showing status, tasks, and metrics"
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
              loading="lazy"
            />
          </div>

          <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
            <div className="border-b border-[color:var(--border)] bg-[color:var(--bg)] px-4 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--muted-2)]">
                Automation in action
              </p>
            </div>
            <Image
              src="/images/benefit-automation.webp"
              alt="Workflow automation interface showing connected steps and triggers"
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 560px, 100vw"
              className="h-auto w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
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
            className="text-sm font-semibold text-[color:var(--muted)] underline-offset-4 hover:text-[color:var(--text)] hover:underline"
            href="#process"
          >
            See how we work
          </a>
        </div>
      </div>
    </section>
  );
}
