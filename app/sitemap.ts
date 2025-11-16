import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

export const runtime = "nodejs"; // fs利用を明示

const SITE =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://lit4.net").replace(/\/+$/, "");

// 静的ページ（必要に応じて追加）
const staticPaths: string[] = [
  "/",
  "/about",
  "/services",
  "/works",
  "/news",
  "/column",
  "/faq",
  "/contact",
  "/privacy-policy",
];

// /content/{dir}/*.md を列挙
function listMdSlugs(dir: string): { slug: string; mtime: Date }[] {
  const full = path.join(process.cwd(), "content", dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full, { withFileTypes: true })
    .filter((d) => d.isFile() && d.name.endsWith(".md"))
    .map((d) => {
      const file = path.join(full, d.name);
      const stat = fs.statSync(file);
      return { slug: d.name.replace(/\.md$/, ""), mtime: stat.mtime };
    });
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((p) => ({
    url: `${SITE}${p}`,
    lastModified: now,
    changeFrequency: (p === "/" ? "daily" : "weekly") as
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never",
    priority: p === "/" ? 1.0 : 0.8,
  }));

  const newsEntries: MetadataRoute.Sitemap = listMdSlugs("news").map(
    ({ slug, mtime }) => ({
      url: `${SITE}/news/${slug}`,
      lastModified: mtime,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  const columnEntries: MetadataRoute.Sitemap = listMdSlugs("column").map(
    ({ slug, mtime }) => ({
      url: `${SITE}/column/${slug}`,
      lastModified: mtime,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [...staticEntries, ...newsEntries, ...columnEntries];
}


