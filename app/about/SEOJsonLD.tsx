"use client";

export default function SEOJsonLD() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "合同会社LIT",
    url: "https://www.lit4.net",
    logo: "https://www.lit4.net/logo.png",
    description:
      "北海道札幌を拠点に、建設・警備・IT・飲食など地域社会に貢献する合同会社LIT。",
    address: {
      "@type": "PostalAddress",
      streetAddress: "西区西町北14丁目1-15 ホクシンビル3F",
      addressLocality: "札幌市",
      addressRegion: "北海道",
      postalCode: "063-0061",
      addressCountry: "JP",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+81-11-000-0000",
        contactType: "customer service",
        areaServed: "JP",
        availableLanguage: ["Japanese"],
      },
    ],
    sameAs: [
      "https://l-security-lit.com",
      "https://www.sapporo-builderr.com",
      "https://li-ttamtei.vercel.app/lsa",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
