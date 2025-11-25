import ClientParttimePage from "./ClientPage";

export const metadata = {
  title: "【アルバイト】交通誘導警備スタッフ｜Lsecurity（合同会社LIT）",
  description:
    "時給1,500円・日給12,000円の交通誘導警備アルバイト。社宅完備・食事サポート・美容エステ無料など独自福利厚生が充実。未経験歓迎・直行直帰OK・シフト柔軟対応。",
  openGraph: {
    title: "【アルバイト】交通誘導警備スタッフ｜Lsecurity（合同会社LIT）",
    description:
      "時給1,500円・日給12,000円。社宅・食事サポート・無料エステなど手厚い福利厚生。未経験歓迎の警備アルバイト募集。",
    url: "https://lit4.net/recruit/security/parttime",
    siteName: "合同会社LIT",
    type: "article",
    images: [
      {
        url: "https://lit4.net/ogp-security-parttime.jpg",
        width: 1200,
        height: 630,
        alt: "Lsecurity 警備アルバイト募集 OGP画像",
      },
    ],
  },
};

// ========================
// JSON-LD（JobPosting）
// ========================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "交通誘導警備スタッフ（アルバイト）",
  description:
    "交通誘導警備業務。工事現場にて歩行者・車両の誘導、迂回案内、現場周辺の安全確保など。未経験歓迎、丁寧な研修あり。社宅・食事サポート・美容エステ無料。直行直帰OK。", // :contentReference[oaicite:1]{index=1}
  hiringOrganization: {
    "@type": "Organization",
    name: "合同会社LIT",
    sameAs: "https://lit4.net",
    logo: "https://lit4.net/lit-logo.jpg",
  },
  employmentType: "PART_TIME",
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "札幌市",
      addressRegion: "北海道",
      addressCountry: "JP",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "JPY",
    value: {
      "@type": "QuantitativeValue",
      minValue: 12000,
      maxValue: 15000,
      unitText: "DAY",
    },
  },
};

export default function Page() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientParttimePage />
    </>
  );
}
