import type { Metadata } from "next";
import Link from "next/link";

import { BOOKING_URL } from "../lib/links";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development services: internal systems, business automation, dashboards, and web and mobile apps. First version in 2 to 6 weeks.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <main id="main" className="bg-[color:var(--bg)] text-[color:var(--text)]">
      <section className="border-b border-[color:var(--border)]">
        <div className="container-page pb-14 pt-[var(--header-offset)] sm:pb-16">
          <p className="pill w-fit">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden />
            <span className="text-sm font-semibold">Services</span>
          </p>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[length:var(--step-5)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)]">
            Custom software development for operations.
          </h1>
          <p className="mt-4 max-w-3xl text-[length:var(--step-1)] text-[color:var(--muted)]">
            Internal systems, business automation, and web and mobile apps that reduce admin, eliminate errors, and make work visible.
            First version typically ships in <span className="font-semibold text-[color:var(--text)]">2 to 6 weeks</span>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a discovery call
              <span aria-hidden>→</span>
            </a>
            <Link className="btn btn-secondary" href="/process/">
              View the process
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)]">
        <div className="container-page py-14 sm:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Internal systems",
                body: "Portals and tools for requests, approvals, job tracking, exception handling, and customer updates.",
              },
              {
                title: "Business automation",
                body: "Automate repetitive steps: scheduling, notifications, data validation, document generation, and handoffs.",
              },
              {
                title: "Dashboards + reporting",
                body: "Operational visibility: what’s in progress, what’s late, and where the bottleneck is.",
              },
              {
                title: "Web and mobile apps",
                body: "Web apps for internal teams and customer portals. Mobile apps for mobile workflows.",
              },
              {
                title: "Integrations",
                body: "Connect your existing tools to remove double entry and keep data consistent.",
              },
              {
                title: "Maintenance + improvements",
                body: "Keep the system healthy, secure, and improving as your workflow changes.",
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <p className="font-semibold">{item.title}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 surface p-8 sm:p-10">
            <h2 className="font-[family-name:var(--font-display)] text-[length:var(--step-3)] leading-[var(--lh-snug)] tracking-[var(--tracking-tight)]">
              Not sure what you need yet?
            </h2>
            <p className="mt-3 text-[color:var(--muted)]">
              That’s normal. On the call we’ll map the workflow and identify the one change that creates leverage.
            </p>
            <div className="mt-6">
              <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
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
