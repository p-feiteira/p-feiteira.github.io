import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { locales } from "@i18n/config"
import { SHOWCASES } from "../../../../lib/data/showcases"
import { routeSlug } from "../../../../lib/routes"
import { routeMetadata } from "../../pageMeta"
import BackButton from "./BackButton"

import VertexStudio from "../../sections/showcases/vertex-studio"
import MeridianGoods from "../../sections/showcases/meridian-goods"
import LinhaVivaListings from "../../sections/showcases/linha-viva-listings"
import LinhaVivaObras from "../../sections/showcases/linha-viva-obras"
import RoamBean from "../../sections/showcases/roam-bean"
import SerenoSpa from "../../sections/showcases/sereno-spa"

type Props = { params: Promise<{ locale: string; page: string; slug: string }> }

const DEMOS: Record<string, React.ComponentType> = {
  "vertex-studio": VertexStudio,
  "meridian-goods": MeridianGoods,
  "linha-viva-listings": LinhaVivaListings,
  "linha-viva-obras": LinhaVivaObras,
  "roam-bean": RoamBean,
  "sereno-spa": SerenoSpa,
}

// Nested under the localised showcase slug, so the demos live at
// /pt/trabalhos/<slug>/ and /en/showcase/<slug>/. Derived from SHOWCASES so
// the sitemap and the built pages cannot drift apart.
export function generateStaticParams() {
  return locales.flatMap((locale) =>
    SHOWCASES.map((showcase) => ({
      locale,
      page: routeSlug("showcase", locale),
      slug: showcase.slug,
    })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: "showcase" })

  return routeMetadata({
    locale,
    pathFor: (l) => `/${l}/${routeSlug("showcase", l)}/${slug}/`,
    title: `${t(`${slug}.title`)} · ${t("title")}`,
    description: `${t(`${slug}.description`)}. ${t("disclosure")}`,
  })
}

export default async function ShowcaseDemoPage({ params }: Props) {
  const { slug } = await params
  const Demo = DEMOS[slug]
  if (!Demo) notFound()

  return (
    <div className="relative min-h-screen text-foreground">
      <BackButton />
      <main>
        <Demo />
      </main>
    </div>
  )
}
