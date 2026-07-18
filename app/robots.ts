import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sagepartners.space";
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${siteUrl}/sitemap.xml` };
}
