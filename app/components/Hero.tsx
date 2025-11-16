"use client";



const BG_URL = "/Herosection.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[100svh] overflow-hidden [perspective:1400px]"
      aria-label="Hero"
    >
      {/* === ✨ ローカルCSS（globals.css 不要） === */}
      <style>{`
        /* 各ページめくりアニメーション */
        @keyframes turnPage {
          0%   { transform: rotateY(0deg);   }
          45%  { transform: rotateY(-160deg); }
          100% { transform: rotateY(-180deg); }
        }
        .animate-turn {
          animation: turnPage 2s ease-in-out forwards;
        }

        /* 背景のゆっくりパララックス */
        @keyframes panBg {
          0%   { transform: scale(1.05) translateX(0); }
          50%  { transform: scale(1.08) translateX(-1.5%); }
          100% { transform: scale(1.05) translateX(0); }
        }
        .animate-pan {
          animation: panBg 22s ease-in-out infinite;
        }

        /* 光のハイライトライン */
        @keyframes shine {
          0%   { opacity: 0; transform: translateX(-100%) rotate(25deg); }
          50%  { opacity: 0.8; }
          100% { opacity: 0; transform: translateX(120%) rotate(25deg); }
        }
        .animate-shine {
          animation: shine 1.4s ease-out forwards;
        }

        /* キャッチコピー出現 */
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-copy {
          animation: fadeUp 1.2s ease-out forwards;
          animation-delay: 2.1s;
        }

        /* Scroll down の矢印上下 */
        @keyframes scrollArrow {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(6px); }
        }
        .animate-arrow {
          animation: scrollArrow 1.6s ease-in-out infinite;
        }
      `}</style>

      {/* === BG3：最終静止＋パララックス === */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover animate-pan"
        style={{ backgroundImage: `url(${BG_URL})` }}
      />

      {/* === BG2：めくり（2回目） === */}
      <div
        className="absolute inset-0 z-10 bg-center bg-cover origin-right backface-hidden animate-turn"
        style={{ backgroundImage: `url(${BG_URL})`, animationDelay: "3.3s" }}
      >
        {/* 光のエフェクト */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-white/60 blur-xl opacity-0 animate-shine" />
        </div>
      </div>

      {/* === BG1：めくり（1回目） === */}
    <div
  className="absolute inset-0 z-20 bg-center bg-cover origin-right backface-hidden animate-turn"
  style={{
    backgroundImage: `url(${BG_URL})`,
    animationDelay: "0.8s",
  }}
>
        {/* 光のエフェクト */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-white/50 blur-xl opacity-0 animate-shine" />
        </div>
      </div>

      {/* === キャッチコピー === */}
      <div className="absolute bottom-8 left-6 md:bottom-14 md:left-14 pointer-events-none opacity-0 animate-copy">
        <p className="text-white/95 drop-shadow-lg text-2xl md:text-4xl font-semibold tracking-wide">
          LIT GROUP  

        </p>
        <p className="mt-1 text-white/85 text-sm md:text-lg tracking-wide drop-shadow-md">
        ―― LIFE × INNOVATION × TRUST<br/> 信頼が、未来を動かす。
        </p>
      </div>

      {/* === Scroll Down === */}
      <div className="absolute bottom-8 right-6 md:bottom-14 md:right-14 flex items-center gap-2 pointer-events-none select-none">
        <span className="text-white/85 drop-shadow text-xs md:text-sm uppercase tracking-[.25em]">
          scroll down
        </span>
        <svg
          className="size-5 md:size-7 stroke-white animate-arrow"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
