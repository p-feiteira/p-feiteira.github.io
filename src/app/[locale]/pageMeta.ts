import type { Metadata } from "next"
import { locales } from "@i18n/config"
import { SITE_URL } from "../../lib/constants"

const OG_LOCALES: Record<string, string> = { en: "en_US", pt: "pt_PT" }

/**
 * Shared social-card and canonical block for one route.
 *
 * Next does not deep-merge `openGraph` and `twitter`: a child that sets either
 * one replaces the parent's wholesale, and a child that sets neither inherits
 * the parent's verbatim, og:url included. So every route that wants its own
 * card has to spell the whole thing out, which is what this builds.
 *
 * `pathFor` is a function of locale rather than one fixed path, because slugs
 * are localised: /pt/servicos/ and /en/services/ are the same page. Passing a
 * single path would emit `hreflang=en -> /en/servicos/`, a URL that does not
 * exist.
 *
 * Portuguese is x-default: this site sells to Portuguese businesses. The
 * LinkedIn profile is the corporate, English-first one; they serve different
 * audiences on purpose.
 */
export function routeMetadata({
  locale,
  pathFor,
  title,
  description,
}: {
  locale: string
  pathFor: (locale: string) => string
  title: string
  description: string
}): Metadata {
  const canonical = pathFor(locale)
  const languages = Object.fromEntries([
    ...locales.map((l) => [l, pathFor(l)]),
    ["x-default", pathFor("pt")],
  ])

  return {
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonical}`,
      siteName: "Pedro Feiteira",
      // No width/height: profile.jpeg is square (2998x2998), and declaring a
      // 1.91:1 box around it makes scrapers hard-crop the face. Let them measure.
      images: [{ url: "/profile.jpeg", alt: "Pedro Feiteira" }],
      locale: OG_LOCALES[locale] || OG_LOCALES.en,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/profile.jpeg"],
    },
  }
}
