import Image from "next/image";
import { Building2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 px-6 text-center bg-white shadow-sm relative overflow-hidden">
      {/* 背景画像（LCP用 priority） */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-office.jpg" // ⚠️ 要追加: public/hero-office.jpg
          alt="オフィスのイメージ写真"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-10"
        />
      </div>

      <div className="flex flex-col items-center gap-3 mb-4">
        <Building2 className="w-12 h-12 text-gray-600" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          COMPANY PROFILE
        </h1>
      </div>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        北海道から社会をより良く。建設・警備・IT・飲食を通じて地域と共に成長する、
        <br className="hidden md:inline" />
        合同会社LITの会社概要をご紹介します。
      </p>
    </section>
  );
}
