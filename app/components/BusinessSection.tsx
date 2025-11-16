"use client";

import Image from "next/image";
import Link from "next/link";

export default function BusinessSection() {
  const services = [
    {
      title: "警備事業",
      desc: "機械警備・常駐警備・巡回など、地域の安全を守ります。",
      img: "/Lsecurity.jpg", // ← 各事業に合わせた画像を指定
      link: "/services/security",
    },
    {
      title: "建設事業",
      desc: "住宅・商業施設・公共工事など幅広く対応いたします。",
      img: "/hokkaikoumutenn.logo.jpg",
      link: "/services/construction",
    },
    {
      title: "IT・デジタル事業",
      desc: "HP制作・システム開発・デジタルサイネージを提供。",
      img: "/litstudio.logo.png",
      link: "/services/it",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-10 text-center tracking-wide">
          事業紹介
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={`${s.title}-${i}`}
              className="p-6 border rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-500 bg-white"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-md">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <h3 className="font-bold text-lg mt-6 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              <Link
                href={s.link}
                className="text-blue-600 text-sm mt-3 inline-block hover:underline"
              >
                詳しく見る →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
