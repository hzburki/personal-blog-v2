import Link from 'next/link';
import Image from 'next/image';

import ASSETS from '@/images';
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
    <div className='flex flex-col flex-wrap justify-center gap-4  py-8 pt-[1vh] md:pt-[5vh]'>
      <div className='flex justify-center'>
        <Image
          src={HI_THREE}
          priority={true}
          alt='hzburki hey bitmoji'
          className='h-60 w-auto rounded-e-full'
        />
      </div>

      {/* Hero Section */}
      <div className='my-4 flex flex-col gap-8 px-4 xl:px-0'>
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
      <div className='flex flex-col items-start gap-8 px-4 xl:px-0'>
        <div className='flex flex-col gap-2'>
          <SectionTitle text='About Me' size='h2' textPosition='text-left' />

          <h2 className='text-xl text-gray-800'>
            Co-Founder & CTO @{' '}
            <a
              className='text-gray-800 hover:font-bold  '
              target='_blank'
              href='https://numuworld.com'
            >
              Numu
            </a>
          </h2>
        </div>

        <div className='flex flex-col gap-4 text-gray-800 md:w-2/3'>
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
            <Link
              href='/journey'
              className='text-gray-800 underline hover:font-bold  '
            >
              My Journey
            </Link>{' '}
            or to read more my technical adventures head over to my{' '}
            <Link
              href='/blog'
              className='text-gray-800 underline hover:font-bold  '
            >
              Blog
            </Link>
            .{' '}
          </p>
        </div>
      </div>

      {/* Divider */}
      <Divider />

      <div className='flex'>
        <div className='hidden md:block md:w-3/4' />

        <div className='flex w-full flex-col gap-4 px-4 lg:w-1/4 xl:px-0'>
          <SectionTitle
            textPosition='text-right'
            text='Connect with me'
            size='h2'
          />

          <div className='flex flex-col items-end gap-1'>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-gray-800'
            >
              <div className='flex flex-row gap-2'>
                <LinkedInIcon />
                <p>LinkedIn</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-gray-800'
            >
              <div className='flex flex-row gap-2'>
                <GithubIcon />
                <p>Github</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-gray-800'
            >
              <div className='flex flex-row gap-2'>
                <StackoverflowIcon />
                <p>Stackoverflow</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-gray-800'
            >
              <div className='flex flex-row gap-2'>
                <TwitterIcon />
                <p>Twitter</p>
              </div>
            </a>
            <a
              href=''
              className='text-gray-800 hover:font-bold hover:text-gray-800'
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
