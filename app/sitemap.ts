import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site-url";

export const dynamic = "force-static";

const pages = [
  "",
  "/about",
  "/academics",
  "/admissions",
  "/campus",
  "/gallery",
  "/news",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified: new Date(),
  }));
}
