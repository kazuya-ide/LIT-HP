"use client";
import { motion } from "framer-motion";

const flow = [
  "01｜ヒアリング",
  "02｜現地確認",
  "03｜お見積り",
  "04｜ご契約",
  "05｜冬季運用開始",
  "06｜点検・診断（無料）",
];

export default function FlowAndPlan() {
  return (
    <section className="bg-neutral-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 導入の流れ */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          導入の流れ
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {flow.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-neutral-700 rounded-xl p-6 text-center"
            >
              <p className="text-xl font-semibold">{step}</p>
            </motion.div>
          ))}
        </div>

        {/* 料金プラン */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          料金プラン例
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-neutral-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">除雪サービス</h3>
            <p className="text-lg">月額 6万円〜 / 出動 3万円〜</p>
          </div>

          <div className="bg-neutral-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">ビルメンテナンス</h3>
            <p className="text-lg">年間契約 / スポット修繕対応</p>
          </div>

          <div className="bg-neutral-800 p-8 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">新電力ソリューション</h3>
            <p className="text-lg">削減率 15〜22%（無料診断）</p>
          </div>
        </div>
      </div>
    </section>
  );
}
