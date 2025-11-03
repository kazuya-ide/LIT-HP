import Image from "next/image";
import { Quote } from "lucide-react";

const voices = [
  {
    name: "井手 和弥",
    role: "Web制作部",
    message: "お客様の想いを形にするのが私たちの仕事です。",
    image: "/ideface.png",
  },
  {
    name: "堀内 勝",
    role: "代表社員",
    message: "地域に根ざし、信頼を積み重ねていく企業を目指しています。",
    image: "/horiuchi.png",
  },
];

export default function Voices() {
  return (
    <section className="max-w-5xl mx-auto bg-[#fafafa] rounded-2xl p-10 my-12 shadow-sm scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">スタッフの声</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {voices.map((v) => (
          <div
            key={v.name}
            className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
              <Image
                src={v.image}
                alt={`${v.name} の写真`}
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
            <Quote className="w-5 h-5 text-gray-400 mb-2" />
            <p className="text-gray-700 mb-3 leading-relaxed">{v.message}</p>
            <div className="font-bold text-[#232323]">{v.name}</div>
            <div className="text-gray-500 text-sm">{v.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
