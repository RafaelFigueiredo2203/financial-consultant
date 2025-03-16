import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/privado/"],
    },
    sitemap: "https://financial-consultant-phi.vercel.app/sitemap.xml",
  }
}

