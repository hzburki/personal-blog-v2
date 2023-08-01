import "./globals.css";

import Link from "next/link";
import type { Metadata } from "next";

// Importing Google Fonts
import { Nunito } from "next/font/google";

const nunito = Nunito({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "hzburki",
  description: "Personal website and blog of Haseeb Zia Burki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito max-w-4xl mx-auto`}>
        <header className="border py-4 flex flex-col sm:flex-row sm:justify-between">
          {/* Left Container */}
          <div className="flex text-2xl justify-center mb-2 sm:mb-0 sm:justify-start">
            <Link
              href="/"
              className="hover:underline hover:font-bold font-semibold"
            >
              hzburki.com
            </Link>
          </div>

          {/* Right Container */}
          <div className="border text-2xl flex flex-row justify-evenly gap-8">
            <Link className="hover:underline hover:font-bold" href="/about-me">
              About
            </Link>
            <Link className="hover:underline hover:font-bold" href="/blog">
              Blog
            </Link>
          </div>
        </header>

        <main className="border">{children}</main>

        <footer className="border text-center py-2">
          Made with NextJS + Markdown
        </footer>
      </body>
    </html>
  );
}
