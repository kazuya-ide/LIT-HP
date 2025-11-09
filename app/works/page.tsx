import WorksClient from "./WorksClient";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo"; // ✅ 共通SEO関数を呼び出し

// ✅ ページ固有のSEO設定
export const metadata: Metadata = createMetadata({
  title: "実績紹介",
  description:
    "LITグループの実績紹介ページ。警備・探偵・建設・飲食・Web制作など、各分野でのプロジェクトや成果事例をご紹介します。",
  path: "/works",
  image: "/ogp-works.jpg", // ページ固有のOGP（無ければ省略で default-ogp.jpg）
});

export default function WorksPage() {
  return (
    <div className="bg-[#f8f8f8] text-[#232323] min-h-screen pt-24 pb-20">
      <main>
        <WorksClient />

        {/* ✅ 構造化データ（Project / WorkExample） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "実績紹介 | LITグループ",
              description:
                "LITグループの実績紹介ページ。警備・探偵・建設・飲食・Web制作など多様な分野での活動実績を掲載しています。",
              url: "https://www.lit4.net/works",
              publisher: {
                "@type": "Organization",
                name: "合同会社LIT",
                url: "https://www.lit4.net",
                logo: "https://www.lit4.net/lit-logo.jpg",
              },
              hasPart: [
                {
                  "@type": "CreativeWork",
                  name: "警備事業 実績例",
                  description:
                    "大型商業施設・イベント警備など、安全管理業務の導入実績。",
                  url: "https://www.lit4.net/works#security",
                },
                {
                  "@type": "CreativeWork",
                  name: "探偵・調査 実績例",
                  description:
                    "浮気調査・素行調査・企業信用調査など、法的証拠収集の成功事例。",
                  url: "https://www.lit4.net/works#detective",
                },
                {
                  "@type": "CreativeWork",
                  name: "建設事業 実績例",
                  description:
                    "土木・解体・リフォームなどの施工事例。地域密着型の安全施工を実現。",
                  url: "https://www.lit4.net/works#construction",
                },
                {
                  "@type": "CreativeWork",
                  name: "飲食事業 実績例",
                  description:
                    "ごほうび菓子店など、飲食ブランドの企画・運営事例。",
                  url: "https://www.lit4.net/works#sweets",
                },
                {
                  "@type": "CreativeWork",
                  name: "Web制作 実績例",
                  description:
                    "企業サイト・ECサイト・採用ページなどのデザイン・開発実績。",
                  url: "https://www.lit4.net/works#web",
                },
              ],
            }),
          }}
        />
      </main>
    </div>
  );
}
