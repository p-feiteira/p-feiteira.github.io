import { IDENTITY, SITE_URL } from "../../../../lib/constants";

interface StructuredDataProps {
  locale: string;
}

/**
 * Two graph nodes, because the site does two jobs: it is Pedro's profile, and
 * it is the shopfront for the services he sells. `Person` alone leaves the
 * second one invisible to anything reading structured data.
 */
export default function StructuredData({ locale }: StructuredDataProps) {
  const copy: Record<string, { jobTitle: string; description: string }> = {
    en: {
      jobTitle: "Software Engineer",
      description:
        "Custom software for small and medium businesses: process automation, websites and web applications, and systems integration.",
    },
    pt: {
      jobTitle: "Engenheiro de Software",
      description:
        "Software à medida para pequenas e médias empresas: automação de processos, sites e aplicações web, e integrações entre sistemas.",
    },
  };

  const t = copy[locale] || copy.en;
  const localeUrl = `${SITE_URL}/${locale}/`;

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#pedro`,
    name: IDENTITY.name,
    jobTitle: t.jobTitle,
    url: localeUrl,
    sameAs: [IDENTITY.github, IDENTITY.linkedin, IDENTITY.x],
    email: IDENTITY.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressLocality: "Costa da Caparica",
    },
    inLanguage: locale,
    knowsAbout: [
      "Python",
      "FastAPI",
      "JavaScript",
      "React",
      "Next.js",
      "SQL",
      "PostgreSQL",
      "AWS",
      "Terraform",
      "Docker",
      "Process Automation",
      "Systems Integration",
    ],
  };

  const service = {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: IDENTITY.name,
    description: t.description,
    url: localeUrl,
    founder: { "@id": person["@id"] },
    provider: { "@id": person["@id"] },
    email: IDENTITY.email,
    areaServed: { "@type": "Country", name: "Portugal" },
    address: person.address,
    availableLanguage: ["pt", "en"],
    inLanguage: locale,
  };

  // inLanguage belongs on each node. As a sibling of @graph it lands on an
  // untyped default-graph node and no consumer sees it.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [person, service],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
