import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // === JSON-LD 構造化データ：BreadcrumbList ===
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "HOME",
        item: "https://lit4.net/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "企業情報",
        item: "https://lit4.net/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "事業紹介",
        item: "https://lit4.net/services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "グループ紹介",
        item: "https://lit4.net/group-companies",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "採用情報",
        item: "https://en-gage.net/llc-lit/",
      },
    ],
  };

  return (
    <>
      {/* --- 構造化データを挿入 --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <footer className="bg-[#f9f9f9] text-[#232323] py-14 px-4 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-0 justify-between">
          {/* --- 1カラム目: ブランド --- */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="flex flex-col items-center md:items-start">
              {/* ロゴ */}
              <div className="relative w-44 h-14 mb-4">
                <Image
                  src="/lit-logo.jpg"
                  alt="合同会社LIT ロゴ"
                  fill
                  className="object-contain"
                  sizes="176px"
                  priority
                />
              </div>

              <div className="text-2xl font-extrabold tracking-wide mb-2">
                LLC-LIT
              </div>

              {/* MAPボタン */}
              <div className="flex items-center mb-2">
                <a
                  href="https://maps.google.com/?q=北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-200 hover:bg-neutral-300 text-gray-800 font-bold px-3 py-1 rounded flex items-center gap-1 text-xs shadow transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 12.414A5 5 0 1112.414 13.414l4.243 4.243a1 1 0 101.414-1.414zM15 11a4 4 0 11-8 0 018 0z"
                    />
                  </svg>
                  MAP
                </a>
              </div>

              {/* 住所・TEL・Email */}
              <div className="text-xs text-gray-600 mb-1">
                <a
                  href="https://maps.app.goo.gl/LJ8NvAkpVTGZMLLU6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 underline underline-offset-2 transition"
                >
                  〒063-0061 北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F
                </a>
              </div>
              <div className="text-xs text-gray-600 mb-1">
                TEL:
                <a
                  href="tel:0112156432"
                  className="underline hover:text-blue-600 ml-1 transition"
                >
                  011-215-6432
                </a>
              </div>
              <div className="text-xs text-gray-600 mb-3">
                E-mail:
                <a
                  href="mailto:info@llc-lit.com"
                  className="underline hover:text-blue-600 ml-1 transition"
                >
                  info@llc-lit.com
                </a>
              </div>
            </div>

            {/* --- 下部リンク --- */}
            <div className="mt-5 flex flex-col md:flex-row gap-3 text-xs text-gray-600">
              <Link href="/privacy-policy" className="hover:text-blue-600">
                プライバシーポリシー
              </Link>
              <span className="hidden md:inline">|</span>
              <Link
                href="/disclaimer"
                className="hover:text-blue-600 transition"
              >
                免責事項
              </Link>
              <span className="hidden md:inline">|</span>
              <a
                href="https://www.lit4.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                LLC-LIT 公式サイト
              </a>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              &copy; {currentYear} LLC-LIT. All Rights Reserved.
            </div>
          </div>

          {/* --- 2カラム目: SITEMAP --- */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="uppercase tracking-widest text-sm font-semibold text-gray-700 mb-4">
              SITEMAP
            </div>
            <nav className="flex flex-col gap-2 text-base font-medium">
              <Link href="/" className="hover:text-blue-600 transition">
                HOME
              </Link>
              <Link href="/about" className="hover:text-blue-600 transition">
                企業情報
              </Link>
              <Link href="/services" className="hover:text-blue-600 transition">
                事業紹介
              </Link>
              <Link
                href="/group-companies"
                className="hover:text-blue-600 transition"
              >
                グループ紹介
              </Link>
              <a
                href="https://en-gage.net/llc-lit/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                採用情報
              </a>
            </nav>
          </div>

          {/* --- 3カラム目: ENTRY --- */}
          <div className="flex-1 flex flex-col items-center md:items-end">
            <div className="uppercase tracking-widest text-sm font-semibold text-gray-700 mb-4">
              ENTRY
            </div>
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a
                href="https://en-gage.net/llc-lit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-neutral-200 hover:bg-neutral-300 transition text-gray-800 py-3 rounded-lg font-bold text-lg shadow">
                  採用情報
                </button>
              </a>

              <Link href="/contact" className="block">
                <button className="w-full bg-neutral-200 hover:bg-neutral-300 transition text-gray-800 py-3 rounded-lg font-bold text-lg shadow">
                  お仕事のご依頼はこちら
                </button>
              </Link>

              <Link href="/contact" className="block">
                <button className="w-full bg-neutral-200 hover:bg-neutral-300 transition text-gray-800 py-3 rounded-lg font-bold text-lg shadow">
                  お問い合わせ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
