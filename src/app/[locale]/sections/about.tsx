"use client"

import { MapPin, Laptop, Headset, Dumbbell, MusicIcon, BookIcon } from "lucide-react"
import React from "react"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
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
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="section-eyebrow">{t("title")}</span>
        </motion.div>

        {/* Bold statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-8 max-w-2xl"
        >
          {t("statement")}
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8"
        >
          {t("description")}
        </motion.p>

        {/* Location badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 font-mono text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" strokeWidth={1.5} />
            {t("location")}
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 font-mono text-xs text-muted-foreground">
            <Laptop className="h-3 w-3" strokeWidth={1.5} />
            {t("remote")}
          </span>
        </motion.div>

      </div>
    </div>
  )
}

function HobbiesSection() {
  const t = useTranslations("about")
  const tHobbies = useTranslations("hobbies")

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-10">
          <span className="section-eyebrow">{t("hobbiesTitle")}</span>
          <div className="flex-1 h-px bg-border/40" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {hobbyKeys.map((key, index) => {
            const Icon = hobbyIcons[key]
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group flex gap-5 py-6 border-b border-border/30 last:border-b-0 sm:odd:pr-8 sm:even:pl-8 sm:even:border-l sm:last:border-b sm:[&:nth-last-child(2)]:border-b-0"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <Icon className="h-4 w-4 text-muted-foreground/50 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{tHobbies(`${key}.title`)}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tHobbies(`${key}.description`)}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </div>
  )
}

export default function About() {
  return (
    <div id="about" className="section-spacing scroll-mt-24 w-full flex flex-col gap-16 md:gap-24">
      <AnimatedItem>
        <AboutSection />
      </AnimatedItem>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AnimatedItem>
            <Experience />
          </AnimatedItem>
        </div>
      </div>
      <AnimatedItem>
        <HobbiesSection />
      </AnimatedItem>
    </div>
  )
}
