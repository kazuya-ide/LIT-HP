"use client";
import { useState } from "react";
import Image from "next/image";

export default function License() {
  const [show, setShow] = useState(false);

  return (
    <section className="max-w-3xl mx-auto bg-[#fafafa] rounded-2xl p-10 my-12 shadow-sm text-center scroll-mt-24">
      <h2 className="text-2xl font-bold mb-6">法人情報</h2>

      <button
        onClick={() => setShow(true)}
        className="rounded-lg border border-gray-300 overflow-hidden shadow-sm bg-white"
        aria-label="法人証明画像を拡大表示"
      >
        <Image
          src="/business-license.svg"
          alt="法人証明"
          width={800}
          height={500}
          className="object-contain w-full"
          loading="lazy"
        />
      </button>

      <p className="text-sm text-gray-500 mt-2">クリックで拡大表示</p>

      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setShow(false)}
        >
          <div className="bg-white p-4 rounded-xl max-w-3xl w-[95%] shadow-lg relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShow(false);
              }}
              className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-black"
            >
              ×
            </button>
            <Image
              src="/business-license.svg"
              alt="法人証明 拡大"
              width={900}
              height={600}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      )}

      <div className="mt-5 text-gray-600 text-sm">
        北海道法務局 登記済<br />
        許可証・登録証の原本閲覧・写しの提出に対応可能です。
      </div>
    </section>
  );
}
