import { siteConfig } from "@/content/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "HT",
    },
    worksFor: {
      "@type": "Organization",
      name: siteConfig.organization,
    },
    sameAs: siteConfig.socials
      .map((social) => social.href)
      .filter((href) => href.length > 0),
    url: siteConfig.url,
  };

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
