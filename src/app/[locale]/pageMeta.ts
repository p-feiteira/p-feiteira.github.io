import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { SITE_URL } from "../../lib/constants"

type Props = { params: Promise<{ locale: string }> }

const OG_LOCALES: Record<string, string> = { en: "en_US", pt: "pt_PT" }

/**
 * Shared social-card and canonical block for one route.
 *
 * Next does not deep-merge `openGraph` and `twitter`: a child that sets either
 * one replaces the parent's wholesale, and a child that sets neither inherits
 * the parent's verbatim, og:url included. So every route that wants its own
 * card has to spell the whole thing out, which is what this builds.
 *
 * Portuguese is x-default: this site sells to Portuguese businesses. The
 * LinkedIn profile is the corporate, English-first one; they serve different
 * audiences on purpose.
 */
export function routeMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string
  path: string
  title: string
  description: string
}): Metadata {
  const url = `${SITE_URL}/${locale}${path}`

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        en: `/en${path}`,
        pt: `/pt${path}`,
        "x-default": `/pt${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
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

/**
 * generateMetadata for a route whose copy lives under the `pageMeta` namespace.
 * Without this, every route inherits the locale layout's metadata, so
 * /pt/services/ and /pt/contact/ both declare "/pt/" as canonical and as
 * og:url, and a shared link previews as the homepage.
 */
export function pageMetadata(route: string) {
  return async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "pageMeta" })

    return routeMetadata({
      locale,
      path: `/${route}/`,
      title: t(`${route}.title`),
      description: t(`${route}.description`),
    })
  }
}
