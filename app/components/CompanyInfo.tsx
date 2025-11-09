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

  return (
    <section
      className="w-full bg-[#f6f6f6] px-6 md:px-12 border-t border-neutral-300"
      aria-labelledby="group-company-title"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- 見出し --- */}
        <div className="text-center pt-16 pb-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {mainCompanies.map((c) => (
            <Link
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[380px] rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500 border-t border-neutral-200"
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
            </Link>
          ))}
        </div>

        {/* === CTAボタン === */}
        <div className="text-center border-t border-neutral-300 bg-white py-12 mt-0">
          <Link
            href="/services"
            className="inline-block px-10 py-4 bg-[#232323] text-white text-lg font-bold rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            グループ一覧
          </Link>
        </div>
      </div>
    </section>
  );
}
