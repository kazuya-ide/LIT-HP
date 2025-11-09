import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo"; // ✅ 共通SEOヘルパーを利用
import HeroSection from "./components/Herosection";
import CompanyInformation from "./components/CompanyInfo";
import NewsSection from "./components/NewsSection";

// ✅ トップページ用メタデータ
export const metadata: Metadata = createMetadata({
  title: "北海道札幌の警備・建設・IT・飲食事業｜合同会社LIT",
  description:
    "合同会社LITは、北海道札幌を拠点に警備・調査・建設・IT・飲食事業を展開。地域と共に「安心・信頼・未来を創る」企業グループです。",
  path: "/", // canonical URL 自動生成（https://www.lit4.net）
  image: "/ogp-home.jpg", // 無ければ default-ogp.jpg が自動適用
});

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-white text-[#232323]">
      {/* === Heroセクション === */}
      <HeroSection />

      {/* === Mission Section === */}
      <section className="bg-neutral-100 py-24 text-center">
        <h2 className="text-4xl font-bold mb-6 text-[#232323]">LITの理念</h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
          私たちは「安心・信頼・未来を創る」を理念に掲げ、  
          警備・調査・建設・IT・飲食の5分野で地域社会と共に成長を続けています。
        </p>
      </section>

      {/* === 会社情報セクション === */}
      <CompanyInformation />

      <div className="mt-20" />

      {/* === お知らせ === */}
      <NewsSection />

      <div className="mb-20" />

      {/* ✅ 構造化データ（Organization / WebSite） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: "合同会社LIT",
                url: "https://www.lit4.net",
                logo: "https://www.lit4.net/lit-logo.jpg",
                description:
                  "北海道札幌を拠点に警備・調査・建設・IT・飲食事業を展開し、地域社会と共に成長を続ける企業グループ。",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "北海道札幌市西区西町北14丁目1−15 ホクシンビル3F",
                  addressLocality: "札幌市",
                  addressRegion: "北海道",
                  postalCode: "063-0061",
                  addressCountry: "JP",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+81-11-215-6432",
                  contactType: "customer service",
                  availableLanguage: ["Japanese"],
                },
                sameAs: [
                  "https://x.com/lit4_net",
                  "https://www.instagram.com/lit4_net",
                ],
              },
              {
                "@type": "WebSite",
                url: "https://www.lit4.net",
                name: "合同会社LIT 公式サイト",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://www.lit4.net/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
