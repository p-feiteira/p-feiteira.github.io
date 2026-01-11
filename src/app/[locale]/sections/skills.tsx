'use client'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useTranslations } from 'next-intl'
import { Speech, Puzzle, UsersRound, HeartHandshake, Brush, Trophy, MessageCircleCode, Layers, Database, ShieldCheck } from 'lucide-react'
import InfoCard from './components/common/infoCard'
import Image from 'next/image'

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
    <div id="skills" className="section-spacing w-full flex flex-col items-center px-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mt-8">{t('title')}</h2>
      <div className="flex flex-col gap-12 text-center mt-10 w-full max-w-5xl mx-auto">
        <HardSection />
        <SoftSection />
        <LanguagesSection />
      </div>
    </div>
  )
}

function LanguagesSection() {
  const t = useTranslations('skills')

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <span className="text-2xl sm:text-3xl font-semibold mb-2">{t('languages')}</span>
      <div className="grid grid-cols-2 gap-3 w-full max-w-2xl mx-auto">
        {languages.map((language) => (
          <SkillComponent
            key={language.key}
            Icon={() => <ReactCountryFlag countryCode={language.icon} svg style={{ width: '4em', height: '4em' }} />}
            compact
            alignLeft
          >
            {t(`languageNames.${language.key}`)}
          </SkillComponent>
        ))}
      </div>
    </div>
  )
}

function HardSection() {
  const t = useTranslations('skills')

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <span className="text-2xl sm:text-3xl font-semibold mb-2 text-center">{t('hardSkills')}</span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 w-full max-w-3xl mx-auto">
        {hard_skills.map((hard) => (
          <SkillComponent key={hard.key} Icon={hard.Icon} compact>
            {t(`hard.${hard.key}`)}
          </SkillComponent>
        ))}
      </div>
    </div>
  )
}

function SoftSection() {
  const t = useTranslations('skills')

  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <span className="text-2xl sm:text-3xl font-semibold mb-2 text-center">{t('softSkills')}</span>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto">
        {soft_skills.map((soft) => (
          <SkillComponent key={soft.key} Icon={soft.Icon} compact>
            {t(`soft.${soft.key}`)}
          </SkillComponent>
        ))}
      </div>
    </div>
  )
}

type SkillComponentProps = {
  Icon: React.ElementType | string
  children: React.ReactNode
  compact?: boolean
  alignLeft?: boolean
}

function SkillComponent({ Icon, children, compact, alignLeft }: SkillComponentProps) {
  let iconProp: React.ReactNode = undefined
  if (typeof Icon === 'string') {
    iconProp = <Image src={`/icons/${Icon}.svg`} alt={Icon} width={24} height={24} className="dark:invert" />
  } else if (Icon) {
    iconProp = <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
  }
  return (
    <div className="my-2">
      <InfoCard Icon={iconProp} title={children as string} compact={compact ?? false} alignLeft={alignLeft ?? false}>
        {compact ? '' : String(children)}
      </InfoCard>
    </div>
  )
}
