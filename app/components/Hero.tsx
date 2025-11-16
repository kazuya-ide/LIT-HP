// app/components/Hero.tsx
"use client";

import { useEffect, useState } from "react";

const BG_URL = "/Herosection.jpg";

export default function Hero() {
  const [ready, setReady] = useState(false);

  // 画像プリロード後にアニメ開始
  useEffect(() => {
    const img = new Image();
    img.src = BG_URL;
    if (img.complete) setReady(true);
    else {
      img.onload = () => setReady(true);
      img.onerror = () => setReady(true); // 失敗時も崩さない
    }
  }, []);

  return (
    <section className="w-full" aria-label="Hero">
      <style>{`
        .will-transform { will-change: transform; }
        .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; transform-style: preserve-3d; }

        /* めくり（ゆっくり） */
        @keyframes turnPage {
          0%   { transform: rotateY(0deg); }
          45%  { transform: rotateY(-160deg); }
          100% { transform: rotateY(-180deg); }
        }
        /* 各レイヤーの回転時間を 2.4s に */
        .animate-turn { animation: turnPage var(--dur,2.4s) ease-in-out forwards; }

        /* 光筋 */
        @keyframes shine {
          0%   { opacity: 0; transform: translateX(-120%) rotate(25deg); }
          50%  { opacity: .8; }
          100% { opacity: 0; transform: translateX(140%) rotate(25deg); }
        }
        .animate-shine { animation: shine 1.3s ease-out forwards; }

        /* テキスト出現（前倒し） */
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-copy { animation: fadeUp .6s ease-out forwards; }

        @media (prefers-reduced-motion: reduce) {
          .animate-turn, .animate-shine, .animate-copy { animation: none !important; }
        }
      `}</style>

      {/* 画像ブロック（切り抜きなし / 高さは画像で決定） */}
      <figure className="relative w-full overflow-hidden">
        {/* ベース画像（高さの基準） */}
        <img
          src={BG_URL}
          alt=""
          className="block w-full h-auto object-contain select-none"
          draggable={false}
          decoding="async"
        />

        {/* ロード後のみ：3回めくり（ベース画像の上に重ねる） */}
        {ready && (
          <>
            {/* 1枚目（最前面） */}
            <TurnLayer z="z-30" delay="0.4s" shine="0.55" />
            {/* 2枚目 */}
            <TurnLayer z="z-20" delay="3.0s" shine="0.60" />
            {/* 3枚目 */}
            <TurnLayer z="z-10" delay="5.6s" shine="0.65" />
          </>
        )}
      </figure>

      {/* テキスト（画像の下）— 表示を早める */}
      <div
        className="max-w-5xl mx-auto px-6 md:px-8 pt-5 md:pt-7 opacity-0 animate-copy"
        style={{ animationDelay: ready ? "0.9s" : "0s" }}
      >
        <h1 className="text-2xl md:text-4xl font-semibold tracking-wide text-[#111]">
          LIT 
        </h1>
        <p className="mt-2 text-sm md:text-lg text-[#444] leading-relaxed">
          ―― LIFE × INNOVATION × TRUST<br />
          信頼が、未来を動かす。
        </p>
      </div>

      {/* スクロールダウン（テキストのさらに下） */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-2 pt-6 md:pt-8 pb-8 select-none">
          <span className="text-xs md:text-sm uppercase tracking-[.25em] text-gray-600">
            scroll down
          </span>
          <svg
            className="size-5 md:size-6 stroke-gray-700"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* ===== サブコンポーネント ===== */

function TurnLayer({
  z,
  delay,
  shine = "0.6",
}: {
  z: string;
  delay: string;
  shine?: string;
}) {
  return (
    <div
      className={`absolute inset-0 ${z} origin-right backface-hidden will-transform pointer-events-none animate-turn`}
      style={{ animationDelay: delay } as React.CSSProperties}
      aria-hidden="true"
    >
      {/* 重ねる画像（containで切り抜き無し） */}
      <img
        src={BG_URL}
        alt=""
        className="block w-full h-full object-contain select-none"
        draggable={false}
        decoding="async"
      />

      {/* 光エフェクト（控えめ） */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-2 h-full bg-white blur-xl opacity-0 animate-shine"
          style={{ opacity: shine as unknown as number }}
        />
      </div>
    </div>
  );
}
