import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { guides } from "@/lib/guides-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.osaris-ingenierie.com";
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${base}/guides-techniques/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base,                        lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/references`,        lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/methodologie`,      lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/a-propos`,          lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${base}/guides-techniques`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`,           lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    ...servicePages,
    ...guidePages,
  ];
}
