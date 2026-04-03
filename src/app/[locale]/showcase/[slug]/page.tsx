import { SHOWCASES, ShowcaseSlug } from "../../../../lib/data/showcases";
import { notFound } from "next/navigation";

import VertexStudio from "../../sections/showcases/vertex-studio";
import MeridianGoods from "../../sections/showcases/meridian-goods";
import LinhaVivaListings from "../../sections/showcases/linha-viva-listings";
import LinhaVivaObras from "../../sections/showcases/linha-viva-obras";
import RoamBean from "../../sections/showcases/roam-bean";
import SerenoSpa from "../../sections/showcases/sereno-spa";

export function generateStaticParams() {
  const slugs: ShowcaseSlug[] = ['vertex-studio', 'meridian-goods', 'linha-viva-listings', 'linha-viva-obras', 'roam-bean', 'sereno-spa'];
  return slugs.map((slug) => ({ slug }));
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