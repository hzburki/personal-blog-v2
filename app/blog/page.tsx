import fs from 'fs';

import Divider from '@/components/divider.comp';
import PostCard from '@/components/post-card.comp';
import PageTitle from '@/components/typography/page-title.comp';
import Link from 'next/link';

const getPostMetaData = () => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  return {
    slugs: markdownPosts.map((post) => post.replace('.md', '')),
  };
};

export default function Blog() {
  const postMetaData = getPostMetaData();

  return (
    <div className='py-8'>
      <PageTitle text='My Blog' />

      <Divider height='h-20' />

      {postMetaData.slugs.map((slug) => (
        <ul key={slug}>
          <li>
            <Link href={`blog/${slug}`}>{slug}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
