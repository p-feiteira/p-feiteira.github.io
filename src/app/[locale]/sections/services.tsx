"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Services() {
  const t = useTranslations("services")
  const items = t.raw("items") as { title: string; description: string }[]

  return (
    <section id="services" className="section-spacing scroll-mt-24 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="section-eyebrow">01 — {t("title")}</span>
        </motion.div>

        {/* Section headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-4 max-w-2xl"
        >
          {t("subtitle")}
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-full bg-border/60 mt-14 mb-0"
        />

        {/* Items list */}
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group w-full text-left flex items-start justify-between gap-6 py-8 border-b border-border/40 hover:border-foreground/25 transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
              aria-label={`${item.title} — ${t("cta")}`}
            >
              {/* Left: number + content */}
              <div className="flex gap-6 sm:gap-10 items-start flex-1 min-w-0">
                <span className="font-mono text-xs text-muted-foreground/50 mt-1.5 flex-shrink-0 tabular-nums">
                  0{index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* Right: arrow — visible on hover */}
              <div className="flex-shrink-0 mt-1.5 flex items-center gap-1.5 text-muted-foreground/30 group-hover:text-foreground group-hover:translate-x-1 transition-all duration-300">
                <span className="font-mono text-[10px] uppercase tracking-widest hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {t("cta")}
                </span>
                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </div>
            </button>
          </motion.div>
        ))}

      </div>
    </section>
  )
}
