"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroWinterSolution() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">
      {/* 背景画像 */}
      <Image
        src="/winter-hero.jpg" // ← 差し替え用
        alt="冬季総合ソリューション"
        fill
        className="object-cover opacity-70"
        priority
      />

      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* テキスト */}
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
  );
}
