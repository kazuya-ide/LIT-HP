

// app/page.tsx もしくは app/components/HomeMain.tsx
'use client';
import Image from 'next/image';

export default function HomeMain() {
  return (
    <main className="relative h-dvh w-full">
      <Image
        src="/Herosection.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />
    </main>
  );
}
