function normalizeBasePath(input: string | undefined): string {
  if (!input) return "";
  const trimmed = input.trim();
  if (!trimmed) return "";

  const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  return withLeadingSlash.replace(/\/+$/, "");
}

function normalizeSiteUrl(input: string | undefined): string {
  const raw = (input ?? "").trim();
  if (!raw) return "http://localhost:3000";
  if (!/^https?:\/\//i.test(raw)) return `https://${raw}`;
  return raw;
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
