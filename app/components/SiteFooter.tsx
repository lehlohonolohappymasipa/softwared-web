export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg)]">
      <div className="container-page py-10">
        <div className="flex flex-col gap-3">
          <p className="font-[family-name:var(--font-display)] text-base tracking-[var(--tracking-tight)]">
            softwared — Technology shaped for impact.
          </p>
          <p className="text-sm text-[color:var(--muted)]">
            Custom software that reduces admin, eliminates errors, and removes bottlenecks.
          </p>
          <p className="pt-2 text-xs text-[color:var(--muted-2)]">© {year} softwared.</p>
        </div>
      </div>
    </footer>
  );
}
