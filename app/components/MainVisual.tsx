// app/components/MainVisual.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function MainVisual() {
  const reduce = useReducedMotion();

  // 画像の緩いパララックス
  const imgRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -12]);

  // テキスト全体を画面外から一括スライド
  const textWhole = {
    hidden: { opacity: 0, x: "-30vw" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        mass: 0.9,
      },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.985, x: 24 },
    show: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 0.35,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const badgeVariant = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.65, duration: 0.4 },
    },
  };

  return (
    <section className="relative w-full bg-white pt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 min-h-[80vh]">
        {/* 左：テキスト（全体一括） */}
        <motion.div
          className="flex flex-col justify-center px-6 md:px-12 py-16 bg-white text-[#232323]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={textWhole}
        >
          <h1 className="text-3xl md:text-5xl font-medium leading-relaxed mb-8">
            北海道の「安全」と「真実」を     守り抜くために。
            <br className="hidden md:block" />
       
          </h1>

          <p className="text-[15px] leading-7 text-gray-700 mb-10">
            公安委員会の認定を受け、警察OBや元刑事が複数在籍する専門チームが、<br />
            地域を守り、調査を支えています。<br />
            <br />
            経験に裏打ちされた判断力と、最先端AIテクノロジーを掛け合わせ、<br />
            監視・分析・調査・対応のすべてをより正確に、より迅速に。<br />
            <br />
            「安全が見える世界」<br />
            「真実が手に届く未来」<br />
            北海道を生きるすべての人のため、<br />
            私たち合同会社LITは進化し続けます。
          </p>

          <motion.div
            whileHover={{ y: reduce ? 0 : -2, boxShadow: reduce ? undefined : "0 8px 24px rgba(0,0,0,0.12)" }}
            whileTap={{ scale: reduce ? 1 : 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-block rounded-full"
          >
            <Link
              href="/about"
              className="inline-block border border-[#232323] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#232323] hover:text-white transition"
            >
              LITについて詳しく →
            </Link>
          </motion.div>
        </motion.div>

        {/* 右：写真 */}
        <motion.div
          ref={imgRef}
          className="relative w-full h-[60vh] md:h-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={imageVariant}
          style={{ y: parallaxY }}
        >
          <Image
            src="/mainvisuaru.jpg"
            alt="合同会社LIT - セキュリティ・調査・AIテクノロジー"
            fill
            className="object-cover"
            priority
          />

          {/* 右下黒ボックス */}
          <motion.div
            className="absolute bottom-6 right-6 bg-black text-white p-4 bg-opacity-80 backdrop-blur-sm"
            variants={badgeVariant}
          >
            <p className="text-sm font-bold tracking-wide">SECURITY × INTELLIGENCE</p>
            <p className="text-xs opacity-80 leading-relaxed">
              公安委員会認定 業務<br />
              警察OB・元刑事 在籍<br />
              AI映像解析・先進監視技術
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
