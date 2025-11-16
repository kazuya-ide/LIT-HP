"use client";

import Image from "next/image";
import Link from "next/link";

export default function OtherContents() {
  const companies = [
    { name: "L.SECURITY", href: "https://l-security-lit.com", img: "/Lsecurity.jpg" },
    { name: "L・Secret Agent", href: "https://l-secret-agent.com", img: "/LSArogo.jpg" },
    { name: "北海工務店", href: "https://hokkai-koumuten.com", img: "/hokkaikoumutenn.logo.jpg" },
    { name: "味扉 AJITO", href: "https://ajito-sapporo.com", img: "/ajito.logo.jpg" },
    { name: "LIT STUDIO", href: "https://lit4.net/litstudio", img: "/litstudio.logo.png" },
  ];

  return (
    <section className="w-full bg-white py-16">
      {/* 大きく表示するタイトル */}
      <h2
        className="
          text-center 
          text-5xl md:text-6xl 
          font-extrabold 
          tracking-widest 
          mb-14
          bg-gradient-to-r from-black via-gray-600 to-gray-400 
          bg-clip-text text-transparent
        "
      >
        GROUP COMPANY
      </h2>

      {/* ロゴ一覧（スクロールなし・自動折り返し） */}
      <div className="flex flex-wrap justify-center items-center gap-8 px-4">
        {companies.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative w-40 h-24">
              <Image
                src={c.img}
                alt={c.name}
                fill
                className="object-contain filter grayscale"
                sizes="100%"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
