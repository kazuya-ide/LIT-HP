// app/recruit/security/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ClientSecurityPage() {
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
        {/* Why: next/image を使うことで最適化/LCP 改善・警告解消 */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/recruit-hero.jpg"
            alt="Lsecurity 採用ページのヒーロー画像"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/45" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16"
        >
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-normal drop-shadow-lg">
            【正社員】総合警備スタッフ（1〜4号）
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl drop-shadow-lg">
            北海道No.1を目指す総合警備会社Lsecurityの採用ページ。
          </p>
        </motion.div>
      </section>

      {/* =========================== */}
      {/* 採用背景 */}
      {/* =========================== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
          採用背景
        </motion.h2>

        <motion.p variants={fade} initial="hidden" whileInView="show" className="leading-relaxed text-lg text-gray-700">
          Lsecurity（合同会社LIT）は、1号〜4号警備に対応する総合警備会社として急成長中。
          案件増加・提携強化・法人需要の高まりに伴い、
          現場を牽引し未来の基盤を共に作る
          <span className="font-semibold">正社員メンバー（幹部候補）</span>
          を募集します。
        </motion.p>
      </section>

      {/* =========================== */}
      {/* 募集職種 */}
      {/* =========================== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-10">
            募集職種
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "1号警備（施設警備）", desc: "巡回・受付・監視・出入管理・警報対応など" },
              { title: "2号警備（交通誘導）", desc: "工事現場やイベント会場での車両・歩行者誘導" },
              { title: "3号警備（輸送警備）", desc: "貴重品運搬・警護（経験者優遇）" },
              { title: "4号警備（身辺警護）", desc: "要人警護・状況対応（経験者歓迎）" },
            ].map((job, i) => (
              <motion.div
                key={job.title}
                variants={fade}
                initial="hidden"
                whileInView="show"
                transition={{ delay: i * 0.15 }}
                className="bg-neutral-50 shadow-sm rounded-xl p-6 border hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="mt-2 text-gray-600">{job.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== */}
      {/* 仕事内容 */}
      {/* =========================== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
          仕事内容
        </motion.h2>

        <motion.ul variants={fade} initial="hidden" whileInView="show" className="space-y-4 text-gray-700">
          <li>● 施設警備（出入管理・巡回・監視）</li>
          <li>● 車両・歩行者誘導</li>
          <li>● イベント警備（大型催事・スポーツ大会）</li>
          <li>● 輸送警備（貴重品運搬）</li>
          <li>● 身辺警護（VIP・法人顧客）</li>
          <li>● 現場管理・スタッフ指導</li>
          <li>● シフト管理・配置計画</li>
          <li>● 顧客企業との折衝・調整</li>
          <li>● 警備計画の作成</li>
          <li>● 新規案件の立ち上げ</li>
        </motion.ul>
      </section>

      {/* =========================== */}
      {/* 求める人物像 */}
      {/* =========================== */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
            求める人物像
          </motion.h2>

          <motion.ul variants={fade} initial="hidden" whileInView="show" className="space-y-3 text-lg text-gray-700">
            <li>🔹 一緒に会社を大きくしてくれる方（最重要）</li>
            <li>🔹 警備のプロとして成長したい方</li>
            <li>🔹 リーダー気質のある方（隊長候補）</li>
            <li>🔹 柔軟で前向きな方</li>
            <li>🔹 経験者優遇／未経験歓迎</li>
          </motion.ul>
        </div>
      </section>

      {/* =========================== */}
      {/* 給与・福利厚生 */}
      {/* =========================== */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
          給与・福利厚生
        </motion.h2>

        <motion.div variants={fade} initial="hidden" whileInView="show" className="bg-white shadow rounded-xl p-8 space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">給与</h3>
            <p className="text-lg">
              ■ 経験者：月給 250,000〜400,000円
              <br />■ 未経験：月給 220,000円〜
            </p>
            <p className="mt-4 text-gray-700">
              資格手当／隊長手当／深夜手当／管理手当／交通費／遠方手当／出張手当
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">福利厚生</h3>
            <ul className="text-lg space-y-2">
              <li>⭐ 寮・宿舎完備（家具家電つき）</li>
              <li>⭐ 提携飲食店の従業員価格食事</li>
              <li>⭐ 美容エステ無料（脱毛／HIFU／痩身）</li>
              <li>● 資格取得費用全額負担</li>
              <li>● 制服貸与</li>
              <li>● 車両貸与あり</li>
              <li>● 管理職昇格制度あり</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* =========================== */}
      {/* キャリアステップ */}
      {/* =========================== */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 variants={fade} initial="hidden" whileInView="show" className="text-3xl font-bold mb-6">
            キャリアステップ
          </motion.h2>

        <motion.ol variants={fade} initial="hidden" whileInView="show" className="text-lg space-y-2">
            <li>▶ スタッフ</li>
            <li>▶ 現場リーダー</li>
            <li>▶ 隊長（案件管理）</li>
            <li>▶ 管理責任者</li>
            <li>▶ 幹部（事業マネジメント）</li>
            <li>▶ 事業部長（新規事業立ち上げ参画）</li>
          </motion.ol>
        </div>
      </section>

      {/* =========================== */}
      {/* 最後：応募導線 */}
      {/* =========================== */}
      <section className="text-center py-20">
        <Link
          href="/recruit/security/entry"
          className="bg-black text-white px-10 py-4 text-xl rounded-lg shadow hover:bg-neutral-800 transition"
        >
          応募フォームへ進む
        </Link>
      </section>
    </main>
  );
}
