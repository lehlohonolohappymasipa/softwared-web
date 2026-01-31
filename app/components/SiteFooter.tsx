export default function SiteFooter() {
  const year = new Date().getFullYear();

  const sitemapLinks = [
    { href: "#top", label: "Home" },
    { href: "#problems", label: "Problems" },
    { href: "#solutions", label: "Solutions" },
    { href: "#process", label: "Process" },
    { href: "#proof", label: "Proof" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg)]">
      <div className="container-page py-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto]">
          <div className="flex flex-col gap-3">
            <p className="font-[family-name:var(--font-display)] text-base tracking-[var(--tracking-tight)]">
              softwared — Technology shaped for impact.
            </p>
            <p className="text-sm text-[color:var(--muted)]">
              Custom software that reduces admin, eliminates errors, and removes bottlenecks.
            </p>
          </div>

          <nav aria-label="Footer sitemap">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--muted-2)]">
              Sitemap
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:gap-y-1">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[color:var(--muted)] hover:text-[color:var(--text)] hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 pt-6 border-t border-[color:var(--border)] text-xs text-[color:var(--muted-2)]">
          © {year} softwared. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
