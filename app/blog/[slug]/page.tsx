import fs from 'fs';
import React from 'react';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

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
    <article className='prose w-full max-w-none py-8'>
      <Markdown>{post.content}</Markdown>
    </article>
  );
}
