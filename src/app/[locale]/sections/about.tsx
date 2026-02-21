"use client"

import { MapPin, Laptop, Headset, Dumbbell, MusicIcon, BookIcon } from "lucide-react"
import React from "react"
import { useTranslations } from "next-intl"

import InfoCard from "@/components/common/infoCard"
import { AnimatedItem } from "@/components/common/AnimatedItem"
import Experience from "./experience"

const hobbyIcons = {
  gaming: Headset,
  fitness: Dumbbell,
  music: MusicIcon,
  learning: BookIcon,
}

const hobbyKeys = ["gaming", "fitness", "music", "learning"] as const

function AboutSection() {
  const t = useTranslations("about")

  return (
    <div className="w-full">
      <h1 className="text-3xl sm:text-5xl font-bold my-8 text-center">
        {t("title")}
      </h1>
      <div className="block md:hidden">
        <p className="text-base sm:text-lg text-muted-foreground text-justify mb-4 px-4 max-w-md mx-auto">
          {t("description")}
        </p>
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">{t("location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">{t("remote")}</span>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="text-base sm:text-lg text-muted-foreground text-justify mb-4 max-w-3xl mx-auto">
          {t("description")}
        </div>
        <div className="flex flex-col gap-2 mt-8 items-center text-center">
          <div className="flex items-center gap-2">
            <MapPin className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">{t("location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="text-muted-foreground" />
            <span className="text-md text-muted-foreground">{t("remote")}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function HobbiesSection() {
  const t = useTranslations("about")
  const tHobbies = useTranslations("hobbies")

  return (
    <div className="w-full max-w-6xl mx-auto mt-20">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mx-4 sm:mx-8 my-6">
        {t("hobbiesTitle")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 w-full px-4">
        {hobbyKeys.map((key) => {
          const Icon = hobbyIcons[key]
          const iconProp = <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />

          return (
            <InfoCard key={key} Icon={iconProp} title={tHobbies(`${key}.title`)}>
              {tHobbies(`${key}.description`)}
            </InfoCard>
          )
        })}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div id="about" className="section-spacing scroll-mt-24 w-full flex flex-col gap-8 md:gap-12">
      {/* About Me Section */}
      <div className="w-full flex justify-center mb-8">
        <AnimatedItem>
          <div className="w-full max-w-4xl mx-auto px-4 md:px-8">
            <AboutSection />
          </div>
        </AnimatedItem>
      </div>
      {/* Experience Timeline */}
      <div className="w-full max-w-6xl mx-auto mt-20">
        <AnimatedItem>
          <Experience />
        </AnimatedItem>
      </div>
      {/* Hobbies title and cards */}
      <AnimatedItem>
        <HobbiesSection />
      </AnimatedItem>
    </div>
  )
}
