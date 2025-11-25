"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ClientParttimePage() {
  const fade = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
  };

  return (
    <main className="bg-neutral-50 text-gray-900">

      {/* =========================== */}
      {/* HERO */}
      {/* =========================== */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/recruit-parttime-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/45" />

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg leading-normal">
            【アルバイト】交通誘導警備スタッフ
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl drop-shadow-lg">
            時給1,500円・日給12,000円。食・住・美容がそろう警備バイト。
          </p>
        </motion.div>
      </section>

      {/* =========================== */}
      {/* キャッチコピー */}
      {/* =========================== */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
          “食・住・美容がそろう、札幌で一番働きやすい警備バイト。”{/* :contentReference[oaicite:2]{index=2} */}
        </motion.h2>

        <motion.p variants={fade} initial="hidden" whileInView="show" className="text-gray-700 text-lg leading-relaxed">
          経験ゼロでも、年齢を気にしていても大丈夫。  
          あなたの新しい一歩を、ここから支えます。{/* :contentReference[oaicite:3]{index=3} */}
        </motion.p>
      </section>

      {/* =========================== */}
      {/* 仕事内容 */}
      {/* =========================== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-10">
            仕事内容
          </motion.h2>

          <motion.div variants={fade} initial="hidden" whileInView="show" className="space-y-4 text-gray-700">
            <p>
              札幌市および近郊の工事現場にて、交通誘導警備業務をお願いします。{/* :contentReference[oaicite:4]{index=4} */}
            </p>

            <ul className="space-y-2">
              <li>● 歩行者・車両の誘導</li>
              <li>● 迂回案内</li>
              <li>● 現場周辺の安全確保</li>
            </ul>

            <p>街の安全を守る“なくてはならない仕事”です。</p>
          </motion.div>
        </div>
      </section>

      {/* =========================== */}
      {/* 特徴・サポート体制 */}
      {/* =========================== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
          働きやすいサポート体制
        </motion.h2>

        <motion.ul variants={fade} initial="hidden" whileInView="show" className="space-y-4 text-gray-700 text-lg">
          <li>■ 直行直帰OK{/* :contentReference[oaicite:5]{index=5} */}</li>
          <li>■ 20時間の丁寧な研修制度{/* :contentReference[oaicite:6]{index=6} */}</li>
          <li>■ デビュー時は先輩スタッフが同行{/* :contentReference[oaicite:7]{index=7} */}</li>
          <li>■ 困った時はすぐ相談できるフォロー体制{/* :contentReference[oaicite:8]{index=8} */}</li>
        </motion.ul>
      </section>

      {/* =========================== */}
      {/* 給与 */}
      {/* =========================== */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
            給与
          </motion.h2>

          <motion.div variants={fade} initial="hidden" whileInView="show" className="bg-white p-8 rounded-xl shadow space-y-6">
            <p className="text-xl font-semibold">
              ■ 日給：12,000円〜（時給1,500円）{/* :contentReference[oaicite:9]{index=9} */}
            </p>
            <ul className="space-y-2">
              <li>● 資格手当</li>
              <li>● 交通費全額支給</li>
              <li>● 業務追加時は別途手当支給</li>
            </ul>

            <p className="text-gray-700 text-lg">
              〈収入例〉60代スタッフ：12,000円 × 月20日 ＝ 月24万円{/* :contentReference[oaicite:10]{index=10} */}
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================== */}
      {/* 勤務時間 */}
      {/* =========================== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
          勤務時間
        </motion.h2>

        <motion.p variants={fade} initial="hidden" whileInView="show" className="text-lg text-gray-700">
          8：00〜17：00（実働8h／休憩1h）  
          週3〜5日勤務可能。シフトは柔軟に相談OK。{/* :contentReference[oaicite:11]{index=11} */}
        </motion.p>
      </section>

      {/* =========================== */}
      {/* 応募資格 */}
      {/* =========================== */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
            応募資格
          </motion.h2>

          <motion.ul variants={fade} initial="hidden" whileInView="show" className="text-lg space-y-2">
            <li>● 未経験歓迎{/* :contentReference[oaicite:12]{index=12} */}</li>
            <li>● ブランクOK</li>
            <li>● 学歴・経験不問</li>
            <li>● シニア・主婦（夫）歓迎</li>
            <li>● Wワーク可能</li>
            <li>● 18歳以上（警備業法）{/* :contentReference[oaicite:13]{index=13} */}</li>
          </motion.ul>
        </div>
      </section>

      {/* =========================== */}
      {/* 福利厚生 */}
      {/* =========================== */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-5xl mx-auto px-6">

          <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-10">
            福利厚生（Lsecurity独自の強み）
          </motion.h2>

          <div className="space-y-12">

            {/* 食事 */}
            <motion.div variants={fade} initial="hidden" whileInView="show" className="space-y-4">
              <h3 className="text-2xl font-bold">⭐ 食事サポート</h3>
              <p>提携飲食店で従業員価格のまかない提供。</p>
            </motion.div>

            {/* 社宅 */}
            <motion.div variants={fade} initial="hidden" whileInView="show" className="space-y-4">
              <h3 className="text-2xl font-bold">⭐ 社宅・宿舎完備（即入居可）</h3>
              <p>家具家電完備・家賃補助あり・移住サポートOK。</p>
            </motion.div>

            {/* エステ */}
            <motion.div variants={fade} initial="hidden" whileInView="show" className="space-y-4">
              <h3 className="text-2xl font-bold">⭐ 提携エステ無料</h3>
              <p>脱毛／小顔ハイフ／EMS痩身などが無料で利用可能。</p>
            </motion.div>

            {/* 働きやすさ */}
            <motion.div variants={fade} initial="hidden" whileInView="show" className="space-y-4">
              <h3 className="text-2xl font-bold">⭐ 働きやすい環境</h3>
              <ul className="space-y-2 text-lg">
                <li>● 交通費全額支給</li>
                <li>● 直行直帰OK</li>
                <li>● 制服貸与</li>
                <li>● 資格取得費用全額支給</li>
                <li>● 送迎相談可</li>
                <li>● シフト柔軟</li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* メッセージ */}
      {/* =========================== */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
          求職者へのメッセージ
        </motion.h2>

        <motion.p variants={fade} initial="hidden" whileInView="show" className="text-lg text-gray-700 leading-relaxed">
          「未経験で不安…」  
          「一度誰かの役に立ちたい」  
          そんな方こそ、Lsecurityへ来てほしい。{/* :contentReference[oaicite:14]{index=14} */}  
          食事・住まい・美容・安定した仕事がそろっています。  
          あなたの“生活ごと支える”警備会社です。{/* :contentReference[oaicite:15]{index=15} */}
        </motion.p>
      </section>

      {/* =========================== */}
      {/* 応募導線 */}
      {/* =========================== */}
      <section className="text-center py-20">
        <Link
          href="/recruit/security/parttime/entry"
          className="bg-black text-white px-10 py-4 text-xl rounded-lg shadow hover:bg-neutral-800 transition"
        >
          応募フォームへ進む
        </Link>
      </section>

    </main>
  );
}
