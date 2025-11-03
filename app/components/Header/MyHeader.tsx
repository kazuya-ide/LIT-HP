"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

// === ナビメニュー ===
const navLinks = [
  { label: "HOME", href: "/" },
  { label: "企業情報", href: "/about" },
  { label: "事業紹介", href: "/services" },
  { label: "グループ紹介", href: "/group-companies" },
  {
    label: "採用情報",
    href: "https://en-gage.net/llc-lit/", // ✅ 外部サイトへ変更
    external: true,
  },
];

// === 右側ボタン ===
const rightButtons = [{ label: "お問い合わせ", href: "/contact" }];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // === ページによる背景色切り替え ===
  const headerBg =
    pathname === "/lsa"
      ? "bg-emerald-50/90 border-emerald-300"
      : "bg-[#ededed]/90 border-gray-300";

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur shadow-sm border-b transition-colors duration-300 ${headerBg}`}
    >
      <div className="mx-auto max-w-[1440px] flex items-center justify-between h-20 px-6">
        {/* --- ロゴ --- */}
        <Link href="/" className="flex items-center gap-3 min-w-[150px]">
          <div className="relative w-10 h-10">
            <Image
              src="/lit-logo.jpg"
              alt="合同会社LIT ロゴ"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#222]">
            LLC-LIT
          </span>
        </Link>

        {/* --- PCナビ --- */}
        <nav className="hidden lg:flex items-center gap-6 text-base font-bold tracking-wide text-[#232323]">
          {navLinks.map(({ label, href, external }) => (
            <Link
              key={href}
              href={href}
              className={`px-1 py-2 transition-colors ${
                pathname === href
                  ? "text-black underline underline-offset-4"
                  : "hover:text-[#666]"
              }`}
              target={external ? "_blank" : "_self"} // ✅ 外部リンクは新規タブで開く
              rel={external ? "noopener noreferrer" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* --- 右側ボタン --- */}
        <div className="hidden lg:flex gap-3">
          {rightButtons.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="rounded-full border border-gray-300 bg-white px-5 py-2 font-bold text-sm text-[#232323] shadow-md hover:bg-[#232323] hover:text-white hover:shadow-lg transition-all duration-150"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* --- ハンバーガーメニュー --- */}
        <button
          className="block lg:hidden ml-2"
          onClick={() => setIsMenuOpen(true)}
          aria-label="メニューを開く"
        >
          <svg
            width={32}
            height={32}
            fill="none"
            stroke="#232323"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* --- モバイルメニュー --- */}
      <div
        className={`fixed inset-0 z-[99] bg-black bg-opacity-40 transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden
      >
        <nav
          className={`absolute right-0 top-0 h-full w-[75vw] max-w-sm ${
            pathname === "/lsa" ? "bg-emerald-100" : "bg-[#ededed]"
          } p-8 pt-24 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-7 right-7"
            onClick={() => setIsMenuOpen(false)}
            aria-label="閉じる"
          >
            <svg
              width={28}
              height={28}
              viewBox="0 0 24 24"
              stroke="#222"
              strokeWidth={2}
            >
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex flex-col gap-6">
            {navLinks.map(({ label, href, external }) => (
              <Link
                key={href}
                href={href}
                className={`text-lg font-bold py-2 ${
                  pathname === href
                    ? "text-black underline"
                    : "text-[#232323] hover:text-black"
                }`}
                onClick={() => setIsMenuOpen(false)}
                target={external ? "_blank" : "_self"}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {label}
              </Link>
            ))}

            <div className="mt-6 flex flex-col gap-2">
              {rightButtons.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-gray-300 bg-white px-5 py-2 font-bold text-[#232323] shadow hover:bg-[#232323] hover:text-white transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
