import Link from 'next/link';
import Image from 'next/image';

import ASSETS from '@/public/images';
import Divider from '@/components/divider.comp';
import PageTitle from '@/components/typography/page-title.comp';
import SectionTitle from '@/components/typography/section-title.comp';

// Social Media Icons
import {
  GithubIcon,
  LinkedInIcon,
  RedditIcon,
  StackoverflowIcon,
  TwitterIcon,
} from '@/components/social-icons.comp';

const { HI_THREE } = ASSETS.BITMOJI;

export default function Home() {
  return (
    <div className='mt-[5vh] flex flex-col flex-wrap justify-center gap-4 py-8'>
      <div className='flex justify-center'>
        <Image
          alt='hzburki hey bitmoji'
          className='h-60 w-auto rounded-e-full grayscale'
          src={HI_THREE}
        />
      </div>

      {/* Hero Section */}
      <div className='my-4 flex flex-col gap-8 border'>
        <div className='text-center'>
          <PageTitle text='Haseeb Zia Burki' />

          <h2 className='text-xl font-light text-gray-800'>
            Software Engineer
          </h2>
        </div>

        <div className='mx-auto flex max-w-xl flex-col gap-4 text-center text-gray-800'>
          <p>
            I’m a first time startup founder, a software engineer, a full stack
            web developer, a casual blogger and a tech enthusiast.
          </p>
          <p>Continue ⬇️ to read more about me 😃</p>
        </div>
      </div>

      {/* Divider */}
      <Divider />

      {/* About Me Section */}
      <div className='flex flex-col items-start gap-8 border'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl font-semibold text-blue-600'>About Me</h1>

          <h2 className='text-xl text-gray-800'>
            Co-Founder & CTO @{' '}
            <a
              className='text-blue-600 hover:font-bold  '
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
            <span className='cursor-default text-green-900 hover:font-bold'>
              Islamabad, Pakistan
            </span>
            . We are responsible for all the technical aspects of Numu from
            software development to DevOps to Quality Assurance.
          </p>
          <p>
            To read more about my experience and achievements go to{' '}
            <Link href='/about-me' className='text-blue-600 hover:font-bold  '>
              My Journey
            </Link>{' '}
            or to read more my technical adventures head over to my{' '}
            <Link href='/blog' className='text-blue-600 hover:font-bold  '>
              Blog
            </Link>
            .{' '}
          </p>
        </div>
      </div>

      {/* Divider */}
      <Divider />

      <div className='flex border'>
        <div className='w-3/4' />

        <div className='flex w-1/4 flex-col gap-4'>
          <SectionTitle
            textPosition='text-right'
            text='Connect with me on social media'
            size='h3'
          />
          <div className='flex flex-col items-end gap-1'>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600'
            >
              <div className='flex flex-row gap-2'>
                <LinkedInIcon />
                <p>LinkedIn</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600'
            >
              <div className='flex flex-row gap-2'>
                <GithubIcon />
                <p>Github</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600'
            >
              <div className='flex flex-row gap-2'>
                <StackoverflowIcon />
                <p>Stackoverflow</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600'
            >
              <div className='flex flex-row gap-2'>
                <TwitterIcon />
                <p>Twitter</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-blue-600'
            >
              <div className='flex flex-row gap-2'>
                <RedditIcon />
                <p>Reddit</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
