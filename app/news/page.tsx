import Link from "next/link";
import Image from "next/image";
import { getAllNews } from "@/lib/news";

export default function NewsPage() {
  const news = getAllNews();

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-[#232323] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* === 見出し === */}
        <h1 className="text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          お知らせ
        </h1>

        {/* === 記事リスト === */}
        <div className="grid gap-10 md:grid-cols-2">
          {news.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group block bg-white border border-gray-300 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {item.image && (
                <div className="relative w-full h-48 overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(item.date).toLocaleDateString("ja-JP", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-xl font-bold mb-2 group-hover:text-gray-700 transition">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
