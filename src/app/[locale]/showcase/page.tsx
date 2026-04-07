"use client"

import Header from "../sections/header"
import Showcase from "../sections/showcase"
import Footer from "../sections/footer"
import { AnimatedItem } from "../sections/components/common/AnimatedItem"

export default function ShowcasePage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          <AnimatedItem>
            <Showcase />
          </AnimatedItem>
          <Footer />
        </div>
      </main>
    </div>
  )
}
