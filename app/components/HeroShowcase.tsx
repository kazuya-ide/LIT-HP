// app/components/HeroShowcase.tsx
"use client";

import type React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type Props = {
  leftImageSrc?: string;   // 警備
  rightImageSrc?: string;  // 探偵
  className?: string;
};

export default function HeroShowcase({
  leftImageSrc = "/security.jpg",
  rightImageSrc = "/detective.jpg",
  className = "",
}: Props): React.JSX.Element {
  const D1 = 1.9;      // 公安テキスト
  const D2 = 1.0;      // 左パネル
  const D3 = 1.6;      // 右パネルをゆっくりに
  const GAP = 0.18;
  const start2 = D1 + GAP;
  const start3 = D1 + D2 + GAP * 2;
  const startCaption = start3 + D3 + GAP; // 右完了後に下段テキスト

  const CINEMA = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      className={`relative w-full h-screen overflow-hidden bg-[#0b0b0c] text-white ${className}`}
      aria-label="HERO"
    >
      {/* 背景の淡い光（演出） */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_70%)]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        aria-hidden
      />

      {/* ① 公安委員会公認：中央→上へ（現在は -25vh のまま） */}
      <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
        <motion.h2
          className="text-3xl md:text-6xl font-extrabold tracking-wide text-white/95"
          initial={{ opacity: 0, scale: 0.94, y: 0, filter: "blur(3px)" }}
          animate={{ opacity: 1, scale: 1.1, y: "-25vh", filter: "blur(0px)" }}
          transition={{ duration: D1, ease: CINEMA }}
        >
          公安委員会公認
        </motion.h2>
      </div>

      {/* ② 左 50% パネル */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 overflow-hidden z-10"
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ delay: start2, duration: D2, ease: CINEMA }}
      >
        <div className="absolute inset-0">
          <Image
            src={leftImageSrc}
            alt="警備のイメージ"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/45 to-transparent" aria-hidden />
        </div>
        <motion.span
          className="absolute top-1/2 right-6 -translate-y-1/2 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow z-20"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: start2 + D2 * 0.6, duration: 0.35, ease: CINEMA }}
        >
          警備＆
        </motion.span>
      </motion.div>

      {/* ③ 右 50% パネル（ゆっくり） */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 overflow-hidden z-20"
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ delay: start3, duration: D3, ease: CINEMA }}
      >
        <div className="absolute inset-0">
          <Image
            src={rightImageSrc}
            alt="探偵のイメージ"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/45 to-transparent" aria-hidden />
        </div>
        <motion.span
          className="absolute top-1/2 left-6 -translate-y-1/2 text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow z-20"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: start3 + D3 * 0.6, duration: 0.5, ease: CINEMA }} 
        >
          探偵
        </motion.span>
      </motion.div>

      {/* ④ 中央下段キャプション */}
      <motion.div
        className="absolute inset-x-0 bottom-[20vh] z-30 text-center pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: startCaption, duration: 0.8, ease: CINEMA }}
      >
        <p className="text-lg md:text-4xl font-medium text-white/90">
          「すべてのリスクを、価値に変える」
        </p>
        <p className="mt-1 text-4xl md:text-4xl font-extrabold tracking-wide">LIT</p>
      </motion.div>
    </section>
  );
}
