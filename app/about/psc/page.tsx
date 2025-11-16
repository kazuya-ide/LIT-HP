// app/about/psc/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "公安委員会とは―認定・届出の意義と取得難易度、維持管理（警備業/探偵業コラム）｜合同会社LIT",
  description:
    "公安委員会による認定・届出（警備業/探偵業）の意義と難易度、手続の流れ、体制・教育・装備・情報管理、取得後の維持、よくある誤解までを解説。合同会社LITの信頼設計と実践も紹介します。",
  alternates: { canonical: "https://lit4.net/about/psc" },
};

export default function PublicSafetyCommissionPage() {
  return (
    <main className="bg-white">
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">
        {/* ヒーロー */}
        <header className="mb-10 md:mb-12">
          <p className="text-xs tracking-widest text-gray-500 uppercase">
            Insight / Column
          </p>
          <h1 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
            公安委員会とは―認定・届出の意義と取得難易度、維持管理
          </h1>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            公安委員会による<strong>認定・届出</strong>は、単なる形式ではなく社会に対する約束です。
            本稿では、警備業・探偵業を含む枠組み全体を俯瞰し、位置づけと難しさ、運用で求められる現実的なハードル、そして当社の実践をコラム形式でまとめます。
          </p>
        </header>

        {/* 目次 */}
        <nav aria-label="目次" className="mb-10">
          <div className="rounded-xl border border-gray-200 p-5 bg-gray-50">
            <p className="font-bold mb-3">目次</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm md:text-[15px]">
              <li><a className="hover:underline" href="#what">公安委員会とは</a></li>
              <li><a className="hover:underline" href="#difficulty">なぜ取得・届出が難しいのか</a></li>
              <li><a className="hover:underline" href="#process">申請/届出から許可・受理までの流れ</a></li>
              <li><a className="hover:underline" href="#requirements">求められる体制・装備・教育・情報管理</a></li>
              <li><a className="hover:underline" href="#after">許可/届出後の維持管理と更新</a></li>
              <li><a className="hover:underline" href="#lit">LITの取り組みと信頼設計</a></li>
              <li><a className="hover:underline" href="#myth">よくある誤解と注意点</a></li>
              <li><a className="hover:underline" href="#faq">FAQ（よくある質問）</a></li>
              <li><a className="hover:underline" href="#ref">参考情報と次の導線</a></li>
            </ol>
          </div>
        </nav>

        {/* 1. そもそも */}
        <section id="what" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">公安委員会とは</h2>
          <p className="text-[15px] leading-7 text-gray-800">
            公安委員会（都道府県公安委員会）は、警察業務の民主的運営と中立性を確保するための合議制機関です。
            事業に応じて<strong>認定・許可（例：警備業）</strong>や<strong>届出受理（例：探偵業）</strong>等を所掌し、
            事業者が適正な管理の下でサービスを提供できるかを審査・監督します。
            この枠組みは<strong>体制・教育・装備・記録・法令順守</strong>を継続的に問うものです。
          </p>
          <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-[14px] leading-7 text-amber-900">
            <strong className="font-bold">要点:</strong> 「公安委員会による認定/届出」は“看板”ではなく“運用基準”。
            稼働実態と記録の整合性が求められます。
          </div>
        </section>

        {/* 2. 取得難易度 */}
        <section id="difficulty" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">なぜ取得・届出が難しいのか</h2>
          <p className="text-[15px] leading-7 text-gray-800">
            難しさの本質は「書類量」ではなく<strong>実態の整合性</strong>です。
            体制図だけが整っても、教育・訓練の履歴、装備・情報の管理、苦情・事故時の是正、個人情報・映像の取り扱い、
            リスク評価の手順など<strong>運用が回っている証拠</strong>が必要です。
            探偵業では、調査手法の適法性、重要事項説明、契約書面、成果物の管理、違法・差別的依頼の<strong>拒否基準</strong>まで問われます。
          </p>
          <ul className="mt-4 list-disc pl-5 text-[15px] leading-7 text-gray-800 space-y-1">
            <li>書類と現場運用の齟齬が露見しやすい</li>
            <li>教育・点検・是正が循環せず「やりっぱなし」になりがち</li>
            <li>AI/カメラ等は導入済みでも、権限・保管・ログ・監査が弱い</li>
            <li>探偵業では違法依頼の線引き・契約書面・成果物管理が甘くなりがち</li>
          </ul>
          <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 px-4 py-3 text-[14px] leading-7 text-blue-900">
            <strong className="font-bold">ポイント:</strong> 形式ではなく<strong>運用の一貫性</strong>。
            小さな不整合の放置が審査/指導で重大なリスクに化けます。
          </div>
        </section>

        {/* 3. 流れ */}
        <section id="process" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">申請/届出から許可・受理までの主な流れ</h2>
          <ol className="list-decimal pl-5 text-[15px] leading-7 text-gray-800 space-y-2">
            <li><strong>事前準備：</strong>体制整備、責任者選任、規程（教育/情報/個人情報/苦情等）の整合化。</li>
            <li><strong>書類作成：</strong>体制図、責任者資格、装備・施設、教育計画、契約フロー、苦情・事故対応など。</li>
            <li><strong>審査/確認：</strong>書面審査、必要に応じ実地確認。運用の実在性・継続性を確認。</li>
            <li><strong>是正・補正：</strong>指摘事項に対し、形式でなく<strong>運用に落とす是正</strong>を実施。</li>
            <li><strong>許可/受理後：</strong>標識・届出番号の適切な表示、契約/見積/Web等への反映、教育・記録の継続。</li>
          </ol>
          <p className="mt-3 text-[13px] text-gray-500">
            ※ 地域や事案で手続は異なる場合があります。最新要件は所管の公的情報をご確認ください。
          </p>
        </section>

        {/* 4. 要件 */}
        <section id="requirements" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            求められる体制・装備・教育・情報管理（警備業/探偵業の共通と相違）
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold mb-2">人的体制</h3>
              <ul className="list-disc pl-5 text-[15px] leading-7 text-gray-800 space-y-1">
                <li>責任者/管理者の選任、職務分掌と代行体制</li>
                <li>採用時の適正確認・守秘誓約・適性把握</li>
                <li>緊急時の指揮系統と連絡手順</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold mb-2">教育・訓練</h3>
              <ul className="list-disc pl-5 text-[15px] leading-7 text-gray-800 space-y-1">
                <li>法令/接遇/安全配慮/トラブル抑止の基礎</li>
                <li>現場別手順（計画）とレビュー、記録の循環</li>
                <li>探偵業: 調査手法の適法性・違法依頼の線引き・重要事項説明</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold mb-2">装備・情報管理</h3>
              <ul className="list-disc pl-5 text-[15px] leading-7 text-gray-800 space-y-1">
                <li>制服/無線/車両/カメラ等の保守・持出管理</li>
                <li>AI・映像: 権限設計、保管期限、アクセスログ、監査</li>
                <li>探偵業: 成果物の取扱い（第三者提供・廃棄・保管）</li>
              </ul>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold mb-2">契約・苦情・事故対応</h3>
              <ul className="list-disc pl-5 text-[15px] leading-7 text-gray-800 space-y-1">
                <li>契約書/覚書の整合（業法/個人情報/再委託）</li>
                <li>苦情受付～一次対応～是正～報告の循環</li>
                <li>探偵業: 重要事項説明・見積明細・違法/不当依頼の拒否基準</li>
              </ul>
            </div>
          </div>
          <div className="mt-5 rounded-lg border border-gray-200 p-4 text-[14px] leading-7 text-gray-700">
            <strong className="font-bold">補足:</strong>{" "}
            技術は“手段”。評価されるのは<strong>安全に使える運用・責任分界・再現可能な記録</strong>です。
          </div>
        </section>

        {/* 5. 許可/届出後 */}
        <section id="after" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">許可/届出後の維持管理と更新</h2>
          <p className="text-[15px] leading-7 text-gray-800">
            取得・届出はスタートです。人員変動、現場追加、装備更新、委託の変更など、変化を
            「規程・教育・記録」に反映させ続けることが要求されます。
            探偵業では、案件ごとのリスク評価、手法の適法性判断、成果物の処理を記録で説明できることが重要です。
          </p>
          <ul className="mt-4 list-disc pl-5 text-[15px] leading-7 text-gray-800 space-y-1">
            <li>定期/臨時教育の実施と評価、是正の横展開</li>
            <li>AI/映像の運用監査（権限・閲覧・持出・ログ・廃棄）</li>
            <li>提携先のモニタリング（合意書・再委託）</li>
            <li>探偵業: 違法依頼の受付防止と契約・説明書面の適切な運用</li>
          </ul>
        </section>

        {/* 6. 当社の取り組み */}
        <section id="lit" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            合同会社LITの取り組み ― 信頼を設計する
          </h2>
          <p className="text-[15px] leading-7 text-gray-800">
            当社は、公安委員会の<strong>認定（警備）</strong>と<strong>届出（探偵）</strong>の要件を踏まえ、
            <strong>「運用を可視化する仕組み」</strong>に投資しています。警察OB・元刑事が複数在籍し、
            現場のリスク感度と教育の質を高めるだけでなく、AIや映像の運用では
            <em> 権限・ログ・保管・廃棄</em>までをドキュメント化。小さな不整合の芽を早期に摘み取る仕組みづくりに注力しています。
          </p>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold mb-2">実効性を高める4つの柱</h3>
              <ol className="list-decimal pl-5 text-[15px] leading-7 text-gray-800 space-y-1">
                <li>責任者・現場・管理の三位一体運用</li>
                <li>教育・点検・是正を記録で循環</li>
                <li>AI/映像の権限・監査の定期実施</li>
                <li>苦情・事故の一次対応と迅速な共有</li>
              </ol>
            </div>
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="font-bold mb-2">透明性の担保</h3>
              <p className="text-[15px] leading-7 text-gray-800">
                標識・届出番号・契約・報告・見積・Web表示の整合を徹底。匿名の内部提案窓口も用意し、現場の気づきを逃しません。
              </p>
            </div>
          </div>
        </section>

        {/* 7. 誤解 */}
        <section id="myth" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">よくある誤解と注意点</h2>
          <ul className="list-disc pl-5 text-[15px] leading-7 text-gray-800 space-y-2">
            <li>
              <strong>「認定/届出＝何でもできる」ではない:</strong>{" "}
              法の枠組みと現場手順に従い、対応の限界や連携要否を明確化。
            </li>
            <li>
              <strong>「AIがあれば安心」ではない:</strong>{" "}
              運用・倫理・説明責任が伴わない技術はリスクを増幅。
            </li>
            <li>
              <strong>「人手だけで十分」ではない:</strong>{" "}
              人と技術の補完設計が品質と持続性を両立させます。
            </li>
            <li>
              <strong>探偵業の留意:</strong>{" "}
              違法・差別的依頼の拒否、重要事項説明・契約書面、成果物の適正管理は必須。
            </li>
          </ul>
          <div className="mt-4 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-[14px] leading-7 text-rose-900">
            <strong className="font-bold">注意:</strong>{" "}
            本稿は一般的な解説です。個別案件や最新基準は所管の公的情報・契約条件をご確認ください。
          </div>
        </section>

        {/* 8. FAQ */}
        <section id="faq" className="scroll-mt-24 mb-10 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">FAQ（よくある質問）</h2>
          <dl className="divide-y divide-gray-200 border border-gray-200 rounded-xl">
            <div className="p-5">
              <dt className="font-bold">Q. 認定/届出の有無はどこで確認できますか？</dt>
              <dd className="mt-2 text-[15px] leading-7 text-gray-800">
                企業の標識・届出番号、契約書、会社概要等で確認できます。ご依頼前の確認を推奨します。
              </dd>
            </div>
            <div className="p-5">
              <dt className="font-bold">Q. 探偵業ではどんな契約・説明が必要ですか？</dt>
              <dd className="mt-2 text-[15px] leading-7 text-gray-800">
                重要事項説明、見積明細、契約書面、違法・不当依頼の拒否基準、成果物の管理方法などが重要です。
              </dd>
            </div>
            <div className="p-5">
              <dt className="font-bold">Q. AIや映像を使う現場で重要な点は？</dt>
              <dd className="mt-2 text-[15px] leading-7 text-gray-800">
                権限設計、目的限定、保管期限、アクセスログ、監査、廃棄。便利さより説明責任を優先します。
              </dd>
            </div>
          </dl>
        </section>

        {/* 9. 参考と導線 */}
        <section id="ref" className="scroll-mt-24">
          <div className="rounded-xl border border-gray-200 p-5 bg-gray-50">
            <h2 className="text-xl md:text-2xl font-bold mb-3">ご相談・お問い合わせ</h2>
            <p className="text-[15px] leading-7 text-gray-800">
              認定/届出や体制設計、具体的な課題のご相談はお気軽にどうぞ。現場実装から運用監査まで状況に応じてご提案します。
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="/about"
                className="inline-block rounded-full border border-gray-900 px-6 py-3 text-sm font-bold hover:bg-gray-900 hover:text-white transition text-center"
                aria-label="企業情報へ"
              >
                企業情報へ
              </a>
              <a
                href="/contact"
                className="inline-block rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-bold hover:brightness-110 transition text-center"
                aria-label="お問い合わせへ"
              >
                お問い合わせ →
              </a>
            </div>
            <p className="mt-3 text-[12px] text-gray-500">
              ※ 本ページの記載は一般解説です。個別手続・要件は所管の公的情報・契約条件をご確認ください。
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
