"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "企業情報", href: "/about" },
  { label: "事業紹介", href: "/services" },
  { label: "実績紹介", href: "/works" },
  { label: "ニュース", href: "/news" },
  { label: "採用情報", href: "https://en-gage.net/llc-lit/" }, // 統一
];

const rightButtons = [{ label: "お問い合わせ", href: "/contact" }];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerBg =
    pathname === "/lsa"
      ? "bg-emerald-50/90 border-emerald-300"
      : "bg-[#ededed]/90 border-gray-300";

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md shadow-sm border-b transition-colors duration-300 ${headerBg}`}
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
        <nav className="hidden lg:flex items-center gap-6 text-base font-bold tracking-wide text-[#232323] relative">
          {navLinks.map(({ label, href }) =>
            label === "事業紹介" ? (
              <div key={href} className="relative group">
                {/* メインボタン */}
                <Link
                  href={href}
                  className={`px-1 py-2 transition-colors ${
                    pathname === href
                      ? "text-black underline underline-offset-4"
                      : "hover:text-[#666]"
                  }`}
                >
                  {label}
                </Link>

                {/* === ドロップダウン === */}
                <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-2 md:grid-cols-3 gap-4 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl p-6 w-[780px] rounded-2xl z-50 transition-all duration-300">
                  <ServiceCard
                    href="https://l-security-lit.com"
                    title="L.SECURITY"
                    subtitle="警備・機械警備サービス"
                    src="/Lsecurity.jpg"
                    grad="from-blue-900/80 via-blue-700/50 to-transparent"
                  />
                  <ServiceCard
                    href="https://lsa.lit4.net"
                    title="L・Secret Agent"
                    subtitle="探偵・調査・身辺警護サービス"
                    src="/LSArogo.jpg"
                    grad="from-gray-900/80 via-gray-700/50 to-transparent"
                  />
                  <ServiceCard
                    href="https://www.sapporo-builderr.com/"
                    title="北海工務店"
                    subtitle="建設・住宅施工・リフォーム"
                    src="/hokkaikoumutenn.logo.jpg"
                    grad="from-amber-800/80 via-yellow-600/50 to-transparent"
                  />
                  <ServiceCard
                    href="https://www.hotpepper.jp/strJ003324016/"
                    title="味扉 AJITO"
                    subtitle="飲食・創作料理・すすきの"
                    src="/ajito.logo.jpg"
                    grad="from-rose-800/80 via-red-500/50 to-transparent"
                  />
                  <ServiceCard
                    href="https://lit-studio-hp.vercel.app/"
                    title="LIT STUDIO"
                    subtitle="Web制作・映像制作"
                    src="litstudio.logo.png"
                    grad="from-indigo-800/80 via-purple-600/50 to-transparent"
                  />
                </div>
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                target={href.includes("http") ? "_blank" : "_self"}
                rel={href.includes("http") ? "noopener noreferrer" : undefined}
                className={`px-1 py-2 transition-colors ${
                  pathname === href
                    ? "text-black underline underline-offset-4"
                    : "hover:text-[#666]"
                }`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* --- お問い合わせボタン --- */}
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

        {/* --- ハンバーガー --- */}
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
      >
        <nav
          className={`absolute right-0 top-0 h-full w-[75vw] max-w-sm bg-white text-[#232323] p-8 pt-24 shadow-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 閉じる */}
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
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                target={href.includes("http") ? "_blank" : "_self"}
                rel={href.includes("http") ? "noopener noreferrer" : undefined}
                className={`text-lg font-bold py-2 ${
                  pathname === href
                    ? "text-black underline"
                    : "text-[#232323] hover:text-black"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            {/* --- 事業紹介サブ項目 --- */}
            <div className="mt-4">
              <p className="font-bold mb-2 text-[#232323]">事業一覧</p>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://l-security-lit.com"
                  target="_blank"
                  className="text-sm hover:text-emerald-700"
                >
                  L-SECURITY（警備）
                </Link>
                <Link
                  href="https://lsa.lit4.net"
                  target="_blank"
                  className="text-sm hover:text-emerald-700"
                >
                  L・Secret Agent（探偵）
                </Link>
                <Link
                  href="https://www.sapporo-builderr.com/"
                  target="_blank"
                  className="text-sm hover:text-emerald-700"
                >
                  北海工務店（建設）
                </Link>
                <Link
                  href="https://www.hotpepper.jp/strJ003324016/"
                  target="_blank"
                  className="text-sm hover:text-emerald-700"
                >
                  味扉（飲食）
                </Link>
                <Link
                  href="https://lit-studio-hp.vercel.app/"
                  target="_blank"
                  className="text-sm hover:text-emerald-700"
                >
                  LIT STUDIO（IT）
                </Link>
              </div>
            </div>

            {/* --- お問い合わせ --- */}
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

/* --- サービスカード（PCドロップダウン用） --- */
const ServiceCard = ({ href, title, subtitle, src, grad }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex flex-col justify-end p-4 h-48 rounded-xl overflow-hidden group/item shadow hover:shadow-2xl transition-all"
  >
    <Image
      src={src}
      alt={title}
      fill
      className="object-cover opacity-80 group-hover/item:scale-105 transition-transform duration-500"
    />
    <div className={`absolute inset-0 bg-gradient-to-t ${grad}`} />
    <span className="text-white font-bold text-lg relative z-10">{title}</span>
    <span className="text-gray-200 text-sm relative z-10">{subtitle}</span>
  </Link>
);

export default Header;
