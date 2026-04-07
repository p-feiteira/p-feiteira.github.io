export type ShowcaseSlug = 'vertex-studio' | 'meridian-goods' | 'linha-viva-listings' | 'linha-viva-obras' | 'roam-bean' | 'sereno-spa';

export interface ShowcaseMeta {
  slug: ShowcaseSlug;
  themeColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export const SHOWCASES: ShowcaseMeta[] = [
  { slug: 'vertex-studio', themeColor: '#ec4899', gradientFrom: '#ec4899', gradientTo: '#f43f5e' },
  { slug: 'meridian-goods', themeColor: '#eab308', gradientFrom: '#facc15', gradientTo: '#f97316' },
  { slug: 'linha-viva-listings', themeColor: '#3b82f6', gradientFrom: '#3b82f6', gradientTo: '#06b6d4' },
  { slug: 'linha-viva-obras', themeColor: '#14b8a6', gradientFrom: '#2dd4bf', gradientTo: '#10b981' },
  { slug: 'roam-bean', themeColor: '#f97316', gradientFrom: '#f97316', gradientTo: '#d97706' },
  { slug: 'sereno-spa', themeColor: '#8b5cf6', gradientFrom: '#8b5cf6', gradientTo: '#9333ea' }
];