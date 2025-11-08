import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getColumnBySlug, getAllColumns } from "@/lib/column";
import { remark } from "remark";
import html from "remark-html";

export default async function ColumnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getColumnBySlug(slug);
  } catch {
    return notFound();
  }

  const processed = await remark().use(html).process(post.content);
  const contentHtml = processed.toString();

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-[#232323] py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-200 p-10">
        <Link
          href="/column"
          className="text-sm font-semibold text-gray-600 hover:text-gray-900 mb-6 inline-block"
        >
          ← コラム一覧へ戻る
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          {post.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{post.date}</p>

        {post.image && (
          <div className="relative w-full h-64 md:h-96 mb-10 rounded-xl overflow-hidden shadow">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        <div
          className="prose prose-gray max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const columns = getAllColumns();
  return columns.map((n) => ({ slug: n.slug }));
}
