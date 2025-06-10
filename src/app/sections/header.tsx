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

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

import SocialMediaSection from "@/components/common/socialMedia"

export default function Header() {
  return <header id="home" className="grid grid-cols-3 w-full px-6 py-4 bg-background border-b">
    <Home />
    <div className="flex items-center justify-center">
        <Navigation />
    </div>
    <div className="flex gap-4 justify-end">
      <SocialMediaSection />
      <DarkModeToggle />
    </div>
  </header>
}

function Home(){
  return <div className="text-2xl font-bold">&lt; Pedro Feiteira /&gt; </div>   
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

function Navigation(){
  return (<NavigationMenu className="items-center" viewport={false}>
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


