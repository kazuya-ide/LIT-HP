"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WinterSolutionPage() {
  const flow = [
    "01｜ヒアリング",
    "02｜現地確認",
    "03｜お見積り",
    "04｜ご契約",
    "05｜冬季運用開始",
    "06｜点検・診断（無料）",
  ];

  const services = [
    {
      title: "警備サービス（1号〜4号）",
      desc: "施設警備から身辺警護、駆け付けサービス、AI防犯カメラまで総合対応。",
      img: "/service-security.jpg",
    },
    {
      title: "除雪 × 安全管理",
      desc: "警備を主軸とした除雪。駐車場・歩道・店舗前の安全確保を24時間体制で。",
      img: "/service-snow.jpg",
    },
    {
      title: "ビルメンテナンス",
      desc: "クロス・床・照明・ボイラー・空調の点検修繕をワンストップで提供。",
      img: "/service-maintenance.jpg",
    },
    {
      title: "新電力ソリューション",
      desc: "電気代削減率15〜22%。請求書1枚で無料診断＆コスト最適化。",
      img: "/service-power.jpg",
    },
  ];

  return (
    <main className="w-full">

      {/* ====================================================== */}
      {/* ① HERO SECTION */}
      {/* ====================================================== */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-black">
        <Image
          src="/winter-hero.jpg"
          alt="冬季総合ソリューション"
          fill
          className="object-cover opacity-70"
          priority
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 h-full flex flex-col justify-center items-start px-10 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-bold leading-tight"
          >
            冬の不安をゼロに。
            <br />
            <span className="text-blue-300">LITにすべておまかせ。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-neutral-200 mt-6 text-lg md:text-xl"
          >
            警備 × 除雪 × 建物管理 × コスト削減  
            ― 冬季運営をワンストップでサポート。
          </motion.p>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ② サービス一覧 */}
      {/* ====================================================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            冬季に強い「ワンストップ総合サービス」
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-neutral-100 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-52 w-full">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ③ 導入の流れ ＆ 料金プラン */}
      {/* ====================================================== */}
      <section className="bg-neutral-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* 導入の流れ */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            導入の流れ
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {flow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-neutral-700 rounded-xl p-6 text-center"
              >
                <p className="text-xl font-semibold">{step}</p>
              </motion.div>
            ))}
          </div>

          {/* 料金プラン */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            料金プラン例
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">除雪サービス</h3>
              <p className="text-lg">月額 6万円〜 / 出動 3万円〜</p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">ビルメンテナンス</h3>
              <p className="text-lg">年間契約 / スポット修繕対応</p>
            </div>

            <div className="bg-neutral-800 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-3">新電力ソリューション</h3>
              <p className="text-lg">削減率 15〜22%（無料診断）</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
