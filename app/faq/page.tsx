import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import FAQPageClient from "./FAQPageClient"; // ← 上のFAQコンポーネントをFAQPageClient.tsxにリネームして読み込む

// ✅ ページ固有のSEO情報
export const metadata: Metadata = createMetadata({
  title: "よくある質問（探偵サービス）",
  description:
    "合同会社LIT 探偵・調査サービスに関するよくある質問ページ。浮気・不倫調査、素行調査、反社チェック、ストーカー対策などの質問と回答を掲載しています。",
  path: "/faq",
  image: "/ogp-faq.jpg", // 無ければ省略で default-ogp.jpg を使用
});

export default function FAQPage() {
  return (
    <div className="bg-neutral-900 text-white min-h-screen py-20 px-4">
      <main>
        <FAQPageClient />

        {/* ✅ 構造化データ（FAQPage） */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "相談から依頼までの流れは？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "お問い合わせ→ヒアリング→お見積り→ご契約→調査着手→中間報告→最終報告（報告書・写真・動画）。緊急案件にも可能な限り対応します。",
                  },
                },
                {
                  "@type": "Question",
                  name: "浮気・不倫調査では何が分かりますか？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "対象者の行動記録、接触相手、日時・場所の特定、宿泊の有無などを証拠として記録します。裁判提出を想定した形式での報告書作成にも対応します。",
                  },
                },
                {
                  "@type": "Question",
                  name: "反社チェックや企業調査は対応可能？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "はい。公開情報・独自リソース・適法な現地確認を組み合わせ、反社会的勢力との関係性や信用リスクを多角的に確認します。",
                  },
                },
                {
                  "@type": "Question",
                  name: "料金の目安は？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "内容・難易度・稼働時間・人員・機材によって変動します。ご希望とご予算を伺い、無理のない調査計画とお見積りをご提示します。相談・見積りは無料です。",
                  },
                },
                {
                  "@type": "Question",
                  name: "秘密は守られますか？",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "守秘義務を徹底します。ご相談内容・個人情報・調査過程は厳格に管理し、外部へ漏れることはありません。匿名相談も可能です。",
                  },
                },
              ],
            }),
          }}
        />
      </main>
    </div>
  );
}
