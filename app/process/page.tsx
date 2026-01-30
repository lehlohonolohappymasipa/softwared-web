import type { Metadata } from "next";
import Link from "next/link";

import { BOOKING_URL } from "../lib/links";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A calm, predictable process for custom software development: discovery, scope, build, launch. First version in 2 to 6 weeks.",
  alternates: { canonical: "/process/" },
};

export default function ProcessPage() {
  return (
    <main id="main" className="bg-[color:var(--bg)] text-[color:var(--text)]">
      <section className="border-b border-[color:var(--border)]">
        <div className="container-page pb-14 pt-[var(--header-offset)] sm:pb-16">
          <p className="pill w-fit">
            <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden />
            <span className="text-sm font-semibold">Process</span>
          </p>

          <h1 className="mt-6 font-[family-name:var(--font-display)] text-[length:var(--step-5)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)]">
            A calm process for predictable delivery.
          </h1>
          <p className="mt-4 max-w-3xl text-[length:var(--step-1)] text-[color:var(--muted)]">
            Custom software development and business automation with clear scope and steady delivery.
            <span className="font-semibold text-[color:var(--text)]"> A working first version in 2 to 6 weeks</span>.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a className="btn btn-primary" href={BOOKING_URL} target="_blank" rel="noreferrer">
              Book a discovery call
              <span aria-hidden>→</span>
            </a>
            <Link className="btn btn-secondary" href="/services/">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[color:var(--border)]">
        <div className="container-page py-14 sm:py-16">
          <ol className="space-y-4">
            {[
              {
                title: "1) Discovery and mapping",
                body: "We map the workflow end to end, find the bottleneck, and define what success looks like.",
              },
              {
                title: "2) Scope and a plan you can trust",
                body: "We define the smallest version that reduces admin and errors. You know what we’re building before we build it.",
              },
              {
                title: "3) Build and integrate",
                body: "We implement the internal system, automation, and integrations. You get regular progress updates and a testable build.",
              },
              {
                title: "4) Launch and iterate",
                body: "We ship, support rollout, and improve based on real usage without breaking what already works.",
              },
            ].map((step) => (
              <li key={step.title} className="card p-6">
                <p className="font-semibold">{step.title}</p>
                <p className="mt-2 text-sm text-[color:var(--muted)]">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-3xl border border-[color:var(--border)] bg-black/[0.02] p-6 dark:bg-white/[0.06]">
            <p className="text-sm font-semibold">What makes this work</p>
            <ul className="mt-3 space-y-2 text-sm text-[color:var(--muted)]">
              <li>One workflow at a time (tight scope = predictable delivery)</li>
              <li>Simple UI, minimal dependencies, and accessible defaults</li>
              <li>Systems built for your process, not the other way around</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
