"use client"

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const t = useTranslations("notFound");
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const isShowcaseDetailPage = pathSegments[1] === 'showcase' && pathSegments.length > 2;

  return (
    <div className="relative min-h-screen text-foreground">
      {isShowcaseDetailPage && (
        <div className="fixed left-4 top-20 z-50 sm:left-6 sm:top-24">
          <Link
            href={`/${locale}/#showcase`}
            className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background/95 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring sm:px-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("goBack")}
          </Link>
        </div>
      )}
      <main>
        {children}
      </main>
    </div>
  );
}