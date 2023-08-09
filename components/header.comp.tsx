import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex flex-col  py-4 sm:flex-row sm:justify-between'>
      {/* Left Container */}
      <div className='mb-2 flex justify-center text-2xl sm:mb-0 sm:justify-start'>
        <Link href='/' className='font-shantell-sans hover:font-semibold  '>
          hzburki.com
        </Link>
      </div>

      {/* Right Container */}
      <div className='flex flex-row justify-evenly gap-8  text-2xl'>
        <Link className='hover:font-bold  ' href='/about-me'>
          About
        </Link>
        <Link className='hover:font-bold  ' href='/blog'>
          Blog
        </Link>
      </div>
    </header>
  );
}
