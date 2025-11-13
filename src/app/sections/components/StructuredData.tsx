const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://p-feiteira.github.io";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pedro Feiteira",
  jobTitle: "Software Developer",
  url: siteUrl,
  sameAs: [
    "https://github.com/p-feiteira",
    "https://www.linkedin.com/in/p-feiteira/",
    "https://x.com/feiteira_dev",
  ],
  email: "pedrofeiteira.dev@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PT",
    addressLocality: "Portugal",
  },
  knowsAbout: [
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "SQL",
    "Docker",
    "CI/CD",
    "Software Development",
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

