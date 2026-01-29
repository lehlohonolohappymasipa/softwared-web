import type { MetadataRoute } from "next";
import { getAbsoluteUrl, getSiteUrl } from "./lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: getSiteUrl(),
    sitemap: getAbsoluteUrl("/sitemap.xml"),
  };
}
