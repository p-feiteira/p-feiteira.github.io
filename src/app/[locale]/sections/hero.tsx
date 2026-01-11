"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <div className="section-spacing flex items-center justify-center flex-col gap-6 text-center my-20 sm:my-32 md:my-40 px-2">
      <Image
        src="/profile.jpg"
        alt={t("profileAlt")}
        width={200}
        height={200}
        className="rounded-full w-32 h-32 sm:w-56 sm:h-56 md:w-[350px] md:h-[350px] object-cover mx-auto"
        loading="eager"
        priority
      />
      <HeroName />
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md mx-auto justify-center">
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
    <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-mono break-words">
      <span aria-live="polite" aria-atomic="true">
        {displayed || fullName}
      </span>
      <span
        className={`ml-1 ${done ? "inline animate-blink" : "invisible"}`}
        aria-hidden="true"
      >
        <span className="terminal-underscore">_</span>
      </span>
      <p>
        <span
          style={{ visibility: done ? "visible" : "hidden" }}
          className="text-lg sm:text-2xl md:text-3xl font-normal text-gray-500"
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
        className="w-full sm:w-auto text-green-500 hover:text-white"
      >
        {t("resumeButton")}
      </Button>
    </a>
  )
}
