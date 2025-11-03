export default function Businesses() {
  const list = [
    "建設・不動産業（北海工務店）",
    "飲食事業（味扉 AJITO）",
    "警備・身辺警護（L.SECURITY）",
    "探偵・調査業（L-Secret Agent）",
    "IT・Web制作（LIT STUDIO）",
  ];

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-2xl p-10 my-12 shadow-sm scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">事業紹介</h2>
      <ul className="space-y-2 text-gray-700 text-lg leading-relaxed">
        {list.map((item) => (
          <li key={item}>・{item}</li>
        ))}
      </ul>
    </section>
  );
}
