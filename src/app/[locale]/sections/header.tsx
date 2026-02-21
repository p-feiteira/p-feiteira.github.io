"use client"

import * as React from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import SocialMediaSection from "@/components/common/socialMedia"
import LanguageSwitcher from "@/components/LanguageSwitcher"

const NAV_KEYS = ["about", "skills", "experience", "projects", "contact"] as const

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false)
  const t = useTranslations("navigation")

  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        {t("skipToContent")}
      </a>
      <header
        id="home"
        className="sticky top-0 z-50 w-full px-4 py-4 bg-transparent border-b border-transparent md:grid md:grid-cols-3 md:gap-0 md:px-6"
      >
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between md:hidden w-full">
          <Home />
          <button
            aria-label={mobileNavOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={mobileNavOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileNavOpen((v) => !v)}
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <Menu className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
        {/* Desktop Layout */}
        <Home className="hidden md:block" />
        <div className="hidden md:flex items-center justify-center">
          <Navigation />
        </div>
        <div className="hidden md:flex gap-4 justify-end items-center">
          <SocialMediaSection />
          <LanguageSwitcher />
          <DarkModeToggle />
        </div>
        {/* Mobile Dropdown */}
        {mobileNavOpen && (
          <nav
            id="mobile-navigation"
            aria-label={t("mobileNav")}
            className="absolute top-20 left-0 w-full bg-background border-b z-50 flex flex-col items-center gap-2 py-4 shadow-lg md:hidden transition-all duration-300 ease-in-out"
            style={{
              animation: mobileNavOpen ? "fadeInUp 0.3s ease-out" : undefined,
            }}
          >
            <Navigation mobile={true} />
            <div className="mt-4">
              <SocialMediaSection />
            </div>
            <div className="mt-2 flex gap-2">
              <LanguageSwitcher />
              <DarkModeToggle />
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

function Home({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#home"
      className={`text-lg font-medium tracking-tight ${className} focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded`}
    >
      &lt; Pedro Feiteira /&gt;
    </Link>
  )
}

function Navigation({ mobile = false }: { mobile?: boolean }) {
  const t = useTranslations("navigation")

  const navItems = NAV_KEYS.map((key) => ({
    title: t(key),
    href: `#${key}`,
    key,
  }))

  return (
    <nav aria-label={mobile ? t("mobileNav") : t("mainNav")}>
      <NavigationMenu
        className={`items-center ${mobile ? "flex flex-col gap-2" : ""}`}
        viewport={false}
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            {navItems.map((component) => (
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} bg-transparent hover:bg-transparent data-[state=open]:bg-transparent data-[active]:bg-transparent text-xs uppercase tracking-widest font-medium focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
                key={component.key}
              >
                <Link
                  href={component.href}
                  aria-label={t("navigateTo", { section: component.title })}
                >
                  {component.title}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

function DarkModeToggle() {
  const { setTheme, theme } = useTheme()
  const t = useTranslations("navigation")

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-4 w-4 dark:hidden" strokeWidth={1.5} />
      <Moon className="hidden h-4 w-4 dark:block" strokeWidth={1.5} />
      <span className="sr-only">{t("toggleTheme")}</span>
    </Button>
  )
}
