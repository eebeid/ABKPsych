import { MetadataRoute } from "next";
import { practiceConfig } from "@/config/practiceConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${practiceConfig.meta.siteUrl}/sitemap.xml`,
  };
}
