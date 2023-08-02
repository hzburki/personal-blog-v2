import ASSETS from '@/assets';
import Image from 'next/image';
import Link from 'next/link';

const { HI_THREE } = ASSETS.BITMOJI;

export default function Home() {
  return (
    <div className='mt-[5vh] flex flex-col flex-wrap justify-center gap-4 py-6'>
      <div className='flex justify-center'>
        <Image
          alt='hzburki hey bitmoji'
          className='h-60 w-auto rounded-e-full grayscale'
          src={HI_THREE}
        />
      </div>

      {/* Hero Section */}
      <div className='my-4 flex flex-col gap-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold text-blue-600'>
            Haseeb Zia Burki
          </h1>
          <h2 className='text-xl font-light text-gray-800'>
            Software Engineer
          </h2>
        </div>

        <div className='mx-auto flex max-w-xl flex-col gap-4 text-center text-lg text-gray-800'>
          <p>
            I’m a first time startup founder, a software engineer, a full stack
            web developer, a casual blogger and a tech enthusiast.
          </p>
          <p>Continue ⬇️ to read more about me 😃</p>
        </div>
      </div>

      {/* Divider */}
      <div className='h-40' />

      {/* About Me Section */}
      <div className='flex flex-col items-start gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-semibold text-blue-600'>About Me</h1>

          <h2 className='text-xl text-gray-800'>
            Co-Founder & CTO @{' '}
            <a
              className='text-blue-600 hover:font-bold hover:underline'
              target='_blank'
              href='https://numuworld.com'
            >
              Numu
            </a>
          </h2>
        </div>

        <div className='flex w-2/3 flex-col gap-4 text-gray-800'>
          <p>
            Numu is an end to end influencer marketing platform which works with
            social media platforms like Instagram and Tiktok.
          </p>
          <p>
            I lead the technical team of 15 people situated in{' '}
            <span className='text-green-900 hover:font-bold'>
              Islamabad, Pakistan
            </span>
            . We are responsible for all the technical aspects of Numu from
            software development to DevOps to Quality Assurance.
          </p>
          <p>
            To read more about my experience and achievements go to{' '}
            <Link
              href='/about-me'
              className='text-blue-600 hover:font-bold hover:underline'
            >
              My Journey
            </Link>{' '}
            or to read more my technical adventures head over to my{' '}
            <Link
              href='/blog'
              className='text-blue-600 hover:font-bold hover:underline'
            >
              Blog
            </Link>
            .{' '}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className='h-40' />

      <div className='flex'>
        <div className='w-3/4' />

        <div className='flex w-1/4 flex-col gap-4'>
          <h4 className='text-right text-2xl leading-6 text-blue-600'>
            Connect with me on <br /> social media
          </h4>
          <div className='gap flex flex-col items-end'>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600 hover:underline'
            >
              LinkedIn
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600 hover:underline'
            >
              Github
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600 hover:underline'
            >
              Stackoverflow
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600 hover:underline'
            >
              Twitter
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600 hover:underline'
            >
              Quora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
