import type { Metadata } from "next";
import Hero from "./Hero";
import Philosophy from "./Philosophy";
import Businesses from "./Businesses";
import Overview from "./Overview";
import License from "./License";
import SEOJsonLD from "./SEOJsonLD";

export const metadata: Metadata = {
  title: "会社概要｜合同会社LIT",
  description:
    "合同会社LITの会社概要ページ。北海道札幌を拠点に建設・警備・IT・飲食事業を展開し、地域社会に貢献しています。企業理念や事業内容、法人情報を掲載。",
  alternates: {
    canonical: "https://www.lit4.net/about",
  },
  openGraph: {
    title: "会社概要｜合同会社LIT",
    description:
      "北海道札幌を拠点に地域社会と共に成長する合同会社LITの紹介ページです。",
    url: "https://www.lit4.net/about",
    siteName: "合同会社LIT",
    images: [
      {
        url: "https://www.lit4.net/ogp-about.jpg",
        width: 1200,
        height: 630,
        alt: "合同会社LIT 会社概要",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.lit4.net/ogp-about.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#f8f8f8] text-[#232323]">
      <SEOJsonLD />
      <main className="pt-20 md:pt-28">
        <Hero />
        <Philosophy />
        <Businesses />
     
        <Overview />
        <License />
      </main>
    </div>
  );
}
