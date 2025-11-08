import Image from "next/image";
import Link from "next/link";

export default function CompanyInformation() {
  const mainCompanies = [
    {
      name: "L.SECURITY（セキュリティ事業）",
      desc: "札幌を拠点に1号・2号・4号警備を展開。機械警備・イベント警備を中心に、企業や施設の安全を守ります。SECOMとの提携で高い防犯品質を実現。",
      image: "/Lsecurity.jpg",
      link: "https://l-security-lit.com/",
      grad: "from-blue-900 via-slate-800 to-gray-700",
    },
    {
      name: "L・Secret Agent（探偵・調査業）",
      desc: "浮気・不倫調査、企業調査、行方・ストーカー対策まで。法務機関と連携し、信頼性の高い調査と証拠収集で安心を提供します。",
      image: "/LSArogo.jpg",
      link: "https://lsa.lit4.net/",
      grad: "from-gray-900 via-gray-800 to-gray-600",
    },
  ];

  const subCompanies = [
    {
      name: "北海工務店（建設・不動産）",
      desc: "住宅・店舗・オフィスの建築・リフォームを通じて地域の街づくりを支えます。信頼と技術で快適な暮らしを実現。",
      image: "/hokkaikoumutenn.logo.jpg",
      link: "https://www.sapporo-builderr.com/",
      grad: "from-amber-800 to-yellow-500",
    },
    {
      name: "味扉 AJITO（飲食サービス）",
      desc: "すすきのの隠れ家的ダイニング。創作料理とこだわりの空間で、心に残る特別なひとときを。",
      image: "/ajito.logo.jpg",
      link: "https://www.hotpepper.jp/strJ003324016/",
      grad: "from-rose-800 to-red-500",
    },
    {
      name: "LIT STUDIO（IT・Webサービス）",
      desc: "Web制作・ECサイト構築・アプリ開発を通じて企業のDXを支援。AIとテクノロジーで次世代のWebを創造します。",
      image: "/images/litstudio.jpg",
      link: "https://lit4.net/",
      grad: "from-indigo-700 to-purple-600",
    },
  ];

  return (
    <section
      className="w-full bg-[#ededed] py-20 px-6 md:px-12"
      aria-labelledby="group-company-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- 見出し --- */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase text-gray-500 tracking-widest">
            COMPANY INFORMATION
          </span>
          <h2
            id="group-company-title"
            className="text-4xl md:text-5xl font-extrabold text-[#232323] mt-3 mb-6"
          >
            グループ会社紹介
          </h2>
          <p className="text-lg text-[#555] max-w-3xl mx-auto leading-relaxed">
            LITグループは、北海道を中心に「安心・信頼・地域貢献」をテーマに活動。
            各分野の専門チームが連携し、社会に新しい価値を提供しています。
          </p>
        </div>

        {/* === メイン2社（LSA & L.SECURITY） === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {mainCompanies.map((c) => (
            <Link
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.grad} opacity-80 group-hover:opacity-90 transition-all duration-500`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-3">{c.name}</h3>
                <p className="text-base md:text-lg text-gray-100 leading-relaxed">
                  {c.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* === サブ3社 === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subCompanies.map((c) => (
            <Link
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[300px] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${c.grad} opacity-85 group-hover:opacity-90 transition-all duration-500`}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h4 className="text-2xl font-bold mb-2">{c.name}</h4>
                <p className="text-sm text-gray-100 leading-relaxed line-clamp-3">
                  {c.desc}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>

        {/* === CTAボタン === */}
        <div className="text-center mt-20">
          <Link
            href="/group-companies"
            className="inline-block px-10 py-4 bg-[#232323] text-white text-lg font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            グループ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
