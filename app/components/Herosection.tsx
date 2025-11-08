import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
   <section className="w-full h-[90vh] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center relative overflow-hidden mt-[-80px] pt-[80px]">

      {/* --- 背景デコレーション --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.9),_rgba(230,230,230,0.8))]" />

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 md:py-0">
        {/* --- 左側：画像 --- */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-12 md:mb-0 relative">
          <div className="relative w-[480px] h-[480px] md:w-[520px] md:h-[520px] drop-shadow-2xl">
            <Image
              src="/lit-logo.jpg"
              alt="LITグループ ロゴイメージ"
              fill
              className="object-contain rounded-2xl transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* グラデーションオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 rounded-2xl pointer-events-none" />
          </div>
        </div>

        {/* --- 右側：テキスト --- */}
        <div className="w-full md:w-1/2 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#232323] tracking-tight mb-6 leading-snug">
            革新で未来をつくる<br />
            <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-black bg-clip-text text-transparent">
              LITグループ
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#444] leading-relaxed mb-6">
            合同会社LITは、「人」「地域」「テクノロジー」の力を結集し、  
            建設・飲食・IT・探偵・警備など多彩な分野を通じて  
            社会の安心と価値創造に貢献しています。
          </p>

          <p className="text-base md:text-lg text-[#666] leading-relaxed mb-10">
            各事業が連携し、北海道から全国へ「信頼」と「革新」を届ける。  
            それがLITグループの使命です。
          </p>

          <Link
            href="/about"
            className="inline-block px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            企業情報を見る
          </Link>
        </div>
      </div>

      {/* --- 下部のデコレーションライン --- */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-900 via-gray-600 to-transparent" />
    </section>
  );
}
