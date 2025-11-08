import React from "react";
import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "事業紹介｜LITグループ",
  description:
    "LITグループの事業紹介ページ。探偵・警備・建設・飲食・ITなど幅広い分野で地域社会に貢献しています。",
  alternates: { canonical: "https://lit4.net/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
