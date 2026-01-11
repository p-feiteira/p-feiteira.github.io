"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function GoBackButton({ label = "Go Back" }: { label?: string }) {
  return (
    <Button variant="outline" onClick={() => window.history.back()}>
      <ArrowLeft className="mr-2 h-4 w-4" />
      {label}
    </Button>
  )
}
