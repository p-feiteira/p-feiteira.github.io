"use client"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center min-h-[85vh] px-4 max-w-5xl mx-auto -mt-10">
      <motion.div
        initial={{ filter: "blur(15px)", opacity: 0, scale: 0.9 }}
        animate={{ filter: "blur(0px)", opacity: 0.8, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4"
      >
        <Image
          src="/profile.jpg"
          alt={t("profileAlt")}
          width={128}
          height={128}
          className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover mx-auto grayscale"
          loading="eager"
          priority
        />
      </motion.div>
      <HeroName />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-12"
      >
        <ContactButton />
        <ResumeButton />
      </motion.div>
    </div>
  )
}

function HeroName() {
  const t = useTranslations("hero")
  const fullName = t("greeting")

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const child: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-semibold tracking-tighter leading-[0.9] break-words"
    >
      <div aria-live="polite" aria-atomic="true" className="flex flex-wrap justify-center overflow-hidden pb-4">
        {fullName.split(" ").map((word, wordIndex) => (
          <div key={wordIndex} className="inline-flex mr-4 last:mr-0">
            <motion.span variants={child} className="inline-block">
              {word}
            </motion.span>
          </div>
        ))}
      </div>
      <motion.p variants={child}>
        <span className="text-sm md:text-xl mt-4 md:mt-8 block font-medium text-muted-foreground tracking-widest uppercase">
          {t("role")}
        </span>
      </motion.p>
    </motion.h1>
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
