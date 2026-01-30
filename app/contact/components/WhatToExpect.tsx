import React from "react";

export default function WhatToExpect() {
  return (
    <section className="mt-10" aria-labelledby="what-to-expect">
      <h2
        id="what-to-expect"
        className="text-sm font-semibold tracking-[var(--tracking-wide)] text-[color:var(--text)]"
      >
        What to expect
      </h2>

      <ul className="mt-4 grid gap-3 text-sm text-[color:var(--muted)]">
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" aria-hidden />
          <span>We focus on one bottleneck and map the workflow behind it.</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" aria-hidden />
          <span>You get a clear first-version plan: scope, risks, and a realistic timeline.</span>
        </li>
        <li className="flex gap-3">
          <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" aria-hidden />
          <span>No pressure—if it’s not a fit, we’ll say so.</span>
        </li>
      </ul>

      <div className="mt-8 surface p-5">
        <h3 className="text-sm font-semibold text-[color:var(--text)]">Quick details</h3>
        <dl className="mt-3 grid gap-3 text-sm">
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[color:var(--muted)]">Typical call length</dt>
            <dd className="font-semibold text-[color:var(--text)]">20–30 minutes</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[color:var(--muted)]">Obligation</dt>
            <dd className="font-semibold text-[color:var(--text)]">None</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[color:var(--muted)]">Who you speak to</dt>
            <dd className="font-semibold text-[color:var(--text)]">The developer</dd>
          </div>
          <div className="flex items-start justify-between gap-4">
            <dt className="text-[color:var(--muted)]">First version</dt>
            <dd className="font-semibold text-[color:var(--text)]">Usually 2–6 weeks</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
