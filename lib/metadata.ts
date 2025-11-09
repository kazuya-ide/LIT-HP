import type { Metadata } from "next";

/**
 * 各ページのSEO・OGPメタデータを自動生成する共通関数
 * 
 * @param title ページタイトル（例: "会社概要"）
 * @param description ページの説明文
 * @param path URLパス（例: "/about"）
 * @param image OGP画像のパス（例: "/ogp-about.jpg"）
 */
export function createPageMetadata({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const baseUrl = "https://www.lit4.net";
  const imageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/default-ogp.jpg`;

  return {
    title: `${title}｜合同会社LIT`,
    description,
    keywords: ["合同会社LIT", "札幌", "警備", "建設", "IT", "飲食", title],
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${title}｜合同会社LIT`,
      description,
      url: `${baseUrl}${path}`,
      siteName: "合同会社LIT",
      images: [
        {
          url: imageUrl,
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
      site: "@lit4_net",
      creator: "@lit4_net",
      images: [imageUrl],
    },
  };
}
