"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

type CaseEntry = {
  client: string
  period: string
  situation: string
  work: string
  stack: string[]
}

/**
 * Real client work, as opposed to the showcase concepts.
 *
 * Naming Aircall and EngineAI was confirmed by Pedro on 24 Aug 2026
 * (Decisões humanas #5). The AI stack behind the Aircall system stays out of
 * the prose deliberately: the client may be named, the architecture may not.
 */
export default function Cases() {
  const t = useTranslations("cases")
  const items = t.raw("items") as CaseEntry[]

  return (
    <section
      id="cases"
      className="section-spacing scroll-mt-24 w-full px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="section-eyebrow">{t("title")}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground max-w-xl text-base mb-14"
        >
          {t("description")}
        </motion.p>

        <div className="flex flex-col gap-14">
          {(Array.isArray(items) ? items : []).map((item, i) => (
            <motion.article
              key={item.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border-t border-border pt-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-6">
                <h2 className="text-2xl font-semibold text-foreground">
                  {item.client}
                </h2>
                <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
                  {item.period}
                </span>
              </div>

              <dl className="flex flex-col gap-5">
                <div>
                  <dt className="text-sm font-medium text-foreground mb-1">
                    {t("labels.situation")}
                  </dt>
                  <dd className="text-muted-foreground">{item.situation}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-foreground mb-1">
                    {t("labels.work")}
                  </dt>
                  <dd className="text-muted-foreground">{item.work}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <p className="text-muted-foreground/80 text-sm mt-12">
          {t("resultsNote")}
        </p>
      </div>
    </section>
  )
}
