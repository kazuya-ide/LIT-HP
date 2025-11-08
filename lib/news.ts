import fs from "fs";
import path from "path";
import matter from "gray-matter";

const newsDir = path.join(process.cwd(), "content/news");

// 全記事取得
export function getAllNews() {
  const files = fs.readdirSync(newsDir);
  return files
    .map((file) => {
      const fullPath = path.join(newsDir, file);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContents);

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

// slug指定で記事取得
export function getNewsBySlug(slug: string) {
  const files = fs.readdirSync(newsDir);
  for (const file of files) {
    const fullPath = path.join(newsDir, file);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);
    if (data.slug === slug) {
      return { ...data, content };
    }
  }
  return null;
}
