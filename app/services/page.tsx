import React from "react";
import ServicesClient from "./ServicesClient";
import { createMetadata } from "@/lib/seo"; // ← これを追加！

// ✅ 共通SEOテンプレートから生成
export const metadata = createMetadata({
  title: "事業紹介",
  description:
    "LITグループの事業紹介ページ。探偵・警備・建設・飲食・ITなど幅広い分野で地域社会に貢献しています。",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesClient />;
}
