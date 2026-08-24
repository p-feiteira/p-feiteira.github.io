import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { type Locale } from "@i18n/config"
import { allRoutePairs, routeKeyFromSlug, routeSlug } from "../../../lib/routes"
import { routeMetadata } from "../pageMeta"
import PageBody from "./PageBody"
import ResumeClient from "./ResumeClient"

type Props = { params: Promise<{ locale: string; page: string }> }

// One static page per (locale, slug) pair, so /pt/servicos/ and /en/services/
// both exist while /pt/services/ and /en/servicos/ do not.
export function generateStaticParams() {
  return allRoutePairs().map(({ locale, slug }) => ({ locale, page: slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, page } = await params
  const key = routeKeyFromSlug(page, locale)
  if (!key) return {}

  const t = await getTranslations({ locale, namespace: "pageMeta" })

  return routeMetadata({
    locale,
    // Resolved per locale: the same page is /pt/servicos/ and /en/services/.
    pathFor: (l) => `/${l}/${routeSlug(key, l)}/`,
    title: t(`${key}.title`),
    description: t(`${key}.description`),
  })
}

export default async function Page({ params }: Props) {
  const { locale, page } = await params
  const key = routeKeyFromSlug(page, locale)
  if (!key) notFound()

  setRequestLocale(locale as Locale)

  // The résumé carries its own full-page layout rather than the shared shell.
  return key === "resume" ? <ResumeClient /> : <PageBody routeKey={key} />
}
