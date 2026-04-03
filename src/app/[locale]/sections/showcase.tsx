"use client"

import { useTranslations, useLocale } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { SHOWCASES, ShowcaseMeta } from "../../../lib/data/showcases"

export default function Showcase() {
  const t = useTranslations("showcase")
  const locale = useLocale()

  return (
    <section id="showcase" className="section-spacing scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold my-8">{t("title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASES.map((showcase: ShowcaseMeta) => (
            <Card key={showcase.slug} className="group overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
              <div className={`h-40 w-full bg-gradient-to-br ${showcase.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                <span className="text-white/30 font-bold text-4xl tracking-wider">
                  {t(`${showcase.slug}.title`).split(' ')[0]}
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  {t(`${showcase.slug}.title`)}
                </CardTitle>
                <CardDescription className="text-base">
                  {t(`${showcase.slug}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4 pb-6">
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                  <Link href={`/${locale}/showcase/${showcase.slug}`}>
                    {t("viewProject")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}