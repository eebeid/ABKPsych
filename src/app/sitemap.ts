import { MetadataRoute } from "next";
import { practiceConfig } from "@/config/practiceConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = practiceConfig.meta.siteUrl;

  const routes = [
    "",
    "/who-i-work-with",
    "/approach",
    "/about",
    "/faq",
    "/contact",
    "/privacy",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
