function normalizeBasePath(input: string | undefined): string {
  if (!input) return "";
  const trimmed = input.trim();
  if (!trimmed) return "";

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

function normalizeSiteUrl(input: string | undefined): string {
  const raw = (input ?? "").trim();

  const inferred =
    raw ||
    // Netlify (production + previews)
    (process.env.URL ?? "").trim() ||
    (process.env.DEPLOY_PRIME_URL ?? "").trim() ||
    // Vercel
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    // Cloudflare Pages
    (process.env.CF_PAGES_URL ?? "").trim();

  if (!inferred) {
    // Client-side fallback (useful for local previews).
    if (typeof window !== "undefined") return window.location.origin;

    // Local/dev fallback only when nothing else is available.
    return "http://localhost:3000";
  }

  if (!/^https?:\/\//i.test(inferred)) return `https://${inferred}`;
  return inferred;
}

export function getBasePath(): string {
  return normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH);
}

export function getSiteUrl(): string {
  return normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL).replace(/\/+$/, "");
}

export function getAbsoluteUrl(pathname: string): string {
  const siteUrl = getSiteUrl();
  const basePath = getBasePath();
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${basePath}${path}`;
}
