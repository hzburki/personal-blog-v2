import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex flex-col px-0 py-4 sm:flex-row sm:justify-between sm:px-4 xl:px-0'>
      {/* Left Container */}
      <div className='flex justify-center pb-2 text-2xl shadow-sm sm:justify-start sm:pb-0 sm:shadow-none'>
        <Link href='/' className='font-shantell-sans hover:font-semibold'>
          hzburki.com
        </Link>
      </div>

      {/* Creates a navbar only on small screens */}
      <div className='-b-2 mb-4 shadow-sm sm:hidden' />

      {/* Right Container */}
      <div className='flex flex-row justify-evenly gap-0 text-2xl sm:gap-8'>
        <Link className='w-full text-center hover:font-bold' href='/journey'>
          Journey
        </Link>
        <Link className='w-full text-center hover:font-bold' href='/blog'>
          Blog
        </Link>
      </div>
    </header>
  );
}
