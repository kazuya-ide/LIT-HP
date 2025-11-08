import Link from "next/link";
import Image from "next/image";
import { getAllColumns } from "@/lib/column";

export default function ColumnListPage() {
  const columns = getAllColumns();

  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-16 px-6 text-[#232323]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-10 text-center">
          コラム一覧
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {columns.map((item) => (
            <Link
              key={item.slug}
              href={`/column/${item.slug}`}
              className="group"
            >
              <article className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-transform hover:scale-105">
                {item.image && (
                  <div className="relative w-full h-52">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover brightness-95"
                    />
                  </div>
                )}
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-gray-700">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                  <p className="text-gray-600 text-sm">{item.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
