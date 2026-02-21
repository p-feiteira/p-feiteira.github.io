"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center min-h-[85vh] px-4 max-w-5xl mx-auto -mt-10">
      <Image
        src="/profile.jpg"
        alt={t("profileAlt")}
        width={128}
        height={128}
        className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover mx-auto grayscale opacity-80 mb-4"
        loading="eager"
        priority
      />
      <HeroName />
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-12">
        <ContactButton />
        <ResumeButton />
      </div>
    </div>
  )
}

function HeroName() {
  const t = useTranslations("hero")
  const fullName = t("greeting")
  const [displayed, setDisplayed] = useState("")
  const [started, setStarted] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const delay = setTimeout(() => setStarted(true), 300)
    return () => clearTimeout(delay)
  }, [])

  useEffect(() => {
    if (!started) return
    if (displayed.length < fullName.length) {
      const timeout = setTimeout(
        () => {
          setDisplayed(fullName.slice(0, displayed.length + 1))
        },
        displayed.length == 3 ? 900 : 100
      ) // Typing speed (ms)
      return () => clearTimeout(timeout)
    } else {
      setDone(true)
    }
  }, [started, displayed, fullName])

  return (
    <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter leading-[0.9] break-words">
      <span aria-live="polite" aria-atomic="true">
        {displayed || fullName}
      </span>
      <span
        className={`ml-1 inline-block ${done ? "animate-blink" : "invisible"}`}
        aria-hidden="true"
      >
        <div className="w-4 h-12 md:w-8 md:h-24 bg-foreground mt-2 translate-y-2 lg:translate-y-4 rounded-sm" />
      </span>
      <p>
        <span
          style={{ visibility: done ? "visible" : "hidden" }}
          className="text-sm md:text-xl mt-6 md:mt-10 block font-medium text-muted-foreground tracking-widest uppercase"
          aria-hidden={!done}
        >
          <span key={done ? "spawned" : "hidden"} className="spawn-animation">
            {t("role")}
          </span>
        </span>
      </p>
    </h1>
  )
}

function ContactButton() {
  const t = useTranslations("hero")

  return (
    <Button
      onClick={() => {
        const contactSection = document.getElementById("contact")
        contactSection?.scrollIntoView({ behavior: "smooth" })
      }}
      className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label={t("contactAriaLabel")}
    >
      {t("contactButton")}
    </Button>
  )
}

function ResumeButton() {
  const t = useTranslations("hero")

  return (
    <a
      href="/CV_2025.pdf"
      download
      className="w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
      aria-label={t("resumeAriaLabel")}
    >
      <Button
        variant="outline"
        className="w-full sm:w-auto hover:bg-foreground hover:text-background"
      >
        {t("resumeButton")}
      </Button>
    </a>
  )
}
