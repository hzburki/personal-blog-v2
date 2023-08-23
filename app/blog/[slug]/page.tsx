import fs from 'fs';
import path from 'path';
import React from 'react';
import Image from 'next/image';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

import SectionTitle from '@/components/typography/section-title.comp';
import { humanReadableDate } from '@/utils/date.utils';
import Link from 'next/link';

const getPostContent = (slug: string) => {
  const folder = 'posts';
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  const frontMatter = matter(content);
  return frontMatter;
};

interface BlogPageProps {
  params: { slug: string };
}

// Create static pages for all blog posts
// Todo: Make this logic re-usable. Its also used in the blog list page
export const generateStaticParams = () => {
  // for reference: https://stackoverflow.com/questions/74924100/vercel-error-enoent-no-such-file-or-directory
  const folder = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(folder);

  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      return {
        slug,
      };
    });

  return slugs;
};

export default function BlogPage({ params: { slug } }: BlogPageProps) {
  const {
    content,
    data: { image, title, date },
  } = getPostContent(slug);

  return (
    <div className='prose flex w-full max-w-none flex-col items-center justify-center py-8'>
      <Image
        alt={slug}
        width={1024}
        height={570}
        src={image}
        className='mb-0 lg:rounded-lg lg:shadow'
      />

      <SectionTitle size='h2' text={title} textPosition='text-center' />

      <time dateTime={date}>{humanReadableDate(date)}</time>

      <article className='p-2 lg:px-0'>
        <Markdown>{content}</Markdown>
      </article>

      <Link href='/blog' className='text-lg no-underline hover:font-bold'>
        &#8592; Go back
      </Link>
    </div>
  );
}
