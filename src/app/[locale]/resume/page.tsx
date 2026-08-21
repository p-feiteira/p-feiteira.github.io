import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { locales, type Locale } from "@i18n/config"
import ResumeClient from "./ResumeClient"
import { routeMetadata } from "../pageMeta"

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "resume" })

  return routeMetadata({
    locale,
    path: "/resume/",
    title: t("metaTitle"),
    description: t("metaDescription"),
  })
}

export default async function ResumePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale as Locale)
  return <ResumeClient />
}
