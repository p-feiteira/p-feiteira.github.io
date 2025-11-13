"use client"

import { useEffect } from "react"

export default function Analytics() {
  useEffect(() => {
    // Google Analytics - only load if ID is provided
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (gaId) {
      // Load Google Analytics script
      const script1 = document.createElement("script")
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
      document.head.appendChild(script1)

      const script2 = document.createElement("script")
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
      `
      document.head.appendChild(script2)
    }

    // Plausible Analytics - only load if domain is provided
    const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
    if (plausibleDomain) {
      const script = document.createElement("script")
      script.defer = true
      script.setAttribute("data-domain", plausibleDomain)
      script.src = "https://plausible.io/js/script.js"
      document.head.appendChild(script)
    }
  }, [])

  return null
}

