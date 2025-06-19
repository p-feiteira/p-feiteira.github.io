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

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);
  return (
    <header
      id="home"
      className="w-full px-4 py-4 bg-background border-b md:grid md:grid-cols-3 md:gap-0 md:px-6"
    >
      {/* Mobile Top Bar */}
      <div className="flex items-center justify-between md:hidden w-full">
        <Home />
        <button
          aria-label="Open navigation menu"
          onClick={() => setMobileNavOpen((v) => !v)}
          className="p-2 rounded focus:outline-none focus:ring"
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
        <div className="absolute top-20 left-0 w-full bg-background border-b z-50 flex flex-col items-center gap-2 py-4 shadow-lg animate-fade-in-up md:hidden">
          <Navigation mobile={true} />
          <div className="mt-4">
            <SocialMediaSection />
          </div>
          <div className="mt-2">
            <DarkModeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

function Home({ className = "" }: { className?: string }){
  return <div className={`text-2xl font-bold ${className}`}>&lt; Pedro Feiteira /&gt; </div>   
}


const components: { title: string; href: string;}[] = [
  {
    title: "About",
    href: "#about"
  },
  {
    title: "Skills",
    href: "#skills"
  },
  {
    title: "Projects",
    href: "#projects"
  },
  {
    title: "Contact",
    href: "#contact"
  },
]

function Navigation({ mobile = false }: { mobile?: boolean }){
  return (
    <NavigationMenu className={`items-center ${mobile ? 'flex flex-col gap-2' : ''}`} viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {components.map((component) => (
            <NavigationMenuLink
              asChild
              className={`${navigationMenuTriggerStyle()} text-md`}
              key={component.title}
            >
              <Link href={component.href}>{component.title}</Link>
            </NavigationMenuLink>
          ))}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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


