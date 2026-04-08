'use client'

import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useTranslations } from 'next-intl'
import { Speech, Puzzle, UsersRound, HeartHandshake, Brush, Trophy, MessageCircleCode, Layers, Database, ShieldCheck } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const hard_skills = [
  { key: 'python', Icon: 'python' },
  { key: 'sql', Icon: Database },
  { key: 'docker', Icon: 'docker' },
  { key: 'cicd', Icon: 'githubactions' },
  { key: 'typescript', Icon: 'typescript' },
  { key: 'testing', Icon: ShieldCheck },
]

const soft_skills = [
  { key: 'communication', Icon: Speech },
  { key: 'problemSolving', Icon: Puzzle },
  { key: 'teamwork', Icon: UsersRound },
  { key: 'adaptability', Icon: Layers },
  { key: 'criticalThinking', Icon: MessageCircleCode },
  { key: 'leadership', Icon: Trophy },
  { key: 'creativity', Icon: Brush },
  { key: 'emotionalIntelligence', Icon: HeartHandshake },
]

const languages = [
  { key: 'portuguese', icon: 'PT' },
  { key: 'english', icon: 'US' },
]

export default function Skills() {
  const t = useTranslations('skills')

  return (
    <section id="skills" className="section-spacing scroll-mt-24 w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="section-eyebrow">{t('title')}</span>
        </motion.div>

        <div className="flex flex-col gap-12">

          {/* Hard Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60 whitespace-nowrap">
                {t('hardSkills')}
              </span>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="flex flex-wrap gap-2">
              {hard_skills.map((skill) => (
                <HardSkillTag key={skill.key} skill={skill} label={t(`hard.${skill.key}`)} />
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60 whitespace-nowrap">
                {t('softSkills')}
              </span>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-3">
              {soft_skills.map((skill) => {
                const Icon = skill.Icon
                return (
                  <div key={skill.key} className="flex items-center gap-2.5 group">
                    <Icon className="h-3.5 w-3.5 text-muted-foreground/50 flex-shrink-0 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {t(`soft.${skill.key}`)}
                    </span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground/60 whitespace-nowrap">
                {t('languages')}
              </span>
              <div className="flex-1 h-px bg-border/40" />
            </div>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <div key={lang.key} className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-border/40 hover:border-foreground/30 transition-colors">
                  <ReactCountryFlag
                    countryCode={lang.icon}
                    svg
                    style={{ width: '1.1em', height: '1.1em' }}
                  />
                  <span className="text-sm font-medium">{t(`languageNames.${lang.key}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

function HardSkillTag({ skill, label }: { skill: typeof hard_skills[number]; label: string }) {
  const { Icon } = skill

  let icon: React.ReactNode
  if (typeof Icon === 'string') {
    icon = (
      <Image
        src={`/icons/${Icon}.svg`}
        alt={Icon}
        width={14}
        height={14}
        className="dark:invert opacity-70"
      />
    )
  } else {
    icon = <Icon className="h-3.5 w-3.5 text-muted-foreground/70" strokeWidth={1.5} />
  }

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 hover:border-foreground/40 font-mono text-xs text-muted-foreground hover:text-foreground transition-all duration-200 cursor-default">
      {icon}
      {label}
    </span>
  )
}
