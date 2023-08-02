import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border py-4 flex flex-col sm:flex-row sm:justify-between">
      {/* Left Container */}
      <div className="flex text-2xl justify-center mb-2 sm:mb-0 sm:justify-start">
        <Link
          href="/"
          className="hover:underline hover:font-bold font-semibold font-shantell-sans"
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
  );
}
