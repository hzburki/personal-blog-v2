import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';

import Divider from '@/components/divider.comp';
import PostCard from '@/components/post-card.comp';
import PageTitle from '@/components/typography/page-title.comp';

const getPostMetaData = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((post) => {
    const fileContent = fs.readFileSync(`${folder}/${post}`, 'utf8');
    const grayMatter = matter(fileContent);
    const slug = post.replace('.md', '');

    return {
      slug,
      url: `/blog/${slug}`,
      date: grayMatter.data.date,
      tags: grayMatter.data.tags,
      title: grayMatter.data.title,
      image: grayMatter.data.image,
      status: grayMatter.data.status,
      categories: grayMatter.data.categories,
      description: grayMatter.data.description,
    };
  });

  return posts;
};

export default function Blog() {
  const postList = getPostMetaData();

  return (
    <div className='py-8'>
      <PageTitle text='My Blog' />

      <Divider height='h-20' />

      {postList.map((postInfo) => (
        <PostCard key={postInfo.slug} post={postInfo} />
      ))}
    </div>
  );
}
