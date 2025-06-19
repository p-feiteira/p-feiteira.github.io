'use client'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import {Card, CardContent} from '@/components/ui/card'
import { Speech , Puzzle, UsersRound, HeartHandshake, Brush, Trophy, MessageCircleCode, Layers, Database, ShieldCheck} from 'lucide-react'
import Image from 'next/image'
import InfoCard from './components/common/infoCard'

const hard_skills = [
    { name: 'Python', Icon: "python" },
    { name: 'SQL', Icon: Database },
    { name: 'Docker', Icon: "docker" },
    { name: 'CI/CD', Icon: "githubactions" },
    { name: 'Typescript', Icon: "typescript" },
    { name: 'Testing', Icon: ShieldCheck },
]

const soft_skills = [
    { name: 'Communication', Icon: Speech },
    { name: 'Problem Solving', Icon: Puzzle },
    { name: 'Teamwork', Icon: UsersRound },
    { name: 'Adaptability', Icon: Layers },
    { name: 'Critical Thinking', Icon: MessageCircleCode },
    { name: 'Leadership', Icon: Trophy },
    { name: 'Creativity', Icon: Brush },
    { name: 'Emotional Intelligence', Icon: HeartHandshake },
]

const languages = [
  {name: 'Portuguese', icon:'PT'},
  {name: 'English', icon:'US'}
]

export default function Skills() {
  return (
    <div id="skills" className="section-spacing w-full flex flex-col items-center px-4">
      <h2 className="text-3xl sm:text-5xl font-bold text-center mt-8">Skills</h2>
      <div className="flex flex-col gap-12 text-center mt-10 w-full max-w-5xl mx-auto">
        <HardSection />
        <SoftSection />
        <LanguagesSection />
      </div>
    </div>
  )
}

function LanguagesSection() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <span className="text-2xl sm:text-3xl font-semibold mb-2">Languages</span>
      <div className="grid grid-cols-2 gap-3 w-full max-w-2xl mx-auto">
        {languages.map((language, index) => (
          <SkillComponent
            key={index}
            Icon={() => <ReactCountryFlag countryCode={language.icon} svg style={{ width: '4em', height: '4em' }} />}
            compact
            alignLeft
          >
            {language.name}
          </SkillComponent>
        ))}
      </div>
    </div>
  )
}

function HardSection() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <span className="text-2xl sm:text-3xl font-semibold mb-2 text-center">Hard Skills</span>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 w-full max-w-3xl mx-auto">
        {hard_skills.map((hard, index) => (
          <SkillComponent key={index} Icon={hard.Icon} compact>
            {hard.name}
          </SkillComponent>
        ))}
      </div>
    </div>
  )
}

function SoftSection() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full">
      <span className="text-2xl sm:text-3xl font-semibold mb-2 text-center">Soft Skills</span>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 w-full max-w-4xl mx-auto">
        {soft_skills.map((soft, index) => (
          <SkillComponent key={index} Icon={soft.Icon} compact>
            {soft.name}
          </SkillComponent>
        ))}
      </div>
    </div>
  )
}

type SkillComponentProps = {
  Icon: React.ElementType | string,
  children: React.ReactNode,
  compact?: boolean,
  alignLeft?: boolean
}

function SkillComponent({ Icon, children, compact, alignLeft }: SkillComponentProps) {
  let iconProp: React.ReactNode = undefined;
  if (typeof Icon === 'string') {
    iconProp = <img src={`/icons/${Icon}.svg`} alt={Icon} width={24} height={24} className="dark:invert" />;
  } else if (Icon) {
    iconProp = <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />;
  }
  return (
    <div className="my-2">
      <InfoCard Icon={iconProp} title={children as string} compact={compact ?? false} alignLeft={alignLeft ?? false} children={compact ? '' : String(children)} />
    </div>
  );
}