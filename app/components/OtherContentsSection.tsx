// app/components/OtherContentsFullRow.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const companies = [
  { name: "L.SECURITY", href: "https://l-security-lit.com", img: "/Lsecurity.jpg" },
  { name: "L・Secret Agent", href: "https://l-secret-agent.com", img: "/LSArogo.jpg" },
  { name: "北海工務店", href: "https://hokkai-koumuten.com", img: "/hokkaikoumutenn.logo.jpg" },
  { name: "味扉 AJITO", href: "https://ajito-sapporo.com", img: "/ajito.logo.jpg" },
  { name: "LIT STUDIO", href: "https://lit4.net/litstudio", img: "/litstudio.logo.png" },
];

export default function OtherContentsFullRow() {
  return (
    <section className="w-full bg-white py-12">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold tracking-widest mb-10 bg-gradient-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent">
        GROUP COMPANY
      </h2>

      {/* どの端末でも常に1行5カラムで収める */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-5 gap-4 sm:gap-6 place-items-center">
          {companies.map((c) => (
            <Link key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className="w-full">
              {/* アスペクト比を一定にして高さブレ防止 */}
              <div className="relative w-full aspect-[5/3]">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition"
                  sizes="(max-width: 640px) 20vw, 200px"
                  priority={false}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
