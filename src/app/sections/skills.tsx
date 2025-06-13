'use client'
import React from 'react'
import ReactCountryFlag from 'react-country-flag'
import {Card, CardContent} from '@/components/ui/card'
import { Speech , Puzzle, UsersRound, HeartHandshake, Brush, Trophy, MessageCircleCode, Layers, Database, ShieldCheck} from 'lucide-react'
import Image from 'next/image'

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

  return (<div id="skills">
    <h2 className="text-5xl font-bold text-center">Skills</h2>
    <div className='flex flex-col gap-12 text-center mt-20'>
        <HardSection/>
        <SoftSection/>
        <LanguagesSection/>
    </div>
    </div>
  )
}

function LanguagesSection(){

  return <div className='justify-center items-center mx-auto'>
    <span className='text-3xl font-semibold'>Languages</span>
    <div className='flex grid-cols-4 gap-3'>
      {languages.map((language, index) => (
      <SkillComponent
        key={index}
        Icon={() => <ReactCountryFlag countryCode={language.icon} svg style={{width: '4em', height:'4em'}} />}
      >
        {language.name}
      </SkillComponent>
    ))}
    </div>
    
  </div>

}

function HardSection(){
  return <div className='justify-center items-center mx-auto'>
    <span className='text-3xl font-semibold'>Hard Skills</span>
    <div className='grid grid-cols-3 gap-3'>
        {hard_skills.map((hard, index) => (
      <SkillComponent key={index} Icon={hard.Icon}>{hard.name}</SkillComponent>
    ))}
    </div>
  </div>

}

function SoftSection(){
  return <div className='justify-center items-center mx-auto'>
    <span className='text-3xl font-semibold'>Soft Skills</span>
    <div className='grid grid-cols-4 gap-3'>
      {soft_skills.map((soft, index) => (
      <SkillComponent key={index} Icon={soft.Icon}>{soft.name}</SkillComponent>
    ))}
    </div>
  </div>
}

type SkillComponentProps = {
  Icon: React.ElementType | string,
  children: React.ReactNode
}

function SkillComponent({Icon, children}: SkillComponentProps){
  return <div className='my-4'>
    <Card className='hover-lift bg-muted-foreground/5 dark:bg-muted/10'>
      <CardContent>
          <div className='flex justify-start items-center gap-4'>
                {Icon &&
                (typeof Icon === 'string'
                  ? <Image src={`/icons/${Icon}.svg`} alt={Icon} width={20} height={20} className='dark:invert' />
                  : React.createElement(Icon, { className: 'text-primary' }))
                }
              {children}
          </div>
      </CardContent>
    </Card>
  </div>
}