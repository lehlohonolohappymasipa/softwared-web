"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // Apply a gentle stagger inside explicit groups.
    const groups = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal-group]"),
    );
    for (const group of groups) {
      const items = Array.from(
        group.querySelectorAll<HTMLElement>("[data-reveal]"),
      );
      items.forEach((el, idx) => {
        const delayMs = Math.min(idx * 70, 420);
        el.style.setProperty("--d", `${delayMs}ms`);
      });
    }

    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "80px 0px" },
    );

    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isCoarse) return;

    const tiltEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-tilt]"),
    );
    if (!tiltEls.length) return;

    const cleanups: Array<() => void> = [];

    for (const el of tiltEls) {
      let raf = 0;
      let lastX = 0;
      let lastY = 0;

      const onMove = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        lastX = event.clientX;
        lastY = event.clientY;

        if (raf) return;
        raf = window.requestAnimationFrame(() => {
          raf = 0;
          const rect = el.getBoundingClientRect();
          const px = Math.min(Math.max((lastX - rect.left) / rect.width, 0), 1);
          const py = Math.min(Math.max((lastY - rect.top) / rect.height, 0), 1);

          const max = 7; // degrees
          const ry = (px - 0.5) * (max * 2);
          const rx = (0.5 - py) * (max * 2);

          el.style.setProperty("--rx", `${rx.toFixed(2)}deg`);
          el.style.setProperty("--ry", `${ry.toFixed(2)}deg`);
          el.style.setProperty("--px", `${(px * 100).toFixed(1)}%`);
          el.style.setProperty("--py", `${(py * 100).toFixed(1)}%`);
          el.classList.add("is-tilting");
        });
      };

      const onLeave = () => {
        if (raf) {
          window.cancelAnimationFrame(raf);
          raf = 0;
        }
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
        el.classList.remove("is-tilting");
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);

      cleanups.push(() => {
        el.removeEventListener("pointermove", onMove);
        el.removeEventListener("pointerleave", onLeave);
      });
    }

    return () => {
      for (const fn of cleanups) fn();
    };
  }, []);

  return null;
}
