"use client"

import Header from "../sections/header"
import Skills from "../sections/skills"
import Footer from "../sections/footer"
import { AnimatedItem } from "../sections/components/common/AnimatedItem"

export default function SkillsPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          <AnimatedItem>
            <Skills />
          </AnimatedItem>
          <Footer />
        </div>
      </main>
    </div>
  )
}
