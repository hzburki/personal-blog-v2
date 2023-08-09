import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex flex-col py-4 sm:flex-row sm:justify-between sm:px-4'>
      {/* Left Container */}
      <div className='mb-2 flex justify-center text-2xl sm:mb-0 sm:justify-start'>
        <Link href='/' className='font-shantell-sans hover:font-semibold'>
          hzburki.com
        </Link>
      </div>

      {/* Creates a navbar only on small screens */}
      <div className='mb-4 border-b-2 shadow sm:hidden' />

      {/* Right Container */}
      <div className='flex flex-row justify-evenly gap-0 text-2xl sm:gap-8'>
        <Link className='w-full text-center hover:font-bold' href='/about-me'>
          About
        </Link>
        <Link className='w-full text-center hover:font-bold' href='/blog'>
          Blog
        </Link>
      </div>
    </header>
  );
}
