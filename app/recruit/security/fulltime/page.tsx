import ClientSecurityPage from "./ClientPage";

// ========================
// SEO（App Router metadata）
// ========================
export const metadata = {
  title: "【正社員】総合警備スタッフ（1〜4号）｜合同会社LIT",
  description:
    "札幌から北海道No.1を目指す総合警備会社Lsecurityの正社員募集。1〜4号警備の経験者優遇／未経験も歓迎。給与・仕事内容・福利厚生・キャリアパスなど詳細説明ページ。",
  openGraph: {
    title: "【正社員】総合警備スタッフ（1〜4号）｜合同会社LIT",
    description:
      "札幌から北海道No.1を目指す総合警備会社Lsecurityの正社員募集。幹部候補や経験者を歓迎し、キャリアアップできる環境を提供。",
    url: "https://lit4.net/recruit/security",
    siteName: "合同会社LIT",
    type: "article",
    images: [
      {
        url: "https://lit4.net/ogp-security.jpg",
        width: 1200,
        height: 630,
        alt: "Lsecurity 採用 OGP画像",
      },
    ],
  },
};

// ========================
// JSON-LD（構造化データ：JobPosting）
// ========================
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "総合警備スタッフ（正社員｜1〜4号）",
  description:
    "合同会社LIT／Lsecurityによる正社員募集。施設警備・交通誘導・輸送警備・身辺警護など総合的な警備業務に対応。経験者優遇、未経験歓迎、寮完備、資格取得支援、キャリアアップ可能。",
  hiringOrganization: {
    "@type": "Organization",
    name: "合同会社LIT",
    sameAs: "https://lit4.net",
    logo: "https://lit4.net/lit-logo.jpg",
  },
  employmentType: "FULL_TIME",
  industry: "Security",
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
      minValue: 220000,
      maxValue: 400000,
      unitText: "MONTH",
    },
  },
};

export default function Page() {
  return (
    <>
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Client Component */}
      <ClientSecurityPage />
    </>
  );
}
