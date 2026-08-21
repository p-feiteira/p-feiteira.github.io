import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"

type Props = { params: Promise<{ locale: string }> }

/**
 * Per-route title, description and canonical.
 *
 * Without this, every route inherits the locale layout's metadata, so
 * /pt/servicos/ and /pt/contacto/ both declare "/pt/" as their canonical and
 * ask search engines to treat them as copies of the homepage.
 *
 * Portuguese is x-default: this site sells to Portuguese businesses. The
 * LinkedIn profile is the corporate, English-first one; they serve different
 * audiences on purpose.
 */
export function pageMetadata(route: string) {
  return async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: "pageMeta" })
    const path = `/${route}/`

    return {
      title: t(`${route}.title`),
      description: t(`${route}.description`),
      alternates: {
        canonical: `/${locale}${path}`,
        languages: {
          en: `/en${path}`,
          pt: `/pt${path}`,
          "x-default": `/pt${path}`,
        },
      },
    }
  }
}
