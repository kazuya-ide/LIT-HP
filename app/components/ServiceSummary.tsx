"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function ServiceSummary() {
  return (
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
  );
}
