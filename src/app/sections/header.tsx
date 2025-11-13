"use client"

import * as React from "react"
import Link from "next/link"
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
import { NAV_ITEMS } from "@/lib/constants"

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  return (
    <>
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <header
        id="home"
        className="sticky top-0 z-50 w-full px-4 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b md:grid md:grid-cols-3 md:gap-0 md:px-6"
      >
      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between md:hidden w-full">
        <Home />
        <button
          aria-label={mobileNavOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileNavOpen((v) => !v)}
          className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>
      {/* Desktop Layout */}
      <Home className="hidden md:block" />
      <div className="hidden md:flex items-center justify-center">
        <Navigation />
      </div>
      <div className="hidden md:flex gap-4 justify-end">
        <SocialMediaSection />
        <DarkModeToggle />
      </div>
      {/* Mobile Dropdown */}
      {mobileNavOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute top-20 left-0 w-full bg-background border-b z-50 flex flex-col items-center gap-2 py-4 shadow-lg md:hidden transition-all duration-300 ease-in-out"
          style={{
            animation: mobileNavOpen ? "fadeInUp 0.3s ease-out" : undefined
          }}
        >
          <Navigation mobile={true} />
          <div className="mt-4">
            <SocialMediaSection />
          </div>
          <div className="mt-2">
            <DarkModeToggle />
          </div>
        </nav>
      )}
    </header>
    </>
  )
}

function Home({ className = "" }: { className?: string }){
  return (
    <Link href="#home" className={`text-2xl font-bold ${className} focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded`}>
      &lt; Pedro Feiteira /&gt;
    </Link>
  )
}


function Navigation({ mobile = false }: { mobile?: boolean }){
  return (
    <nav aria-label={mobile ? "Mobile navigation" : "Main navigation"}>
      <NavigationMenu className={`items-center ${mobile ? 'flex flex-col gap-2' : ''}`} viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            {NAV_ITEMS.map((component) => (
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} text-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
                key={component.title}
              >
                <Link href={component.href} aria-label={`Navigate to ${component.title} section`}>
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
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}


