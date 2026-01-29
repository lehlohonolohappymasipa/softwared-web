"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  bookingUrl: string;
  logoLightSrc: string;
  logoDarkSrc: string;
};

export default function SiteHeader({
  bookingUrl,
  logoLightSrc,
  logoDarkSrc,
}: Props) {
  const mobileMenuRef = useRef<HTMLDetailsElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => {
    const el = mobileMenuRef.current;
    if (el) el.open = false;
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const el = mobileMenuRef.current;
    if (!el) return;

    const onToggle = () => setIsMobileMenuOpen(el.open);
    el.addEventListener("toggle", onToggle);
    onToggle();

    return () => el.removeEventListener("toggle", onToggle);
  }, []);

  useEffect(() => {
    let raf = 0;
    const threshold = 16;

    const update = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        update();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const el = mobileMenuRef.current;
      if (!el) return;
      const target = event.target as Node | null;
      if (target && !el.contains(target)) {
        closeMobileMenu();
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMobileMenu();
    };

    // Capture phase so we close even if other handlers stop propagation.
    document.addEventListener("mousedown", onPointerDown, true);
    document.addEventListener("touchstart", onPointerDown, true);
    document.addEventListener("keydown", onKeyDown, true);

    return () => {
      document.removeEventListener("mousedown", onPointerDown, true);
      document.removeEventListener("touchstart", onPointerDown, true);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,box-shadow,backdrop-filter,opacity,transform] duration-300 ease-out ${
          isScrolled
            ? "border-[var(--border)] bg-[color:var(--background)]/80 backdrop-blur opacity-100 shadow-[0_10px_30px_rgba(2,6,23,0.10)]"
            : "border-transparent bg-transparent opacity-100 shadow-none"
        }`}
      >
        <div className="container-page flex h-[clamp(4rem,7vw,5.75rem)] items-center justify-center overflow-visible py-0 md:justify-between">
          <a href="#top" className="mx-auto flex items-center gap-0 md:mx-0">
            <span className="brand-logo" aria-label="softwared">
              <picture>
                <source
                  srcSet={logoDarkSrc}
                  media="(prefers-color-scheme: dark)"
                />
                <img
                  src={logoLightSrc}
                  alt="softwared"
                  width={440}
                  height={120}
                  className="brand-logo__img"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            <a
              className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--foreground)] underline-offset-8 hover:underline decoration-[color:var(--accent)]/70"
              href="#benefits"
            >
              Benefits
            </a>
            <a
              className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--foreground)] underline-offset-8 hover:underline decoration-[color:var(--accent)]/70"
              href="#process"
            >
              Process
            </a>
            <a
              className="text-sm font-semibold text-[color:var(--muted)] hover:text-[color:var(--foreground)] underline-offset-8 hover:underline decoration-[color:var(--accent)]/70"
              href="#faq"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              className="btn btn-primary btn-sm hidden md:inline-flex"
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Book a discovery call"
            >
              Book a discovery call
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile bottom navigation (acts like a footer bar) */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--border)] bg-[color:var(--background)]/90 backdrop-blur md:hidden">
        <div className="container-page flex h-14 items-center justify-end">
          <details ref={mobileMenuRef} className="relative">
            <summary
              className="btn btn-secondary btn-sm list-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Menu</span>
              {isMobileMenuOpen ? (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              )}
            </summary>

            <div className="absolute bottom-[calc(100%+0.5rem)] right-0 w-[min(92vw,340px)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)] shadow-[var(--shadow)]">
              <div className="flex flex-col p-4">
                <a
                  className="rounded-xl px-4 py-4 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
                  href="#benefits"
                  onClick={closeMobileMenu}
                >
                  Benefits
                </a>
                <a
                  className="rounded-xl px-4 py-4 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
                  href="#process"
                  onClick={closeMobileMenu}
                >
                  Process
                </a>
                <a
                  className="rounded-xl px-4 py-4 text-sm font-semibold hover:bg-black/[0.03] dark:hover:bg-white/[0.06]"
                  href="#faq"
                  onClick={closeMobileMenu}
                >
                  FAQ
                </a>
                <div className="p-2">
                  <a
                    className="btn btn-primary w-full"
                    href={bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMobileMenu}
                  >
                    Book a discovery call
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}
