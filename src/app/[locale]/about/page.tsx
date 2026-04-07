"use client"

import Header from "../sections/header"
import About from "../sections/about"
import Footer from "../sections/footer"
import { AnimatedItem } from "../sections/components/common/AnimatedItem"

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          <AnimatedItem>
            <About />
          </AnimatedItem>
          <Footer />
        </div>
      </main>
    </div>
  )
}
