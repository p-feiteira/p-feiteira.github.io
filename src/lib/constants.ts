// Every public identity link lives here and nowhere else.
//
// These had drifted across five files (layout, StructuredData, socialMedia,
// contact, ResumeClient) and each rename left some of them behind, pointing
// at handles that now 404. One object, one place to change.
//

// Normalised: every consumer treats this as a bare prefix (`${SITE_URL}/pt/`),
// so an env override ending in "/" would emit doubled slashes across the whole
// sitemap and every canonical.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://feiteiradev.github.io"
).replace(/\/+$/, "")

/** Host only, for display. Survives an http:// override, unlike slicing "https://". */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "")

export const IDENTITY = {
  name: "Pedro Feiteira",
  email: "pedrofeiteira.dev@gmail.com",
  githubUser: "feiteiradev",
  // Separate namespace from githubUser. They match today; that is a
  // coincidence of two renames, not a rule. Never derive one from the other.
  linkedinUser: "feiteiradev",
  github: "https://github.com/feiteiradev",
  githubLabel: "github.com/feiteiradev",
  linkedin: "https://www.linkedin.com/in/feiteiradev/",
  linkedinLabel: "linkedin.com/in/feiteiradev",
  x: "https://x.com/feiteiradev",
  xLabel: "x.com/feiteiradev",
  xUser: "feiteiradev",
  // Deliberately no phone: Pedro's call, 24 Aug 2026. Email, LinkedIn and the
  // contact form are the routes in.
} as const

/** Icon links, in display order. `icon` names a file in /public/icons. */
export const SOCIAL_LINKS = [
  { icon: "linkedin", href: IDENTITY.linkedin, label: IDENTITY.linkedinLabel },
  { icon: "github", href: IDENTITY.github, label: IDENTITY.githubLabel },
  { icon: "x", href: IDENTITY.x, label: IDENTITY.xLabel },
] as const

// Contact form constants
export const CONTACT_FORM = {
  maxMessageLength: 1000,
  minMessageLength: 10,
  minNameLength: 2,
  maxNameLength: 100,
  rateLimitWindow: 30000, // 30 seconds
} as const

// GitHub API constants
export const GITHUB = {
  username: IDENTITY.githubUser,
  reposPerPage: 6,
  staleTime: 5 * 60 * 1000, // 5 minutes
  retryAttempts: 2,
} as const
