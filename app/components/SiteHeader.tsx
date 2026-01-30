"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { getBasePath } from "../lib/site";

type Props = {
  bookingUrl: string;
};

export default function SiteHeader({ bookingUrl }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const basePath = getBasePath();
  const logoLightSrc = `${basePath}/softwared_logo.png`;
  const logoDarkSrc = `${basePath}/softwared_logo_darkmode.png`;

  const closeMobileMenu = () => {
    mobileNavRef.current?.removeAttribute("open");
  };

  return (
    <header
      className={`fixed top-0 z-[60] w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-none bg-[color:var(--bg)]/85 backdrop-blur shadow-[var(--shadow)]"
          : "border-none bg-transparent backdrop-blur-none shadow-none"
      }`}
    >
      <div className="container-header flex h-[clamp(4.25rem,7vw,5.75rem)] items-center justify-between gap-3">
        <Link href="/" className="relative z-10 flex items-center" aria-label="softwared home">
          <span className="brand-logo" aria-hidden>
            <Image
              src={logoLightSrc}
              alt="softwared"
              width={440}
              height={120}
              priority
              className="brand-logo__img brand-logo__img--light"
            />
            <Image
              src={logoDarkSrc}
              alt="softwared"
              width={440}
              height={120}
              priority
              className="brand-logo__img brand-logo__img--dark"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          <Link
            className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--text)] underline-offset-8 hover:underline decoration-[color:var(--accent)]/70"
            href="/services/"
          >
            Services
          </Link>
          <Link
            className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--text)] underline-offset-8 hover:underline decoration-[color:var(--accent)]/70"
            href="/process/"
          >
            Process
          </Link>
          <Link
            className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--text)] underline-offset-8 hover:underline decoration-[color:var(--accent)]/70"
            href="/contact/"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a className="btn btn-primary btn-sm" href={bookingUrl} target="_blank" rel="noopener noreferrer">
            Book a discovery call
            <span aria-hidden>→</span>
          </a>
        </div>

        <details ref={mobileNavRef} className="mobile-nav relative z-30 md:hidden">
          <summary className="mobile-nav__toggle btn btn-secondary btn-sm list-none cursor-pointer" aria-label="Toggle menu">
            <span className="sr-only">Menu</span>
            <svg
              className="icon-burger"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 7H20M4 12H20M4 17H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              className="icon-close"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="absolute right-0 mt-3 min-w-[15.5rem] max-w-[18rem] rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-2 shadow-[var(--shadow)]">
            <nav aria-label="Mobile" className="flex flex-col">
              <Link
                className="rounded-xl px-3 py-2 text-sm font-semibold text-[color:var(--text)] hover:bg-black/[0.04] dark:hover:bg-white/[0.08]"
                href="/services/"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                className="rounded-xl px-3 py-2 text-sm font-semibold text-[color:var(--text)] hover:bg-black/[0.04] dark:hover:bg-white/[0.08]"
                href="/process/"
                onClick={closeMobileMenu}
              >
                Process
              </Link>
              <Link
                className="rounded-xl px-3 py-2 text-sm font-semibold text-[color:var(--text)] hover:bg-black/[0.04] dark:hover:bg-white/[0.08]"
                href="/contact/"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>

              <div className="my-2 border-t border-[color:var(--border)]" />

              <a
                className="btn btn-primary self-start"
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
              >
                Book a discovery call
                <span aria-hidden>→</span>
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
