import Image from "next/image";
import Link from "next/link";

export default function CompanyInformation() {
  return (
    <section
      className="flex flex-col md:flex-row w-full bg-[#ededed] text-[#232323]"
      aria-labelledby="group-company-title"
    >
      {/* === テキストエリア === */}
      <div className="flex-1 flex flex-col justify-center px-8 py-14 md:px-16 bg-[#ededed]">
        <span className="text-xs font-bold uppercase text-[#999] tracking-widest mb-3">
          COMPANY INFORMATION
        </span>

        <h2
          id="group-company-title"
          className="text-3xl md:text-4xl font-extrabold mb-5"
        >
          グループ会社紹介
        </h2>

        <p className="text-lg text-[#444] leading-relaxed mb-8">
          合同会社LITグループは、北海道を中心に
          「安心・信頼・地域貢献」をテーマとして活動しています。
          建設・飲食・IT・セキュリティ・探偵業など多岐にわたる分野で、
          専門スタッフがそれぞれの現場で活躍しています。
        </p>

        {/* === グループ会社リスト === */}
        <ul className="space-y-5 mb-10">
          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#999] mr-3"></span>
              <span className="font-semibold text-lg">
                北海工務店（建設・不動産）
              </span>
            </div>
            <Link
              href="https://www.sapporo-builderr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://www.sapporo-builderr.com/
            </Link>
            {/* ✅ URL確認：稼働中ドメイン（SSL有効） */}
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#999] mr-3"></span>
              <span className="font-semibold text-lg">
                味扉 AJITO（飲食サービス）
              </span>
            </div>
            <Link
              href="https://www.hotpepper.jp/strJ003324016/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              ホットペッパー店舗ページ
            </Link>
            {/* ⚠️ HotPepperリンクは動作確認要 */}
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#999] mr-3"></span>
              <span className="font-semibold text-lg">
                L.SECURITY（セキュリティ事業）
              </span>
            </div>
            <Link
              href="https://l-security-lit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://l-security-lit.com/
            </Link>
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#999] mr-3"></span>
              <span className="font-semibold text-lg">
                LSA（探偵・調査業）
              </span>
            </div>
            <Link
              href="https://lsa.lit4.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://lsa.lit4.net/
            </Link>
            {/* ⚠️ Vercelドメインは後で正式ドメインへ置換予定 */}
          </li>

          <li className="flex flex-col md:flex-row md:items-center">
            <div className="flex items-center mb-1 md:mb-0">
              <span className="w-2 h-2 rounded-full bg-[#999] mr-3"></span>
              <span className="font-semibold text-lg">
                LIT STUDIO（IT・Webサービス）coming soon...
              </span>
            </div>
            <Link
              href="https://lit4.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#666] hover:text-[#000] md:ml-4 underline underline-offset-4"
            >
              https://lit4.net/
            </Link>
          </li>
        </ul>

        {/* === CTAボタン === */}
        <Link
          href="/group-companies"
          className="inline-block px-8 py-3 rounded-full bg-[#232323] text-white text-base font-bold shadow-md hover:bg-[#444] transition"
        >
          グループ一覧を見る
        </Link>
      </div>

      {/* === イメージエリア === */}
      <div className="flex-1 relative min-h-[360px] hidden md:block bg-[#ededed]">
        <Image
          src="/business-collaboration.jpg"
          alt="LITグループの連携を象徴するビジネスイメージ"
          fill
          style={{
            objectFit: "cover",
            borderRadius: "1.5rem",
            filter: "grayscale(1)",
            backgroundColor: "#ededed",
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        {/* ⚠️ 画像パス確認：
            /public/business-collaboration.jpg が存在するか要チェック */}
      </div>
    </section>
  );
}
