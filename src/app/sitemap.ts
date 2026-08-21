import type { MetadataRoute } from "next"
import { locales } from "@i18n/config"
import { SHOWCASES } from "../lib/data/showcases"
import { SITE_URL } from "../lib/constants"

// output: "export" needs this stated explicitly for metadata routes.
export const dynamic = "force-static"

// The sitemap used to be a hand-written public/sitemap.xml listing three of
// the twenty-six routes, on a domain that no longer resolves. Generated from
// the same route list the app builds from, it cannot go stale again.
//
// No lastmod: build time is not modification time, and stamping all 26 URLs
// with "now" on every deploy teaches crawlers to ignore the field entirely.
// PAGES is still hand-kept, so a new route needs a line here as well.
const PAGES = ["", "about", "skills", "services", "showcase", "contact", "resume"]

/** Every route in both locales, each pointing at its own translations. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...PAGES.map((p) => (p ? `${p}/` : "")),
    ...SHOWCASES.map((s) => `showcase/${s.slug}/`),
  ]

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/${path}`,
      changeFrequency: "monthly" as const,
      // The homepage outranks its own subpages; showcase details sit lowest.
      priority: path === "" ? 1 : path.startsWith("showcase/") ? 0.5 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}/${l}/${path}`]),
        ),
      },
    })),
  )
}
