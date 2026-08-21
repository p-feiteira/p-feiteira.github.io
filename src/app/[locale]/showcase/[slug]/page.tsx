import { SHOWCASES } from "../../../../lib/data/showcases";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routeMetadata } from "../../pageMeta";

import VertexStudio from "../../sections/showcases/vertex-studio";
import MeridianGoods from "../../sections/showcases/meridian-goods";
import LinhaVivaListings from "../../sections/showcases/linha-viva-listings";
import LinhaVivaObras from "../../sections/showcases/linha-viva-obras";
import RoamBean from "../../sections/showcases/roam-bean";
import SerenoSpa from "../../sections/showcases/sereno-spa";

// Derived, not hand-listed: src/app/sitemap.ts publishes a URL for every
// entry in SHOWCASES, so a hardcoded list here would advertise 404s the
// moment the two drift.
export function generateStaticParams() {
  return SHOWCASES.map((showcase) => ({ slug: showcase.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: "showcase" });
  return routeMetadata({
    locale,
    path: `/showcase/${slug}/`,
    title: `${t(`${slug}.title`)} · ${t("title")}`,
    description: `${t(`${slug}.description`)}. ${t("disclosure")}`,
  });
}

export default async function ShowcasePage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const resolvedParams = await params;
  const showcase = SHOWCASES.find(s => s.slug === resolvedParams.slug);
  
  if (!showcase) {
    notFound();
  }

  switch(showcase.slug) {
    case 'vertex-studio': return <VertexStudio />;
    case 'meridian-goods': return <MeridianGoods />;
    case 'linha-viva-listings': return <LinhaVivaListings />;
    case 'linha-viva-obras': return <LinhaVivaObras />;
    case 'roam-bean': return <RoamBean />;
    case 'sereno-spa': return <SerenoSpa />;
    default: notFound();
  }
}