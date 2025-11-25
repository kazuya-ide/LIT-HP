// app/components/Header/MyHeader.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

type ServiceCardProps = {
  href: string;
  title: string;
  subtitle: string;
  src: string;
  grad: string;
};

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "企業情報", href: "/about" },
  { label: "事業紹介", href: "/services" },
  { label: "実績紹介", href: "/works" },
  { label: "ニュース", href: "/news" },
  { label: "採用情報", href: "/recruit" },
];

const rightButtons = [{ label: "お問い合わせ", href: "/contact" }];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (isMenuOpen) document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setIsMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isMenuOpen]);

  useEffect(() => { if (isMenuOpen) closeBtnRef.current?.focus(); }, [isMenuOpen]);

  const headerBg = "bg-white border-gray-200";

  return (
    <header className={`fixed top-0 w-full z-[1000] shadow-sm border-b transition-colors duration-300 ${headerBg}`}>
      {/* 高さ：SP 44px / PC 80px */}
      <div className="mx-auto max-w-[1440px] flex items-center justify-between h-11 md:h-20 px-4 md:px-6">
        {/* ロゴ */}
        <Link href="/" className="flex items-center gap-2 min-w-[120px] md:min-w-[150px]">
          <div className="relative w-8 h-8 md:w-10 md:h-10">
            <Image src="/lit-logo.jpg" alt="合同会社LIT ロゴ" fill className="object-contain" sizes="(max-width:768px) 32px, 40px" priority />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-[#222]">
            LLC-LIT
          </span>
        </Link>

        {/* PCナビ（SPは非表示） */}
        <nav className="hidden lg:flex items-center gap-6 text-base font-bold tracking-wide text-[#232323] relative">
          {navLinks.map(({ label, href }) =>
            label === "事業紹介" ? (
              <div key={href} className="relative group">
                <Link
                  href={href}
                  className={`px-1 py-2 transition-colors ${pathname === href ? "text-black underline underline-offset-4" : "hover:text-[#666]"}`}
                >
                  {label}
                </Link>
                <div className="absolute left-0 top-full hidden group-hover:grid grid-cols-2 md:grid-cols-3 gap-4 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl p-6 w-[780px] rounded-2xl z-50 transition-all duration-300">
                  <ServiceCard href="https://l-security-lit.com" title="L.SECURITY" subtitle="警備・機械警備サービス" src="/Lsecurity.jpg" grad="from-blue-900/80 via-blue-700/50 to-transparent" />
                  <ServiceCard href="https://lsa.lit4.net" title="L・Secret Agent" subtitle="探偵・調査・身辺警護サービス" src="/LSArogo.jpg" grad="from-gray-900/80 via-gray-700/50 to-transparent" />
                  <ServiceCard href="https://www.sapporo-builderr.com/" title="北海工務店" subtitle="建設・住宅施工・リフォーム" src="/hokkaikoumutenn.logo.jpg" grad="from-amber-800/80 via-yellow-600/50 to-transparent" />
                  <ServiceCard href="https://www.hotpepper.jp/strJ003324016/" title="味扉 AJITO" subtitle="飲食・創作料理・すすきの" src="/ajito.logo.jpg" grad="from-rose-800/80 via-red-500/50 to-transparent" />
                  <ServiceCard href="https://lit-studio-hp.vercel.app/" title="LIT STUDIO" subtitle="Web制作・映像制作" src="/litstudio.logo.png" grad="from-indigo-800/80 via-purple-600/50 to-transparent" />
                </div>
              </div>
            ) : (
              <Link
                key={href}
                href={href}
                target={href.includes("http") ? "_blank" : "_self"}
                rel={href.includes("http") ? "noopener noreferrer" : undefined}
                className={`px-1 py-2 transition-colors ${pathname === href ? "text-black underline underline-offset-4" : "hover:text-[#666]"}`}
              >
                {label}
              </Link>
            )
          )}
        </nav>

        {/* お問い合わせ（PCのみ） */}
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

        {/* ハンバーガー（SPのみアイコン小さめ） */}
        <button
          className="block lg:hidden ml-2"
          onClick={() => setIsMenuOpen(true)}
          aria-label="メニューを開く"
        >
          <svg width={28} height={28} fill="none" stroke="#232323" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* モバイルメニュー（Portal / 40vw 固定 + 最小幅 260px） */}
      {mounted && isMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-[9999] bg-gray-200/80" onClick={() => setIsMenuOpen(false)} aria-hidden={!isMenuOpen}>
            <aside
              className="fixed right-0 top-0 h-full w-[40vw] min-w-[260px] bg-white text-[#1f2937] border-l border-neutral-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="モバイルメニュー"
            >
              {/* トップバー：SP 44px */}
              <div className="h-11 px-4 flex items-center justify-between bg-white border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="relative block w-6 h-6">
                    <Image src="/lit-logo.jpg" alt="合同会社LIT" fill className="object-contain" sizes="24px" priority />
                  </span>
                  <span className="text-sm font-extrabold tracking-tight text-[#111]">LLC-LIT</span>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="閉じる"
                  className="rounded-full p-1.5 hover:bg-gray-100 transition"
                >
                  <svg width={20} height={20} viewBox="0 0 24 24" stroke="#111" strokeWidth={2} fill="none" aria-hidden="true">
                    <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* リスト */}
              <nav className="h-[calc(100vh-44px)] overflow-y-auto px-3 py-3">
                <ul className="space-y-2">
                  {navLinks.map(({ label, href }) => {
                    const active = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
                    return (
                      <li key={href}>
                        <Link
                          href={href}
                          target={href.includes("http") ? "_blank" : "_self"}
                          rel={href.includes("http") ? "noopener noreferrer" : undefined}
                          onClick={() => setIsMenuOpen(false)}
                          className={`group flex items-center justify-between rounded-md px-3 py-2.5 ring-1 transition
                            focus:outline-none focus:ring-2
                            ${active ? "bg-gray-50 text-[#111] ring-neutral-200" : "bg-white text-[#1f2937] ring-neutral-200 hover:bg-gray-50"}`}
                        >
                          <span className="text-[15px] font-bold tracking-wide">{label}</span>
                          <svg width={16} height={16} viewBox="0 0 24 24" stroke="#4b5563" strokeWidth={2} fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <div className="mt-4 px-1">
                  {rightButtons.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full text-center rounded-full bg-black text-white py-2.5 text-sm font-bold shadow hover:shadow-md hover:brightness-110 transition"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </nav>
            </aside>
          </div>,
          document.body
        )}
    </header>
  );
};

const ServiceCard = ({ href, title, subtitle, src, grad }: ServiceCardProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative flex flex-col justify-end p-4 h-48 rounded-xl overflow-hidden group/item shadow hover:shadow-2xl transition-all"
  >
    <Image src={src} alt={title} fill className="object-cover opacity-80 group-hover/item:scale-105 transition-transform duration-500" />
    <div className={`absolute inset-0 bg-gradient-to-t ${grad}`} />
    <span className="text-white font-bold text-lg relative z-10">{title}</span>
    <span className="text-gray-200 text-sm relative z-10">{subtitle}</span>
  </Link>
);

export default Header;
