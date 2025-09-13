import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Toaster } from "sonner";
import { HomeIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Homezy Homes",
  description: "Find your dream home",
};

export default function RootLayout({ children }) {
  return (
   <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <nav className="bg-sky-950 text-white p-5 h-24 flex items-center justify-between">
            <Link
              href="/"
              className="text-3xl tracking-widest flex gap-2 items-center uppercase"
            >
              <HomeIcon />
              <span>Homezy Homes</span>
            </Link>
            <ul className="flex gap-6 items-center">
              <li>
                <Link
                  href="/property-search"
                  className="uppercase tracking-widest hover:underline"
                >
                  Property Search
                </Link>
              </li>
              <li>
                <AuthButtons />
              </li>
            </ul>
          </nav>
          {children}
          <Toaster richColors closeButton />
        </AuthProvider>
      </body>
    </html>
  );
}
