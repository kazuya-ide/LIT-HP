import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo"; // ✅ 追加
import AboutClient from "./AboutClient";

// ✅ createMetadata を使って SEOを簡潔に記述
export const metadata: Metadata = createMetadata({
  title: "会社概要",
  description:
    "合同会社LITの会社概要ページ。北海道札幌を拠点に建設・警備・IT・飲食事業を展開し、地域社会に貢献しています。企業理念・代表挨拶・法人情報などを掲載。",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="bg-[#f8f8f8] text-[#232323]">
      <main className="pt-20 md:pt-28">
        <AboutClient />
      </main>
    </div>
  );
}
