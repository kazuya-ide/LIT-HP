import WorksClient from "./WorksClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "実績紹介｜LITグループ",
  description:
    "LITグループの実績紹介ページ。警備・探偵・建設・飲食・Web制作の各分野での活動実績をご紹介します。",
  alternates: { canonical: "https://lit4.net/works" },
};

export default function WorksPage() {
  return <WorksClient />;
}
