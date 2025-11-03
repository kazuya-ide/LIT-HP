import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/MyHeader";
import FooterWrapper from "@/app/components/FooterWrapper";

// ✅ SEO・OGP・構造化データ付き設定
export const metadata: Metadata = {
  metadataBase: new URL("https://lit4.net"),
  title: {
    default: "合同会社LIT｜北海道の地域を支えるWeb・警備・開発事業",
    template: "%s｜合同会社LIT",
  },
  description:
    "北海道札幌を拠点に、Web制作・システム開発・警備サービスを通じて地域社会に貢献する合同会社LIT。地域に根ざした信頼と挑戦を軸に、より良い街づくりを支援します。",
  keywords: [
    "合同会社LIT",
    "LIT",
    "北海道",
    "札幌",
    "Web制作",
    "システム開発",
    "警備",
    "地域貢献",
  ],
  openGraph: {
    title: "合同会社LIT｜北海道の地域を支えるWeb・警備・開発事業",
    description:
      "北海道札幌の合同会社LITは、Web制作・システム開発・警備業務で地域に貢献しています。信頼と技術で北海道の未来を支える企業です。",
    url: "https://lit4.net",
    siteName: "合同会社LIT",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "合同会社LIT公式サイト",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "合同会社LIT｜北海道の地域を支えるWeb・警備・開発事業",
    description:
      "北海道札幌の合同会社LITは、Web制作・警備・開発事業で地域社会に貢献しています。",
    images: ["/ogp.jpg"],
    creator: "@lit_official",
  },
  alternates: {
    canonical: "https://lit4.net",
  },
  verification: {
    google: "google-site-verification: google2eba1443f596bc3a.html",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ JSON-LD構造化データ（組織情報）
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "合同会社LIT",
  url: "https://lit4.net",
  logo: "https://lit4.net/logo.png",
  description:
    "北海道札幌を拠点に、Web制作・システム開発・警備事業を通じて地域に貢献する合同会社LITです。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "北海道札幌市西区西町北14丁目1−15 ホクシンビル3F",
    addressLocality: "札幌市",
    postalCode: "063-0061",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+81-11-215-6432",
    contactType: "customer service",
    areaServed: "JP",
    availableLanguage: ["Japanese"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        {/* ✅ 構造化データ挿入 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#ededed] text-[#232323] antialiased min-h-screen font-sans">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
