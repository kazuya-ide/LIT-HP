// /lib/seo.ts
import type { Metadata } from "next";

/**
 * 各ページのSEO設定を自動生成する関数
 * @param title ページタイトル
 * @param description ページ説明文
 * @param path ページのパス（例: "/about"）
 * @param image OGP画像（任意）→ 未指定なら default-ogp.jpg を使用
 */
export function createMetadata({
  title,
  description,
  path,
  image = "/default-ogp.jpg",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const baseUrl = "https://www.lit4.net";

  return {
    title: `${title}｜合同会社LIT【札幌の建設・警備・IT・飲食事業】`,
    description,
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    openGraph: {
      title: `${title}｜合同会社LIT`,
      description,
      url: `${baseUrl}${path}`,
      siteName: "合同会社LIT",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: `${title}｜合同会社LIT`,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      images: [`${baseUrl}${image}`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
