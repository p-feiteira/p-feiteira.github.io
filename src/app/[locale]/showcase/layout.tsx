"use client"

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function ShowcaseLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const t = useTranslations("notFound");

  return (
    <div className="relative min-h-screen text-foreground">
      <div className="fixed top-6 left-6 z-50">
        <Link 
          href={`/${locale}/#showcase`} 
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t("goBack")}
        </Link>
      </div>
      <main>
        {children}
      </main>
    </div>
  );
}