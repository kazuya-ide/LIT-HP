// app/page.tsx
import HeroSection from "./components/Herosection";
import CompanyInformation from "./components/CompanyInfo";
import NewsSection from "./components/NewsSection";



export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* ページ先頭に動画ブロック */}
      <div className="w-screen">
 
      </div>

      {/* 下のコンテンツ */}
      <div className="relative z-10 bg-white mt-16">
        <HeroSection />
            {/* === Mission Section === */}
<section className="bg-neutral-100 py-24 text-center">
  <h2 className="text-4xl font-bold mb-6 text-[#232323]">LITの理念</h2>
  <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
    私たちは「安心・信頼・未来を創る」を理念に掲げ、  
    警備・調査・建設・IT・飲食の5分野で地域社会と共に成長を続けています。
  </p>
</section>
        <CompanyInformation />
        <div className="mt-20" />
  
        <NewsSection />
    
        <div className="mb-20" />
      </div>
    </main>
  );
}
