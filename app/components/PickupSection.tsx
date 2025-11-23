// app/components/PickupSection.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function PickupSection() {
  const reduce = useReducedMotion();

  const items = [
    {
      date: "",
      title: "L Security",
      subtitle: "「守る美学。見抜く哲学。」",
      img: "/Lsecurity.jpg",
      href: "https://l-security-lit.com/",
      detailHref: "https://l-security-lit.com/business",
      imageScale: "scale-[0.60]",
      imageHover: "group-hover:scale-[0.65]",
      button1: "公式サイトへ →",
      button2: "警備サービスを見る →",
    },
    {
      date: "",
      title: "L.SecretAgent",
      subtitle:
        "「見守る力と、見抜く知性。」 静寂の中で、社会を支える二つの眼。",
      img: "/LSArogo.jpg",
      href: "https://lsa.lit4.net",
      detailHref: "https://lsa.lit4.net/services",
      imageScale: "scale-100",
      imageHover: "group-hover:scale-105",
      button1: "公式サイトへ →",
      button2: "調査サービスを見る →",
    },
  ];

  // コンテナ：順次表示を軽めに
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // カード：下→上。距離を増やし、時間制御で安定化
  const card = {
    hidden: { opacity: 0, y: 56 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // 画像：カードよりわずかに遅らせる
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.985 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: reduce ? 0 : 0.06,
        duration: reduce ? 0 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 見出しも下→上で統一 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="text-sm tracking-wide text-gray-600 mb-2">― ピックアップ事業</p>
          <h2 className="text-4xl font-bold tracking-tight">PICKUP</h2>
        </motion.div>

        {/* アイテム（GPU最適化） */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              className="group transition text-center transform-gpu will-change-transform"
              variants={card}
            >
              <motion.div
                className="relative w-full aspect-[4/3] overflow-hidden rounded-md transform-gpu will-change-transform"
                variants={imageVariant}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  priority={false}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-contain transition-transform duration-500 ${item.imageScale} ${item.imageHover}`}
                />
              </motion.div>

              <h3 className="font-bold text-xl mt-6 border-b border-black inline-block pb-1">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mt-2">{item.subtitle}</p>

              <div className="mt-6 flex flex-col items-center gap-3">
                <Link
                  href={item.href}
                  target="_blank"
                  className="w-full max-w-[260px] px-6 py-2 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition text-center"
                >
                  {item.button1}
                </Link>
                <Link
                  href={item.detailHref}
                  target="_blank"
                  className="w-full max-w-[260px] px-6 py-2 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition text-center"
                >
                  {item.button2}
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
