import type { Metadata, Viewport } from "next";
import "../globals.css"
import { SITE_URL } from "../../lib/constants"

// "/" used to render an empty body and redirect with client-side JS, which
// reads as a soft 404: a crawler that does not run the script sees a blank
// page. It now serves real content plus a meta refresh, and points at /pt/
// rather than /en/, because this site is Portuguese first.
export const metadata: Metadata = {
  title: "Pedro Feiteira · Software à medida para PMEs",
  description:
    "Engenheiro de software em Portugal. Workflows automatizados, sites e aplicações à medida para pequenas e médias empresas.",
  metadataBase: new URL(SITE_URL),
  // The canonical hands "/" to /pt/ so the two do not compete. Deliberately no
  // `robots: noindex` next to it: a noindex page that canonicalises elsewhere
  // is a contradiction, and the noindex can carry across to the target, which
  // would drop /pt/ itself.
  alternates: { canonical: "/pt/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <meta httpEquiv="refresh" content="0; url=/pt/" />
      </head>
      <body>{children}</body>
    </html>
  )
}
