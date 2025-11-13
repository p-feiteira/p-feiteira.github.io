// Site configuration constants
export const SITE_CONFIG = {
  name: "Pedro Feiteira",
  title: "Pedro Feiteira - Software Developer",
  description: "Software Developer with a passion for building efficient and scalable applications. Based in Portugal, remote ready.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://p-feiteira.github.io",
  github: "https://github.com/p-feiteira",
  linkedin: "https://www.linkedin.com/in/p-feiteira/",
  twitter: "https://x.com/feiteira_dev",
  email: "pedrofeiteira.dev@gmail.com",
} as const

// Contact form constants
export const CONTACT_FORM = {
  maxMessageLength: 1000,
  minMessageLength: 10,
  minNameLength: 2,
  maxNameLength: 100,
  rateLimitWindow: 5000, // 5 seconds
} as const

// GitHub API constants
export const GITHUB = {
  username: "p-feiteira",
  reposPerPage: 6,
  staleTime: 5 * 60 * 1000, // 5 minutes
  retryAttempts: 2,
} as const

// Navigation items
export const NAV_ITEMS = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
] as const

