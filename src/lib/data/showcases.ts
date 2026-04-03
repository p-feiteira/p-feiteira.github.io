export type ShowcaseSlug = 'vertex-studio' | 'meridian-goods' | 'linha-viva-listings' | 'linha-viva-obras' | 'roam-bean' | 'sereno-spa';

export interface ShowcaseMeta {
  slug: ShowcaseSlug;
  themeColor: string;
  gradient: string;
}

export const SHOWCASES: ShowcaseMeta[] = [
  { slug: 'vertex-studio', themeColor: '#ec4899', gradient: 'from-pink-500 to-rose-500' },
  { slug: 'meridian-goods', themeColor: '#eab308', gradient: 'from-yellow-400 to-orange-500' },
  { slug: 'linha-viva-listings', themeColor: '#3b82f6', gradient: 'from-blue-500 to-cyan-500' },
  { slug: 'linha-viva-obras', themeColor: '#14b8a6', gradient: 'from-teal-400 to-emerald-500' },
  { slug: 'roam-bean', themeColor: '#f97316', gradient: 'from-orange-500 to-amber-600' },
  { slug: 'sereno-spa', themeColor: '#8b5cf6', gradient: 'from-violet-500 to-purple-600' }
];