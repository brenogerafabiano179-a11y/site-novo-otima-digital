import type { MetadataRoute } from "next";
import { brand } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}
