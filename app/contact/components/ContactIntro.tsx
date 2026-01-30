import React from "react";

export default function ContactIntro() {
  return (
    <header>
      <p className="pill w-fit">
        <span className="h-2 w-2 rounded-full bg-[color:var(--accent)]" aria-hidden />
        <span className="text-sm font-semibold">Contact</span>
      </p>

      <h1 className="mt-6 font-[family-name:var(--font-display)] text-[length:var(--step-5)] leading-[var(--lh-tight)] tracking-[var(--tracking-tight)]">
        Book a discovery call.
      </h1>

      <p className="mt-4 max-w-2xl text-[length:var(--step-1)] text-[color:var(--muted)]">
        Tell us what’s causing admin load, errors, or slow handoffs. We’ll clarify one workflow and outline a first version that your team can actually use.
      </p>
    </header>
  );
}
