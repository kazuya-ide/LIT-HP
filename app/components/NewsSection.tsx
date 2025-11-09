import Link from "next/link";
import { getAllNews } from "@/lib/news";

export default function NewsSection() {
  const news = getAllNews();
  return (
    <section className="w-full px-4 py-20 bg-[#f6f6f6] border-t border-[#ccc]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-[#232323] mb-8 tracking-tight">
          NEWS
        </h2>
        <hr className="border-t border-[#bbb] mb-6" />
        <ul className="divide-y divide-[#ccc]">
          {news.slice(0, 3).map((item) => (
            <li
              key={item.slug}
              className="flex flex-col md:flex-row items-start md:items-center py-7"
            >
              <span className="text-sm md:w-32 font-bold text-[#999] uppercase">
                RELEASE
              </span>
              <span className="text-sm md:w-40 text-[#232323]">
                {new Date(item.date).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                })}
              </span>
              <Link
                href={`/news/${item.slug}`}
                className="font-bold text-lg md:text-xl text-[#232323] hover:underline ml-0 md:ml-8 transition-colors duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/news"
            className="inline-block bg-[#232323] px-8 py-3 text-lg font-extrabold text-white tracking-tight rounded-full shadow-md hover:shadow-lg hover:bg-[#111] transition-all duration-300"
          >
            READ MORE{" "}
            <span className="inline-block ml-2 text-2xl align-middle">
              &raquo;
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
