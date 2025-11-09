"use client";

import { useState } from "react";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessages, setErrorMessages] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");
    setErrorMessages({});

    // --- 入力バリデーション ---
    let hasError = false;
    const newErrorMessages: {
      name?: string;
      email?: string;
      message?: string;
    } = {};

    if (!name.trim()) {
      newErrorMessages.name = "お名前をご入力ください。";
      hasError = true;
    }
    if (!email.trim()) {
      newErrorMessages.email = "メールアドレスをご入力ください。";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrorMessages.email = "有効なメールアドレス形式でご入力ください。";
      hasError = true;
    }
    if (!message.trim()) {
      newErrorMessages.message = "お問い合わせ内容をご入力ください。";
      hasError = true;
    }

    if (hasError) {
      setErrorMessages(newErrorMessages);
      setFormStatus("error");
      return;
    }

    // --- 送信処理 ---
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        console.error("送信エラー:", errorData);
        setFormStatus("error");
      }
    } catch (error) {
      console.error("通信エラー:", error);
      setFormStatus("error");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-950 via-purple-950 to-indigo-900 text-white">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r from-indigo-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          お問い合わせ
        </h2>
        <p className="text-center text-gray-300 mb-10 leading-relaxed">
          合同会社LITへのご相談・お見積もり依頼・取材・採用に関するお問い合わせは、
          以下のフォームよりご連絡ください。
          <br />
          内容を確認のうえ、担当者より2営業日以内にご返信いたします。
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/10 space-y-6"
        >
          {/* お名前 */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              お名前
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full pl-10 py-2 rounded-lg bg-white/10 border ${
                  errorMessages.name ? "border-red-500" : "border-white/20"
                } text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all`}
                placeholder="例：山田 太郎"
              />
            </div>
            {errorMessages.name && (
              <p className="text-red-400 text-sm mt-1">{errorMessages.name}</p>
            )}
          </div>

          {/* メールアドレス */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold mb-2"
            >
              メールアドレス
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full pl-10 py-2 rounded-lg bg-white/10 border ${
                  errorMessages.email ? "border-red-500" : "border-white/20"
                } text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all`}
                placeholder="例：info@lit4.net"
              />
            </div>
            {errorMessages.email && (
              <p className="text-red-400 text-sm mt-1">{errorMessages.email}</p>
            )}
          </div>

          {/* メッセージ */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold mb-2"
            >
              お問い合わせ内容
            </label>
            <div className="relative">
              <FaComment className="absolute left-3 top-3 text-gray-400" />
              <textarea
                id="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full pl-10 py-2 rounded-lg bg-white/10 border ${
                  errorMessages.message ? "border-red-500" : "border-white/20"
                } text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-all`}
                placeholder="例：Web制作・システム開発に関するご相談など"
              />
            </div>
            {errorMessages.message && (
              <p className="text-red-400 text-sm mt-1">
                {errorMessages.message}
              </p>
            )}
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            disabled={formStatus === "loading"}
            className={`w-full py-3 rounded-lg font-bold text-lg flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md transition-all ${
              formStatus === "loading"
                ? "opacity-70 cursor-not-allowed"
                : "hover:scale-[1.02]"
            }`}
          >
            {formStatus === "loading" ? (
              <div className="animate-spin h-5 w-5 border-t-2 border-b-2 border-white rounded-full" />
            ) : (
              <>
                送信する
                <FaPaperPlane className="ml-2" />
              </>
            )}
          </button>

          {/* 送信結果 */}
          {formStatus === "success" && (
            <p className="text-green-400 text-center mt-3">
              送信が完了しました。担当者よりご連絡いたします。
            </p>
          )}
          {formStatus === "error" && (
            <p className="text-red-400 text-center mt-3">
              送信に失敗しました。入力内容をご確認ください。
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
