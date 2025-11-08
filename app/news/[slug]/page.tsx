// app/news/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getNewsBySlug, getAllNews } from "@/lib/news";
import { remark } from "remark";
import html from "remark-html";

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Next.js 15では params は Promise 型
  const { slug } = await params;

  let post;
  try {
    post = getNewsBySlug(slug);
  } catch {
    return notFound();
  }

  // ✅ Markdown本文 → HTML変換
  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  // ✅ 他の記事一覧（自分以外）
  const others = getAllNews().filter((n) => n.slug !== slug);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-10 px-4 text-[#232323]">
      <div className="max-w-3xl mx-auto">
        {/* === 記事本文 === */}
        <article className="bg-white/95 rounded-2xl shadow-xl px-6 py-10 relative border border-gray-300">
          <div className="mb-5">
            <Link
              href="/news"
              className="text-gray-700 text-sm hover:text-gray-900 flex items-center gap-1 transition"
            >
              <svg
                className="inline w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              お知らせ一覧へ戻る
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 leading-tight">
            {post.title}
          </h1>

          <div className="text-xs text-gray-500 mb-6">
            {new Date(post.date).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>

          {post.image && (
            <div className="w-full h-56 md:h-80 relative rounded-lg overflow-hidden mb-8 shadow border border-gray-200">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          )}

          <div
            className="prose prose-gray max-w-none text-gray-700 text-base leading-relaxed"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        {/* === 他のお知らせ === */}
        {others.length > 0 && (
          <aside className="mt-10 bg-white/80 backdrop-blur-md rounded-xl shadow px-6 py-6 border border-gray-300">
            <h2 className="font-bold text-gray-800 text-lg mb-4">
              他のお知らせ
            </h2>
            <ul className="flex flex-col gap-2">
              {others.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/news/${n.slug}`}
                    className="text-gray-600 hover:text-gray-900 transition"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}

// ✅ 静的生成（SSG）
export async function generateStaticParams() {
  const news = getAllNews();
  return news.map((n) => ({ slug: n.slug }));
}
