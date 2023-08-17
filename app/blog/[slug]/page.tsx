import fs from 'fs';
import React from 'react';
import Image from 'next/image';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

import SectionTitle from '@/components/typography/section-title.comp';

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
  const folder = 'posts/';
  const files = fs.readdirSync(folder);

  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace('.md', '');
      return {
        params: { slug },
      };
    });
};

export default function BlogPage({ params: { slug } }: BlogPageProps) {
  const post = getPostContent(slug);

  return (
    <div className='prose flex w-full max-w-none flex-col items-center justify-center py-8'>
      <Image
        alt={slug}
        width={1024}
        height={570}
        src={post.data.image}
        className='mb-0 lg:rounded-lg lg:shadow'
      />

      <SectionTitle
        size='h2'
        text={post.data.title}
        textPosition='text-center'
      />

      <time dateTime={post.data.date}>
        {new Date(post.data.date).toLocaleDateString()}
      </time>

      <article className='p-2 lg:px-0'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}
