"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ★ 修正：components 配下のページを読み込む
import WinterSolutionPage from "../components/WinterSolutionPage";

export default function ServicesClient() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleDetail = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const services = [
    {
      id: "lsa",
      name: "L・Secret Agent（探偵・調査部門）",
      description:
        "浮気・不倫調査、企業調査、ストーカー対策など、確かな実績と技術で信頼される調査サービス。",
      image: "/LSArogo.jpg",
      url: "https://lsa.lit4.net/",
      tags: ["探偵業", "調査サービス", "企業調査", "浮気調査"],
      detail: null, // ← 展開コンテンツ（後で追加可能）
    },
    {
      id: "lsecurity",
      name: "L.SECURITY（警備・防犯事業）",
      description:
        "北海道全域で1号・2号・4号警備を展開。機械警備を核に企業・施設・イベントを支える総合セキュリティ。",
      image: "/Lsecurity.jpg",
      url: "https://l-security-lit.com/",
      tags: ["警備業", "機械警備", "身辺警護", "交通誘導"],
      detail: null,
    },
    {
      id: "hokkai",
      name: "北海工務店（建設・不動産事業）",
      description:
        "建築・リフォーム・清掃・メンテナンスまでトータル対応。地域密着の確かな施工力。",
      image: "/hokkaikoumutenn.logo.jpg",
      url: "https://www.sapporo-builderr.com/",
      tags: ["建設業", "リフォーム"],
      // ★ 高級仕様：このカードは WinterSolutionPage を展開
      detail: <WinterSolutionPage />,
    },
    {
      id: "ajito",
      name: "味扉 AJITO（飲食事業）",
      description:
        "札幌月寒の隠れ家的ダイニング。創作料理と厳選ドリンクで特別な時間を提供。",
      image: "/ajito.logo.jpg",
      url: "https://www.hotpepper.jp/strJ003324016/",
      tags: ["飲食業", "創作料理", "月寒"],
      detail: null,
    },
    {
      id: "studio",
      name: "LIT STUDIO（IT・Webサービス）",
      description:
        "Web制作・EC構築・アプリ開発・AI活用など、企業のDXを支える IT / クリエイティブ事業。",
      image: "/litstudio.logo.png",
      url: "https://lit-studio-hp.vercel.app/",
      tags: ["Web制作", "AI", "ECサイト", "DX支援"],
      detail: null,
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
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">事業紹介</h1>
        <p className="text-gray-600 text-lg">
          LITグループは多角的な事業展開で「安心・信頼・未来」を創造します。
        </p>
      </motion.div>

      {/* === カード一覧 === */}
      <section className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            className="relative rounded-3xl overflow-hidden bg-white shadow-md border border-neutral-200 group"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
          >
            {/* === カード本体 === */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 h-[420px] relative">
                <Image src={s.image} alt={s.name} fill className="object-cover" />
              </div>

              <div className="md:w-1/2 p-10 md:p-14">
                <h2 className="text-3xl font-bold mb-4">{s.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{s.description}</p>

                {/* タグ */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-sm px-3 py-1 rounded-full border border-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* === 2ボタン仕様：公式 / 詳細 === */}
                <div className="flex gap-4">
                  {/* ① 公式サイトへ */}
                  <Link
                    href={s.url}
                    target="_blank"
                    className="bg-[#232323] text-white px-6 py-3 rounded-full font-semibold border border-[#232323] hover:bg-white hover:text-[#232323] transition-all duration-300 shadow-md"
                  >
                    公式サイト →
                  </Link>

                  {/* ② 詳細を見る（展開可能） */}
                  <button
                    onClick={() => toggleDetail(s.id)}
                    className="bg-white text-[#232323] px-6 py-3 rounded-full font-semibold border border-[#232323] hover:bg-[#232323] hover:text-white transition-all duration-300 shadow-md"
                  >
                    {openId === s.id ? "閉じる ▲" : "詳細 ▼"}
                  </button>
                </div>
              </div>
            </div>

            {/* === 展開部分 === */}
            <AnimatePresence>
              {openId === s.id && s.detail && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden bg-neutral-50 border-t border-neutral-300"
                >
                  {s.detail}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </section>
  );
}
