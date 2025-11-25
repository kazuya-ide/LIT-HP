import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// ========================
// SEO
// ========================
export const metadata: Metadata = {
  title: "採用情報｜合同会社LIT",
  description:
    "合同会社LITの採用情報ページ。警備（正社員・アルバイト）を中心に、探偵・IT・飲食など多事業の求人情報を掲載しています。",
  alternates: { canonical: "https://lit4.net/recruit" },
};

// ========================
// カードデータ
// ========================
const recruitItems = [
  {
    title: "【正社員】総合警備スタッフ",
    category: "Lsecurity（警備事業）",
    slug: "security/fulltime",
    thumbnail: "/security-fulltime-thumb.jpg",
    description: "北海道No.1を目指す総合警備会社の中核メンバー募集。",
  },
  {
    title: "【アルバイト】交通誘導スタッフ",
    category: "Lsecurity（警備事業）",
    slug: "security/parttime",
    thumbnail: "/security-parttime-thumb.jpg",
    description: "時給1,500円・日給12,000円の働きやすい警備バイト。",
  },
];

export default function RecruitTop() {
  return (
    <main className="bg-neutral-50 min-h-screen py-20 px-6">
      {/* ------------------ */}
      {/* タイトル */}
      {/* ------------------ */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-wide">
        採用情報
      </h1>

      {/* ------------------ */}
      {/* カード一覧 */}
      {/* ------------------ */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {recruitItems.map((item) => (
          <Link
            key={item.slug}
            href={`/recruit/${item.slug}`}
            className="group bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* サムネイル画像 */}
            <div className="relative h-60 w-full overflow-hidden">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
            </div>

            {/* テキスト部分 */}
            <div className="p-6 space-y-2">
              <p className="text-sm text-gray-500">{item.category}</p>

              <h2 className="text-xl font-semibold group-hover:text-blue-600 transition">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* ------------------ */}
      {/* 事業追加余白 */}
      {/* ------------------ */}
      <div className="max-w-6xl mx-auto mt-20 text-center text-gray-400">
        ※ 今後、探偵・飲食・建設・ITなど他事業の求人も追加予定
      </div>
    </main>
  );
}
