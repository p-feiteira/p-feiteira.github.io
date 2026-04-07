"use client"

import Header from "../sections/header"
import Contact from "../sections/contact"
import Footer from "../sections/footer"
import { AnimatedItem } from "../sections/components/common/AnimatedItem"

export default function ContactPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          <AnimatedItem>
            <Contact />
          </AnimatedItem>
          <Footer />
        </div>
      </main>
    </div>
  )
}
