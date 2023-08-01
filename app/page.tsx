import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="px-6 py-4 max-w-4xl mx-auto flex flex-col sm:flex-row sm:justify-between">
        {/* Left Container */}
        <div className="flex border text-3xl justify-center mb-2 sm:mb-0 sm:justify-start">
          <Link
            href="/"
            className="hover:underline hover:font-bold font-semibold"
          >
            hzburki.com
          </Link>
        </div>

        {/* Right Container */}
        <div className="border text-2xl flex flex-row justify-evenly gap-4">
          <Link className="hover:underline hover:font-bold" href="/about-me">
            About
          </Link>
          <Link className="hover:underline hover:font-bold" href="/blog">
            Blog
          </Link>
        </div>
      </header>
      <footer className="text-center py-2">Made with NextJS + Markdown</footer>
    </main>
  );
}
