export default function Overview() {
  return (
    <section className="max-w-3xl mx-auto bg-white rounded-2xl p-10 my-12 shadow-sm scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">会社概要</h2>
      <table className="w-full text-left border-separate [border-spacing:0.5rem] text-gray-700 leading-relaxed">
        <tbody>
          <tr>
            <th className="w-36 font-semibold">会社名</th>
            <td>合同会社LIT</td>
          </tr>
          <tr>
            <th className="font-semibold">代表社員</th>
            <td>堀内 勝</td>
          </tr>
          <tr>
            <th className="font-semibold">所在地</th>
            <td>
              〒063-0061 北海道札幌市西区西町北14丁目1-15 ホクシンビル3F
            </td>
          </tr>
          <tr>
            <th className="font-semibold">設立</th>
            <td>2020年4月1日</td>
          </tr>
          <tr>
            <th className="font-semibold">業務内容</th>
            <td>
              Web制作／システム開発／警備業務／建設サポート／飲食運営
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
