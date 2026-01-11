"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "./sections/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  const t = useTranslations("notFound")

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">{t("title")}</h2>
          <p className="text-muted-foreground">{t("description")}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              {t("goHome")}
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("goBack")}
          </Button>
        </div>
      </div>
    </div>
  )
}
