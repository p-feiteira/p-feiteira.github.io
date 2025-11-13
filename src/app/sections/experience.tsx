"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

type ExperienceEntry = {
  role: string
  company: string
  period: string
  location: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceEntry[] = [
  {
    role: "Senior Full-Stack+AI Engineer @ Aircall",
    company: "AdvanceWorks",
    period: "Sep 2025 -- On Going",
    location: "Lisbon, Portugal",
    description: [
      "Architecting and building a new generative AI support assistant from scratch, leveraging Python (FastAPI), LangChain, OpenAI, and Pinecone to create an advanced RAG pipeline integrated with Zendesk.",
      "Spearheading the end-to-end development of a new self-service support portal, projected to significantly reduce manual ticket volume and decrease customer resolution time.",
      "Developing and maintaining the full-stack application, including the React/Next.js frontend and Python/FastAPI microservices backend utilizing PostgreSQL and Redis.",
      "Owning and automating all cloud infrastructure on AWS using Terraform (IaC), with Docker for containerization and GitLab for CI/CD.",
      "Engineered secure and observable systems by implementing AWS Cognito (JWT/Cookies) for authentication and integrating DataDog for comprehensive application monitoring.",
      "In this role, I am learning prompt engineering in order to take advantage of the most recent AI tools to improve my productivity and efficiency."
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI",
      "Pinecone",
      "React",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Terraform",
      "Docker",
      "GitLab CI/CD",
      "AWS Cognito",
      "DataDog"
    ]
  },
  {
    role: "Python Developer",
    company: "EngineAI",
    period: "Sep 2021 -- Jun 2025",
    location: "Lisbon, Portugal",
    description: [
      "Develop and maintain the company's SDK using Python. It was used also Pandas for data processing and Pytest for unit tests.",
      "Helped build GithubActions CI/CD pipelines for Python's repo.",
      "Joined dashboard team to help building dashboards, using SQL (snowflake), pandas and the company's SDK.",
      "Optimize data workflows between Python services and cloud databases (Snowflake).",
      "Helped build the company's interactive testing suite with Playwright, both Python and JavaScript. Also created loading tests using Grafana K6",
      "Currently working on enterprise LLM agents project, where I'm responsible to link the AI result with the Web stack",
      "Continuously learning modern tech stacks to support cross-functional projects"
    ],
    technologies: [
      "Python",
      "Pandas",
      "Pytest",
      "GitHub Actions",
      "SQL",
      "Snowflake",
      "Playwright",
      "JavaScript",
      "Grafana K6"
    ]
  },
  {
    role: "Internship",
    company: "Celfocus",
    period: "Apr 2018 -- Jul 2018",
    location: "Lisbon, Portugal",
    description: [
      "Developed a Proof of Concept (PoC) for a system that automatically generates test cases from software requirements.",
      "Built a functional web application (full-stack) covering core objectives, demonstrating end-to-end viability.",
      "Key Technologies: Node.js (backend), IBM Watson (AI-powered features), and Cloud Computing for deployment.",
      "Gained hands-on full-stack development experience, focusing on scalability and automation."
    ],
    technologies: [
      "Node.js",
      "IBM Watson",
      "Cloud Computing"
    ]
  }
]

function TimelineItem({ experience, isLast }: { experience: ExperienceEntry; isLast: boolean }) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center relative">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border-2 border-primary">
          <div className="h-3 w-3 rounded-full bg-primary" />
        </div>
        {!isLast && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <Card className="bg-muted-foreground/5 dark:bg-muted/10 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold">
              {experience.role}
            </CardTitle>
            <CardDescription className="text-lg sm:text-xl font-semibold text-foreground mt-1">
              {experience.company}
            </CardDescription>
            <div className="flex flex-wrap items-center gap-4 mt-3 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {experience.description.map((item, index) => (
                <li key={index} className="text-sm sm:text-base text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs sm:text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div id="experience" className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold my-8">Experience</h2>
        </div>
        
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={index}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

