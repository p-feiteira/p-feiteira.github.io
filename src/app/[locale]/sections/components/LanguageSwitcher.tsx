'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import ReactCountryFlag from 'react-country-flag';
import { locales, localeNames, localeFlags, type Locale } from '@i18n/config';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('languageSwitcher');

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return;

    // Remove current locale prefix from pathname
    let newPath = pathname;

    // If current path starts with a locale prefix, remove it
    for (const loc of locales) {
      if (pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`) {
        newPath = pathname.replace(`/${loc}`, '') || '/';
        break;
      }
    }

    // Always add locale prefix (localePrefix: 'always' in middleware)
    router.push(`/${newLocale}${newPath}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label={t('label')}
        >
          <ReactCountryFlag
            countryCode={localeFlags[locale]}
            svg
            style={{ width: '1.2em', height: '1.2em' }}
            aria-hidden="true"
          />
          <span className="hidden sm:inline">{localeNames[locale]}</span>
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => switchLocale(loc)}
            className={`gap-2 cursor-pointer ${loc === locale ? 'bg-accent' : ''}`}
          >
            <ReactCountryFlag
              countryCode={localeFlags[loc]}
              svg
              style={{ width: '1.2em', height: '1.2em' }}
              aria-hidden="true"
            />
            <span>{localeNames[loc]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
