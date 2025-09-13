import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen -mt-24 relative p-24 flex items-center justify-center">
      <Image fill className="object-cover" src="/hero.webp" alt="Hero" />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm" />
      <div className="flex flex-col gap-10 text-white relative z-10">
        <h1 className="uppercase tracking-widest font-semibold text-5xl max-w-screen-md text-center">
          Find your new home with Fire Homes
        </h1>
        <Link
          href="/property-search"
          className="mx-auto p-6 text-lg gap-4 flex items-center bg-white text-sky-900 rounded-lg font-semibold hover:bg-slate-200"
        >
          <SearchIcon /> Search Properties
        </Link>
      </div>
    </main>
  );
}
