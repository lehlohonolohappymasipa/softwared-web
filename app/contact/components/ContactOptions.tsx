import React from "react";

import { BOOKING_URL, getWhatsAppHref } from "../../lib/links";

type Props = {
  contactEmail: string;
  linkedInUrl: string;
};

function OptionCard({
  title,
  description,
  href,
  actionLabel,
  icon,
  variant = "secondary",
}: {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  icon: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const actionClass =
    variant === "primary"
      ? "btn btn-primary w-full sm:w-auto"
      : "btn btn-secondary w-full sm:w-auto";

  return (
    <li className="surface p-5">
      <div className="flex items-start gap-4">
        <span
          className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--border)] ${
            variant === "primary" ? "bg-[color:var(--surface-2)]" : "bg-[color:var(--surface)]"
          } text-[color:var(--text)]`}
          aria-hidden
        >
          {icon}
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-[color:var(--text)]">{title}</p>
          <p className="mt-1 text-sm text-[color:var(--muted)]">{description}</p>

          <div className="mt-4">
            <a
              className={actionClass}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {actionLabel}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function ContactOptions({ contactEmail, linkedInUrl }: Props) {
  return (
    <section aria-labelledby="ways-to-reach-us" className="lg:sticky lg:top-[6.5rem]">
      <div className="surface p-6">
        <h2
          id="ways-to-reach-us"
          className="text-sm font-semibold tracking-[var(--tracking-wide)] text-[color:var(--text)]"
        >
          Ways to reach us
        </h2>
        <p className="mt-2 text-sm text-[color:var(--muted)]">
          Choose the channel that’s easiest for you. We’ll ask a few clarifying questions, then propose the next step.
        </p>

        <ul className="mt-6 grid gap-4">
          <OptionCard
            variant="primary"
            title="Book a discovery call"
            description="Best if you want to talk through the process and get a clear plan."
            href={BOOKING_URL}
            actionLabel="Book a call"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1zm12 8H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v1a1 1 0 1 0 2 0V6h8v1a1 1 0 1 0 2 0V6h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1z" />
              </svg>
            }
          />

          <OptionCard
            title="WhatsApp"
            description="Quick question, voice note, or a short description of the bottleneck."
            href={getWhatsAppHref()}
            actionLabel="Message on WhatsApp"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.4 0 .02 5.38.02 12.01c0 2.11.55 4.17 1.6 5.99L0 24l6.18-1.6a11.94 11.94 0 0 0 5.85 1.5h.01c6.63 0 12.01-5.38 12.01-12.01 0-3.2-1.25-6.2-3.53-8.41zM12.04 21.85h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.67.95.98-3.58-.24-.37a9.82 9.82 0 0 1-1.51-5.24c0-5.44 4.43-9.87 9.88-9.87 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.43 9.88-9.87 9.88zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.46-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.9 1.22 3.1.15.2 2.11 3.22 5.1 4.52.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
              </svg>
            }
          />

          <OptionCard
            title="Email"
            description="Best if you have background, links, or screenshots to share."
            href={`mailto:${contactEmail}`}
            actionLabel="Send an email"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
            }
          />

          <OptionCard
            title="LinkedIn"
            description="If you prefer a professional intro or to share context privately."
            href={linkedInUrl}
            actionLabel="Open LinkedIn"
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.085V9h3.112v1.561h.044c.434-.823 1.494-1.69 3.074-1.69 3.289 0 3.894 2.164 3.894 4.977v6.604zM5.337 7.433a1.805 1.805 0 1 1 0-3.61 1.805 1.805 0 0 1 0 3.61zM6.956 20.452H3.714V9h3.242v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            }
          />
        </ul>

        <address className="mt-6 not-italic">
          
        </address>
      </div>
    </section>
  );
}
