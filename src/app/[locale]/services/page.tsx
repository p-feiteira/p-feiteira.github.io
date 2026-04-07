"use client"

import Header from "../sections/header"
import Services from "../sections/services"
import Footer from "../sections/footer"
import { AnimatedItem } from "../sections/components/common/AnimatedItem"

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <div className="pb-24" style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-fluid-section)" }}>
          <AnimatedItem>
            <Services />
          </AnimatedItem>
          <Footer />
        </div>
      </main>
    </div>
  )
}
