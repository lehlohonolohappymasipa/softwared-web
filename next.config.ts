import type { NextConfig } from "next";

function getGitHubPagesBasePath(): string {
  // Allows manual override (useful for local testing):
  // `NEXT_PUBLIC_BASE_PATH=/my-repo npm run build`
  const override = process.env.NEXT_PUBLIC_BASE_PATH;
  if (override) return override.startsWith("/") ? override : `/${override}`;

  // Only apply auto basePath when building in GitHub Actions.
  if (!process.env.GITHUB_ACTIONS) return "";

  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
  // User/Org Pages (username.github.io) should be deployed at the domain root.
  if (!repo || repo.endsWith(".github.io")) return "";
  return `/${repo}`;
}

const basePath = getGitHubPagesBasePath();

const nextConfig: NextConfig = {
  // Build as a fully static site (outputs to `out/`).
  output: "export",

  // Helpful for many static hosts (GitHub Pages, S3 static websites, etc.).
  trailingSlash: true,

  // GitHub Pages project sites are hosted at `/<repo>`.
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),

  // `next/image` optimization requires a server; disable it for static export.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
