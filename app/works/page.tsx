import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "実績紹介｜LITグループ",
  description:
    "LITグループの実績紹介ページ。警備・探偵・建設・飲食・Web制作の各分野での活動実績をご紹介します。",
  alternates: { canonical: "https://lit4.net/works" },
};

export default function WorksPage() {
  const works = [
    {
      id: "lsecurity",
      title: "L.SECURITY（警備・防犯事業）",
      description:
        "札幌市内を中心に官公庁・商業施設・イベントなどの常駐警備、機械警備、交通誘導業務を展開。SECOMとの提携により、高品質な安全体制を実現しています。",
      image: "/Lsecurity.jpg",
      link: "https://l-security-lit.com/",
      points: [
        "年間500件以上の警備実績",
        "SECOMシステム導入施設対応",
        "札幌市内・近郊を中心に警備展開",
      ],
      grad: "from-blue-900/90 to-slate-700/80",
    },
    {
      id: "lsa",
      title: "L・Secret Agent（探偵・調査事業）",
      description:
        "浮気・不倫調査、企業調査、行方調査、ストーカー対策など、個人・法人問わず高度な調査を実施。法的証拠として利用可能な報告書の提供も行っています。",
      image: "/LSArogo.jpg",
      link: "https://lsa.lit4.net/",
      points: [
        "年間調査件数100件以上",
        "弁護士・法務機関との連携実績",
        "最新機材による調査・撮影",
      ],
      grad: "from-gray-900/90 to-gray-700/80",
    },
    {
      id: "hokkai",
      title: "北海工務店（建設・不動産事業）",
      description:
        "住宅・店舗・オフィスの建築・リフォームを手がける地域密着型工務店。不動産管理や耐震リフォームなど、確かな施工品質で信頼を得ています。",
      image: "/hokkaikoumutenn.logo.jpg",
      link: "https://www.sapporo-builderr.com/",
      points: [
        "年間30件以上の施工・改修実績",
        "戸建・店舗・オフィス対応",
        "不動産管理・耐震リフォーム対応",
      ],
      grad: "from-amber-800/90 to-yellow-600/80",
    },
    {
      id: "ajito",
      title: "味扉 AJITO（飲食事業）",
      description:
        "すすきのの隠れ家的創作ダイニング。旬の食材を使用したこだわり料理と上質な空間で、特別な時間を提供します。雑誌・TVなど各種メディア掲載実績も。",
      image: "/ajito.logo.jpg",
      link: "https://www.hotpepper.jp/strJ003324016/",
      points: [
        "ホットペッパー口コミ★4.6維持",
        "メディア取材・掲載多数",
        "イベント・貸切パーティー実績",
      ],
      grad: "from-rose-800/90 to-red-500/80",
    },
    {
      id: "studio",
      title: "LIT STUDIO（IT・Web制作事業）",
      description:
        "Webサイト制作・EC構築・アプリ開発など、企業のDX支援を行うデジタルクリエイティブ部門。デザインと技術の融合で、ブランド価値を高めるWeb体験を提供しています。",
      image: "/images/litstudio.jpg",
      link: "https://lit4.net/",
      points: [
        "コーポレート／ECサイト制作実績",
        "Shopify・Next.js・GAS開発",
        "AI・自動化・SEO対応サイト構築",
      ],
      grad: "from-indigo-800/90 to-purple-600/80",
    },
  ];

  return (
    <main className="bg-neutral-50 text-gray-900">
      {/* === HERO === */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Lsecurity.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 tracking-wide">
            実績紹介
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed">
            LITグループは、警備・調査・建設・飲食・Webの各分野で
            地域社会を支える多様な実績を重ねています。
          </p>
        </div>
      </section>

      {/* === WORKS SECTIONS === */}
      <section className="max-w-7xl mx-auto py-24 px-6 space-y-24">
        {works.map((w, index) => (
          <div
            key={w.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* 画像 */}
            <div className="relative md:w-1/2 w-full h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-xl group">
              <Image
                src={w.image}
                alt={w.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${w.grad}`}
              />
            </div>

            {/* テキスト */}
            <div className="md:w-1/2 w-full">
              <h2 className="text-3xl font-bold mb-4">{w.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {w.description}
              </p>
              <ul className="space-y-2 mb-6">
                {w.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-gray-800 before:content-['✔︎'] before:text-emerald-600 before:font-bold"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={w.link}
                target="_blank"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-all"
              >
                詳細を見る →
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* === GROUP SUMMARY === */}
      <section className="bg-neutral-900 text-gray-100 py-24 text-center">
        <h3 className="text-3xl font-semibold mb-6">
          グループ全体の実績サマリー
        </h3>
        <div className="max-w-3xl mx-auto text-gray-400 leading-relaxed space-y-4">
          <p>
            LITグループは、警備・調査・建設・飲食・ITの5事業を展開し、
            年間1,000件以上の業務実績を誇ります。
          </p>
          <p>
            官公庁や企業案件から個人サービスまで幅広く対応し、
            それぞれの専門分野で地域の安全・信頼・発展に貢献しています。
          </p>
        </div>
      </section>
    </main>
  );
}
