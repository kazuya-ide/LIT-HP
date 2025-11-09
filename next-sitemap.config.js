/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.lit4.net", // ← 本番URL
  generateRobotsTxt: true,          // robots.txt 自動生成
  sitemapSize: 7000,                // 1ファイルあたりのURL上限
  outDir: "./public",               // 出力ディレクトリ
  changefreq: "weekly",             // クロール頻度（参考情報）
  priority: 0.7,                    // ページ優先度（参考情報）
  exclude: ["/404", "/500"],        // 除外ページ

  // ✅ robots.txtとsitemap.xmlの設定
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://www.lit4.net/sitemap.xml",
    ],
  },
};
