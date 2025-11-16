// app/components/ProductsSection.tsx
import Image from "next/image";
import Link from "next/link";

export default function ProductsSection() {
  const products = [
    {
      enTitle: "L.SECURITY",
      jpTitle: "総合警備サービス",
      desc: "公安委員会認定を受けた専門警備チーム。警察OBや元刑事が在籍し、確かな経験と最先端のAI監視技術で地域の安全を守ります。",
      img: "/Lsecurity.jpg",
      href: "https://l-security-lit.com/",
    },
    {
      enTitle: "L.SECRET AGENT",
      jpTitle: "探偵・調査サービス",
      desc: "静かに、正確に、真実を追う調査のプロフェッショナル。元刑事の高度な調査技術と先端デジタル分析で、信頼性の高い調査結果を提供します。",
      img: "/LSArogo.jpg",
      href: "https://lsa.lit4.net",
    },
    {
      enTitle: "HOKKAI KOUMUTEN",
      jpTitle: "北海工務店",
      desc: "地域に根ざした建築・リフォーム事業。住まいづくりから建物修繕まで、“確かな施工”と“誠実な対応”で価値ある暮らしを支えます。",
      img: "/hokkaikoumutenn.logo.jpg",
      href: "https://hokkai-koumuten.com",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* 見出し */}
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-2">― 事業一覧</p>
          <h2 className="text-4xl font-bold tracking-tight">
            PRODUCTS / SERVICE
          </h2>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.enTitle}
              className="relative group overflow-hidden bg-black text-white"
            >
              {/* 背景画像 */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={p.img}
                  alt={p.jpTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"></div>

              {/* テキスト */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                <h3 className="text-lg md:text-xl font-semibold tracking-wide italic mb-1">
                  {p.enTitle}
                </h3>
                <h4 className="text-base font-bold mb-2">{p.jpTitle}</h4>
                <p className="text-sm text-gray-200 leading-relaxed mb-4">
                  {p.desc}
                </p>
                <Link
                  href={p.href}
                  className="text-xs font-bold border-b border-white hover:opacity-80 transition"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
