import fs from 'fs';
import React from 'react';
import Markdown from 'markdown-to-jsx';

const getPostContent = (slug: string) => {
  const folder = 'posts';
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, 'utf8');

  return content;
};

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params: { slug } }: BlogPageProps) {
  const postContent = getPostContent(slug);

  return (
    <article className='prose w-full max-w-none py-8'>
      <Markdown>{postContent}</Markdown>;
    </article>
  );
}
