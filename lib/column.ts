import fs from "fs";
import path from "path";
import matter from "gray-matter";

// columnディレクトリの絶対パス
const columnDir = path.join(process.cwd(), "content/column");

// 一覧取得
export function getAllColumns() {
  const files = fs.readdirSync(columnDir);
  return files
    .map((file) => {
      const filePath = path.join(columnDir, file);
      const md = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(md);
      return {
        slug: data.slug,
        title: data.title,
        date: data.date,
        image: data.image,
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

// slug指定で本文取得
export function getColumnBySlug(slug: string) {
  const files = fs.readdirSync(columnDir);
  for (const file of files) {
    const filePath = path.join(columnDir, file);
    const md = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(md);
    if (data.slug === slug) {
      return { ...data, content };
    }
  }
  throw new Error("Not found");
}
