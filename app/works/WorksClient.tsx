"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WorksClient() {
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
    },
    {
      id: "studio",
      title: "LIT STUDIO（IT・Web制作事業）",
      description:
        "Webサイト制作・EC構築・アプリ開発など、企業のDX支援を行うデジタルクリエイティブ部門。デザインと技術の融合で、ブランド価値を高めるWeb体験を提供しています。",
      image: "litstudio.logo.png",
      link: "https://lit-studio-hp.vercel.app/",
      points: [
        "コーポレート／ECサイト制作実績",
        "Shopify・Next.js・GAS開発",
        "AI・自動化・SEO対応サイト構築",
      ],
    },
  ];

  return (
    <main className="bg-[#ededed] text-[#232323] overflow-hidden">
      {/* === HERO === */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 text-[#232323] py-28 text-center border-b border-neutral-300"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.h1
            className="text-5xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            実績紹介
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            LITグループは、警備・調査・建設・飲食・Webなど
            多岐にわたる分野で地域社会を支える実績を重ねています。
          </motion.p>
        </div>
      </motion.section>

      {/* === WORKS SECTIONS === */}
      <section className="max-w-7xl mx-auto py-24 px-6 space-y-28">
        {works.map((w, index) => (
          <motion.div
            key={w.id}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: index * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* 画像 */}
            <motion.div
              className="relative md:w-1/2 w-full h-80 md:h-[420px] rounded-3xl overflow-hidden shadow-md group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={w.image}
                alt={w.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/10 to-transparent" />
            </motion.div>

            {/* テキスト */}
            <motion.div
              className="md:w-1/2 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">{w.title}</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {w.description}
              </p>
              <ul className="space-y-2 mb-6">
                {w.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-gray-800 before:content-['✔︎'] before:text-[#232323] before:font-bold"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href={w.link}
                  target="_blank"
                  className="inline-block bg-[#232323] text-white px-6 py-3 rounded-full font-semibold border border-[#232323] hover:bg-white hover:text-[#232323] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  詳細を見る →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* === GROUP SUMMARY === */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white text-[#232323] py-24 text-center border-t border-neutral-300"
      >
        <motion.h3
          className="text-3xl font-semibold mb-6"
          whileHover={{ scale: 1.05 }}
        >
          グループ全体の実績サマリー
        </motion.h3>
        <motion.div
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <p>
            LITグループは、警備・調査・建設・飲食・ITの5事業を展開し、
            年間1,000件以上の業務実績を誇ります。
          </p>
          <p>
            官公庁・企業案件から個人サービスまで幅広く対応し、
            それぞれの分野で「信頼・安心・価値創造」を提供しています。
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
}
