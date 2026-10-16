import type { MetadataRoute } from "next";
import { brand } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${brand.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${brand.url}/privacidade/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${brand.url}/termos/`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
