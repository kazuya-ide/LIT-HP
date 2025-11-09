"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesClient() {
  const services = [
    {
      id: "lsa",
      name: "L・Secret Agent（探偵・調査部門）",
      description:
        "浮気・不倫調査、企業調査、ストーカー対策など、確かな実績と技術で信頼される調査サービスを展開。プライバシーを徹底保護し、個人・法人を問わず安心のサポート体制を整えています。",
      image: "/LSArogo.jpg",
      url: "https://lsa.lit4.net/",
      tags: ["探偵業", "調査サービス", "企業調査", "浮気調査"],
    },
    {
      id: "lsecurity",
      name: "L.SECURITY（警備・防犯事業）",
      description:
        "札幌を拠点に1号・2号・4号警備を展開。機械警備を中心に、企業や施設、イベントなどの安全を守ります。SECOMとの提携により、高品質な防犯品質を実現しています。",
      image: "/Lsecurity.jpg",
      url: "https://l-security-lit.com/",
      tags: ["警備業", "機械警備", "SECOM提携", "交通誘導"],
    },
    {
      id: "hokkai",
      name: "北海工務店（建設・不動産事業）",
      description:
        "住宅・店舗・オフィスの建築やリフォーム、不動産管理までトータルに対応。地域密着の確かな施工力で、安心・安全な住まいづくりを提供します。",
      image: "/hokkaikoumutenn.logo.jpg",
      url: "https://www.sapporo-builderr.com/",
      tags: ["建設業", "不動産", "リフォーム"],
    },
    {
      id: "ajito",
      name: "味扉 AJITO（飲食事業）",
      description:
        "札幌・すすきのの隠れ家的ダイニング。創作料理と厳選ドリンクで、特別なひとときを演出します。",
      image: "/ajito.logo.jpg",
      url: "https://www.hotpepper.jp/strJ003500304/",
      tags: ["飲食業", "創作料理", "月寒"],
    },
    {
      id: "studio",
      name: "LIT STUDIO（IT・Webサービス）",
      description:
        "Web制作・ECサイト構築・アプリ開発など、デジタル分野を横断的に支えるIT部門。AI・自動化・セキュリティを融合し、企業のDXを推進しています。",
      image: "litstudio.logo.png",
      url: "https://lit-studio-hp.vercel.app/",
      tags: ["Web制作", "ECサイト", "AI", "DX支援"],
    },
  ];

  return (
    <section className="relative bg-[#ededed] text-[#232323] overflow-hidden">
      {/* === HERO === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative py-36 text-center border-b border-gray-300 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50"
      >
        <motion.h1
          className="text-5xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          事業紹介
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          LITグループは多角的な事業展開で「安心・信頼・未来」を創造します。
        </motion.p>
      </motion.div>

      {/* === 各サービスカード === */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            className="relative rounded-3xl overflow-hidden bg-white shadow-md border border-neutral-200 group flex flex-col md:flex-row items-center gap-0"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.2,
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* 画像部分 */}
            <motion.div
              className="md:w-1/2 h-[420px] relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-800/10 to-transparent" />
            </motion.div>

            {/* テキスト部分 */}
            <motion.div
              className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-4">{s.name}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{s.description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-sm px-3 py-1 rounded-full border border-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href={s.url}
                  target="_blank"
                  className="inline-block bg-[#232323] text-white px-8 py-3 rounded-full font-semibold border border-[#232323] hover:bg-white hover:text-[#232323] transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  詳細を見る →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* === フッター === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-24 bg-white border-t border-gray-300"
      >
        <motion.h3
          className="text-3xl font-semibold mb-4 text-[#232323]"
          whileHover={{ scale: 1.05 }}
        >
          LITグループについて
        </motion.h3>
        <motion.p
          className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          LITグループは、セキュリティ・調査・建設・飲食・ITの5分野を中心に
          地域社会の信頼を基盤としたサービスを展開しています。
          北海道から全国へ、安心と価値を届けるパートナーであり続けます。
        </motion.p>
      </motion.div>
    </section>
  );
}
