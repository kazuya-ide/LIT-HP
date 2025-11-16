// ./app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header/MyHeader";
import FooterWrapper from "@/app/components/FooterWrapper";
import Script from "next/script"; // GA & JSON-LD を next/script で管理

// ✅ メタデータ（SEO / OGP / SNS対応）
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
      { url: "/default-ogp.jpg", width: 1200, height: 630, alt: "合同会社LIT公式サイト" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "合同会社LIT｜北海道の地域を支えるWeb・警備・開発事業",
    description:
      "北海道札幌の合同会社LITは、Web制作・警備・開発事業で地域社会に貢献しています。",
    images: ["/default-ogp.jpg"],
    creator: "@lit_official",
  },
  alternates: { canonical: "https://lit4.net" },
  icons: { icon: "/favicon.ico" },
};

// ✅ JSON-LD 構造化データ（Organization）
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // なぜ: 本番でIDを秘匿しやすくし、環境差分にも対応
  const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-ZVXV0K9HJC";

  return (
    <html lang="ja">
      <head>
        {/* ✅ JSON-LD（Lint対策：next/scriptを使用） */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* ✅ Google Analytics 4（Lint対策：next/script） */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </head>

      <body className="bg-[#f7f7f7] text-[#232323] antialiased min-h-screen font-sans">
        {/* ✅ 固定ヘッダー分の余白をレイアウト側で吸収
            SP: 44px + 安全域 / PC: 80px 固定 */}
        <div className="
            pt-[calc(env(safe-area-inset-top)+44px)]
            md:pt-20
          ">
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <FooterWrapper />
        </div>
      </body>
    </html>
  );
}
