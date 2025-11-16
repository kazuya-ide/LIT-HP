// app/components/LitStorySection.tsx
import Image from "next/image";
import Link from "next/link";

export default function LitStorySection() {
  const mainStory = {
  img: "/ajito.logo.jpg",
    tag: "MADE IN 北海道",
    title: "地域の力を未来へ。LITが考える街づくりと暮らし",
    date: "2025.11.10",
    href: "/story/main",
  };

  const subStories = [
    {
    img: "/ajito.logo.jpg",
      tag: "暮らしのレポート",
      title: "地域に根ざした安心をつくる、LITの警備サービス",
      date: "2025.10.27",
      href: "/story/security",
      isNew: true,
    },
    {
     img: "/ajito.logo.jpg",
      tag: "暮らしのレポート",
      title: "建設×ITで支える、これからのまちづくり",
      date: "2025.10.14",
      href: "/story/construction-it",
    },
    {
  img: "/ajito.logo.jpg",
      tag: "暮らしのレポート",
      title: "地域とともに歩むLITの取り組みとその未来",
      date: "2024.12.27",
      href: "/story/community",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* 見出し */}
        <div className="mb-12">
          <p className="text-sm text-gray-600 mb-2">― LITストーリー</p>
          <h2 className="text-4xl font-bold tracking-tight">LIT STORY</h2>
        </div>

        {/* メイン＋サイド構成 */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* === メインストーリー === */}
          <div>
            <Link href={mainStory.href} className="block group">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={mainStory.img}
                  alt={mainStory.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* NEWラベル */}
                <span className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1">
                  NEW
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {mainStory.tag}
                </span>
                <span className="text-sm text-gray-500">{mainStory.date}</span>
              </div>

              <h3 className="mt-3 text-lg md:text-xl font-bold text-[#232323] leading-snug group-hover:underline">
                {mainStory.title}
              </h3>
            </Link>
          </div>

          {/* === サブストーリー === */}
          <div className="flex flex-col gap-8">
            {subStories.map((story) => (
              <Link
                key={story.title}
                href={story.href}
                className="flex items-start gap-5 group"
              >
                <div className="relative w-40 h-28 shrink-0 overflow-hidden">
                  <Image
                    src={story.img}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {story.isNew && (
                    <span className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-2 py-0.5">
                      NEW
                    </span>
                  )}
                </div>

                <div className="flex-1">
                  <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {story.tag}
                  </span>
                  <h4 className="font-medium text-[#232323] text-sm md:text-base leading-snug mb-1 group-hover:underline">
                    {story.title}
                  </h4>
                  <p className="text-xs text-gray-500">{story.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 一覧ボタン */}
        <div className="mt-14 text-center">
          <Link
            href="/story"
            className="inline-block border border-[#232323] rounded-full px-8 py-3 text-sm font-medium hover:bg-[#232323] hover:text-white transition"
          >
            LITストーリー一覧 →
          </Link>
        </div>
      </div>
    </section>
  );
}
