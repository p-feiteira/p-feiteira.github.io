"use client"

import React from "react"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

type ExperienceEntry = {
  role: string
  company: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

function TimelineItem({ experience, isLast }: { experience: ExperienceEntry; isLast: boolean }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center relative">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border-2 border-primary">
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
        {!isLast && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <Card className="bg-muted-foreground/5 dark:bg-muted/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              {experience.role}
            </CardTitle>
            <CardDescription className="text-lg sm:text-xl font-semibold text-foreground mt-1">
              {experience.company}
            </CardDescription>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {experience.description.map((item, index) => (
                <li key={index} className="text-sm sm:text-base text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function Experience() {
  const t = useTranslations("experience")

  // Get experience entries from translations
  const entries = t.raw("entries") as ExperienceEntry[]

  return (
    <div id="experience" className="w-full py-12 px-4 sm:px-6 lg:px-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold my-8">{t("title")}</h2>
        </div>

        <div className="relative">
          {entries.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              isLast={index === entries.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
