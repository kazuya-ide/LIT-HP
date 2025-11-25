// app/about/AboutClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutClient() {
  return (
    <section className="overflow-hidden bg-[#f6f6f6] text-[#232323]">
      {/* === HERO === */}
      <motion.section
        className="relative text-center py-28 border-b border-neutral-300 overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,200,255,0.25),transparent_70%)]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold mb-8 tracking-tight bg-gradient-to-r from-[#333] via-[#555] to-[#333] bg-clip-text text-transparent">
            会社概要
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            合同会社LITは、北海道札幌を拠点とする総合企業グループです。建設・警備・IT・飲食・調査の多分野で、地域に根ざした信頼と技術を積み重ね、新たな価値を創造しています。
          </p>
        </div>
      </motion.section>

      {/* === 理念（カードを本文の下へ） === */}
      <motion.section
        className="relative py-24 px-6 border-b border-neutral-200"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-6 inline-block">
              企業理念
              <span className="block w-16 h-[3px] bg-[#232323] mx-auto mt-4 rounded-full" />
            </h2>
            <blockquote className="text-2xl font-semibold leading-relaxed">
              「すべてのリスクを、価値に変える」
            </blockquote>
          </header>

          {/* 本文 */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            LITは、安全・信頼・革新を軸に、あらゆる課題に対して最も信頼されるパートナーを目指します。人々の生活と企業の成長を支える“総合リスクソリューション企業”として、社会の安心と発展を同時に実現します。
          </p>

        

          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mt-10 text-center">
            安全を支える警備事業、暮らしを支える建設事業、情報を支えるIT・クリエイティブ事業、そして地域に笑顔を届ける飲食事業――それぞれの分野で「人」と「技術」が融合し、北海道から全国へ新たな信頼のかたちを広げています。
          </p>
        </div>
      </motion.section>

      {/* === 事業紹介 === */}
      <motion.section
        className="max-w-7xl mx-auto py-28 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          主要事業
          <span className="block w-20 h-[3px] bg-[#232323] mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {[
            {
              name: "L.SECURITY",
              desc:
                "官公庁・商業施設・イベントなど幅広い現場で警備・防犯サービスを提供。北海道全域で機械警備、交通誘導、要人警護まで、安心を支えるプロフェッショナルです。",
              img: "/Lsecurity.jpg",
              alt: "L.SECURITY の現場イメージ",
            },
            {
              name: "L・Secret Agent",
              desc:
                "浮気・不倫調査、企業調査、身辺警護など専門性の高い調査を実施。法的証拠として使用可能な報告書まで一貫対応します。",
              img: "/LSArogo.jpg",
              alt: "L・Secret Agent のロゴ",
            },
            {
              name: "北海工務店",
              desc:
                "新築住宅・リフォームを中心に、地域密着で建設事業を展開。確かな施工品質で暮らしの安心を支えます。",
              img: "/hokkaikoumutenn.logo.jpg",
              alt: "北海工務店の施工イメージ",
            },
            {
              name: "味扉 AJITO",
              desc:
                "札幌・豊平月寒の隠れ家的ダイニング。創作料理と厳選ドリンクで特別なひとときを提供します。",
              img: "/ajito.logo.jpg",
              alt: "味扉 AJITO の店舗ロゴ",
            },
            {
              name: "LIT STUDIO",
              desc:
                "Web制作・EC構築・アプリ開発・AI導入支援などデジタル領域を担当。デザインとテクノロジーで企業のDXを推進します。",
              img: "/litstudio.logo.png",
              alt: "LIT STUDIO のロゴ",
            },
          ].map((biz, i) => (
            <motion.div
              key={biz.name}
              className="group relative bg-white rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.08)] overflow-hidden hover:shadow-[0_0_50px_rgba(0,0,0,0.15)] transition-all duration-700"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={biz.img}
                  alt={biz.alt}
                  fill
                  sizes="(min-width:1280px) 20vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-7 text-center">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#555] transition-colors">
                  {biz.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{biz.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* === 会社情報 === */}
      <motion.section
        className="bg-white py-24 border-t border-neutral-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">会社情報</h2>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 text-gray-700">
            <div>
              <dt className="font-semibold text-gray-900">会社名</dt>
              <dd>合同会社LIT</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">所在地</dt>
              <dd>
                <address className="not-italic">
                  〒063-0061 北海道札幌市西区西町北14丁目1-15 ホクシンビル3F
                </address>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">代表者</dt>
              <dd>代表&nbsp; 堀内 勝</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">事業内容</dt>
              <dd>警備業・探偵業・建設業・Web開発・飲食事業・コンサルティング</dd>
            </div>
            <div className="md:col-span-2">
              <dt className="font-semibold text-gray-900">企業ビジョン</dt>
              <dd>
                変化の速い時代の中で「地域社会に必要とされる存在であること」。LITは、デジタルとリアルの両軸から持続的な成長を追求し、北海道から全国へ“新しい信頼の形”を発信し続けます。
              </dd>
            </div>
          </dl>
        </div>
      </motion.section>

      {/* === 登録・許可 === */}
      <motion.section
        className="bg-gradient-to-b from-[#f6f6f6] to-white py-24 border-t border-neutral-200 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3pxl font-bold mb-10">登録・許可</h2>
          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <li>警備業認定：北海道公安委員会 第10000877号</li>
            <li>探偵業届出：北海道公安委員会 第10240005号</li>
            <li>食品衛生責任者：登録済（社内有資格者）</li>
          </ul>
        </div>
      </motion.section>
    </section>
  );
}
