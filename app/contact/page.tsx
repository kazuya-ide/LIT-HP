"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
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

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setFormStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <section className="relative bg-[#ededed] text-[#232323] py-28 px-6 overflow-hidden">
      {/* === 背景装飾（微光グラデーション） === */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.6),transparent_80%)]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === タイトル === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-5xl font-extrabold text-[#111] tracking-tight mb-4">
          お問い合わせ
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          合同会社LITへのご相談・お見積もり・採用・取材に関するご連絡は
          下記フォームよりお送りください。  
          内容を確認のうえ、担当者よりご返信いたします。
        </p>
      </motion.div>

      {/* === フォーム === */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-neutral-200 p-10 space-y-6"
      >
        {/* お名前 */}
        <div>
          <label htmlFor="name" className="block font-semibold mb-2">
            お名前
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="例：山田 太郎"
              className={`w-full pl-10 py-3 border ${
                errorMessages.name ? "border-red-400" : "border-gray-300"
              } rounded-lg bg-gray-50 text-[#232323] placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-all`}
            />
          </div>
          {errorMessages.name && (
            <p className="text-red-500 text-sm mt-1">{errorMessages.name}</p>
          )}
        </div>

        {/* メールアドレス */}
        <div>
          <label htmlFor="email" className="block font-semibold mb-2">
            メールアドレス
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="例：info@lit4.net"
              className={`w-full pl-10 py-3 border ${
                errorMessages.email ? "border-red-400" : "border-gray-300"
              } rounded-lg bg-gray-50 text-[#232323] placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-all`}
            />
          </div>
          {errorMessages.email && (
            <p className="text-red-500 text-sm mt-1">{errorMessages.email}</p>
          )}
        </div>

        {/* メッセージ */}
        <div>
          <label htmlFor="message" className="block font-semibold mb-2">
            お問い合わせ内容
          </label>
          <div className="relative">
            <FaComment className="absolute left-3 top-3 text-gray-400" />
            <textarea
              id="message"
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="例：Webサイト制作・システム開発の相談など"
              className={`w-full pl-10 py-3 border ${
                errorMessages.message ? "border-red-400" : "border-gray-300"
              } rounded-lg bg-gray-50 text-[#232323] placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-all`}
            />
          </div>
          {errorMessages.message && (
            <p className="text-red-500 text-sm mt-1">
              {errorMessages.message}
            </p>
          )}
        </div>

        {/* ボタン */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          disabled={formStatus === "loading"}
          className={`w-full py-3 rounded-full font-bold text-lg flex items-center justify-center bg-[#232323] text-white hover:bg-white hover:text-[#232323] border border-[#232323] transition-all duration-300 ${
            formStatus === "loading"
              ? "opacity-70 cursor-not-allowed"
              : "hover:shadow-md"
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
        </motion.button>

        {/* 結果メッセージ */}
        {formStatus === "success" && (
          <p className="text-green-600 text-center mt-3">
            ✅ 送信が完了しました。担当者よりご連絡いたします。
          </p>
        )}
        {formStatus === "error" && (
          <p className="text-red-600 text-center mt-3">
            ⚠️ 送信に失敗しました。内容をご確認ください。
          </p>
        )}
      </motion.form>
    </section>
  );
}
