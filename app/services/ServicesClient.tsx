"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

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
      highlight: true,
      bg: "from-neutral-900 to-gray-700",
    },
    {
      id: "lsecurity",
      name: "L.SECURITY（警備・防犯事業）",
      description:
        "札幌を拠点に1号・2号・4号警備を展開。機械警備を中心に、企業や施設、イベントなどの安全を守ります。SECOMとの提携により、最先端のセキュリティシステムを導入し、高い防犯品質を実現しています。",
      image: "/Lsecurity.jpg",
      url: "https://l-security-lit.com/",
      tags: ["警備業", "機械警備", "SECOM提携", "交通誘導"],
      highlight: true,
      bg: "from-blue-900 to-slate-700",
    },
    {
      id: "hokkai",
      name: "北海工務店（建設・不動産事業）",
      description:
        "住宅・店舗・オフィスの建築やリフォーム、不動産管理までトータルに対応。地域密着の確かな施工力で、安心・安全な住まいづくりを提供します。",
      image: "/hokkaikoumutenn.logo.jpg",
      url: "https://www.sapporo-builderr.com/",
      tags: ["建設業", "不動産", "リフォーム"],
      bg: "from-amber-800 to-yellow-600",
    },
    {
      id: "ajito",
      name: "味扉 AJITO（飲食事業）",
      description:
        "札幌・すすきのにある大人の隠れ家ダイニング。こだわりの創作料理と厳選ドリンクで、特別なひとときを演出します。",
      image: "/ajito.logo.jpg",
      url: "https://www.hotpepper.jp/strJ003500304/",
      tags: ["飲食業", "創作料理", "月寒"],
      bg: "from-rose-700 to-red-500",
    },
    {
      id: "studio",
      name: "LIT STUDIO（IT・Webサービス）",
      description:
        "Web制作・ECサイト構築・アプリ開発など、デジタル分野を横断的に支えるIT部門。AI・自動化・セキュリティを融合し、企業のDXを推進しています。",
      image: "/images/litstudio.jpg",
      url: "https://lit4.net/",
      tags: ["Web制作", "ECサイト", "AI", "DX支援"],
      bg: "from-indigo-700 to-purple-600",
    },
  ];

  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <section className="relative bg-neutral-950 text-gray-100 overflow-hidden">
      {/* ==== HEROセクション ==== */}
      <motion.div
        style={{ y: yHero }}
        className="relative py-40 text-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-6xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            LIT GROUP
          </h1>
          <p className="text-xl text-gray-400 mt-6">
            「安全・信頼・創造」で社会に新しい価値を。
          </p>
        </motion.div>

        {/* 背景光 */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,150,255,0.15),transparent_60%)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
      </motion.div>

      {/* ==== 各サービスカード ==== */}
      <div className="max-w-7xl mx-auto px-6 pb-32 space-y-36 relative z-10">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            className={`relative rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.3)] group`}
            initial={{ opacity: 0, y: 120, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: i * 0.15,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            {/* 背景グラデーション */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.bg} opacity-80`}
            />
            <div className="relative z-10 flex flex-col md:flex-row">
              {/* イメージ部分 */}
              <motion.div
                className="md:w-1/2 h-[420px] relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              >
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* テキスト部分 */}
              <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center">
                <motion.h2
                  className="text-4xl font-bold mb-4 tracking-wide"
                  whileHover={{
                    textShadow: "0px 0px 20px rgba(255,255,255,0.7)",
                  }}
                >
                  {s.name}
                </motion.h2>

                <motion.p
                  className="mb-6 text-gray-100 leading-relaxed text-lg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {s.description}
                </motion.p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {s.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "rgba(255,255,255,0.4)",
                      }}
                      className="bg-white/20 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* ボタン */}
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href={s.url}
                    target="_blank"
                    className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-lg hover:shadow-2xl"
                  >
                    詳細を見る →
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* 光のオーラ効果 */}
            <motion.div
              className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/40 via-purple-400/30 to-pink-400/40 blur-xl opacity-0 group-hover:opacity-80 transition-all duration-700"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>

      {/* ==== フッターセクション ==== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative text-center py-32 bg-gradient-to-b from-neutral-900 to-black overflow-hidden"
      >
        <motion.h3
          className="text-3xl font-semibold mb-4 text-white"
          whileHover={{ scale: 1.05 }}
        >
          LITグループについて
        </motion.h3>
        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg px-6">
          LITグループは、セキュリティ・探偵・建設・飲食・ITという
          異なる領域のプロフェッショナルが結集し、  
          「安心・信頼・未来」をテーマに北海道から全国へ新しい価値を届けています。
        </p>

        {/* 流れる背景ライト */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,100,255,0.2),transparent_70%)]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        />
      </motion.div>
    </section>
  );
}
