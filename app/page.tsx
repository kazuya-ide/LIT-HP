// app/page.tsx

import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import HeroShowcase from "./components/HeroShowcase";

import MainVisual from "./components/MainVisual";
import LitStorySection from "./components/LitStorySection";
import PickupSection from "./components/PickupSection";
import ProductsSection from "./components/ProductsSection";
import OtherContents from "./components/OtherContentsSection";

// === SEO ===
export const metadata: Metadata = createMetadata({
  title: "北海道札幌の警備・建設・IT・飲食事業｜合同会社LIT",
  description:
    "合同会社LITは、北海道札幌を拠点に警備・調査・建設・IT・飲食事業を展開。地域と共に「安心・信頼・未来を創る」企業グループです。",
  path: "/",
  image: "/ogp-home.jpg",
});

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-white text-[#232323]">

      {/* === 1. メインビジュアル（旧 HomeMain） === */}
   <HeroShowcase />

 
      {/* === 2. 大きめのメインビジュアル === */}
      <MainVisual />

      {/* === 3. Pickup セクション === */}
      <PickupSection />
      
      {/* === 4. LIT ストーリー（物語セクション） === */}
      <LitStorySection />
      
      {/* === 6. 商品・サービスセクション === */}
      <ProductsSection />

      {/* === 7. その他コンテンツ（ブログ等） === */}
      <OtherContents />
      

      {/* === Schema.org === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
          }),
        }}
      />
    </main>
  );
}
