import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/privado/"],
    },
    sitemap: "https://consultoriafinanceira.com.br/sitemap.xml",
  }
}

